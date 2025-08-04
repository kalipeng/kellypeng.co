// Portfolio Manager - Dynamic Content Management System
// Handles rendering, filtering, and updates - Sidebar layout with banner projects

class PortfolioManager {
  constructor() {
    this.config = portfolioConfig;
    this.currentSection = 'cv';
  }

  init() {
    this.renderNavigation();
    this.renderProjectList();
    this.renderMainContent();
    this.renderProjects();
    this.attachEventListeners();
  }

  renderNavigation() {
    const navElement = document.querySelector('.nav-menu');
    if (!navElement) return;

    const navHTML = this.config.navigation.map(item => {
      const isExternal = item.external;
      const linkAttributes = isExternal 
        ? `href="${item.href}" target="_blank" rel="noopener noreferrer" class="nav-link external-link"`
        : `href="${item.href}" class="nav-link" data-section="${item.href}"`;
      
      return `<li class="nav-item">
        <a ${linkAttributes}>
          ${item.label}
        </a>
      </li>`;
    }).join('');

    navElement.innerHTML = navHTML;
  }

  renderProjectList() {
    const projectListElement = document.querySelector('#project-list ul');
    if (!projectListElement) return;

    const projectListHTML = portfolioConfig.projects.map(project => `
      <li class="project-item">
        <a href="${project.link}" class="project-link">
          ${project.title}
        </a>
      </li>
    `).join('');

    projectListElement.innerHTML = projectListHTML;
    
    // Re-attach event listeners for project links
    this.attachProjectListeners();
  }

  renderMainContent() {
    // Main content is now static in HTML - no dynamic updates needed
    // Keeping sidebar info and bio text as is
  }

  renderProjects() {
    const projectsContainer = document.querySelector('.projects-grid');
    if (!projectsContainer) return;

    const projectsHTML = this.config.projects.map(project => 
      this.createProjectCard(project)
    ).join('');

    projectsContainer.innerHTML = projectsHTML;
  }

  createProjectCard(project) {
    return `
      <div class="project-card" onclick="window.location.href='${project.link}'">
        <div class="project-visual">
          <img src="${project.image}" alt="${project.title}" onerror="this.style.display='none'">
        </div>
        <div class="project-info">
          <div class="project-category">${project.category}</div>
          <h3 class="project-title">${project.title}</h3>
          <p class="project-description">${project.description}</p>
          <div class="project-year">${project.year}</div>
        </div>
      </div>
    `;
  }

  generateImageContent(imageConfig) {
    switch (imageConfig.type) {
      case 'phone-mockup':
        return this.createPhoneMockup(imageConfig.content);
      case 'desktop-mockup':
        return this.createDesktopMockup(imageConfig.content);
      case 'medical-interface':
        return this.createMedicalInterface(imageConfig.content);
      case 'architectural':
        return this.createArchitecturalDesign(imageConfig.content);
      case 'logo-design':
        return this.createLogoDesign(imageConfig.content);
      case 'project-image':
        return this.createProjectImage(imageConfig);
      default:
        return '<div class="placeholder-content">Project Visual</div>';
    }
  }

  createProjectImage(config) {
    return `<img src="${config.src}" alt="${config.alt}" class="project-main-image">`;
  }

  createPhoneMockup(content) {
    return `
      <div class="phone-frame">
        <div class="phone-screen">
          <div class="app-interface">
            <div class="status-bar">9:41 AM</div>
            <div class="app-header">${content.appName || 'App'}</div>
            <div class="app-content">
              ${content.features ? content.features.map(f => `<div class="feature-item">${f}</div>`).join('') : ''}
            </div>
          </div>
        </div>
      </div>
    `;
  }

  createDesktopMockup(content) {
    return `
      <div class="desktop-frame">
        <div class="desktop-screen">
          <div class="browser-chrome">
            <div class="browser-controls">
              <div class="control red"></div>
              <div class="control yellow"></div>
              <div class="control green"></div>
            </div>
            <div class="address-bar">${content.url || 'https://example.com'}</div>
          </div>
          <div class="webpage-content">
            <h2>${content.title || 'Website Title'}</h2>
            <p>${content.description || 'Website description'}</p>
          </div>
        </div>
      </div>
    `;
  }

  createMedicalInterface(content) {
    return `
      <div class="medical-dashboard">
        <div class="billing-card">
          <div class="amount-display">${content.amount}</div>
          <div class="billing-details">
            <div class="detail-row">
              <span>Medical Service</span>
              <span>$${content.amount.replace('$', '')}</span>
            </div>
            <div class="detail-row">
              <span>Insurance Coverage</span>
              <span>Pending</span>
            </div>
          </div>
          <button class="pay-button">Pay Now</button>
        </div>
      </div>
    `;
  }

  createArchitecturalDesign(content) {
    return `
      <div class="architectural-showcase">
        <div class="book-mockup">
          <div class="book-cover">
            <div class="book-title">Architectural Study</div>
            <div class="book-subtitle">Design Exploration</div>
          </div>
        </div>
      </div>
    `;
  }

  createLogoDesign(content) {
    return `
      <div class="logo-showcase">
        <div class="logo-container">
          <div class="logo-text">${content.logo}</div>
          <div class="logo-elements">
            ${content.colors.map(color => `<div class="logo-element" style="background: ${color}"></div>`).join('')}
          </div>
        </div>
      </div>
    `;
  }

  selectSection(sectionId) {
    // Update current section
    this.currentSection = sectionId;

    // Update active nav item
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.remove('active');
      if (link.dataset.section === sectionId) {
        link.classList.add('active');
      }
    });
  }

  attachProjectListeners() {
    // Project list items
    document.querySelectorAll('.project-link').forEach(link => {
      link.addEventListener('click', (e) => {
        // Links will navigate to individual project pages
        console.log('Navigating to project:', link.href);
      });
    });
  }

  attachEventListeners() {
    // Navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        this.selectSection(link.dataset.section);
      });
    });

    // Initial project list listeners
    this.attachProjectListeners();
  }

  // Public API for dynamic content management
  addProject(project) {
    this.config.projects.push(project);
    this.renderProjects();
    this.renderProjectList();
  }

  updateProject(projectId, updatedData) {
    const projectIndex = this.config.projects.findIndex(p => p.id === projectId);
    if (projectIndex !== -1) {
      this.config.projects[projectIndex] = { ...this.config.projects[projectIndex], ...updatedData };
      this.renderProjects();
      this.renderProjectList();
    }
  }

  removeProject(projectId) {
    this.config.projects = this.config.projects.filter(p => p.id !== projectId);
    this.renderProjects();
    this.renderProjectList();
  }
}

// Auto-initialize PortfolioManager when script loads
if (typeof portfolioConfig !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    console.log('Auto-initializing PortfolioManager...');
    window.portfolioManager = new PortfolioManager();
    window.portfolioManager.init();
    console.log('PortfolioManager initialized successfully');
  });
} 