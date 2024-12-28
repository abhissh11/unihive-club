import express from "express";

const PORT = 8000;
const app = express();

// Middleware
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from unihive server");
});
app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});
