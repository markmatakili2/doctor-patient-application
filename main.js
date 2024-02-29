const navItems = document.querySelector('.nav-items');
const openNvBtn = document.querySelector('#open_nav-btn');
const closeNavBtn = document.querySelector('#close_nav-btn');

const openNav = () => {
    navItems.style.dispaly = 'flex';
    openNvBtn.style.dispaly = 'none';
    closeNavBtn.style.dispaly = 'inline-block';
};

const closeNav = () => {
    navItems.style.dispaly = 'none';
    openNvBtn.style.dispaly = 'inline-block';
    closeNavBtn.style.dispaly = 'none';
};

openNvBtn.addEventListener('click', openNav);
closeNavBtn.addEventListener('click', closeNav);



const sidebar = document.querySelector('aside');
const showSidebarBtn = document.querySelector('#show-sidebar-btn');
const hideSidebarBtn = document.querySelector('#hide-sidebar-btn');


const showSidebar = () => {
    sidebar.style.left = '0';
    showSidebarBtn.style.dispaly = 'none';
    hideSidebarBtn.style.dispaly = 'inline-block';
}

const hideSidebar = () => {
    sidebar.style.left = '-100%';
    showSidebarBtn.style.dispaly = 'inline-block';
    hideSidebarBtn.style.dispaly = 'none';
}



showSidebarBtn.addEventListener('click', showSidebar);
hideSidebarBtn.addEventListener('click', hideSidebar);


function selectUser(userId) {
    // Replace this with code to fetch user's chat history based on userId
    // For demo purpose, just displaying a placeholder message
    document.getElementById('chat-box').innerHTML = `<h2>${userId}</h2>`;
  }

  function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value.trim();
    if (message === '') return;

    // Replace this with code to send message to selected user
    // For demo purpose, just displaying sent message in chat box
    const chatBox = document.getElementById('chat-box');
    const newMessage = `
      <div class="message sent">
        ${message}
        <div class="time">${getCurrentTime()}</div>
      </div>
    `;
    chatBox.innerHTML += newMessage;

    messageInput.value = '';
    chatBox.scrollTop = chatBox.scrollHeight;
  }

  function getCurrentTime() {
    const now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`;
  }