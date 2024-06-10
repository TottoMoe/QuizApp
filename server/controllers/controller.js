import Questions from "../models/questionSchema.js";
import Results from "../models/resultSchema.js";
import { questions, answers } from "../database/data.js";

/** get all question */
export async function getQuestions(req, res) {
  try {
    const q = await Questions.find();
    res.json(q);
  } catch (error) {
    res.json({ error: "error is inside the res" });
  }
}

/** insert all questions */
export async function insertQuestions(req, res) {
  Questions.insertMany({questions : questions, answers : answers})
    .then(function () {
      res.json({ msg: "Data Saved Successfully...!" });
    })
    .catch(function (err) {
      console.log(err);
    });
}


/** deleta all questions */
export async function dropQuestions(req, res) {
  Questions.deleteMany()
    .then(function () {
      res.json({ msg: "Data Deleted Successfully...!" });
    })
    .catch(function (err) {
      console.log(err);
    });
}

/** get all result */
export async function getResult(req, res) {
  try {
    res.json("Result api Get Request");
  } catch (error) {
    res.json(error);
  }
}

/** post all result */
export async function storeResult(req, res) {
  try {
    res.json("Result api Store(post) Request");
  } catch (error) {
    res.json(error);
  }
}

/** delete all resport */
export async function dropResult(req, res) {
  try {
    res.json("Result api Drop(delete) Request");
  } catch (error) {
    res.json(error);
  }
}
