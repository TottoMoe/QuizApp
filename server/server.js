import express from "express";
import morgan from "morgan";
import cors from "cors";
import { config } from "dotenv";
import router from "./router/route.js";

/** import connection file */
import connect from "./database/conn.js";

const app = express();

/** middlewares */
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
config();

/** application port */
const port = process.env.PORT || 8085;



/** routes */
app.use("/api", router); /**apis */

app.get("/", (req, res) => {
  try {
    res.json("Get Request");
  } catch (error) {
    res.json(error);
  }
});

/** start server only when we have vlid connection */
connect().then(() => {
  try{
    app.listen(port, () => {
      console.log(`Server is connected to http://localhost:${port}`);
    });
  } catch (error) {
    console.log("Cannot connect to server");
  }
}).catch((error) => {
  console.log("Invalid database connection");
});


