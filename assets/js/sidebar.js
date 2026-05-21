// Helper functions for link handling
function hasAnchor(url) {
  return url && url.includes('#') && !url.endsWith('#');
}

function isSamePage(url) {
  if (!url) return false;
  const currentPath = window.location.pathname;
  const urlObj = new URL(url, window.location.origin);
  return urlObj.pathname === currentPath;
}

// Global reference to updateNavIndicator (will be set in DOMContentLoaded)
let updateNavIndicatorFn = null;

// Set up wiki link handling with event delegation at module level
// This ensures it works even when pages are restored from browser cache
let wikiLinksInitialized = false;

function enhanceWikiLinks() {
  // Only set up once to avoid duplicate event listeners
  if (wikiLinksInitialized) return;
  wikiLinksInitialized = true;
  
  // Use event delegation on the document to handle clicks on wiki links
  // This works even when the page is restored from browser cache
  document.addEventListener('click', function(e) {
    // Find the closest link element (could be the clicked element or its parent)
    let link = e.target.closest('.wiki-link, a[href^="/"], a[href^="./"], a[href^="../"]');
    
    if (!link) return;
    
    const href = link.getAttribute('href');
    if (!href) return;
    
    // Get the current content element (not a stale reference)
    const content = document.querySelector('.content');
    if (!content) return;
    
    // Check if it's an anchor link or same page navigation
    if (hasAnchor(href)) {
      if (isSamePage(href)) {
        // It's an anchor on the same page, use smooth scrolling
        e.preventDefault();
        const targetId = href.substring(href.indexOf('#') + 1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
        return;
      }
    }
    
    // Don't apply transition for external links or mail links
    if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) {
      return;
    }
    
    e.preventDefault();
    
    const targetUrl = href;
    const linkText = link.getAttribute('data-target') || link.textContent.trim();
    
    // Animate content out
    content.classList.add('fade-out');
    
    // Update the indicator position (if function exists)
    if (updateNavIndicatorFn) {
      updateNavIndicatorFn(linkText);
    }
    
    // After animation, navigate to the new page
    setTimeout(() => {
      window.location.href = targetUrl;
    }, 300);
  });
}

// Initialize wiki links immediately (works even before DOMContentLoaded)
enhanceWikiLinks();

// Current page tracking in navigation
// Use a flag to prevent duplicate execution and track processed parents
let isHighlighting = false;
let lastHighlightedPath = null;

function highlightCurrentPage() {
  const currentPath = window.location.pathname;
  
  // Prevent duplicate execution for the same path
  if (isHighlighting || lastHighlightedPath === currentPath) {
    return;
  }
  
  isHighlighting = true;
  lastHighlightedPath = currentPath;
  
  const navLinks = document.querySelectorAll('.tree-nav a');
  // Track which parents we've already expanded in this call to avoid duplicates
  const expandedParents = new Set();
  
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
      
      // Expand parent items if needed (only if not already expanded to avoid animation)
      let parent = link.parentElement;
      while (parent) {
        if (parent.classList.contains('has-children')) {
          // Only add expanded class if it's not already there and we haven't processed it
          if (!parent.classList.contains('expanded') && !expandedParents.has(parent)) {
            parent.classList.add('expanded');
            expandedParents.add(parent);
          }
        }
        parent = parent.parentElement;
      }
    }
  });
  
  isHighlighting = false;
}

document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu functionality
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const sidebar = document.querySelector('.sidebar');
  const mobileOverlay = document.querySelector('.mobile-overlay');
  
  if (hamburgerMenu && sidebar && mobileOverlay) {
    hamburgerMenu.addEventListener('click', function() {
      sidebar.classList.toggle('open');
      mobileOverlay.classList.toggle('active');
      document.body.classList.toggle('menu-open');
    });
    
    mobileOverlay.addEventListener('click', function() {
      sidebar.classList.remove('open');
      mobileOverlay.classList.remove('active');
      document.body.classList.remove('menu-open');
    });
  }
  
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

    // For actual links, don't toggle when clicked
    item.addEventListener('click', function(e) {
      // If clicking the link itself (not the toggle button)
      if (e.target === this) {
        if (this.getAttribute('href') === '#') {
          e.preventDefault();
          toggleTreeItem(this);
        } else {
          e.preventDefault();
          const href = this.getAttribute('href');
          
          // Prevent collapsing when navigating to a page
          const parent = this.parentElement;
          if (!parent.classList.contains('expanded')) {
            toggleTreeItem(this, true);
          }
          
          // Navigate after a small delay to ensure the expanded state is maintained
          setTimeout(() => {
            window.location.href = href;
          }, 50);
        }
      }
    });
  });
  
  // Disable transitions on initial load to prevent animation when expanding items
  // Add a class to body that disables transitions
  document.body.classList.add('no-transitions');
  
  // Call initially
  highlightCurrentPage();
  
  // Re-enable transitions after a short delay to allow initial state to be set
  setTimeout(() => {
    document.body.classList.remove('no-transitions');
  }, 100);
  
  // Handle child and grandchild navigation
  const childItems = document.querySelectorAll('.tree-nav .child-items > li > a');
  childItems.forEach(item => {
    const parent = item.parentElement;
    if (parent.querySelector('.grandchild-items')) {
      const toggleBtn = document.createElement('span');
      toggleBtn.className = 'tree-toggle';
      item.appendChild(toggleBtn);

      toggleBtn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        toggleTreeItem(item);
      });

      item.addEventListener('click', function(e) {
        if (e.target === this) {
          if (this.getAttribute('href') === '#') {
            e.preventDefault();
            toggleTreeItem(this);
          } else {
            e.preventDefault();
            const href = this.getAttribute('href');
            
            // Ensure expanded state is maintained
            if (!parent.classList.contains('expanded')) {
              toggleTreeItem(this, true);
            }
            
            // Navigate with a small delay
            setTimeout(() => {
              window.location.href = href;
            }, 50);
          }
        }
      });
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
  
  
  
  // Fix for mobile links not working after going back to home page
  function fixMobileLinks() {
    // This fixes the issue with links becoming disabled on mobile
    // by ensuring proper touch event handling
    if ('ontouchstart' in window || navigator.maxTouchPoints) {
      document.addEventListener('touchend', function(e) {
        if (e.target.tagName === 'A') {
          // Ensure links are properly clickable on mobile
          setTimeout(() => {
            if (e.target.getAttribute('href') && !e.defaultPrevented) {
              const href = e.target.getAttribute('href');
              
              // For wiki links, allow the click handler to work
              if (e.target.classList.contains('wiki-link')) {
                return;
              }
              
              // For anchor links, handle them specially
              if (hasAnchor(href) && isSamePage(href)) {
                e.preventDefault();
                const targetId = href.substring(href.indexOf('#') + 1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                  targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                  });
                }
                return;
              }
            }
          }, 10);
        }
      }, {passive: false});
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
    
    // Handle anchor links to prevent transition effect
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        // For anchor links, don't apply transition effect
        const targetId = this.getAttribute('href').substring(1);
        if (targetId) {
          e.preventDefault();
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            // Smooth scroll to element instead of transition effect
            targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }
      });
    });
  }
  
  // Store reference to updateNavIndicator for use in wiki link handler
  updateNavIndicatorFn = updateNavIndicator;
  
  // Initialize all features (wiki links already initialized at module level)
  setupPageTransitions();
  fixMobileLinks();
});

// Handle page restoration from browser cache (back/forward navigation)
// The pageshow event fires even when the page is loaded from cache
window.addEventListener('pageshow', function(event) {
  // Reset the highlighting flag when page is shown (new page or restored from cache)
  // This allows highlightCurrentPage to run again for new pages
  lastHighlightedPath = null;
  
  // If the page was restored from cache, re-initialize wiki links
  // The event delegation approach should already work, but we ensure content is visible
  if (event.persisted) {
    // Page was restored from cache (bfcache)
    const content = document.querySelector('.content');
    if (content) {
      // Remove any fade-out classes that might have been left
      content.classList.remove('fade-out');
      content.classList.add('fade-in');
    }
    
    // Disable transitions temporarily when restoring from cache
    document.body.classList.add('no-transitions');
    
    // Re-highlight current page in navigation
    // Check if DOM is ready
    if (document.readyState === 'loading') {
      // DOMContentLoaded hasn't fired yet, it will handle highlighting
      document.addEventListener('DOMContentLoaded', function() {
        highlightCurrentPage();
        setTimeout(() => {
          document.body.classList.remove('no-transitions');
        }, 100);
      });
    } else {
      // DOM is already ready, call it directly
      highlightCurrentPage();
      setTimeout(() => {
        document.body.classList.remove('no-transitions');
      }, 100);
    }
  }
}); 