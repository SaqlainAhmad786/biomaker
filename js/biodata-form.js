const planDialog = document.querySelector('.planDialog');
const closePlanDialogBtn = document.querySelector('.closePlanDialogBtn');

// window.addEventListener('load', () => {
//     planDialog.showModal();
// })

closePlanDialogBtn.addEventListener('click', () => {
    planDialog.close();
})

// let currentSection = 0;
// const sections = document.querySelectorAll(".form-section");

// function showSection(index) {
//     sections.forEach((section, i) => {
//         section.classList.toggle("active", i === index);
//     });

//     document.getElementById("prevBtn").disabled = index === 0;
//     document.getElementById("nextBtn").style.display = index === sections.length - 1 ? "none" : "inline-block";
//     document.getElementById("submitBtn").style.display = index === sections.length - 1 ? "inline-block" : "none";
// }

// function changeSection(direction) {
//     currentSection += direction;

//     if (currentSection >= sections.length) {
//         // alert("Form Submitted!");
//         // document.getElementById("multiStepForm").reset();
//         currentSection = 2;
//         planDialog.showModal();
//     }
//     window.scrollTo(0, 0);
//     showSection(currentSection);
// }

const form = document.getElementById("multiStepForm")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const data = new FormData(form)
    const json = Object.fromEntries(data)
    console.log(json)
    planDialog.showModal()
})

// showSection(currentSection);

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
        extraDetails: "Extra Details",
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
        extraDetails: "अतिरिक्त जानकारी",
    }
};

// Select elements
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

// Update translations
function updateLanguage(lang) {
    const elements = document.querySelectorAll('[data-key]'); // Find all elements with data-key
    elements.forEach((element) => {
        const key = element.getAttribute('data-key'); // Get the key from the data attribute
        element.textContent = translations[lang][key]; // Set the text content based on language
    });
}

// Event listener for language selection
selectElement.addEventListener('change', function () {
    const selectedLang = selectElement.value;
    localStorage.setItem('selectedLang', selectedLang);
    updateLanguage(selectedLang);
});

updateLanguage(selectedLang);