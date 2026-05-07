// Data
const pets = [
  {
    id: 'pet-1',
    name: 'Greg',
    breed: 'Golden Retriever',
    type: 'dog',
    image: 'https://i.pinimg.com/736x/7d/ba/48/7dba484ef4f77f4e73dd23602e67f8b0.jpg',
    description: 'Un câine plin de energie și iubire, gata să devină cel mai bun prieten al tău.',
    age: 3,
    ageText: '3 ani',
    weight: '28 kg',
    traits: [
      { label: 'Vorbăreț', value: 65 },
      { label: 'Bland', value: 95 },
      { label: 'Jucăuș', value: 85 },
      { label: 'Bun cu copiii', value: 90 },
    ],
    fullDescription: 'Greg este un Golden Retriever plin de viață și dragoste. Adoră să joace, să alerge și să petreacă timp cu familia sa. Este extrem de bland și pacient cu copiii, ceea ce îl face perfect pentru familiile cu copii mici. Greg iubește apa și va fi fericit să te însoțească în aventuri în aer liber.',
    isVaccinated: true,
    hasHealthCertificate: true,
    healthStatus: 'Fără boli, sănătos',
  },
  {
    id: 'pet-2',
    name: 'Cathy',
    breed: 'British Shorthair',
    type: 'cat',
    image: 'https://i.pinimg.com/736x/2f/3e/d1/2f3ed11527805f5ba9249657edc5c8a6.jpg',
    description: 'O pisică elegantă și calmă, perfectă pentru o casă liniștită și plină de dragoste.',
    age: 2,
    ageText: '2 ani',
    weight: '4.5 kg',
    traits: [
      { label: 'Vorbăreț', value: 30 },
      { label: 'Bland', value: 80 },
      { label: 'Jucăuș', value: 60 },
      { label: 'Bun cu copiii', value: 75 },
    ],
    fullDescription: 'Cathy este o pisică frumoasă și liniștită cu o personalitate dulce. Iubește să se culce în locuri confortabile și să primească atenție de la oamenii pe care îi iubește. Este sociabilă și se înțelege bine cu copiii, dar preferă un mediu calm și stabil.',
    isVaccinated: true,
    hasHealthCertificate: true,
    healthStatus: 'Fără boli, sănătoasă',
  },
  {
    id: 'pet-3',
    name: 'Charlie',
    breed: 'Labrador Mix',
    type: 'dog',
    image: 'https://i.pinimg.com/736x/92/da/bf/92dabf0d9a05563645bbe4a22ca54491.jpg',
    description: 'Un câine jucăuș și prietenos, care iubește să joace și să petreacă timp cu oameni.',
    age: 4,
    ageText: '4 ani',
    weight: '32 kg',
    traits: [
      { label: 'Vorbăreț', value: 75 },
      { label: 'Bland', value: 85 },
      { label: 'Jucăuș', value: 90 },
      { label: 'Bun cu copiii', value: 88 },
    ],
    fullDescription: 'Charlie este un Labrador plin de energie și veselie. Iubește să joace cu mingea, să alerge și să facă prieteni noi. Este foarte bland și pacient, ceea ce îl face excelent cu copiii. Charlie are nevoie de exercițiu zilnic și de multă atenție.',
    isVaccinated: true,
    hasHealthCertificate: true,
    healthStatus: 'Fără boli, sănătos',
  },
  {
    id: 'pet-4',
    name: 'Bella',
    breed: 'Cocker Spaniel',
    type: 'dog',
    image: 'https://i.pinimg.com/1200x/76/a4/ff/76a4ff4c1180f9a61684733757b1cee2.jpg',
    description: 'O cățelușă dulce și afectuoasă, plină de iubire.',
    age: 1,
    ageText: '1 an',
    weight: '14 kg',
    traits: [
      { label: 'Vorbăreț', value: 55 },
      { label: 'Bland', value: 92 },
      { label: 'Jucăuș', value: 78 },
      { label: 'Bun cu copiii', value: 85 },
    ],
    fullDescription: 'Bella este o Cocker Spaniel frumoasă cu urechi lungi și o personalitate dulce. Iubește să fie aproape de oameni și este foarte afectuoasă. Bella se joacă ușor și este perfectă pentru familiile care caută un companion calm dar vesel.',
    isVaccinated: true,
    hasHealthCertificate: true,
    healthStatus: 'Fără boli, sănătoasă',
  },
  {
    id: 'pet-5',
    name: 'Miau',
    breed: 'Maine Coon',
    type: 'cat',
    image: 'https://i.pinimg.com/736x/33/ef/db/33efdb14aefe2f4172480a8e4ab1228b.jpg',
    description: 'Un pisic mare și prietenos, cu o personalitate puternică.',
    age: 5,
    ageText: '5 ani',
    weight: '7 kg',
    traits: [
      { label: 'Vorbăreț', value: 70 },
      { label: 'Bland', value: 75 },
      { label: 'Jucăuș', value: 65 },
      { label: 'Bun cu copiii', value: 80 },
    ],
    fullDescription: 'Miau este un Maine Coon impresionant cu o personalitate mare. Este foarte vorbăreț și iubește să comunice cu oamenii. Miau este jucăuș și inteligent, și va adora să joace cu jucării interactive. Este bun cu copiii și cu alți animale.',
    isVaccinated: true,
    hasHealthCertificate: true,
    healthStatus: 'Fără boli, sănătos',
  },
  {
    id: 'pet-6',
    name: 'Rex',
    breed: 'German Shepherd',
    type: 'dog',
    image: 'https://i.pinimg.com/736x/f1/7f/7e/f17f7e0ee48a5766b073589776a13561.jpg',
    description: 'Un câine inteligent și loial, perfect pentru o familie activă.',
    age: 6,
    ageText: '6 ani',
    weight: '35 kg',
    traits: [
      { label: 'Vorbăreț', value: 45 },
      { label: 'Bland', value: 80 },
      { label: 'Jucăuș', value: 75 },
      { label: 'Bun cu copiii', value: 85 },
    ],
    fullDescription: 'Rex este un German Shepherd inteligent și loial. Este foarte antrenabil și iubește să aibă o sarcină. Rex este protector fără a fi agresiv și este excelent cu copiii. Are nevoie de exercițiu zilnic și de stimulare mentală.',
    isVaccinated: true,
    hasHealthCertificate: true,
    healthStatus: 'Fără boli, sănătos',
  },
];

const stories = [
  {
    id: 'story-1',
    title: 'Prietenia Neașteptată',
    adoptionDate: 'Martie 2024',
    family: 'Familia Popescu',
    description: 'Cum a schimbat Max viața unei familii și a găsit iubirea adevărată.',
    fullDescription: 'Max era un câine plin de energie care așteptase 3 ani în adăpost. Când familia Popescu l-a văzut, au simțit imediat o conexiune specială. Astazi, Max este inima și sufletul familiei. Copiii nu pot imagina viața fără el, iar el nu poate imagina viața fără ei. Prietenia lor este o dovadă că fiecare animal merită o casă plină de iubire.',
    image: 'https://i.pinimg.com/1200x/6a/c5/4a/6ac54aabc71d7da289d84c53c953dc82.jpg',
    gallery: [
      'https://i.pinimg.com/736x/34/52/02/345202b2007c4b19f48c8a3bd0477d8c.jpg',
      'https://i.pinimg.com/736x/bd/d0/ad/bdd0adbe6487980b4a4ba92560ce3fe7.jpg',
      'https://i.pinimg.com/736x/31/ed/27/31ed273056c9abe1b253f9cf076ef68d.jpg'
    ]
  },
  {
    id: 'story-2',
    title: 'O Nouă Casă',
    adoptionDate: 'Februarie 2024',
    family: 'Doamna Elena',
    description: 'Luna a găsit liniștea și dragostea de care avea nevoie.',
    fullDescription: 'Luna a fost o pisică timidă și speriată la început. Doamna Elena, o pensionară singură, i-a dat exact ceea ce avea nevoie: liniște, iubire și o casă confortabilă. Acum, Luna este cea mai vocală și afectuoasă pisică din cartier. Ea și doamna Elena sunt inseparabile.',
    image: 'https://i.pinimg.com/1200x/95/b2/17/95b2173362a8cd3ccbbc137c99142f9d.jpg',
    gallery: [
      'https://i.pinimg.com/736x/84/72/10/84721072d5791c52a537c0ea35518c65.jpg',
      'https://i.pinimg.com/736x/7a/c3/2e/7ac32e67eb1c3213d6cc8459b4f0bc77.jpg'
    ]
  },
];

const meetings = [
  {
    id: 'meeting-1',
    petName: 'Greg',
    petImage: '🐕',
    date: '10 Mai 2026',
    time: '14:00 - 16:00',
    location: 'Parc Central, București',
    spots: 5,
    booked: 2,
    description: 'Întâlnire cu Greg - un Golden Retriever plin de energie! Vino și joacă cu el în parc.',
    details: 'Vom organiza activități de joacă și socializare. Greg adoră să prindă mingea!',
  },
  {
    id: 'meeting-2',
    petName: 'Cathy',
    petImage: '🐱',
    date: '11 Mai 2026',
    time: '16:00 - 18:00',
    location: 'Adăpost Central, București',
    spots: 4,
    booked: 1,
    description: 'Întâlnire cu Cathy - o pisică elegantă și calmă. Vino și cunoaște-o mai bine!',
    details: 'O sesiune liniștită de mângâiat și interacțiune într-un mediu controlat.',
  },
  {
    id: 'meeting-3',
    petName: 'Charlie',
    petImage: '🐕',
    date: '12 Mai 2026',
    time: '10:00 - 12:00',
    location: 'Parc Tei, București',
    spots: 6,
    booked: 3,
    description: 'Întâlnire cu Charlie - un Labrador jucăuș care adoră să se joace cu copiii!',
    details: 'Charlie este foarte prietenos. Vom avea recompense pentru el și jucării.',
  }
];

const donationOptions = [
  { amount: 25, description: 'Hrană pentru 1 animal pe 1 lună', details: 'Asigură nutriția necesară pentru un companion sănătos.' },
  { amount: 50, description: 'Medicamente și vaccinuri', details: 'Acoperă costurile pentru deparazitare și vaccinurile anuale.' },
  { amount: 100, description: 'Îngrijire veterinară completă', details: 'Include analize de sânge și un control medical amănunțit.' },
  { amount: 250, description: 'Adopție asistată', details: 'Susține procesul de integrare a unui animal într-o familie nouă.' },
  { amount: 500, description: 'Sprijin pe termen lung', details: 'Ajută la întreținerea adăpostului și salvarea de noi animale.' },
];

// State
let activeFilter = 'all';
let activeSort = 'name';
let searchQuery = '';
let likedPets = JSON.parse(localStorage.getItem('likedPets') || '[]');
let currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');
let userTestimonials = JSON.parse(localStorage.getItem('userTestimonials') || '[]');

// DOM Elements
const petGrid = document.getElementById('pet-grid');
const filterButtons = document.querySelectorAll('.filter-btn');
const sortBtn = document.getElementById('sort-btn');
const sortDropdown = document.getElementById('sort-dropdown');
const sortOptions = document.querySelectorAll('.sort-option');
const petModal = document.getElementById('pet-modal');
const storyModal = document.getElementById('story-modal');
const cursorTracker = document.getElementById('cursor-tracker');
const authZone = document.getElementById('auth-zone');
const breedSearch = document.getElementById('breed-search');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  checkAuth();
  renderPets();
  renderStories();
  renderMeetings();
  renderDonations();
  renderTestimonials();
  setupEventListeners();
  setupAnimations();
});

// Functions
function checkAuth() {
  if (currentUser && authZone) {
    authZone.innerHTML = `
      <div class="user-profile">
        <div class="user-avatar">${currentUser.name.charAt(0)}</div>
        <div style="text-align: left;">
          <p style="font-weight: 600; font-size: 0.875rem;">${currentUser.name}</p>
          <button class="btn-logout" onclick="logout()">Deconectare</button>
        </div>
      </div>
    `;
  }
}

window.logout = function() {
  localStorage.removeItem('currentUser');
  window.location.reload();
};

function renderPets() {
  if (!petGrid) return;
  
  let filtered = pets;
  
  if (activeFilter === 'favorites') {
    filtered = pets.filter(p => likedPets.includes(p.id));
  } else if (activeFilter !== 'all') {
    filtered = pets.filter(p => p.type === activeFilter);
  }
  
  if (searchQuery) {
    filtered = filtered.filter(p => p.breed.toLowerCase().includes(searchQuery.toLowerCase()));
  }
  
  filtered.sort((a, b) => {
    if (activeSort === 'name') return a.name.localeCompare(b.name);
    if (activeSort === 'age-asc') return a.age - b.age;
    if (activeSort === 'age-desc') return b.age - a.age;
    if (activeSort === 'size-asc') return parseFloat(a.weight) - parseFloat(b.weight);
    if (activeSort === 'size-desc') return parseFloat(b.weight) - parseFloat(a.weight);
    return 0;
  });

  if (filtered.length === 0) {
    petGrid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 4rem 0;">
        <div style="font-size: 4rem; margin-bottom: 1rem;">🔍</div>
        <h3>Nu am găsit niciun rezultat</h3>
        <p style="opacity: 0.6;">Încearcă să cauți altceva sau schimbă filtrele.</p>
      </div>
    `;
    return;
  }

  petGrid.innerHTML = filtered.map(pet => `
    <div class="pet-card" data-id="${pet.id}">
      <div class="pet-img-container">
        <img src="${pet.image}" alt="${pet.name}" class="pet-img">
        <div class="pet-badge">${pet.type === 'dog' ? 'Câine' : 'Pisică'}</div>
      </div>
      <div class="pet-info">
        <div class="pet-header">
          <div>
            <h3 class="pet-name">${pet.name}</h3>
            <p class="pet-breed">${pet.breed} • ${pet.ageText}</p>
          </div>
          <button class="btn-like ${likedPets.includes(pet.id) ? 'liked' : ''}" data-id="${pet.id}">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="${likedPets.includes(pet.id) ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.84-8.84 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
          </button>
        </div>
        <p class="pet-desc">${pet.description}</p>
        <div class="pet-status">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          Vaccinat cu acte în regulă
        </div>
        <button class="btn-more" data-id="${pet.id}">Află mai mult</button>
      </div>
    </div>
  `).join('');

  gsap.set('.pet-card', { opacity: 0, y: 30 });
  ScrollTrigger.batch('.pet-card', {
    onEnter: batch => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.1, overwrite: true }),
    start: 'top 95%'
  });
}

window.setFilter = function(filter) {
  activeFilter = filter;
  filterButtons.forEach(b => {
    if (b.dataset.filter === filter) b.classList.add('active');
    else b.classList.remove('active');
  });
  renderPets();
};

function renderStories() {
  const storiesGrid = document.getElementById('stories-grid');
  if (!storiesGrid) return;
  storiesGrid.innerHTML = stories.map(story => `
    <div class="story-card" data-id="${story.id}">
      <div class="story-img-container">
        <img src="${story.image}" alt="${story.title}" class="story-img">
      </div>
      <div class="story-content">
        <h3 class="story-title">${story.title}</h3>
        <p class="pet-desc">${story.description}</p>
        <a href="#" class="story-link" data-id="${story.id}">Citește povestea →</a>
      </div>
    </div>
  `).join('');
}

function renderMeetings() {
  const meetingsGrid = document.getElementById('meetings-grid');
  if (!meetingsGrid) return;
  meetingsGrid.innerHTML = meetings.map(meeting => `
    <div class="pet-card" style="cursor: default; padding: 2rem; border: 1px solid var(--border);">
      <div style="font-size: 4rem; text-align: center; margin-bottom: 1rem;">${meeting.petImage}</div>
      <h3 style="margin-bottom: 0.5rem; text-align: center;">${meeting.petName}</h3>
      <p style="font-size: 0.875rem; opacity: 0.7; margin-bottom: 1rem; text-align: center;">${meeting.description}</p>
      <div style="background: var(--muted); padding: 1rem; border-radius: 0.5rem; margin-bottom: 1.5rem;">
        <p style="font-size: 0.875rem; font-weight: 600; margin-bottom: 0.5rem;">Detalii eveniment:</p>
        <p style="font-size: 0.875rem; opacity: 0.8;">${meeting.details}</p>
      </div>
      <div style="font-size: 0.875rem; opacity: 0.8; margin-bottom: 1.5rem; display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem;">
        <p>📅 ${meeting.date}</p>
        <p>🕒 ${meeting.time}</p>
        <p>📍 ${meeting.location}</p>
        <p>👥 ${meeting.booked}/${meeting.spots} locuri</p>
      </div>
      <button class="btn-more btn-book" data-id="${meeting.id}">Rezervă Acum</button>
    </div>
  `).join('');
}

function renderDonations() {
  const optionsGrid = document.getElementById('donations-options');
  if (!optionsGrid) return;
  optionsGrid.innerHTML = donationOptions.map(opt => `
    <button class="filter-btn donation-opt" data-amount="${opt.amount}" style="height: auto; padding: 2rem 1.5rem; display: flex; flex-direction: column; align-items: center; text-align: center; background: white; border: 1px solid var(--border);">
      <div style="font-size: 2rem; color: var(--accent); font-weight: 700; margin-bottom: 0.5rem;">€${opt.amount}</div>
      <div style="font-size: 1rem; font-weight: 600; margin-bottom: 0.5rem;">${opt.description}</div>
      <div style="font-size: 0.875rem; opacity: 0.7; font-weight: 400;">${opt.details}</div>
    </button>
  `).join('');
}

function renderTestimonials() {
  const testimonialsGrid = document.getElementById('testimonials-grid');
  if (!testimonialsGrid) return;
  
  const defaultTestimonials = [
    { name: 'Maria I.', pet: 'Venus', text: 'Venus a adus atâta liniște în casa noastră. Procesul de adopție a fost foarte simplu și am primit tot sprijinul necesar.', avatar: '🧚‍♀️' },
    { name: 'Andrei P.', pet: 'Buddy', text: 'Buddy este cel mai bun prieten pe care l-aș fi putut cere. Suntem inseparabili în fiecare drumeție!', avatar: '🧚‍♂️' },
    { name: 'Elena D.', pet: 'Luna', text: 'O experiență minunată. Oamenii de aici chiar iubesc animalele și se asigură că ajung în familii potrivite.', avatar: '🧚‍♀️' }
  ];

  const allTestimonials = [...defaultTestimonials, ...userTestimonials];

  testimonialsGrid.innerHTML = allTestimonials.map(t => `
    <div class="pet-card" style="padding: 2rem; cursor: default;">
      <div style="font-size: 3rem; margin-bottom: 1rem;">${t.avatar || '🧙'}</div>
      <h3 style="margin-bottom: 0.5rem;">${t.name}</h3>
      <p style="color: var(--accent); font-weight: 600; margin-bottom: 1rem;">Adoptator ${t.pet}</p>
      <p style="font-style: italic; opacity: 0.8;">"${t.text}"</p>
    </div>
  `).join('');
}

function setupEventListeners() {
  // Breed Search
  if (breedSearch) {
    breedSearch.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderPets();
    });
  }

  // Testimonial Form
  const testimonialForm = document.getElementById('testimonial-form');
  if (testimonialForm) {
    testimonialForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const newTest = {
        name: document.getElementById('test-name').value,
        pet: document.getElementById('test-pet').value,
        text: document.getElementById('test-text').value,
        avatar: '👤'
      };
      userTestimonials.push(newTest);
      localStorage.setItem('userTestimonials', JSON.stringify(userTestimonials));
      testimonialForm.reset();
      renderTestimonials();
      alert('Testimonialul tău a fost postat cu succes! ✨');
    });
  }

  // Navigation Links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });

  // Filters
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      setFilter(btn.dataset.filter);
    });
  });

  // Sort
  if (sortBtn) {
    sortBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      sortDropdown.classList.toggle('show');
    });
  }

  document.addEventListener('click', () => {
    if (sortDropdown) sortDropdown.classList.remove('show');
  });

  sortOptions.forEach(opt => {
    opt.addEventListener('click', () => {
      sortOptions.forEach(o => o.classList.remove('active'));
      opt.classList.add('active');
      activeSort = opt.dataset.sort;
      renderPets();
    });
  });

  // Pet Card Clicks
  if (petGrid) {
    petGrid.addEventListener('click', (e) => {
      const card = e.target.closest('.pet-card');
      const likeBtn = e.target.closest('.btn-like');
      const moreBtn = e.target.closest('.btn-more');

      if (likeBtn) {
        e.stopPropagation();
        const id = likeBtn.dataset.id;
        if (likedPets.includes(id)) {
          likedPets = likedPets.filter(p => p !== id);
        } else {
          likedPets.push(id);
          gsap.to(likeBtn, { scale: 1.4, duration: 0.3, yoyo: true, repeat: 1 });
        }
        localStorage.setItem('likedPets', JSON.stringify(likedPets));
        renderPets();
        return;
      }

      if (card || moreBtn) {
        const id = (card || moreBtn).dataset.id;
        openPetModal(id);
      }
    });
  }

  // Story Clicks
  const storiesGrid = document.getElementById('stories-grid');
  if (storiesGrid) {
    storiesGrid.addEventListener('click', (e) => {
      const card = e.target.closest('.story-card');
      const link = e.target.closest('.story-link');
      if (card || link) {
        e.preventDefault();
        const id = (card || link).dataset.id;
        openStoryModal(id);
      }
    });
  }

  // Modal Close
  document.querySelectorAll('.modal-close, .modal-overlay').forEach(el => {
    el.addEventListener('click', (e) => {
      if (e.target === el || el.closest('.modal-close')) {
        document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('show'));
        document.body.style.overflow = '';
      }
    });
  });

  // Cursor Tracker
  document.addEventListener('mousemove', (e) => {
    gsap.to(cursorTracker, {
      x: e.clientX - 32,
      y: e.clientY - 32,
      duration: 0.5,
      ease: 'power2.out'
    });
  });

  // Meeting Booking
  const meetingsGrid = document.getElementById('meetings-grid');
  if (meetingsGrid) {
    meetingsGrid.addEventListener('click', (e) => {
      const btn = e.target.closest('.btn-book');
      if (btn) {
        const id = btn.dataset.id;
        const meeting = meetings.find(m => m.id === id);
        alert(`Rezervare confirmată pentru întâlnirea cu ${meeting.petName}!`);
        btn.innerText = 'Rezervat ✓';
        btn.style.backgroundColor = '#10b981';
        btn.disabled = true;
      }
    });
  }

  // Donation Selection
  const donationsOptions = document.getElementById('donations-options');
  const btnSubmitDonation = document.getElementById('btn-submit-donation');
  const customDonationInput = document.getElementById('custom-donation');

  if (donationsOptions) {
    donationsOptions.addEventListener('click', (e) => {
      const btn = e.target.closest('.donation-opt');
      if (btn) {
        document.querySelectorAll('.donation-opt').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        if (customDonationInput) customDonationInput.value = btn.dataset.amount;
        if (btnSubmitDonation) btnSubmitDonation.style.display = 'block';
      }
    });
  }

  if (customDonationInput) {
    customDonationInput.addEventListener('input', () => {
      if (btnSubmitDonation) {
        if (customDonationInput.value > 0) btnSubmitDonation.style.display = 'block';
        else btnSubmitDonation.style.display = 'none';
      }
    });
  }

  // Donation Button
  const btnDonate = document.getElementById('btn-donate');
  if (btnDonate) {
    btnDonate.addEventListener('click', () => {
      const amount = customDonationInput.value;
      if (amount > 0) {
        if (btnSubmitDonation) btnSubmitDonation.style.display = 'block';
        gsap.to(window, { scrollTo: btnSubmitDonation, duration: 0.5 });
      } else {
        alert('Te rugăm să introduci o sumă validă.');
      }
    });
  }

  if (btnSubmitDonation) {
    btnSubmitDonation.addEventListener('click', () => {
      const amount = customDonationInput.value;
      alert(`Mulțumim! Donația de €${amount} a fost trimisă cu succes.`);
      customDonationInput.value = '';
      document.querySelectorAll('.donation-opt').forEach(b => b.classList.remove('active'));
      btnSubmitDonation.style.display = 'none';
    });
  }
}

function openPetModal(id) {
  const pet = pets.find(p => p.id === id);
  if (!pet) return;

  const content = petModal.querySelector('.modal-body');
  content.innerHTML = `
    <div class="modal-img-container" style="height: 300px; border-radius: 1rem; overflow: hidden; margin-bottom: 1.5rem;">
      <img src="${pet.image}" alt="${pet.name}" style="width: 100%; height: 100%; object-fit: cover;">
    </div>
    <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1rem;">
      <div>
        <h2 style="font-size: 2rem;">${pet.name}</h2>
        <p style="opacity: 0.6;">${pet.breed} • ${pet.ageText} • ${pet.weight}</p>
      </div>
      <div class="pet-status">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
        Vaccinat cu acte
      </div>
    </div>
    <p style="margin-bottom: 2rem; line-height: 1.6;">${pet.fullDescription}</p>
    
    <div style="margin-bottom: 2rem;">
      <h3 style="font-size: 1.25rem; margin-bottom: 1rem;">Trăsături</h3>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
        ${pet.traits.map(t => `
          <div>
            <div style="display: flex; justify-content: space-between; font-size: 0.875rem; margin-bottom: 0.25rem;">
              <span>${t.label}</span>
              <span>${t.value}%</span>
            </div>
            <div style="height: 6px; background: var(--muted); border-radius: 3px; overflow: hidden;">
              <div style="height: 100%; width: ${t.value}%; background: var(--accent);"></div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <div style="background: var(--muted); padding: 1.5rem; border-radius: 1rem; margin-bottom: 2rem;">
      <h3 style="font-size: 1.125rem; margin-bottom: 0.5rem;">Stare de Sănătate</h3>
      <p style="font-size: 0.875rem; opacity: 0.8;">${pet.healthStatus}</p>
      <div style="display: flex; gap: 1rem; margin-top: 1rem;">
        <div style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.75rem; font-weight: 600;">
          <span style="color: #10b981;">✓</span> Vaccinat
        </div>
        <div style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.75rem; font-weight: 600;">
          <span style="color: #10b981;">✓</span> Certificat Sănătate
        </div>
      </div>
    </div>

    <button class="btn-hero" style="width: 100%;">Adoptă pe ${pet.name}</button>
  `;
  petModal.classList.add('show');
  document.body.style.overflow = 'hidden';
}

function openStoryModal(id) {
  const story = stories.find(s => s.id === id);
  if (!story) return;

  const content = storyModal.querySelector('.modal-body');
  content.innerHTML = `
    <div class="modal-img-container" style="height: 350px; border-radius: 1rem; overflow: hidden; margin-bottom: 1.5rem;">
      <img src="${story.image}" alt="${story.title}" style="width: 100%; height: 100%; object-fit: cover;">
    </div>
    <h2 style="font-size: 2rem; margin-bottom: 0.5rem;">${story.title}</h2>
    <p style="opacity: 0.6; margin-bottom: 1.5rem;">Adoptat în ${story.adoptionDate} de către ${story.family}</p>
    <p style="line-height: 1.8; font-size: 1.125rem; margin-bottom: 2rem;">${story.fullDescription}</p>
    
    <h3 style="margin-bottom: 1rem;">Galerie Foto</h3>
    <div class="story-gallery">
      ${story.gallery.map(img => `
        <div class="gallery-item">
          <img src="${img}" alt="Galerie">
        </div>
      `).join('')}
    </div>
  `;
  storyModal.classList.add('show');
  document.body.style.overflow = 'hidden';
}

function setupAnimations() {
  gsap.from('.hero-title', { opacity: 0, y: 50, duration: 1, delay: 0.2 });
  gsap.from('.hero-subtitle', { opacity: 0, y: 30, duration: 1, delay: 0.4 });
  gsap.from('.btn-hero', { opacity: 0, scale: 0.8, duration: 0.8, delay: 0.6 });
}
