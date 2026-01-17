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
                            Necesitaba digitalizar décadas de archivos físicos de mi trabajo legal sin gastar 
                            una fortuna. Filius no solo creó un sistema de organización en la nube perfecto 
                            para mis necesidades, sino que me capacitó para manejarlo. Hoy ahorro tiempo y 
                            dinero, y tengo todo mi archivo al alcance de un clic.
                        </p>
                        <div class="testimonial-author cluster cluster--sm cluster--align-center">
                            <div class="author-avatar">
                                <span>EP</span>
                            </div>
                            <div class="author-info stack stack--xs">
                                <p class="author-name">Elcira Prado</p>
                                <p class="author-role">Abogada Independiente</p>
                            </div>
                        </div>
                    </div>
                </article>

                <article class="card card--elevated">
                    <div class="card__body stack stack--md">
                        <div class="testimonial-quote-icon">"</div>
                        <p class="testimonial-text">
                            Como diseñador 3D necesito que mis equipos funcionen al máximo rendimiento. 
                            Filius me brinda mantenimiento preventivo, instalación de software especializado 
                            y excelente asesoría para actualizar hardware. Es mi soporte técnico de confianza.
                        </p>
                        <div class="testimonial-author cluster cluster--sm cluster--align-center">
                            <div class="author-avatar">
                                <span>GR</span>
                            </div>
                            <div class="author-info stack stack--xs">
                                <p class="author-name">Gabriel Reyes</p>
                                <p class="author-role">Diseñador 3D Independiente</p>
                            </div>
                        </div>
                    </div>
                </article>

                <article class="card card--elevated">
                    <div class="card__body stack stack--md">
                        <div class="testimonial-quote-icon">"</div>
                        <p class="testimonial-text">
                            Nuestra página web anterior no nos representaba. Filius tomó toda nuestra 
                            información y creó VivaSolar desde cero: moderna, profesional y exactamente 
                            lo que necesitábamos. El resultado superó nuestras expectativas.
                        </p>
                        <div class="testimonial-author cluster cluster--sm cluster--align-center">
                            <div class="author-avatar">
                                <span>FS</span>
                            </div>
                            <div class="author-info stack stack--xs">
                                <p class="author-name">Favian Segura</p>
                                <p class="author-role">Ingeniero Civil | VivaSolar</p>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </section>
`;
