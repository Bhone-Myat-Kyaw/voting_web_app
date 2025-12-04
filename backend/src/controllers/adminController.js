const supabase = require("../config/supabase");

async function changeRole(req, res) {
  try {
    const { admissionid, role } = req.body;

    const newRole = role.toLowerCase();
    if (!["student", "admin"].includes(newRole)) {
      return res.status(400).json({ error: "Invalid role" });
    }

    const { data, error } = await supabase
      .from("students")
      .update({ role: newRole })
      .eq("admissionid", admissionid)
      .select();

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    if (!data || data.length === 0) {
      return res.status(404).json({ error: "Student not found" });
    }

    return res.status(200).json({ message: "Role updated", data });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

async function selectAllData(req, res) {
  try {
    const { data, error } = await supabase
      .from("students")
      .select("name, admissionid, gender, year, rollnum, role")

    if (error) return res.status(400).json({ message: error.message });

    return res.status(200).json({ message: "Role updated", data });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

async function getVotingStatus(req, res) {
  try {
    const { id } = req.body;

    const { data, error } = await supabase
      .from("vote_setting")
      .select("isvotingopen")
      .eq("studentid", id)
      .single();

    const isVotingOpen = data[0];

    return res.status(400).json({ isVotingOpen })
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

async function setVotingStatus(req, res) {
  try {
    const { id } = req.user;
    const { status } = req.body;
    console.log(id, status);

    const { data, error } = await supabase
      .from("vote_setting")
      .update({ isvotingopen: status })
      .eq("studentid", id);

    if (error) return res.status(400).json({ error: error.message });
    
    return res.status(200).json({ message: "success" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}


module.exports = { changeRole, selectAllData, getVotingStatus, setVotingStatus };
