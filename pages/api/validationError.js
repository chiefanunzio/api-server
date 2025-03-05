/**
 * Gestisce una richiesta HTTP con dati da validare.
 * Se i dati sono incompleti o invalidi (ad esempio, se manca il nome o l'email è malformata),
 * restituisce un errore di validazione 400.
 * 
 * @param {Object} req - L'oggetto della richiesta HTTP contenente i dati.
 * @param {Object} res - L'oggetto della risposta HTTP.
 */
export default function handlerWithValidationError(req, res) {
  const { name, email } = req.body;

  // Simula un errore di validazione
  if (!name || !email || !email.includes("@")) {
    return res.status(400).json({ success: false, message: "Validation error: Invalid data." });
  }

  res.status(200).json({ success: true, message: "Data validated and processed." });
}
