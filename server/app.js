// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv").config();

// ℹ️ Connects to the database
require("./db");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

const { isAuthenticated, isAdmin } = require("./middleware/jwt.middleware")


const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);

// 👇 Start handling routes here
const indexRoutes = require("./routes/index.routes");
app.use("/", indexRoutes);

const fruitRoutes = require("./routes/fruit.routes");
app.use("/fruits", isAuthenticated, fruitRoutes);

const authRouter = require("./routes/auth.routes");
app.use("/auth", authRouter);

const adminRouter = require("./routes/admin.routes");
app.use("/admin", isAuthenticated, isAdmin, adminRouter);

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
