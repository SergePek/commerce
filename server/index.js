const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");

const https = require("https");
const fs = require("fs");
const path = require("path");
const cors = require("cors");


dotenv.config();

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("Соединение к базе данных успешно..."))
    .catch((err) => {
        console.log(err);
    });

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);

app.get('/', (req, res) => {
    res.send("Hello from express server.")
})

/* https
    .createServer(
        {
            key: fs.readFileSync(path.join(__dirname, 'cert', 'key.pem')),
            cert: fs.readFileSync(path.join(__dirname, 'cert', 'cert.pem')),

        },
        app)
    .listen(5000, () => {
        console.log('server is runing at port 5000')
    });
 */

app.listen(process.env.PORT || 5000, () => {
    console.log("server is running...")
})
