document.addEventListener('DOMContentLoaded', function() {
  // Tree navigation toggle
  const treeItems = document.querySelectorAll('.tree-nav .has-children > a');
  
  // Helper function to handle expanding/collapsing
  function toggleTreeItem(element, force = null) {
    const parent = element.parentElement;
    if (force === true) {
      parent.classList.add('expanded');
    } else if (force === false) {
      parent.classList.remove('expanded');
    } else {
      parent.classList.toggle('expanded');
    }
  }
  
  treeItems.forEach(item => {
    // Add a separate toggle button for expanding/collapsing
    const toggleBtn = document.createElement('span');
    toggleBtn.className = 'tree-toggle';
    item.appendChild(toggleBtn);

    // Handle toggle button clicks
    toggleBtn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      toggleTreeItem(item);
    });

    // Handle link clicks
    // item.addEventListener('click', function(e) {
    //   // Only handle actual link clicks, not toggle clicks
    //   if (e.target === this) {
    //     if (this.getAttribute('href') === '#') {
    //       e.preventDefault();
    //     } else {
    //       // For real links, only expand if needed
    //       const parent = this.parentElement;
    //       if (!parent.classList.contains('expanded')) {
    //         toggleTreeItem(this, true);
    //       }
    //     }
    //   }
    // });
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
    const parent = item.parentElement;
    if (parent.querySelector('.grandchild-items')) {
      const toggleBtn = document.createElement('span');
      toggleBtn.className = 'tree-toggle';
      item.appendChild(toggleBtn);

      // toggleBtn.addEventListener('click', function(e) {
      //   e.preventDefault();
      //   e.stopPropagation();
      //   toggleTreeItem(item);
      // });

      // item.addEventListener('click', function(e) {
      //   if (e.target === this) {
      //     if (this.getAttribute('href') === '#') {
      //       e.preventDefault();
      //     } else if (!parent.classList.contains('expanded')) {
      //       toggleTreeItem(this, true);
      //     }
      //   }
      // });
    }
  });
  
  // Add hover effects for a more interactive feel
  const allTreeItems = document.querySelectorAll('.tree-nav a');
  allTreeItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
      this.classList.add('hover');
    });
    
    item.addEventListener('mouseleave', function() {
      this.classList.remove('hover');
    });
  });
  
  // Enhance all wiki-style links with smooth transitions
  function enhanceWikiLinks() {
    const content = document.querySelector('.content');
    
    if (content) {
      // Add click handler for smooth transitions to all wiki links
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
  enhanceWikiLinks();
  setupPageTransitions();
}); 