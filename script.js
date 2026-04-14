/* Version: #10 */

// === SEKSJON: Konfigurasjon og Data ===
const equipmentData = {
    'bambu': {
        title: 'Bambu Lab P2S Combo',
        description: 'Våre mest avanserte 3D-printere med AMS (Automatic Material System). Disse maskinene kan printe i opptil 4 farger samtidig og er kjent for sin ekstreme hastighet og pålitelighet. Perfekt for både nybegynnere og viderekomne skapere.',
        link: 'https://bambulab.com/en/p1'
    },
    'prusa': {
        title: 'Prusa Mini+ Maskiner',
        description: 'Kompakte, men svært kapable 3D-printere fra den legendariske produsenten Prusa. Disse er arbeidshestene i verkstedet vårt og er ideelle for å lære det grunnleggende om 3D-printing og teknisk vedlikehold.',
        link: 'https://www.prusa3d.com/category/original-prusa-mini/'
    },
    'cricut': {
        title: 'Cricut Maker Vinylkuttere',
        description: 'Allsidige maskiner som kan kutte alt fra tynn vinyl til tykkere materialer som lær og balsatre. Brukes flittig til klistremerker, tekstiltrykk og dekorasjoner.',
        link: 'https://cricut.com/en-us/cutting-machines/cricut-maker'
    },
    'varmepresse': {
        title: 'Varmepresse',
        description: 'Vår profesjonelle varmepresse brukes til å overføre vinyl-design og sublimeringstrykk til tekstiler som t-skjorter, hettegensere og tøyvesker. En sentral del av vår tekstilavdeling.',
        link: 'https://www.google.com/search?q=heat+press+for+textiles'
    },
    'janome': {
        title: 'Janome Symaskiner',
        description: 'Vi har 8 moderne symaskiner fra Janome. Disse er robuste og brukervennlige, og gir medlemmene våre mulighet til å jobbe med alt fra enkle reparasjoner til avanserte tekstilprosjekter og søm.',
        link: 'https://www.janome.com/'
    }
};

// === SEKSJON: Initialisering ===
document.addEventListener('DOMContentLoaded', () => {
    console.log('[SYSTEM] script.js Versjon #10 lastet inn.');
    console.log('[SYSTEM] Initialiserer Bjørnsveen Skaperverksted interaksjonsmodul...');

    initNavigation();
    initScrollTracking();
    initEquipmentSelector();
});

// === SEKSJON: Utstyrsvelger (Dropdown Logikk) ===
function initEquipmentSelector() {
    const selectElement = document.getElementById('equipment-select');
    const infoCard = document.getElementById('equipment-info-card');
    const titleElement = document.getElementById('selected-title');
    const descElement = document.getElementById('selected-description');
    const linkElement = document.getElementById('product-link');

    if (!selectElement) {
        console.error('[FEIL] Kunne ikke finne #equipment-select i DOM.');
        return;
    }

    console.log('[UI] Utstyrsvelger er klar for bruk.');

    selectElement.addEventListener('change', (event) => {
        const selectedKey = event.target.value;
        const data = equipmentData[selectedKey];

        console.log(`[EVENT] Bruker valgte utstyr: ${selectedKey}`);

        if (data) {
            // Oppdaterer innholdet i kortet
            titleElement.innerText = data.title;
            descElement.innerText = data.description;
            linkElement.href = data.link;

            // Viser kortet med en enkel animasjonseffekt via CSS (håndteres av klassen)
            infoCard.classList.remove('hidden');
            
            console.log(`[UI] Informasjonskort oppdatert for: ${data.title}`);
            console.log(`[UI] Lenke satt til: ${data.link}`);
        } else {
            console.warn(`[ADVARSEL] Fant ingen data for nøkkel: ${selectedKey}`);
            infoCard.classList.add('hidden');
        }
    });
}

// === SEKSJON: Navigasjonshåndtering ===
function initNavigation() {
    console.log('[NAVIGASJON] Initialiserer lenkelyttere.');
    const navLinks = document.querySelectorAll('.nav-links a, .cta-button');

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            const destination = link.getAttribute('href');
            console.log(`[NAVIGASJON] Bruker klikket på: ${link.innerText || 'CTA'} -> Mål: ${destination}`);
        });
    });
}

// === SEKSJON: Scroll Tracking ===
function initScrollTracking() {
    console.log('[SCROLL] Starter seksjons-overvåking.');
    
    const sections = document.querySelectorAll('section, header');
    const observerOptions = {
        root: null,
        threshold: 0.5
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log(`[VIEW] Seksjon i fokus: #${entry.target.id}`);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        if (section.id) sectionObserver.observe(section);
    });
}

console.log('[SYSTEM] Alle moduler i script.js er operative.');

/* Version: #10 */
