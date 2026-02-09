// =======================
// Personalized Welcome
// =======================
window.addEventListener('DOMContentLoaded', () => {
    const welcomeContainer = document.getElementById('welcome-container');
    const welcomeMsg = document.getElementById('welcome-msg');
    const welcomeImg = document.getElementById('welcome-img');

    let userName = prompt("Bienvenue! Quel est votre nom?");
    if (userName && userName.trim() !== "") {
        welcomeMsg.textContent = `Bienvenue ${userName} sur Rubens Multi-Service!`;
        welcomeImg.src = 'images/Rubenspdg.jpg';
    } else {
        welcomeMsg.textContent = "Bienvenue sur Rubens Multi-Service!";
        welcomeImg.src = 'images/Logo.jpg';
    }

    // Fade out after 5 secondes
    setTimeout(() => {
        welcomeContainer.style.display = 'none';
    }, 5000);
});

// =======================
// Slider Auto Scroll
// =======================
const slider = document.querySelector('.slider');
let scrollAmount = 0;
function autoScroll() {
    scrollAmount += 1;
    if(scrollAmount >= slider.scrollWidth - slider.clientWidth){
        scrollAmount = 0;
    }
    slider.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
    });
}
setInterval(autoScroll, 50);

// =======================
// Lightbox Galerie
// =======================
const galleryImages = document.querySelectorAll('.gallery img');
galleryImages.forEach(img => {
    img.addEventListener('click', () => {
        const lightbox = document.createElement('div');
        lightbox.id = 'lightbox';
        lightbox.style.position = 'fixed';
        lightbox.style.top = 0;
        lightbox.style.left = 0;
        lightbox.style.width = '100%';
        lightbox.style.height = '100%';
        lightbox.style.background = 'rgba(0,0,0,0.9)';
        lightbox.style.display = 'flex';
        lightbox.style.alignItems = 'center';
        lightbox.style.justifyContent = 'center';
        lightbox.style.zIndex = '9999';

        const imgClone = document.createElement('img');
        imgClone.src = img.src;
        imgClone.style.maxWidth = '90%';
        imgClone.style.maxHeight = '90%';
        imgClone.style.borderRadius = '10px';

        lightbox.appendChild(imgClone);
        document.body.appendChild(lightbox);

        lightbox.addEventListener('click', () => {
            document.body.removeChild(lightbox);
        });
    });
});

// =======================
// Envoyer une demande
// =======================
const form = document.querySelector('form[name="demande"]');
form.addEventListener('submit', (e) => {
    alert("Merci! Votre demande a été envoyée. Nous vous contacterons bientôt.");
});

// =======================
// WhatsApp Quick Button
// =======================
const whatsappLinks = document.querySelectorAll('a[href*="wa.me"]');
whatsappLinks.forEach(link => {
    link.addEventListener('click', () => {
        alert("Vous allez être redirigé vers WhatsApp!");
    });
});