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
    const r = await Results.find();
    res.json(r);
  } catch (error) {
    res.json({error});
  }
}

/** post all result */
export async function storeResult(req, res) {
  
    const { username, result, attempts, points, achived } = req.body;
    if (!username && !result) throw new Error("Data Not Provided...!");

    Results.create(
      { username, result, attempts, points, achived })
      .then (function (err, data) {
        res.json({ msg: "Result Saved Successfully...!" });
      })
      .catch(function (err) {
        console.log(err);
      });
  
}

/** delete all resport */
export async function dropResult(req, res) {
  try {
    await Results.deleteMany();
    res.json({ msg : "Result api Drop(delete) Request"});
  } catch (error) {
    res.json(error);
  }
}
