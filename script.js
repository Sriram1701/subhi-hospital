// Data Arrays
const departments = [
    { name: "General Medicine", description: "Diagnosis and management of acute and chronic internal diseases.", icon: "fas fa-stethoscope", tags: ["popular", "all"], badge: "24/7 Available" },
    { name: "General & Laparoscopic Surgery", description: "Advanced minimally invasive, laparoscopic and trauma surgical procedures.", icon: "fas fa-procedures", tags: ["surgical", "popular", "all"], badge: "Advanced Care" },
    { name: "Obstetrics & Gynaecology", description: "Complete maternal health, high-risk pregnancy care, and women's health.", icon: "fas fa-baby", tags: ["popular", "all"], badge: "24/7 Care" },
    { name: "Paediatrics", description: "Comprehensive child care, neonatal monitoring, and vaccination.", icon: "fas fa-child", tags: ["popular", "all"], badge: "Specialized" },
    { name: "Orthopaedics", description: "Bone, joint replacement, spine care, and sports injury management.", icon: "fas fa-bone", tags: ["surgical", "all"], badge: "5+ Specialists" },
    { name: "Neurology", description: "Expert management of stroke, epilepsy, neuropathy, and movement disorders.", icon: "fas fa-brain", tags: ["all"], badge: "Advanced Care" },
    { name: "Gastroenterology", description: "Advanced digestive tract care, endoscopy, and liver wellness.", icon: "fas fa-pills", tags: ["all"], badge: "Endoscopy" },
    { name: "ENT", description: "Diagnostic and surgical care for hearing, sinus, and throat disorders.", icon: "fas fa-ear-listen", tags: ["surgical", "all"], badge: "Specialized" },
    { name: "Urology", description: "Kidney stone treatments, prostate care, and reconstructive urology.", icon: "fas fa-tint", tags: ["surgical", "all"], badge: "Advanced Care" },
    { name: "Nephrology", description: "Kidney disease management, hypertension, and renal care.", icon: "fas fa-vial", tags: ["all"], badge: "Dialysis Unit" },
    { name: "Psychiatry", description: "Compassionate mental health evaluation, counselling, and therapy.", icon: "fas fa-user-md", tags: ["all"], badge: "Specialized" },
    { name: "Ophthalmology", description: "Eye care, vision testing, cataract evaluation, and eye surgery.", icon: "fas fa-eye", tags: ["surgical", "all"], badge: "Specialized" },
    { name: "Oral & Maxillofacial Surgery", description: "Facial trauma, jaw alignment, reconstructive & dental surgery.", icon: "fas fa-tooth", tags: ["surgical", "emergency", "all"], badge: "Emergency Care" },
    { name: "Cardiology", description: "Comprehensive heart care, ECG, echocardiograms, and cardiac wellness.", icon: "fas fa-heartbeat", tags: ["emergency", "popular", "all"], badge: "24/7 Available" },
    { name: "Pulmonology", description: "Diagnosis and advanced treatment for asthma, COPD, and lung diseases.", icon: "fas fa-lungs", tags: ["emergency", "all"], badge: "Specialized" },
    { name: "Dermatology", description: "Expert care for skin, hair, and nail conditions, and cosmetic dermatology.", icon: "fas fa-allergies", tags: ["all"], badge: "Cosmetic Care" },
    { name: "Anaesthesia", description: "Safe and advanced perioperative pain management and critical care support.", icon: "fas fa-syringe", tags: ["all"], badge: "24/7 Care" },
    { name: "Neuro Surgery", description: "Precision surgical care for complex brain, spine, and nerve disorders.", icon: "fas fa-head-side-virus", tags: ["surgical", "emergency", "all"], badge: "Advanced Care" }
];

const doctors = [
    { name: "Dr. UMAAPATHY KNS", qualification: "MBBS", spec: "Clinical Director", dept: "Emergency", photo: "images/doctors/dr-umaapathy.jpg" },
    { name: "Dr. YAGNESHWARARAJA", qualification: "MBBS, MD", spec: "Senior Consultant - General Medicine", dept: "General Medicine", photo: "images/doctors/dr-yagneshwararaja.jpg" },
    { name: "Dr. PRAVEEN GANDHI", qualification: "MBBS, MD", spec: "Internal Medicine", dept: "General Medicine", photo: "images/doctors/dr-unknown-male.jpg" },
    { name: "Dr. PRITHIVIRAJ", qualification: "MBBS, MS", spec: "General & Laparoscopic Surgery", dept: "General Surgery", photo: "images/doctors/placeholder-doctor.svg" },
    { name: "Dr. RAJAVEL", qualification: "MBBS, MS, FMAS, FIAGES", spec: "Minimal Access & Laparoscopic Surgery", dept: "General Surgery", photo: "images/doctors/placeholder-doctor.svg" },
    { name: "Dr. SUBA SHREE", qualification: "MBBS, MS", spec: "General and Laparoscopic Surgery", dept: "General Surgery", photo: "images/doctors/dr-suba-shree.jpg" },
    { name: "Dr. VIJAY ANANAD THAMBAIAH", qualification: "MBBS, MS", spec: "Orthopaedic & Joint Replacement Surgery", dept: "Orthopaedics", photo: "images/doctors/placeholder-doctor.svg" },
    { name: "Dr. GOPALAMENON", qualification: "MBBS, DNB Ortho", spec: "Senior Consultant - Orthopaedics and Joint Replacement", dept: "Orthopaedics", photo: "images/doctors/dr-gopalamenan.jpeg" },
    { name: "Dr. VINOTH KANNAN", qualification: "MBBS, MD, DM", spec: "Senior Consultant - Neurology", dept: "Neuro Medicine", photo: "images/doctors/dr-vinoth-kannan.jpg" },
    { name: "Dr. SHANMUGAPATHY", qualification: "MBBS, MS, MCh", spec: "Neurosurgery", dept: "Neuro Surgery", photo: "images/doctors/placeholder-doctor.svg" },
    { name: "Dr. SHANKAR SAMBASIVAM", qualification: "MBBS, MD, DM", spec: "Gastroenterology & Hepatology", dept: "Gastroenterology", photo: "images/doctors/dr-shankar-sambasivam.jpeg" },
    { name: "Dr. VASUDEVAN T", qualification: "MBBS, MS, MCh", spec: "Urology & Uro-Oncology", dept: "Urology", photo: "images/doctors/placeholder-doctor.svg" },
    { name: "Dr. SUBHASRI", qualification: "MBBS, MS (OG)", spec: "Senior Consultant - Obstetrics and Gynaecology", dept: "Obstetrics & Gynaecology", photo: "images/doctors/dr-subhasri.jpg" },
    { name: "Dr. SUGANYA CHAKARAVARTHY P", qualification: "MBBS, DGO", spec: "Obstetrics & Gynaecology", dept: "Obstetrics & Gynaecology", photo: "images/doctors/placeholder-doctor.svg" },
    { name: "Dr. JAYASUDHA", qualification: "MBBS, MD, DGO", spec: "Obstetrics & Gynaecology", dept: "Obstetrics & Gynaecology", photo: "images/doctors/placeholder-doctor.svg" },
    { name: "Dr. ABINAYA JEYARAMAN", qualification: "MBBS, MD", spec: "Paediatrics & Child Health", dept: "Paediatrics", photo: "images/doctors/dr-unknown-female.jpg" },
    { name: "Dr. M. RAJESH", qualification: "MD, DNB", spec: "Cardiology", dept: "Cardiology", photo: "images/doctors/placeholder-doctor.svg" },
    { name: "Dr. RAMPRASATH V", qualification: "MBBS, MS", spec: "ENT Surgery", dept: "ENT", photo: "images/doctors/placeholder-doctor.svg" },
    { name: "Dr. J. SIVARANJINI", qualification: "MD (DVL)", spec: "Dermatology & Venereology", dept: "Dermatology", photo: "images/doctors/placeholder-doctor.svg" },
    { name: "Dr. ELAIYARAJA", qualification: "", spec: "Senior Consultant - Nephrology", dept: "Nephrology", photo: "images/doctors/dr-elaiyaraja.jpeg" },
    { name: "Dr. MUTHUKKARUPPAN", qualification: "MBBS, MS", spec: "General and Laparoscopic Surgery", dept: "General Surgery", photo: "images/doctors/dr-muthukkaruppan.jpg" },
    { name: "Dr. PAVITHARA", qualification: "", spec: "Consultant - Paediatrics", dept: "Paediatrics", photo: "images/doctors/dr-pavithara.jpeg" },
    { name: "Dr. SUGANTH", qualification: "", spec: "Senior Consultant - Cardiology", dept: "Cardiology", photo: "images/doctors/dr-suganth.jpeg" },
    { name: "Dr. ANANDHA KUMAR M", qualification: "MBBS, DPM, MD", spec: "Senior Consultant - Psychiatry", dept: "Psychiatry", photo: "images/doctors/dr-anandha-kumar-m.jpeg" }
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
    { name: "K. Ramanathan", location: "Cuddalore", review: "Subhi Subhiksham Hospitals provided immediate treatment when my father had sudden respiratory distress. The emergency doctors were incredibly prompt, and Dr. Kalaikovan's treatment was excellent.", rating: 5 },
    { name: "S. Meenakshi", location: "Panruti", review: "Delivered my baby under Dr. Suganya Chakaravarthy. The maternity care team and nurses made me feel safe and comfortable throughout. Clean rooms and 24/7 lab facilities.", rating: 5 },
    { name: "V. Selvam", location: "Nellikuppam", review: "Got my knee surgery done under Dr. Vijay Ananad Thambaiah. Very professional staff and clear explanation before the procedure. Walking without pain now!", rating: 5 }
];

const patientFeeds = [
    "images/patients/photo-1.jpeg",
    "images/patients/photo-2.jpeg",
    "images/patients/photo-3.jpeg",
    "images/patients/photo-4.jpeg",
    "images/patients/photo-5.jpeg",
    "images/patients/photo-6.jpeg",
    "images/patients/photo-7.jpeg",
    "images/patients/photo-8.jpeg",
    "images/patients/photo-9.jpeg"
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
    { name: "Arun Kumar", rating: 5, review: "Excellent facility in Cuddalore! The nursing staff is incredibly polite and the hospital is maintained very cleanly. Definitely recommend it." },
    { name: "Pushpa", rating: 5, review: "My mother was admitted to the ICU, and the level of care she received was outstanding. The doctors were transparent about her condition at all times." },
    { name: "Murugan M", rating: 4, review: "Got my lab tests done here. The results were delivered quickly, and the pharmacy being 24/7 is a huge plus for emergency needs." },
    { name: "Ranjeetha Sri", rating: 5, review: "I recently visited Subhi Subhiksham Hospitals for a general checkup. The doctors were very patient and explained everything clearly. Highly satisfied with the care provided." },
    { name: "Suresh P", rating: 5, review: "One of the best multi-speciality hospitals I have seen. The infrastructure is top-notch, and the doctors are highly experienced and friendly." },
    { name: "Kavitha R", rating: 5, review: "I had a great experience during my maternity stay. The doctors and nurses made sure I was comfortable throughout the process. A big thanks to the team!" },
    { name: "Dinesh K", rating: 4, review: "Very good emergency response. We brought our uncle here late at night, and the trauma team handled the situation extremely well." },
    { name: "Saranya V", rating: 5, review: "Affordable and premium healthcare. It is very hard to find such clean and hygienic hospital rooms. The entire staff was very supportive." }
];

const infrastructureSlideshow = [
    // Slide 1
    { title: "Hospital Exterior", image: "images/infrastructure/hospital-main.jpg" },
    { title: "Reception Desk", image: "images/infrastructure/reception-desk.jpg" },
    { title: "Canteen Area", image: "images/infrastructure/canteen-area.jpg" },
    { title: "Reception & Waiting Area", image: "images/infrastructure/reception-area.jpg" },
    { title: "Doctor Visiting Ward", image: "images/infrastructure/doctor-visiting-ward.jpg" },
    { title: "Inpatient Block", image: "images/infrastructure/inpatient-block.jpg" },

    // Slide 2
    { title: "24/7 Pharmacy", image: "images/infrastructure/pharmacy.jpg" },
    { title: "Emergency Ward", image: "images/infrastructure/emergency-ward.jpg" },
    { title: "Emergency Beds", image: "images/infrastructure/emergency-ward-beds.jpg" },
    { title: "Digital X-Ray", image: "images/infrastructure/x-ray-room.jpg" },
    { title: "Advanced Lab", image: "images/infrastructure/advanced-lab.jpg" },
    { title: "General Ward Beds", image: "images/infrastructure/general-ward-beds.jpg" },

    // Slide 3
    { title: "Advanced Operation Theatre", image: "images/infrastructure/operation-theatre-lights.jpg" },
    { title: "O.T. C-Arm", image: "images/infrastructure/operation-theatre-c-arm.jpg" },
    { title: "Anaesthesia Machine", image: "images/infrastructure/anaesthesia-machine.jpg" },
    { title: "ICU Ventilator Beds", image: "images/infrastructure/icu-ventilator-beds.jpg" },
    { title: "ICU Ward", image: "images/infrastructure/icu-ward.jpg" },
    { title: "NICU Warmer", image: "images/infrastructure/nicu-warmer.jpg" }
];

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    populateData();
    initNavigation();
    initCarousels();
    initLightbox();
    initAutoScrollFeeds();
    initAboutCarousel();
});

function populateData() {
    // Populate Departments (Services)
    const deptContainer = document.getElementById('departments-grid');
    if (deptContainer) {
        const deptHtml = departments.map((dept, index) => {
            const hiddenClass = index >= 8 ? 'hidden-service' : '';
            const tagsAttr = dept.tags ? dept.tags.join(',') : 'all';
            const badgeHtml = dept.badge ? `<div class="service-badge">${dept.badge}</div>` : '';
            return `
            <div class="service-card ${hiddenClass}" data-tags="${tagsAttr}">
                <i class="${dept.icon} service-watermark"></i>
                <div class="service-icon-wrapper"><i class="${dept.icon}"></i></div>
                <h3>${dept.name}</h3>
                ${badgeHtml}
                <p class="service-desc">${dept.description}</p>
                <a href="#contact" class="service-cta">Know More <i class="fas fa-arrow-right"></i></a>
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
                if (viewAllLink) viewAllLink.innerHTML = 'View Less Services <i class="fas fa-chevron-up"></i>';

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
                if (viewAllLink) viewAllLink.innerHTML = 'View All Services <i class="fas fa-chevron-down"></i>';
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
                    if (viewAllLink) viewAllLink.style.display = 'inline-block';
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
                    if (viewAllLink) viewAllLink.style.display = 'none';
                }

                // Reset filter tags visual state
                const filterTags = document.querySelectorAll('.filter-tag');
                filterTags.forEach(t => t.classList.remove('active'));
                if (filterTags[0]) filterTags[0].classList.add('active');
            });
        }

        const filterTags = document.querySelectorAll('.filter-tag');
        if (filterTags.length > 0) {
            filterTags.forEach(tag => {
                tag.addEventListener('click', () => {
                    // Remove active from all tags
                    filterTags.forEach(t => t.classList.remove('active'));
                    // Add active to clicked tag
                    tag.classList.add('active');

                    if (searchInput) searchInput.value = ''; // clear search when using filters

                    const filterValue = tag.getAttribute('data-filter');
                    const allCards = deptContainer.querySelectorAll('.service-card');

                    allCards.forEach(el => {
                        const cardTags = el.getAttribute('data-tags') || '';
                        if (filterValue === 'all') {
                            el.style.display = '';
                            // Restore original hidden state for pagination
                            const isHidden = Array.from(allCards).indexOf(el) >= 8;
                            if (isHidden && viewAllLink && viewAllLink.innerHTML.includes('View All')) {
                                el.classList.add('hidden-service');
                            }
                        } else {
                            if (cardTags.includes(filterValue)) {
                                el.style.display = '';
                                el.classList.remove('hidden-service');
                            } else {
                                el.style.display = 'none';
                            }
                        }
                    });

                    if (viewAllLink) {
                        viewAllLink.style.display = filterValue === 'all' ? 'inline-block' : 'none';
                    }
                });
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
                    // Custom Order
                    if (name.includes("UMAAPATHY")) return 1;
                    // Senior Doctors
                    if (spec.includes("SENIOR")) return 4;
                    // Others
                    return 5;
                };
                return getPriority(a) - getPriority(b);
            });

            // 3. Limit to 8 if not showing all (for 4x2 grid)
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
                            <p class="doc-specialty" style="color: var(--primary-color); font-weight: 600; margin-bottom: 15px;">${doc.spec}</p>
                            <button onclick="openAppointmentModal('${doc.name}')" class="btn btn-outline-primary" style="width: 100%; padding: 10px 0; font-size: 0.9rem;">Book Appointment</button>
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
                        <div class="infra-label">${batch[1].title}</div>
                    </div>
                    <div class="infra-item-small">
                        <img src="${batch[2].image}" alt="${batch[2].title}" loading="lazy">
                        <div class="infra-label">${batch[2].title}</div>
                    </div>
                    <div class="infra-item-large right">
                        <img src="${batch[3].image}" alt="${batch[3].title}" loading="lazy">
                        <div class="infra-label">${batch[3].title}</div>
                    </div>
                    <div class="infra-item-small">
                        <img src="${batch[4].image}" alt="${batch[4].title}" loading="lazy">
                        <div class="infra-label">${batch[4].title}</div>
                    </div>
                    <div class="infra-item-small">
                        <img src="${batch[5].image}" alt="${batch[5].title}" loading="lazy">
                        <div class="infra-label">${batch[5].title}</div>
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

    // For infrastructure gallery, always provide exactly 3 pagination dots
    const isInfrastructure = trackSelector.includes('infrastructure');

    let slideWidth = 0;

    const renderDots = () => {
        const dotCount = isInfrastructure ? 3 : track.children.length;
        dotsContainer.innerHTML = '';
        for (let i = 0; i < dotCount; i++) {
            const dot = document.createElement('div');
            dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
            dot.addEventListener('click', () => {
                const maxScroll = track.scrollWidth - track.clientWidth;
                if (isInfrastructure) {
                    const targetScroll = dotCount > 1 ? (maxScroll / (dotCount - 1)) * i : 0;
                    track.scrollTo({ left: targetScroll, behavior: 'smooth' });
                } else {
                    const firstSlide = track.firstElementChild;
                    if (firstSlide) slideWidth = firstSlide.offsetWidth + 24;
                    track.scrollTo({ left: slideWidth * i, behavior: 'smooth' });
                }
            });
            dotsContainer.appendChild(dot);
        }
    };

    setTimeout(renderDots, 400);

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            const firstSlide = track.firstElementChild;
            if (firstSlide) slideWidth = firstSlide.offsetWidth + 24;
            track.scrollBy({ left: -slideWidth, behavior: 'smooth' });
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            const firstSlide = track.firstElementChild;
            if (firstSlide) slideWidth = firstSlide.offsetWidth + 24;
            track.scrollBy({ left: slideWidth, behavior: 'smooth' });
        });
    }

    track.addEventListener('scroll', () => {
        const dots = dotsContainer.querySelectorAll('.carousel-dot');
        if (dots.length === 0) return;

        if (isInfrastructure) {
            const maxScroll = track.scrollWidth - track.clientWidth;
            if (maxScroll <= 0) return;
            const scrollFraction = track.scrollLeft / maxScroll;
            const activeIndex = Math.min(2, Math.max(0, Math.round(scrollFraction * 2)));
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === activeIndex);
            });
        } else {
            const firstSlide = track.firstElementChild;
            if (!firstSlide) return;
            slideWidth = firstSlide.offsetWidth + 24;
            const index = Math.round(track.scrollLeft / slideWidth);
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
        }
    });

    if (autoPlay) {
        let isUserInteracting = false;
        let resumeTimeout = null;

        const pauseAutoPlay = () => {
            isUserInteracting = true;
            clearTimeout(resumeTimeout);
        };

        const resumeAutoPlay = () => {
            clearTimeout(resumeTimeout);
            resumeTimeout = setTimeout(() => {
                isUserInteracting = false;
            }, 2500);
        };

        container.addEventListener('mouseenter', pauseAutoPlay);
        container.addEventListener('mouseleave', () => { isUserInteracting = false; });
        container.addEventListener('touchstart', pauseAutoPlay, { passive: true });
        container.addEventListener('touchend', resumeAutoPlay, { passive: true });

        setInterval(() => {
            if (isUserInteracting) return;
            const firstSlide = track.firstElementChild;
            if (!firstSlide) return;
            const slideStep = firstSlide.offsetWidth + 16;
            const maxScroll = track.scrollWidth - track.clientWidth;

            // When reaching the end, seamlessly loop back to the very first slide
            if (track.scrollLeft >= maxScroll - 30) {
                track.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                track.scrollBy({ left: slideStep, behavior: 'smooth' });
            }
        }, 3200);
    }
}

window.openLightbox = function (index) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const currentSpan = document.getElementById('lightbox-current');
    const totalSpan = document.getElementById('lightbox-total');

    if (!lightbox || !window.currentFilteredGallery) return;

    window.currentLightboxIndex = index;
    totalSpan.textContent = window.currentFilteredGallery.length;

    if (window.currentFilteredGallery[window.currentLightboxIndex]) {
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
        if (window.currentFilteredGallery && window.currentFilteredGallery[window.currentLightboxIndex]) {
            lightboxImg.src = window.currentFilteredGallery[window.currentLightboxIndex].image;
            currentSpan.textContent = window.currentLightboxIndex + 1;
        }
    }

    closeBtn.addEventListener('click', () => {
        lightbox.classList.remove('active');
    });

    prevBtn.addEventListener('click', () => {
        if (!window.currentFilteredGallery) return;
        window.currentLightboxIndex = (window.currentLightboxIndex - 1 + window.currentFilteredGallery.length) % window.currentFilteredGallery.length;
        updateLightbox();
    });

    nextBtn.addEventListener('click', () => {
        if (!window.currentFilteredGallery) return;
        window.currentLightboxIndex = (window.currentLightboxIndex + 1) % window.currentFilteredGallery.length;
        updateLightbox();
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) lightbox.classList.remove('active');
    });
}

// Counter Animation (Duration-based for simultaneous completion)
const counters = document.querySelectorAll('.animate-count');
const animationDuration = 2500; // 2.5 seconds for all counters

const animateCounters = () => {
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const startTime = performance.now();

        const updateCounter = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / animationDuration, 1);

            // Ease-out effect (starts fast, slows down at the end)
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);

            const currentCount = Math.floor(target * easeOutQuart);
            counter.innerText = currentCount;

            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            } else {
                counter.innerText = target;
            }
        };

        requestAnimationFrame(updateCounter);
    });
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

// Appointment Modal Logic
window.openAppointmentModal = function (doctorName) {
    const modal = document.getElementById('appointment-modal');
    if (!modal) return;

    // Populate doctor dropdown if not already populated
    const select = document.getElementById('appointment-doctor');
    if (select && select.options.length <= 1) {
        const docOptions = doctors.filter(d => !d.photo.includes("placeholder") && !d.photo.includes("unknown"));
        select.innerHTML = '<option value="">Select a Doctor</option>' +
            docOptions.map(d => `<option value="${d.name}">${d.name} (${d.spec})</option>`).join('');
    }

    // Set selected doctor
    if (select && doctorName) {
        select.value = doctorName;
    }

    // Set minimum date to today
    const dateInput = document.getElementById('appointment-date');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.min = today;
    }

    modal.classList.add('active');
};

window.closeAppointmentModal = function () {
    const modal = document.getElementById('appointment-modal');
    if (modal) modal.classList.remove('active');
};

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('appointment-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('appointment-name').value;
            const phone = document.getElementById('appointment-phone').value;
            const issue = document.getElementById('appointment-issue').value;
            const doctor = document.getElementById('appointment-doctor').value;
            const date = document.getElementById('appointment-date').value;
            const time = document.getElementById('appointment-time').value;

            const message = `New Appointment Request
- Name: ${name}
- Phone: ${phone}
- Issue: ${issue || 'N/A'}
- Doctor: ${doctor || 'Any Available'}
- Date: ${date}
- Time: ${time}`;

            const encodedMessage = encodeURIComponent(message);
            window.open(`https://wa.me/919514299393?text=${encodedMessage}`, '_blank');
            alert('Your appointment request has been sent successfully!');
            closeAppointmentModal();
            form.reset();
        });
    }

    // Close modal on outside click
    const modal = document.getElementById('appointment-modal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) window.closeAppointmentModal();
        });
    }
});

// About Section Carousel Logic
let aboutSlideIndex = 0;
let aboutSlideTimer;

function initAboutCarousel() {
    showAboutSlides(aboutSlideIndex);
    // Auto play every 3 seconds
    aboutSlideTimer = setInterval(() => moveAboutCarousel(1), 3000);
}

function moveAboutCarousel(n) {
    clearInterval(aboutSlideTimer); // Reset timer on manual move
    showAboutSlides(aboutSlideIndex += n);
    aboutSlideTimer = setInterval(() => moveAboutCarousel(1), 3000);
}

function currentAboutSlide(n) {
    clearInterval(aboutSlideTimer); // Reset timer on manual move
    showAboutSlides(aboutSlideIndex = n);
    aboutSlideTimer = setInterval(() => moveAboutCarousel(1), 3000);
}

function showAboutSlides(n) {
    let i;
    let slides = document.getElementsByClassName("about-slide");
    let dots = document.getElementsByClassName("about-dot");

    if (slides.length === 0) return;

    if (n >= slides.length) { aboutSlideIndex = 0 }
    if (n < 0) { aboutSlideIndex = slides.length - 1 }

    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }

    slides[aboutSlideIndex].classList.add("active");
    if (dots[aboutSlideIndex]) {
        dots[aboutSlideIndex].classList.add("active");
    }
}

// --- Cookie Banner Logic ---
document.addEventListener("DOMContentLoaded", () => {
    const cookieBanner = document.getElementById("cookie-banner");
    const acceptBtn = document.getElementById("accept-cookies");

    if (cookieBanner && acceptBtn) {
        // Check local storage
        if (!localStorage.getItem("cookiesAccepted")) {
            setTimeout(() => {
                cookieBanner.classList.add("show");
            }, 1000); // Show after 1 second
        }

        acceptBtn.addEventListener("click", () => {
            localStorage.setItem("cookiesAccepted", "true");
            cookieBanner.classList.remove("show");
        });
    }
});

// --- Scroll to Top Button Logic ---
document.addEventListener("DOMContentLoaded", () => {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");

    if (scrollToTopBtn) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                scrollToTopBtn.classList.add("show");
            } else {
                scrollToTopBtn.classList.remove("show");
            }
        });

        scrollToTopBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
});
