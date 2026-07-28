/**
 * Expertise Section Component
 * Sección de servicios
 */

export const ExpertiseSection = () => {
    const htmlString = `
    <!-- Expertise Section -->
    <section class="section expertise-section" id="servicios">
        <div class="container">
            <h2 class="section-title">
                <span class="title-line">Nuestros</span>
                <span class="title-emphasis">Servicios</span>
            </h2>

            <div class="expertise-grid">
                <!-- Servicio 1: Desarrollo Web -->
                <article class="card card--hover card--bordered">
                    <div class="card__body stack stack--md">
                        <div class="expertise-icon">
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2">
                                <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
                            </svg>
                        </div>
                        <h3 class="expertise-title">Arquitectura Front-end y Desarrollo Web</h3>
                        <p class="expertise-description">
                            Construimos interfaces ultrarrápidas, accesibles y optimizadas. Desarrollamos soluciones a la medida y portales corporativos de alta exigencia técnica para firmas legales y corporaciones, garantizando código puro y mantenible.
                        </p>
                        <div class="expertise-tags cluster cluster--sm">
                            <span class="tag">E-commerce</span>
                            <span class="tag">Web Corporativa</span>
                            <span class="tag">SEO</span>
                            <span class="tag">WordPress</span>
                        </div>
                    </div>
                </article>

                <!-- Servicio 2: E-commerce -->
                <article class="card card--hover card--bordered">
                    <div class="card__body stack stack--md">
                        <div class="expertise-icon">
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2">
                                <rect x="2" y="3" width="20" height="14" rx="2" />
                                <path d="M8 21h8M12 17v4" />
                            </svg>
                        </div>
                        <h3 class="expertise-title">E-commerce y Plataformas Transaccionales</h3>
                        <p class="expertise-description">
                            Diseñamos e implementamos tiendas en línea de alta conversión. Estructuramos el ecosistema completo: plantillas premium, pasarelas de pago y optimización UX.
                        </p>
                        <div class="expertise-tags cluster cluster--sm">
                            <span class="tag">Help Desk</span>
                            <span class="tag">Redes</span>
                            <span class="tag">Hardware</span>
                            <span class="tag">Mantenimiento</span>
                        </div>
                    </div>
                </article>

                <!-- Servicio 3: Identidad de Marca -->
                <article class="card card--hover card--bordered">
                    <div class="card__body stack stack--md">
                        <div class="expertise-icon">
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2">
                                <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                            </svg>
                        </div>
                        <h3 class="expertise-title">Identidad de Marca y Empaques</h3>
                        <p class="expertise-description">
                            Creamos universos visuales. Ejecutamos la conceptualización de marcas desde cero, diseño de packaging para productos físicos y alineación estratégica para canales digitales.
                        </p>
                        <div class="expertise-tags cluster cluster--sm">
                            <span class="tag">Scrum Master</span>
                            <span class="tag">Transformación Digital</span>
                            <span class="tag">Estrategia</span>
                            <span class="tag">PM</span>
                        </div>
                    </div>
                </article>

                <!-- Servicio 4: Consultoría TI -->
                <article class="card card--hover card--bordered">
                    <div class="card__body stack stack--md">
                        <div class="expertise-icon">
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M12 8v4" />
                                <path d="M12 16h.01" />
                            </svg>
                        </div>
                        <h3 class="expertise-title">Consultoría TI y Gestión de Proyectos</h3>
                        <p class="expertise-description">
                            Lideramos y auditamos sus iniciativas bajo metodologías ágiles. Evaluamos la calidad del código y gestionamos recursos para asegurar entregas impecables.
                        </p>
                        <div class="expertise-tags cluster cluster--sm">
                            <span class="tag">Consultoría</span>
                            <span class="tag">Gestión TI</span>
                            <span class="tag">Auditoría</span>
                            <span class="tag">Agile</span>
                        </div>
                    </div>
                </article>
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
