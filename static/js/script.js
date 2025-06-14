console.log("Portfolio loaded.");
document.addEventListener('DOMContentLoaded', function() {
  const chatForm = document.getElementById('chat-form');
  const chatInput = document.getElementById('chat-input');
  const chatMessages = document.getElementById('chat-messages');
  const chatbotWidget = document.getElementById('chatbot-widget');
  const openChatbotBtn = document.getElementById('open-chatbot-btn');
  const closeChatbotBtn = document.getElementById('close-chatbot-btn');
  const resizeChatbotBtn = document.getElementById('resize-chatbot-btn');
  let isLarge = false;

  if (openChatbotBtn && chatbotWidget) {
    openChatbotBtn.addEventListener('click', function() {
      chatbotWidget.style.display = 'block';
      openChatbotBtn.style.display = 'none';
    });
  }
  if (closeChatbotBtn && chatbotWidget && openChatbotBtn) {
    closeChatbotBtn.addEventListener('click', function() {
      chatbotWidget.style.display = 'none';
      openChatbotBtn.style.display = 'block';
    });
  }
  if (resizeChatbotBtn && chatbotWidget) {
    resizeChatbotBtn.addEventListener('click', function() {
      isLarge = !isLarge;
      if (isLarge) {
        chatbotWidget.classList.add('large');
        chatMessages.style.height = '500px';
      } else {
        chatbotWidget.classList.remove('large');
        chatMessages.style.height = '300px';
      }
    });
  }

  if (chatForm) {
    chatForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      const userMsg = chatInput.value.trim();
      if (!userMsg) return;
      appendMessage('You', userMsg, 'text-end', false);
      chatInput.value = '';
      chatInput.disabled = true;
      try {
        const res = await fetch('/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: userMsg })
        });
        const data = await res.json();
        appendMessage('ITBienvenu', data.reply, 'text-start', true);
      } catch {
        appendMessage('ITBienvenu', 'Error contacting ITBienvenu.', 'text-start', false);
      }
      chatInput.disabled = false;
      chatInput.focus();
    });
  }

  function appendMessage(sender, text, alignClass, isMarkdown) {
    const msgDiv = document.createElement('div');
    msgDiv.className = `mb-2 ${alignClass}`;
    if (isMarkdown && window.marked) {
      msgDiv.innerHTML = `<strong>${sender}:</strong> ` + marked.parse(text);
    } else {
      msgDiv.innerHTML = `<strong>${sender}:</strong> ${text}`;
    }
    chatMessages.appendChild(msgDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
});
