// cSpell:disable
// Mobile menu toggle
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Close mobile menu after clicking a link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// Language Switcher
const translations = {
  // Hero Section
  "Elevating Charlotte Events with Magic Balloons CLT": "Elevando los Eventos de Charlotte con Magic Balloons CLT",
  "Beautiful balloon decorations, elegant table setups, centerpieces, and event details made with love.": "Decoraciones hermosas de globos, mesas elegantes, centros de mesa y detalles de eventos hechos con amor.",

  // Portfolio Section
  "Magical Moments We've Created": "Momentos Mágicos que Hemos Creado",
  "Real inspiration for birthdays, baby showers, weddings, and special celebrations.": "Inspiración real para cumpleaños, baby showers, bodas y celebraciones especiales.",

  // See More Section
  "See More of Our Work": "Ver Más de Nuestro Trabajo",
  "Want to see more of our magic? Follow us on social media for daily updates and event inspiration!": "¿Quieres ver más de nuestra magia? ¡Síguenos en redes sociales para actualizaciones diarias e inspiración de eventos!",
  "Follow us on Instagram": "Síguenos en Instagram",
  "Like us on Facebook": "Dale like en Facebook",
  "Follow us on TikTok": "Síguenos en TikTok",

  // Services Section
  "Everything You Need for a Magical Event": "Todo lo que Necesitas para un Evento Mágico",
  "DJ": "DJ",
  "Music that brings your celebration to life.": "Música que trae tu celebración a la vida.",
  "Table Linens": "Manteles de Mesa",
  "Elegant linens for a clean, polished look.": "Manteles elegantes para un look limpio y pulido.",
  "Chair Covers": "Fundas para Sillas",
  "Beautiful details for every seat.": "Detalles hermosos para cada asiento.",
  "Table Runners": "Corredores de Mesa",
  "A soft touch of color and style.": "Un toque suave de color y estilo.",
  "Centerpieces": "Centros de Mesa",
  "Eye-catching details for every table.": "Detalles que llaman la atención en cada mesa.",
  "Dinnerware": "Vajilla",
  "Stylish pieces to complete your setup.": "Piezas elegantes para completar tu configuración.",
  "Silverware": "Cubiertos",
  "Shine in every detail.": "Brilla en cada detalle.",
  "Cake": "Pastel",
  "The sweet final touch for your event.": "El toque final dulce para tu evento.",

  // Pricing Section
  "Decoration Packages": "Paquetes de Decoración",
  "Small Decoration": "Decoración Pequeña",
  "$320 – $430": "$320 – $430",
  "Small gatherings": "Pequeñas reuniones",
  "Basic balloon setup": "Configuración básica de globos",
  "Personalized details": "Detalles personalizados",
  "Medium Decoration": "Decoración Mediana",
  "$450 – $570": "$450 – $570",
  "Birthdays & showers": "Cumpleaños y baby showers",
  "Full balloon decoration": "Decoración completa de globos",
  "Custom theme": "Tema personalizado",
  "Large Decoration": "Decoración Grande",
  "$620 and up": "$620 y más",
  "Big events": "Eventos grandes",
  "Premium balloon design": "Diseño premium de globos",
  "Full event styling": "Estilo completo del evento",

  // Reviews Section
  "What Our Clients Say": "Qué Dicen Nuestros Clientes",
  "Amazing work! The balloon setup was beautiful and made our party feel extra special.": "¡Trabajo increíble! La configuración de globos fue hermosa e hizo que nuestra fiesta se sintiera extra especial.",
  "— Emily R.": "— Emily R.",
  "They understood exactly what we wanted. Everything looked elegant, clean, and magical.": "Entendieron exactamente lo que queríamos. Todo se veía elegante, limpio y mágico.",
  "— Jessica M.": "— Jessica M.",

  // Contact Section
  "Let's Plan Your Event": "Planeemos tu Evento",
  "Ready to create something magical? Contact us today.": "¿Listo para crear algo mágico? Contáctanos hoy.",

  // Privacy Policy Page
  "Privacy Policy": "Política de Privacidad",
  "Last Updated: April 28, 2024": "Última Actualización: 28 de abril de 2024",
  "← Back to Home": "← Volver al Inicio",
  "1. Introduction": "1. Introducción",
  "Magic Balloons CLT (\"Company\", \"we\", \"our\", or \"us\") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.": "Magic Balloons CLT (\"Compañía\", \"nosotros\", \"nuestro\") está comprometida a proteger tu privacidad. Esta Política de Privacidad explica cómo recopilamos, usamos, divulgamos y salvaguardamos tu información cuando visitas nuestro sitio web y usas nuestros servicios.",
  "2. Information We Collect": "2. Información que Recopilamos",
  "We may collect personal information from you in various ways, including:": "Podemos recopilar información personal de ti de varias maneras, incluyendo:",
  "Personal Information": "Información Personal",
  "Name and contact information (email, phone number)": "Nombre e información de contacto (correo electrónico, número de teléfono)",
  "Event details and preferences": "Detalles del evento y preferencias",
  "Payment information (processed securely)": "Información de pago (procesada de forma segura)",
  "Communication history": "Historial de comunicación",
  "Automatically Collected Information": "Información Recopilada Automáticamente",
  "When you visit our website, we may automatically collect:": "Cuando visitas nuestro sitio web, podemos recopilar automáticamente:",
  "Browser type and operating system": "Tipo de navegador y sistema operativo",
  "Pages visited and time spent on site": "Páginas visitadas y tiempo pasado en el sitio",
  "IP address and location data": "Dirección IP y datos de ubicación",
  "Cookies and similar tracking technologies": "Cookies y tecnologías de seguimiento similares",
  "3. How We Use Your Information": "3. Cómo Utilizamos Tu Información",
  "We use the information we collect for the following purposes:": "Utilizamos la información que recopilamos para los siguientes propósitos:",
  "Providing and improving our event decoration services": "Proporcionar y mejorar nuestros servicios de decoración de eventos",
  "Processing bookings and payments": "Procesar reservas y pagos",
  "Sending service updates and promotional communications": "Enviar actualizaciones de servicio y comunicaciones promocionales",
  "Responding to your inquiries and customer service requests": "Responder a tus consultas y solicitudes de servicio al cliente",
  "Analyzing usage patterns to improve our website and services": "Analizar patrones de uso para mejorar nuestro sitio web y servicios",
  "Complying with legal obligations": "Cumplir con obligaciones legales",
  "4. Information Sharing and Disclosure": "4. Intercambio y Divulgación de Información",
  "We do not sell, trade, or rent your personal information to third parties. However, we may share information:": "No vendemos, comercializamos ni alquilamos tu información personal a terceros. Sin embargo, podemos compartir información:",
  "With service providers who assist us in operating our website and conducting business": "Con proveedores de servicios que nos ayudan a operar nuestro sitio web y conducir negocios",
  "When required by law or to protect our rights": "Cuando lo requiera la ley o para proteger nuestros derechos",
  "With your consent for specific purposes": "Con tu consentimiento para propósitos específicos",
  "5. Data Security": "5. Seguridad de Datos",
  "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is completely secure.": "Implementamos medidas técnicas y organizativas apropiadas para proteger tu información personal contra acceso no autorizado, alteración, divulgación o destrucción. Sin embargo, ningún método de transmisión por Internet es completamente seguro.",
  "6. Your Rights": "6. Tus Derechos",
  "Depending on your location, you may have the right to:": "Dependiendo de tu ubicación, puedes tener derecho a:",
  "Access your personal information": "Acceder a tu información personal",
  "Correct inaccurate data": "Corregir datos inexactos",
  "Request deletion of your information": "Solicitar la eliminación de tu información",
  "Opt-out of marketing communications": "Optar por no recibir comunicaciones de marketing",
  "Request restriction of processing": "Solicitar restricción del procesamiento",
  "7. Cookies and Tracking Technologies": "7. Cookies y Tecnologías de Seguimiento",
  "Our website may use cookies and similar technologies to enhance your experience. You can control cookie preferences through your browser settings. Disabling cookies may affect website functionality.": "Nuestro sitio web puede usar cookies y tecnologías similares para mejorar tu experiencia. Puedes controlar las preferencias de cookies a través de la configuración de tu navegador. Desactivar cookies puede afectar la funcionalidad del sitio web.",
  "8. Third-Party Links": "8. Enlaces de Terceros",
  "Our website may contain links to third-party websites. We are not responsible for the privacy practices of external sites. We encourage you to review their privacy policies.": "Nuestro sitio web puede contener enlaces a sitios web de terceros. No somos responsables por las prácticas de privacidad de sitios externos. Te recomendamos revisar sus políticas de privacidad.",
  "9. Children's Privacy": "9. Privacidad de los Niños",
  "Our services are not directed to children under 13. We do not knowingly collect personal information from children under 13. If we become aware of such collection, we will take steps to delete this information promptly.": "Nuestros servicios no están dirigidos a niños menores de 13 años. No recopilamos deliberadamente información personal de niños menores de 13 años. Si nos damos cuenta de tal recopilación, tomaremos medidas para eliminar esta información rápidamente.",
  "10. Changes to This Privacy Policy": "10. Cambios en Esta Política de Privacidad",
  "We may update this Privacy Policy periodically. Changes will be effective immediately upon posting to the website. Your continued use of our services constitutes your acceptance of the updated policy.": "Podemos actualizar esta Política de Privacidad periódicamente. Los cambios serán efectivos inmediatamente después de publicarse en el sitio web. Tu uso continuado de nuestros servicios constituye tu aceptación de la política actualizada.",
  "11. Contact Us": "11. Contáctanos",
  "If you have questions about this Privacy Policy or our privacy practices, please contact us:": "Si tienes preguntas sobre esta Política de Privacidad o nuestras prácticas de privacidad, contáctanos:",
  "Magic Balloons CLT": "Magic Balloons CLT",
  "© 2024 Magic Balloons CLT. All Rights Reserved.": "© 2024 Magic Balloons CLT. Todos los Derechos Reservados.",
};

// Language switcher functionality
let currentLanguage = localStorage.getItem('language') || 'en';

function switchLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem('language', lang);

  // Update all elements with data-en and data-es attributes
  document.querySelectorAll('[data-en][data-es]').forEach(element => {
    const text = lang === 'en' ? element.getAttribute('data-en') : element.getAttribute('data-es');
    element.textContent = text;
  });

  // Update language button state
  const langBtn = document.getElementById('languageToggle');
  if (langBtn) {
    langBtn.classList.toggle('active', lang === 'es');
    langBtn.textContent = lang === 'en' ? 'EN / ES' : 'ES / EN';
  }
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
  switchLanguage(currentLanguage);

  // Set up language toggle button click handler
  const languageToggle = document.getElementById('languageToggle');
  if (languageToggle) {
    languageToggle.addEventListener('click', () => {
      const newLang = currentLanguage === 'en' ? 'es' : 'en';
      switchLanguage(newLang);
    });
  }
});
