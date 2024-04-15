const express = require("express");
const VisitorCounter = require("./visitors");
const { db } = require("./db");
const app = express();
const port = 84;
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");

const visitorCounter = new VisitorCounter(db);

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "dist")));

app.get("/api/visit", async (req, res) => {
  try {
    let visitorCount;
    if (!req.cookies.visited) {
      visitorCount = await visitorCounter.incrementVisitorCount();
      res.cookie("visited", "1", {
        maxAge: 86400000,
        httpOnly: true,
        path: "/",
      });
    } else {
      visitorCount = await visitorCounter.getCurrentVisitorCount();
    }
    res.status(200).json({ visitorCount: visitorCount });
  } catch (error) {
    console.error("Error in /api/visit:", error);
    res.status(500).json({ error: error.message });
  }
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(port, () => console.log(`Server has started on port: ${port}`));
