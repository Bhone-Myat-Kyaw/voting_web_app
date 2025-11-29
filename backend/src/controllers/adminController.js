const supabase = require("../config/supabase");

async function changeRole(req, res) {
  try {
    const { admissionid, newRole } = req.body;

    const changeTo = newRole.toLowerCase();
    // Validate role
    if (!["student", "admin"].includes(changeTo)) {
      return res.status(400).json({ error: "Invalid role" });
    }

    // Update role
    const { data, error } = await supabase
      .from("students")
      .update({ role: changeTo })
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

async function selectaAllData(req, res) {
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

module.exports = { changeRole, selectaAllData };
