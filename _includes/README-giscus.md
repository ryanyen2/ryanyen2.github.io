# Setting up Giscus Comments

To complete the setup of giscus comments on your GitHub Pages site, follow these steps:

1. Make sure GitHub Discussions is enabled in your repository settings.
   - Go to your repository's Settings → Features → Check "Discussions"

2. Install the [giscus GitHub App](https://github.com/apps/giscus) for your repository.
   - Visit https://github.com/apps/giscus
   - Click "Install"
   - Select "Only select repositories"
   - Choose your "ryanyen2/ryanyen2.github.io" repository

3. Get your repository ID and category ID:
   - Visit https://giscus.app/
   - Enter your repository information (ryanyen2/ryanyen2.github.io)
   - Choose "Pathname" as the Page ↔️ Discussions mapping
   - Select the discussion category (typically "Announcements" or create a new "Comments" category)
   - Copy the generated script and look for:
     - `data-repo-id="..."` - This is your repository ID
     - `data-category-id="..."` - This is your category ID

4. Update your `_config.yml` file with these values:
   ```yaml
   giscus:
     enabled: true
     repo: "ryanyen2/ryanyen2.github.io"
     repo_id: "YOUR_REPO_ID_HERE"
     category_name: "Comments" # or whichever category you chose
     category_id: "YOUR_CATEGORY_ID_HERE"
   ```

5. Rebuild and deploy your site.

When complete, comments should appear at the bottom of all your posts. 