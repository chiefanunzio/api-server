/**
 * Gestisce una richiesta HTTP simulando un errore di connessione al database.
 * Se l'errore è casuale (30% delle volte), restituisce un errore 500.
 * Altrimenti, restituisce un JSON con due record simulati.
 * 
 * @param {Object} req - L'oggetto della richiesta HTTP.
 * @param {Object} res - L'oggetto della risposta HTTP.
 */
export default function handlerWithDatabaseError(req, res) {
  const random = Math.random();

  if (random < 0.3) {
    return res.status(500).json({ success: false, message: "Database connection error." });
  }

  res.status(200).json({
    success: true,
    data: [
      { id: 1, name: "Database Record 1" },
      { id: 2, name: "Database Record 2" },
      { id: 3, name: "Database Record 3" },
      { id: 4, name: "Database Record 4" },
      { id: 5, name: "Database Record 5" }
    ]
  });
}
