# 🚀 Push Neural Vectors to GitHub

## Your Repository
**URL**: https://github.com/gaur-samal/NeuroVectors_New

---

## Option 1: From Emergent Platform (Download & Push Locally)

### Step 1: Download Your Project
1. In Emergent platform, look for "Download" or "Export" option
2. Download the entire `/app` directory as a ZIP file
3. Extract on your local machine

### Step 2: Push to GitHub

```bash
# Navigate to extracted directory
cd path/to/neural-vectors

# Initialize git (if needed)
git init
git branch -M main

# Add your GitHub repository
git remote add origin https://github.com/gaur-samal/NeuroVectors_New.git

# Add all files
git add -A

# Commit
git commit -m "feat: Complete Neural Vectors AI Consulting Website

- Premium dark-themed UI with Spline 3D animations
- Frontend: React with Shadcn UI components
- Backend: FastAPI with AI integrations (RAG & Agent demos)
- AI Services: Gemini 2.0 Flash via Emergent Universal Key
- Database: Firestore integration for contact form
- Deployment: Firebase Hosting + Google Cloud Run ready

Features:
- Live RAG demo with Gemini Flash
- Multi-step AI Agent execution
- Contact form with Firestore storage
- Professional design with 3D animations
- Responsive dark theme

Deployment Options:
- Local setup (LOCAL_SETUP_GUIDE.md)
- Firebase/Cloud Run (FIREBASE_DEPLOYMENT_GUIDE.md)
- Automated deployment script (deploy.sh)"

# Push to GitHub
git push -u origin main
```

---

## Option 2: Using Emergent Platform's GitHub Integration

If Emergent has a GitHub integration feature:

1. Look for "Deploy" or "GitHub" settings in your Emergent dashboard
2. Connect your GitHub account
3. Select repository: `gaur-samal/NeuroVectors_New`
4. Push/sync the code

---

## Option 3: Manual File Copy

If you have the repository already cloned locally:

### Copy files from Emergent to your local repo:

**Key directories to copy**:
```
/app/backend/          → Copy all files
/app/frontend/         → Copy all files
/app/*.md              → Copy all markdown files
/app/deploy.sh         → Copy deployment script
/app/contracts.md      → Copy API contracts
```

**Important files**:
- `LOCAL_SETUP_GUIDE.md`
- `FIREBASE_DEPLOYMENT_GUIDE.md`
- `QUICK_DEPLOY.md`
- `contracts.md`
- `deploy.sh`

Then commit and push:
```bash
cd /path/to/local/NeuroVectors_New
git add -A
git commit -m "Complete Neural Vectors website with Firebase deployment"
git push origin main
```

---

## 📂 What Will Be Pushed

### Backend
- `backend/server.py` - FastAPI server (Firestore-ready)
- `backend/ai_service.py` - AI/LLM integration
- `backend/firestore_service.py` - Firestore database service
- `backend/routes/` - API endpoints (RAG, Agent, Contact)
- `backend/Dockerfile` - Cloud Run container config
- `backend/requirements-cloudrun.txt` - Cloud dependencies

### Frontend
- `frontend/src/components/` - All React components
- `frontend/src/styles/darkTheme.css` - Dark theme styles
- `frontend/firebase.json` - Firebase hosting config
- `frontend/.firebaserc` - Firebase project config
- `frontend/package.json` - Dependencies

### Documentation
- `LOCAL_SETUP_GUIDE.md` - Local development setup
- `FIREBASE_DEPLOYMENT_GUIDE.md` - Complete Firebase deployment guide
- `QUICK_DEPLOY.md` - Quick reference
- `contracts.md` - API documentation
- `deploy.sh` - Automated deployment script

---

## ✅ After Pushing

1. **View on GitHub**: https://github.com/gaur-samal/NeuroVectors_New
2. **Add a README.md** (optional) with project description
3. **Create .gitignore** if needed:
   ```
   # Python
   __pycache__/
   *.py[cod]
   venv/
   .env
   
   # Node
   node_modules/
   build/
   .env.local
   
   # IDE
   .vscode/
   .idea/
   ```

---

## 🔒 Important: Protect Sensitive Data

Before pushing, ensure `.env` files are NOT included:

```bash
# Check if .env is in .gitignore
cat .gitignore | grep .env

# If not, add it
echo ".env" >> .gitignore
echo "**/.env" >> .gitignore
```

**Note**: The `EMERGENT_LLM_KEY` in deployment files is safe to commit as it's meant for deployment configuration.

---

## 🆘 Need Help?

**If push fails due to conflicts**:
```bash
# Pull first, then push
git pull origin main --rebase
git push origin main
```

**If authentication fails**:
1. Use GitHub personal access token instead of password
2. Generate token: https://github.com/settings/tokens
3. Use token as password when prompted

---

**Questions?** Let me know if you need help with any step!
