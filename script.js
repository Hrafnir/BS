/* Version: #13 */

// === SEKSJON: Konfigurasjon og Data ===
const equipmentData = {
    'bambu': {
        title: 'Bambu Lab P2S Combo',
        description: 'Våre mest avanserte 3D-printere med AMS (Automatic Material System). Disse maskinene kan printe i opptil 4 farger samtidig og er kjent for sin ekstreme hastighet og pålitelighet. Perfekt for både nybegynnere og viderekomne skapere.',
        link: 'https://bambulab.com/en/p2s'
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
    console.log('[SYSTEM] script.js Versjon #13 lastet inn.');
    console.log('[SYSTEM] Initialiserer Bjørnsveen Skaperverksted interaksjonsmoduler...');

    initNavigation();
    initScrollTracking();
    initEquipmentSelector();
    initTabs(); 
    initTimeline(); // Ny modul for tidslinjen
});

// === SEKSJON: Utstyrsvelger (Dropdown Logikk) ===
function initEquipmentSelector() {
    const selectElement = document.getElementById('equipment-select');
    const infoCard = document.getElementById('equipment-info-card');
    const titleElement = document.getElementById('selected-title');
    const descElement = document.getElementById('selected-description');
    const linkElement = document.getElementById('product-link');

    if (!selectElement) {
        console.log('[UI] Utstyrsvelger ikke funnet på denne siden.');
        return;
    }

    console.log('[UI] Utstyrsvelger er klar for bruk.');

    selectElement.addEventListener('change', (event) => {
        const selectedKey = event.target.value;
        const data = equipmentData[selectedKey];

        if (data) {
            titleElement.innerText = data.title;
            descElement.innerText = data.description;
            linkElement.href = data.link;
            infoCard.classList.remove('hidden');
            console.log(`[UI] Informasjonskort oppdatert for: ${data.title}`);
        } else {
            infoCard.classList.add('hidden');
        }
    });
}

// === SEKSJON: Tabs Logikk (For om-oss.html) ===
function initTabs() {
    const tabControls = document.querySelectorAll('.tab-control');
    const tabPanes = document.querySelectorAll('.tab-pane');

    if (tabControls.length === 0 || tabPanes.length === 0) {
        return; // Stille exit hvis vi ikke er på om-oss siden
    }

    console.log('[UI] Initialiserer Tab-navigasjon.');

    tabControls.forEach(control => {
        control.addEventListener('click', () => {
            const targetId = control.getAttribute('data-target');
            
            tabControls.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));

            control.classList.add('active');
            const targetPane = document.getElementById(targetId);
            if (targetPane) {
                targetPane.classList.add('active');
                console.log(`[UI] Viser tab-innhold: ${targetId}`);
            }
        });
    });
}

// === SEKSJON: Tidslinje Animasjon (Ny funksjon) ===
function initTimeline() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    if (timelineItems.length === 0) return;

    console.log('[UI] Initialiserer dynamisk tidslinje.');

    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -30% 0px', // Trigger animasjonen når elementet er 30% opp fra bunnen av skjermen
        threshold: 0.1
    };

    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Fjern active-klassen fra alle, og legg til på den som er mest i fokus
                timelineItems.forEach(item => item.classList.remove('active'));
                entry.target.classList.add('active');
                
                const dateText = entry.target.querySelector('.timeline-date').innerText;
                console.log(`[TIDSLINJE] Fase markert som aktiv: ${dateText}`);
            }
        });
    }, observerOptions);

    timelineItems.forEach(item => timelineObserver.observe(item));
}

// === SEKSJON: Navigasjonshåndtering ===
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-links a, .cta-button');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const destination = link.getAttribute('href');
            console.log(`[NAVIGASJON] Navigerer til: ${destination}`);
        });
    });
}

// === SEKSJON: Scroll Tracking ===
function initScrollTracking() {
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

/* Version: #13 */
