# ⚡ Quick Deploy - Neural Vectors

## 🎯 One-Command Deployment

```bash
# Run this from /app directory
./deploy.sh
```

**The script will**:
1. ✅ Enable Google Cloud APIs
2. ✅ Build & deploy backend to Cloud Run
3. ✅ Build & deploy frontend to Firebase Hosting
4. ✅ Configure environment variables automatically

---

## 📋 Before Running

### 1. Install Tools

```bash
# Install gcloud CLI
# https://cloud.google.com/sdk/docs/install

# Install Firebase CLI
npm install -g firebase-tools

# Login
gcloud auth login
firebase login
```

### 2. Create Google Cloud Project

- Go to: https://console.cloud.google.com
- Create new project
- Enable billing
- Note your PROJECT_ID

### 3. Create Firestore Database

- Go to: https://console.cloud.google.com/firestore
- Click "Create Database"
- Choose "Native mode"
- Select region (e.g., us-central1)

---

## 🚀 Manual Deployment (If Script Fails)

### Backend

```bash
cd backend
gcloud builds submit --tag gcr.io/YOUR_PROJECT_ID/neural-vectors-backend
gcloud run deploy neural-vectors-backend \
  --image gcr.io/YOUR_PROJECT_ID/neural-vectors-backend \
  --region us-central1 \
  --allow-unauthenticated \
  --set-env-vars EMERGENT_LLM_KEY=sk-emergent-d305199E9E8885e49E
```

### Frontend

```bash
cd frontend

# Update .env.production
echo "REACT_APP_BACKEND_URL=https://YOUR_BACKEND_URL.run.app" > .env.production

# Build & Deploy
yarn build
firebase deploy --only hosting
```

---

## 🔍 Verify Deployment

1. **Backend Health**: `curl https://YOUR_BACKEND.run.app/api/health`
2. **Frontend**: Visit `https://YOUR_PROJECT_ID.web.app`
3. **Test AI Demos**: Try RAG and Agent systems
4. **Check Firestore**: https://console.cloud.google.com/firestore

---

## 💡 Tips

- **First deployment**: Takes ~5-10 minutes
- **Subsequent deployments**: 2-3 minutes
- **Free tier**: Covers low-medium traffic
- **Logs**: `gcloud run services logs neural-vectors-backend`

---

## 📖 Full Documentation

See: `FIREBASE_DEPLOYMENT_GUIDE.md` for complete details
