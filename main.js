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
