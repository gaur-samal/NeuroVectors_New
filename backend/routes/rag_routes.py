from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from ai_service import AIService

router = APIRouter(prefix="/rag", tags=["RAG"])
ai_service = AIService()

class RAGQuery(BaseModel):
    query: str

@router.post("/query")
async def rag_query(query_data: RAGQuery):
    """Process RAG query with knowledge retrieval"""
    try:
        if not query_data.query or not query_data.query.strip():
            raise HTTPException(status_code=400, detail="Query cannot be empty")
        
        result = await ai_service.rag_query(query_data.query)
        return result
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
