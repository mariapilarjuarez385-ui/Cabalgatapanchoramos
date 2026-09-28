/* =========================================================
   CONTENIDO EDITABLE
   Si en algún texto escribís "[COMPLETAR]", se muestra marcado en la web.
   ========================================================= */
window.CONTENT = {

  /* CRONOGRAMA — "time" puede ser una franja (Mañana) o una hora (09:00).
     Si dos pasos seguidos tienen la misma franja, se muestra una sola vez. */
  SCHEDULE: [
    { time: "Mañana",   title: "Llegada",                text: "Jinetes, caballos y familias llegan a Santo Domingo." },
    { time: "Mañana",   title: "Ensillado",              text: "Se preparan los caballos antes de salir." },
    { time: "Mañana",   title: "Acto oficial",           text: "Apertura de la jornada." },
    { time: "Mañana",   title: "Salida",                 text: "La columna de jinetes sale al camino." },
    { time: "Mediodía", title: "Parada para el almuerzo", text: "Descanso en el camino para comer y compartir." },
    { time: "Tarde",    title: "De vuelta a caballo",    text: "Se vuelve a montar para completar el recorrido." },
    { time: "Tarde",    title: "Llegada y recibimiento", text: "La comunidad recibe a los cabalgantes." },
    { time: "Tarde",    title: "Entrega de diplomas",    text: "Cada participante recibe su diploma de la Cabalgata." },
    { time: "Noche",    title: "Vaquillona con cuero",   text: "La cena de la jornada." },
    { time: "Noche",    title: "Fogón",                  text: "Fuego y charla para cerrar el día juntos." }
  ],

  /* RECORRIDO — cuando esté el trazado, cargá MAP_EMBED_URL en config.js */
  ROUTE: [
    { icon: "↝", label: "Antiguos caminos de Monsalvo", text: "La Cabalgata los recrea simbólicamente, como se recorrían antes." },
    { icon: "★", label: "Lugares con historia",         text: "Antiguas estancias rurales y Santo Domingo." },
    { icon: "☀", label: "Parada para almorzar",         text: "A mitad de jornada, antes de volver a montar." },
    { icon: "⌖", label: "Recorrido 2026",               text: "El trazado y el punto de partida se publican próximamente en Instagram." }
  ],

  /* ANTES DE PARTICIPAR */
  BEFORE: [
    { title: "Inscripción",           text: "Se hace online, completando el formulario oficial." },
    { title: "¿No tenés caballo?",    text: "Podés alquilar uno: elegí esa opción al completar el formulario." },
    { title: "Seguridad",             text: "El recorrido cuenta con camionetas de apoyo, ambulancias y seguro de cabalgante." },
    { title: "Comidas",               text: "No están incluidas en la inscripción. Lo que consumas durante la jornada también ayuda a las instituciones de Santo Domingo." },
    { title: "Horarios y encuentro",  text: "Los horarios exactos y el punto de encuentro se comunican por {{INSTAGRAM_HANDLE}} antes del evento." }
  ],

  /* FAQ — "{{...}}" toma el valor de config.js */
  FAQ: [
    { q: "¿Cuándo es la Cabalgata?",                 a: "El {{EVENT_DATE_LABEL}}." },
    { q: "¿Dónde se realiza?",                       a: "En {{EVENT_LOCATION}}, partido de {{EVENT_PARTIDO}}, provincia de Buenos Aires." },
    { q: "¿Cómo puedo participar?",                  a: "Inscribiéndote en el formulario oficial. Pueden participar jinetes con caballo propio o alquilado." },
    { q: "¿Dónde me inscribo?",                      a: "En el formulario oficial: tocá cualquier botón «Inscribite» de esta página." },
    { q: "No tengo caballo, ¿puedo ir igual?",       a: "Sí. Podés alquilar uno eligiendo esa opción en el formulario de inscripción." },
    { q: "¿Hay asistencia durante el recorrido?",    a: "Sí. La Cabalgata va acompañada por camionetas de apoyo y ambulancias." },
    { q: "¿Tengo seguro?",                           a: "Sí, cada participante cuenta con seguro de cabalgante." },
    { q: "¿Las comidas están incluidas?",            a: "No, las comidas no están incluidas en la inscripción y se abonan aparte durante la jornada." },
    { q: "¿Qué debo llevar?",                        a: "Tu caballo ensillado (o alquilalo desde el formulario) y dinero para las comidas. Las recomendaciones de cada edición se publican en {{INSTAGRAM_HANDLE}}." },
    { q: "¿A dónde va lo recaudado?",                a: "Parte de lo recaudado se destina a {{BENEFICIARIES}}." },
    { q: "¿Dónde puedo consultar el cronograma?",    a: "En la sección Cronograma de esta página. Los horarios exactos se publican en {{INSTAGRAM_HANDLE}} antes del evento." },
    { q: "¿Dónde puedo consultar el recorrido?",     a: "En la sección Recorrido. El trazado 2026 se publica próximamente." },
    { q: "¿Dónde puedo hacer consultas?",            a: "Escribinos a {{EMAIL}} o por Instagram a {{INSTAGRAM_HANDLE}}." }
  ],

  /* GALERÍA — tags: cabalgata, caballos, campo, comunidad, familias, anteriores */
  GALLERY_FILTERS: [
    { id: "todas",      label: "Todas" },
    { id: "cabalgata",  label: "Cabalgata" },
    { id: "caballos",   label: "Caballos" },
    { id: "campo",      label: "Campo" },
    { id: "comunidad",  label: "Comunidad" },
    { id: "familias",   label: "Familias" },
    { id: "anteriores", label: "Ediciones anteriores" }
  ],
  GALLERY: [
    { img: "g-atardecer",     alt: "Jinetes a caballo por un camino de tierra al atardecer", tags: ["cabalgata","caballos"] },
    { img: "g-agua",          alt: "Grupo de jinetes cruzando un bañado", tags: ["cabalgata","campo"] },
    { img: "g-familia",       alt: "Familia sonriendo junto a un caballo y un carruaje", tags: ["familias","comunidad"] },
    { img: "g-agua-3",        alt: "Dos jinetes con sombrero dentro del agua, de espaldas", tags: ["caballos","campo"] },
    { img: "g-carruajes",     alt: "Carruajes y jinetes reunidos antes de la salida", tags: ["cabalgata","comunidad"] },
    { img: "g-jinete-laguna", alt: "Jinete a caballo junto a una laguna", tags: ["caballos","campo"] },
    { img: "g-amigas",        alt: "Amigas posando junto a un caballo", tags: ["comunidad","familias"] },
    { img: "g-fila",          alt: "Fila de jinetes avanzando junto a un alambrado", tags: ["cabalgata","caballos"] },
    { img: "g-fuego",         alt: "Fuego encendido para el asado", tags: ["comunidad"] },
    { img: "g-sulky",         alt: "Sulky y jinetes por el campo", tags: ["cabalgata","campo"] },
    { img: "g-chicos",        alt: "Jinetes jóvenes a caballo en el campo", tags: ["familias","caballos"] },
    { img: "g-caballo-blanco",alt: "Jinete sobre un caballo blanco entre los árboles", tags: ["caballos"] },
    { img: "g-llegada",       alt: "Jinetes pasando bajo un arco de bienvenida", tags: ["cabalgata","comunidad"] },
    { img: "g-tropilla",      alt: "Caballos ensillados descansando en el campo", tags: ["caballos","campo"] },
    { img: "g-pareja",        alt: "Pareja con sombreros sonriendo", tags: ["familias","comunidad"] },
    { img: "g-agua-2",        alt: "Jinetes cruzando un bañado con juncos", tags: ["caballos","campo"] },
    { img: "g-carruaje-rojo", alt: "Carruaje rojo tirado por un caballo", tags: ["campo","cabalgata"] },
    { img: "g-asado",         alt: "Asado a la cruz", tags: ["comunidad"] },
    { img: "g-galope",        alt: "Caballos al trote entre los árboles", tags: ["caballos"] },
    { img: "g-boina",         alt: "Jinete con boina colorada", tags: ["comunidad"] },
    { img: "g-ensillando",    alt: "Joven junto a su caballo ensillado", tags: ["caballos","familias"] },
    { img: "g-carretas",      alt: "Carruajes antiguos acompañando a los jinetes", tags: ["cabalgata"] },
    { img: "g-atardecer-2",   alt: "Jinetes por un camino rural con luz de atardecer", tags: ["cabalgata"] },
    { img: "g-jinetes",       alt: "Jinetes avanzando por el campo", tags: ["cabalgata","campo"] },
    { img: "g-caballos-campo",alt: "Caballos en el horizonte de la llanura", tags: ["caballos","campo"] },
    { img: "g-tropa",         alt: "Grupo numeroso de jinetes en el campo", tags: ["cabalgata"] },
    { img: "g-rienda",        alt: "Jinetes llevando caballos de tiro", tags: ["caballos"] },
    { img: "g-campo",         alt: "Jinetes a lo lejos en el paisaje abierto", tags: ["campo"] }
  ],

  /* INSTAGRAM — grilla visual. Reemplazá por publicaciones reales (img + link al post). */
  INSTAGRAM_GRID: [
    { img: "g-agua-3",  link: "" },
    { img: "g-familia", link: "" },
    { img: "g-atardecer", link: "" },
    { img: "g-carruajes", link: "" },
    { img: "g-fuego",   link: "" },
    { img: "g-chicos",  link: "" }
  ]
};
