const supabase = require("../config/supabase");

async function getUserData(id) {
  const { data, error } = await supabase
    .from("students")
    .select("id, name, gender, year, rollnum, hasvoted, role")
    .eq("id", id)
    .single();

  return data;
}

module.exports = getUserData;