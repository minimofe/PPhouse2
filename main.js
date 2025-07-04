const properties = [
  {
    id: 1,
    image: 'home/home1.jpg',
    price: '$1,250,000',
    location: 'Bankkok Thailand',
    type: 'house',
    bedrooms: 4,
    bathrooms: 3,
    size: '00ft',
    featured: true
  },
  {
    id: 2,
    image: 'home/home2.jpg',
    price: '$2,100,000',
    location: 'Bankkok Thailand',
    type: 'house',
    bedrooms: 5,
    bathrooms: 4,
    size: '00ft',
    featured: false
  },
  {
    id: 3,
    image: 'home/home3.webp',
    price: '$1,750,000',
    location: 'Bankkok Thailand',
    type: 'house',
    bedrooms: 4,
    bathrooms: 3,
    size: '00ft',
    featured: false
  },
  {
    id: 4,
    image: 'home/home4.jpg',
    price: '$950,000',
    location: 'Bankkok Thailand',
    type: 'house',
    bedrooms: 3,
    bathrooms: 2,
    size: '00ft',
    featured: true
  },
  {
    id: 5,
    image: 'home/home5.jpg',
    price: '$1,450,000',
    location: 'Bankkok Thailand',
    type: 'house',
    bedrooms: 4,
    bathrooms: 3,
    size: '00ft',
    featured: false
  },
  {
    id: 6,
    image: 'home/home6.jpg',
    price: '$875,000',
    location: 'Bankkok Thailand',
    type: 'house',
    bedrooms: 3,
    bathrooms: 2,
    size: '00ft',
    featured: false
  },
  {
    id: 7,
    image: 'home/home7.jpg',
    price: '$1,150,000',
    location: 'Bankkok Thailand',
    type: 'house',
    bedrooms: 4,
    bathrooms: 3,
    size: '00ft',
    featured: true
  },
  {
    id: 8,
    image: 'home/home8.jpg',
    price: '$2,250,000',
    location: 'Bankkok Thailand',
    type: 'house',
    bedrooms: 5,
    bathrooms: 4,
    size: '00ft',
    featured: false
  },
  {
    id: 9,
    image: 'home/home9.jpg',
    price: '$1,350,000',
    location: 'Bankkok Thailande',
    type: 'house',
    bedrooms: 4,
    bathrooms: 3,
    size: '00ft',
    featured: false
  },
  {
    id: 10,
    image: 'home/home10.jpg',
    price: '$1,850,000',
    location: 'Bankkok Thailand',
    type: 'house',
    bedrooms: 5,
    bathrooms: 4,
    size: '00ft',
    featured: true
  },

  {
    id: 11,
    image: 'home/condo1.jpg',
    price: '$450,000',
    location: 'Bankkok Thailand',
    type: 'condo',
    bedrooms: 2,
    bathrooms: 2,
    size: '00ft',
    featured: true
  },
  {
    id: 12,
    image: 'home/condo2.jpg',
    price: '$850,000',
    location: 'Bankkok Thailand',
    type: 'condo',
    bedrooms: 3,
    bathrooms: 2,
    size: '00ft',
    featured: true
  },
  {
    id: 13,
    image: 'home/condo3.jpg',
    price: '$675,000',
    location: 'Bankkok Thailand',
    type: 'condo',
    bedrooms: 2,
    bathrooms: 2,
    size: '00ft',
    featured: false
  },
  {
    id: 14,
    image: 'home/condo4.jpg',
    price: '$525,000',
    location: 'Bankkok Thailand',
    type: 'condo',
    bedrooms: 2,
    bathrooms: 2,
    size: '00ft',
    featured: false
  },
  {
    id: 15,
    image: 'home/condo5.jpg',
    price: '$750,000',
    location: 'Bankkok Thailand',
    type: 'condo',
    bedrooms: 3,
    bathrooms: 2,
    size: '00ft',
    featured: true
  },
  {
    id: 16,
    image: 'home/condo6.jpg',
    price: '$395,000',
    location: 'Bankkok Thailand',
    type: 'condo',
    bedrooms: 2,
    bathrooms: 1,
    size: '00ft',
    featured: false
  },
  {
    id: 17,
    image: 'home/condo7.jpg',
    price: '$625,000',
    location: 'Bankkok Thailand',
    type: 'condo',
    bedrooms: 2,
    bathrooms: 2,
    size: '00ft',
    featured: false
  },
  {
    id: 18,
    image: 'home/condo8.jpg',
    price: '$925,000',
    location: 'Bankkok Thailand',
    type: 'condo',
    bedrooms: 3,
    bathrooms: 2,
    size: '00ft',
    featured: true
  },
  {
    id: 19,
    image: 'home/condo9.jpg',
    price: '$485,000',
    location: 'Bankkok Thailand',
    type: 'condo',
    bedrooms: 2,
    bathrooms: 2,
    size: '00ft',
    featured: false
  },
  {
    id: 20,
    image: 'home/condo10.jpg',
    price: '$775,000',
    location: 'Bankkok Thailand',
    type: 'condo',
    bedrooms: 3,
    bathrooms: 2,
    size: '00ft',
    featured: false
  },

  // Apartments (12 properties)
  {
    id: 21,
    image: 'home/ap1.jpg',
    price: '$750,000',
    location: 'Bankkok Thailand',
    type: 'apartment',
    bedrooms: 3,
    bathrooms: 2,
    size: '00ft',
    featured: true
  },
  {
    id: 22,
    image: 'home/ap2.jpg',
    price: '$325,000',
    location: 'Bankkok Thailand',
    type: 'apartment',
    bedrooms: 1,
    bathrooms: 1,
    size: '00ft',
    featured: false
  },
  {
    id: 23,
    image: 'home/ap3.jpg',
    price: '$550,000',
    location: 'Bankkok Thailand',
    type: 'apartment',
    bedrooms: 2,
    bathrooms: 2,
    size: '00ft',
    featured: false
  },
  {
    id: 24,
    image: 'home/ap4.jpg',
    price: '$425,000',
    location: 'Bankkok Thailand',
    type: 'apartment',
    bedrooms: 2,
    bathrooms: 1,
    size: '00ft',
    featured: false
  },
  {
    id: 25,
    image: 'home/ap5.jpg',
    price: '$375,000',
    location: 'Bankkok Thailand',
    type: 'apartment',
    bedrooms: 1,
    bathrooms: 1,
    size: '00ft',
    featured: true
  },
  {
    id: 26,
    image: 'home/ap6.jpg',
    price: '$650,000',
    location: 'Bankkok Thailand',
    type: 'apartment',
    bedrooms: 2,
    bathrooms: 2,
    size: '00ft',
    featured: false
  },
  {
    id: 27,
    image: 'home/ap7.webp',
    price: '$495,000',
    location: 'Bankkok Thailand',
    type: 'apartment',
    bedrooms: 2,
    bathrooms: 1,
    size: '00ft',
    featured: false
  },
  {
    id: 28,
    image: 'home/ap8.jpg',
    price: '$725,000',
    location: 'Bankkok Thailand',
    type: 'apartment',
    bedrooms: 3,
    bathrooms: 2,
    size: '00ftt',
    featured: true
  },
  {
    id: 29,
    image: 'home/ap9.jpg',
    price: '$385,000',
    location: 'Bankkok Thailand',
    type: 'apartment',
    bedrooms: 1,
    bathrooms: 1,
    size: '00ft',
    featured: false
  },
  {
    id: 30,
    image: 'home/ap10.jpg',
    price: '$575,000',
    location: 'Bankkok Thailand',
    type: 'apartment',
    bedrooms: 2,
    bathrooms: 2,
    size: '00ft',
    featured: false
  },
];

let filteredProperties = [...properties];
let currentTab = 'all';

function createPropertyCard(property) {
  return `
    <div class="property-card" data-type="${property.type}" data-price="${property.price.replace(/[$,]/g, '')}">
      <div class="property-image">
        <img src="${property.image}" alt="Property in ${property.location}" loading="lazy">
        ${property.featured ? '<span class="featured-badge">Featured</span>' : ''}
        <span class="property-type-badge">${property.type}</span>
      </div>
      <div class="property-content">
        <div class="property-price">${property.price}</div>
        <div class="property-location">
          <i class="fas fa-map-marker-alt"></i>
          ${property.location}
        </div>
        <div class="property-features">
          <span class="feature">
            <i class="fas fa-bed"></i>
            ${property.bedrooms} bed
          </span>
          <span class="feature">
            <i class="fas fa-bath"></i>
            ${property.bathrooms} bath
          </span>
          <span class="feature">
            <i class="fas fa-ruler-combined"></i>
            ${property.size}
          </span>
        </div>
        <button class="view-details-btn" onclick="viewDetails(${property.id})">
          View Details
        </button>
      </div>
    </div>
  `;
}

function renderProperties(propertiesToRender) {
  const grid = document.getElementById('propertiesGrid');
  if (propertiesToRender.length === 0) {
    grid.innerHTML = '<div class="no-results">No properties found matching your criteria.</div>';
    return;
  }
  
  grid.innerHTML = propertiesToRender.map(property => createPropertyCard(property)).join('');
}

function handleTabSwitch(type) {
  currentTab = type;
  
  document.querySelectorAll('.tab-button').forEach(btn => {
    btn.classList.remove('active');
  });
  
  const activeTab = document.querySelector(`[data-type="${type}"]`);
  activeTab.classList.add('active');
  
  activeTab.style.transform = 'scale(0.95)';
  setTimeout(() => {
    activeTab.style.transform = '';
  }, 150);
  
  let baseProperties = type === 'all' ? properties : properties.filter(p => p.type === type);
  applyFilters(baseProperties);
}

function applyFilters(baseProperties = null) {
  const searchTerm = document.getElementById('searchInput').value.toLowerCase();
  const priceFilter = document.getElementById('priceFilter').value;
  
  if (!baseProperties) {
    baseProperties = currentTab === 'all' ? properties : properties.filter(p => p.type === currentTab);
  }

  filteredProperties = baseProperties.filter(property => {

    const matchesSearch = property.location.toLowerCase().includes(searchTerm);
    
    let matchesPrice = true;
    if (priceFilter) {
      const price = parseInt(property.price.replace(/[$,]/g, ''));
      if (priceFilter === '0-500000') {
        matchesPrice = price < 500000;
      } else if (priceFilter === '500000-1000000') {
        matchesPrice = price >= 500000 && price < 1000000;
      } else if (priceFilter === '1000000-2000000') {
        matchesPrice = price >= 1000000 && price < 2000000;
      } else if (priceFilter === '2000000+') {
        matchesPrice = price >= 2000000;
      }
    }
    
    return matchesSearch && matchesPrice;
  });
  
  renderProperties(filteredProperties);
}

function viewDetails(propertyId) {
  const property = properties.find(p => p.id === propertyId);
  
  const details = `
🏠 Property Details

📍 Location: ${property.location}
🏷️ Type: ${property.type.charAt(0).toUpperCase() + property.type.slice(1)}
💰 Price: ${property.price}
🛏️ Bedrooms: ${property.bedrooms}
🛁 Bathrooms: ${property.bathrooms}
📐 Size: ${property.size}
⭐ Featured: ${property.featured ? 'Yes' : 'No'}
  `;
  
  alert(details);
}

document.addEventListener('DOMContentLoaded', function() {
  renderProperties(properties);
  
  document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      const type = this.getAttribute('data-type');
      handleTabSwitch(type);
    });
    
    button.addEventListener('touchstart', function() {
      this.style.transform = 'scale(0.95)';
    });
    
    button.addEventListener('touchend', function() {
      setTimeout(() => {
        this.style.transform = '';
      }, 150);
    });
  });

  let searchTimeout;
  document.getElementById('searchInput').addEventListener('input', () => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => applyFilters(), 300);
  });
  
  document.getElementById('priceFilter').addEventListener('change', () => applyFilters());
  
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  
  hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });
  
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });
  
  document.addEventListener('click', function(e) {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    }
  });
  
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});