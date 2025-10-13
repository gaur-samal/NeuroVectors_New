import React, { useState } from 'react';
import { Send, Loader2, FileText, Bot } from 'lucide-react';
import axios from 'axios';
import { toast } from 'sonner';
import '../styles/darkTheme.css';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const AIDemos = () => {
  const [activeDemo, setActiveDemo] = useState('rag');
  const [ragQuery, setRagQuery] = useState('');
  const [ragResponse, setRagResponse] = useState(null);
  const [ragLoading, setRagLoading] = useState(false);
  
  const [agentTask, setAgentTask] = useState('');
  const [agentResponse, setAgentResponse] = useState(null);
  const [agentLoading, setAgentLoading] = useState(false);

  const handleRagQuery = async () => {
    if (!ragQuery.trim()) return;
    
    setRagLoading(true);
    try {
      const response = await axios.post(`${API}/rag/query`, {
        query: ragQuery
      });
      setRagResponse(response.data);
    } catch (error) {
      console.error('RAG query error:', error);
      toast.error('Failed to process query. Please try again.');
    } finally {
      setRagLoading(false);
    }
  };

  const handleAgentTask = async () => {
    if (!agentTask.trim()) return;
    
    setAgentLoading(true);
    try {
      const response = await axios.post(`${API}/agent/execute`, {
        task: agentTask
      });
      setAgentResponse(response.data);
    } catch (error) {
      console.error('Agent execution error:', error);
      toast.error('Failed to execute task. Please try again.');
    } finally {
      setAgentLoading(false);
    }
  };

  return (
    <section id="demos" style={{
      padding: '160px 7.6923%',
      background: 'var(--bg-primary)',
      position: 'relative'
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '100px' }}>
          <h2 className="display-large" style={{ marginBottom: '24px' }}>
            Experience <span style={{ color: 'var(--brand-primary)' }}>GenAI in Action</span>
          </h2>
          <p className="body-large" style={{ color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto' }}>
            Try our live RAG system and GenAI agent demonstrations powered by advanced LLMs
          </p>
        </div>
        
        {/* Demo Tabs */}
        <div style={{ display: 'flex', gap: '20px', marginBottom: '40px', justifyContent: 'center' }}>
          <button 
            className={activeDemo === 'rag' ? 'btn-primary' : 'btn-secondary'}
            onClick={() => setActiveDemo('rag')}
          >
            <FileText size={20} />
            RAG System Demo
          </button>
          <button 
            className={activeDemo === 'agent' ? 'btn-primary' : 'btn-secondary'}
            onClick={() => setActiveDemo('agent')}
          >
            <Bot size={20} />
            AI Agent Demo
          </button>
        </div>
        
        {/* RAG Demo */}
        {activeDemo === 'rag' && (
          <div style={{
            background: 'var(--bg-secondary)',
            border: '1px solid var(--border-subtle)',
            padding: '40px',
            maxWidth: '900px',
            margin: '0 auto'
          }}>
            <h3 className="heading-2" style={{ marginBottom: '16px' }}>
              Retrieval Augmented Generation (RAG)
            </h3>
            <p className="body-medium" style={{ marginBottom: '32px', color: 'var(--text-secondary)' }}>
              Ask questions and get accurate responses grounded in our knowledge base
            </p>
            
            <div style={{ display: 'flex', gap: '12px', marginBottom: '32px' }}>
              <input
                type="text"
                value={ragQuery}
                onChange={(e) => setRagQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleRagQuery()}
                placeholder="Ask a question about AI, RAG, or LLMs..."
                style={{
                  flex: 1,
                  padding: '16px',
                  background: 'var(--bg-primary)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--text-primary)',
                  fontSize: '16px',
                  outline: 'none'
                }}
              />
              <button 
                className="btn-primary dark-button-animate"
                onClick={handleRagQuery}
                disabled={ragLoading}
                style={{ minWidth: '120px' }}
              >
                {ragLoading ? <Loader2 size={20} className="spin" /> : <Send size={20} />}
                {ragLoading ? 'Thinking...' : 'Ask'}
              </button>
            </div>
            
            {ragResponse && (
              <div style={{
                background: 'var(--bg-primary)',
                padding: '24px',
                border: '1px solid var(--brand-primary)',
                borderLeft: '4px solid var(--brand-primary)'
              }}>
                <p className="body-medium" style={{ marginBottom: '20px' }}>
                  {ragResponse.response}
                </p>
                <div>
                  <p className="body-small" style={{ color: 'var(--text-muted)', marginBottom: '8px' }}>
                    Sources:
                  </p>
                  {ragResponse.sources.map((source, idx) => (
                    <span key={idx} style={{
                      display: 'inline-block',
                      padding: '6px 12px',
                      background: 'var(--brand-hover)',
                      fontSize: '14px',
                      marginRight: '8px',
                      marginBottom: '8px',
                      color: 'var(--brand-primary)'
                    }}>
                      {source}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
        
        {/* Agent Demo */}
        {activeDemo === 'agent' && (
          <div style={{
            background: 'var(--bg-secondary)',
            border: '1px solid var(--border-subtle)',
            padding: '40px',
            maxWidth: '900px',
            margin: '0 auto'
          }}>
            <h3 className="heading-2" style={{ marginBottom: '16px' }}>
              Multi-Step AI Agent
            </h3>
            <p className="body-medium" style={{ marginBottom: '32px', color: 'var(--text-secondary)' }}>
              Watch an AI agent break down complex tasks and execute them step by step
            </p>
            
            <div style={{ display: 'flex', gap: '12px', marginBottom: '32px' }}>
              <input
                type="text"
                value={agentTask}
                onChange={(e) => setAgentTask(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleAgentTask()}
                placeholder="Give the agent a task (e.g., 'Analyze market trends')..."
                style={{
                  flex: 1,
                  padding: '16px',
                  background: 'var(--bg-primary)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--text-primary)',
                  fontSize: '16px',
                  outline: 'none'
                }}
              />
              <button 
                className="btn-primary dark-button-animate"
                onClick={handleAgentTask}
                disabled={agentLoading}
                style={{ minWidth: '120px' }}
              >
                {agentLoading ? <Loader2 size={20} className="spin" /> : <Send size={20} />}
                {agentLoading ? 'Running...' : 'Execute'}
              </button>
            </div>
            
            {agentResponse && (
              <div style={{ background: 'var(--bg-primary)', padding: '24px', border: '1px solid var(--brand-primary)' }}>
                <div style={{ marginBottom: '20px' }}>
                  {agentResponse.steps.map((step) => (
                    <div key={step.step} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      marginBottom: '12px',
                      padding: '12px',
                      background: 'var(--bg-secondary)'
                    }}>
                      <div style={{
                        width: '32px',
                        height: '32px',
                        background: 'var(--brand-primary)',
                        color: '#000',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: '600'
                      }}>
                        {step.step}
                      </div>
                      <span className="body-medium">{step.action}</span>
                    </div>
                  ))}
                </div>
                <div style={{
                  padding: '20px',
                  background: 'var(--brand-hover)',
                  borderLeft: '4px solid var(--brand-primary)'
                }}>
                  <p className="body-small" style={{ color: 'var(--text-muted)', marginBottom: '8px' }}>
                    Agent Result:
                  </p>
                  <p className="body-medium">{agentResponse.result}</p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .spin {
          animation: spin 1s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default AIDemos;
