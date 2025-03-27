module Jekyll
  class WikiLinkTag < Liquid::Tag
    def initialize(tag_name, text, tokens)
      super
      @text = text.strip
    end

    def render(context)
      site = context.registers[:site]
      
      # Get all available paths from collections
      all_paths = {}
      
      # Add posts
      site.posts.docs.each do |post|
        title = post.data['title'].to_s.strip
        all_paths[title.downcase] = post.url
      end
      
      # Add pages
      site.pages.each do |page|
        title = page.data['title'].to_s.strip
        all_paths[title.downcase] = page.url if title && !title.empty?
      end
      
      # Add collection items
      site.collections.each do |collection_name, collection|
        collection.docs.each do |doc|
          title = doc.data['title'].to_s.strip
          all_paths[title.downcase] = doc.url if title && !title.empty?
        end
      end
      
      # Find match by title
      path = all_paths[@text.downcase]
      
      if path
        link_class = 'wiki-link'
        "<a href=\"#{path}\" class=\"#{link_class}\" data-target=\"#{@text}\">#{@text}</a>"
      else
        # If no match is found, create a link to a search page or use a default path
        slug = @text.downcase.gsub(/\s+/, '-')
        
        # Determine the most likely section based on the text
        if @text =~ /publication/i || @text =~ /Code Shaping/i || @text =~ /CoLadder/i || @text =~ /CoPrompt/i || @text =~ /Memolet/i
          path = "/publications/#{slug}"
        elsif @text =~ /reading/i || @text =~ /Reification/i || @text =~ /Demonstrational/i || @text =~ /Cognitive/i
          path = "/readings/#{slug}"
        elsif @text =~ /project/i
          path = "/projects/#{slug}"
        elsif @text == 'Blog'
          path = "/#{slug.downcase}/"
        else
          # Default to blog if we can't determine
          path = "/blog/#{slug}"
        end
        
        "<a href=\"#{path}\" class=\"wiki-link missing\" data-target=\"#{@text}\">#{@text}</a>"
      end
    end
  end
end

# Register the tag
Liquid::Template.register_tag('wikilink', Jekyll::WikiLinkTag)

# Also create a filter that can be used in markdown content
module Jekyll
  module WikiLinkFilter
    def wikilink(input)
      # Convert all [[text]] to wikilinks
      input.gsub(/\[\[(.*?)\]\]/) do |match|
        text = $1
        site = @context.registers[:site]
        
        # Try to find the page in the site
        found_page = find_page(site, text)
        
        if found_page
          "<a href=\"#{found_page.url}\" class=\"wiki-link\" data-target=\"#{text}\">#{text}</a>"
        else
          # Determine the most likely section based on the text
          slug = text.downcase.gsub(/\s+/, '-')
          
          if text =~ /publication/i || text =~ /Code Shaping/i || text =~ /CoLadder/i || text =~ /CoPrompt/i || text =~ /Memolet/i
            path = "/publications/#{slug}"
          elsif text =~ /reading/i || text =~ /Reification/i || text =~ /Demonstrational/i || text =~ /Cognitive/i || text =~ /Instrumental/i || text =~ /Direct Manipulation/i
            path = "/readings/#{slug}"
          elsif text =~ /project/i
            path = "/projects/#{slug}"
          elsif text == 'Blog'
            path = "/#{slug.downcase}/"
          else
            # Default to blog if we can't determine
            path = "/blog/#{slug}"
          end
          
          "<a href=\"#{path}\" class=\"wiki-link missing\" data-target=\"#{text}\">#{text}</a>"
        end
      end
    end
    
    private
    
    def find_page(site, title)
      # Check regular pages
      site.pages.each do |page|
        return page if page.data['title']&.strip&.downcase == title.downcase
      end
      
      # Check posts
      site.posts.docs.each do |post|
        return post if post.data['title']&.strip&.downcase == title.downcase
      end
      
      # Check collections
      site.collections.each do |collection_name, collection|
        collection.docs.each do |doc|
          return doc if doc.data['title']&.strip&.downcase == title.downcase
        end
      end
      
      nil
    end
  end
end

Liquid::Template.register_filter(Jekyll::WikiLinkFilter) 