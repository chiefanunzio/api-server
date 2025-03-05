# Progetto API Node.js

Questo progetto espone alcune API utilizzando Node.js e Express per simulare diversi tipi di errori e risposte.

## Prerequisiti
- **Node.js** (versione 14.x o superiore)
- **npm** (incluso con Node.js)

## Installazione
1. Clona il repository:
   ```bash
   git clone <repository-url>
   cd progetto-api
   ```
2. Installa le dipendenze:
   ```bash
   npm install
   ```

## Esecuzione del Server
1. Avvia il server:
   ```bash
   node server.js
   ```
   - **Porta predefinita**: `3002` (modificabile nel codice)
   - **URL base**: `http://localhost:3002/api/`

## Endpoint disponibili
| Endpoint           | Descrizione                                  | Esempio di richiesta                      |
|--------------------|----------------------------------------------|-------------------------------------------|
| `GET /database-error`    | Simula un errore del database                | `http://localhost:3002/api/database-error` |
| `GET /timeout-error`     | Timeout di 50 secondi                        | `http://localhost:3002/api/timeout-error`  |
| `GET /auth-error`        | Errore di autenticazione                     | `http://localhost:3002/api/auth-error`     |
| `GET /validation-error`  | Errore di validazione dati                   | `http://localhost:3002/api/validation-error` |
| `GET /internal-error`    | Errore generico del server                   | `http://localhost:3002/api/internal-error` |
| `GET /not-found`         | Risposta 404 (pagina non trovata)            | `http://localhost:3002/api/not-found`      |
| `GET /multiple-errors`   | Multipli errori contemporaneamente           | `http://localhost:3002/api/multiple-errors` |
| `GET /cors-error`        | Errore CORS (Cross-Origin Resource Sharing)  | `http://localhost:3002/api/cors-error`     |

## Test delle API
- Usa un browser o strumenti come **curl**, **Postman** o **Thunder Client** per effettuare richieste agli endpoint.

## Risoluzione problemi
- **Porta occupata**: Cambia la porta modificando `port` in `server.js`.
- **Errori CORS**: Configura gli header nel server o usa estensioni per bypassare il controllo (es. "Allow CORS" per Chrome).