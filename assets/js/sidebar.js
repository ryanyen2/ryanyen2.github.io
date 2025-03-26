document.addEventListener('DOMContentLoaded', function() {
  // Tree navigation toggle
  const treeItems = document.querySelectorAll('.tree-nav .has-children > a');
  
  treeItems.forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      const parent = this.parentElement;
      parent.classList.toggle('expanded');
    });
  });
  
  // Mobile menu toggle
  const body = document.body;
  
  // Create mobile menu toggle button if it doesn't exist
  if (!document.querySelector('.menu-toggle')) {
    const menuToggle = document.createElement('button');
    menuToggle.className = 'menu-toggle';
    menuToggle.innerHTML = '☰';
    menuToggle.setAttribute('aria-label', 'Toggle navigation menu');
    body.appendChild(menuToggle);
    
    menuToggle.addEventListener('click', function() {
      const sidebar = document.querySelector('.sidebar');
      sidebar.classList.toggle('open');
    });
  }
  
  // Close sidebar when clicking outside on mobile
  document.addEventListener('click', function(e) {
    const sidebar = document.querySelector('.sidebar');
    const menuToggle = document.querySelector('.menu-toggle');
    
    if (window.innerWidth <= 768) {
      if (!sidebar.contains(e.target) && e.target !== menuToggle) {
        sidebar.classList.remove('open');
      }
    }
  });
  
  // Simulate Obsidian-like internal linking
  const content = document.querySelector('.content');
  
  if (content) {
    const regex = /\[\[(.*?)\]\]/g;
    content.innerHTML = content.innerHTML.replace(regex, function(match, p1) {
      return `<a href="#${p1.toLowerCase().replace(/\s+/g, '-')}">${p1}</a>`;
    });
  }
}); 