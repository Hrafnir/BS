/* Version: #3 */

// === SEKSJON: Initialisering ===
document.addEventListener('DOMContentLoaded', () => {
    console.log('[SYSTEM] script.js lastet inn og DOM er klar.');
    console.log('[SYSTEM] Starter Bjørnsveen Skaperverksted klient-side logikk...');

    initNavigation();
    initScrollTracking();
    initEquipmentCards();
});

// === SEKSJON: Navigasjonshåndtering ===
function initNavigation() {
    console.log('[NAVIGASJON] Initialiserer navigasjonslogikk.');
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            console.log(`[NAVIGASJON] Klikk registrert på lenke: ${event.target.innerText} -> Mål: ${event.target.getAttribute('href')}`);
        });
    });
}

// === SEKSJON: Scroll Tracking (Intersection Observer) ===
function initScrollTracking() {
    console.log('[SCROLL] Setter opp IntersectionObserver for å spore aktive seksjoner.');
    
    // Vi overvåker alle sections og headeren (Hero)
    const sections = document.querySelectorAll('section, header');
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 // Trigger logging når minst 50% av seksjonen er synlig i skjermbildet
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log(`[SCROLL] Seksjon aktiv i visningsfeltet: #${entry.target.id}`);
            }
        });
    }, options);

    sections.forEach(section => {
        if (section.id) {
            observer.observe(section);
            console.log(`[SCROLL] Observerer seksjon: #${section.id}`);
        }
    });
}

// === SEKSJON: Maskinpark Interaktivitet ===
function initEquipmentCards() {
    console.log('[UI] Initialiserer lyttere for maskinpark-kort.');
    const cards = document.querySelectorAll('.equip-card');

    cards.forEach((card, index) => {
        card.addEventListener('mouseenter', () => {
            const cardTitle = card.querySelector('h3').innerText;
            console.log(`[UI] Mus over kort #${index + 1}: ${cardTitle}`);
        });
        
        card.addEventListener('mouseleave', () => {
            const cardTitle = card.querySelector('h3').innerText;
            console.log(`[UI] Mus forlot kort #${index + 1}: ${cardTitle}`);
        });
    });
}

console.log('[SYSTEM] Alle funksjoner i script.js er lest inn og klar.');

/* Version: #3 */
