from google.cloud import firestore
from datetime import datetime
import os

class FirestoreService:
    def __init__(self):
        # Initialize Firestore client
        # In Cloud Run, credentials are automatic
        # For local development, set GOOGLE_APPLICATION_CREDENTIALS env var
        self.db = firestore.Client()
    
    async def add_contact(self, contact_data: dict) -> str:
        """Add contact to Firestore"""
        try:
            # Add timestamp
            contact_data['created_at'] = datetime.utcnow()
            contact_data['status'] = 'new'
            
            # Add to Firestore 'contacts' collection
            doc_ref = self.db.collection('contacts').add(contact_data)
            
            # Return document ID
            return doc_ref[1].id
        except Exception as e:
            print(f"Firestore add_contact error: {str(e)}")
            raise Exception(f"Failed to add contact: {str(e)}")
    
    async def get_contacts(self, limit: int = 100) -> list:
        """Get all contacts from Firestore"""
        try:
            contacts_ref = self.db.collection('contacts')
            docs = contacts_ref.limit(limit).stream()
            
            contacts = []
            for doc in docs:
                contact = doc.to_dict()
                contact['id'] = doc.id
                contacts.append(contact)
            
            return contacts
        except Exception as e:
            print(f"Firestore get_contacts error: {str(e)}")
            raise Exception(f"Failed to get contacts: {str(e)}")
