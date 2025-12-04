const supabase = require("../config/supabase");

async function checkIsVotingOpen(req, res, next) {
  try {
    const { data, error } = await supabase
      .from("vote_setting")
      .select("*")

    if (error) return res.status(500).json({ message: error.message });

    const setting = data[0];

    if (!setting.isvotingopen) {
      console.log("Form checkVoting middleware: voting is not open")
      return res.status(200).json({
        success: false,
        message: "Not about time",
      });
    }

    return next();
  } catch (error) {
    return res.status(500).json({ message: "Error checking voting status" });
  }
}

module.exports = checkIsVotingOpen;
