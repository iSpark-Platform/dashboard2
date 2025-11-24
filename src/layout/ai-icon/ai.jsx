"use client";
import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const AIIcon = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    
    // Set canvas size
    canvas.width = 280 * dpr;
    canvas.height = 120 * dpr;
    canvas.style.width = '280px';
    canvas.style.height = '120px';
    ctx.scale(dpr, dpr);
    
    let phase = 0;
    
    const drawWave = () => {
      ctx.clearRect(0, 0, 280, 120);
      
      const centerY = 60;
      const amplitude = isListening ? 20 : 8;
      const frequency = 0.02;
      const speed = 0.05;
      
      // Draw multiple wave layers
      const waves = [
        { color: 'rgba(59, 130, 246, 0.3)', offset: 0, amp: amplitude * 0.6 },
        { color: 'rgba(59, 130, 246, 0.5)', offset: 1, amp: amplitude * 0.8 },
        { color: 'rgba(59, 130, 246, 0.8)', offset: 2, amp: amplitude },
        { color: 'rgba(251, 146, 60, 0.4)', offset: 3, amp: amplitude * 0.7 },
        { color: 'rgba(251, 146, 60, 0.6)', offset: 4, amp: amplitude * 0.9 },
      ];
      
      waves.forEach(wave => {
        ctx.beginPath();
        ctx.strokeStyle = wave.color;
        ctx.lineWidth = 3;
        ctx.lineCap = 'round';
        
        for (let x = 0; x < 280; x++) {
          const y = centerY + Math.sin(x * frequency + phase + wave.offset) * wave.amp;
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        
        ctx.stroke();
      });
      
      phase += speed;
      animationRef.current = requestAnimationFrame(drawWave);
    };
    
    drawWave();
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isListening]);

  return (
    <StyledWrapper>
      <div className={`ai-widget ${isOpen ? 'open' : ''}`}>
        <button 
          className="ai-trigger"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="AI Assistant"
        >
          <div className="ripple-circle ripple-1"></div>
          <div className="ripple-circle ripple-2"></div>
          <div className="ripple-circle ripple-3"></div>
          
          <svg className="ai-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
          </svg>
          <span className="badge">AI</span>
        </button>

        {isOpen && (
          <div className="chat-panel">
            <div className="panel-header">
              <div className="header-info">
                <h3>AI Assistant</h3>
                <span className="status-text">Ready to help</span>
              </div>
              <button 
                className="close-btn"
                onClick={() => setIsOpen(false)}
                aria-label="Close"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            <div className="wave-container">
              <canvas ref={canvasRef} className="wave-canvas" />
              <button 
                className={`voice-btn ${isListening ? 'listening' : ''}`}
                onClick={() => setIsListening(!isListening)}
                aria-label={isListening ? 'Stop listening' : 'Start listening'}
              >
                {isListening ? (
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                    <rect x="6" y="6" width="12" height="12" rx="2"/>
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                    <line x1="12" y1="19" x2="12" y2="23"/>
                    <line x1="8" y1="23" x2="16" y2="23"/>
                  </svg>
                )}
              </button>
              <p className="wave-status">
                {isListening ? 'Listening...' : 'Click microphone to speak'}
              </p>
            </div>

            <div className="panel-body">
              <div className="suggestions">
                <p className="suggestions-title">Quick suggestions:</p>
                <div className="suggestion-grid">
                  <button className="suggestion-btn">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                    Search documentation
                  </button>
                  <button className="suggestion-btn">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                    </svg>
                    Analyze file
                  </button>
                  <button className="suggestion-btn">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="16 18 22 12 16 6"></polyline>
                      <polyline points="8 6 2 12 8 18"></polyline>
                    </svg>
                    Write code
                  </button>
                  <button className="suggestion-btn">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                    Get help
                  </button>
                </div>
              </div>
            </div>

            <div className="panel-footer">
              <div className="input-container">
                <input 
                  type="text" 
                  placeholder="Type a message..."
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' && e.target.value.trim()) {
                      console.log('Message:', e.target.value);
                      e.target.value = '';
                    }
                  }}
                />
                <div className="input-actions">
                  <button className="icon-btn" aria-label="Attach file">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
                    </svg>
                  </button>
                  <button className="send-btn" aria-label="Send">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .ai-widget {
    position: fixed;
    right: 2rem;
    bottom: 10rem;
    z-index: 9999;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  }

  /* Trigger Button */
  .ai-trigger {
    position: relative;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: none;
    background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
    color: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 20px rgba(59, 130, 246, 0.4);
    transition: all 0.3s ease;
    animation: gentle-pulse 2s ease-in-out infinite;
  }

  .ai-trigger:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 28px rgba(59, 130, 246, 0.5);
    animation: none; /* Stop pulsing on hover */
  }

  /* Ripple Circles - Attention-grabbing animation */
  .ripple-circle {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 2px solid #3b82f6;
    opacity: 0;
    animation: ripple-expand 3s ease-out infinite;
  }

  .ripple-1 {
    animation-delay: 0s;
  }

  .ripple-2 {
    animation-delay: 1s;
  }

  .ripple-3 {
    animation-delay: 2s;
  }

  .ai-icon {
    width: 26px;
    height: 26px;
    transition: transform 0.3s ease;
    animation: icon-sparkle 3s ease-in-out infinite;
    position: relative;
    z-index: 1;
  }

  .ai-trigger:hover .ai-icon {
    transform: rotate(72deg);
    animation: none;
  }

  .badge {
    position: absolute;
    bottom: -2px;
    right: -2px;
    background: #fb923c;
    color: white;
    font-size: 10px;
    font-weight: 700;
    padding: 2px 6px;
    border-radius: 10px;
    border: 2px solid white;
    animation: badge-blink 2s ease-in-out infinite;
    z-index: 2;
  }

  /* When panel is open, stop all animations */
  .ai-widget.open .ai-trigger {
    animation: none;
  }

  .ai-widget.open .ripple-circle {
    animation: none;
    opacity: 0;
  }

  .ai-widget.open .ai-icon {
    animation: none;
  }

  .ai-widget.open .badge {
    animation: none;
  }

  /* Chat Panel */
  .chat-panel {
    position: absolute;
    bottom: 76px;
    right: 0;
    width: 420px;
    background: white;
    border-radius: 16px;
    box-shadow: 0 12px 48px rgba(0, 0, 0, 0.15);
    overflow: hidden;
    animation: slideUp 0.3s ease-out;
  }

  /* Header */
  .panel-header {
    padding: 1.25rem 1.5rem;
    background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header-info h3 {
    margin: 0 0 0.25rem 0;
    font-size: 16px;
    font-weight: 600;
  }

  .status-text {
    font-size: 13px;
    opacity: 0.9;
  }

  .close-btn {
    background: rgba(255, 255, 255, 0.2);
    border: none;
    border-radius: 6px;
    color: white;
    cursor: pointer;
    padding: 0.375rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
  }

  .close-btn:hover {
    background: rgba(255, 255, 255, 0.3);
  }

  /* Wave Container */
  .wave-container {
    background: linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%);
    padding: 2rem 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    border-bottom: 1px solid #e2e8f0;
  }

  .wave-canvas {
    width: 280px;
    height: 120px;
  }

  .voice-btn {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    border: none;
    background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
    color: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 16px rgba(59, 130, 246, 0.3);
    transition: all 0.3s ease;
  }

  .voice-btn:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 20px rgba(59, 130, 246, 0.4);
  }

  .voice-btn.listening {
    background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
    animation: pulse-listening 1.5s ease-in-out infinite;
  }

  .wave-status {
    margin: 0;
    font-size: 13px;
    color: #64748b;
    font-weight: 500;
  }

  /* Panel Body */
  .panel-body {
    padding: 1.5rem;
  }

  .suggestions-title {
    margin: 0 0 0.875rem 0;
    font-size: 13px;
    font-weight: 600;
    color: #64748b;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .suggestion-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.625rem;
  }

  .suggestion-btn {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.875rem;
    background: white;
    border: 1.5px solid #e2e8f0;
    border-radius: 10px;
    font-size: 13px;
    color: #475569;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    text-align: left;
  }

  .suggestion-btn:hover {
    border-color: #3b82f6;
    background: #f0f9ff;
    color: #2563eb;
  }

  .suggestion-btn svg {
    flex-shrink: 0;
    color: #94a3b8;
  }

  .suggestion-btn:hover svg {
    color: #3b82f6;
  }

  /* Footer */
  .panel-footer {
    padding: 1rem 1.5rem;
    background: #f8fafc;
    border-top: 1px solid #e2e8f0;
  }

  .input-container {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: white;
    border: 1.5px solid #e2e8f0;
    border-radius: 12px;
    padding: 0.5rem 0.75rem;
    transition: all 0.2s ease;
  }

  .input-container:focus-within {
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }

  .input-container input {
    flex: 1;
    border: none;
    outline: none;
    font-size: 14px;
    color: #1e293b;
    background: transparent;
    padding: 0.375rem;
  }

  .input-container input::placeholder {
    color: #94a3b8;
  }

  .input-actions {
    display: flex;
    gap: 0.25rem;
  }

  .icon-btn,
  .send-btn {
    width: 36px;
    height: 36px;
    border-radius: 8px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .icon-btn {
    background: transparent;
    color: #64748b;
  }

  .icon-btn:hover {
    background: #f1f5f9;
    color: #334155;
  }

  .send-btn {
    background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
    color: white;
  }

  .send-btn:hover {
    transform: scale(1.05);
    box-shadow: 0 2px 8px rgba(59, 130, 246, 0.3);
  }

  /* Animations */
  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(12px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes gentle-pulse {
    0%, 100% {
      transform: scale(1);
      box-shadow: 0 4px 20px rgba(59, 130, 246, 0.4);
    }
    50% {
      transform: scale(1.05);
      box-shadow: 0 6px 28px rgba(59, 130, 246, 0.6);
    }
  }

  @keyframes ripple-expand {
    0% {
      transform: scale(1);
      opacity: 0.6;
    }
    50% {
      opacity: 0.3;
    }
    100% {
      transform: scale(2);
      opacity: 0;
    }
  }

  @keyframes icon-sparkle {
    0%, 100% {
      transform: scale(1) rotate(0deg);
      filter: brightness(1);
    }
    50% {
      transform: scale(1.1) rotate(10deg);
      filter: brightness(1.2);
    }
  }

  @keyframes badge-blink {
    0%, 100% {
      opacity: 1;
      transform: scale(1);
    }
    50% {
      opacity: 0.7;
      transform: scale(1.1);
    }
  }

  @keyframes pulse-listening {
    0%, 100% {
      box-shadow: 0 4px 16px rgba(239, 68, 68, 0.3);
    }
    50% {
      box-shadow: 0 4px 24px rgba(239, 68, 68, 0.5);
    }
  }

  /* Responsive */
  @media (max-width: 640px) {
    .ai-widget {
      right: 1rem;
      bottom: 1rem;
    }

    .chat-panel {
      width: calc(100vw - 2rem);
      max-width: 420px;
    }

    .suggestion-grid {
      grid-template-columns: 1fr;
    }
  }
`;

export default AIIcon;