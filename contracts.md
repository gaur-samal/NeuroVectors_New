# Neural Vectors - Backend Implementation Contracts

## Overview
This document outlines the backend implementation for Neural Vectors AI consulting website, including API contracts, data models, and integration points.

## API Endpoints

### 1. RAG System Demo
**Endpoint:** `POST /api/rag/query`

**Request:**
```json
{
  "query": "What is Retrieval Augmented Generation?"
}
```

**Response:**
```json
{
  "query": "What is Retrieval Augmented Generation?",
  "response": "AI-generated response based on knowledge base",
  "sources": ["Source 1", "Source 2", "Source 3"],
  "model": "gemini-flash"
}
```

**Implementation:**
- Use Gemini Flash LLM
- Simulated RAG with predefined knowledge base
- Return relevant sources

---

### 2. AI Agent Demo
**Endpoint:** `POST /api/agent/execute`

**Request:**
```json
{
  "task": "Analyze market trends for AI consulting"
}
```

**Response:**
```json
{
  "task": "Analyze market trends for AI consulting",
  "steps": [
    {"step": 1, "action": "Searching market data...", "status": "completed"},
    {"step": 2, "action": "Analyzing trends with GPT-5...", "status": "completed"},
    {"step": 3, "action": "Generating insights...", "status": "completed"}
  ],
  "result": "Market analysis result from AI agent",
  "model": "gemini-flash"
}
```

**Implementation:**
- Multi-step AI agent simulation
- Use Gemini Flash for analysis
- Return step-by-step execution

---

### 3. Contact Form
**Endpoint:** `POST /api/contact/submit`

**Request:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "company": "Tech Corp",
  "message": "Interested in AI consulting services"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Thank you for contacting us! We'll get back to you soon.",
  "id": "contact_id_123"
}
```

**Implementation:**
- Store contact submissions in MongoDB
- Return success confirmation

---

## MongoDB Collections

### 1. contacts
```javascript
{
  _id: ObjectId,
  name: String,
  email: String,
  company: String (optional),
  message: String,
  created_at: DateTime,
  status: String (new, contacted, closed)
}
```

---

## Frontend Integration

### Current Mock Data (to be removed):
- `/app/frontend/src/mockData.js` - Contains mock responses for RAG and Agent

### Frontend API Calls:
1. **AIDemos.jsx**
   - Update `handleRagQuery()` to call `/api/rag/query`
   - Update `handleAgentTask()` to call `/api/agent/execute`

2. **Contact.jsx**
   - Update `handleSubmit()` to call `/api/contact/submit`

---

## Environment Variables Required

### Backend (.env)
- `EMERGENT_LLM_KEY` - Universal key for Gemini Flash (auto-fetched)
- `MONGO_URL` - Already configured
- `DB_NAME` - Already configured

---

## Implementation Notes

1. **LLM Integration**: Using Emergent Universal Key with Gemini Flash
2. **Knowledge Base**: Simulated with predefined AI/GenAI knowledge
3. **Agent Simulation**: Multi-step execution with realistic delays
4. **Error Handling**: Proper error responses for all endpoints
5. **CORS**: Already configured in server.py
