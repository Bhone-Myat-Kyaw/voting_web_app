function checkRole(req, res, next) {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Forbidden: Only admin" });
    }

    return next();
  } catch (error) {
    return res.status(400).json({ message: "Error from checkRole" });
  }
}

module.exports = checkRole;