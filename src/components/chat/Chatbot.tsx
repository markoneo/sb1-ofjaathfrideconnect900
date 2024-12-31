import React, { useEffect } from 'react';

export default function Chatbot() {
  useEffect(() => {
    // Configure chatbot
    window.embeddedChatbotConfig = {
      chatbotId: "OpXcMgwAQAJfGalnA9I6D",
      domain: "www.chatbase.co"
    };

    // Create and load the script
    const script = document.createElement('script');
    script.src = "https://www.chatbase.co/embed.min.js";
    script.setAttribute('chatbotId', "OpXcMgwAQAJfGalnA9I6D");
    script.setAttribute('domain', "www.chatbase.co");
    script.defer = true;
    
    // Add script to document
    document.body.appendChild(script);

    // Cleanup function
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
}