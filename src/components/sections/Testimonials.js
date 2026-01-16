/**
 * Testimonials Section Component
 * Sección de testimonios de clientes
 */

export const TestimonialsSection = () => `
    <!-- Testimonials Section -->
    <section class="section testimonials-section">
        <div class="container">
            <h2 class="section-title">
                <span class="title-line">Lo que dicen</span>
                <span class="title-emphasis">Nuestros Clientes</span>
            </h2>

            <div class="testimonials-grid">
                <article class="card card--elevated">
                    <div class="card__body stack stack--md">
                        <div class="testimonial-quote-icon">"</div>
                        <p class="testimonial-text">
                            Filius transformó completamente nuestra presencia digital. El equipo es profesional,
                            responsivo y entrega resultados de alta calidad. Altamente recomendados.
                        </p>
                        <div class="testimonial-author cluster cluster--sm cluster--align-center">
                            <div class="author-avatar">
                                <span>JM</span>
                            </div>
                            <div class="author-info stack stack--xs">
                                <p class="author-name">Juan Martínez</p>
                                <p class="author-role">Gerente General | Empresa Retail</p>
                            </div>
                        </div>
                    </div>
                </article>

                <article class="card card--elevated">
                    <div class="card__body stack stack--md">
                        <div class="testimonial-quote-icon">"</div>
                        <p class="testimonial-text">
                            El soporte técnico de Filius es excepcional. Responden rápido y solucionan
                            cualquier problema de manera eficiente. Nuestros sistemas nunca han estado mejor.
                        </p>
                        <div class="testimonial-author cluster cluster--sm cluster--align-center">
                            <div class="author-avatar">
                                <span>MR</span>
                            </div>
                            <div class="author-info stack stack--xs">
                                <p class="author-name">María Rodríguez</p>
                                <p class="author-role">Directora TI | Compañía Servicios</p>
                            </div>
                        </div>
                    </div>
                </article>

                <article class="card card--elevated">
                    <div class="card__body stack stack--md">
                        <div class="testimonial-quote-icon">"</div>
                        <p class="testimonial-text">
                            Trabajar con Filius fue una excelente decisión. Su enfoque en entender nuestras
                            necesidades y proponer soluciones reales nos ayudó a crecer digitalmente.
                        </p>
                        <div class="testimonial-author cluster cluster--sm cluster--align-center">
                            <div class="author-avatar">
                                <span>CP</span>
                            </div>
                            <div class="author-info stack stack--xs">
                                <p class="author-name">Carlos Pérez</p>
                                <p class="author-role">Fundador | Startup Tech</p>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </section>
`;
