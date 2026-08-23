// Data Arrays
const departments = [
    { name: "General Medicine", description: "Diagnosis and management of acute and chronic internal diseases.", icon: "fas fa-stethoscope" },
    { name: "General & Laparoscopic Surgery", description: "Advanced minimally invasive, laparoscopic and trauma surgical procedures.", icon: "fas fa-procedures" },
    { name: "Obstetrics & Gynaecology", description: "Complete maternal health, high-risk pregnancy care, and women's health.", icon: "fas fa-baby" },
    { name: "Paediatrics", description: "Comprehensive child care, neonatal monitoring, and vaccination.", icon: "fas fa-child" },
    { name: "Orthopaedics", description: "Bone, joint replacement, spine care, and sports injury management.", icon: "fas fa-bone" },
    { name: "Neurology", description: "Expert management of stroke, epilepsy, neuropathy, and movement disorders.", icon: "fas fa-brain" },
    { name: "Gastroenterology", description: "Advanced digestive tract care, endoscopy, and liver wellness.", icon: "fas fa-pills" },
    { name: "ENT", description: "Diagnostic and surgical care for hearing, sinus, and throat disorders.", icon: "fas fa-ear-listen" },
    { name: "Urology", description: "Kidney stone treatments, prostate care, and reconstructive urology.", icon: "fas fa-tint" },
    { name: "Nephrology", description: "Kidney disease management, hypertension, and renal care.", icon: "fas fa-vial" },
    { name: "Psychiatry", description: "Compassionate mental health evaluation, counselling, and therapy.", icon: "fas fa-user-md" },
    { name: "Ophthalmology", description: "Eye care, vision testing, cataract evaluation, and eye surgery.", icon: "fas fa-eye" },
    { name: "Oral & Maxillofacial Surgery", description: "Facial trauma, jaw alignment, reconstructive & dental surgery.", icon: "fas fa-tooth" }
];

const doctors = [
    { name: "Dr. YAGNESHWARARAJA", qualification: "MBBS, MD", spec: "Senior Consultant - General Medicine", dept: "General Medicine", photo: "images/doctors/dr-yagneshwararaja.jpg" },
    { name: "Dr. PRAVEEN GANDHI", qualification: "MBBS, MD", spec: "Internal Medicine", dept: "General Medicine", photo: "images/doctors/dr-unknown-male.jpg" },
    { name: "Dr. PRITHIVIRAJ", qualification: "MBBS, MS", spec: "General & Laparoscopic Surgeon", dept: "General Surgery", photo: "images/doctors/placeholder-doctor.svg" },
    { name: "Dr. RAJAVEL", qualification: "MBBS, MS, FMAS, FIAGES", spec: "Minimal Access & Laparoscopic Surgeon", dept: "General Surgery", photo: "images/doctors/placeholder-doctor.svg" },
    { name: "Dr. SUBHA SREE", qualification: "MBBS, MS", spec: "General and Laparoscopic Surgery", dept: "General Surgery", photo: "images/doctors/dr-subha-sree.jpg" },
    { name: "Dr. VIJAY ANANAD THAMBAIAH", qualification: "MBBS, MS", spec: "Orthopaedic & Joint Replacement Surgeon", dept: "Orthopaedics", photo: "images/doctors/placeholder-doctor.svg" },
    { name: "Dr. GOPALAMENON", qualification: "MBBS, DNB Ortho", spec: "Senior consultant Orthopaedics and Joint Replacement", dept: "Orthopaedics", photo: "images/doctors/dr-gopalamenan.jpeg" },
    { name: "Dr. V. VINOTH KANNAN", qualification: "MBBS, MD, DM", spec: "Senior Consultant - Neurology", dept: "Neuro Medicine", photo: "images/doctors/dr-vinoth-kannan.jpg" },
    { name: "Dr. SHANMUGAPATHY", qualification: "MBBS, MS, MCh", spec: "Neurosurgeon", dept: "Neuro Surgery", photo: "images/doctors/placeholder-doctor.svg" },
    { name: "Dr. SANKAR SAMBASIVAM", qualification: "MBBS, MD, DM", spec: "Gastroenterologist & Hepatologist", dept: "Gastroenterology", photo: "images/doctors/dr-shankar-sambasivam.jpeg" },
    { name: "Dr. VASUDEVAN T", qualification: "MBBS, MS, MCh", spec: "Urologist & Uro-Oncologist", dept: "Urology", photo: "images/doctors/placeholder-doctor.svg" },
    { name: "Dr. SUBHASRI", qualification: "MBBS, MS (OG)", spec: "Senior Consultant - Obstetrics and Gynaecology", dept: "Obstetrics & Gynaecology", photo: "images/doctors/dr-subhasri.jpg" },
    { name: "Dr. SUGANYA CHAKARAVARTHY P", qualification: "MBBS, DGO", spec: "Obstetrician & Gynaecologist", dept: "Obstetrics & Gynaecology", photo: "images/doctors/placeholder-doctor.svg" },
    { name: "Dr. JAYASUDHA", qualification: "MBBS, MD, DGO", spec: "Obstetrics & Gynaecology", dept: "Obstetrics & Gynaecology", photo: "images/doctors/placeholder-doctor.svg" },
    { name: "Dr. ABINAYA JEYARAMAN", qualification: "MBBS, MD", spec: "Paediatrician & Child Health Specialist", dept: "Paediatrics", photo: "images/doctors/dr-unknown-female.jpg" },
    { name: "Dr. UMAAPATHY KNS", qualification: "MBBS", spec: "Clinical Director", dept: "Emergency", photo: "images/doctors/dr-umaapathy.jpg" },
    { name: "Dr. M. RAJESH", qualification: "MD, DNB", spec: "Cardiologist", dept: "Cardiology", photo: "images/doctors/placeholder-doctor.svg" },
    { name: "Dr. RAMPRASATH V", qualification: "MBBS, MS", spec: "ENT Surgeon", dept: "ENT", photo: "images/doctors/placeholder-doctor.svg" },
    { name: "Dr. J. SIVARANJINI", qualification: "MD (DVL)", spec: "Dermatologist & Venereologist", dept: "Dermatology", photo: "images/doctors/placeholder-doctor.svg" },
    { name: "Dr. ELAYARAJA", qualification: "", spec: "Senior Consultant Nephrologist", dept: "Nephrology", photo: "images/doctors/dr-elayaraja.jpeg" },
    { name: "Dr. MUTHUKKARUPPAN", qualification: "MBBS, MS", spec: "General and Laparoscopic surgeon", dept: "General Surgery", photo: "images/doctors/dr-muthukkaruppan.jpg" },
    { name: "Dr. PAVITHARA", qualification: "", spec: "Consultant Paediatrics", dept: "Paediatrics", photo: "images/doctors/dr-pavithara.jpeg" },
    { name: "Dr. SUGANTH", qualification: "", spec: "Senior Consultant Cardiologist", dept: "Cardiology", photo: "images/doctors/dr-suganth.jpeg" },
    { name: "Dr. ANANDA KUMAR M", qualification: "MBBS, DPM, MD", spec: "Senior consultant Psychiatrist", dept: "Psychiatry", photo: "images/doctors/dr-anandha-kumar-m.jpeg" }
];

const facilities = [
    { title: "24/7 Emergency & Trauma Care", description: "Prompt assessment and stabilization for patients requiring urgent medical attention.", icon: "fas fa-ambulance" },
    { title: "Intensive Care Unit (ICU)", description: "Continuous monitoring and critical care nursing.", icon: "fas fa-heartbeat" },
    { title: "Major Operation Theatre", description: "Advanced surgical suites for complex procedures.", icon: "fas fa-procedures" },
    { title: "Labour Room", description: "Dedicated and safe environment for maternal care and deliveries.", icon: "fas fa-baby-carriage" },
    { title: "Inpatient Rooms & General Ward", description: "Comfortable and hygienic rooms for recovery and extended care.", icon: "fas fa-bed" },
    { title: "Advanced Laboratory & Digital X-Ray", description: "High-tech diagnostic support for accurate medical evaluations.", icon: "fas fa-microscope" },
    { title: "Pharmacy", description: "Round-the-clock availability of essential medications.", icon: "fas fa-pills" },
    { title: "Physiotherapy & Dialysis", description: "Specialized rehabilitation and renal care services.", icon: "fas fa-wheelchair" },
    { title: "Outpatient Consultation Rooms", description: "Well-equipped consultation areas across multiple specialties.", icon: "fas fa-user-md" }
];

const testimonials = [
    { name: "K. Ramanathan", location: "Cuddalore", review: "Subhi Subhiksham Hospital provided immediate treatment when my father had sudden respiratory distress. The emergency doctors were incredibly prompt, and Dr. Kalaikovan's treatment was excellent.", rating: 5 },
    { name: "S. Meenakshi", location: "Panruti", review: "Delivered my baby under Dr. Suganya Chakaravarthy. The maternity care team and nurses made me feel safe and comfortable throughout. Clean rooms and 24/7 lab facilities.", rating: 5 },
    { name: "V. Selvam", location: "Nellikuppam", review: "Got my knee surgery done under Dr. Vijay Ananad Thambaiah. Very professional staff and clear explanation before the procedure. Walking without pain now!", rating: 5 }
];

const patientFeeds = [
    "images/infrastructure/hospital-main-exterior.jpg",
    "images/infrastructure/reception-area.jpg",
    "images/infrastructure/pepper-one-building.jpg",
    "images/infrastructure/pharmacy.jpg",
    "images/infrastructure/advanced-lab.jpg",
    "images/infrastructure/operation-theatre-setup.jpg",
    "images/infrastructure/x-ray-room.jpg",
    "images/infrastructure/icu-ventilator-beds.jpg"
];

const smileJourneyVideos = [
    { title: "Smile Journey 1", thumbnail: "images/infrastructure/hospital-main-exterior.jpg" },
    { title: "Expert Advice 1", thumbnail: "images/infrastructure/reception-area.jpg" },
    { title: "Smile Journey 2", thumbnail: "images/infrastructure/pepper-one-building.jpg" },
    { title: "Expert Advice 2", thumbnail: "images/infrastructure/operation-theatre-setup.jpg" },
    { title: "Smile Journey 3", thumbnail: "images/infrastructure/nicu-warmer.jpg" }
];

const gallery = [
    { title: "Hospital Exterior", category: "Building", image: "images/infrastructure/hospital-main-exterior.jpg" },
    { title: "Reception & Waiting Area", category: "Building", image: "images/infrastructure/reception-area.jpg" },
    { title: "Pepper One Block", category: "Building", image: "images/infrastructure/pepper-one-building.jpg" },
    { title: "24/7 Pharmacy", category: "Building", image: "images/infrastructure/pharmacy.jpg" },
    { title: "Advanced Laboratory", category: "Lab", image: "images/infrastructure/advanced-lab.jpg" },
    { title: "Operation Theatre", category: "OT", image: "images/infrastructure/operation-theatre-setup.jpg" },
    { title: "Digital X-Ray", category: "Lab", image: "images/infrastructure/x-ray-room.jpg" },
    { title: "Intensive Care Unit (ICU)", category: "ICU", image: "images/infrastructure/icu-ventilator-beds.jpg" },
    { title: "NICU", category: "ICU", image: "images/infrastructure/nicu-warmer.jpg" }
];

const videos = [
    { title: "Hospital Tour", thumbnail: "images/hero/hero-bg.jpg", url: "#" },
    { title: "Patient Care", thumbnail: "images/infrastructure/reception-area.jpg", url: "#" },
    { title: "Advanced Surgery", thumbnail: "images/infrastructure/operation-theatre-setup.jpg", url: "#" },
    { title: "Emergency Response", thumbnail: "images/infrastructure/emergency-ward.jpg", url: "#" },
    { title: "Our Facilities", thumbnail: "images/infrastructure/pharmacy.jpg", url: "#" },
    { title: "NICU Care", thumbnail: "images/infrastructure/nicu-warmer.jpg", url: "#" },
    { title: "Cardiology Unit", thumbnail: "images/infrastructure/icu-ventilator-beds.jpg", url: "#" },
    { title: "Maternity Ward", thumbnail: "images/infrastructure/private-room-ward.jpg", url: "#" },
    { title: "Health Awareness", thumbnail: "images/infrastructure/hospital-main-exterior.jpg", url: "#" },
    { title: "Community Health", thumbnail: "images/infrastructure/pepper-one-building.jpg", url: "#" }
];

const googleReviews = [
    { name: "Arun Kumar", rating: 5, review: "Excellent hospital with good doctors and caring nurses. 24/7 emergency is very helpful." },
    { name: "Priya Ramesh", rating: 5, review: "Clean environment and modern facilities. The pediatric department is very good." },
    { name: "Murugan M", rating: 4, review: "Advanced laboratory services. Got my results very quickly. Highly recommended." },
    { name: "Lakshmi S", rating: 5, review: "The maternity care was exceptional. Thanks to Dr. Suganya and the team." },
    { name: "Suresh P", rating: 5, review: "Very professional staff in the ICU. They took great care of my father." },
    { name: "Kavitha R", rating: 5, review: "Best multi-speciality hospital in Cuddalore. Experienced doctors." },
    { name: "Dinesh K", rating: 4, review: "Pharmacy is open 24/7 which is a lifesaver. Good infrastructure." },
    { name: "Saranya V", rating: 5, review: "My knee replacement surgery was successful. Excellent ortho team." },
    { name: "Vignesh T", rating: 5, review: "Very good emergency response. The trauma team is highly skilled." },
    { name: "Anitha M", rating: 5, review: "Affordable and premium healthcare. The rooms are very clean and hygienic." }
];

const infrastructureSlideshow = [
    { title: "Advanced Laboratory", image: "images/infrastructure/advanced-lab.jpg" },
    { title: "24/7 Emergency", image: "images/infrastructure/emergency-ward.jpg" },
    { title: "Intensive Care Unit (ICU)", image: "images/infrastructure/icu-ventilator-beds.jpg" },
    { title: "NICU", image: "images/infrastructure/nicu-warmer.jpg" },
    { title: "Advanced Operation Theatre", image: "images/infrastructure/operation-theatre-setup.jpg" },
    { title: "Hospital Exterior", image: "images/infrastructure/hospital-main-exterior.jpg" },
    { title: "Reception & Waiting Area", image: "images/infrastructure/reception-area.jpg" },
    { title: "Pepper One Block", image: "images/infrastructure/pepper-one-building.jpg" },
    { title: "24/7 Pharmacy", image: "images/infrastructure/pharmacy.jpg" },
    { title: "Digital X-Ray", image: "images/infrastructure/x-ray-room.jpg" },
    { title: "Private Ward", image: "images/infrastructure/private-room-ward.jpg" },
    { title: "Advanced Surgery", image: "images/infrastructure/operation-theatre-setup.jpg" },
    { title: "Emergency Response", image: "images/infrastructure/emergency-ward.jpg" },
    { title: "Our Facilities", image: "images/infrastructure/pharmacy.jpg" },
    { title: "NICU Care", image: "images/infrastructure/nicu-warmer.jpg" },
    { title: "Cardiology Unit", image: "images/infrastructure/icu-ventilator-beds.jpg" },
    { title: "Maternity Ward", image: "images/infrastructure/private-room-ward.jpg" },
    { title: "Health Awareness", image: "images/infrastructure/hospital-main-exterior.jpg" },
    { title: "Community Health", image: "images/infrastructure/pepper-one-building.jpg" },
    { title: "Advanced Operation Theatre", image: "images/infrastructure/operation-theatre-setup.jpg" },
    { title: "24/7 Emergency", image: "images/infrastructure/emergency-ward.jpg" },
    { title: "Intensive Care Unit (ICU)", image: "images/infrastructure/icu-ventilator-beds.jpg" },
    { title: "NICU", image: "images/infrastructure/nicu-warmer.jpg" },
    { title: "Advanced Laboratory", image: "images/infrastructure/advanced-lab.jpg" },
    { title: "Hospital Exterior", image: "images/infrastructure/hospital-main-exterior.jpg" },
    { title: "Reception & Waiting Area", image: "images/infrastructure/reception-area.jpg" },
    { title: "Pepper One Block", image: "images/infrastructure/pepper-one-building.jpg" },
    { title: "24/7 Pharmacy", image: "images/infrastructure/pharmacy.jpg" },
    { title: "Digital X-Ray", image: "images/infrastructure/x-ray-room.jpg" },
    { title: "Private Ward", image: "images/infrastructure/private-room-ward.jpg" },
    { title: "Advanced Surgery", image: "images/infrastructure/operation-theatre-setup.jpg" },
    { title: "Emergency Response", image: "images/infrastructure/emergency-ward.jpg" },
    { title: "Our Facilities", image: "images/infrastructure/pharmacy.jpg" },
    { title: "NICU Care", image: "images/infrastructure/nicu-warmer.jpg" },
    { title: "Cardiology Unit", image: "images/infrastructure/icu-ventilator-beds.jpg" },
    { title: "Maternity Ward", image: "images/infrastructure/private-room-ward.jpg" },
    { title: "Advanced Operation Theatre", image: "images/infrastructure/operation-theatre-setup.jpg" },
    { title: "24/7 Emergency", image: "images/infrastructure/emergency-ward.jpg" },
    { title: "Intensive Care Unit (ICU)", image: "images/infrastructure/icu-ventilator-beds.jpg" },
    { title: "NICU", image: "images/infrastructure/nicu-warmer.jpg" }
];

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    populateData();
    initNavigation();
    initCarousels();
    initLightbox();
    initAutoScrollFeeds();
});

function populateData() {
    // Populate Departments (Services)
    const deptContainer = document.getElementById('departments-grid');
    if (deptContainer) {
        const deptHtml = departments.map((dept, index) => {
            const hiddenClass = index >= 8 ? 'hidden-service' : '';
            return `
            <div class="service-card ${hiddenClass}">
                <div class="service-icon-wrapper"><i class="${dept.icon}"></i></div>
                <h3>${dept.name}</h3>
            </div>
            `;
        }).join('');
        deptContainer.innerHTML = deptHtml;

        const viewAllLink = document.getElementById('view-all-services-btn');

        const toggleServices = () => {
            const hiddenServices = document.querySelectorAll('.hidden-service');
            const allCards = deptContainer.querySelectorAll('.service-card');
            if (hiddenServices.length > 0) {
                // Expand
                hiddenServices.forEach(el => el.classList.remove('hidden-service'));
                if(viewAllLink) viewAllLink.innerHTML = 'View Less Services <i class="fas fa-chevron-up"></i>';
                
                // Auto scroll to the newly revealed items
                if (allCards.length > 8) {
                    // Small delay to allow layout to settle before scrolling
                    setTimeout(() => {
                        allCards[8].scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }, 50);
                }
            } else {
                // Collapse
                allCards.forEach((el, index) => {
                    if (index >= 8) el.classList.add('hidden-service');
                });
                if(viewAllLink) viewAllLink.innerHTML = 'View All Services <i class="fas fa-chevron-down"></i>';
                document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
            }
        };

        if (viewAllLink) viewAllLink.addEventListener('click', toggleServices);

        const searchInput = document.getElementById('service-search-input');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                const query = e.target.value.toLowerCase();
                const allCards = deptContainer.querySelectorAll('.service-card');
                
                if (query.trim() === '') {
                    // Reset
                    allCards.forEach((el, index) => {
                        el.style.display = '';
                        if (index >= 8 && viewAllLink && viewAllLink.innerHTML.includes('View All')) {
                            el.classList.add('hidden-service');
                        } else if (index >= 8 && !viewAllLink) {
                            el.classList.add('hidden-service');
                        } else {
                            el.classList.remove('hidden-service');
                        }
                    });
                    if(viewAllLink) viewAllLink.style.display = 'inline-block';
                } else {
                    // Filter
                    allCards.forEach(el => {
                        el.classList.remove('hidden-service');
                        const title = el.querySelector('h3').innerText.toLowerCase();
                        if (title.includes(query)) {
                            el.style.display = '';
                        } else {
                            el.style.display = 'none';
                        }
                    });
                    if(viewAllLink) viewAllLink.style.display = 'none';
                }
            });
        }
    }

    // Populate Doctors
    const docsContainer = document.getElementById('doctors-grid');
    const doctorSearchInput = document.getElementById('doctor-search-input');
    const viewAllDocsBtn = document.getElementById('view-all-doctors-btn');
    
    if (docsContainer) {
        let showAllDoctors = false;
        
        const renderDoctors = (searchTerm = "") => {
            // 1. Filter out placeholders and apply search term
            let filteredDocs = doctors.filter(doc => {
                const hasValidPhoto = !doc.photo.includes("placeholder") && !doc.photo.includes("unknown");
                const matchesSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                                      doc.spec.toLowerCase().includes(searchTerm.toLowerCase());
                return hasValidPhoto && matchesSearch;
            });

            // 2. Sort by hierarchy
            filteredDocs.sort((a, b) => {
                const getPriority = (doc) => {
                    const name = doc.name.toUpperCase();
                    const spec = doc.spec.toUpperCase();
                    // 1st Priority: Clinic Director
                    if (name.includes("UMAAPATHY") || spec.includes("DIRECTOR")) return 1;
                    // 2nd Priority: Senior Doctors
                    if (spec.includes("SENIOR")) return 2;
                    // 3rd Priority: Others
                    return 3;
                };
                return getPriority(a) - getPriority(b);
            });

            // 3. Limit to 8 if not showing all
            const displayLimit = 8;
            const displayedDocs = showAllDoctors ? filteredDocs : filteredDocs.slice(0, displayLimit);

            // Update View All button visibility/text
            if (viewAllDocsBtn) {
                if (filteredDocs.length <= displayLimit) {
                    viewAllDocsBtn.style.display = 'none';
                } else {
                    viewAllDocsBtn.style.display = 'inline-block';
                    viewAllDocsBtn.innerHTML = showAllDoctors 
                        ? 'View Less <i class="fas fa-chevron-up"></i>' 
                        : 'View All Doctors <i class="fas fa-chevron-down"></i>';
                }
            }

            // Render HTML
            if (displayedDocs.length === 0) {
                docsContainer.innerHTML = '<p style="text-align: center; width: 100%; grid-column: 1 / -1; color: var(--text-light); padding: 40px;">No doctors found matching your criteria.</p>';
                docsContainer.style.display = 'block'; 
            } else {
                docsContainer.style.display = ''; // Revert to stylesheet default (grid)
                docsContainer.innerHTML = displayedDocs.map((doc) => `
                    <div class="doctor-card">
                        <div class="doc-img-wrapper">
                            <img src="${doc.photo}" alt="${doc.name}">
                        </div>
                        <div class="doctor-info">
                            <h4>${doc.name}</h4>
                            <p style="color: var(--primary-color); font-weight: 500;">${doc.spec}</p>
                        </div>
                    </div>
                `).join('');
            }
        };

        // Initial render
        renderDoctors();

        // Event Listeners
        if (doctorSearchInput) {
            doctorSearchInput.addEventListener('input', (e) => {
                renderDoctors(e.target.value);
            });
        }
        
        if (viewAllDocsBtn) {
            viewAllDocsBtn.addEventListener('click', (e) => {
                e.preventDefault();
                showAllDoctors = !showAllDoctors;
                renderDoctors(doctorSearchInput ? doctorSearchInput.value : "");
            });
        }
    }

    // Populate Gallery with Filters and Grid
    const galleryFilters = document.getElementById('gallery-filters');
    const galleryGrid = document.getElementById('gallery-grid');
    
    if (galleryFilters && galleryGrid && gallery) {
        // Extract unique categories
        const categories = ['All', ...new Set(gallery.map(item => item.category))];
        
        // Render Filters
        galleryFilters.innerHTML = categories.map(cat => 
            `<button class="filter-btn ${cat === 'All' ? 'active' : ''}" data-filter="${cat}">${cat}</button>`
        ).join('');
        
        // State for Lightbox
        window.currentFilteredGallery = [...gallery];

        // Render Grid
        const renderGallery = (filterCat) => {
            let filtered = gallery;
            if (filterCat !== 'All') {
                filtered = gallery.filter(item => item.category === filterCat);
            }
            window.currentFilteredGallery = filtered;
            
            galleryGrid.innerHTML = filtered.map((item, index) => `
                <div class="gallery-item" data-index="${index}">
                    <img src="${item.image}" alt="${item.title}" loading="lazy">
                    <div class="gallery-overlay">
                        <div class="gallery-overlay-icon"><i class="fas fa-search-plus"></i></div>
                        <div class="gallery-overlay-text">
                            <h4>${item.title}</h4>
                            <span>${item.category}</span>
                        </div>
                    </div>
                </div>
            `).join('');
            
            // Re-attach lightbox listeners
            document.querySelectorAll('.gallery-item').forEach(item => {
                item.addEventListener('click', (e) => {
                    openLightbox(parseInt(item.dataset.index));
                });
            });
        };
        
        renderGallery('All');
        
        // Filter Click Events
        galleryFilters.addEventListener('click', (e) => {
            if (e.target.classList.contains('filter-btn')) {
                document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
                e.target.classList.add('active');
                renderGallery(e.target.dataset.filter);
            }
        });
    }
    
    // Populate Videos
    const videosContainer = document.getElementById('videos-track');
    if (videosContainer && videos) {
        const videosHtml = videos.map((item) => `
            <div class="video-slide">
                <div class="video-thumbnail">
                    <img src="${item.thumbnail}" alt="${item.title}" loading="lazy">
                    <div class="play-btn"><i class="fas fa-play"></i></div>
                </div>
                <div class="video-info">
                    <h4>${item.title}</h4>
                </div>
            </div>
        `).join('');
        videosContainer.innerHTML = videosHtml;
    }
    
    // Populate Patient Feeds
    const patientFeedsContainer = document.getElementById('patient-feeds-track');
    if (patientFeedsContainer && patientFeeds) {
        const duplicatedFeeds = [...patientFeeds, ...patientFeeds]; // Duplicate for marquee
        const feedsHtml = duplicatedFeeds.map(imgSrc => `
            <div class="feed-item-img">
                <img src="${imgSrc}" alt="Patient Feed">
            </div>
        `).join('');
        patientFeedsContainer.innerHTML = feedsHtml;
    }

    // Populate Smile Journey Videos
    const smileJourneyContainer = document.getElementById('smile-journey-track');
    if (smileJourneyContainer && smileJourneyVideos) {
        const duplicatedVideos = [...smileJourneyVideos, ...smileJourneyVideos]; // Duplicate for marquee
        const journeyHtml = duplicatedVideos.map(video => `
            <div class="feed-item-video">
                <img src="${video.thumbnail}" alt="${video.title}">
                <div class="feed-play-btn"><i class="fas fa-play"></i></div>
            </div>
        `).join('');
        smileJourneyContainer.innerHTML = journeyHtml;
    }
    
    // Populate Google Reviews
    const revContainer = document.getElementById('reviews-track');
    if (revContainer && googleReviews) {
        const revHtml = googleReviews.map((item) => `
            <div class="review-slide">
                <div class="review-header">
                    <div class="reviewer-name">
                        <h4>${item.name}</h4>
                        <div style="color: #f59e0b; font-size: 0.85rem; margin-top: 5px;">
                            ${'<i class="fas fa-star"></i>'.repeat(item.rating)}
                        </div>
                    </div>
                    <i class="fab fa-google" style="color: #4285F4; font-size: 1.5rem;"></i>
                </div>
                <p class="review-text">${item.review}</p>
            </div>
        `).join('');
        revContainer.innerHTML = revHtml;
    }

    // Populate Infrastructure Slideshow
    const infraContainer = document.getElementById('infrastructure-track');
    if (infraContainer && infrastructureSlideshow) {
        const photos = infrastructureSlideshow;
        let infraHtml = '';
        
        for (let i = 0; i < photos.length; i += 6) {
            const batch = photos.slice(i, i + 6);
            if (batch.length === 6) {
                infraHtml += `
                <div class="infrastructure-slide">
                    <div class="infra-item-large left">
                        <img src="${batch[0].image}" alt="${batch[0].title}" loading="lazy">
                        <div class="infra-label">${batch[0].title}</div>
                    </div>
                    <div class="infra-item-small">
                        <img src="${batch[1].image}" alt="${batch[1].title}" loading="lazy">
                        <div class="infra-label" style="font-size:0.9rem; padding: 15px 10px 10px;">${batch[1].title}</div>
                    </div>
                    <div class="infra-item-small">
                        <img src="${batch[2].image}" alt="${batch[2].title}" loading="lazy">
                        <div class="infra-label" style="font-size:0.9rem; padding: 15px 10px 10px;">${batch[2].title}</div>
                    </div>
                    <div class="infra-item-large right">
                        <img src="${batch[3].image}" alt="${batch[3].title}" loading="lazy">
                        <div class="infra-label">${batch[3].title}</div>
                    </div>
                    <div class="infra-item-small">
                        <img src="${batch[4].image}" alt="${batch[4].title}" loading="lazy">
                        <div class="infra-label" style="font-size:0.9rem; padding: 15px 10px 10px;">${batch[4].title}</div>
                    </div>
                    <div class="infra-item-small">
                        <img src="${batch[5].image}" alt="${batch[5].title}" loading="lazy">
                        <div class="infra-label" style="font-size:0.9rem; padding: 15px 10px 10px;">${batch[5].title}</div>
                    </div>
                </div>
                `;
            }
        }
        infraContainer.innerHTML = infraHtml;
    }
}

function initNavigation() {
    const navbar = document.getElementById('navbar');
    const hamburgerBtn = document.getElementById('hamburger-menu');
    const navLinks = document.getElementById('nav-links');

    if (hamburgerBtn && navLinks) {
        hamburgerBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
        
        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

function initCarousels() {
    setupCarousel('.infrastructure-carousel-container', '#infrastructure-track', '#infrastructure-dots', true);
    setupCarousel('.video-carousel-container', '#videos-track', '#videos-dots');
    setupCarousel('.testimonial-carousel-container', '#testimonials-track', '#testimonials-dots');
    setupCarousel('.reviews-carousel-container', '#reviews-track', '#reviews-dots', true);
}

function setupCarousel(containerSelector, trackSelector, dotsSelector, autoPlay = false) {
    const container = document.querySelector(containerSelector);
    const track = document.querySelector(trackSelector);
    const dotsContainer = document.querySelector(dotsSelector);
    
    if (!container || !track || !dotsContainer) return;
    
    const prevBtn = container.querySelector('.prev-btn');
    const nextBtn = container.querySelector('.next-btn');
    
    let slideWidth = 0;
    
    setTimeout(() => {
        const firstSlide = track.firstElementChild;
        if(firstSlide) slideWidth = firstSlide.offsetWidth + 24; // width + gap
        
        const slideCount = track.children.length;
        dotsContainer.innerHTML = '';
        for(let i=0; i < slideCount; i++) {
            const dot = document.createElement('div');
            dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
            dot.addEventListener('click', () => {
                const newFirst = track.firstElementChild;
                if(newFirst) slideWidth = newFirst.offsetWidth + 24;
                track.scrollTo({ left: slideWidth * i, behavior: 'smooth' });
            });
            dotsContainer.appendChild(dot);
        }
    }, 500);

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            const firstSlide = track.firstElementChild;
            if(firstSlide) slideWidth = firstSlide.offsetWidth + 24;
            track.scrollBy({ left: -slideWidth, behavior: 'smooth' });
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            const firstSlide = track.firstElementChild;
            if(firstSlide) slideWidth = firstSlide.offsetWidth + 24;
            track.scrollBy({ left: slideWidth, behavior: 'smooth' });
        });
    }
    
    track.addEventListener('scroll', () => {
        const firstSlide = track.firstElementChild;
        if(!firstSlide) return;
        slideWidth = firstSlide.offsetWidth + 24;
        const index = Math.round(track.scrollLeft / slideWidth);
        
        const dots = dotsContainer.querySelectorAll('.carousel-dot');
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    });

    if (autoPlay) {
        let isHovered = false;
        container.addEventListener('mouseenter', () => isHovered = true);
        container.addEventListener('mouseleave', () => isHovered = false);

        setInterval(() => {
            if (isHovered) return;
            const firstSlide = track.firstElementChild;
            if(!firstSlide) return;
            const currentSlideWidth = firstSlide.offsetWidth + 24;
            
            if (track.scrollLeft >= track.scrollWidth - track.clientWidth - 10) {
                track.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                track.scrollBy({ left: currentSlideWidth, behavior: 'smooth' });
            }
        }, 3000);
    }
}

window.openLightbox = function(index) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const currentSpan = document.getElementById('lightbox-current');
    const totalSpan = document.getElementById('lightbox-total');
    
    if(!lightbox || !window.currentFilteredGallery) return;
    
    window.currentLightboxIndex = index;
    totalSpan.textContent = window.currentFilteredGallery.length;
    
    if(window.currentFilteredGallery[window.currentLightboxIndex]) {
        lightboxImg.src = window.currentFilteredGallery[window.currentLightboxIndex].image;
        currentSpan.textContent = window.currentLightboxIndex + 1;
    }
    
    lightbox.classList.add('active');
};

function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const closeBtn = document.querySelector('.lightbox-close');
    const prevBtn = document.querySelector('.lightbox-prev');
    const nextBtn = document.querySelector('.lightbox-next');
    const lightboxImg = document.getElementById('lightbox-img');
    const currentSpan = document.getElementById('lightbox-current');

    if (!lightbox) return;

    function updateLightbox() {
        if(window.currentFilteredGallery && window.currentFilteredGallery[window.currentLightboxIndex]) {
            lightboxImg.src = window.currentFilteredGallery[window.currentLightboxIndex].image;
            currentSpan.textContent = window.currentLightboxIndex + 1;
        }
    }
    
    closeBtn.addEventListener('click', () => {
        lightbox.classList.remove('active');
    });
    
    prevBtn.addEventListener('click', () => {
        if(!window.currentFilteredGallery) return;
        window.currentLightboxIndex = (window.currentLightboxIndex - 1 + window.currentFilteredGallery.length) % window.currentFilteredGallery.length;
        updateLightbox();
    });
    
    nextBtn.addEventListener('click', () => {
        if(!window.currentFilteredGallery) return;
        window.currentLightboxIndex = (window.currentLightboxIndex + 1) % window.currentFilteredGallery.length;
        updateLightbox();
    });
    
    lightbox.addEventListener('click', (e) => {
        if(e.target === lightbox) lightbox.classList.remove('active');
    });
}

// Counter Animation
const counters = document.querySelectorAll('.animate-count');
const speed = 400; // Higher value makes it slower

const animateCounters = () => {
    let allFinished = true;
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const count = +(counter.innerText.replace(/,/g, ''));
        const inc = target / speed;

        if (count < target) {
            allFinished = false;
            counter.innerText = Math.ceil(count + inc);
        } else {
            counter.innerText = target;
        }
    });
    
    if (!allFinished) {
        setTimeout(animateCounters, 25);
    }
};

const observerOptions = { threshold: 0.5 };
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            observer.disconnect();
        }
    });
}, observerOptions);

counters.forEach(counter => {
    observer.observe(counter);
});

// Auto-scroll for feed rows (Patient Testimonials)
function initAutoScrollFeeds() {
    const feeds = document.querySelectorAll('.feed-row');
    feeds.forEach(feed => {
        let isHovered = false;
        feed.addEventListener('mouseenter', () => isHovered = true);
        feed.addEventListener('mouseleave', () => isHovered = false);

        setInterval(() => {
            if (isHovered) return;
            
            const firstItem = feed.firstElementChild;
            if (!firstItem) return;
            
            const itemWidth = firstItem.offsetWidth + 20; // 20px is the gap
            
            if (feed.scrollLeft >= feed.scrollWidth - feed.clientWidth - 10) {
                feed.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                feed.scrollBy({ left: itemWidth, behavior: 'smooth' });
            }
        }, 3000); // Slideshow interval 3 seconds
    });
}

