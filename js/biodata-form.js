const planDialog = document.querySelector('.planDialog');
const closePlanDialogBtn = document.querySelector('.closePlanDialogBtn');

// window.addEventListener('load', () => {
//     planDialog.showModal();
// })

closePlanDialogBtn.addEventListener('click', () => {
    planDialog.close();
})

const logoDialog = document.querySelector('.logoDialog');
const closeLogoDialogBtn = document.querySelector('.closeLogoDialogBtn');
const logoChangeBtn = document.getElementById('logoChangeBtn');

logoChangeBtn.addEventListener('click', () => {
    logoDialog.showModal();
})

closeLogoDialogBtn.addEventListener('click', () => {
    logoDialog.close();
})

const profilePic = document.getElementById('profile-image') // profile-image
const profileInput = document.querySelector('.profile-input') // file-input

profileInput.addEventListener('change', () => {
    const file = profileInput.files[0];
    profilePic.src = URL.createObjectURL(file);
})

window.addEventListener('load', () => {
    const savedData = JSON.parse(sessionStorage.getItem('formData'));
    if (savedData) {
        document.getElementById('full_name').value = savedData.fullName || '';
        document.getElementById('dob').value = savedData.dob || '';
        document.getElementById('height').value = savedData.height || '';
        document.getElementById('place_of_birth').value = savedData.place_of_birth || '';
        document.getElementById('religion').value = savedData.religion || '';
        document.getElementById('caste').value = savedData.caste || '';
        document.getElementById('rashi').value = savedData.rashi || '';
        document.getElementById('nakshatra').value = savedData.nakshatra || '';
        document.getElementById('manglik').value = savedData.manglik || '';
        document.getElementById('gotra').value = savedData.gotra || '';
        document.getElementById('gan').value = savedData.gan || '';
        document.getElementById('complexion').value = savedData.complexion || '';
        document.getElementById('blood_group').value = savedData.blood_group || '';
        document.getElementById('education').value = savedData.education || '';
        document.getElementById('job').value = savedData.job || '';
        document.getElementById('salary').value = savedData.salary || '';
        document.getElementById('father_name').value = savedData.father_name || '';
        document.getElementById('father_job').value = savedData.father_job || '';
        document.getElementById('mother_name').value = savedData.mother_name || '';
        document.getElementById('mother_job').value = savedData.mother_job || '';
        document.getElementById('sister').value = savedData.sister || '';
        document.getElementById('brother').value = savedData.brother || '';
        document.getElementById('mobile').value = savedData.mobile || '';
        document.getElementById('address').value = savedData.address || '';
    }
});

const form = document.getElementById("multiStepForm")
const planForm = document.querySelector(".planForm")

form.addEventListener("input", () => {
    const formData = {
        fullName: document.getElementById('full_name').value,
        dob: document.getElementById('dob').value,
        height: document.getElementById('height').value,
        place_of_birth: document.getElementById('place_of_birth').value,
        religion: document.getElementById('religion').value,
        caste: document.getElementById('caste').value,
        rashi: document.getElementById('rashi').value,
        nakshatra: document.getElementById('nakshatra').value,
        manglik: document.getElementById('manglik').value,
        gotra: document.getElementById('gotra').value,
        gan: document.getElementById('gan').value,
        complexion: document.getElementById('complexion').value,
        blood_group: document.getElementById('blood_group').value,
        education: document.getElementById('education').value,
        job: document.getElementById('job').value,
        salary: document.getElementById('salary').value,
        father_name: document.getElementById('father_name').value,
        father_job: document.getElementById('father_job').value,
        mother_name: document.getElementById('mother_name').value,
        mother_job: document.getElementById('mother_job').value,
        sister: document.getElementById('sister').value,
        brother: document.getElementById('brother').value,
        mobile: document.getElementById('mobile').value,
        address: document.getElementById('address').value,
    };
    sessionStorage.setItem('formData', JSON.stringify(formData));
})

form.addEventListener("submit", (e) => {
    e.preventDefault()
    planDialog.showModal()
})

planForm.addEventListener("submit", (e) => {
    e.preventDefault()
    window.location.href = "biodata-download.html"
})

/********************************************************************************************/

const translations = {
    english: {
        personalInformation: "Personal Information",
        fullName: "Full Name",
        dateOfBirth: "Date of Birth",
        height: "Height",
        placeOfBirth: "Place of Birth",
        religion: "Religion",
        caste: "Caste",
        rashi: "Rashi",
        nakshatra: "Nakshatra",
        manglik: "Manglik",
        gotra: "Gotra",
        gan: "Gan",
        complexion: "Complexion",
        bloodGroup: "Blood Group",
        education: "Education",
        job: "Job/Occupation",
        salary: "Salary",
        fatherName: "Father Name",
        fatherJob: "Father Occupation",
        motherName: "Mother Name",
        motherJob: "Mother Occupation",
        sister: "Sisters",
        brother: "Brothers",
        mobile: "Mobile number",
        address: "Address",
        familyDetails: "Family Details",
        additionalDetails: "Additional Details",
    },
    hindi: {
        personalInformation: "व्यक्तिगत जानकारी",
        fullName: "पूरा नाम",
        dateOfBirth: "जन्म की तारीख",
        height: "ऊंचाई",
        placeOfBirth: "जन्म स्थान",
        religion: "धर्म",
        caste: "जात",
        rashi: "राशी",
        nakshatra: "नक्षत्र",
        manglik: "मंगलिक",
        gotra: "गोत्र",
        gan: "गां",
        complexion: "तंत्र",
        bloodGroup: "ब्लूड ग्रुप",
        education: "शिक्षा",
        job: "व्यवसाय",
        salary: "वेतन",
        fatherName: "पिता का नाम",
        fatherJob: "पिता का व्यवसाय",
        motherName: "मां का नाम",
        motherJob: "मां का व्यवसाय",
        sister: "सिंह",
        brother: "बहिर",
        mobile: "मोबाइल नंबर",
        address: "पता",
        familyDetails: "जन्म स्थान",
        additionalDetails: "अतिरिक्त जानकारी",
    },
    kannada: {
        personalInformation: "ವ್ಯಕ್ತಿಗತ ಮಾಹಿತಿ",
        fullName: "ಪೂರ್ಣ ಹೆಸರು",
        dateOfBirth: "ಹುಟ್ಟಿದ ದಿನಾಂಕ",
        height: "ಎತ್ತರ",
        placeOfBirth: "ಹುಟ್ಟಿದ ಸ್ಥಳ",
        religion: "ಧರ್ಮ",
        caste: "ಜಾತಿ",
        rashi: "ರಾಶಿ",
        nakshatra: "ನಕ್ಷತ್ರ",
        manglik: "ಮಂಗಳಿಕ",
        gotra: "ಗೋತ್ರ",
        gan: "ಗಣ",
        complexion: "ತುಳಿತ್ವ",
        bloodGroup: "ರಕ್ತ ಗುಂಪು",
        education: "ಶಿಕ್ಷಣ",
        job: "ಉದ್ಯೋಗ",
        salary: "ವೇತನ",
        fatherName: "ತಂದೆಯ ಹೆಸರು",
        fatherJob: "ತಂದೆಯ ಉದ್ಯೋಗ",
        motherName: "ತಾಯಿಯ ಹೆಸರು",
        motherJob: "ತಾಯಿಯ ಉದ್ಯೋಗ",
        sister: "ತಂಗಿ",
        brother: "ತಮ್ಮ",
        mobile: "ಮೊಬೈಲ್ ಸಂಖ್ಯೆ",
        address: "ವಿಳಾಸ",
        familyDetails: "ಕುಟುಂಬದ ವಿವರಗಳು",
        additionalDetails: "ಹೆಚ್ಚಿನ ವಿವರಗಳು",
    },
    marathi: {
        personalInformation: "वैयक्तिक माहिती",
        fullName: "पूर्ण नाव",
        dateOfBirth: "जन्मतारीख",
        height: "उंची",
        placeOfBirth: "जन्मस्थान",
        religion: "धर्म",
        caste: "जात",
        rashi: "राशी",
        nakshatra: "नक्षत्र",
        manglik: "मंगळिक",
        gotra: "गोत्र",
        gan: "गण",
        complexion: "त्वचा रंग",
        bloodGroup: "रक्तगट",
        education: "शिक्षण",
        job: "व्यवसाय",
        salary: "पगार",
        fatherName: "वडिलांचे नाव",
        fatherJob: "वडिलांचा व्यवसाय",
        motherName: "आईचे नाव",
        motherJob: "आईचा व्यवसाय",
        sister: "बहिण",
        brother: "भाऊ",
        mobile: "मोबाईल नंबर",
        address: "पत्ता",
        familyDetails: "कुटुंबाची माहिती",
        additionalDetails: "अतिरिक्त माहिती",
    },
    telugu: {
        personalInformation: "వ్యక్తిగత సమాచారం",
        fullName: "పూర్తి పేరు",
        dateOfBirth: "పుట్టిన తేదీ",
        height: "ఎత్తు",
        placeOfBirth: "పుట్టిన స్థలం",
        religion: "మతం",
        caste: "కులం",
        rashi: "రాశి",
        nakshatra: "నక్షత్రం",
        manglik: "మంగళిక",
        gotra: "గోత్రం",
        gan: "గణం",
        complexion: "చర్మ రంగు",
        bloodGroup: "రక్తపు గ్రూప్",
        education: "విద్య",
        job: "ఉద్యోగం",
        salary: "జీతం",
        fatherName: "తండ్రి పేరు",
        fatherJob: "తండ్రి ఉద్యోగం",
        motherName: "తల్లి పేరు",
        motherJob: "తల్లి ఉద్యోగం",
        sister: "అక్క/చెల్లి",
        brother: "అన్న/తమ్ముడు",
        mobile: "మొబైల్ నంబర్",
        address: "చిరునామా",
        familyDetails: "కుటుంబ వివరాలు",
        additionalDetails: "అదనపు వివరాలు",
    }
};

const selectElement = document.getElementById('languageSelect');
let selectedLang = localStorage.getItem('selectedLang') || 'english';

const options = selectElement.options;
for (let i = 0; i < options.length; i++) {
    if (options[i].value === selectedLang) {
        options[i].setAttribute('selected', 'selected'); // Add 'selected' attribute
    } else {
        options[i].removeAttribute('selected'); // Remove 'selected' from others
    }
}

function updateLanguage(lang) {
    const elements = document.querySelectorAll('[data-key]'); // Find all elements with data-key
    elements.forEach((element) => {
        const key = element.getAttribute('data-key'); // Get the key from the data attribute
        element.textContent = translations[lang][key]; // Set the text content based on language
    });
}

selectElement.addEventListener('change', function () {
    const selectedLang = selectElement.value;
    localStorage.setItem('selectedLang', selectedLang);
    updateLanguage(selectedLang);
});

updateLanguage(selectedLang);

const logoImage = document.querySelector('.logoImage');

function changeReligiousLogo(src) {
    logoDialog.close();
    logoImage.src = src;
}