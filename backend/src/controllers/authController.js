const bcrypt = require("bcrypt");
const supabase = require("../config/supabase");
const jwt = require("jsonwebtoken");

// Register student
async function login(req, res) {
  try {
    const { admissionid, password } = req.body;

    // Fetch student
    const { data, error } = await supabase
      .from("students")
      .select("name, gender, admissionid, passwordhash")
      .eq("admissionid", admissionid);

    if (error) return res.status(400).json({ error: error.message });

    if (!data || data.length === 0) {
      return res.status(400).json({ error: "Invalid admission ID" });
    }

    const student = data[0];

    // Compare passwords
    const isMatch = await bcrypt.compare(String(password), student.passwordhash);
    if (!isMatch) {
      return res.status(400).json({ error: "Wrong Password" });
    }

    // JWT payload should identify the user
    const accessToken = jwt.sign(
      { admissionid: student.admissionid },
      process.env.JWT_SECRET_KEY,
      { expiresIn: '1h' }
    );

    // Set cookie
    return res
      .cookie("access_token", accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
      })
      .json({
        message: "Login successful",
        student: {
          name: student.name,
          gender: student.gender,
          admissionid: student.admissionid
        }
      });

  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}



// List students
async function getStudents(req, res) {
  try {
    const { data, error } = await supabase
      .from("students")
      .select("name, gender");

    if (error) return res.status(400).json({ error: error.message });

    return res.json({ message: "Students fetched", data });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}

module.exports = { login, getStudents };
