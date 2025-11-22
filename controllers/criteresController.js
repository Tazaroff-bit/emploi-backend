import pool from "../utils/db.js";

export const saveCriteria = async (req, res) => {
  try {
    const { user_id, secteur, localisation, salaire_min } = req.body;

    await pool.query(
      "INSERT INTO criteres (user_id, secteur, localisation, salaire_min) VALUES ($1, $2, $3, $4)",
      [user_id, secteur, localisation, salaire_min]
    );

    res.json({ success: true });
    
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erreur serveur" });
  }
};

export const getCriteria = async (req, res) => {
  try {
    const id = req.params.id;

    const result = await pool.query(
      "SELECT * FROM criteres WHERE user_id = $1",
      [id]
    );

    res.json(result.rows);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erreur serveur" });
  }
};
