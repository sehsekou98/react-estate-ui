import express from "express";
import postRoute from "./routes/post.route.js";
import authRouth from "./routes/auth.route.js";

const app = express();

app.use(express.json())

app.use("/api/posts", postRoute);
app.use("/api/auth", authRouth);

app.listen(8080, () => {
console.log("Server is running!");
});