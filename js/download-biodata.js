document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide('#image-carousel', {
        perPage: 4,
        gap: '1rem',
        interval: 3000,
        pagination: true,
        arrows: true,
        breakpoints: {
            1024: {
                perPage: 4,
            },
            768: {
                perPage: 3,
            },
            640: {
                perPage: 3,
            }
        }
    });
    splide.mount();
});

const data = sessionStorage.getItem('formData');
const profile = sessionStorage.getItem('storedImage');
const biodata = JSON.parse(data);

const dataHolder = document.querySelector('.data-holder');

const mappedArray = Object.entries(biodata).map(([key, value]) => {
    if (value !== "") { // Exclude empty values
        const item = document.createElement('p');
        const updatedKeyText = key.replace(/_/g, " ");
        item.innerHTML = `<strong>${updatedKeyText}:</strong> <span>${value}</span>`; // Format key-value pair as text
        dataHolder.appendChild(item);
    }
});

const profilePic = document.querySelector('.profile-image');

if (profile) {
    profilePic.src = profile;
}

const quoteText = sessionStorage.getItem('quote');

if (quoteText) {
    document.querySelector('.quote').textContent = quoteText;
}

const logoImage = document.querySelector('.logo-image-holder img');

const savedLogo = sessionStorage.getItem('religiousLogo');
if (savedLogo) {
    logoImage.src = savedLogo;
}

const encodedCodec = sessionStorage.getItem('codec');

window.addEventListener('load', () => {
    if (atob(encodedCodec) === '9') {
        document.getElementById('download-btn').addEventListener('click', downloadAsImage);
    } else if (atob(encodedCodec) === '8') {
        document.getElementById('download-btn').addEventListener('click', downloadAsPDF);
    } else if (atob(encodedCodec) === '7') {
        document.getElementById('download-btn').addEventListener('click', downloadAsWord);
    }
})

function downloadAsImage() {
    const element = document.getElementById('capture-section'); // Section to capture

    html2canvas(element).then((canvas) => {
        const image = canvas.toDataURL('image/jpeg');

        const link = document.createElement('a');
        link.href = image;
        link.download = 'biodata.jpeg';
        link.click();
    });
}

function downloadAsPDF() {
    const element = document.getElementById('capture-section');

    html2canvas(element).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const { jsPDF } = window.jspdf;

        const pdf = new jsPDF('p', 'mm', 'a4');
        const imgWidth = 190;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        pdf.addImage(imgData, 'PNG', 10, 10, imgWidth, imgHeight);
        pdf.save('section.pdf');
    });
}

function downloadAsWord() {
    const content = document.getElementById('capture-section').innerHTML;
    const htmlContent = `
      <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
      <head><meta charset='utf-8'></head><body>${content}</body></html>`;

    // Create a Blob with the Word content
    const blob = new Blob(['\ufeff', htmlContent], {
        type: 'application/msword',
    });

    // Create a download link
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'document.doc';
    link.click();
}

// DOWNLOAD AS IMAGE
// document.getElementById('download-btn').addEventListener('click', () => {
//     const element = document.getElementById('capture-section'); // Section to capture

//     html2canvas(element).then((canvas) => {
//         const image = canvas.toDataURL('image/jpeg');

//         const link = document.createElement('a');
//         link.href = image;
//         link.download = 'biodata.jpeg';
//         link.click();
//     });
// });

// DOWNLOAD AS PDF
// document.getElementById('download-btn').addEventListener('click', () => {
//     const element = document.getElementById('capture-section');

//     html2canvas(element).then((canvas) => {
//         const imgData = canvas.toDataURL('image/png');
//         const { jsPDF } = window.jspdf;

//         const pdf = new jsPDF('p', 'mm', 'a4');
//         const imgWidth = 190;
//         const imgHeight = (canvas.height * imgWidth) / canvas.width;

//         pdf.addImage(imgData, 'PNG', 10, 10, imgWidth, imgHeight);
//         pdf.save('section.pdf');
//     });
// });

// document.getElementById('download-btn').addEventListener('click', function () {
//     const content = document.getElementById('capture-section').innerHTML;
//     const htmlContent = `
//       <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
//       <head><meta charset='utf-8'></head><body>${content}</body></html>`;

//     // Create a Blob with the Word content
//     const blob = new Blob(['\ufeff', htmlContent], {
//         type: 'application/msword',
//     });

//     // Create a download link
//     const link = document.createElement('a');
//     link.href = URL.createObjectURL(blob);
//     link.download = 'document.doc';
//     link.click();
// });

function changeTemp(temp) {
    document.getElementById('biodata-preview-img').src = temp;
    document.querySelectorAll('.data-holder p').forEach((item) => {
        if (temp == './assets/templatesImages/template3.jpg') {
            item.style.color = 'white'
        } else if (temp == './assets/templatesImages/template5.jpg') {
            item.style.color = 'white'
        } else if (temp == './assets/templatesImages/template6.jpg') {
            item.style.color = 'white'
        } else if (temp == './assets/templatesImages/template8.jpg') {
            item.style.color = 'white'
        } else if (temp == './assets/templatesImages/template9.jpg') {
            item.style.color = 'white'
        } else if (temp == './assets/templatesImages/template10.jpg') {
            item.style.color = 'white'
        } else if (temp == './assets/templatesImages/template12.jpg') {
            item.style.color = 'white'
        } else if (temp == './assets/templatesImages/template15.jpg') {
            item.style.color = 'white'
        } else {
            item.style.color = 'maroon'
        }
    })
}