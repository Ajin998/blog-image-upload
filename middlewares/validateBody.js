const validateLink = require("./validateLinks");

const validateBody = (req, res, next) => {
  const requiredParams = ["author", "title", "content"];
  let result = requiredParams.every((key) => {
    return req.body[key] && req.body[key].trim().length;
    if (req.body.links) {
      result = validateLink(req.body[key]) && result;
      console.log(result);
    }
  });

  console.log(req.body);
  if (!result) {
    return res.status(400).json({
      message: "Invalid body please check the body!",
    });
  }
  next();
};

module.exports = validateBody;
