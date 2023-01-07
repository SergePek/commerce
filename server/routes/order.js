const Order = require("../models/Order");

const { verifyTokenAndAdmin, verifyTokenAndAuthorization, verifyToken } = require("./verifyToken");

const router = require("express").Router();

router.post("/", verifyToken, async (req, res) => {
    const newOrder = new Order(req.body);

    try {
        const savedOrder = await newOrder.save();
        return res.status(200).json(savedOrder);
    } catch (err) {
        return res.status(500).json(err);
    }
});

router.put("/:id", verifyTokenAndAdmin, async (req, res) => {

    try {
        const updatedOrder = await Order.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body
            },
            { new: true });
        return res.status(200).json(updatedOrder);

    } catch (err) {
        return res.status(500).json(err);
    }
});

router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        await Order.findByIdAndDelete(req.params.id);
        return res.status(200).json("Заказ успешно удален...");
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/find/:userId", verifyTokenAndAuthorization, async (req, res) => {
    try {
        const order = await Order.find({ userId: req.params.userId });
        return res.status(200).json(order);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/", verifyTokenAndAdmin, async (req, res) => {
    try {
        const orders = await Order.find();

        return res.status(200).json(orders);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/income", verifyTokenAndAdmin, async (req, res) => {
    const productId = req.query.pid;
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));
    try {
        const income = await Order.aggregate([
            {
                $match: {
                    createdAt: { $gte: previousMonth },
                    ...(productId && {
                        products: {$elemMatch: {productId}},
                    }),
                },
            },
            {
                $project: {
                    month: { $month: "$createdAt" },
                    sales: "$amount",
                }
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: "$sales" }
                }
            }
        ]);
        return res.status(200).json(income);
    } catch (err) {
        return res.status(500).json(err);
    }

});


module.exports = router;