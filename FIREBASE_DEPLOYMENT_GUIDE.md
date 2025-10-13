# 🚀 Firebase + Google Cloud Deployment Guide

## Neural Vectors - Complete Deployment Instructions

---

## 📋 Prerequisites

1. **Google Cloud Account** with billing enabled
2. **Firebase Project** created
3. **gcloud CLI** installed - https://cloud.google.com/sdk/docs/install
4. **Firebase CLI** installed - `npm install -g firebase-tools`

**Note**: Docker is NOT required! Google Cloud Build will build your Docker container in the cloud automatically.

---

## 🎯 Deployment Architecture

```
Frontend (React) → Firebase Hosting
Backend (FastAPI) → Google Cloud Run
Database → Firestore
AI Services → Gemini Flash (Emergent Universal Key)
```

---

## Part 1: Google Cloud Setup

### Step 1: Initialize Google Cloud

```bash
# Login to Google Cloud
gcloud auth login

# Set your project ID
gcloud config set project YOUR_PROJECT_ID

# Enable required APIs
gcloud services enable run.googleapis.com
gcloud services enable firestore.googleapis.com
gcloud services enable cloudbuild.googleapis.com
```

### Step 2: Create Firestore Database

```bash
# Create Firestore database in your preferred region
# Go to: https://console.cloud.google.com/firestore
# Click "Create Database"
# Choose "Native mode"
# Select your region (e.g., us-central1)
```

---

## Part 2: Backend Deployment to Cloud Run

### Step 1: Prepare Backend

```bash
cd backend

# Create .env file for Cloud Run secrets
cat > .env << 'EOF'
EMERGENT_LLM_KEY=sk-emergent-d305199E9E8885e49E
EOF
```

### Step 2: Build and Deploy to Cloud Run

```bash
# Build Docker image
gcloud builds submit --tag gcr.io/YOUR_PROJECT_ID/neural-vectors-backend

# Deploy to Cloud Run
gcloud run deploy neural-vectors-backend \
  --image gcr.io/YOUR_PROJECT_ID/neural-vectors-backend \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated \
  --set-env-vars EMERGENT_LLM_KEY=sk-emergent-d305199E9E8885e49E \
  --port 8080 \
  --memory 2Gi \
  --timeout 300
```

**Important**: Copy the Cloud Run URL from the output (e.g., `https://neural-vectors-backend-xxxxx.run.app`)

### Step 3: Test Backend

```bash
# Test health endpoint
curl https://YOUR_BACKEND_URL.run.app/api/health

# Test RAG endpoint
curl -X POST https://YOUR_BACKEND_URL.run.app/api/rag/query \
  -H "Content-Type: application/json" \
  -d '{"query": "What is RAG?"}'
```

---

## Part 3: Frontend Deployment to Firebase Hosting

### Step 1: Initialize Firebase

```bash
cd frontend

# Login to Firebase
firebase login

# Initialize Firebase project
firebase init hosting

# Select your project
# Choose "build" as public directory
# Configure as single-page app: Yes
# Don't overwrite index.html: No
```

### Step 2: Update Environment Variables

Edit `frontend/.env.production`:

```bash
# Replace with your actual Cloud Run backend URL
REACT_APP_BACKEND_URL=https://YOUR_BACKEND_URL.run.app
```

Edit `frontend/.firebaserc`:

```json
{
  "projects": {
    "default": "your-actual-project-id"
  }
}
```

### Step 3: Build and Deploy

```bash
# Build production app
yarn build

# Deploy to Firebase Hosting
firebase deploy --only hosting
```

**Your website URL**: `https://your-project-id.web.app`

---

## Part 4: Verification & Testing

### Test Complete Flow

1. **Visit your Firebase Hosting URL**: `https://your-project-id.web.app`

2. **Test AI Demos**:
   - Go to "AI Demos" section
   - Try RAG System: Ask "What is Retrieval Augmented Generation?"
   - Try AI Agent: Task "Analyze AI consulting market trends"

3. **Test Contact Form**:
   - Fill out contact form
   - Submit
   - Verify in Firestore Console: https://console.cloud.google.com/firestore

---

## 📁 Updated Project Structure

```
neural-vectors/
├── backend/
│   ├── Dockerfile                    # NEW: Cloud Run container
│   ├── .dockerignore                 # NEW: Docker ignore
│   ├── requirements-cloudrun.txt     # NEW: Cloud dependencies
│   ├── firestore_service.py          # NEW: Firestore integration
│   ├── routes/
│   │   ├── contact_routes.py         # UPDATED: Uses Firestore
│   ├── server.py                     # UPDATED: Removed MongoDB
│   └── .env                          # Cloud Run secrets
│
├── frontend/
│   ├── firebase.json                 # NEW: Firebase config
│   ├── .firebaserc                   # NEW: Firebase project
│   ├── .env.production               # NEW: Production env vars
│   └── build/                        # Generated after yarn build
│
└── FIREBASE_DEPLOYMENT_GUIDE.md      # This file
```

---

## 🔐 Managing Secrets

### Update Emergent LLM Key

```bash
# Update Cloud Run environment variable
gcloud run services update neural-vectors-backend \
  --region us-central1 \
  --update-env-vars EMERGENT_LLM_KEY=your-new-key
```

### Use Secret Manager (Recommended for Production)

```bash
# Create secret
echo -n "sk-emergent-d305199E9E8885e49E" | \
  gcloud secrets create emergent-llm-key --data-file=-

# Deploy with secret
gcloud run deploy neural-vectors-backend \
  --image gcr.io/YOUR_PROJECT_ID/neural-vectors-backend \
  --update-secrets EMERGENT_LLM_KEY=emergent-llm-key:latest
```

---

## 💰 Cost Optimization

### Cloud Run
- **Free tier**: 2 million requests/month
- **Pay-per-use**: Only charged when backend is processing requests
- **Auto-scaling**: Scales to zero when not in use

### Firebase Hosting
- **Free tier**: 10 GB storage, 360 MB/day transfer
- Perfect for static React builds

### Firestore
- **Free tier**: 1 GB storage, 50K reads/day, 20K writes/day
- Enough for contact form submissions

**Estimated Monthly Cost**: $0-10 for low-medium traffic

---

## 🔧 Troubleshooting

### Backend Not Responding

```bash
# Check Cloud Run logs
gcloud run services logs neural-vectors-backend --region us-central1

# Redeploy
gcloud run deploy neural-vectors-backend \
  --image gcr.io/YOUR_PROJECT_ID/neural-vectors-backend \
  --region us-central1
```

### Frontend Not Loading Backend Data

1. Check `.env.production` has correct Cloud Run URL
2. Rebuild: `yarn build`
3. Redeploy: `firebase deploy --only hosting`
4. Check browser console for CORS errors

### Firestore Permission Errors

```bash
# Set Firestore rules (in Firebase Console)
# Go to: Firestore Database → Rules
# Add:
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /contacts/{document=**} {
      allow read, write: if true;  // Adjust for production
    }
  }
}
```

---

## 🚀 CI/CD Setup (Optional)

### GitHub Actions for Auto-Deploy

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Firebase & Cloud Run

on:
  push:
    branches: [ main ]

jobs:
  deploy-backend:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: google-github-actions/setup-gcloud@v0
        with:
          project_id: ${{ secrets.GCP_PROJECT_ID }}
          service_account_key: ${{ secrets.GCP_SA_KEY }}
      - run: |
          cd backend
          gcloud builds submit --tag gcr.io/${{ secrets.GCP_PROJECT_ID }}/neural-vectors-backend
          gcloud run deploy neural-vectors-backend \
            --image gcr.io/${{ secrets.GCP_PROJECT_ID }}/neural-vectors-backend \
            --region us-central1

  deploy-frontend:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
      - run: |
          cd frontend
          yarn install
          yarn build
      - uses: FirebaseExtended/action-hosting-deploy@v0
        with:
          repoToken: '${{ secrets.GITHUB_TOKEN }}'
          firebaseServiceAccount: '${{ secrets.FIREBASE_SERVICE_ACCOUNT }}'
          channelId: live
          projectId: ${{ secrets.FIREBASE_PROJECT_ID }}
```

---

## 📊 Monitoring

### Cloud Run Metrics

```bash
# View metrics
gcloud run services describe neural-vectors-backend --region us-central1

# Monitor in Console
# https://console.cloud.google.com/run
```

### Firebase Analytics

Enable in Firebase Console:
- Go to Analytics
- Enable Google Analytics
- View traffic, user behavior, etc.

---

## 🔄 Updates & Redeployment

### Update Backend Code

```bash
cd backend
# Make your changes
gcloud builds submit --tag gcr.io/YOUR_PROJECT_ID/neural-vectors-backend
gcloud run deploy neural-vectors-backend \
  --image gcr.io/YOUR_PROJECT_ID/neural-vectors-backend \
  --region us-central1
```

### Update Frontend Code

```bash
cd frontend
# Make your changes
yarn build
firebase deploy --only hosting
```

---

## ✅ Deployment Checklist

- [ ] Google Cloud project created with billing
- [ ] gcloud CLI installed and authenticated
- [ ] Firebase CLI installed and authenticated
- [ ] Firestore database created
- [ ] Backend deployed to Cloud Run
- [ ] Backend URL copied and added to frontend .env.production
- [ ] Frontend built with production env vars
- [ ] Frontend deployed to Firebase Hosting
- [ ] All demos tested on production URL
- [ ] Contact form tested and data visible in Firestore
- [ ] Firestore security rules configured

---

## 🆘 Support

- **Google Cloud Documentation**: https://cloud.google.com/docs
- **Firebase Documentation**: https://firebase.google.com/docs
- **Cloud Run Pricing**: https://cloud.google.com/run/pricing
- **Firebase Pricing**: https://firebase.google.com/pricing

---

**Deployment Complete! 🎉**

Your Neural Vectors website is now live on:
- **Frontend**: https://your-project-id.web.app
- **Backend API**: https://your-backend-url.run.app
