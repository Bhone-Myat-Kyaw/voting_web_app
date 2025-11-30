const supabase = require("../config/supabase");

async function getUserData(admissionid) {
  const { data, error } = await supabase
    .from("students")
    .select("id, name, gender, year, rollnum, hasvoted, role, admissionid")
    .eq("admissionid", admissionid)
    .single();

  return data;
}

module.exports = getUserData;