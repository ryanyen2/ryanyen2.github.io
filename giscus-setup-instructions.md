# Setting up Giscus Comments on Your GitHub Pages Site

I've integrated the giscus comment system into your website. To complete the setup:

## Step 1: Enable GitHub Discussions

1. Go to your repository: https://github.com/ryanyen2/ryanyen2.github.io
2. Click on the "Settings" tab
3. Scroll down to the "Features" section
4. Enable "Discussions"

## Step 2: Install the giscus App

1. Visit https://github.com/apps/giscus
2. Click "Install"
3. Select "Only select repositories"
4. Choose your "ryanyen2/ryanyen2.github.io" repository
5. Confirm the installation

## Step 3: Get Your Configuration IDs

1. Visit https://giscus.app/
2. Enter your repository information:
   - Repository: ryanyen2/ryanyen2.github.io
3. In the "Page ↔️ Discussions Mapping" section:
   - Select "pathname"
4. In the "Discussion Category" section:
   - Either select an existing category or create a new one called "Comments"
   - Note the category name you selected
5. Look at the generated script at the bottom of the page:
   - Find `data-repo-id="..."` - Copy this value
   - Find `data-category-id="..."` - Copy this value

## Step 4: Update Your Configuration

1. Open your `_config.yml` file
2. Update these values with what you copied:
   ```yaml
   giscus:
     repo_id: "YOUR_COPIED_REPO_ID"
     category_id: "YOUR_COPIED_CATEGORY_ID" 
   ```

## Step 5: Test Your Comments

1. Run your site locally: `bundle exec jekyll serve`
2. Visit any blog post
3. Scroll to the bottom and you should see the comments section
4. If everything is working, commit and push your changes

## Troubleshooting

- If comments don't appear, check the browser console for errors
- Verify that GitHub Discussions is enabled for your repository
- Make sure the giscus app has access to your repository
- Confirm your repository ID and category ID are correct in `_config.yml`

Giscus will create a new discussion thread for each page automatically when someone comments for the first time. 