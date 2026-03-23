import { pool } from "../db/db.js";

export const getUser = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM user");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};