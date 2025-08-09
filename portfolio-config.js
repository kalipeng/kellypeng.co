// Portfolio configuration
const portfolioConfig = {
    personal: {
        name: "Kelly Peng",
        title: "Product Designer",
        email: "kelly@example.com",
        bio: "Previously, she designed human interfaces at Weill Cornell Medicine and worked for Simon and ASML.",
        location: "San Francisco, CA"
    },
    
    navigation: [
        { label: "Résumé", href: "resume.html" },
        { label: "Playground", href: "playground.html" },
        { label: "Ideas", href: "https://medium.com/@kellypear01", external: true }
    ],
    
    projects: [
        {
            id: "simon-smart",
            title: "Simon Smart",
            subtitle: "Smart Home Interface Design",
            description: "An intuitive smart home application that prioritizes scene-based automation over individual device controls.",
            image: "image/Simonmainpagebanner.jpg",
            imageWebp: "image/Simonmainpagebanner.webp",
            imageType: "image",
            category: "Product Design",
            year: "2024",
            link: "simon-smart.html",
            featured: true
        },
        {
            id: "weill-cornell-medicine",
            title: "Weill Cornell Medicine",
            subtitle: "Medical Interface & Patient Experience",
            description: "Digital transformation project to modernize patient care through innovative technology solutions.",
            image: "image/Weill cornell/main.png",
            imageType: "image",
            category: "Healthcare",
            year: "2023",
            link: "weill-cornell-medicine.html",
            featured: true
        },
        {
            id: "tmobile-carelink",
            title: "T-Mobile CareLink",
            subtitle: "Healthcare Communication Platform",
            description: "A comprehensive healthcare communication platform designed to bridge the gap between patients and healthcare providers.",
            image: "image/Tmobilemainpage.png",
            imageWebp: "image/Tmobilemainpage.webp",
            imageType: "image",
            category: "Healthcare",
            year: "2023",
            link: "tmobile-carelink.html",
            featured: true
        }

    ]
};

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = portfolioConfig;
}

// Global variable for browser usage
window.portfolioConfig = portfolioConfig; 