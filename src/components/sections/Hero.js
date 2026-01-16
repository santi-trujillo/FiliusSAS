/**
 * Hero Section Component
 * Sección principal del sitio
 */

export const HeroSection = () => `
    <!-- Hero Section Completo -->
    <section class="hero" id="home">
        <a id="main-content"></a>
        <div class="hero-container">
            <!-- Contenido Izquierdo -->
            <div class="hero-content stack stack--lg">
                <h1 class="hero-title">
                    <span class="hero-title-name">Filius Tec</span>
                </h1>

                <h2 class="hero-subtitle">
                    <span class="hero-subtitle-highlight">Desarrollo, Soporte</span>
                    y Estrategia Digital
                </h2>

                <p class="hero-description">
                    Somos una consultora de tecnología integral que ayuda a las PYMES
                    a digitalizarse con soluciones web modernas y garantiza su operatividad
                    continua mediante soporte técnico especializado.
                </p>

                <div class="hero-actions cluster cluster--center">
                    <a href="#contact" class="btn btn--primary btn--lg">
                        Solicitar Consultoría
                    </a>

                    <a href="#expertise" class="btn btn--secondary btn--lg">
                        Ver Servicios
                    </a>
                </div>
            </div>

            <!-- Visual Derecho -->
            <div class="hero-visual">
                <div class="hero-circle">
                    <div class="hero-visual-content">
                        <img src="/assets/images/favicon/FiliusIconB.png" alt="Filius icon" class="hero-initials">
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

/**
 * Tech Stack Items
 * Items del carousel de tecnologías
 */
const TechStackItems = () => `
    <div class="tech-item">
        <div class="tech-item-inner">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg"
                alt="WordPress" loading="lazy">
        </div>
        <span>WordPress</span>
    </div>
    <div class="tech-item">
        <div class="tech-item-inner">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/woocommerce/woocommerce-plain.svg"
                alt="WooCommerce" loading="lazy">
        </div>
        <span>WooCommerce</span>
    </div>
    <div class="tech-item">
        <div class="tech-item-inner">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                alt="JavaScript" loading="lazy">
        </div>
        <span>JavaScript</span>
    </div>
    <div class="tech-item">
        <div class="tech-item-inner">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                alt="HTML5" loading="lazy">
        </div>
        <span>HTML5</span>
    </div>
    <div class="tech-item">
        <div class="tech-item-inner">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                alt="CSS3" loading="lazy">
        </div>
        <span>CSS3</span>
    </div>
    <div class="tech-item">
        <div class="tech-item-inner">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
                alt="PHP" loading="lazy">
        </div>
        <span>PHP</span>
    </div>
    <div class="tech-item">
        <div class="tech-item-inner">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                alt="MySQL" loading="lazy">
        </div>
        <span>MySQL</span>
    </div>
    <div class="tech-item">
        <div class="tech-item-inner">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                alt="React" loading="lazy">
        </div>
        <span>React</span>
    </div>
    <div class="tech-item">
        <div class="tech-item-inner">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                alt="Node.js" loading="lazy">
        </div>
        <span>Node.js</span>
    </div>
    <div class="tech-item">
        <div class="tech-item-inner">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                alt="Git" loading="lazy">
        </div>
        <span>Git</span>
    </div>
`;
