/**
 * Projects Section Component
 * Sección de proyectos Open Source en GitHub
 */

export const ProjectsSection = () => `
    <!-- Projects Section -->
    <section class="section work-section" id="work">
        <div class="container">
            <h2 class="section-title">
                <span class="title-line">Nuestros</span>
                <span class="title-emphasis">Proyectos</span>
            </h2>

            <p class="work-intro">
                Código abierto y transparencia. Todos nuestros proyectos están disponibles en 
                <strong>GitHub</strong> para que explores nuestra metodología de desarrollo y 
                calidad de código.
            </p>

            <!-- Projects Grid -->
            <div class="projects-grid">
                <!-- Proyecto 1: VivaSolar -->
                <article class="project-card card card--hover">
                    <div class="project-card__header">
                        <div class="project-card__icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                        </div>
                        <div class="project-card__meta">
                            <h3 class="project-card__title">VivaSolar</h3>
                            <div class="project-card__stats">
                                <span class="project-stat">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
                                    </svg>
                                    ⭐
                                </span>
                                <span class="project-stat">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M5 3c-1.093 0-2 .907-2 2v14c0 1.093.907 2 2 2h6v-2H5V5h14v5h2V5c0-1.093-.907-2-2-2H5zm11.086 6.914L8.5 17.5V19h1.5l7.586-7.586-1.5-1.5z"/>
                                    </svg>
                                    🔄
                                </span>
                                <span class="project-stat project-stat--date">
                                    Proyecto activo
                                </span>
                            </div>
                        </div>
                    </div>

                    <div class="project-card__body">
                        <p class="project-card__description">
                            Plataforma web para soluciones de energía solar. Calculadora de paneles solares, 
                            cotizaciones personalizadas y gestión de proyectos de energía renovable.
                        </p>

                        <div class="project-card__tech">
                            <span class="tech-tag">JavaScript</span>
                            <span class="tech-tag">HTML5</span>
                            <span class="tech-tag">CSS3</span>
                            <span class="tech-tag">Web Design</span>
                        </div>
                    </div>

                    <div class="project-card__footer">
                        <a href="https://github.com/santi-trujillo/Vivasolar" 
                           class="btn btn--primary btn--sm"
                           target="_blank" 
                           rel="noopener noreferrer"
                           aria-label="Ver código de VivaSolar en GitHub">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                            Ver Código
                        </a>
                        <a href="#contact" 
                           class="btn btn--secondary btn--sm"
                           aria-label="Consultar sobre proyecto similar">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke-width="2"/>
                            </svg>
                            Consultar
                        </a>
                    </div>
                </article>

                <!-- Proyecto 2: FiliusFood -->
                <article class="project-card card card--hover">
                    <div class="project-card__header">
                        <div class="project-card__icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                        </div>
                        <div class="project-card__meta">
                            <h3 class="project-card__title">FiliusFood</h3>
                            <div class="project-card__stats">
                                <span class="project-stat">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
                                    </svg>
                                    ⭐
                                </span>
                                <span class="project-stat">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M5 3c-1.093 0-2 .907-2 2v14c0 1.093.907 2 2 2h6v-2H5V5h14v5h2V5c0-1.093-.907-2-2-2H5zm11.086 6.914L8.5 17.5V19h1.5l7.586-7.586-1.5-1.5z"/>
                                    </svg>
                                    🔄
                                </span>
                                <span class="project-stat project-stat--date">
                                    Proyecto activo
                                </span>
                            </div>
                        </div>
                    </div>

                    <div class="project-card__body">
                        <p class="project-card__description">
                            Aplicación web para gestión de restaurantes y servicios de comida. 
                            Sistema de pedidos en línea, menús digitales y administración de inventario.
                        </p>

                        <div class="project-card__tech">
                            <span class="tech-tag">JavaScript</span>
                            <span class="tech-tag">HTML5</span>
                            <span class="tech-tag">CSS3</span>
                            <span class="tech-tag">Food Tech</span>
                        </div>
                    </div>

                    <div class="project-card__footer">
                        <a href="https://github.com/santi-trujillo/Filius-food" 
                           class="btn btn--primary btn--sm"
                           target="_blank" 
                           rel="noopener noreferrer"
                           aria-label="Ver código de FiliusFood en GitHub">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                            Ver Código
                        </a>
                        <a href="#contact" 
                           class="btn btn--secondary btn--sm"
                           aria-label="Consultar sobre proyecto similar">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke-width="2"/>
                            </svg>
                            Consultar
                        </a>
                    </div>
                </article>

                <!-- Proyecto 3: PriceTracker Colombia -->
                <article class="project-card card card--hover">
                    <div class="project-card__header">
                        <div class="project-card__icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                        </div>
                        <div class="project-card__meta">
                            <h3 class="project-card__title">PriceTracker Colombia</h3>
                            <div class="project-card__stats">
                                <span class="project-stat">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
                                    </svg>
                                    ⭐
                                </span>
                                <span class="project-stat">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M5 3c-1.093 0-2 .907-2 2v14c0 1.093.907 2 2 2h6v-2H5V5h14v5h2V5c0-1.093-.907-2-2-2H5zm11.086 6.914L8.5 17.5V19h1.5l7.586-7.586-1.5-1.5z"/>
                                    </svg>
                                    🔄
                                </span>
                                <span class="project-stat project-stat--date">
                                    Proyecto activo
                                </span>
                            </div>
                        </div>
                    </div>

                    <div class="project-card__body">
                        <p class="project-card__description">
                            Sistema de seguimiento de precios para productos en Colombia. Monitorea precios, 
                            historial de cambios, alertas de ofertas y comparación entre tiendas online.
                        </p>

                        <div class="project-card__tech">
                            <span class="tech-tag">JavaScript</span>
                            <span class="tech-tag">Node.js</span>
                            <span class="tech-tag">Web Scraping</span>
                            <span class="tech-tag">API</span>
                        </div>
                    </div>

                    <div class="project-card__footer">
                        <a href="https://github.com/santi-trujillo/PriceTracker-Colombia" 
                           class="btn btn--primary btn--sm"
                           target="_blank" 
                           rel="noopener noreferrer"
                           aria-label="Ver código de PriceTracker Colombia en GitHub">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                            Ver Código
                        </a>
                        <a href="#contact" 
                           class="btn btn--secondary btn--sm"
                           aria-label="Consultar sobre proyecto similar">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke-width="2"/>
                            </svg>
                            Consultar
                        </a>
                    </div>
                </article>
            </div>

            <!-- CTA al final -->
            <div class="projects-cta">
                <p class="projects-cta__text">
                    ¿Tienes un proyecto en mente? Trabajamos con las últimas tecnologías y 
                    mejores prácticas de desarrollo.
                </p>
                <a href="https://wa.me/qr/VX7LGBCRWMU7G1" class="btn btn--primary btn--lg" target="_blank" rel="noopener noreferrer">
                    Solicitar Consultoría Gratuita
                </a>
            </div>
        </div>
    </section>
`;
