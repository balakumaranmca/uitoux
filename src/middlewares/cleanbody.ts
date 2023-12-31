import sanitize from "mongo-sanitize";

export default (req: any, res: any, next: any) => {
  try {
    req.body = sanitize(req.body);
    next();
  } catch (error) {
    console.log("clean-body-error", error);
    return res.status(500).json({
      error: true,
      status: 500,
      message: "Could not sanitize body",
    });
  }
};