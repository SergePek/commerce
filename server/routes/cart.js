const Cart = require("../models/Cart");

const { verifyTokenAndAdmin, verifyTokenAndAuthorization, verifyToken } = require("./verifyToken");

const router = require("express").Router();

router.post("/", verifyToken, async (req, res) => {
    const newCART = new Cart(req.body);

    try {
        const savedCart = await newCART.save();
        return res.status(200).json(savedCart);
    } catch (err) {
        return res.status(500).json(err);
    }
});

router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {

    try {
        const updatedCart = await Cart.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body
            },
            { new: true });
        return res.status(200).json(updatedCart);

    } catch (err) {
        return res.status(500).json(err);
    }
});

router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
    try {
        await Cart.findByIdAndDelete(req.params.id);
        return res.status(200).json("Cart успешно удален...");
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/find/:userId", verifyTokenAndAuthorization, async (req, res) => {
    try {
        const cart = await Cart.findOne({ userId: req.params.userId });
        return res.status(200).json(cart);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/", verifyTokenAndAdmin, async (req, res) => {
    try {
        const carts = await Cart.find();

        return res.status(200).json(carts);
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;