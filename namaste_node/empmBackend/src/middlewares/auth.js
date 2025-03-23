const adminAuth = (req, res, next) => {
  console.log("Admin auth is getting checked ! !");
  const token = "xyz";
  const isAdminAuthorized = token === "xyz";
  if (!isAdminAuthorized) {
    res.status(401).json({ success: false, message: "Unauthorised User" });
  } else {
    next();
  }
};

const userAuth = (req, res, next) => {
  console.log("User auth is getting Cheked");
  const token = "xyz";
  const isUserAuthorised = token === "xyz";
  if (!isUserAuthorised) {
    res.status(401).send("Unauthoriosed request");
  } else {
    next();
  }
};

module.exports = {
  adminAuth,
  userAuth,
};
