/**
 * Gestisce una richiesta HTTP simulando un errore 404.
 * Se la risorsa richiesta non esiste (simulato come `false`), restituisce un errore 404.
 * 
 * @param {Object} req - L'oggetto della richiesta HTTP.
 * @param {Object} res - L'oggetto della risposta HTTP.
 */
export default function handlerWithNotFound(req, res) {
  const resourceExists = false; // La risorsa non esiste

  if (!resourceExists) {
    return res.status(404).json({ success: false, message: "Resource not found." });
  }

  res.status(200).json({ success: true, message: "Resource found." });
}
