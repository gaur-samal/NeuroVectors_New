from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from ai_service import AIService

router = APIRouter(prefix="/agent", tags=["Agent"])
ai_service = AIService()

class AgentTask(BaseModel):
    task: str

@router.post("/execute")
async def agent_execute(task_data: AgentTask):
    """Execute multi-step AI agent task"""
    try:
        if not task_data.task or not task_data.task.strip():
            raise HTTPException(status_code=400, detail="Task cannot be empty")
        
        result = await ai_service.agent_execute(task_data.task)
        return result
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
