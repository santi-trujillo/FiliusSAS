/**
 * Expertise Section Component
 * Sección de servicios
 */

export const ExpertiseSection = () => `
    <!-- Expertise Section -->
    <section class="section expertise-section" id="expertise">
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
                        <h3 class="expertise-title">Desarrollo Web & E-commerce</h3>
                        <p class="expertise-description">
                            Creamos tiendas virtuales escalables, páginas corporativas y plataformas web
                            modernas con optimización SEO. Desde landing pages hasta sistemas complejos.
                        </p>
                        <div class="expertise-tags cluster cluster--sm">
                            <span class="tag">E-commerce</span>
                            <span class="tag">Web Corporativa</span>
                            <span class="tag">SEO</span>
                            <span class="tag">WordPress</span>
                        </div>
                    </div>
                </article>

                <!-- Servicio 2: Soporte Técnico -->
                <article class="card card--hover card--bordered">
                    <div class="card__body stack stack--md">
                        <div class="expertise-icon">
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2">
                                <rect x="2" y="3" width="20" height="14" rx="2" />
                                <path d="M8 21h8M12 17v4" />
                            </svg>
                        </div>
                        <h3 class="expertise-title">Soporte Técnico e Infraestructura TI</h3>
                        <p class="expertise-description">
                            Mantenimiento de hardware, configuración de redes, help desk empresarial
                            y gestión de infraestructura. Garantizamos la operatividad continua de tu empresa.
                        </p>
                        <div class="expertise-tags cluster cluster--sm">
                            <span class="tag">Help Desk</span>
                            <span class="tag">Redes</span>
                            <span class="tag">Hardware</span>
                            <span class="tag">Mantenimiento</span>
                        </div>
                    </div>
                </article>

                <!-- Servicio 3: Consultoría -->
                <article class="card card--hover card--bordered">
                    <div class="card__body stack stack--md">
                        <div class="expertise-icon">
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2">
                                <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                            </svg>
                        </div>
                        <h3 class="expertise-title">Consultoría & Gestión de Proyectos</h3>
                        <p class="expertise-description">
                            Transformación digital, liderazgo ágil con metodología Scrum, estrategias
                            de marca digital y gestión profesional de proyectos tecnológicos.
                        </p>
                        <div class="expertise-tags cluster cluster--sm">
                            <span class="tag">Scrum Master</span>
                            <span class="tag">Transformación Digital</span>
                            <span class="tag">Estrategia</span>
                            <span class="tag">PM</span>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </section>
`;
