document.addEventListener('DOMContentLoaded', function() {
  // Tree navigation toggle
  const treeItems = document.querySelectorAll('.tree-nav .has-children > a');
  
  treeItems.forEach(item => {
    item.addEventListener('click', function(e) {
      if (this.getAttribute('href') === '#') {
        e.preventDefault();
      }
      const parent = this.parentElement;
      parent.classList.toggle('expanded');
    });
  });
  
  // Current page tracking in navigation
  function highlightCurrentPage() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.tree-nav a');
    
    navLinks.forEach(link => {
      const linkPath = link.getAttribute('href');
      
      // Remove any existing current markers
      link.classList.remove('current');
      if (link.querySelector('.nav-indicator')) {
        link.querySelector('.nav-indicator').remove();
      }
      
      // Check if this link matches the current page
      if (linkPath === currentPath || 
          (currentPath.includes(linkPath) && linkPath !== '/' && linkPath !== '#')) {
        
        // Add current class
        link.classList.add('current');
        
        // Add indicator dot
        const indicator = document.createElement('span');
        indicator.className = 'nav-indicator';
        link.prepend(indicator);
        
        // Expand parent items if needed
        let parent = link.parentElement;
        while (parent) {
          if (parent.classList.contains('has-children')) {
            parent.classList.add('expanded');
          }
          parent = parent.parentElement;
        }
      }
    });
  }
  
  // Call initially
  highlightCurrentPage();
  
  // Handle child and grandchild navigation
  const childItems = document.querySelectorAll('.tree-nav .child-items > li > a');
  childItems.forEach(item => {
    // Check if this item has grandchildren
    const parent = item.parentElement;
    if (parent.querySelector('.grandchild-items')) {
      item.addEventListener('click', function(e) {
        if (this.getAttribute('href') === '#') {
          e.preventDefault();
        }
        parent.classList.toggle('expanded');
      });
    }
  });
  
  // Wiki-style internal linking with smooth transitions
  function handleWikiLinks() {
    const content = document.querySelector('.content');
    
    if (content) {
      // Convert [[wiki links]] to clickable links
      const regex = /\[\[(.*?)\]\]/g;
      content.innerHTML = content.innerHTML.replace(regex, function(match, p1) {
        // Create slug from the link text
        const slug = p1.toLowerCase().replace(/\s+/g, '-');
        
        // Determine where to link to based on context
        let href = '';
        if (p1.match(/publication/i) || p1.match(/Code Shaping/i) || p1.match(/CoLadder/i) || p1.match(/CoPrompt/i)) {
          href = `/publications/${slug}`;
        } else if (p1 === 'Blog') {
          href = '/blog/';
        } else if (p1.match(/Domain Specific Languages/i)) {
          href = '/blog/domain-specific-languages';
        } else {
          href = `/blog/${slug}`;
        }
        
        return `<a href="${href}" class="wiki-link" data-target="${p1}">${p1}</a>`;
      });
      
      // Add click handler for smooth transitions
      document.querySelectorAll('.wiki-link').forEach(link => {
        link.addEventListener('click', function(e) {
          e.preventDefault();
          
          const targetUrl = this.getAttribute('href');
          const linkText = this.getAttribute('data-target');
          
          // Animate content out
          content.classList.add('fade-out');
          
          // Update the indicator position
          updateNavIndicator(linkText);
          
          // After animation, navigate to the new page
          setTimeout(() => {
            window.location.href = targetUrl;
          }, 300);
        });
      });
    }
  }
  
  // Update navigation indicators when clicking wiki links
  function updateNavIndicator(targetText) {
    const navLinks = document.querySelectorAll('.tree-nav a');
    let foundMatch = false;
    
    navLinks.forEach(link => {
      if (link.textContent.trim() === targetText) {
        // Create indicator for animation
        const oldIndicator = document.querySelector('.nav-indicator.current');
        if (oldIndicator) {
          const newIndicator = document.createElement('span');
          newIndicator.className = 'nav-indicator moving';
          
          // Get positions for animation
          const oldRect = oldIndicator.getBoundingClientRect();
          const newRect = link.getBoundingClientRect();
          
          // Set starting position
          newIndicator.style.top = `${oldRect.top}px`;
          newIndicator.style.left = `${oldRect.left}px`;
          
          // Add to DOM
          document.body.appendChild(newIndicator);
          
          // Trigger animation to new position
          setTimeout(() => {
            newIndicator.style.top = `${newRect.top}px`;
            newIndicator.style.left = `${newRect.left}px`;
            
            // Clean up after animation
            setTimeout(() => {
              newIndicator.remove();
            }, 300);
          }, 10);
        }
        
        foundMatch = true;
      }
    });
  }
  
  // Setup page transition effects
  function setupPageTransitions() {
    // Add entry animation class
    document.querySelector('.content').classList.add('fade-in');
    
    // Handle back/forward navigation
    window.addEventListener('popstate', function() {
      document.querySelector('.content').classList.add('fade-out');
      setTimeout(() => {
        window.location.reload();
      }, 300);
    });
  }
  
  // Initialize all features
  handleWikiLinks();
  setupPageTransitions();
}); 