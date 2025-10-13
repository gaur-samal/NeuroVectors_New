# 🔧 Backend Authentication Fix

## Issue
Organization policy is preventing public access via IAM binding.

## Solution: Redeploy with --allow-unauthenticated

Run this command to redeploy your backend with public access:

```bash
gcloud run deploy neural-vectors-backend \
  --image gcr.io/neuralvectors/neural-vectors-backend \
  --region asia-south1 \
  --allow-unauthenticated \
  --set-env-vars EMERGENT_LLM_KEY=sk-emergent-d305199E9E8885e49E \
  --port 8080 \
  --memory 2Gi \
  --timeout 300
```

## Alternative: Check Organization Policies

If the above fails, check org policies:

```bash
# Check if there's a constraint blocking this
gcloud resource-manager org-policies describe \
  iam.allowedPolicyMemberDomains \
  --project=neuralvectors
```

## If Organization Policy Blocks Public Access

You have two options:

### Option A: Request Policy Change (If you have admin access)
Contact your GCP organization admin to allow public Cloud Run services.

### Option B: Use Authenticated Frontend (More Complex)
Set up service account authentication for frontend to backend calls.

## Quick Test After Redeployment

```bash
# Test health endpoint
curl https://neural-vectors-backend-268087471849.asia-south1.run.app/api/health

# Should return: {"status":"healthy"}
```

If successful, your AI demos should start working immediately!
