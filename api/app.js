import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import postRoute from "./routes/post.route.js";
import authRouth from "./routes/auth.route.js";

const app = express();

app.use(cors({origin:process.env.CLIENT_URL, credentials: true}));
app.use(express.json());
app.use(cookieParser());

app.use("/api/posts", postRoute);
app.use("/api/auth", authRouth);

app.listen(8080, () => {
    console.log("Server is running!");
});