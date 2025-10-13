from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, EmailStr
from motor.motor_asyncio import AsyncIOMotorClient
from datetime import datetime
import os
from dotenv import load_dotenv

load_dotenv()

router = APIRouter(prefix="/contact", tags=["Contact"])

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

class ContactSubmission(BaseModel):
    name: str
    email: EmailStr
    company: str = ""
    message: str

@router.post("/submit")
async def submit_contact(contact: ContactSubmission):
    """Submit contact form"""
    try:
        if not contact.name or not contact.message:
            raise HTTPException(status_code=400, detail="Name and message are required")
        
        # Create contact document
        contact_doc = {
            "name": contact.name,
            "email": contact.email,
            "company": contact.company,
            "message": contact.message,
            "created_at": datetime.utcnow(),
            "status": "new"
        }
        
        # Insert into MongoDB
        result = await db.contacts.insert_one(contact_doc)
        
        return {
            "success": True,
            "message": "Thank you for contacting us! We'll get back to you soon.",
            "id": str(result.inserted_id)
        }
    
    except Exception as e:
        print(f"Contact submission error: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to submit contact form")
