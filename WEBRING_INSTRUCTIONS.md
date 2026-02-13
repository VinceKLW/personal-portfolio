# OTU Webring - HTML Snippet

## How to Add the Webring to Your Site

Simply copy and paste the HTML snippet from `webring-snippet.html` into your website's footer (or wherever you want the webring to appear).

### What the Snippet Does

1. **Automatically detects your site URL** - No configuration needed!
2. **Strips the `www.` prefix** - Works whether your site uses `www.` or not
3. **Creates working navigation links** - Previous and Next buttons that cycle through the webring

### Features

- ✅ Zero configuration - just paste and it works
- ✅ Automatically detects your domain
- ✅ Handles both `www.` and non-`www` domains
- ✅ Styled to match the OTU webring aesthetic
- ✅ Hover effects on navigation buttons

### Customization

You can customize the styling by modifying the inline styles in the snippet:
- Change colors (currently `#71717a` for text, `#fafafa` for hover)
- Adjust spacing (currently `gap: 16px`)
- Modify button size (currently `font-size: 16px`)
- Change logo size (currently `height: 20px`)

### Example Usage

```html
<footer>
  <!-- Your other footer content -->
  
  <!-- Paste the webring snippet here -->
  <div id="otu-webring" style="...">
    <!-- webring HTML -->
  </div>
</footer>
```

### Requirements

- Your site must be registered in the OTU webring's `sites.json`
- The webring expects your domain **without** the `www.` prefix in the registry
- Works with any HTML website (React, Vue, plain HTML, etc.)
