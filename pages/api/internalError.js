/**
 * Gestisce una richiesta HTTP e restituisce un errore 500 con una probabilità del 50%.
 * Se non si verifica l'errore, restituisce una risposta di successo.
 * 
 * @param {Object} req - L'oggetto della richiesta HTTP.
 * @param {Object} res - L'oggetto della risposta HTTP.
 */
export default function handlerWithInternalError(req, res) {
  const random = Math.random();

  if (random < 0.5) {
    return res.status(500).json({ success: false, message: "Internal server error." });
  }

  res.status(200).json({ success: true, message: "Request processed successfully." });
}
