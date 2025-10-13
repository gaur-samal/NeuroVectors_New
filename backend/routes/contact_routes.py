from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, EmailStr
from firestore_service import FirestoreService

router = APIRouter(prefix="/contact", tags=["Contact"])

# Initialize Firestore service
firestore_service = FirestoreService()

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
            "message": contact.message
        }
        
        # Insert into Firestore
        doc_id = await firestore_service.add_contact(contact_doc)
        
        return {
            "success": True,
            "message": "Thank you for contacting us! We'll get back to you soon.",
            "id": doc_id
        }
    
    except Exception as e:
        print(f"Contact submission error: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to submit contact form")
