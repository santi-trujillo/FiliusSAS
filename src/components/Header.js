/**
 * Header Component
 * Componente del header con navegación refactorizado a nodos del DOM reales
 */

export const Header = () => {
    const htmlString = `
    <!-- Header con Menú Centrado -->
    <header class="header">
        <nav class="nav">
            <!-- Logo con imagen -->
            <a href="#home" class="nav-logo">
                <img src="/assets/images/logos/FiliusB.png" alt="Filius Logo" class="logo-image logo-dark" width="150" height="50">
            </a>

            <!-- Navegación Centrada con Números -->
            <ul class="nav-links">
                <li class="nav-item">
                    <a href="#home" class="nav-link active" aria-current="page">
                        <span class="nav-number">01</span>
                        <span class="nav-separator">/</span>
                        <span>Inicio</span>
                    </a>
                </li>

                <li class="nav-item">
                    <a href="#expertise" class="nav-link">
                        <span class="nav-number">02</span>
                        <span class="nav-separator">/</span>
                        <span>Servicios</span>
                    </a>
                </li>

                <li class="nav-item">
                    <a href="#work" class="nav-link">
                        <span class="nav-number">03</span>
                        <span class="nav-separator">/</span>
                        <span>Nuestro Trabajo</span>
                    </a>
                </li>

                <li class="nav-item">
                    <a href="#contact" class="nav-link">
                        <span class="nav-number">04</span>
                        <span class="nav-separator">/</span>
                        <span>Contacto</span>
                    </a>
                </li>
            </ul>

            <!-- Botón Hamburguesa (móvil) -->
            <button class="menu-toggle" aria-label="Toggle menu" aria-expanded="false">
                <span class="menu-toggle-line"></span>
                <span class="menu-toggle-line"></span>
                <span class="menu-toggle-line"></span>
            </button>
        </nav>

        <!-- Barra de progreso de scroll -->
        <div class="scroll-progress"></div>
    </header>

    <!-- Overlay del menú -->
    <div class="menu-overlay"></div>

    <!-- Menú Móvil -->
    <div class="mobile-menu">
        <ul class="mobile-nav-links">
            <li>
                <a href="#home" class="mobile-nav-link">
                    <span class="mobile-nav-number">01</span>
                    <span>Inicio</span>
                </a>
            </li>
            <li>
                <a href="#expertise" class="mobile-nav-link">
                    <span class="mobile-nav-number">02</span>
                    <span>Servicios</span>
                </a>
            </li>
            <li>
                <a href="#work" class="mobile-nav-link">
                    <span class="mobile-nav-number">03</span>
                    <span>Nuestro Trabajo</span>
                </a>
            </li>
            <li>
                <a href="#contact" class="mobile-nav-link">
                    <span class="mobile-nav-number">04</span>
                    <span>Contacto</span>
                </a>
            </li>
        </ul>
    </div>
    `;

    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');
    const fragment = document.createDocumentFragment();
    while (doc.body.firstChild) {
        fragment.appendChild(doc.body.firstChild);
    }
    return fragment;
};
