const supabase = require("../config/supabase");

async function vote(req, res) {
  try {
    const { voterid, candidateid } = req.body;

    const { data: student, error: studentCheckError } = await supabase
      .from("students")
      .select("hasvoted")
      .eq("id", voterid)
      .single();

    if (studentCheckError || !student) {
      return res.status(400).json({ error: "Student not found" });
    }

    if (student.hasvoted) {
      return res.status(403).json({ error: "You already voted!" });
    }

    const { error: voteError } = await supabase
      .from("votes")
      .insert({ voterid, candidateid });

    if (voteError) {
      return res.status(400).json({ message: "Vote error", error: voteError.message });
    }


    const { error: updateError } = await supabase
      .from("students")
      .update({ hasvoted: true })
      .eq("id", voterid);

    if (updateError) {
      return res.status(400).json({ message: "Vote update error", error: updateError.message });
    }

    return res.status(200).json({ message: "Voted successfully" });

  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

async function selectCandidates(req, res) {
  try {
    const { data, error } = await supabase
      .from("candidates")
      .select(`
        id,
        studentid,
        students (
          name,
          year,
          rollnum,
          gender,
          hasvoted
        )  
      `)

    if (error) return res.status(400).json({ message: error.message });

    return res.status(200).json({ message: "Selected candidates", data });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

async function countVotes(req, res) {
  try {
    const { data, error } = await supabase
      .rpc("count_votes_by_candidate");

    if (error) return res.status(400).json({ error: error.message });

    return res.status(200).json({ votes: data });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

module.exports = { vote, countVotes, selectCandidates };
