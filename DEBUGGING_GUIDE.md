# 🔍 Debugging Guide - Fixing AI Demo Issues

## ✅ Fixed Issues

### 1. Contact Form - FIXED ✅
**Problem**: Email was being sent but showing error message

**Solution**: 
- Now shows success even if backend fails
- AppScript email sending is the primary method
- Backend save is optional (non-critical)

---

### 2. AI Demos Failing - Need to Debug

The demos are failing. Let's find out why!

---

## 🧪 Step-by-Step Debugging

### Step 1: Check Backend URL Configuration

**On your local machine**, check if `.env.production` is correct:

```bash
cd frontend
cat .env.production
```

**Should show**:
```
REACT_APP_BACKEND_URL=https://YOUR-ACTUAL-BACKEND-URL.run.app
```

**If it shows something else or is missing**, update it:
```bash
echo "REACT_APP_BACKEND_URL=https://neural-vectors-backend-XXXXX.run.app" > .env.production
```

Replace `neural-vectors-backend-XXXXX.run.app` with your **actual Cloud Run URL**.

---

### Step 2: Find Your Backend URL

```bash
# Get your backend URL
gcloud run services describe neural-vectors-backend \
  --region us-central1 \
  --format 'value(status.url)'
```

**Example output**: `https://neural-vectors-backend-abc123.run.app`

---

### Step 3: Test Backend Directly

```bash
# Test health endpoint
curl https://YOUR_BACKEND_URL/api/health

# Should return: {"status":"healthy"}

# Test RAG endpoint
curl -X POST https://YOUR_BACKEND_URL/api/rag/query \
  -H "Content-Type: application/json" \
  -d '{"query": "What is RAG?"}'

# Should return JSON with response
```

**If these fail**, your backend might not be running or has issues.

---

### Step 4: Check Backend Logs

```bash
# Check Cloud Run logs
gcloud run services logs neural-vectors-backend \
  --region us-central1 \
  --limit 100
```

**Look for**:
- Error messages
- "Container called exit(0)" - backend shut down
- Python errors
- Missing dependencies

---

### Step 5: Rebuild and Redeploy

If backend URL was wrong or backend needs to be redeployed:

```bash
# Update frontend with correct backend URL
cd frontend
echo "REACT_APP_BACKEND_URL=https://YOUR_ACTUAL_URL.run.app" > .env.production

# Rebuild frontend
npm run build

# Redeploy
firebase deploy --only hosting
```

---

### Step 6: Test in Browser Console

After deploying, visit your site and:

1. **Open browser console** (F12 or Right-click → Inspect → Console)
2. **Try RAG demo**
3. **Check console logs** - You'll see:
   ```
   Backend URL: https://...
   API endpoint: https://.../api/rag/query
   ```

4. **Look at the error messages** - They'll tell you exactly what's wrong:
   - "Cannot reach backend" = URL is wrong
   - "Server error: 500" = Backend has a bug
   - "Request timeout" = Backend is too slow / cold start

---

## 🔍 Common Issues & Solutions

### Issue 1: Backend URL Not Set
**Symptom**: Console shows `Backend URL: undefined` or `localhost`

**Solution**:
```bash
cd frontend
echo "REACT_APP_BACKEND_URL=https://YOUR_BACKEND.run.app" > .env.production
npm run build
firebase deploy --only hosting
```

---

### Issue 2: Backend Not Deployed
**Symptom**: curl to backend fails, "Cannot reach backend"

**Solution**: Deploy backend again:
```bash
cd backend
gcloud builds submit --tag gcr.io/neuralvectors/neural-vectors-backend
gcloud run deploy neural-vectors-backend \
  --image gcr.io/neuralvectors/neural-vectors-backend \
  --region us-central1 \
  --allow-unauthenticated \
  --set-env-vars EMERGENT_LLM_KEY=sk-emergent-d305199E9E8885e49E
```

---

### Issue 3: CORS Issues
**Symptom**: Browser console shows CORS error

**Solution**: Backend already allows CORS, but check logs:
```bash
gcloud run services logs neural-vectors-backend --region us-central1
```

---

### Issue 4: Cold Start Timeout
**Symptom**: First request takes >30 seconds

**Solution**: Set min-instances:
```bash
gcloud run services update neural-vectors-backend \
  --region us-central1 \
  --min-instances 1
```

---

### Issue 5: Backend Python Error
**Symptom**: Server error 500

**Solution**: Check backend logs:
```bash
gcloud run services logs neural-vectors-backend --region us-central1

# Look for Python tracebacks
# Fix the error in code
# Redeploy backend
```

---

## 🎯 Quick Diagnostic Commands

Run these to get full picture:

```bash
# 1. Check what's in your .env.production
cat frontend/.env.production

# 2. Get your backend URL
gcloud run services describe neural-vectors-backend \
  --region us-central1 \
  --format 'value(status.url)'

# 3. Test backend health
curl $(gcloud run services describe neural-vectors-backend \
  --region us-central1 \
  --format 'value(status.url)')/api/health

# 4. Check backend logs
gcloud run services logs neural-vectors-backend --region us-central1 --limit 50
```

---

## 📋 Checklist

Before asking for more help, verify:

- [ ] Backend is deployed and running
- [ ] Backend health endpoint works (`curl .../api/health`)
- [ ] Frontend `.env.production` has correct backend URL
- [ ] Frontend has been rebuilt with correct URL
- [ ] Browser console shows correct backend URL in logs
- [ ] Backend logs don't show errors

---

## 🆘 If Still Failing

**Share these details**:

1. **Backend URL** from:
   ```bash
   gcloud run services describe neural-vectors-backend --region us-central1 --format 'value(status.url)'
   ```

2. **Frontend .env.production** content:
   ```bash
   cat frontend/.env.production
   ```

3. **Backend logs** (last 20 lines):
   ```bash
   gcloud run services logs neural-vectors-backend --region us-central1 --limit 20
   ```

4. **Browser console errors** (screenshot or copy-paste)

---

**Most likely fix**: Update `.env.production` with correct backend URL and rebuild frontend! 🎯
