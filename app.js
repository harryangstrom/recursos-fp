/* ==========================================================================
   Resources Directory SPA - Option 1 Application Logic
   Vanilla ES6 JavaScript Module with Direct Runtime Markdown Fetching & In-Browser Parsing
   ========================================================================== */

const DEFAULT_MARKDOWN_ES = `# Directorio de Recursos Online Gratuitos para Formadores

## Taxonomía de Áreas de Aplicación
| Código de Categoría | Área de Aplicación | Descripción |
| --- | --- | --- |
| AIA | Asistencia IA y Planificación de Clases | Motores de IA y generadores de prompts para programación didáctica, rúbricas y adaptación de contenidos. |
| CWS | Espacios de Trabajo Colaborativo | Pizarras digitales, lienzos infinitos y entornos de colaboración en tiempo real para el aprendizaje activo. |
| DEV | Desarrollo de Software y Herramientas Dev | Alojamiento de código, asistentes de IA para código, pruebas de API y entornos para desarrollo de software. |
| FIB | Repositorios Multimedia y Banco de Imágenes | Bancos de imágenes libres de derechos, ilustraciones, vectores, iconos, audio y vídeo para material didáctico. |
| IAG | Evaluación Interactiva y Gamificación | Generadores de cuestionarios, votaciones en directo y herramientas de aprendizaje basado en juegos. |
| IDC | Diseño Instruccional y Creación de Contenidos | Creadores de presentaciones, mapas mentales, diagramación y diseño de contenidos multimedia. |
| LMS | Gestión de Aula y Aprendizaje | Plataformas para la impartición de cursos, gestión de tareas y seguimiento del progreso del alumnado. |
| OER | Recursos Educativos Abiertos y Repositorios | Bibliotecas de libros de texto abiertos, planes de clase, cursos y recursos didácticos de acceso libre. |
| REG | Regulación de FP y Catálogos Oficiales | Portales oficiales estatales y autonómicos sobre normativa de FP, catálogos de especialidades y registros. |
| SEC | Cálculo y Diseño de Energía Solar | Software y herramientas web para simulación fotovoltaica, dimensionado solar térmico y viabilidad renovable. |
| TOU | Turismo, Hostelería y Gestión de Destinos | Estadísticas oficiales, inteligencia de mercado, portales de distribución de viajes y gestión de destinos. |
| TST | Herramientas de Simulación Técnica y Taller | Software especializado en CAD, EDA, impresión 3D, simulación de circuitos y cálculos reglamentarios. |

## Tabla del Directorio de Recursos

| Área de Aplicación | Nombre | Descripción | Ejemplo de Uso Práctico | Dificultad | URL |
| --- | --- | --- | --- | --- | --- |
| AIA | Claude (Anthropic) | Asistente de IA avanzado con gran capacidad de razonamiento y amplia ventana de contexto. | Analizar el BOE de un certificado de profesionalidad para extraer resultados de aprendizaje. | Fácil | https://claude.ai |
| AIA | ChatGPT (OpenAI) | Modelo de IA conversacional para redactar planes de clase, casos prácticos y cuestionarios. | Generar 10 preguntas de diagnóstico con explicación paso a paso para un taller técnico. | Fácil | https://chatgpt.com |
| AIA | Diffit | Genera lecturas adaptadas, resúmenes y hojas de trabajo graduadas por niveles. | Adaptar un texto técnico complejo a tres niveles de lectura para un grupo heterogéneo. | Fácil | https://web.diffit.me |
| AIA | Google Gemini | Asistente de IA multimodal capaz de analizar texto, imágenes, código y PDFs. | Subir la ficha técnica en PDF de un componente y generar una hoja de práctica de laboratorio. | Fácil | https://gemini.google.com |
| AIA | MagicSchool AI | Plataforma de IA diseñada para docentes para crear rúbricas, exámenes y unidades. | Crear una rúbrica analítica de 4 niveles para evaluar una práctica de montaje de taller. | Fácil | https://www.magicschool.ai |
| AIA | Microsoft Copilot | Asistente de IA integrado con búsqueda web y Microsoft 365 para resúmenes y diapositivas. | Resumir artículos de actualidad tecnológica en una ficha de debate para clase. | Fácil | https://copilot.microsoft.com |
| AIA | Perplexity AI | Motor de búsqueda conversacional que aporta fuentes y citas web en tiempo real. | Buscar normativas industriales actualizadas y especificaciones de hardware para las diapositivas. | Fácil | https://www.perplexity.ai |
| CWS | AnswerGarden | Plataforma minimalista de lluvia de ideas instantánea mediante nubes de palabras. | Recoger conocimientos previos de los alumnos sobre un tema con una sola pregunta abierta. | Fácil | https://answergarden.ch |
| CWS | FigJam | Pizarra blanca colaborativa para lluvia de ideas, diagramas y dinámicas ágiles. | Realizar una retrospectiva de proyecto de curso con notas adhesivas y votaciones. | Media | https://www.figma.com/figjam |
| CWS | Miro | Lienzo visual infinito para colaboración en tiempo real, mapas conceptuales y diagramas. | Desarrollar una sesión de lluvia de ideas sobre arquitectura de un sistema con notas adhesivas. | Media | https://miro.com |
| CWS | Padlet | Muro digital para compartir notas multimedia, archivos y aportaciones del alumnado. | Crear un muro donde los alumnos publican enlaces e imágenes de sus montajes de prácticas. | Fácil | https://padlet.com |
| DEV | Docker Hub | Registro global de imágenes de contenedores para despliegue de aplicaciones. | Obtener contenedores preconfigurados de bases de datos o servidores para laboratorios. | Media | https://hub.docker.com |
| DEV | GitHub | Plataforma de alojamiento de código para control de versiones y trabajo colaborativo con Git. | Alojar los repositorios de código de los alumnos y evaluar sus entregas de proyectos. | Media | https://github.com |
| DEV | Google Antigravity | Plataforma asistida por IA para arquitectura de software y herramientas de desarrollo. | Mostrar arquitecturas modernas en la nube y diseño de software en clases de programación. | Media | https://antigravity.google |
| DEV | Postman | Plataforma para construir, probar y documentar APIs REST y GraphQL. | Enseñar peticiones HTTP (GET, POST) y respuesta JSON en prácticas de desarrollo web. | Media | https://www.postman.com |
| DEV | Stack Overflow | Comunidad global de desarrolladores para resolución de dudas técnicas y programación. | Enseñar al alumnado a diagnosticar errores de código y consultar documentación técnica. | Fácil | https://stackoverflow.com |
| DEV | Visual Studio Code | Editor de código ligero y de código abierto con un amplio ecosistema de extensiones. | Configurar un IDE unificado para clases de programación en C, Python, HTML o ESP-IDF. | Fácil | https://code.visualstudio.com |
| FIB | Bensound | Biblioteca de música libre de derechos clasificada por estilo y estado de ánimo. | Descargar música corporativa de fondo para diapositivas narradas o vídeos educativos. | Fácil | https://www.bensound.com |
| FIB | Coverr | Colección de vídeos de stock gratuitos en HD y 4K sin marcas de agua. | Descargar fondos de vídeo de alta calidad para la diapositiva de portada del curso. | Fácil | https://coverr.co |
| FIB | Free Music Archive (FMA) | Biblioteca seleccionada de música instrumental con licencias Creative Commons. | Buscar música instrumental para proyectos multimedia o podcasts creados por alumnos. | Fácil | https://freemusicarchive.org |
| FIB | Freesound | Base de datos colaborativa de efectos de sonido y fragmentos de audio bajo Creative Commons. | Descargar ruidos de maquinaria industrial o efectos de alarma para módulos e-learning. | Fácil | https://freesound.org |
| FIB | Mixkit | Vídeos de stock, canciones, efectos de sonido y plantillas de vídeo gratuitas. | Descargar clips de vídeo HD para enriquecer las diapositivas de inicio de unidad didáctica. | Fácil | https://mixkit.co |
| FIB | Openverse | Motor de búsqueda de medios con licencia CC en repositorios públicos. | Encontrar fotos históricas y diagramas científicos abiertos para las presentaciones. | Fácil | https://openverse.org |
| FIB | Pexels | Fotografías y vídeos de stock de alta resolución con licencia gratuita. | Buscar imágenes técnicas (paneles solares, servidores, talleres) para las presentaciones. | Fácil | https://www.pexels.com |
| FIB | Pixabay | Gran colección de fotos, ilustraciones vectoriales, gráficos y música libre de derechos. | Obtener gráficos vectoriales para fichas de actividades y logotipos de cursos. | Fácil | https://pixabay.com |
| FIB | SVGRepo | Repositorio de vectores e iconos SVG gratuitos para uso comercial. | Descargar iconos vectoriales limpios para esquemas de arquitectura técnica. | Fácil | https://www.svgrepo.com |
| FIB | The Noun Project | Más de 5 millones de iconos minimalistas y símbolos visuales gratuitos. | Descargar iconos técnicos (sensores, relés, microcontroladores) para esquemas propios. | Fácil | https://thenounproject.com |
| FIB | Unsplash | Banco de imágenes de alta resolución creadas por una comunidad global de fotógrafos. | Obtener imágenes de portada impactantes para la plataforma del curso y presentaciones. | Fácil | https://unsplash.com |
| FIB | Wikimedia Commons | Base de datos de más de 100 millones de archivos multimedia de uso libre. | Ilustrar conceptos históricos de la electricidad o física con esquemas científicos originales. | Media | https://commons.wikimedia.org |
| IAG | Baamboozle | Plataforma de juegos educativos que solo requiere una pantalla para toda la clase. | Realizar un juego rápido de preguntas de repaso de 5 minutos al inicio de la sesión. | Fácil | https://www.baamboozle.com |
| IAG | Blooket | Juegos de repaso basados en acción con múltiples modos de juego interactivos. | Transformar un cuestionario en un juego de defensa de torres para repasar un examen. | Fácil | https://www.blooket.com |
| IAG | Kahoot! | Plataforma de aprendizaje basada en juegos para cuestionarios interactivos en directo. | Realizar una evaluación formativa al final de una unidad didáctica para comprobar la asimilación. | Fácil | https://kahoot.com |
| IAG | Quizizz | Cuestionarios a ritmo del alumno con retroalimentación instantánea y reports detallados. | Asignar cuestionarios de repaso para que los alumnos los respondan desde su móvil. | Fácil | https://quizizz.com |
| IDC | Coggle | Herramienta intuitiva de mapas mentales para esquemas visuales y árboles de conceptos. | Diseñar un diagrama de flujo de un protocolo de seguridad en el trabajo técnico. | Fácil | https://coggle.it |
| IDC | Draw.io (Diagrams.net) | Herramienta de diagramación en línea de código abierto para esquemas y red. | Dibujar bloques de esquemas eléctricos y diagramas de red directamente en el navegador. | Fácil | https://app.diagrams.net |
| IDC | Flypaper | Creador de tarjetas didácticas (flashcards) y presentaciones sencillas para refuerzo. | Crear tarjetas de memoria para fijar vocabulario técnico o simbología normativa. | Fácil | https://flypaper.com |
| IDC | Gamma App | Generador de presentaciones, documentos y páginas web impulsado por IA. | Generar una presentación de 10 diapositivas sobre energías renovables a partir de un texto. | Fácil | https://gamma.app |
| IDC | Marp | Ecosistema para transformar archivos Markdown directamente en diapositivas de presentación. | Crear diapositivas técnicas reproducibles editando únicamente archivos Markdown en VS Code. | Media | https://marp.app |
| IDC | Mermaid | Herramienta de diagramación basada en texto JavaScript que utiliza sintaxis tipo Markdown. | Incrustar diagramas de secuencia y flujos dinámicos en la documentación técnica del curso. | Media | https://mermaid.live |
| IDC | mindmaps | Aplicación ligera y de código abierto en HTML5 para crear mapas mentales offline. | Elaborar mapas mentales rápidos en clase desde una memoria USB sin necesidad de registro. | Fácil | https://drichard.org/mindmaps |
| IDC | PDFrizator | Herramienta para convertir documentos PDF en diapositivas de presentación interactivas. | Convertir manuales técnicos antiguos en formato PDF en presentaciones secuenciales de clase. | Fácil | http://www.pdfrizator.com |
| IDC | Prezi | Software de presentaciones dinámicas con desplazamientos y zoom sobre un lienzo. | Explicar sistemas complejos haciendo zoom desde la vista general hasta el componente exacto. | Media | https://prezi.com |
| IDC | Slidev | Generador de diapositivas web diseñado para desarrolladores a partir de Markdown. | Presentar bloques de código ejecutables e interactivos en demostraciones técnicas. | Media | https://sli.dev |
| IDC | TeeTree Office | Suite de utilidades ligeras para maquetación rápida de documentos visuales. | Formatear notas de clase y guías rápidas de consulta en formato imprimible. | Fácil | https://www.steema.com |
| IDC | XMind | Software profesional de mapas mentales para estructurar temas complejos y currículos. | Estructurar la programación didáctica completa de un curso de 80 horas en módulos y UFs. | Fácil | https://xmind.app |
| LMS | Canvas Free for Teacher | LMS gratuito en la nube para crear cursos, módulos y gestionar calificaciones. | Configurar la estructura de un certificado de profesionalidad con entregas y rúbricas. | Media | https://www.instructure.com/canvas |
| LMS | Google Classroom | Entorno virtual de aprendizaje sencillo e integrado con Google Workspace. | Distribuir guías de laboratorio, recoger tareas escritas y compartir avisos con el aula. | Fácil | https://classroom.google.com |
| OER | Edutopia | Banco de estrategias e investigación educativa de la Lucas Educational Foundation. | Encontrar estrategias docentes probadas para el aprendizaje basado en proyectos en adultos. | Fácil | https://www.edutopia.org |
| OER | OER Commons | Biblioteca digital pública de recursos educativos abiertos y planes de clase. | Descargar recursos didácticos con licencia abierta para módulos de prevención de riesgos. | Fácil | https://www.oercommons.org |
| OER | OpenStax | Libros de texto universitarios y de FP con licencia libre y revisión por pares. | Recomendar manuales gratuitos de física o matemáticas para nivelar al alumnado. | Fácil | https://openstax.org |
| REG | Comunidad de Madrid — Formación | Portal oficial de oferta formativa para el empleo de la Comunidad de Madrid. | Consultar el catálogo regional de cursos para el empleo y convocatorias abiertas. | Fácil | https://www.comunidad.madrid/empleo/formacion-empleo |
| REG | FUNDAE | Fundación Estatal para la Formación en el Empleo para formación continua bonificada. | Comprobar requisitos de cursos bonificados para trabajadores en activo. | Fácil | https://www.fundae.es |
| REG | INCUAL | Instituto Nacional de las Cualificaciones, gestor del Catálogo Nacional (CNCP). | Consultar realizaciones profesionales y criterios de realización para diseñar programaciones. | Fácil | https://incual.educacion.gob.es |
| REG | Registro de Formadores (Comunidad de Madrid) | Trámite oficial para la acreditación e inscripción en el registro de formadores de la CAM. | Tramitar el alta o actualización en el registro oficial de formadores para impartir FP. | Fácil | https://sede.comunidad.madrid/inscripciones-registro/inscripcion-registro-formadores |
| REG | Registro y Autorización de Acciones Formativas (CAM) | Gestión y autorización de proyectos de acciones formativas en la Comunidad de Madrid. | Presentar la documentación de inicio y homologación de cursos de formación para el empleo. | Media | https://sede.comunidad.madrid/autorizaciones-licencias-permisos-carnes/acciones-formativas-programas-formacion |
| REG | SEPE — Catálogo Especialidades Formativas | Base de datos oficial del SEPE con las especialidades formativas y certificados. | Buscar el código oficial (ej. SSCC0110) y la estructura de módulos didácticos. | Fácil | https://www.sepe.es/HomeSepe/formacion-trabajo/catalogo-especialidades-formativas.html |
| REG | TodoFP.es | Portal oficial del Ministerio de Educación sobre títulos de FP y equivalencias. | Consultar la normativa de currículos oficiales, títulos de FP y vías de acceso. | Fácil | https://www.todofp.es |
| SEC | CHEQ4 (IDAE / ASIT) | Programa oficial para la verificación de instalaciones solares térmicas de ACS. | Justificar el cumplimiento de la contribución solar mínima de ACS según el CTE DB-HE4. | Media | https://www.codigotecnico.org |
| SEC | PVGIS (JRC Comisión Europea) | Herramienta oficial de la UE para estimación de radiación solar y producción PV. | Simular la producción anual en kWh y las pérdidas de una instalación solar fotovoltaica. | Fácil | https://re.jrc.ec.europa.eu/pvg_tools/es/ |
| SEC | PVWatts Calculator (NREL) | Calculadora web para estimar la producción energética de sistemas fotovoltaicos. | Calcular rápidamente la generación anual y ahorro estimado para una instalación autoconsumo. | Fácil | https://pvwatts.nrel.gov |
| SEC | RETScreen | Software de análisis de viabilidad para proyectos de energías limpias y eficiencia. | Realizar estudios de viabilidad económica y reducción de emisiones para proyectos solares. | Media | https://natural-resources.canada.ca |
| SEC | System Advisor Model (SAM) | Motor de simulación del NREL para sistemas solares, eólicos, baterías y análisis financiero. | Modelar sistemas comerciales fotovoltaicos con almacenamiento e integración de tarifas. | Difícil | https://sam.nrel.gov |
| TOU | Amadeus Learning & Resources | Guías oficiales y recursos para el sistema global de reservas (GDS) líder en el sector. | Enseñar flujos de agencias de viajes, gestión de PNR y comandos de reservas. | Media | https://amadeus.com |
| TOU | Exceltur | Alianza para la excelencia turística española que publica informes económicos trimestrales. | Analizar informes de impacto macroeconómico y confianza empresarial en España. | Fácil | https://www.exceltur.org |
| TOU | FITUR | Feria internacional de turismo en Madrid con estudios de sector e innovación. | Estudiar dinámicas de ferias B2B, networking y tendencias tecnológicas en hostelería. | Fácil | https://www.ifema.es/fitur |
| TOU | Google Earth Studio & Web | Motor de mapas geoespaciales 3D y narrativa visual interactiva. | Crear vistas previas 3D virtuales de destinos y recorridos guiados para clientes. | Fácil | https://earth.google.com |
| TOU | Hosteltur | Portal de noticias de la industria turística líder en español sobre turismo y tech. | Lectura diaria de actualidad y análisis de casos reales de fusiones y mercado. | Fácil | https://www.hosteltur.com |
| TOU | INE — Hosteltur & Estadísticas Turísticas | Portal del INE para indicadores de ocupación hotelera, ADR y RevPAR. | Enseñar indicadores de yield management real y analizar datos mensuales de ocupación. | Fácil | https://www.ine.es |
| TOU | TURESPAÑA / Spain.info | Portal oficial de promoción turística nacional gestionado por el Ministerio de Industria y Turismo. | Analizar campañas de promoción nacional, marca de destino y atracción de mercados. | Fácil | https://www.spain.info |
| TOU | Turismo Madrid — Comunidad de Madrid | Portal oficial de promoción turística, rutas de patrimonio y viajes en la Comunidad de Madrid. | Diseñar itinerarios culturales locales, rutas regionales y paquetes turísticos urbanos. | Fácil | https://www.turismomadrid.es |
| TOU | UN Tourism Data & Dashboards | Repositorio de la agencia de la ONU para estadísticas turísticas globales. | Analizar flujos globales de viaje, métricas de impacto económico y recuperación de mercados. | Fácil | https://www.unwto.org/tourism-data |
| TOU | Wanderlog | Planificador de viajes colaborativo en mapa para creación de itinerarios. | Trabajos prácticos para trazar rutas guiadas de varios días, logística y presupuestos. | Fácil | https://wanderlog.com |
| TST | CADe SIMU | Software de simulación de esquemas electrotécnicos y automatismos. | Simular esquemas de arranque de motores, relés y lógicas de automatismo en tiempo real. | Fácil | https://www.cade-simu.com |
| TST | KiCad EDA | Suite de código abierto para diseño electrónico (EDA) y ruteado de placas PCB. | Diseñar esquemas electrónicos y diseñar la PCB para un módulo de microcontrolador. | Difícil | https://www.kicad.org |
| TST | QElectrotech | Software CAD libre para dibujo de esquemas eléctricos, hidráulicos y neumáticos. | Dibujar esquemas multifilares de cuadros eléctricos e instalaciones industriales. | Media | https://qelectrotech.org |
| TST | REBT.studio | Herramienta web para cálculo de instalaciones eléctricas según el REBT español. | Calcular secciones de cable, caídas de tensión y protecciones en baja tensión. | Fácil | https://rebt.studio |
| TST | UltiMaker Cura | Software de laminado (slicer) 3D de código abierto para preparar modelos CAD. | Laminar cajas e impresiones 3D para alojar circuitos y exportar el código G para el taller. | Fácil | https://ultimaker.com/software/ultimaker-cura |
`;

const DEFAULT_MARKDOWN_EN = `# Free Online Resources for Trainers & Educators

## Area of Application Taxonomy
| Category Code | Area of Application | Description |
| --- | --- | --- |
| AIA | AI Assistance & Lesson Planning | Generative AI tools and prompt environments for drafting syllabi, rubrics, activity scenarios, research, and instructional materials. |
| CWS | Collaborative Workspaces | Virtual whiteboards, pinboards, and visual spaces for group brainstorming, workshop dynamics, live diagramming, and peer activities. |
| DEV | Software Development & Dev Tools | Code hosting platforms, version control systems, API development tools, agentic AI coding environments, and development utilities used by software developers and IT instructors. |
| FIB | Free Image & Media Repositories | Free stock photo banks, royalty-free vector libraries, icon repositories, audio/music banks, stock video footage, and public domain media assets for instructional slides and digital materials. |
| IAG | Interactive Assessment & Gamification | Tools for real-time quizzes, polls, icebreakers, live word clouds, and participant engagement. |
| IDC | Instructional Design & Content Creation | Platforms for designing visual aids, infographics, slide presentations, mind maps, technical diagrams, and multimedia materials. |
| LMS | Classroom & Learning Management | Systems for organizing learning modules, distributing materials, and tracking student submissions. |
| OER | Open Educational Resources & Repositories | Free repositories of ready-to-use technical content, lesson plans, and teaching media. |
| REG | Vocational Education Regulations & Official Catalogs | Official Spanish and regional portals for VET regulations, qualification catalogs, trainer registries, and course authorizations. |
| SEC | Solar Energy Calculation & Design Tools | Free online simulators, solar radiation databases, sizing calculators, and official validation software for photovoltaic (PV) and solar thermal energy systems. |
| TOU | Tourism, Hospitality & Destination Management | Official tourism statistics, market intelligence, travel distribution portals, and destination management platforms. |
| TST | Technical Simulation & Workshop Tools | Specialized open-source or free CAD, EDA, electrical calculation, 3D printing, and technical simulation software for vocational workshops and engineering labs. |

## Resource Directory Table

| Area of Application | Name | Description | Example Use Case | Difficulty | URL |
| --- | --- | --- | --- | --- | --- |
| AIA | Claude (Anthropic) | Advanced AI assistant with long context windows and high reasoning capability. | Ingesting a 50-page curriculum standard to extract structured learning outcomes. | Easy | https://claude.ai |
| AIA | ChatGPT (OpenAI) | Conversational AI model for drafting lesson plans, scenario questions, and rubrics. | Generating 10 troubleshooting scenario questions with step-by-step explanations. | Easy | https://chatgpt.com |
| AIA | Diffit | Generates differentiated reading passages, summaries, and student worksheets. | Adapting a complex technical article into three reading levels for diverse adult learners. | Easy | https://web.diffit.me |
| AIA | Google Gemini | Multimodal AI assistant capable of analyzing text, images, code, and PDF documents. | Uploading a PDF technical datasheet and generating a lab worksheet. | Easy | https://gemini.google.com |
| AIA | MagicSchool AI | AI platform specifically built for educators to generate rubrics and lesson plans. | Generating a 4-level analytic rubric for a practical workshop lab in 2 minutes. | Easy | https://www.magicschool.ai |
| AIA | Microsoft Copilot | AI assistant connected to web search and Microsoft 365 for summaries and slides. | Summarizing technical news into a 1-page classroom discussion handout. | Easy | https://copilot.microsoft.com |
| AIA | Perplexity AI | Conversational search engine providing cited, real-time web references. | Sourcing up-to-date industry standards and hardware specifications for lecture slides. | Easy | https://www.perplexity.ai |
| CWS | AnswerGarden | Instant, minimal word-cloud brainstorming platform. | Polling students' prior knowledge on a topic with a single open query. | Easy | https://answergarden.ch |
| CWS | FigJam | Collaborative online whiteboard for brainstorming, diagramming, and agile workflows. | Conducting a post-project retro with sticky notes and voting stickers. | Medium | https://www.figma.com/figjam |
| CWS | Miro | Infinite visual canvas for real-time collaboration, flowcharts, and sticky-note mapping. | Running a group brainstorming session on system architecture using sticky notes. | Medium | https://miro.com |
| CWS | Padlet | Digital bulletin board for sharing multimedia cards, posts, and student submissions. | Creating a collaborative wall where students post links to their lab results. | Easy | https://padlet.com |
| DEV | Docker Hub | World's largest library and community for container images. | Sourcing pre-built database or web server containers for student development labs. | Medium | https://hub.docker.com |
| DEV | GitHub | Code hosting platform for version control and collaboration using Git. | Hosting student project repositories and tracking assignment code submissions. | Medium | https://github.com |
| DEV | Google Antigravity | AI-assisted platform for modern software architecture and development tooling. | Demonstrating modern cloud-native architectures and software design concepts. | Medium | https://antigravity.google |
| DEV | Postman | API platform for building, testing, and documenting REST/GraphQL APIs. | Teaching API requests (GET, POST) and inspecting JSON responses in web development labs. | Medium | https://www.postman.com |
| DEV | Stack Overflow | Developer community for technical Q&A and programming problem solving. | Guiding students on how to research error messages and evaluate code solutions. | Easy | https://stackoverflow.com |
| DEV | Visual Studio Code | Lightweight open-source code editor with rich extension ecosystem. | Setting up a unified IDE for students learning C/C++, Python, HTML/CSS, or ESP-IDF. | Easy | https://code.visualstudio.com |
| FIB | Bensound | Royalty-free background music organized by mood and genre. | Sourcing corporate acoustic background audio for e-learning presentation modules. | Easy | https://www.bensound.com |
| FIB | Coverr | Free 4K and HD stock video footage library without watermarks. | Downloading stock video backgrounds for presentation intro slides. | Easy | https://coverr.co |
| FIB | Free Music Archive (FMA) | Curated library of Creative Commons instrumental and background music. | Sourcing podcast background music for student video production assignments. | Easy | https://freemusicarchive.org |
| FIB | Freesound | Massive collaborative database of Creative Commons audio snippets and sound effects. | Sourcing industrial machine noise and alert sounds for e-learning modules. | Easy | https://freesound.org |
| FIB | Mixkit | Free stock video clips, stock music, sound effects, and video templates. | Downloading HD video backgrounds for presentation introduction slides. | Easy | https://mixkit.co |
| FIB | Openverse | Search engine for CC-licensed media across public web repositories. | Sourcing historical photos and openly licensed diagrams for training slides. | Easy | https://openverse.org |
| FIB | Pexels | High-resolution free stock photos and videos under custom free license. | Finding technical photography (e.g., solar panels, server rooms) for slide decks. | Easy | https://www.pexels.com |
| FIB | Pixabay | Massive collection of copyright-free photos, vectors, illustrations, and music. | Sourcing vector graphics for workshop handouts and course logos. | Easy | https://pixabay.com |
| FIB | SVGRepo | Free vector icons and SVG vectors repository for commercial use. | Sourcing clean vector icons for technical architecture diagrams. | Easy | https://www.svgrepo.com |
| FIB | The Noun Project | Over 5 million free minimalist icons and visual symbols. | Downloading technical icons (sensors, relays, microcontrollers) for custom slides. | Easy | https://thenounproject.com |
| FIB | Unsplash | Over 3 million high-resolution stock images created by a global photographer community. | Downloading clean header images for course sites and presentation covers. | Easy | https://unsplash.com |
| FIB | Wikimedia Commons | Database of 100M+ freely usable media files and historical images. | Sourcing historical electrical schematics and scientific illustrations. | Medium | https://commons.wikimedia.org |
| IAG | Baamboozle | Game-based learning platform requiring only one screen for the whole class. | Running a quick 5-minute warm-up trivia game using a single projector. | Easy | https://www.baamboozle.com |
| IAG | Blooket | Action-based review games with multiple game modes. | Turning a quiz into a competitive tower defense game for review sessions. | Easy | https://www.blooket.com |
| IAG | Kahoot! | Game-based learning platform for live multiple-choice quizzes. | Conducting a formative assessment at the end of a module to evaluate retention. | Easy | https://kahoot.com |
| IAG | Quizizz | Self-paced student quizzes with instant feedback and detailed reporting. | Assigning homework quizzes that students can complete on mobile devices. | Easy | https://quizizz.com |
| IDC | Coggle | Intuitive mind mapping tool for visual notes and concept trees. | Designing a visual flowchart of electrical safety protocols. | Easy | https://coggle.it |
| IDC | Draw.io (Diagrams.net) | Open-source online diagramming tool supporting flowcharts, network maps, and UML. | Drawing circuit block diagrams and network topology maps directly in the browser. | Easy | https://app.diagrams.net |
| IDC | Flypaper | Digital flashcard and simple presentation builder for learning reinforcement. | Building flashcard decks for technical term memorization. | Easy | https://flypaper.com |
| IDC | Gamma App | AI-powered presentation, document, and webpage generator. | Generating a sleek 10-slide deck on renewable energy from a text prompt. | Easy | https://gamma.app |
| IDC | Marp | Markdown Presentation Ecosystem for converting Markdown files into slide decks. | Creating reproducible technical slide decks straight from VS Code Markdown files. | Medium | https://marp.app |
| IDC | Mermaid | JavaScript-based diagramming tool that uses Markdown-inspired text definitions. | Embedding dynamic sequence diagrams and flowcharts in documentation markdown. | Medium | https://mermaid.live |
| IDC | mindmaps | Lightweight open-source HTML5 mind mapping application. | Quick offline mind mapping during lectures on portable drives. | Easy | https://drichard.org/mindmaps |
| IDC | PDFrizator | Tool for converting PDF documents into interactive presentation slides. | Converting legacy technical PDF manuals into clickable lecture presentations. | Easy | http://www.pdfrizator.com |
| IDC | Prezi | Dynamic presentation software featuring pan and zoom transitions on a canvas. | Presenting complex hierarchical systems by zooming from global view to component detail. | Medium | https://prezi.com |
| IDC | Slidev | Web-based slide generator designed specifically for developers using Markdown. | Presenting live executable code snippets and interactive components in developer talks. | Medium | https://sli.dev |
| IDC | TeeTree Office | Suite of light desktop/web utilities for quick content formatting and visual aids. | Formatting structured lecture notes and quick printable cheat sheets. | Easy | https://www.steema.com |
| IDC | XMind | Professional mind mapping and brainstorming software for structuring complex topics. | Structuring a complete 80-hour VET course syllabus into modules and learning units. | Easy | https://xmind.app |
| LMS | Canvas Free for Teacher | Free cloud LMS tier for building courses, modules, and grading. | Setting up a complete course structure with assignments and rubrics. | Medium | https://www.instructure.com/canvas |
| LMS | Google Classroom | Simple learning management platform integrated with Google Workspace. | Distributing worksheets, collecting lab reports, and sharing lecture links. | Easy | https://classroom.google.com |
| OER | Edutopia | Educational strategy and research repository managed by the Lucas Educational Foundation. | Finding evidence-based teaching strategies for adult project-based learning. | Easy | https://www.edutopia.org |
| OER | OER Commons | Public digital library of open educational resources and lesson plans. | Downloading open-license course materials for electrical safety modules. | Easy | https://www.oercommons.org |
| OER | OpenStax | Peer-reviewed, openly licensed college and VET textbooks from Rice University. | Assigning free high-quality physics or college algebra textbooks to students. | Easy | https://openstax.org |
| REG | Comunidad de Madrid — Formación | Official regional portal for employment-oriented training in Madrid. | Checking regional course catalogs, requirements, and upcoming subsidized training calls. | Easy | https://www.comunidad.madrid/empleo/formacion-empleo |
| REG | FUNDAE | Spanish Foundation for Training in Employment for subsidized continuous training. | Verifying subsidized training credit requirements for company-based adult courses. | Easy | https://www.fundae.es |
| REG | INCUAL | National Institute of Qualifications managing the CNCP in Spain. | Sourcing professional qualification standards and competence units for syllabus design. | Easy | https://incual.educacion.gob.es |
| REG | Registro de Formadores (Comunidad de Madrid) | Official registry portal for accredited adult education trainers in Madrid. | Submitting credentials and verifying registry status as an official VET trainer. | Easy | https://sede.comunidad.madrid/inscripciones-registro/inscripcion-registro-formadores |
| REG | Registro y Autorización de Acciones Formativas (CAM) | Regional portal for authorizing and registering official training actions in Madrid. | Managing official paperwork for declaring and launching recognized VET training actions. | Medium | https://sede.comunidad.madrid/autorizaciones-licencias-permisos-carnes/acciones-formativas-programas-formacion |
| REG | SEPE — Catálogo Especialidades Formativas | Official Spanish database of accredited training specialties and modules. | Searching official code identifiers (e.g., SSCC0110) and learning unit breakdowns. | Easy | https://www.sepe.es/HomeSepe/formacion-trabajo/catalogo-especialidades-formativas.html |
| REG | TodoFP.es | Official portal of the Ministry of Education for VET degrees and equivalencies. | Consulting official VET curricula regulations, professional modules, and degree access. | Easy | https://www.todofp.es |
| SEC | CHEQ4 (IDAE / ASIT) | Official Spanish software tool for solar thermal DHW installation validation. | Verifying compliance of low-temperature solar thermal domestic hot water systems with CTE DB-HE4. | Medium | https://www.codigotecnico.org |
| SEC | PVGIS (EU Joint Research Centre) | European Commission tool for estimating PV yield and solar radiation. | Simulating annual kWh production and performance ratio for a solar rooftop array. | Easy | https://re.jrc.ec.europa.eu/pvg_tools/en/ |
| SEC | PVWatts Calculator (NREL) | Web application that estimates electricity production of grid-connected PV systems. | Quick calculation of annual energy output and cost savings for residential PV systems. | Easy | https://pvwatts.nrel.gov |
| SEC | RETScreen | Clean energy decision support software for solar PV/thermal feasibility. | Performing financial viability and greenhouse gas emission reduction analysis for a solar project. | Medium | https://natural-resources.canada.ca |
| SEC | System Advisor Model (SAM) | NREL open-source engine for solar PV, thermal, battery, and financial modeling. | Simulating complex commercial PV + battery storage systems with custom financial tariffs. | Difficult | https://sam.nrel.gov |
| TOU | Amadeus Learning & Resources | Official guides and training resources for the world’s leading Global Distribution System (GDS). | Teaching travel agency workflows, PNR management, and flight/hotel reservation commands. | Medium | https://amadeus.com |
| TOU | Exceltur | Alliance for excellence in Spanish tourism publishing quarterly economic reports. | Analyzing macroeconomic impact assessments and strategic business confidence indexes. | Easy | https://www.exceltur.org |
| TOU | FITUR | Spain’s flagship international tourism fair featuring sector research and innovations. | Studying B2B trade show dynamics, travel networking, and tech innovations in hospitality. | Easy | https://www.ifema.es/fitur |
| TOU | Google Earth Studio & Web | 3D geospatial mapping and visual storytelling engine. | Creating virtual 3D destination previews and guided spatial walkthroughs for customer presentations. | Easy | https://earth.google.com |
| TOU | Hosteltur | Leading Spanish-language tourism industry news portal covering hospitality and travel tech. | Daily warm-up readings or case study analysis of current industry news and mergers. | Easy | https://www.hosteltur.com |
| TOU | INE — Hosteltur & Tourism Statistics | Spanish National Statistics Institute portal for occupancy rates, ADR, and RevPAR. | Teaching real-world yield management indicators and analyzing official monthly occupancy data in Spain. | Easy | https://www.ine.es |
| TOU | TURESPAÑA / Spain.info | Spain’s official national promotional tourism portal managed by the Ministry of Industry and Tourism. | Analyzing national promotional campaigns, destination branding, and foreign market targeting. | Easy | https://www.spain.info |
| TOU | Turismo Madrid — Comunidad de Madrid | Regional official portal for tourism promotion, heritage routes, and travel planning in Madrid. | Designing local cultural itineraries, regional routes, and urban tourism packages. | Easy | https://www.turismomadrid.es |
| TOU | UN Tourism Data & Dashboards | Official UN agency repository for global tourism statistics and market intelligence. | Analyzing global travel flows, economic impact metrics, and international market recovery. | Easy | https://www.unwto.org/tourism-data |
| TOU | Wanderlog | Collaborative map-based travel planner and itinerary creation tool. | Student assignments for mapping out multi-day guided tours, route logistics, and budget estimates. | Easy | https://wanderlog.com |
| TST | CADe SIMU | Lightweight electrical and automation simulation software for schematics. | Simulating motor control circuits, relays, and contactor schematics in real time. | Easy | https://www.cade-simu.com |
| TST | KiCad EDA | Open-source suite for electronic design automation (EDA) and PCB layout. | Designing custom micro-controller breakout PCBs from schematic to Gerber files. | Difficult | https://www.kicad.org |
| TST | QElectrotech | Open-source CAD software for creating electrical, hydraulic, and pneumatic diagrams. | Generating multi-line electrical installation schematics and panel layout diagrams. | Medium | https://qelectrotech.org |
| TST | REBT.studio | Online engineering tool for low-voltage electrical calculations per Spanish REBT. | Calculating cable cross-sections, voltage drops, and protective breaker sizes. | Easy | https://rebt.studio |
| TST | UltiMaker Cura | Open-source 3D printing slicer software for preparing CAD models. | Slicing 3D enclosure models for microcontrollers and exporting G-code for workshop printing. | Easy | https://ultimaker.com/software/ultimaker-cura |
`;


const CATEGORY_ICONS = {
  AIA: '🧠',
  CWS: '👥',
  DEV: '💻',
  FIB: '🖼️',
  IAG: '🎮',
  IDC: '🎨',
  LMS: '🎓',
  OER: '📚',
  REG: '📜',
  SEC: '☀️',
  TOU: '🌍',
  TST: '⚙️'
};

// Helper function to resolve category icon
function getCategoryIcon(cat) {
  if (!cat) return '📁';
  // 1. Check mapping dictionary in app.js
  if (cat.code && CATEGORY_ICONS[cat.code]) {
    return CATEGORY_ICONS[cat.code];
  }
  // 2. Extract emoji embedded in the category name if present in .md
  const emojiMatch = cat.name ? cat.name.match(/[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/u) : null;
  if (emojiMatch) {
    return emojiMatch[0];
  }
  // 3. Fallback default
  return '📁';
}

const UI_TEXT = {
  ES: {
    appTitle: 'Recursos Gratuitos para Formadores',
    appSubtitle: 'Formación Profesional y Educación de Adultos',
    viewSlides: 'Diapositivas',
    viewExplorer: 'Explorador (77)',
    slideIndexTitle: 'Índice de Diapositivas',
    introBadge: 'Compendio Digital para Docentes',
    introTitle: 'Catálogo de Recursos Online Gratuitos para Formadores',
    introSubtitle: 'Herramientas digitales, software de simulación, repositorios multimedia sin copyright e Inteligencia Artificial aplicada a la Formación Profesional y Educación de Adultos.',
    statTools: 'Herramientas Libres',
    statCategories: 'Áreas de Aplicación',
    statEducational: 'Uso Educativo Directo',
    catMapTitle: 'Categorías de Herramientas',
    catMapSubtitle: 'Selecciona cualquier área para ir directamente a la diapositiva correspondiente:',
    btnCategories: 'Categorías',
    keyboardHint: 'Usa las flechas ← → para navegar',
    btnPrev: '← Anterior',
    btnNext: 'Siguiente →',
    searchPlaceholder: '🔍 Buscar herramienta, categoría o palabra clave...',
    allCategories: 'Todas las categorías',
    allDifficulties: 'Todas las dificultades',
    openWebsite: 'Abrir Sitio Web ↗',
    usageExample: '💡 Ejemplo de Uso:',
    noResults: 'No se encontraron herramientas que coincidan con la búsqueda.',
    resourcesCount: 'recursos',
    resourceSingle: 'recurso',
    drawerIntro: 'Bienvenida e Introducción',
    drawerMap: 'Taxonomía de Áreas de Aplicación'
  },
  EN: {
    appTitle: 'Free Resources for Educators',
    appSubtitle: 'Vocational & Adult Education',
    viewSlides: 'Slides',
    viewExplorer: 'Explorer (77)',
    slideIndexTitle: 'Slide Index',
    introBadge: 'Digital Compendium for Educators',
    introTitle: 'Catalog of Free Online Resources for Trainers',
    introSubtitle: 'Digital tools, simulation software, copyright-free media repositories, and Artificial Intelligence applied to Vocational and Adult Education.',
    statTools: 'Free Tools',
    statCategories: 'Application Areas',
    statEducational: 'Direct Educational Use',
    catMapTitle: 'Tool Categories',
    catMapSubtitle: 'Select any area to jump directly to its corresponding slide:',
    btnCategories: 'Categories',
    keyboardHint: 'Use ← → arrow keys to navigate',
    btnPrev: '← Previous',
    btnNext: 'Next →',
    searchPlaceholder: '🔍 Search tool, category, or keyword...',
    allCategories: 'All categories',
    allDifficulties: 'All difficulties',
    openWebsite: 'Open Website ↗',
    usageExample: '💡 Example Use Case:',
    noResults: 'No tools found matching your search query.',
    resourcesCount: 'resources',
    resourceSingle: 'resource',
    drawerIntro: 'Welcome & Introduction',
    drawerMap: 'Application Areas Taxonomy'
  }
};

// Application State
const state = {
  lang: 'ES',
  viewMode: 'slides', // 'slides' | 'explorer'
  currentSlideIndex: 0, // 0 = Intro, 1 = Map, 2..13 = Category Slides
  isDrawerOpen: false,
  searchQuery: '',
  selectedCategory: 'ALL',
  selectedDifficulty: 'ALL',
  taxonomy: [],
  resources: []
};

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  initEventListeners();
  loadData(state.lang);
});

// Initialize DOM Event Listeners
function initEventListeners() {
  // Mode Switcher
  document.getElementById('btnViewSlides').addEventListener('click', () => setViewMode('slides'));
  document.getElementById('btnViewExplorer').addEventListener('click', () => setViewMode('explorer'));
  
  // Drawer Toggle
  document.getElementById('btnOpenDrawer').addEventListener('click', toggleDrawer);
  document.getElementById('btnCloseDrawer').addEventListener('click', closeDrawer);
  document.getElementById('drawerBackdrop').addEventListener('click', (e) => {
    if (e.target === document.getElementById('drawerBackdrop')) closeDrawer();
  });

  // Language Toggle
  document.getElementById('btnLangToggle').addEventListener('click', toggleLanguage);

  // Nav Buttons
  document.getElementById('btnPrev').addEventListener('click', prevSlide);
  document.getElementById('btnNext').addEventListener('click', nextSlide);

  // Search & Filters in Explorer
  document.getElementById('searchInput').addEventListener('input', (e) => {
    state.searchQuery = e.target.value.toLowerCase();
    renderExplorer();
  });

  document.getElementById('filterCategory').addEventListener('change', (e) => {
    state.selectedCategory = e.target.value;
    renderExplorer();
  });

  document.getElementById('filterDifficulty').addEventListener('change', (e) => {
    state.selectedDifficulty = e.target.value;
    renderExplorer();
  });

  // Keyboard Shortcuts
  document.addEventListener('keydown', (e) => {
    if (state.isDrawerOpen && e.key === 'Escape') {
      closeDrawer();
      return;
    }
    
    if (state.viewMode === 'slides') {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    }
  });
}

// Fetch & Parse Markdown Data with Resilient Fallback Paths and Offline file:// Fallback
async function loadData(lang) {
  const baseName = lang === 'ES' ? 'resources_directory_es.md' : 'resources_directory_en.md';
  const candidatePaths = [
    baseName,
    './' + baseName,
    '../' + baseName,
    '/' + baseName
  ];

  let text = null;

  // Try dynamic server fetch first (for HTTP/HTTPS web servers)
  for (const path of candidatePaths) {
    try {
      const res = await fetch(path);
      if (res.ok) {
        const fetchedText = await res.text();
        // Verify response is actual Markdown content, not an HTML 404 page
        if (fetchedText && !fetchedText.trim().startsWith('<!DOCTYPE') && !fetchedText.trim().startsWith('<html') && fetchedText.includes('|')) {
          text = fetchedText;
          break;
        }
      }
    } catch (err) {
      // CORS block on file:// or network error
    }
  }

  // Fallback to embedded data if fetch failed or returned invalid HTML/non-markdown
  if (!text || !text.includes('|')) {
    if (lang === 'ES' && window.EMBEDDED_DATA_ES) {
      text = window.EMBEDDED_DATA_ES;
    } else if (lang === 'EN' && window.EMBEDDED_DATA_EN) {
      text = window.EMBEDDED_DATA_EN;
    }
  }

  if (text) {
    parseMarkdown(text, lang);
    updateStaticUIText();
    renderUI();
  } else {
    console.error(`Failed to load markdown data for ${lang}.`);
  }
}

// Helper to calculate total slides dynamically (1 Intro + 1 Map + N Category slides)
function getTotalSlides() {
  return 2 + (state.taxonomy ? state.taxonomy.length : 0);
}

// In-Browser Markdown Parser
function parseMarkdown(text, lang) {
  if (!text || typeof text !== 'string') {
    text = lang === 'ES' ? (window.EMBEDDED_DATA_ES || '') : (window.EMBEDDED_DATA_EN || '');
  }

  const taxonomy = [];
  const resources = [];
  const lines = text.split('\n');
  let mode = null;

  for (let rawLine of lines) {
    const line = rawLine.replace(/\r/g, '').trim();
    if (!line) continue;

    const lower = line.toLowerCase();

    if (lower.includes('taxonomía') || lower.includes('taxonomy')) {
      mode = 'tax';
      continue;
    } else if (lower.includes('directorio') || lower.includes('directory')) {
      mode = 'res';
      continue;
    }

    if (mode === 'tax') {
      if (line.startsWith('|') && !line.includes('---')) {
        const rawParts = line.split('|').map(p => p.trim());
        if (rawParts.length >= 4) {
          const code = rawParts[1];
          const name = rawParts[2];
          const desc = rawParts[3];
          if (code && name && !code.includes('Código') && !code.includes('Code') && !code.includes('Category')) {
            taxonomy.push({ code, name, description: desc || '' });
          }
        }
      }
    } else if (mode === 'res') {
      if (line.startsWith('|') && !line.includes('---')) {
        const rawParts = line.split('|').map(p => p.trim());
        if (rawParts.length >= 7) {
          const category = rawParts[1];
          const name = rawParts[2];
          const description = rawParts[3];
          const example = rawParts[4];
          const difficulty = rawParts[5];
          const url = rawParts[6];
          if (category && name && !category.includes('Área') && !category.includes('Area')) {
            resources.push({
              category,
              name,
              description: description || '',
              example: example || '',
              difficulty: difficulty || 'Fácil',
              url: url || '#'
            });
          }
        }
      }
    }
  }

  state.taxonomy = taxonomy;
  state.resources = resources;

  // Clamp current slide index if taxonomy shrank
  const maxIdx = getTotalSlides() - 1;
  if (state.currentSlideIndex > maxIdx) {
    state.currentSlideIndex = maxIdx;
  }
}

// Update Static UI Text Labels based on Language
function updateStaticUIText() {
  const t = UI_TEXT[state.lang];
  document.getElementById('appTitle').textContent = t.appTitle;
  document.getElementById('appSubtitle').textContent = t.appSubtitle;
  document.getElementById('txtViewSlides').textContent = t.viewSlides;
  document.getElementById('txtViewExplorer').textContent = `${t.viewExplorer.split('(')[0].trim()} (${state.resources.length})`;
  document.getElementById('langLabel').textContent = state.lang;
  document.getElementById('drawerTitleText').textContent = t.slideIndexTitle;
  document.getElementById('btnPrev').innerHTML = t.btnPrev;
  document.getElementById('btnNext').innerHTML = t.btnNext;
  document.getElementById('searchInput').placeholder = t.searchPlaceholder;

  // Populate Category Filter Dropdown
  const catFilter = document.getElementById('filterCategory');
  catFilter.innerHTML = `<option value="ALL">${t.allCategories}</option>` + 
    state.taxonomy.map(cat => `<option value="${cat.code}">${cat.code} - ${cat.name}</option>`).join('');

  const diffFilter = document.getElementById('filterDifficulty');
  diffFilter.innerHTML = `
    <option value="ALL">${t.allDifficulties}</option>
    <option value="Fácil">${state.lang === 'ES' ? 'Fácil' : 'Easy'}</option>
    <option value="Media">${state.lang === 'ES' ? 'Media' : 'Medium'}</option>
    <option value="Difícil">${state.lang === 'ES' ? 'Difícil' : 'Difficult'}</option>
  `;
}

// Main UI Render Controller
function renderUI() {
  renderSlides();
  renderDrawer();
  renderExplorer();
  updateNavigation();
}

// Render Slide View
function renderSlides() {
  const container = document.getElementById('slideViewport');
  const t = UI_TEXT[state.lang];

  let html = '';

  // Slide 0: Hero Intro
  html += `
    <div class="slide-content hero-slide ${state.currentSlideIndex === 0 ? 'active' : ''}">
      <span class="hero-tag">${t.introBadge}</span>
      <h1 class="hero-title">${t.introTitle}</h1>
      <p class="hero-subtitle">${t.introSubtitle}</p>
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-number">${state.resources.length}</div>
          <div class="stat-label">${t.statTools}</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">${state.taxonomy.length}</div>
          <div class="stat-label">${t.statCategories}</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">100%</div>
          <div class="stat-label">${t.statEducational}</div>
        </div>
      </div>
    </div>
  `;

  // Slide 1: Category Map Grid (Taxonomy)
  html += `
    <div class="slide-content category-map-slide ${state.currentSlideIndex === 1 ? 'active' : ''}">
      <h2>${t.catMapTitle}</h2>
      <p class="subtitle">${t.catMapSubtitle}</p>
      <div class="category-grid">
        ${state.taxonomy.map(cat => {
          const count = state.resources.filter(r => r.category === cat.code).length;
          const icon = getCategoryIcon(cat);
          return `
            <div class="category-card" onclick="jumpToCategorySlide('${cat.code}')">
              <div>
                <div class="cat-header-top">
                  <div class="cat-icon-badge">${icon}</div>
                  <span class="cat-code-badge">${cat.code}</span>
                </div>
                <div class="cat-name">${cat.name}</div>
                <div class="cat-desc">${cat.description}</div>
              </div>
              <div class="cat-footer">
                <span>${count} ${count === 1 ? t.resourceSingle : t.resourcesCount}</span>
                <span class="arrow">→</span>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;

  // Category Detail Slides
  state.taxonomy.forEach((cat, idx) => {
    const slideIdx = idx + 2;
    const catResources = state.resources.filter(r => r.category === cat.code);
    const icon = getCategoryIcon(cat);

    html += `
      <div class="slide-content category-detail-slide ${state.currentSlideIndex === slideIdx ? 'active' : ''}">
        <div class="category-detail-header">
          <div class="cat-info-left">
            <div class="cat-title-row">
              <span class="cat-lg-badge">${cat.code}</span>
              <h2 class="cat-title-text">${cat.name}</h2>
            </div>
            <p class="cat-summary-text">${cat.description}</p>
          </div>
          <div class="cat-info-right">
            <button class="btn-back-cats" onclick="jumpToSlide(1)">${t.btnCategories}</button>
            <span class="cat-count-chip">${catResources.length} ${catResources.length === 1 ? t.resourceSingle : t.resourcesCount}</span>
          </div>
        </div>

        <div class="resources-grid">
          ${catResources.map(r => renderResourceCard(r)).join('')}
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

// Render Single Resource Card Component
function renderResourceCard(r) {
  const t = UI_TEXT[state.lang];
  const diffClass = r.difficulty.toLowerCase();
  return `
    <div class="resource-card">
      <div>
        <div class="res-header">
          <h3 class="res-name">${r.name}</h3>
          <span class="difficulty-badge ${diffClass}">${r.difficulty}</span>
        </div>
        <p class="res-desc">${r.description}</p>
        <div class="res-example-box">
          <strong>${t.usageExample}</strong> ${r.example}
        </div>
      </div>
      <a href="${r.url}" target="_blank" rel="noopener noreferrer" class="res-link-btn">
        ${t.openWebsite}
      </a>
    </div>
  `;
}

// Render Slide Drawer List
function renderDrawer() {
  const listContainer = document.getElementById('drawerList');
  const t = UI_TEXT[state.lang];

  let items = [
    { badge: 'INTRO', title: t.drawerIntro, index: 0 },
    { badge: 'MAPA', title: t.drawerMap, index: 1 },
    ...state.taxonomy.map((cat, i) => ({
      badge: cat.code,
      title: cat.name,
      index: i + 2
    }))
  ];

  listContainer.innerHTML = items.map(item => `
    <div class="drawer-item ${state.currentSlideIndex === item.index ? 'active' : ''}" onclick="jumpToSlide(${item.index})">
      <div class="drawer-item-left">
        <span class="drawer-badge">${item.badge}</span>
        <span class="drawer-item-title">${item.title}</span>
      </div>
      <span class="arrow">›</span>
    </div>
  `).join('');
}

// Render Explorer Grid View
function renderExplorer() {
  const gridContainer = document.getElementById('explorerGrid');
  const t = UI_TEXT[state.lang];

  let filtered = state.resources.filter(r => {
    // Search Filter
    if (state.searchQuery) {
      const q = state.searchQuery;
      const matchName = r.name.toLowerCase().includes(q);
      const matchDesc = r.description.toLowerCase().includes(q);
      const matchEx = r.example.toLowerCase().includes(q);
      const matchCat = r.category.toLowerCase().includes(q);
      if (!matchName && !matchDesc && !matchEx && !matchCat) return false;
    }
    // Category Filter
    if (state.selectedCategory !== 'ALL' && r.category !== state.selectedCategory) {
      return false;
    }
    // Difficulty Filter
    if (state.selectedDifficulty !== 'ALL' && r.difficulty.toLowerCase() !== state.selectedDifficulty.toLowerCase()) {
      return false;
    }
    return true;
  });

  if (filtered.length === 0) {
    gridContainer.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">${t.noResults}</div>`;
    return;
  }

  gridContainer.innerHTML = filtered.map(r => renderResourceCard(r)).join('');
}

// Navigation Controls Update
function updateNavigation() {
  const totalSlides = getTotalSlides();
  const currentNum = state.currentSlideIndex + 1;

  // Counter badge
  document.getElementById('slideCounter').innerHTML = `
    <span class="dot"></span> ${currentNum} / ${totalSlides}
  `;

  // Buttons state
  document.getElementById('btnPrev').disabled = state.currentSlideIndex === 0;
  document.getElementById('btnNext').disabled = state.currentSlideIndex === totalSlides - 1;

  // Pagination Dots
  const dotsContainer = document.getElementById('paginationDots');
  dotsContainer.innerHTML = Array.from({ length: totalSlides }).map((_, i) => `
    <div class="dot-item ${i === state.currentSlideIndex ? 'active' : ''}" onclick="jumpToSlide(${i})"></div>
  `).join('');
}

// Actions
function nextSlide() {
  const totalSlides = getTotalSlides();
  if (state.currentSlideIndex < totalSlides - 1) {
    state.currentSlideIndex++;
    renderUI();
  }
}

function prevSlide() {
  if (state.currentSlideIndex > 0) {
    state.currentSlideIndex--;
    renderUI();
  }
}

function jumpToSlide(index) {
  state.currentSlideIndex = index;
  closeDrawer();
  if (state.viewMode !== 'slides') setViewMode('slides');
  renderUI();
}

window.jumpToSlide = jumpToSlide;

function jumpToCategorySlide(categoryCode) {
  const idx = state.taxonomy.findIndex(cat => cat.code === categoryCode);
  if (idx !== -1) {
    jumpToSlide(idx + 2);
  }
}

window.jumpToCategorySlide = jumpToCategorySlide;

function setViewMode(mode) {
  state.viewMode = mode;
  document.getElementById('btnViewSlides').classList.toggle('active', mode === 'slides');
  document.getElementById('btnViewExplorer').classList.toggle('active', mode === 'explorer');
  
  document.getElementById('slideViewport').style.display = mode === 'slides' ? 'flex' : 'none';
  document.getElementById('bottomNav').style.display = mode === 'slides' ? 'flex' : 'none';
  document.getElementById('explorerView').classList.toggle('active', mode === 'explorer');
}

function toggleDrawer() {
  state.isDrawerOpen = !state.isDrawerOpen;
  document.getElementById('drawerBackdrop').classList.toggle('open', state.isDrawerOpen);
}

function closeDrawer() {
  state.isDrawerOpen = false;
  document.getElementById('drawerBackdrop').classList.remove('open');
}

function toggleLanguage() {
  state.lang = state.lang === 'ES' ? 'EN' : 'ES';
  loadData(state.lang);
}
