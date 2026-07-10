/* ============================================================
   CONSULTORES PB — Base de datos del catálogo
   ------------------------------------------------------------
   Aquí viven las CATEGORÍAS y los PRODUCTOS. Las páginas
   (index, categoria, producto) se dibujan solas a partir de
   estos datos. Para agregar/editar un producto, edita el
   arreglo PB_PRODS de abajo — no hace falta tocar el HTML.
   ============================================================ */

var PB_WA = '50769212056';
var PB_IMGV = '?v=2'; // versión de imágenes (subir al reemplazar fotos para evitar caché)

var PB_CATS = [
  { id: 'consumibles',   n: 'Consumibles e Insumos Industriales', d: 'Granalla, marcadores, discos y abrasivos', img: 'assets/productos/steel-shot-s390.jpg' },
  { id: 'corte',         n: 'Herramientas de Corte y Mecanizado', d: 'Cortadores anulares, brocas, insertos y fresas', img: 'assets/productos/cortadores-anulares.jpg' },
  { id: 'electricas',    n: 'Equipos y Herramientas Eléctricas',  d: 'Taladros magnéticos, amoladoras y polipastos', img: 'assets/productos/taladro-magnetico-hougen.jpg' },
  { id: 'estructurales', n: 'Soluciones Estructurales y Fluidos', d: 'Lubricantes MQL, fibra metálica y electrónica', img: 'assets/productos/fibra-metalica.jpg' }
];

var PB_PRODS = [
  /* ── 1. CONSUMIBLES ────────────────────────────────────── */
  {
    sku: 'GRA-AM', cat: 'consumibles', brand: 'Amasteel', destacado: true, tag: { t: 'Destacado', amber: true },
    name: 'Granalla de Acero Steel Shot',
    img: 'assets/productos/steel-shot-s390.jpg',
    disp: 'En stock (Bolsas / Pallets)',
    summary: 'Abrasivo premium de acero de alta durabilidad para la preparación óptima de superficies y remoción agresiva de óxido.',
    specs: [
      ['Marca', 'Amasteel (Ervin Industries)'],
      ['Modelo / Tamaño', 'Steel Shot'],
      ['Normativas', 'Clasificación exacta bajo normas internacionales SAE J444 y J827'],
      ['Presentación', 'Bolsas de 50 lbs dispuestas en pallets industriales de 35"x35"'],
      ['Capacidad de Despacho', 'Pallets de 2,000 lbs (1 Tonelada corta) para compras por volumen']
    ],
    benefits: [
      ['Costo-Beneficio Insuperable', 'Resistente a múltiples ciclos de impacto continuo reduciendo el consumo de material.'],
      ['Perfil de Anclaje Homogéneo', 'Garantiza una adherencia perfecta para la aplicación posterior de pinturas o recubrimientos industriales.'],
      ['Cuidado del Equipo', 'Calidad certificada que mitiga el desgaste prematuro de las turbinas y boquillas de granallado.']
    ],
    description: 'Diseñada para operaciones críticas de tratamiento superficial en fundiciones, astilleros y talleres de estructuras. Su dureza controlada remueve cascarilla de laminación, óxido y contaminantes difíciles con la máxima rapidez operativa.',
    ficha: 'ficha-steel-shot.pdf'
  },
  {
    sku: 'MK-PM-WH12', cat: 'consumibles', brand: 'Markal',
    name: 'Marcador de Pintura Líquida Industrial – Markal®',
    img: 'assets/productos/markal.jpg',
    disp: 'Cajas de 12 unidades',
    summary: 'Marcadores de pintura líquida real y permanente de secado rápido, ideales para la identificación y codificación de materiales en entornos rudos.',
    specs: [
      ['Marca', 'Markal®'],
      ['Color de Pintura', 'Blanco (Alta visibilidad y contraste)'],
      ['Fórmula Química', 'Pintura líquida permanente libre de xileno para la seguridad del operador'],
      ['Superficies Aptas', 'Metales (oxidados, rugosos, limpios o aceitosos), concreto, madera y goma'],
      ['Resistencia', 'Alta durabilidad ante la intemperie y la degradación por rayos UV']
    ],
    benefits: [
      ['Penetración Eficiente', 'Marca de forma nítida incluso sobre capas delgadas de aceite, grasa o humedad.'],
      ['Punta de Alta Durabilidad', 'Mecanismo de válvula de flujo controlado que dosifica la pintura de manera uniforme sin chorrear.'],
      ['Permanencia Absoluta', 'Las marcas no se borran, desvanecen ni se descascaran durante el traslado logístico.']
    ],
    description: 'El estándar global para la codificación e identificación en talleres de soldadura y habilitado de acero. Facilita trazos precisos de líneas de corte, ensamblaje o números de colada que permanecen visibles bajo las condiciones ambientales más exigentes.',
    ficha: 'ficha-markal.pdf'
  },
  {
    sku: 'WR-DF-FC115', cat: 'consumibles', brand: 'Würth',
    name: 'Discos de Corte y Desbaste Firecut – Würth',
    img: 'assets/productos/discos-corte-wurth.jpg',
    disp: 'En stock',
    summary: 'Discos abrasivos aglomerados de alto desempeño para cortes limpios y molienda segura en metales ferrosos y acero inoxidable.',
    specs: [
      ['Marca', 'Würth'],
      ['Línea', 'Firecut'],
      ['Medidas Disponibles', 'Corte: 115 × 1.0 × 22 mm / Desbaste: 115 × 6.0 × 22 mm y 180 × 3.0 × 22 mm'],
      ['Discos Flap de Acero', 'Diámetro 4 1/2" x 7/8" (115 × 22.23 mm)'],
      ['Accesorios de Limpieza', 'Cepillos de alambre trenzado anudado de 3" y 4 1/2" con eje roscado de 5/8"']
    ],
    benefits: [
      ['Corte Ultra Rápido', 'Espesor optimizado en los discos de corte para menor pérdida de material y mínima rebaba.'],
      ['Seguridad Estructural', 'Mallas de fibra de vidrio de alta resistencia que previenen fracturas del disco a altas RPM.'],
      ['Acabado Profesional', 'Los discos Flap ofrecen un desbaste controlado y pulido uniforme en cordones de soldadura.']
    ],
    description: 'Insumos de alto rendimiento para el trabajo diario con amoladoras en herrería pesada y pailería. Perfectos para remover escoria, limpiar impurezas mediante los cepillos de alambre trenzado y asegurar un acabado limpio y libre de contaminantes en soldaduras de acero.',
    ficha: 'ficha-discos-wurth.pdf'
  },

  /* ── 2. HERRAMIENTAS DE CORTE ──────────────────────────── */
  {
    sku: 'HC-CA-WELDON', cat: 'corte', brand: 'Hougen / Drill America', destacado: true, tag: { t: 'Destacado', amber: true },
    name: 'Cortadores Anulares (Hougen / Drill America)',
    img: 'assets/productos/cortadores-anulares.jpg',
    disp: 'Variedad de diámetros',
    summary: 'Herramientas de corte cilíndrico hueco diseñadas para perforaciones masivas en metales a velocidades muy superiores a las brocas sólidas.',
    specs: [
      ['Marcas', 'Hougen / Drill America'],
      ['Material', 'Acero de Alta Velocidad (HSS) / Dientes con Carburo de Tungsteno (TCT)'],
      ['Zanco / Encastre', 'Tipo Weldon estándar de 3/4" (Universal para taladros magnéticos)'],
      ['Profundidades de Corte', 'Longitudes estándar de alcance de 1", 2" y 3"'],
      ['Geometría', 'Filos alternos rectificados para una expulsión automatizada del núcleo']
    ],
    benefits: [
      ['Ahorro de Tiempo', 'Perforaciones hasta 3 veces más rápidas al cortar únicamente el perímetro del círculo.'],
      ['Menor Esfuerzo Motriz', 'Reduce la carga de torsión y desgaste del motor de tus herramientas eléctricas.'],
      ['Calidad del Barreno', 'Orificios concéntricos perfectos, cilíndricos y libres de rebabas desde el primer pase.']
    ],
    description: 'Ideales para montajes en taladros magnéticos industriales. Su diseño geométrico permite que el núcleo metálico (slug) sea expulsado de manera automática mediante el pin piloto al finalizar la perforación, asegurando ciclos de trabajo continuos.',
    variations: {
      titulo: 'Brocas Anulares — Profundidad 2" · Acero de Alta Velocidad (HSS)',
      cols: ['Diámetro', 'Aplicación principal'],
      rows: [
        ['9/16"', 'Perforaciones en estructuras ligeras'],
        ['11/16"', 'Uso general en carpintería metálica'],
        ['13/16"', 'Talleres mecánicos'],
        ['15/16"', 'Acero estructural'],
        ['1/2"', 'Planchas delgadas'],
        ['5/8"', 'Aplicaciones múltiples'],
        ['3/4"', 'Uso profesional'],
        ['7/8"', 'Perforaciones estándar'],
        ['1"', 'Construcción metálica'],
        ['1-1/16"', 'Instalaciones industriales'],
        ['1-1/8"', 'Carpintería metálica'],
        ['1-1/4"', 'Herrería pesada'],
        ['1-5/16"', 'Industria pesada'],
        ['1-3/8"', 'Construcción estructural'],
        ['1-9/16"', 'Estructuras metálicas complejas'],
        ['1-5/8"', 'Perforaciones de gran diámetro'],
        ['1-3/4"', 'Uso industrial intensivo']
      ]
    },
    ficha: 'ficha-cortadores-anulares.pdf'
  },
  {
    sku: 'DA-BR-INDX', cat: 'corte', brand: 'Drill America',
    name: 'Brocas Industriales Especializadas (Drill America)',
    img: 'assets/productos/brocas-especializadas.jpg',
    disp: 'En catálogo',
    summary: 'Brocas premium para trabajos de alta exigencia, disponibles en diseños de sujeción para alto torque y con sistemas de enfriamiento integrado.',
    specs: [
      ['Marca', 'Drill America'],
      ['Diseños Disponibles', 'Zanco Cono Morse (MT2, MT3, MT4) y Brocas con Canal de Refrigeración Interna'],
      ['Material Base', 'Acero M2 de alta velocidad (HSS) / Aleaciones con Cobalto (M42)'],
      ['Ángulo de Punta', 'Punta Split Point a 135° (Autocentrante de alta penetración)'],
      ['Aplicación', 'Perforación profunda en aceros aleados, inoxidables y fundiciones duras']
    ],
    benefits: [
      ['Sujeción de Alto Torque', 'El cono morse se bloquea mecánicamente en el husillo impidiendo deslizamientos bajo cargas críticas.'],
      ['Refrigeración en la Zona de Fricción', 'Los canales internos dirigen el lubricante o aire al punto exacto de corte.'],
      ['Sin Desvíos', 'La punta autocentrante corta al contacto, eliminando la necesidad de realizar un barreno piloto previo.']
    ],
    description: 'Soluciones de ingeniería para taladros radiales, tornos y centros de mecanizado. Previenen de forma eficiente el endurecimiento por trabajo térmico en los materiales gracias a su excelente disipación del calor.',
    ficha: 'ficha-brocas.pdf'
  },
  {
    sku: 'INS-CB-ISO', cat: 'corte', brand: 'Consultores PB',
    name: 'Insertos de Carburo Intercambiables',
    img: 'assets/productos/insertos.jpg',
    disp: 'Geometrías estándar',
    summary: 'Pastillas indexables de carburo cementado con recubrimientos avanzados para operaciones automatizadas de torneado, fresado y roscado.',
    specs: [
      ['Material', 'Carburo de Tungsteno Micrograno de alta dureza'],
      ['Geometrías Comunes', 'Insertos romboides, triangulares, cuadrados y redondos (CNMG, WNMG, TNMG)'],
      ['Recubrimientos', 'Capas de última generación aplicadas por CVD / PVD (Al2O3, TiCN, TiAlN)'],
      ['Rompevirutas', 'Diseños integrados para el control eficiente de la viruta larga']
    ],
    benefits: [
      ['Alta Rentabilidad', 'Múltiples filos de corte por pastilla; basta con girar el inserto en el portaherramientas para estrenar un filo.'],
      ['Resistencia Térmica', 'Soporta velocidades de corte elevadas y altas temperaturas sin perder estabilidad dimensional.'],
      ['Acabados de Precisión', 'Grados optimizados tanto para el desbaste pesado como para el superacabado liso de piezas.']
    ],
    description: 'Pastillas indexables de carburo cementado con recubrimientos avanzados por CVD/PVD, ideales para operaciones automatizadas de torneado, fresado y roscado en tornos y fresadoras industriales.',
    ficha: 'ficha-insertos.pdf'
  },
  {
    sku: 'HER-FC-ROT', cat: 'corte', brand: 'Consultores PB',
    name: 'Fresas de Carburo de Tungsteno (Limas Rotativas)',
    img: 'assets/productos/fresas-carburo.jpg',
    disp: 'Tipos SB, SF, SC',
    summary: 'Limas rotativas de carburo sólido para motortools, diseñadas para la remoción rápida de material, desbaste de soldaduras y rebabeo estructural.',
    specs: [
      ['Geometrías (Tipos)', 'Tipo SB (Cilíndrica con corte extremo) / Tipo SF (Árbol con punta redondeada) / Tipo SC (Cilíndrica bola)'],
      ['Material', 'Cabeza de Carburo de Tungsteno soldada a zanco de acero templado'],
      ['Tipo de Corte', 'Corte doble (Double Cut / Diamond Cut) para un control superior y virutas pequeñas'],
      ['Diámetro de Zanco', 'Estándar de 1/4" compatible con amoladoras rectas industriales']
    ],
    benefits: [
      ['Remoción Agresiva', 'Su patrón de corte doble corta rápidamente metales duros ferrosos y no ferrosos.'],
      ['Excelente Control', 'Minimiza las vibraciones y los saltos bruscos de la herramienta, protegiendo las manos del operario.'],
      ['Larga Vida Útil', 'El carburo retiene su filo extremo incluso trabajando sobre cordones de soldadura muy duros.']
    ],
    description: 'Limas rotativas de carburo sólido para motortools, diseñadas para la remoción rápida de material, el desbaste de soldaduras y el rebabeo estructural en talleres metalmecánicos.',
    ficha: 'ficha-fresas.pdf'
  },

  /* ── 3. EQUIPOS Y HERRAMIENTAS ELÉCTRICAS ──────────────── */
  {
    sku: 'EQ-TM-PRO', cat: 'electricas', brand: 'Hougen / Nitto Kohki', destacado: true, tag: { t: 'Equipo', amber: true },
    name: 'Taladros Magnéticos Industriales (Hougen / Nitto Kohki)',
    img: 'assets/productos/taladro-magnetico-hougen.jpg',
    disp: 'Bajo catálogo especializado',
    summary: 'Maquinaria de perforación portátil con bases electromagnéticas de alta potencia para fijación estructural segura en campo y talleres de montaje.',
    specs: [
      ['Marcas Disponibles', 'Hougen / Nitto Kohki'],
      ['Operación Logística', 'Unidades portátiles de alta resistencia al torque estructural'],
      ['Sujeción de Seguridad', 'Base electromagnética integrada con sensores de monitoreo de adherencia'],
      ['Enfoque de Operación', 'Optimizado para uso intensivo de cortadores anulares en obras de construcción'],
      ['Alimentación', 'Modelos robustos en configuraciones de 110V y 220V']
    ],
    benefits: [
      ['Estabilidad Inmutable', 'Fuerza magnética extrema que impide desviaciones o roturas de las herramientas de corte.'],
      ['Seguridad Operativa', 'Apagado electrónico automático instantáneo en caso de pérdida de adherencia magnética sobre la viga.'],
      ['Alto Torque Comercial', 'Relación de engranajes optimizada para barrenar grandes espesores de placa sin caídas de RPM.']
    ],
    description: 'Maquinaria de perforación portátil con bases electromagnéticas de alta potencia para fijación estructural segura en campo y talleres de montaje, optimizada para el uso intensivo de cortadores anulares.',
    ficha: 'ficha-taladros-magneticos.pdf'
  },
  {
    sku: 'DW-MT-20X5', cat: 'electricas', brand: 'DeWalt',
    name: 'Amoladora Recta Eléctrica (Motortool) – DeWalt',
    img: 'assets/productos/amoladora-dewalt.jpg',
    disp: 'En catálogo',
    summary: 'Amoladora recta de alta velocidad diseñada para trabajos de molienda y desbaste interno con un motor resistente a jornadas severas.',
    specs: [
      ['Marca', 'DeWalt'],
      ['Modelo base', 'Diseños rectos optimizados (Gama DeWalt 20X5)'],
      ['Potencia del Motor', '4.2 Amperios de alta eficiencia para uso continuo'],
      ['Velocidad de Giro', 'Hasta 25,000 RPM constantes'],
      ['Alimentación Eléctrica', 'Compatibilidad total CA/CC (corriente de red o generadores en campo)'],
      ['Pinza de Sujeción', 'Boquilla de precisión de 1/4" con opción a reductor de 1/8"'],
      ['Capacidad Molienda', 'Apto para ruedas y fresas de molienda de hasta 1-1/2"']
    ],
    benefits: [
      ['Trabajo en Campo Dinámico', 'La versatilidad CA/CC permite conectarlo directo a motogeneradores o máquinas de soldar en obra.'],
      ['Diseño Ergonómico', 'Interruptor tipo paleta con botón de bloqueo que reduce significativamente la fatiga en las manos.'],
      ['Alineación Concéntrica', 'Pinza rectificada que elimina el cabeceo o vibración de las fresas de carburo.']
    ],
    description: 'Amoladora recta de alta velocidad diseñada para trabajos de molienda y desbaste interno, con un motor resistente a jornadas severas y compatibilidad total CA/CC para uso en obra y taller.',
    ficha: 'ficha-amoladora-dewalt.pdf'
  },
  {
    sku: 'EQ-PL-ELEV', cat: 'electricas', brand: 'Consultores PB', tag: { t: 'Equipo', amber: false },
    name: 'Polipastos y Equipos de Elevación',
    img: 'assets/productos/polipastos.jpg',
    disp: 'Capacidades variables bajo pedido',
    summary: 'Sistemas mecánicos y eléctricos robustos de elevación para cargas pesadas, diseñados bajo normativas de seguridad industrial.',
    specs: [
      ['Tipo', 'Sistemas mecánicos y eléctricos de elevación'],
      ['Capacidad', 'Capacidades variables bajo pedido'],
      ['Seguridad', 'Frenos automáticos de seguridad y alta resistencia a la fatiga por cadena o cable'],
      ['Aplicación', 'Optimización de flujos logísticos en talleres metalmecánicos']
    ],
    benefits: [
      ['Levantamiento Suave', 'Operación controlada que protege la carga y al operador durante la maniobra.'],
      ['Frenos de Seguridad', 'Sistemas de frenado automático que aseguran la carga ante cualquier eventualidad.'],
      ['Alta Resistencia', 'Componentes robustos de cadena o cable diseñados para la fatiga del uso industrial continuo.']
    ],
    description: 'Ideales para optimizar los flujos logísticos en talleres metalmecánicos, asegurando un levantamiento suave, frenos automáticos de seguridad y alta resistencia a la fatiga por cadena o cable.',
    ficha: 'ficha-polipastos.pdf'
  },

  /* ── 4. SOLUCIONES ESTRUCTURALES Y FLUIDOS MQL ─────────── */
  {
    sku: 'LUB-AL-LB2000', cat: 'estructurales', brand: 'Accu-Lube', destacado: true, tag: { t: 'Fluidos MQL', amber: true },
    name: 'Lubricante para Equipos de Corte (Accu-Lube LB-2000)',
    img: 'assets/productos/accu-lube-2000.jpg',
    disp: 'Envases de 1 Galón (Jarra)',
    summary: 'Fluido de corte sintético premium 100% biodegradable diseñado para sistemas de Micro-Lubricación (MQL) en el maquinado de aceros.',
    specs: [
      ['Marca', 'Accu-Lube (ITW Pro Brands)'],
      ['Número de Parte', 'LB-2000'],
      ['Origen', 'Fabricado en Estados Unidos (USA)'],
      ['Viscosidad / Inflamación', '37 cSt @ 40°C / Punto de inflamación elevado a 608°F (320°C)'],
      ['Seguridad Ambiental', 'Fluido sintético biodegradable de olor suave, no tóxico y bajo VOC (0.2 g/L)'],
      ['Compatibilidad', 'Especializado en Aceros y operaciones generales/severas de perforación, corte y roscado']
    ],
    benefits: [
      ['Cero Inundaciones', 'Aplica microgotas exactas directo a la herramienta, eliminando las molestas tinas de refrigerante líquido.'],
      ['Piezas Limpias', 'Las piezas terminadas salen prácticamente secas, ahorrando costosos tiempos de lavado posterior.'],
      ['Taller Seguro', 'Cumple con la ley US New Jersey Worker and Community Right-to-Know Act, protegiendo la salud respiratoria del operador.']
    ],
    description: 'Fluido de corte sintético premium 100% biodegradable diseñado para sistemas de Micro-Lubricación (MQL) en el maquinado de aceros, con aplicación de microgotas que elimina las tinas de refrigerante.',
    ficha: 'ficha-accu-lube.pdf'
  },
  {
    sku: 'SP-FM-6060', cat: 'estructurales', brand: 'Spajic',
    name: 'Fibra Metálica Estructural para Concreto – Spajic®',
    img: 'assets/productos/fibra-metalica.jpg',
    disp: 'Pallets de 1,000 kg (Sacos de 20 kg)',
    summary: 'Filamentos de acero trefilado en frío con extremos conformados en gancho para el refuerzo estructural tridimensional de losas y pavimentos de concreto.',
    specs: [
      ['Marca', 'Spajic®'],
      ['Dimensiones Técnicas', 'Diámetro: 1.00 mm (±5%)'],
      ['Resistencia Tracción', '1200 N/mm² (Alambre de alta tenacidad estirado en frío)'],
      ['Sección Transversal', 'Redonda perfecta'],
      ['Certificaciones', 'Sellos de calidad internacional CE y TÜV ISO 9001 Austria'],
      ['Aplicaciones', 'Pisos industriales de alta carga, concreto lanzado (Shotcrete), pistas de aeropuertos y túneles']
    ],
    benefits: [
      ['Sustitución Eficiente', 'Reemplaza parcial o totalmente el armado con varilla tradicional o malla electrosoldada.'],
      ['Refuerzo Multidireccional', 'Se distribuye homogéneamente por toda la matriz de concreto, controlando fisuras por contracción.'],
      ['Ahorro en Obra', 'Se añade directo en la planta de concreto o en el camión mezclador (mixer), reduciendo la mano de obra de armado.']
    ],
    description: 'Instrucción de Mezclado: agregar al final (nunca como primer componente). Mezclar a máxima velocidad por un mínimo de 5 minutos (1 min/m³) para evitar la formación de erizos.',
    ficha: 'ficha-fibra-metalica.pdf'
  },
  {
    sku: 'ELE-IND-GEN', cat: 'estructurales', brand: 'Consultores PB',
    name: 'Componentes y Partes Electrónicas Industriales',
    img: 'assets/productos/componentes-electronicos.jpg',
    disp: 'Suministro directo bajo requerimiento técnico',
    summary: 'Catálogo especializado de refacciones eléctricas, sensores de automatización, contactores, relés y módulos de control industrial.',
    specs: [
      ['Tipo', 'Refacciones eléctricas y de automatización industrial'],
      ['Incluye', 'Sensores, contactores, relés y módulos de control industrial'],
      ['Disponibilidad', 'Suministro directo bajo requerimiento técnico'],
      ['Gestión', 'Importación exprés de marcas o números de parte difíciles de conseguir']
    ],
    benefits: [
      ['Mantenimiento sin Paros', 'Ideales para mantenimiento correctivo y preventivo de maquinaria pesada.'],
      ['Gestión Exprés', 'Localizamos marcas específicas o números de parte difíciles de conseguir localmente.'],
      ['Bajo Pedido', 'Suministro directo adaptado al requerimiento técnico exacto de tu operación.']
    ],
    description: 'Ideales para mantenimiento correctivo y preventivo de maquinaria pesada. Gestionamos de forma exprés marcas específicas o números de partes difíciles de conseguir localmente para evitar paros innecesarios en tus líneas de producción.',
    ficha: null
  }
];

/* ─────────── Utilidades ─────────── */
function pbCatName(id) { for (var i = 0; i < PB_CATS.length; i++) if (PB_CATS[i].id === id) return PB_CATS[i].n; return ''; }
function pbFind(sku) { for (var i = 0; i < PB_PRODS.length; i++) if (PB_PRODS[i].sku === sku) return PB_PRODS[i]; return null; }
function pbEnc(s) { return encodeURIComponent(s); }
function pbCotizarLink(p) { return 'cotizar.html?producto=' + pbEnc(p.name) + '&sku=' + pbEnc(p.sku) + '&img=' + pbEnc(p.img); }
function pbWaLink(p) { return 'https://wa.me/' + PB_WA + '?text=' + pbEnc('Hola, quiero cotizar ' + p.name + ' (SKU ' + p.sku + ').'); }

var PB_CHECK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>';

/* Tarjeta de producto (grillas) */
function pbCard(p) {
  var tag = p.tag ? '<span class="prod-tag ' + (p.tag.amber ? 'amber' : '') + '">' + p.tag.t + '</span>' : '';
  var specs = p.specs.slice(0, 2).map(function (s) { return '<li>' + s[1] + '</li>'; }).join('');
  var link = 'producto.html?sku=' + pbEnc(p.sku);
  return '<article class="prod-card">' +
    '<div class="prod-card-img">' + tag + '<img src="' + p.img + PB_IMGV + '" alt="' + p.name + '" loading="lazy"></div>' +
    '<div class="prod-card-body">' +
      '<span class="prod-brand">' + p.brand + '</span>' +
      '<h3><a href="' + link + '">' + p.name + '</a></h3>' +
      '<p class="prod-sku">SKU: ' + p.sku + '</p>' +
      '<ul class="prod-specs">' + specs + '</ul>' +
      '<div class="prod-card-foot">' +
        '<a href="' + link + '" class="btn btn-ghost">Ver ficha</a>' +
        '<a href="' + pbCotizarLink(p) + '" class="btn btn-amber">Cotizar</a>' +
      '</div>' +
    '</div></article>';
}

/* Tarjeta de categoría */
function pbCatCard(c) {
  return '<a href="categoria.html?cat=' + c.id + '" class="cat-card">' +
    '<div class="cat-card-img"><img src="' + c.img + PB_IMGV + '" alt="' + c.n + '" loading="lazy"></div>' +
    '<div class="cat-card-body"><h3>' + c.n + '</h3><span>' + c.d + '</span>' +
    '<span class="go">Ver productos <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></span></div></a>';
}

/* ─────────── Render por página ─────────── */
function pbRenderIndex() {
  var cats = document.getElementById('pb-cats');
  if (cats) cats.innerHTML = PB_CATS.map(pbCatCard).join('') +
    '<a href="categoria.html" class="cat-card" style="background:var(--amber-soft);border-color:var(--amber)"><div class="cat-card-img" style="display:flex;align-items:center;justify-content:center;background:var(--amber-soft)"><svg viewBox="0 0 24 24" fill="none" stroke="var(--amber-dark)" stroke-width="1.5" width="56" height="56"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg></div><div class="cat-card-body"><h3>Ver todo el catálogo</h3><span>Todos los productos disponibles</span><span class="go">Explorar <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></span></div></a>';

  var dest = document.getElementById('pb-destacados');
  if (dest) {
    var featured = PB_PRODS.filter(function (p) { return p.destacado; });
    if (featured.length < 4) featured = PB_PRODS.slice(0, 4);
    dest.innerHTML = featured.slice(0, 4).map(pbCard).join('');
  }
}

function pbRenderCategoria() {
  var wrap = document.getElementById('pb-listado');
  if (!wrap) return;
  var params = new URLSearchParams(window.location.search);
  var cat = params.get('cat');
  var list = cat ? PB_PRODS.filter(function (p) { return p.cat === cat; }) : PB_PRODS;
  var titulo = cat ? pbCatName(cat) : 'Catálogo de productos';

  var t = document.getElementById('pb-cat-title'); if (t) t.textContent = titulo;
  var c = document.getElementById('pb-cat-count'); if (c) c.textContent = '· ' + list.length + ' producto' + (list.length === 1 ? '' : 's');
  var cr = document.getElementById('pb-cat-crumb'); if (cr) cr.textContent = titulo;
  document.title = titulo + ' — Consultores PB';

  wrap.innerHTML = list.length ? list.map(pbCard).join('') : '<p style="color:var(--muted)">No hay productos en esta categoría.</p>';

  var filtros = document.getElementById('pb-filtros');
  if (filtros) {
    filtros.innerHTML = PB_CATS.map(function (cc) {
      var n = PB_PRODS.filter(function (p) { return p.cat === cc.id; }).length;
      var active = cc.id === cat ? ' style="color:var(--amber-dark);font-weight:700"' : '';
      return '<a class="filter-opt" href="categoria.html?cat=' + cc.id + '"' + active + '>' + cc.n + ' <span class="count">' + n + '</span></a>';
    }).join('') + '<a class="filter-opt" href="categoria.html" style="margin-top:6px;color:var(--navy);font-weight:700">Ver todo el catálogo <span class="count">' + PB_PRODS.length + '</span></a>';
  }
}

function pbRenderProducto() {
  var host = document.getElementById('pb-producto');
  if (!host) return;
  var params = new URLSearchParams(window.location.search);
  var p = pbFind(params.get('sku')) || PB_PRODS[0];

  document.title = p.name + ' — Consultores PB';
  var crumbCat = document.getElementById('pb-crumb-cat');
  if (crumbCat) { crumbCat.textContent = pbCatName(p.cat); crumbCat.href = 'categoria.html?cat=' + p.cat; }
  var crumbName = document.getElementById('pb-crumb-name');
  if (crumbName) crumbName.textContent = p.name;

  var specs = p.specs.map(function (s) { return '<tr><th>' + s[0] + '</th><td>' + s[1] + '</td></tr>'; }).join('');
  var feats = p.benefits.map(function (b) { return '<li>' + PB_CHECK + '<span><strong>' + b[0] + ':</strong> ' + b[1] + '</span></li>'; }).join('');
  var fichaBtn = p.ficha ? '<a href="assets/fichas/' + p.ficha + '" target="_blank" class="btn btn-navy btn-lg"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><polyline points="9 15 12 18 15 15"/></svg>Ficha técnica</a>' : '';

  host.innerHTML =
    '<div class="gallery"><div class="main-img"><img src="' + p.img + PB_IMGV + '" alt="' + p.name + '"></div></div>' +
    '<div class="pd-info">' +
      '<span class="pd-brand">' + p.brand + '</span>' +
      '<h1 class="pd-title">' + p.name + '</h1>' +
      '<div class="pd-meta"><span>SKU: <strong>' + p.sku + '</strong></span><span>Categoría: <strong>' + pbCatName(p.cat) + '</strong></span><span>Disponibilidad: <strong style="color:var(--ok)">' + p.disp + '</strong></span></div>' +
      '<p class="pd-lead">' + p.summary + '</p>' +
      '<table class="spec-table">' + specs + '</table>' +
      '<div class="pd-quote"><p>Este es un sitio informativo. Para precio y disponibilidad, solicita tu cotización — te respondemos a la brevedad.</p><div class="btn-row">' +
        '<a href="' + pbCotizarLink(p) + '" class="btn btn-amber btn-lg"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>Solicitar cotización</a>' +
        '<a href="' + pbWaLink(p) + '" target="_blank" class="btn btn-wa btn-lg"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.7-.8-1.9-.9-.3-.1-.5-.1-.6.1-.2.3-.7.9-.8 1-.2.2-.3.2-.6.1-1.5-.7-2.4-1.3-3.4-3-.3-.5.3-.4.8-1.4.1-.2 0-.3 0-.5-.1-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.8.8-1 1.9-.7 3.2.4 1.5 1.4 2.8 1.5 3 .2.2 2.7 4.1 6.5 5.6 2.4.9 3 .8 3.6.7.7-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.2-.3-.2-.6-.3z"/><path d="M12 2A10 10 0 002 12a10 10 0 001.5 5.2L2 22l4.9-1.3A10 10 0 1012 2zm0 18.2a8.2 8.2 0 01-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1112 20.2z"/></svg>Cotizar por WhatsApp</a>' +
        fichaBtn +
      '</div></div>' +
      '<ul class="pd-feats">' + feats + '</ul>' +
    '</div>';

  /* Descripción + variaciones */
  var sec = document.getElementById('pb-producto-sec');
  if (sec) {
    var tabs = '<button class="pd-tab active" onclick="pbTab(this,\'pane-desc\')">Descripción</button>';
    var panes = '<div class="pd-pane" id="pane-desc"><p style="max-width:820px;color:var(--body)">' + (p.description || p.summary) + '</p></div>';
    if (p.variations) {
      var v = p.variations;
      var head = v.cols.map(function (h) { return '<th>' + h + '</th>'; }).join('');
      var body = v.rows.map(function (r) { return '<tr>' + r.map(function (cell) { return '<td>' + cell + '</td>'; }).join('') + '</tr>'; }).join('');
      tabs += '<button class="pd-tab" onclick="pbTab(this,\'pane-var\')">Variaciones</button>';
      panes += '<div class="pd-pane" id="pane-var" style="display:none">' +
        (v.titulo ? '<p style="color:var(--muted);margin-bottom:14px;font-weight:600">' + v.titulo + '</p>' : '') +
        '<table class="spec-table"><tr>' + head + '</tr>' + body + '</table></div>';
    }
    sec.innerHTML = '<div class="pd-tabs">' + tabs + '</div>' + panes;
  }

  /* Relacionados: misma categoría, otros productos */
  var rel = document.getElementById('pb-related');
  if (rel) {
    var others = PB_PRODS.filter(function (x) { return x.cat === p.cat && x.sku !== p.sku; });
    if (others.length < 4) others = others.concat(PB_PRODS.filter(function (x) { return x.cat !== p.cat && x.sku !== p.sku; }));
    rel.innerHTML = others.slice(0, 4).map(pbCard).join('');
  }
}

document.addEventListener('DOMContentLoaded', function () {
  var page = document.body.getAttribute('data-page');
  if (page === 'index') pbRenderIndex();
  else if (page === 'categoria') pbRenderCategoria();
  else if (page === 'producto') pbRenderProducto();
});
