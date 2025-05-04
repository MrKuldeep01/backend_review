import AsyncHandler from "../Utils/AsyncHandler.js";

const registerUser = AsyncHandler(async function (req, res) {
  res.status(200).json({ success: true, message: "ok" });
});

export { registerUser };
