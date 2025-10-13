from emergentintegrations.llm.chat import LlmChat, UserMessage
import os
from dotenv import load_dotenv
import asyncio

load_dotenv()

class AIService:
    def __init__(self):
        self.api_key = os.getenv('EMERGENT_LLM_KEY')
        
        # Predefined knowledge base for RAG simulation
        self.knowledge_base = {
            "rag": "Retrieval Augmented Generation (RAG) is a hybrid AI architecture that combines the power of large language models with external knowledge retrieval. It works by first searching relevant documents from a knowledge base, then using those documents as context for the LLM to generate accurate, grounded responses. This approach significantly reduces hallucinations and enables AI systems to provide up-to-date, domain-specific information. RAG systems typically use vector databases like Pinecone or Weaviate for efficient similarity search.",
            "llm": "Large Language Models (LLMs) like GPT-5, Claude 3.7, and Gemini 2.5 are advanced AI models trained on massive text datasets. They excel at natural language understanding, generation, reasoning, and task completion. Modern LLMs support function calling, multi-agent orchestration, and can be fine-tuned for specific domains.",
            "agents": "AI agents are autonomous systems that can perceive their environment, make decisions, and take actions to achieve goals. Multi-agent systems coordinate multiple AI agents to solve complex tasks through collaboration. Agentic frameworks like LangGraph and Model Context Protocol (MCP) enable building sophisticated agent workflows.",
            "genai": "Generative AI refers to AI systems that can create new content including text, images, code, and more. It includes technologies like transformer models, diffusion models, and GANs. GenAI is transforming industries through applications like content creation, code generation, and creative design.",
            "mcp": "Model Context Protocol (MCP) is a standardized protocol for AI agents to interact with external tools and data sources. It enables agents to maintain context across interactions, call functions, and access real-time information, making them more powerful and versatile."
        }
    
    async def rag_query(self, query: str) -> dict:
        """Process RAG query with knowledge retrieval and LLM generation"""
        try:
            # Simulate knowledge retrieval - find relevant context
            query_lower = query.lower()
            context = ""
            sources = []
            
            if "rag" in query_lower or "retrieval" in query_lower:
                context = self.knowledge_base["rag"]
                sources = ["RAG Architecture Guide 2025", "LLM Best Practices", "Vector Database Implementation"]
            elif "llm" in query_lower or "language model" in query_lower or "gpt" in query_lower or "claude" in query_lower:
                context = self.knowledge_base["llm"]
                sources = ["LLM Overview 2025", "Foundation Models Guide", "AI Model Comparison"]
            elif "agent" in query_lower or "agentic" in query_lower:
                context = self.knowledge_base["agents"]
                sources = ["AI Agents Framework", "Multi-Agent Systems", "LangGraph Documentation"]
            elif "mcp" in query_lower or "protocol" in query_lower:
                context = self.knowledge_base["mcp"]
                sources = ["Model Context Protocol Spec", "MCP Integration Guide", "Tool Calling Standards"]
            else:
                context = self.knowledge_base["genai"]
                sources = ["GenAI Overview", "AI Transformation Guide", "Enterprise AI Solutions"]
            
            # Create LLM chat with Gemini Flash
            chat = LlmChat(
                api_key=self.api_key,
                session_id=f"rag-{asyncio.current_task().get_name()}",
                system_message=f"You are an AI expert assistant. Use the following knowledge base context to answer questions accurately and concisely:\n\n{context}\n\nProvide informative, professional responses based on this context."
            ).with_model("gemini", "gemini-2.0-flash")
            
            # Send query to LLM
            user_message = UserMessage(text=query)
            response = await chat.send_message(user_message)
            
            return {
                "query": query,
                "response": response,
                "sources": sources,
                "model": "gemini-2.0-flash"
            }
            
        except Exception as e:
            print(f"RAG query error: {str(e)}")
            raise Exception(f"Failed to process RAG query: {str(e)}")
    
    async def agent_execute(self, task: str) -> dict:
        """Execute multi-step AI agent task"""
        try:
            # Define agent steps
            steps = [
                {"step": 1, "action": "Planning task execution strategy...", "status": "completed"},
                {"step": 2, "action": "Analyzing requirements with AI...", "status": "completed"},
                {"step": 3, "action": "Generating comprehensive insights...", "status": "completed"}
            ]
            
            # Create LLM chat for agent reasoning
            chat = LlmChat(
                api_key=self.api_key,
                session_id=f"agent-{asyncio.current_task().get_name()}",
                system_message="You are an expert AI agent that provides direct, absolute answers without explanations or context. Be concise, factual, and to the point. Provide specific numbers, percentages, and actionable insights in bullet points. No lengthy explanations."
            ).with_model("gemini", "gemini-2.0-flash")
            
            # Enhance the task prompt for absolute answers
            enhanced_prompt = f"Task: {task}\n\nProvide a direct, concise answer with key facts and metrics in bullet points. No explanations or context needed. Just the essential information."
            
            user_message = UserMessage(text=enhanced_prompt)
            result = await chat.send_message(user_message)
            
            return {
                "task": task,
                "steps": steps,
                "result": result,
                "model": "gemini-2.0-flash"
            }
            
        except Exception as e:
            print(f"Agent execution error: {str(e)}")
            raise Exception(f"Failed to execute agent task: {str(e)}")
