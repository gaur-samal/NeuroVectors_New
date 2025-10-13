# 🚀 Deploy to Cloud Run - Fixed Version

## ✅ Issues Fixed
- Updated Dockerfile to use `requirements-cloudrun.txt`
- Fixed requirements file format
- Added proper emergentintegrations installation with custom index

---

## 📦 Run These Commands

```bash
# Make sure you're in the backend directory
cd backend

# Build the Docker image (this should work now!)
gcloud builds submit --tag gcr.io/neuralvectors/neural-vectors-backend

# Deploy to Cloud Run
gcloud run deploy neural-vectors-backend \
  --image gcr.io/neuralvectors/neural-vectors-backend \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated \
  --set-env-vars EMERGENT_LLM_KEY=sk-emergent-d305199E9E8885e49E \
  --port 8080 \
  --memory 2Gi \
  --timeout 300

# Get the backend URL
gcloud run services describe neural-vectors-backend \
  --region us-central1 \
  --format 'value(status.url)'
```

---

## 📋 What Was Changed

### Dockerfile
- Now uses `requirements-cloudrun.txt` instead of `requirements.txt`
- Includes `--extra-index-url` for emergentintegrations package

### requirements-cloudrun.txt
- Fixed format (removed inline flags)
- Clean list of dependencies

---

## 🎯 Expected Output

After successful build:
```
DONE
ID: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
CREATE_TIME: 2025-01-XX...
DURATION: XX seconds
SOURCE: gs://...
IMAGES: gcr.io/neuralvectors/neural-vectors-backend
STATUS: SUCCESS
```

After deployment:
```
Service [neural-vectors-backend] revision [neural-vectors-backend-xxxxx] has been deployed
Service URL: https://neural-vectors-backend-xxxxx.run.app
```

---

## ✅ Next Steps After Deployment

1. **Copy the Service URL** (looks like: `https://neural-vectors-backend-xxxxx.run.app`)

2. **Test the backend**:
```bash
# Test health endpoint
curl https://YOUR_BACKEND_URL/api/health

# Test RAG endpoint
curl -X POST https://YOUR_BACKEND_URL/api/rag/query \
  -H "Content-Type: application/json" \
  -d '{"query": "What is RAG?"}'
```

3. **Update frontend environment**:
```bash
# In frontend/.env.production
echo "REACT_APP_BACKEND_URL=https://YOUR_BACKEND_URL" > frontend/.env.production
```

4. **Deploy frontend**:
```bash
cd frontend
yarn build
firebase deploy --only hosting
```

---

**Now try running the build command again!**
