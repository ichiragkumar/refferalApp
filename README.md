Here’s a nicely decorated version with better formatting and clear separation:

---

## 🎯 **API Endpoints for Pub/Sub Invite Handling**

### 🚀 **1. Send an Invite**  
**Endpoint:**  
```http
POST http://localhost:4001/api/invite
```

**Request:**
```bash
curl -X POST http://localhost:4001/api/invite \
-H "Content-Type: application/json" \
-d '{
  "email": "test@example.com"
}'
```

**Response:**
```json
{
  "success": true,
  "message": "Invite sent to test@example.com"
}
```

---

### ✅ **2. Accept an Invite**  
**Endpoint:**  
```http
POST http://localhost:4001/api/invite/accept
```

**Request:**
```bash
curl -X POST http://localhost:4001/api/invite/accept \
-H "Content-Type: application/json" \
-d '{
  "email": "test@example.com"
}'
```

**Response:**
```json
{
  "message": "Invite accepted for test@example.com"
}
```

---

### 📩 **3. Confirm an Invite**  
**Endpoint:**  
```http
POST http://localhost:4001/api/invite/confirm
```

**Request:**
```bash
curl -X POST http://localhost:4001/api/invite/confirm \
-H "Content-Type: application/json" \
-d '{
  "email": "test@example.com"
}'
```

**Response:**
```json
{
  "message": "Invite confirmed for test@example.com"
}
```

---

### ❌ **4. Reject an Invite**  
**Endpoint:**  
```http
POST http://localhost:4001/api/invite/reject
```

**Request:**
```bash
curl -X POST http://localhost:4001/api/invite/reject \
-H "Content-Type: application/json" \
-d '{
  "email": "test@example.com"
}'
```

**Response:**
```json
{
  "message": "Invite rejected for test@example.com"
}
```

---

### 🌟 **Summary**  
| Action | Endpoint | Description |
|--------|----------|-------------|
| 📨 Send Invite | `/api/invite` | Sends an invitation to the user |
| ✅ Accept Invite | `/api/invite/accept` | Marks the invitation as accepted |
| 📩 Confirm Invite | `/api/invite/confirm` | Confirms the user's invitation |
| ❌ Reject Invite | `/api/invite/reject` | Rejects the invitation |

---




