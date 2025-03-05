/**
 * Gestisce una richiesta HTTP e verifica la provenienza della richiesta tramite CORS.
 * Se l'origine non è quella autorizzata (simulata come `https://example.com`), restituisce un errore 403.
 * 
 * @param {Object} req - L'oggetto della richiesta HTTP.
 * @param {Object} res - L'oggetto della risposta HTTP.
 */
export default function handlerWithCorsError(req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'https://example.com');  // CORS abilitato solo per example.com

  if (req.headers.origin !== 'https://example.com') {
    return res.status(403).json({ success: false, message: "CORS error: Forbidden origin." });
  }

  res.status(200).json({ success: true, message: "Request successful." });
}
