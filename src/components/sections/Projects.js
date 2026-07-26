/**
 * Projects Section Component
 * Sección de proyectos/trabajos
 */

export const ProjectsSection = () => {
    const htmlString = `
    <!-- Work Section -->
    <section class="section work-section" id="work">
        <div class="container">
            <h2 class="section-title">
                <span class="title-line">Nuestros</span>
                <span class="title-emphasis">Proyectos</span>
            </h2>

            <p class="work-intro">
                Hemos colaborado en <strong>50+ proyectos</strong> con empresas PYMES en Colombia,
                ayudándolas a digitalizar sus operaciones y optimizar su infraestructura tecnológica.
            </p>

            <!-- Proyectos -->
            <div class="featured-wrapper">
                <p class="featured-label">Nuestros Casos de Éxito</p>

                <!-- Proyecto 1 -->
                <article class="featured-project" style="margin-bottom: var(--space-8);">
                    <div class="project-media">
                        <div class="project-placeholder">
                            <span class="placeholder-text">Transformación Comercial y E-commerce</span>
                        </div>
                    </div>

                    <div class="project-content">
                        <div class="project-header">
                            <h3 class="project-name">Transformación Comercial y E-commerce (Consumo Masivo)</h3>
                            <span class="project-category">Consumo Masivo</span>
                        </div>

                        <p class="project-description">
                            Ejecución integral para negocio del sector cafetero. Abarcó creación de identidad de marca, diseño de empaques físicos y despliegue de plataforma transaccional.
                        </p>

                        <div class="project-tech">
                            <span class="tech-tag">Branding</span>
                            <span class="tech-tag">E-commerce</span>
                            <span class="tech-tag">UX/UI</span>
                        </div>

                        <div class="project-actions">
                            <a href="#contact" class="project-link">
                                Solicitar Proyecto Similar
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </article>

                <!-- Proyecto 2 -->
                <article class="featured-project" style="margin-bottom: var(--space-8);">
                    <div class="project-media">
                        <div class="project-placeholder">
                            <span class="placeholder-text">Presencia Digital Sector Legal</span>
                        </div>
                    </div>

                    <div class="project-content">
                        <div class="project-header">
                            <h3 class="project-name">Presencia Digital Sector Legal</h3>
                            <span class="project-category">Firma de Abogados</span>
                        </div>

                        <p class="project-description">
                            Diseño y arquitectura web para firma de abogados, proyectando autoridad corporativa mediante una interfaz moderna, semánticamente impecable y orientada a captación B2B.
                        </p>

                        <div class="project-tech">
                            <span class="tech-tag">Arquitectura Web</span>
                            <span class="tech-tag">B2B</span>
                            <span class="tech-tag">SEO</span>
                        </div>

                        <div class="project-actions">
                            <a href="#contact" class="project-link">
                                Solicitar Proyecto Similar
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </article>

                <!-- Proyecto 3 -->
                <article class="featured-project">
                    <div class="project-media">
                        <div class="project-placeholder">
                            <span class="placeholder-text">Aplicaciones Interactivas</span>
                        </div>
                    </div>

                    <div class="project-content">
                        <div class="project-header">
                            <h3 class="project-name">Aplicaciones Interactivas a Medida</h3>
                            <span class="project-category">Desarrollo a Medida</span>
                        </div>

                        <p class="project-description">
                            Desarrollo de sistemas web complejos y simulaciones gráficas de alta fidelidad, demostrando dominio absoluto sobre la manipulación del DOM y rendimiento nativo en el navegador.
                        </p>

                        <div class="project-tech">
                            <span class="tech-tag">Vanilla JS</span>
                            <span class="tech-tag">DOM Avanzado</span>
                            <span class="tech-tag">Performance</span>
                        </div>

                        <div class="project-actions">
                            <a href="#contact" class="project-link">
                                Solicitar Proyecto Similar
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" />
                                </svg>
                            </a>
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
