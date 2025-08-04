# Portfolio CMS Guide - Kelly Peng Portfolio

## 📋 Overview

This portfolio system is built with a simple, file-based CMS that allows you to easily manage your projects, images, and content without dealing with complex databases or interfaces.

## 🏗️ System Architecture

```
Kellypeng.co/
├── kelly_portfolio.html          # Main portfolio page
├── portfolio-config.js           # Central content management
├── portfolio-manager.js          # Dynamic rendering logic
├── project-template.html         # Template for new projects
├── simon-smart.html              # Project detail pages
├── tmobile-carelink.html
├── weill-cornell-medicine.html
├── walls-and-windows.html
├── fiji-kidney-center.html
└── image/                        # All project images
    ├── Simonmainpagebanner.jpg
    ├── Tmobilemainpage.png
    └── [your-new-images]
```

## 🎯 Content Management

### 1. Adding New Projects

#### Step 1: Add Project Data to `portfolio-config.js`
```javascript
{
  id: "your-project-id",
  title: "Your Project Title",
  subtitle: "Project Location/Context", 
  category: "your-category",
  description: "Brief project description for the main page",
  year: "2024",
  tags: ["Tag1", "Tag2", "Tag3"],
  image: {
    type: "project-image",
    src: "image/your-project-banner.jpg",
    alt: "Your project banner description"
  },
  featured: true
}
```

#### Step 2: Create Project Detail Page
1. Copy `project-template.html`
2. Rename to `your-project-id.html`
3. Replace all placeholder content:
   - `{{PROJECT_TITLE}}` → Your Project Title
   - `{{PROJECT_SUBTITLE}}` → Your subtitle
   - `{{PROJECT_YEAR}}` → Project year
   - `{{PROJECT_CATEGORY}}` → Project category
   - `{{PROJECT_ROLE}}` → Your role
   - `{{PROJECT_TAGS}}` → HTML tags like `<span class="tag">Design</span>`
   - `{{HERO_IMAGE}}` → Main project image path
   - Content sections with your actual content

#### Step 3: Add Images
1. Place all images in the `image/` folder
2. Use descriptive, web-friendly names (no spaces, lowercase)
3. Recommended formats: JPG for photos, PNG for graphics
4. Optimal size: 1200px width for hero images

### 2. Image Management

#### Image Types Supported:
- **project-image**: Real project screenshots/photos
- **phone-mockup**: Mobile app interfaces
- **desktop-mockup**: Website interfaces  
- **medical-interface**: Healthcare interfaces
- **architectural**: Architecture/design projects
- **logo-design**: Branding projects

#### Adding Images to Gallery:
```html
<div class="gallery-item">
    <img src="image/your-detail-image.jpg" alt="Descriptive alt text">
</div>
```

### 3. Updating Existing Projects

#### Edit Project Info:
1. Open `portfolio-config.js`
2. Find your project by `id`
3. Update any field (title, description, tags, etc.)
4. Save file - changes appear immediately

#### Edit Project Details:
1. Open the corresponding `project-name.html` file
2. Modify content in the sections:
   - Project Overview
   - Design Process  
   - Key Features
   - Results & Impact
3. Add/remove gallery images
4. Save file

## 🎨 Styling and Themes

### Theme Toggle
- Users can switch between light/dark modes
- Preference is saved in browser localStorage
- Both themes follow Apple Design System guidelines

### Customizing Styles
All visual styling is contained within each HTML file's `<style>` section:
- Colors follow CSS custom properties (variables)
- Typography uses Apple's SF Pro fonts
- Spacing follows 8px grid system
- Responsive design included

## 📁 File Organization Best Practices

### Project IDs
- Use kebab-case: `simon-smart`, `tmobile-carelink`
- Keep consistent with file names
- No spaces or special characters

### Image Naming
```
image/
├── projectname-main-banner.jpg     # Hero images
├── projectname-detail-1.jpg        # Detail images
├── projectname-detail-2.jpg
├── projectname-process-1.jpg       # Process images
└── projectname-results.jpg         # Results images
```

### Content Structure
Each project should include:
- Hero image (main banner)
- Project overview (1-2 paragraphs)
- Design process description
- 2-4 detail images
- Key features list
- Results and impact

## 🔧 Advanced Features

### Adding New Project Categories
1. Add to `filterCategories` in `portfolio-config.js`:
```javascript
filterCategories: [
  { id: "new-category", label: "New Category" }
]
```

### Custom Image Types
To add new image display types:
1. Add case to `generateImageContent()` in `portfolio-manager.js`
2. Create corresponding CSS styles
3. Update project config to use new type

### Dynamic Content Areas
Each project page has a CMS content area:
```html
<div class="cms-content">
    <!-- Add custom sections here -->
</div>
```

## 🚀 Deployment

### Local Development
```bash
cd /Users/tianyipeng/Desktop/Kellypeng.co
python3 -m http.server 8000
# Visit: http://localhost:8000/kelly_portfolio.html
```

### Production Deployment
1. Upload all files to web server
2. Ensure `image/` folder permissions are correct
3. Test all project links work
4. Verify images load properly

## 📝 Content Guidelines

### Writing Project Descriptions
- **Main page**: 1-2 sentences, focus on impact
- **Detail page**: Comprehensive, tell the story
- **Use active voice**: "Designed interface that improved..." 
- **Include metrics**: "Increased user engagement by 40%"

### Image Requirements
- **Hero images**: 1200x800px minimum
- **Detail images**: 800px width minimum  
- **File size**: Under 1MB for web performance
- **Alt text**: Always include descriptive alt text

### SEO Optimization
- Use descriptive project titles
- Include relevant keywords in descriptions
- Optimize image alt text
- Keep URLs clean (project-name.html)

## 🛠️ Troubleshooting

### Common Issues:

**Images not loading:**
- Check file path in `image/` folder
- Verify image file name matches config
- Ensure no spaces in file names

**Project links broken:**
- Verify project ID matches HTML file name
- Check `portfolio-config.js` syntax
- Ensure all quotes are properly closed

**Styling issues:**
- Check CSS syntax in `<style>` sections
- Verify CSS custom properties are defined
- Test in both light/dark modes

### Getting Help
- Check browser console for JavaScript errors
- Validate HTML syntax
- Test with browser developer tools

## 📈 Future Enhancements

### Planned Features:
- Contact form integration
- Blog/articles section
- Project filtering by technology
- Animation improvements
- Performance optimizations

### Customization Ideas:
- Add video galleries
- Include testimonials
- Create case study templates
- Add project timelines
- Social media integration

---

**Last Updated**: January 2025  
**Version**: 1.0  
**Author**: Portfolio CMS System 