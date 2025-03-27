module Jekyll
  class WikiGraph < Jekyll::Generator
    safe true
    priority :low  # Run after other generators

    def generate(site)
      @site = site
      @graph = { 'nodes' => [], 'links' => [] }
      @node_map = {}

      # First pass: create nodes for all content
      create_nodes_from_pages
      create_nodes_from_posts
      create_nodes_from_collections

      # Second pass: create links between content
      extract_links_from_pages
      extract_links_from_posts
      extract_links_from_collections

      # Store the graph data for use in templates
      site.data['wiki_graph'] = @graph
    end

    private

    def create_nodes_from_pages
      @site.pages.each do |page|
        add_node(page)
      end
    end

    def create_nodes_from_posts
      @site.posts.docs.each do |post|
        add_node(post)
      end
    end

    def create_nodes_from_collections
      @site.collections.each do |collection_name, collection|
        collection.docs.each do |doc|
          add_node(doc)
        end
      end
    end

    def add_node(page)
      return unless page.data['title']
      
      title = page.data['title'].to_s.strip
      url = page.url
      
      # Determine the type based on the URL or collection
      type = if page.respond_to?(:collection) && page.collection
        page.collection.label
      else
        case url
        when /^\/publications\//
          'publication'
        when /^\/readings\//
          'reading'
        when /^\/projects\//
          'project'
        when /^\/blog\//
          'post'
        else
          'page'
        end
      end
      
      # Add to graph if not already present
      unless @node_map.key?(title.downcase)
        node_id = @graph['nodes'].length
        @node_map[title.downcase] = node_id
        @graph['nodes'] << {
          'id' => node_id,
          'title' => title,
          'url' => url,
          'type' => type
        }
      end
    end

    def extract_links_from_pages
      @site.pages.each do |page|
        extract_links(page)
      end
    end

    def extract_links_from_posts
      @site.posts.docs.each do |post|
        extract_links(post)
      end
    end

    def extract_links_from_collections
      @site.collections.each do |collection_name, collection|
        collection.docs.each do |doc|
          extract_links(doc)
        end
      end
    end

    def extract_links(page)
      return unless page.data['title'] && page.content
      
      source_title = page.data['title'].to_s.strip.downcase
      source_id = @node_map[source_title]
      
      return unless source_id
      
      # Find all wiki-style links in content
      page.content.scan(/\[\[(.*?)\]\]/).each do |match|
        target_title = match[0].strip.downcase
        
        # Skip if we're linking to ourselves
        next if target_title == source_title
        
        # If target exists in our node map, add a link
        if @node_map.key?(target_title)
          target_id = @node_map[target_title]
          
          # Add link if it doesn't already exist
          unless @graph['links'].any? { |link| link['source'] == source_id && link['target'] == target_id }
            @graph['links'] << {
              'source' => source_id,
              'target' => target_id
            }
          end
        end
      end
    end
  end
end 