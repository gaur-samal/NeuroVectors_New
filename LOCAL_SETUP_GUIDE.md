# Neural Vectors - Local Setup Guide

## 📋 Prerequisites

- **Node.js** (v16+) - https://nodejs.org/
- **Python** (v3.11+) - https://www.python.org/
- **MongoDB** (v6.0+) - https://www.mongodb.com/
- **Yarn** - `npm install -g yarn`

---

## 🚀 Quick Setup

### 1. Backend Setup

```bash
cd backend

# Create virtual environment
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Create .env file
cat > .env << 'ENVFILE'
MONGO_URL="mongodb://localhost:27017"
DB_NAME="neural_vectors"
EMERGENT_LLM_KEY=sk-emergent-d305199E9E8885e49E
ENVFILE

# Start backend
uvicorn server:app --reload --host 0.0.0.0 --port 8001
```

### 2. Frontend Setup (New Terminal)

```bash
cd frontend

# Install dependencies
yarn install

# Create .env file
echo "REACT_APP_BACKEND_URL=http://localhost:8001" > .env

# Start frontend
yarn start
```

### 3. Start MongoDB

```bash
# MacOS (Homebrew)
brew services start mongodb-community

# Linux
sudo systemctl start mongod

# Windows - Start from Services
```

---

## 🌐 Access Application

- **Website**: http://localhost:3000
- **API**: http://localhost:8001
- **API Docs**: http://localhost:8001/docs

---

## 📁 Project Structure

```
neural-vectors/
├── backend/
│   ├── routes/
│   │   ├── rag_routes.py       # RAG demo API
│   │   ├── agent_routes.py     # AI Agent API
│   │   └── contact_routes.py   # Contact form API
│   ├── ai_service.py           # AI/LLM logic
│   ├── server.py               # FastAPI app
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Hero.jsx         # Hero with 3D Spline
│   │   │   ├── AIDemos.jsx      # Live AI demos
│   │   │   └── Contact.jsx      # Contact form
│   │   └── styles/
│   │       └── darkTheme.css    # Dark theme
│   └── package.json
│
└── LOCAL_SETUP_GUIDE.md
```

---

## ✨ Features

✅ Dark-themed UI with Spline 3D animations
✅ Live RAG (Retrieval Augmented Generation) demo
✅ Multi-step AI Agent demo powered by Gemini Flash
✅ Contact form with MongoDB storage
✅ Fully responsive design

---

## 🧪 Test APIs

```bash
# RAG Demo
curl -X POST http://localhost:8001/api/rag/query \
  -H "Content-Type: application/json" \
  -d '{"query": "What is RAG?"}'

# AI Agent
curl -X POST http://localhost:8001/api/agent/execute \
  -H "Content-Type: application/json" \
  -d '{"task": "Analyze AI trends"}'

# Contact Form
curl -X POST http://localhost:8001/api/contact/submit \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","message":"Hello"}'
```

---

## 🔧 Troubleshooting

**Port already in use:**
```bash
# Kill process on port 8001
lsof -ti:8001 | xargs kill -9

# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
```

**MongoDB connection error:**
```bash
# Check MongoDB status
brew services list | grep mongodb  # MacOS
sudo systemctl status mongod       # Linux
```

---

## 📊 View MongoDB Data

```bash
mongosh
use neural_vectors
db.contacts.find().pretty()
```

---

## 🔐 Using Your Own API Keys

Replace `EMERGENT_LLM_KEY` in `backend/.env` with:

```bash
# For Google Gemini
GOOGLE_API_KEY=your-google-api-key

# For OpenAI
OPENAI_API_KEY=your-openai-api-key
```

Then update `ai_service.py`:
```python
self.api_key = os.getenv('GOOGLE_API_KEY')
```

---

**Need Help?** Contact Neural Vectors team
