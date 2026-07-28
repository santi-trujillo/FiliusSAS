/**
 * Testimonials Section Component
 * Sección de testimonios de clientes
 */

export const TestimonialsSection = () => {
    const htmlString = `
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
                            "La transición de nuestro archivo físico a un ecosistema digital seguro en la nube fue impecable. Su soporte técnico y mantenimiento preventivo nos garantiza operar sin interrupciones."
                        </p>
                        <div class="testimonial-author cluster cluster--sm cluster--align-center">
                            <div class="author-avatar">
                                <span>EP</span>
                            </div>
                            <div class="author-info stack stack--xs">
                                <p class="author-name">Elcira Prado</p>
                                <p class="author-role">Abogada | Banco Agrario</p>
                            </div>
                        </div>
                    </div>
                </article>

                <article class="card card--elevated">
                    <div class="card__body stack stack--md">
                        <div class="testimonial-quote-icon">"</div>
                        <p class="testimonial-text">
                            "Asumieron el rescate técnico de nuestra página web desde cero. Reemplazaron una arquitectura obsoleta por una plataforma moderna, rápida y construida con verdaderos estándares de desarrollo."
                        </p>
                        <div class="testimonial-author cluster cluster--sm cluster--align-center">
                            <div class="author-avatar">
                                <span>FS</span>
                            </div>
                            <div class="author-info stack stack--xs">
                                <p class="author-name">Favian Segura</p>
                                <p class="author-role">Ingeniero Civil | VivaSolar Colombia</p>
                            </div>
                        </div>
                    </div>
                </article>

                <article class="card card--elevated">
                    <div class="card__body stack stack--md">
                        <div class="testimonial-quote-icon">"</div>
                        <p class="testimonial-text">
                            "Una visión integral para estructurar negocios en línea. Desde el diseño de la identidad visual hasta el despliegue transaccional, entregan soluciones de alto rendimiento que impulsan las ventas."
                        </p>
                        <div class="testimonial-author cluster cluster--sm cluster--align-center">
                            <div class="author-avatar">
                                <span>CE</span>
                            </div>
                            <div class="author-info stack stack--xs">
                                <p class="author-name">Consultoría E-commerce</p>
                                <p class="author-role">Despliegue integral | Sector Cafetero</p>
                            </div>
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
