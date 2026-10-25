/**
 * SUBHI SUBHIKSHAM HOSPITALS - GOOGLE REVIEW NFC & TAP ENGINE
 * Upgraded Real-Time Speech Recognition & Rich Multilingual Reviews
 */
const GOOGLE_REVIEW_URL = "https://search.google.com/local/writereview?placeid=ChIJGTXTBfyZVToRdt_sTwVDQEk";

const reviewsDatabase = {
    emergency: {
        en: [
            "Outstanding 24/7 emergency response at Subhi Subhiksham Hospitals! The trauma team and Dr. Umaapathy KNS took immediate action when we rushed in at midnight. The ICU facilities and caring nurses saved my family member's life. Truly the most reliable healthcare lifeline in Cuddalore!",
            "Best emergency and trauma care hospital in Cuddalore. Prompt admission, zero delay in casualty, and very supportive staff. The duty doctors explained everything calmly and started the right treatment immediately. 5/5 stars!",
            "Extremely impressed with their quick triage and emergency setup. Clean ICU beds, attentive nursing care 24/7, and highly skilled doctors. Subhi Subhiksham is a huge blessing for Cuddalore people during medical emergencies."
        ],
        ta: [
            "சுபி சுபிக்ஷம் மருத்துவமனையின் 24 மணி நேர அவசர சிகிச்சை பிரிவு மிகச் சிறப்பானது. நள்ளிரவில் தீவிர உடல்நலக் குறைவோடு சென்றபோது, டாக்டர் உமாபதி மற்றும் அவசரப் பிரிவு மருத்துவர்கள் ஒரு நொடியும் தாமதிக்காமல் உடனடியாக சிகிச்சை அளித்து காப்பாற்றினர். கடலூரில் சிறந்த மருத்துவமனை!",
            "அவசர விபத்து சிகிச்சைக்காக எங்கள் உறவினரை சேர்த்தோம். அதிநவீன ஐசியூ வார்டு மற்றும் செவிலியர்களின் கனிவான 24/7 பராமரிப்பு மனதிற்கு மிகுந்த நிம்மதி தந்தது. நியாயமான கட்டணம் மற்றும் வெளிப்படையான சிகிச்சை முறைக்கு நன்றி!",
            "கடலூரில் அவசர காலங்களில் உடனே நம்பி வரக்கூடிய இடம் சுபி சுபிக்ஷம் மருத்துவமனை மட்டுமே. உடனடி அட்மிஷன், சுத்தமான வார்டுகள் மற்றும் அனுபவம் வாய்ந்த மருத்துவர்கள்."
        ],
        tanglish: [
            "Subhi Subhiksham hospital-la emergency care romba quick-ah irundhuchu! Midnight-la casualty-ku pona udane doctors immediate-ah attend panni treat pannanga. Dr. Umaapathy sir guidance and staff support was unbelievable. Truly the best emergency hospital in Cuddalore!",
            "Trauma care and ICU facility semma advanced. Nurses and duty doctors super-ah care eduthukitaanga. Emergency-la oru second delay kooda illa. Highly recommended!",
            "Midnight emergency-ku romba bayandhom, aana Subhi Subhiksham vandhadhum prompt treatment kuduthu full recovery aachu. ICU care, hygiene & doctor response 100% top-notch!"
        ]
    },
    general: {
        en: [
            "Consulted Senior Consultant Dr. Yagneshwararaja for persistent health issues. His clinical diagnosis was spot on and he took time to listen patiently with genuine empathy. Clean OPD, polite reception staff, and very reasonable pharmacy rates. Highly recommended!",
            "Subhi Subhiksham Hospital provides top-tier general medicine and master health checkup packages in Cuddalore. No unnecessary tests prescribed. Complete transparency and compassionate medical advice from experienced senior physicians.",
            "Wonderful healthcare facility in Cuddalore. Very clean consultation rooms, well-organized token system, and genuine medical advice. It is rare to see such ethical and clean healthcare today."
        ],
        ta: [
            "பொது மருத்துவ ஆலோசனைக்காக சீனியர் டாக்டர் யக்னேஸ்வரராஜா அவர்களை சந்தித்தோம். மிக பொறுமையாக அனைத்து விவரங்களையும் கேட்டு சரியான மருந்து மாத்திரைகளை பரிந்துரைத்தார். மருத்துவமனையின் தூய்மையும் ஊழியர்களின் மரியாதையான அணுகுமுறையும் பாராட்டுக்குரியது.",
            "முழு உடல் பரிசோதனை மற்றும் மருத்துவ சிகிச்சைக்கு கடலூரில் தலைசிறந்த மருத்துவமனை. நியாயமான கட்டணம், உடனடி லேப் ரிப்போர்ட் மற்றும் அனுபவம் வாய்ந்த மருத்துவர்களின் அக்கறையான வழிகாட்டுதல்.",
            "மருத்துவர்கள் நோயாளிகளிடம் காட்டும் கனிவும், நோய் குறித்து தெளிவாக விளக்கும் விதமும் மிக அற்புதம். சுபி சுபிக்ஷம் மருத்துவமனை மருத்துவர்களுக்கும் ஊழியர்களுக்கும் எனது மனமார்ந்த நன்றிகள்!"
        ],
        tanglish: [
            "General medicine consultation super experience! Dr. Yagneshwararaja sir romba patient-ah symptoms kettu nalla explain pannanga. No unwanted tests. Very transparent and friendly hospital.",
            "Master health checkup panninom. Blood test reports same day-la kedaichudhu. Doctor consultation, pharmacy and reception ellame well-organized. Great hospital in Cuddalore!",
            "Doctor and nursing staff ellarum humble-ah treat panranga. Cuddalore-la ithey mathiri clean and ethical hospital kedaikirathu romba periya vishayam. Must visit for any health checkup."
        ]
    },
    ortho: {
        en: [
            "Dr. Vijay Ananad Thambaiah performed my mother's knee joint replacement surgery with precision. Outstanding post-operative physiotherapy and attentive nurses. She is now walking comfortably without any pain. Thank you Subhi Subhiksham!",
            "Had severe back pain and joint stiffness for months. Dr. Gopalamenon's clinical expertise and guidance gave instant relief. State-of-the-art digital X-ray facilities and great rehabilitation support. Best orthopaedic centre in Cuddalore!",
            "Exceptional orthopaedic care! The doctors explain the exact condition clearly with X-ray scans. Affordable surgical packages and very caring ward staff who assisted at every step."
        ],
        ta: [
            "எலும்பு முறிவு மற்றும் மூட்டு மாற்று அறுவை சிகிச்சைக்கு சுபி சுபிக்ஷம் மிகச் சிறந்த மருத்துவமனை. டாக்டர் விஜய் ஆனந்த் அவர்களின் கைவண்ணத்தில் மூட்டு மாற்று அறுவை சிகிச்சை செய்யப்பட்டு, பிசியோதெரபி மூலம் என் தாய் இப்போது வலியின்றி நலமாக நடக்கிறார்.",
            "கடுமையான மூட்டு வலிக்கு டாக்டர் கோபாலமேனன் அவர்களிடம் சிகிச்சை பெற்றேன். துல்லியமான எக்ஸ்ரே பரிசோதனை மற்றும் சரியான உடற்பயிற்சி ஆலோசனைகளால் வலி முற்றிலும் நீங்கியது. சிறந்த ஆர்த்தோ மருத்துவர்கள்!",
            "ஆர்த்தோ அறுவை சிகிச்சையில் கடலூரில் மிகச் சிறந்த நிபுணர்கள் இங்கு உள்ளனர். செவிலியர்களின் கவனிப்பும் சிகிச்சைக்குப் பிந்தைய பராமரிப்பும் மனநிறைவை தந்தது."
        ],
        tanglish: [
            "Knee joint pain-kaga Dr. Vijay Ananad sir-ah consult pannom. Surgery perfectly done, physiotherapy support super. Within few weeks full recovery and walking comfortably now. Super hospital!",
            "Subhi Subhiksham hospital ortho department is top-class. Digital X-ray room, physiotherapy and nursing care ellame super. Pain illama recover aagi iruken. Big thanks to the team!",
            "Bone fracture case-ah romba careful-ah handle pannanga. Pain-free management and fast discharge. Cuddalore-la best hospital for orthopaedics."
        ]
    },
    maternity: {
        en: [
            "Delivered our baby safely at Subhi Subhiksham Hospitals under Dr. Subhasri. The labor ward, neonatal monitoring, and round-the-clock nursing care made our maternity journey smooth and memorable. Highly recommended for safe deliveries in Cuddalore!",
            "Best maternity and gynaecology hospital in Cuddalore! Dr. Subhasri and the female nursing team provided immense emotional and medical support throughout labor. Spotless private AC rooms and hygienic environment for the newborn.",
            "Extremely satisfied with our pregnancy care from the first scan to delivery. Ultrasound scans, doctor consultations, and post-natal child care were handled with utmost warmth and professionalism."
        ],
        ta: [
            "எங்கள் குழந்தை பிறப்பு சுபி சுபிக்ஷம் மருத்துவமனையில் டாக்டர் சுபாஸ்ரீ அவர்களின் தலைமையில் மிக பாதுகாப்பாகவும் சுகப்பிரசவமாகவும் நடைபெற்றது. பிரசவ வார்டு, செவிலியர்களின் பாசமான கவனிப்பு அனைத்தும் சொந்த குடும்பம்போல் இருந்தது!",
            "கர்ப்பகால பரிசோதனை முதல் பிரசவம் வரை மிக அக்கறையுடன் கவனித்துக் கொண்டனர். சுத்தமான தனி ஏசி அறைகள் மற்றும் குழந்தைகளுக்கான நவீன இன்குபேட்டர் வசதியுடன் கடலூரில் நம்பகமான மருத்துவமனை.",
            "டாக்டர் சுபாஸ்ரீ மேடம் அவர்களின் கனிவான அணுகுமுறை தாய்மார்களுக்கு மிகுந்த மன அமைதியைத் தருகிறது. அனைத்து தாய்மார்களுக்கும் சுபி சுபிக்ஷம் மருத்துவமனையை உறுதியாக பரிந்துரைப்பேன்!"
        ],
        tanglish: [
            "My wife's delivery Subhi Subhiksham-la romba safe-ah nadanthuchu. Dr. Subhasri mam and labour room nurses treated us like family. Clean private rooms and 24/7 baby care. Truly grateful!",
            "Normal delivery try panni successfully pannanga. Maternity care, scan facilities and baby care ellame excellent. Cuddalore-la best maternity hospital ithu dhaan!",
            "Pregnancy checkups full-ah inga dhaan pannom. Doctors and nurses romba supportive. Stress illama peaceful delivery experience. Thank you Subhi Subhiksham Hospitals!"
        ]
    },
    surgery: {
        en: [
            "Underwent laparoscopic surgery under Dr. Suba Shree. Minimal incision, fast recovery, and almost pain-free discharge in just two days. Advanced laminar airflow modular operation theatre on par with metro hospitals!",
            "Subhi Subhiksham has one of the finest surgical suites in Tamil Nadu. The surgical team and anaesthetists made me feel completely safe and relaxed. Highly transparent billing with no surprise charges.",
            "Modern surgical care with top-tier laparoscopic equipment. Post-operative wound care and regular doctor rounds ensured swift healing. Very proud to have this hospital in Cuddalore."
        ],
        ta: [
            "லேப்ராஸ்கோபிக் அறுவை சிகிச்சை மிகச் சிறப்பாக செய்யப்பட்டது. மிகச் சிறிய தையல், குறைந்த வலி மற்றும் 2 நாட்களில் நலமுடன் வீடு திரும்பினோம். அறுவை அரங்கம் சர்வதேச தரத்தில் நவீன வசதிகளுடன் உள்ளது.",
            "அறுவை சிகிச்சைக்கு முன் மருத்துவர்கள் பயத்தைப் போக்கி மிகுந்த நம்பிக்கையளித்தனர். நியாயமான கட்டணம் மற்றும் அனுபவமிக்க அறுவை சிகிச்சை நிபுணர்கள் இங்கு உள்ளனர்.",
            "அறுவை சிகிச்சைக்குப் பிந்தைய செவிலியர் பராமரிப்பு மற்றும் மருத்துவர்களின் தொடர் கண்காணிப்பு பாராட்டுக்குரியது. சிறந்த அறுவை சிகிச்சை சேவைக்கு சுபி சுபிக்ஷம் நன்றி!"
        ],
        tanglish: [
            "Laparoscopic surgery panninom. Minimal pain and 2 days-la discharge aagiyachu. Operation theatre facilities are high-tech and doctors are highly skilled. Super experience!",
            "Surgical care and anaesthesia team romba friendly-ah irundhaanga. Room maintenance and food hygiene ellame nalla irundhuchu. Best hospital for surgery in Cuddalore.",
            "Subhi Subhiksham-la surgery pannina bayame irukaadhu. Transparent billing and genuine doctors. Thank you team!"
        ]
    },
    neuro: {
        en: [
            "Consulted Senior Neurologist Dr. Vinoth Kannan for recurring migraine and nerve-related issues. His systematic diagnosis and customized medication brought remarkable improvement. World-class neurology care in Cuddalore!",
            "My uncle suffered from sudden stroke symptoms and was rushed here. The neuro critical care team acted fast, administered timely treatment, and helped him regain complete speech and mobility. Forever indebted to Subhi Subhiksham!",
            "Dr. Vinoth Kannan is exceptionally knowledgeable, calm, and down-to-earth. The hospital's neuro-monitoring, EEG, and diagnostic support are outstanding."
        ],
        ta: [
            "நரம்பியல் சிறப்பு மருத்துவர் டாக்டர் வினோத் கண்ணன் அவர்களிடம் சிகிச்சை பெற்றேன். பல வருட தலைவலி மற்றும் நரம்பு பிரச்சனைக்கு இப்போது நிரந்தர தீர்வு கிடைத்துள்ளது. சிறந்த நரம்பியல் பிரிவு!",
            "பக்கவாத அறிகுறியுடன் வந்த என் தந்தைக்கு நரம்பியல் மருத்துவர்கள் உடனே சிகிச்சை அளித்து பூரண குணமடையச் செய்தனர். சுபி சுபிக்ஷம் கடலூர் மக்களின் உயிர் காக்கும் நம்பிக்கை!",
            "நரம்பு மற்றும் மூளை தொடர்பான சிகிச்சைகளில் கடலூரில் நம்பகமான இடம். மருத்துவரின் துல்லியமான பரிசோதனையும் கனிவான ஆலோசனையும் அருமை."
        ],
        tanglish: [
            "Dr. Vinoth Kannan sir neurology-la absolute expert. Long-time migraine and nerve issue-ku accurate medicine kuduthaaru. Now feeling 100% better!",
            "Neuro team quick action and treatment saved my relative during stroke symptoms. ICU monitoring and doctors support was unbelievable. Best neurology hospital in Cuddalore!",
            "Nerve consultation-ku Chennai poga thevailla, Subhi Subhiksham-la top-class neuro doctors irukaanga. Very satisfied with the care!"
        ]
    },
    pediatrics: {
        en: [
            "Dr. Abinaya Jeyaraman and the paediatric care team took wonderful care of my child when she had high fever and dehydration. The doctors are so gentle with infants and the nursing staff is very loving. Best child care in Cuddalore!",
            "Brought my 4-year-old child for seasonal asthma treatment. The doctor was so patient and friendly that my child had zero fear. Clean paediatric ward and prompt nebulisation care.",
            "Routine vaccinations and baby wellness checkups are handled systematically here. Painless vaccination techniques and very comforting doctors. Highly recommend Subhi Subhiksham for children's health!"
        ],
        ta: [
            "என் குழந்தையின் உடல்நிலைக் குறைவிற்கு குழந்தை நல மருத்துவர் மிக பாசமாகவும் பொறுமையாகவும் சிகிச்சை அளித்தார். குழந்தைகள் வார்டு மிகவும் சுத்தமாகவும் பயமின்றியும் உள்ளது.",
            "தடுப்பூசி மற்றும் குழந்தை பராமரிப்பில் சுபி சுபிக்ஷம் மருத்துவமனைக்கு ஈடு இணை இல்லை. நர்ஸ்கள் குழந்தைகளை தங்கள் சொந்த குழந்தை போல் பார்த்துக் கொள்கிறார்கள்.",
            "காய்ச்சல் மற்றும் சுவாசக் கோளாறால் அவதிப்பட்ட என் குழந்தையை உடனடி சிகிச்சை தந்து குணமாக்கினர். கடலூர் பெற்றோருக்கு வரப்பிரசாதம் இந்த மருத்துவமனை!"
        ],
        tanglish: [
            "Paediatrician doctor and nurses babies-ah romba gentle-ah handle pannanga. Fever prompt-ah control aachu. Baby friendly atmosphere and super clean ward!",
            "Child vaccination and routine checkup-ku regularly inga dhaan varuvom. Doctors explain dosage and nutrition clearly. Highly recommended for kids health in Cuddalore!",
            "My kid was crying with stomach ache, paediatric team quickly calmed him down and gave instant relief. Very loving and caring doctors!"
        ]
    },
    cardiology: {
        en: [
            "Visited the cardiology unit for chest pain assessment. Immediate ECG, 2D Echo, and expert consultation by the cardiologist gave complete peace of mind. Excellent cardiac diagnostics and 24/7 ICU backup!",
            "Cardiology consultation and preventative lifestyle guidance were exceptional. State-of-the-art heart monitoring facilities right here in Cuddalore with continuous nurse care.",
            "Prompt attention during chest discomfort. The emergency casualty and cardiology staff coordinated seamlessly. Very grateful for their vigilance and professional care."
        ],
        ta: [
            "இதய சிகிச்சை பிரிவு மற்றும் அவசர தீவிர சிகிச்சைப் பிரிவு மிகவும் நவீனமானது. உடனடி இசிஜி, எக்கோ பரிசோதனை செய்து மருத்துவர் உரிய சிகிச்சை அளித்தார். மிகுந்த திருப்தி!",
            "நெஞ்சு வலி காரணமாக வந்தபோது தாமதமின்றி பரிசோதனை செய்து இதய மருத்துவர்கள் நலமுடன் கவனித்தனர். கடலூரில் சிறந்த கார்டியாலஜி வசதிகள்!",
            "அனுபவம் வாய்ந்த இதய நிபுணர்கள் மற்றும் 24 மணி நேர ஐசியூ கண்காணிப்பு. எங்கள் குடும்பத்தாரின் இதய ஆரோக்கியத்தை மீட்டெடுத்த சுபி சுபிக்ஷம் மருத்துவமனைக்கு நன்றி!"
        ],
        tanglish: [
            "Chest discomfort-ku prompt-ah ECG and 2D Echo eduthu cardiologist immediately check pannanga. 24/7 ICU backup makes this hospital very reliable for heart care.",
            "Cardiology doctors guidance and lifestyle advice romba clear-ah irundhuchu. No unnecessary panic, correct medication. Excellent cardiac care in Cuddalore!",
            "Subhi Subhiksham cardiac setup is top standard. ICU beds with modern monitors and caring staff. Thank you doctors!"
        ]
    },
    pharmacy: {
        en: [
            "24/7 Pharmacy and advanced diagnostics under one roof! Always find prescribed medicines in stock even at 2 AM. Fast lab test results directly sent via WhatsApp. Very convenient!",
            "The in-house digital X-ray and fully automated lab provide super quick, accurate reports. The pharmacy staff is courteous and explains medication timing clearly.",
            "Clean diagnostic rooms, painless blood sample collection, and round-the-clock medicine availability. Makes patient visits completely hassle-free!"
        ],
        ta: [
            "24 மணி நேர மருந்தகம் மற்றும் அதிநவீன பரிசோதனை கூடம் மிக பயனுள்ளதாக உள்ளது. நள்ளிரவிலும் தேவையான அனைத்து மருந்துகளும் எளிதில் கிடைக்கின்றன.",
            "லேப் டெஸ்ட் முடிவுகள் மிக துரிதமாகவும் துல்லியமாகவும் வழங்கப்படுகின்றன. எக்ஸ்-ரே மற்றும் இரத்தப் பரிசோதனை ஊழியர்கள் கனிவானவர்கள்.",
            "மருந்தகத்தில் மருந்துகளின் விவரங்களை தெளிவாக விளக்குகிறார்கள். ஒரே இடத்தில் அனைத்து மருத்துவ வசதிகளும் கிடைப்பது மிகவும் சிறப்பு!"
        ],
        tanglish: [
            "24/7 pharmacy is a lifesaver in Cuddalore! All branded medicines always in stock. Late night emergency-ku kooda medicine thedi alaia theva illa.",
            "Lab results came very fast within 1-2 hours. Blood collection was painless and hygienic. Very professional pharmacy and diagnostic team!",
            "Digital X-ray and automated pathology lab under one roof. Clean and hassle-free service at Subhi Subhiksham Hospitals."
        ]
    },
    nursing: {
        en: [
            "The nursing staff and ward attendants at Subhi Subhiksham Hospitals deserve a special salute! They attend to calls within seconds with warm smiles. The entire hospital is kept sparkling clean.",
            "Exceptional patient hospitality and hygienic private rooms. From housekeeping to duty doctors, everyone treated us with genuine empathy and care. Feels like family!",
            "Hospital rooms are well-ventilated, spotless, and sanitized multiple times daily. Outstanding nursing vigilance throughout the night. Very pleased with their hospitality!"
        ],
        ta: [
            "சுபி சுபிக்ஷம் மருத்துவமனையின் செவிலியர்கள் சேவை போற்றத்தக்கது. எந்த நேரத்திலும் புன்னகையுடன் கவனித்துக் கொள்கிறார்கள். மருத்துவமனை முழுவதும் மிக சுத்தமாக பராமரிக்கப்படுகிறது.",
            "நோயாளி அறைகள் ஏசி, சுத்தமான படுக்கைகள் மற்றும் அமைதியான சூழலுடன் உள்ளது. தூய்மைப் பணியாளர்கள் முதல் மருத்துவர்கள் வரை அனைவரும் அன்பாக பழகுகிறார்கள்.",
            "கடலூரில் இவ்வளவு சுத்தமான, தரமான கவனிப்புடன் கூடிய மருத்துவமனை இருப்பது பெருமைக்குரியது. செவிலியர் குழுவிற்கு எனது மனமார்ந்த பாராட்டுகள்!"
        ],
        tanglish: [
            "Nursing care is simply the best! Ring button amukkina seconds-la attend panranga with polite smiling faces. Hospital is maintained super clean and hygienic.",
            "Private rooms are very neat, AC and ventilation super. Hospital doesn't smell like a regular hospital, feels very positive and pleasant. 5/5 stars!",
            "Housekeeping and nursing team dedication deserves special salute. Patients-ah family members madhiri treat panranga. Truly impressed!"
        ]
    }
};

let currentCategory = 'emergency';
let currentLanguage = 'en';
let currentReviewText = '';
let currentReviewIndex = 0;
let isTypewriting = false;
let typewriterTimeout = null;

let recognition = null;
let isRecording = false;
let baseTextBeforeVoice = '';
let accumulatedFinalText = '';

const reviewTextInput = document.getElementById('reviewTextInput');
const charCount = document.getElementById('charCount');
const refreshReviewBtn = document.getElementById('refreshReviewBtn');
const voiceMicBtn = document.getElementById('voiceMicBtn');
const micLabel = document.getElementById('micLabel');
const voiceListeningBanner = document.getElementById('voiceListeningBanner');
const voiceStatusText = document.getElementById('voiceStatusText');
const stopVoiceBtn = document.getElementById('stopVoiceBtn');
const copyAndOpenGoogleBtn = document.getElementById('copyAndOpenGoogleBtn');
const ctaBtnText = document.getElementById('ctaBtnText');
const saveContactBtn = document.getElementById('saveContactBtn');
const toastNotification = document.getElementById('toastNotification');
const toastTitle = document.getElementById('toastTitle');
const toastSub = document.getElementById('toastSub');
const confettiCanvas = document.getElementById('confettiCanvas');
const starButtons = document.querySelectorAll('.star-btn');
const categoryPills = document.querySelectorAll('.category-pill');
const langTabs = document.querySelectorAll('.lang-tab');
const chipTags = document.querySelectorAll('.chip-tag');

document.addEventListener('DOMContentLoaded', () => {
    initCategoryPills();
    initLanguageSwitcher();
    initStarRating();
    initSpeechRecognition();
    initCopyAction();
    initVCardGenerator();
    initImpressionChips();
    triggerReviewChange(false);

    reviewTextInput.addEventListener('input', () => {
        currentReviewText = reviewTextInput.value;
        updateCharCount();
    });

    refreshReviewBtn.addEventListener('click', () => {
        triggerReviewChange(true);
    });
});

function initCategoryPills() {
    categoryPills.forEach(pill => {
        pill.addEventListener('click', () => {
            if (pill.dataset.category === currentCategory) return;
            categoryPills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            currentCategory = pill.dataset.category;
            currentReviewIndex = 0;
            triggerReviewChange(false);
        });
    });
}

function initLanguageSwitcher() {
    langTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            if (tab.dataset.lang === currentLanguage) return;
            langTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentLanguage = tab.dataset.lang;
            currentReviewIndex = 0;

            if (recognition) {
                recognition.lang = (currentLanguage === 'ta' || currentLanguage === 'tanglish') ? 'ta-IN' : 'en-IN';
            }

            triggerReviewChange(false);
        });
    });
}

function initStarRating() {
    starButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const rating = parseInt(btn.dataset.rating, 10);
            starButtons.forEach(b => {
                const bRating = parseInt(b.dataset.rating, 10);
                if (bRating <= rating) {
                    b.classList.add('active');
                } else {
                    b.classList.remove('active');
                }
            });
            showToast("⭐⭐⭐⭐⭐ 5-Star Experience!", "Thank you for rating Subhi Subhiksham Hospitals");
        });
    });
}

function initImpressionChips() {
    chipTags.forEach(chip => {
        chip.addEventListener('click', () => {
            chip.classList.toggle('selected');
            const phrase = chip.dataset.phrase;
            if (chip.classList.contains('selected')) {
                let text = reviewTextInput.value.trim();
                if (text && !text.includes(phrase)) {
                    reviewTextInput.value = text + " " + phrase + ".";
                } else if (!text) {
                    reviewTextInput.value = phrase + " at Subhi Subhiksham Hospitals Cuddalore.";
                }
                updateCharCount();
                showToast("Added to Review", `"${phrase}" added!`);
            }
        });
    });
}

function getAvailableReviews() {
    const deptReviews = reviewsDatabase[currentCategory] || reviewsDatabase.emergency;
    return deptReviews[currentLanguage] || deptReviews.en;
}

function triggerReviewChange(isShuffle = false) {
    const list = getAvailableReviews();
    if (!list || list.length === 0) return;

    if (isShuffle) {
        currentReviewIndex = (currentReviewIndex + 1) % list.length;
    } else {
        currentReviewIndex = 0;
    }

    typewriteText(list[currentReviewIndex]);
}

function typewriteText(targetText) {
    if (typewriterTimeout) {
        clearTimeout(typewriterTimeout);
    }

    isTypewriting = true;
    currentReviewText = targetText;
    reviewTextInput.value = '';
    
    let index = 0;
    const speed = 14;

    function typeChar() {
        if (index < targetText.length) {
            reviewTextInput.value += targetText.charAt(index);
            index++;
            updateCharCount();
            typewriterTimeout = setTimeout(typeChar, speed);
        } else {
            isTypewriting = false;
            updateCharCount();
        }
    }

    typeChar();
}

function updateCharCount() {
    const count = reviewTextInput.value.length;
    charCount.textContent = `${count} chars`;
}

function initSpeechRecognition() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
        voiceMicBtn.addEventListener('click', () => {
            showToast("Mic Not Supported", "Your browser doesn't support live voice typing. Please type directly into the review box.", true);
        });
        return;
    }

    recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = (currentLanguage === 'ta' || currentLanguage === 'tanglish') ? 'ta-IN' : 'en-IN';

    recognition.onstart = () => {
        isRecording = true;
        voiceMicBtn.classList.add('recording');
        micLabel.textContent = "Recording...";
        voiceListeningBanner.classList.remove('hidden');
        
        baseTextBeforeVoice = reviewTextInput.value.trim();
        accumulatedFinalText = '';

        voiceStatusText.textContent = (currentLanguage === 'ta' || currentLanguage === 'tanglish')
            ? "கேட்கிறது... தமிழில் பேசுங்கள் (Listening in Tamil)..." 
            : "Listening... Speak your experience now in English/Tamil";
    };

    recognition.onresult = (event) => {
        let interimTranscript = '';
        let currentFinalChunk = '';

        for (let i = event.resultIndex; i < event.results.length; ++i) {
            if (event.results[i].isFinal) {
                currentFinalChunk += event.results[i][0].transcript + ' ';
            } else {
                interimTranscript += event.results[i][0].transcript;
            }
        }

        if (currentFinalChunk) {
            accumulatedFinalText += currentFinalChunk;
        }

        const spokenContent = (accumulatedFinalText + interimTranscript).trim();
        if (spokenContent) {
            if (baseTextBeforeVoice) {
                reviewTextInput.value = baseTextBeforeVoice + ' ' + spokenContent;
            } else {
                reviewTextInput.value = spokenContent;
            }
            updateCharCount();
        }
    };

    recognition.onerror = (event) => {
        console.warn("Speech recognition error:", event.error);
        stopVoiceRecording();
        if (event.error === 'not-allowed') {
            showToast("Microphone Blocked", "Please click the lock icon in your browser URL bar and allow Microphone access.", true);
        } else if (event.error === 'no-speech') {
            showToast("No Voice Detected", "Please speak close to the microphone and try again.", true);
        }
    };

    recognition.onend = () => {
        stopVoiceRecording();
    };

    voiceMicBtn.addEventListener('click', () => {
        if (!isRecording) {
            startVoiceRecording();
        } else {
            stopVoiceRecording();
        }
    });

    stopVoiceBtn.addEventListener('click', () => {
        stopVoiceRecording();
    });
}

function startVoiceRecording() {
    if (!recognition) return;
    try {
        recognition.lang = (currentLanguage === 'ta' || currentLanguage === 'tanglish') ? 'ta-IN' : 'en-IN';
        recognition.start();
    } catch (err) {
        console.error("Speech recognition error:", err);
    }
}

function stopVoiceRecording() {
    if (!recognition) return;
    isRecording = false;
    voiceMicBtn.classList.remove('recording');
    micLabel.textContent = "Start Speaking";
    voiceListeningBanner.classList.add('hidden');
    try {
        recognition.stop();
    } catch (err) {}
}

function initCopyAction() {
    copyAndOpenGoogleBtn.addEventListener('click', async () => {
        const textToCopy = reviewTextInput.value.trim() || currentReviewText || "Excellent healthcare service at Subhi Subhiksham Hospitals Cuddalore!";

        let copied = false;
        try {
            if (navigator.clipboard && navigator.clipboard.writeText) {
                await navigator.clipboard.writeText(textToCopy);
                copied = true;
            } else {
                reviewTextInput.select();
                document.execCommand('copy');
                copied = true;
            }
        } catch (e) {
            reviewTextInput.select();
            document.execCommand('copy');
            copied = true;
        }

        copyAndOpenGoogleBtn.style.background = "linear-gradient(135deg, #059669 0%, #10b981 100%)";
        ctaBtnText.textContent = "✓ Copied! Opening Google Review...";

        triggerConfetti();
        showToast("✓ Review Copied to Clipboard!", "Opening Subhi Subhiksham Google review page. Just paste & submit!");

        setTimeout(() => {
            window.open(GOOGLE_REVIEW_URL, '_blank');
            setTimeout(() => {
                copyAndOpenGoogleBtn.style.background = "";
                ctaBtnText.textContent = "Copy Review & Paste on Google";
            }, 1500);
        }, 700);
    });
}

function initVCardGenerator() {
    saveContactBtn.addEventListener('click', () => {
        const vCardData = [
            "BEGIN:VCARD",
            "VERSION:3.0",
            "N:Hospitals;Subhi Subhiksham;;;",
            "FN:Subhi Subhiksham Hospitals Pvt Ltd",
            "ORG:Subhi Subhiksham Hospitals Pvt Ltd",
            "TITLE:24/7 Multi-Speciality Hospital",
            "TEL;TYPE=WORK,VOICE:+919514299393",
            "TEL;TYPE=CELL,VOICE:+919514299393",
            "EMAIL;TYPE=PREF,INTERNET:subhikshamhospitals@gmail.com",
            "URL:https://www.subhisubhikshamhospitals.com/",
            "ADR;TYPE=WORK:;;No. 6 Lokambal Kovil Street\\, Seetharam Nagar\\, Near CK School;Pudupalayam\\, Cuddalore;Tamil Nadu;607001;India",
            "NOTE:Subhi Subhiksham Hospitals Pvt Ltd - 24/7 Emergency & Trauma Care, ICU, Laparoscopic Surgery, Maternity, Ortho, Neurology, Cardiology, and Pharmacy.",
            "END:VCARD"
        ].join("\r\n");

        const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Subhi_Subhiksham_Hospitals.vcf';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        showToast("📇 Contact Card Downloaded", "Open the file to save Subhi Subhiksham Hospitals to your phone!");
    });
}

let toastTimeout = null;
function showToast(title, subtitle, isError = false) {
    if (toastTimeout) clearTimeout(toastTimeout);
    toastTitle.textContent = title;
    toastSub.textContent = subtitle;
    const icon = document.getElementById('toastIcon');
    if (isError) {
        icon.innerHTML = '<i class="fas fa-exclamation-circle" style="color: #ef4444;"></i>';
    } else {
        icon.innerHTML = '<i class="fas fa-check-circle" style="color: #10b981;"></i>';
    }
    toastNotification.classList.remove('hidden');
    toastTimeout = setTimeout(() => {
        toastNotification.classList.add('hidden');
    }, 3800);
}

function triggerConfetti() {
    if (!confettiCanvas) return;
    const ctx = confettiCanvas.getContext('2d');
    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;

    const pieces = [];
    const colors = ['#14b8a6', '#0d7a78', '#f59e0b', '#3b82f6', '#10b981', '#ec4899', '#ffffff'];

    for (let i = 0; i < 75; i++) {
        pieces.push({
            x: window.innerWidth / 2,
            y: window.innerHeight / 2,
            w: Math.random() * 8 + 4,
            h: Math.random() * 8 + 4,
            color: colors[Math.floor(Math.random() * colors.length)],
            vx: (Math.random() - 0.5) * 14,
            vy: (Math.random() - 0.7) * 16,
            rotation: Math.random() * 360,
            rotationSpeed: (Math.random() - 0.5) * 12,
            alpha: 1
        });
    }

    let animationFrame;
    function renderConfetti() {
        ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
        let activeCount = 0;

        pieces.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            p.vy += 0.35;
            p.rotation += p.rotationSpeed;
            p.alpha -= 0.015;

            if (p.alpha > 0) {
                activeCount++;
                ctx.save();
                ctx.translate(p.x, p.y);
                ctx.rotate((p.rotation * Math.PI) / 180);
                ctx.globalAlpha = Math.max(0, p.alpha);
                ctx.fillStyle = p.color;
                ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
                ctx.restore();
            }
        });

        if (activeCount > 0) {
            animationFrame = requestAnimationFrame(renderConfetti);
        } else {
            ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
            cancelAnimationFrame(animationFrame);
        }
    }
    renderConfetti();
}
