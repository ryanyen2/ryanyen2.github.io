document.addEventListener('DOMContentLoaded', function() {
  // Add lazy loading behavior to videos
  const videos = document.querySelectorAll('.video-container video');
  
  // Create an intersection observer for lazy loading
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const video = entry.target;
        // Only load the video when it's in viewport
        if (!video.getAttribute('data-loaded')) {
          // Force metadata loading first to get dimensions
          video.setAttribute('preload', 'metadata');
          video.load();
          video.setAttribute('data-loaded', 'true');
        }
      }
    });
  }, { 
    rootMargin: '200px 0px', // Load videos when they're within 200px of the viewport
    threshold: 0.1 
  });
  
  // Add thumbnails to videos that don't have them
  videos.forEach(video => {
    observer.observe(video);
    
    // Ensure video displays properly
    video.addEventListener('loadedmetadata', function() {
      // Video metadata is loaded, now we can ensure it displays correctly
      video.style.display = 'block';
    });
    
    // Add error handling
    video.addEventListener('error', function(e) {
      console.error('Video error:', e);
      // Add a placeholder if the video fails to load
      const container = video.closest('.video-container');
      if (container) {
        const placeholder = document.createElement('div');
        placeholder.className = 'video-error';
        placeholder.innerHTML = 'Video unavailable. Please try again later.';
        container.appendChild(placeholder);
      }
    });
  });
  
  // Handle YouTube iframes as well
  const iframes = document.querySelectorAll('.video-container iframe');
  iframes.forEach(iframe => {
    // Add loading="lazy" to iframes if not already present
    if (!iframe.getAttribute('loading')) {
      iframe.setAttribute('loading', 'lazy');
    }
  });
}); 