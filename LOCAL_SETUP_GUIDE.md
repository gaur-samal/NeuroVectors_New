# Neural Vectors - Local Setup Guide

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your local machine:

- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **Python** (v3.11 or higher) - [Download](https://www.python.org/)
- **MongoDB** (v6.0 or higher) - [Download](https://www.mongodb.com/try/download/community)
- **Yarn** package manager - Install via: `npm install -g yarn`
- **Git** - [Download](https://git-scm.com/)

---

## 🚀 Setup Instructions

### Step 1: Clone/Copy the Project

```bash
# If copying from current directory
cp -r /app /path/to/your/local/directory

# Or clone from your repository
git clone <your-repo-url>
cd neural-vectors
```

### Step 2: Backend Setup

#### 2.1 Navigate to Backend Directory
```bash
cd backend
```

#### 2.2 Create Python Virtual Environment
```bash
python3 -m venv venv

# Activate virtual environment
# On MacOS/Linux:
source venv/bin/activate

# On Windows:
venv\\Scripts\\activate
```

#### 2.3 Install Python Dependencies
```bash
pip install -r requirements.txt
```

#### 2.4 Configure Environment Variables

Create a `.env` file in the `/backend` directory:

```bash
# backend/.env
MONGO_URL=mongodb://localhost:27017/
DB_NAME=neural_vectors
EMERGENT_LLM_KEY=sk-emergent-d305199E9E8885e49E
```

**Important Notes:**
- The `EMERGENT_LLM_KEY` is already provided and works with Gemini Flash
- If you want to use your own API keys, replace with:
  - `OPENAI_API_KEY=your-openai-key` for OpenAI
  - `ANTHROPIC_API_KEY=your-anthropic-key` for Claude
  - `GOOGLE_API_KEY=your-google-key` for Gemini

#### 2.5 Start MongoDB

```bash
# Make sure MongoDB is running
# On MacOS (with Homebrew):
brew services start mongodb-community

# On Linux:
sudo systemctl start mongod

# On Windows:
# Start MongoDB from Services or run:
mongod
```

#### 2.6 Start Backend Server

```bash
# Make sure you're in the backend directory with venv activated
uvicorn server:app --reload --host 0.0.0.0 --port 8001
```

Backend should now be running at: `http://localhost:8001`

---

### Step 3: Frontend Setup

#### 3.1 Navigate to Frontend Directory (in a new terminal)
```bash
cd frontend
```

#### 3.2 Install Node Dependencies
```bash
yarn install
```

#### 3.3 Configure Environment Variables

Create a `.env` file in the `/frontend` directory:

```bash
# frontend/.env
REACT_APP_BACKEND_URL=http://localhost:8001
```

#### 3.4 Start Frontend Development Server

```bash
yarn start
```

Frontend should now be running at: `http://localhost:3000`

---

## 🌐 Accessing the Application

Once both servers are running:

- **Frontend (Website)**: http://localhost:3000
- **Backend API**: http://localhost:8001
- **API Documentation**: http://localhost:8001/docs (FastAPI auto-generated docs)

---

## 🏗️ Project Structure

```
neural-vectors/
├── backend/
│   ├── routes/
│   │   ├── rag_routes.py         # RAG demo endpoints
│   │   ├── agent_routes.py       # AI Agent endpoints
│   │   └── contact_routes.py     # Contact form endpoints
│   ├── ai_service.py             # AI/LLM integration logic
│   ├── server.py                 # FastAPI main application
│   ├── requirements.txt          # Python dependencies
│   └── .env                      # Backend environment variables
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── Services.jsx
│   │   │   ├── AIDemos.jsx       # Live AI demos (RAG & Agent)
│   │   │   ├── About.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── Footer.jsx
│   │   ├── styles/
│   │   │   └── darkTheme.css     # Dark theme design system
│   │   ├── App.js                # Main React component
│   │   └── index.js              # React entry point
│   ├── package.json              # Node dependencies
│   └── .env                      # Frontend environment variables
│
├── contracts.md                  # API contracts documentation
└── LOCAL_SETUP_GUIDE.md          # This file
```

---

## 🔧 Common Issues & Troubleshooting

### Issue 1: Backend Port Already in Use
```bash
# Find and kill the process using port 8001
# On MacOS/Linux:
lsof -ti:8001 | xargs kill -9

# On Windows:
netstat -ano | findstr :8001
taskkill /PID <PID_NUMBER> /F
```

### Issue 2: Frontend Port Already in Use
```bash
# The system will prompt to use a different port
# Or kill the process using port 3000
# On MacOS/Linux:
lsof -ti:3000 | xargs kill -9

# On Windows:
netstat -ano | findstr :3000
taskkill /PID <PID_NUMBER> /F
```

### Issue 3: MongoDB Connection Error
```bash
# Check if MongoDB is running
# On MacOS:
brew services list | grep mongodb

# On Linux:
sudo systemctl status mongod

# Restart MongoDB if needed
brew services restart mongodb-community  # MacOS
sudo systemctl restart mongod            # Linux
```

### Issue 4: Python Package Installation Issues
```bash
# Upgrade pip first
pip install --upgrade pip

# Clear pip cache and reinstall
pip cache purge
pip install -r requirements.txt --no-cache-dir
```

### Issue 5: CORS Errors
- Make sure the backend `.env` file has `REACT_APP_BACKEND_URL=http://localhost:8001`
- Restart both frontend and backend servers after changing `.env` files

---

## 🧪 Testing the Application

### 1. Test Backend API Directly

Open a new terminal and test endpoints:

```bash
# Test root endpoint
curl http://localhost:8001/api/

# Test RAG query
curl -X POST http://localhost:8001/api/rag/query \\
  -H "Content-Type: application/json" \\
  -d '{"query": "What is RAG?"}'

# Test AI Agent
curl -X POST http://localhost:8001/api/agent/execute \\
  -H "Content-Type: application/json" \\
  -d '{"task": "Analyze AI market trends"}'

# Test Contact Form
curl -X POST http://localhost:8001/api/contact/submit \\
  -H "Content-Type: application/json" \\
  -d '{"name": "Test User", "email": "test@example.com", "message": "Test message"}'
```

### 2. Test Frontend Features

1. **Hero Section**: Check if 3D Spline animation loads
2. **Services Section**: Verify all three service cards display correctly
3. **AI Demos**: 
   - Click "RAG System Demo" tab
   - Enter a query like "What is Retrieval Augmented Generation?"
   - Verify AI response appears
   - Switch to "AI Agent Demo" tab
   - Enter a task like "Analyze market trends"
   - Verify multi-step execution
4. **Contact Form**: Submit a test message and check MongoDB for the entry

---

## 📊 Viewing Data in MongoDB

### Using MongoDB Compass (GUI)
1. Download [MongoDB Compass](https://www.mongodb.com/try/download/compass)
2. Connect to: `mongodb://localhost:27017`
3. Navigate to `neural_vectors` database
4. View `contacts` collection

### Using Command Line
```bash
# Open MongoDB shell
mongosh

# Switch to database
use neural_vectors

# View all contacts
db.contacts.find().pretty()

# Count contacts
db.contacts.countDocuments()
```

---

## 🔐 API Keys & Configuration

### Using Emergent Universal Key (Default)
The project comes with `EMERGENT_LLM_KEY` which provides access to multiple LLMs including:
- OpenAI GPT models
- Anthropic Claude models
- Google Gemini models

**Current Configuration**: Uses Gemini 2.0 Flash for AI demos

### Using Your Own API Keys

If you want to use your own API keys instead:

1. **For Gemini/Google AI**:
```bash
# In backend/.env
GOOGLE_API_KEY=your-google-api-key
```

2. **For OpenAI**:
```bash
# In backend/.env
OPENAI_API_KEY=your-openai-api-key
```

3. **Update `ai_service.py`**:
```python
# Change from Emergent key to your key
self.api_key = os.getenv('GOOGLE_API_KEY')  # or OPENAI_API_KEY
```

---

## 🚢 Production Deployment

### Environment Variables for Production

**Backend (.env for production)**:
```bash
MONGO_URL=mongodb+srv://user:password@cluster.mongodb.net/
DB_NAME=neural_vectors_prod
EMERGENT_LLM_KEY=your-production-key
```

**Frontend (.env.production)**:
```bash
REACT_APP_BACKEND_URL=https://api.yourdomain.com
```

### Build Commands

```bash
# Frontend build
cd frontend
yarn build

# Backend (using gunicorn for production)
cd backend
pip install gunicorn
gunicorn server:app -w 4 -k uvicorn.workers.UvicornWorker --bind 0.0.0.0:8001
```

---

## 📖 Additional Resources

- **FastAPI Documentation**: https://fastapi.tiangolo.com/
- **React Documentation**: https://react.dev/
- **MongoDB Documentation**: https://www.mongodb.com/docs/
- **Spline 3D**: https://spline.design/
- **Shadcn UI**: https://ui.shadcn.com/
- **Emergent Integrations**: Contact support for detailed documentation

---

## 🆘 Getting Help

If you encounter any issues:

1. Check the logs:
   - Backend: Terminal running `uvicorn`
   - Frontend: Browser console (F12)

2. Common error messages:
   - "Module not found": Run `pip install -r requirements.txt` or `yarn install`
   - "Connection refused": Check if backend server is running
   - "CORS error": Verify `.env` configuration

3. For platform-specific issues (Emergent deployment):
   - Contact Emergent support
   - Check platform documentation

---

## ✨ Features Implemented

✅ Dark-themed modern UI with Spline 3D animations
✅ Fully functional RAG (Retrieval Augmented Generation) demo
✅ Multi-step AI Agent execution demo
✅ Contact form with MongoDB storage
✅ Responsive design for all devices
✅ Professional AI-generated images
✅ Real-time AI responses using Gemini Flash
✅ Clean architecture with separated concerns

---

## 📝 License

This project is proprietary software developed for Neural Vectors.

---

## 👥 Contributors

- **Neural Vectors Team**
- Built with ❤️ by Emergent AI Agent

---

**Last Updated**: January 2025
**Version**: 1.0.0
