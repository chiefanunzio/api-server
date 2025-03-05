/**
 * Gestisce una richiesta HTTP con errore variabile, in base al parametro `error` nella query.
 * Se il parametro `error` è "timeout", restituisce un errore di timeout (408).
 * Se è "notFound", restituisce un errore 404.
 * Se è "serverError", restituisce un errore 500.
 * Altrimenti, restituisce una risposta di successo.
 * 
 * @param {Object} req - L'oggetto della richiesta HTTP contenente il parametro `error`.
 * @param {Object} res - L'oggetto della risposta HTTP.
 */
export default function handlerWithMultipleErrors(req, res) {
  const errorType = req.query.error;

  switch (errorType) {
    case "timeout":
      return res.status(408).json({ success: false, message: "Request Timeout." });
    case "notFound":
      return res.status(404).json({ success: false, message: "Resource not found." });
    case "serverError":
      return res.status(500).json({ success: false, message: "Internal server error." });
    default:
      res.status(200).json({ success: true, message: "Request processed successfully." });
  }
}
