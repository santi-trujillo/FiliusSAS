/**
 * Header Component
 * Componente del header con navegación
 */

import { LanguageSwitcherTemplate } from "./LanguageSwitcher.js";

export const Header = () => `
    <!-- Skip to main content (Accessibility) -->
    <a href="#main-content" class="skip-to-content">Saltar al contenido principal</a>

    <!-- Header con Menú Centrado -->
    <header class="header">
        <nav class="nav">
            <!-- Logo con imagen -->
            <a href="#home" class="nav-logo">
                <img src="/FiliusB.png" alt="Filius Logo" class="logo-image logo-dark" loading="eager" decoding="async">
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
                    <a href="#experience" class="nav-link">
                        <span class="nav-number">04</span>
                        <span class="nav-separator">/</span>
                        <span>Experiencia</span>
                    </a>
                </li>

                <li class="nav-item">
                    <a href="#contact" class="nav-link">
                        <span class="nav-number">05</span>
                        <span class="nav-separator">/</span>
                        <span>Contacto</span>
                    </a>
                </li>
            </ul>

            <!-- Language Switcher -->
            ${LanguageSwitcherTemplate()}

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
                <a href="#experience" class="mobile-nav-link">
                    <span class="mobile-nav-number">04</span>
                    <span>Experiencia</span>
                </a>
            </li>
            <li>
                <a href="#contact" class="mobile-nav-link">
                    <span class="mobile-nav-number">05</span>
                    <span>Contacto</span>
                </a>
            </li>
        </ul>
    </div>
`;
