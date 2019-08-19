const express = require("express");
const connectDB = require("./config/db");
const app = express();

app.get("/", (req, res) => res.json({ msg: "welcome to the contact keeper" }));

//connect to the database
connectDB();

//define the routes

app.use("/api/users", require("./routes/user"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
