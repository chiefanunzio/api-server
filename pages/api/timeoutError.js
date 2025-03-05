/**
 * Gestisce una richiesta HTTP simulando un errore di timeout.
 * La risposta simula un ritardo di 50 secondi, dopo i quali restituisce un errore di timeout (408).
 * 
 * @param {Object} req - L'oggetto della richiesta HTTP.
 * @param {Object} res - L'oggetto della risposta HTTP.
 */
export default function handlerWithTimeout(req, res) {
  setTimeout(() => {
    res.status(408).json({ success: false, message: "Request Timeout. Server is too slow." });
  }, 50000);  // Simuliamo un timeout dopo 50 secondi
}
