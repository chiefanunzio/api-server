// server.js
import express from 'express';
import handlerWithDatabaseError from './pages/api/databaseError.js';
import handlerWithTimeout from './pages/api/timeoutError.js';
import handlerWithAuthError from './pages/api/authError.js';
import handlerWithValidationError from './pages/api/validationError.js';
import handlerWithInternalError from './pages/api/internalError.js';
import handlerWithNotFound from './pages/api/notFoundError.js';
import handlerWithMultipleErrors from './pages/api/multipleErrors.js';
import handlerWithCorsError from './pages/api/corsError.js';

const app = express();
const port = 3000

app.use((req, res, next) => {
  res.setHeader('Content-Security-Policy', "default-src 'self'; connect-src 'self' http://localhost:3002;");
  next();
});
// Middleware per il parsing del corpo della richiesta
app.use(express.json());

// Rotte
app.get('/database-error', handlerWithDatabaseError);
app.get('/timeout-error', handlerWithTimeout);
app.get('/auth-error', handlerWithAuthError);
app.post('/validation-error', handlerWithValidationError);
app.get('/internal-error', handlerWithInternalError);
app.get('/not-found', handlerWithNotFound);
app.get('/multiple-errors', handlerWithMultipleErrors);
app.get('/cors-error', handlerWithCorsError);

// Avvio del server
app.listen(port, () => {
  console.log(`Server in ascolto su http://localhost:${port}`);
});