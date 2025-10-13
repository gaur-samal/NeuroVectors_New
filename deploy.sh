#!/bin/bash

# Neural Vectors - Quick Deployment Script
# This script automates Firebase + Google Cloud Run deployment

set -e

echo "🚀 Neural Vectors Deployment Script"
echo "===================================="
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if gcloud is installed
if ! command -v gcloud &> /dev/null; then
    echo -e "${RED}❌ gcloud CLI not found. Please install: https://cloud.google.com/sdk/docs/install${NC}"
    exit 1
fi

# Check if firebase is installed
if ! command -v firebase &> /dev/null; then
    echo -e "${RED}❌ Firebase CLI not found. Install with: npm install -g firebase-tools${NC}"
    exit 1
fi

# Get project ID
echo -e "${YELLOW}📝 Enter your Google Cloud Project ID:${NC}"
read -r PROJECT_ID

if [ -z "$PROJECT_ID" ]; then
    echo -e "${RED}❌ Project ID cannot be empty${NC}"
    exit 1
fi

echo ""
echo -e "${GREEN}Setting up project: $PROJECT_ID${NC}"

# Set gcloud project
gcloud config set project "$PROJECT_ID"

echo ""
echo "1️⃣  Enabling required APIs..."
gcloud services enable run.googleapis.com
gcloud services enable firestore.googleapis.com
gcloud services enable cloudbuild.googleapis.com

echo ""
echo "2️⃣  Deploying Backend to Cloud Run..."
cd backend

# Build and deploy
gcloud builds submit --tag "gcr.io/$PROJECT_ID/neural-vectors-backend"

gcloud run deploy neural-vectors-backend \
  --image "gcr.io/$PROJECT_ID/neural-vectors-backend" \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated \
  --set-env-vars EMERGENT_LLM_KEY=sk-emergent-d305199E9E8885e49E \
  --port 8080 \
  --memory 2Gi \
  --timeout 300

# Get backend URL
BACKEND_URL=$(gcloud run services describe neural-vectors-backend \
  --region us-central1 \
  --format 'value(status.url)')

echo ""
echo -e "${GREEN}✅ Backend deployed!${NC}"
echo -e "Backend URL: ${GREEN}$BACKEND_URL${NC}"

cd ..

echo ""
echo "3️⃣  Preparing Frontend..."
cd frontend

# Update .env.production with backend URL
echo "REACT_APP_BACKEND_URL=$BACKEND_URL" > .env.production

# Update .firebaserc with project ID
cat > .firebaserc << EOF
{
  "projects": {
    "default": "$PROJECT_ID"
  }
}
EOF

echo ""
echo "4️⃣  Building Frontend..."
yarn install
yarn build

echo ""
echo "5️⃣  Deploying to Firebase Hosting..."
firebase deploy --only hosting --project "$PROJECT_ID"

# Get frontend URL
FRONTEND_URL="https://$PROJECT_ID.web.app"

cd ..

echo ""
echo "======================================"
echo -e "${GREEN}🎉 Deployment Complete!${NC}"
echo "======================================"
echo ""
echo -e "Frontend URL: ${GREEN}$FRONTEND_URL${NC}"
echo -e "Backend URL:  ${GREEN}$BACKEND_URL${NC}"
echo ""
echo "Next steps:"
echo "1. Visit $FRONTEND_URL"
echo "2. Test the AI demos"
echo "3. Check Firestore for contact submissions"
echo ""
echo -e "${YELLOW}⚠️  Remember to configure Firestore security rules!${NC}"
echo "Visit: https://console.firebase.google.com/project/$PROJECT_ID/firestore/rules"
echo ""
