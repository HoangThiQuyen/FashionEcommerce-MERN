const router = require("express");
const productRouter = router.Router();
const {
  createProduct,
  updateProduct,
  getListProduct,
  deleteProduct,
  getProduct,
} = require("../controllers/Product");
const VerifyTokenAndAdmin = require("../middleware/VerifyTokenAndAdmin");

productRouter.post("/", VerifyTokenAndAdmin, createProduct);

productRouter.put("/:id", VerifyTokenAndAdmin, updateProduct);

productRouter.get("/", getListProduct);

productRouter.get("/:id", getProduct);

productRouter.delete("/:id", VerifyTokenAndAdmin, deleteProduct);

module.exports = productRouter;
