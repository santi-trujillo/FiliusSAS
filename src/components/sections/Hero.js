/**
 * Hero Section Component
 * Sección principal del sitio
 */

export const HeroSection = () => {
    const htmlString = `
    <!-- Hero Section Completo -->
    <section class="hero" id="home">
        <div class="hero-container">
            <!-- Contenido Izquierdo -->
            <div class="hero-content stack stack--md">
                <h1 class="hero-title">
                    <span class="hero-title-name">Ecosistemas digitales para negocios que escalan.</span>
                </h1>

                <p class="hero-description">
                    Diseñamos e implementamos plataformas web de alto rendimiento. Tecnología corporativa que multiplica la conversión y reduce la fricción en ventas B2B.
                </p>

                <div class="hero-actions cluster cluster--center">
                    <a href="https://wa.me/3195604302?text=Hola%20Filius%20Tec,%20me%20interesa%20agendar%20una%20consultor%C3%ADa%20tecnol%C3%B3gica%20para%20mi%20empresa." target="_blank" rel="noopener noreferrer" class="btn btn--primary btn--lg">
                        Agendar Consultoría TI
                    </a>

                    <a href="#servicios" class="btn btn--secondary btn--lg">
                        Explorar Soluciones
                    </a>
                </div>
            </div>

            <!-- Visual Derecho -->
            <div class="hero-visual">
                <div class="hero-circle">
                    <div class="hero-visual-content">
                        <img src="/FiliusIconB.png" alt="Filius icon" class="hero-initials">
                    </div>

                    <!-- Badges flotantes -->
                    <div class="hero-badges">
                        <div class="hero-badge hero-badge-1">
                            <span class="hero-badge-number">50+</span>
                            <span>Proyectos</span>
                        </div>
                        <div class="hero-badge hero-badge-2">
                            <span class="hero-badge-number">100%</span>
                            <span>Satisfacción</span>
                        </div>
                        <div class="hero-badge hero-badge-3">
                            <span class="hero-badge-number">2</span>
                            <span>Ciudades</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Tech Stack Carousel Section -->
        <div class="tech-stack-container">
            <div class="tech-carousel-container">
                <div class="tech-carousel">
                    <div class="tech-carousel-track" id="carouselTrack">
                        <!-- Primera vuelta -->
                        ${TechStackItems()}
                        <!-- DUPLICADO para efecto infinito -->
                        ${TechStackItems()}
                    </div>
                </div>
            </div>
        </div>
    </section>
    `;

    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');
    const fragment = document.createDocumentFragment();
    while (doc.body.firstChild) {
        fragment.appendChild(doc.body.firstChild);
    }
    return fragment;
};

/**
 * Tech Stack Items
 * Items del carousel de tecnologías
 */
const TechStackItems = () => `
    <div class="tech-item">
        <div class="tech-item-inner">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg"
                alt="WordPress" loading="lazy" width="48" height="48">
        </div>
        <span>WordPress</span>
    </div>
    <div class="tech-item">
        <div class="tech-item-inner">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/woocommerce/woocommerce-plain.svg"
                alt="WooCommerce" loading="lazy" width="48" height="48">
        </div>
        <span>WooCommerce</span>
    </div>
    <div class="tech-item">
        <div class="tech-item-inner">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                alt="JavaScript" loading="lazy" width="48" height="48">
        </div>
        <span>JavaScript</span>
    </div>
    <div class="tech-item">
        <div class="tech-item-inner">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                alt="HTML5" loading="lazy" width="48" height="48">
        </div>
        <span>HTML5</span>
    </div>
    <div class="tech-item">
        <div class="tech-item-inner">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                alt="CSS3" loading="lazy" width="48" height="48">
        </div>
        <span>CSS3</span>
    </div>
    <div class="tech-item">
        <div class="tech-item-inner">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
                alt="PHP" loading="lazy" width="48" height="48">
        </div>
        <span>PHP</span>
    </div>
    <div class="tech-item">
        <div class="tech-item-inner">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                alt="MySQL" loading="lazy" width="48" height="48">
        </div>
        <span>MySQL</span>
    </div>
    <div class="tech-item">
        <div class="tech-item-inner">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                alt="React" loading="lazy" width="48" height="48">
        </div>
        <span>React</span>
    </div>
    <div class="tech-item">
        <div class="tech-item-inner">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                alt="Node.js" loading="lazy" width="48" height="48">
        </div>
        <span>Node.js</span>
    </div>
    <div class="tech-item">
        <div class="tech-item-inner">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                alt="Git" loading="lazy" width="48" height="48">
        </div>
        <span>Git</span>
    </div>
`;
