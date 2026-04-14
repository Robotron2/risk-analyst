# API Documentation

Base URL: `http://localhost:3000/api`

---

### POST `/analyze`

Analyzes an RWA token using Gemini. Implements caching logic so requests within a 24-hour window retrieve historical results, preventing duplicate calls. This endpoint is **non-blocking**. Listen to the WebSocket payload for results.

**Request Body:**
```json
{
  "tokenAddress": "0x1234567890abcdef1234567890abcdef12345678",
  "chain": "hashkey"
}
```

**Successful Response (202 Accepted):**
```json
{
  "status": "processing",
  "tokenAddress": "0x1234567890abcdef1234567890abcdef12345678"
}
```

**Cache Hit Response (200 OK):**
```json
{
  "_id": "60d5ecb8b392d7001f8e4e1a",
  "tokenAddress": "0x1234567890abcdef1234567890abcdef12345678",
  "status": "completed",
  "riskScore": 25,
  "riskLevel": "Low",
  "summary": "AI generated assessment summary details.",
  "complianceFlags": ["Flag1", "Flag2"],
  "recommendation": "Institutional hold.",
  "createdAt": "2024-05-15T10:00:00.000Z"
}
```

---

### Websocket Subscriptions (`/`)

To listen for completion, connect to WS and join the token's channel explicitly:

**Events:**
- Client `join(tokenAddress)`
- Server `analysis_complete` -> payload: `{ tokenAddress, data: ReportObject }`
- Server `analysis_failed` -> payload: `{ tokenAddress, error }`

---

### GET `/report/:tokenAddress`

Retrieves the most recent risk analysis report for a specific token address. Also returns the total amount of historical reports generated.

**Path Variables:**
- `tokenAddress`: The contract address of the RWA token.

**Successful Response (200 OK):**
```json
{
  "_id": "60d5ecb8b392d7001f8e4e1a",
  "tokenAddress": "0x1234567890abcdef1234567890abcdef12345678",
  "riskScore": 25,
  "riskLevel": "Low",
  "summary": "...",
  "complianceFlags": [],
  "recommendation": "...",
  "createdAt": "2024-05-15T10:00:00.000Z",
  "historicalCount": 3
}
```

**Error Response (404 Not Found):**
```json
{
  "error": true,
  "message": "No report found for this token address"
}
```

---

### GET `/history/:tokenAddress`

Retrieves an array of all historical risk analysis reports to track scoring changes over time. Sorted by newest first.

**Path Variables:**
- `tokenAddress`: The contract address of the RWA token.

**Successful Response (200 OK):**
```json
[
  {
    "_id": "...",
    "riskScore": 25,
    "createdAt": "2024-05-15T10:00:00.000Z",
    "..." : "..."
  },
  {
    "_id": "...",
    "riskScore": 45,
    "createdAt": "2024-05-10T08:00:00.000Z",
    "..." : "..."
  }
]
```
*(Returns `[]` if no history exists)*

---

### POST `/log-onchain`

Validates payload required for the frontend before executing an on-chain transaction.

**Request Body:**
```json
{
  "tokenAddress": "0x1234567890abcdef1234567890abcdef12345678",
  "riskScore": 25,
  "riskLevel": "Low"
}
```

**Successful Response (200 OK):**
```json
{
    "success": true,
    "message": "Payload validated. Ready for on-chain submission.",
    "payload": {
        "tokenAddress": "0x1234567890abcdef1234567890abcdef12345678",
        "riskScore": 25,
        "riskLevel": "Low"
    }
}
```
