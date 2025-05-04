import AsyncHandler from "../Utils/AsyncHandler.js";

const home = AsyncHandler(async function (req, res) {
  console.log("I am running");
  console.log(req);
  res.status(200).json({
    success: true,
    message: "you are on the correct page with great level of goodness :)",
  });
});
export { home };
