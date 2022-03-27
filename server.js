require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDatabase = require('./config/MongoDb');
const ImportData = require('./DataImport');
const productRoute = require ("./Routes/ProductRoutes");
const { errorHandler, notFound } = require ("./Middleware/Errors");
const userRouter = require ("./Routes/UserRoutes");
const orderRouter = require ("./Routes/orderRoutes");


connectDatabase();
const app = express();
app.use(cors());
app.use(express.json());

// API
app.use("/api/import", ImportData);
app.use("/api/products", productRoute);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);
app.get("/api/config/paypal", (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID);
});

// ERROR HANDLER
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server run in port ${PORT}`));
