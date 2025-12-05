/**
 * Projects Section Component
 * Sección de proyectos/trabajos
 */

export const ProjectsSection = () => `
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

            <!-- Featured Project -->
            <div class="featured-wrapper">
                <h3 class="featured-label">Proyecto Destacado</h3>

                <article class="featured-project">
                    <div class="project-media">
                        <div class="project-placeholder">
                            <h4>Sistema E-commerce Completo</h4>
                        </div>
                    </div>

                    <div class="project-content">
                        <div class="project-header">
                            <h3 class="project-name">Plataforma E-commerce Escalable</h3>
                            <span class="project-category">Retail & E-commerce</span>
                        </div>

                        <p class="project-description">
                            Desarrollo completo de tienda virtual con integración de pagos, sistema de inventario,
                            gestión de pedidos y optimización SEO. Incluye panel administrativo completo,
                            integración con redes sociales y analytics avanzados para toma de decisiones.
                        </p>

                        <div class="project-tech">
                            <span class="tech-tag">WordPress</span>
                            <span class="tech-tag">WooCommerce</span>
                            <span class="tech-tag">PHP</span>
                            <span class="tech-tag">MySQL</span>
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
