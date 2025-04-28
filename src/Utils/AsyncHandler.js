// ------------------- Async await syntax
const AsyncHandler = (fn) => async (req, res, next) => {
  try {
    await fn(req, res, next);
  } catch (error) {
    res.status(error.code || 500).json({
      success: false,
      message: error.message || `Error occured in our Application: ${error}`,
    });
  }
};

// ------------------- promises syntax
// const AsyncHandler = (fn) => {
//  return (req, res, next) => {
//     Promise.resolve(fn(req, res, next)).catch((error) => {
//       next(error);
//     });
//   };
// };
export default AsyncHandler;
