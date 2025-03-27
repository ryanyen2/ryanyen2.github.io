module Jekyll
  class BacklinksGenerator < Jekyll::Generator
    safe true
    priority :low  # Run after other generators

    def generate(site)
      @site = site
      
      # Initialize an empty hash for backlinks
      site.data['backlinks'] = {}
      
      # Find all wiki-style links in content and build backlinks
      collect_backlinks_from_pages
      collect_backlinks_from_posts
      collect_backlinks_from_collections
    end

    private

    def collect_backlinks_from_pages
      @site.pages.each do |page|
        collect_backlinks(page)
      end
    end

    def collect_backlinks_from_posts
      @site.posts.docs.each do |post|
        collect_backlinks(post)
      end
    end

    def collect_backlinks_from_collections
      @site.collections.each do |collection_name, collection|
        collection.docs.each do |doc|
          collect_backlinks(doc)
        end
      end
    end

    def collect_backlinks(page)
      return unless page.data['title'] && page.content
      
      source_title = page.data['title'].to_s.strip
      source_url = page.url
      
      # Find all wiki-style links in content
      page.content.scan(/\[\[(.*?)\]\]/).each do |match|
        target_title = match[0].strip
        
        # Skip if we're linking to ourselves
        next if target_title.downcase == source_title.downcase
        
        # Create key and record the backlink
        @site.data['backlinks'][target_title] ||= []
        @site.data['backlinks'][target_title] << {
          'title' => source_title,
          'url' => source_url
        }
      end
    end
  end
end 