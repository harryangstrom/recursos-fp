[README.md](https://github.com/user-attachments/files/31077721/README.md)
# Recursos Online Gratuitos para Formadores / Free Online Resources for Trainers

A curated repository of 77 free digital tools, simulation software, copyright-free media repositories, and Artificial Intelligence applications tailored for **Vocational Education & Training (Formación Profesional)** and **Adult Education**.

---

## 🌟 Repository Structure

- [`resources_directory_es.md`](file:///home/carlos/AI/Resources_Dir/resources_directory_es.md) — Spanish Directory (12 Taxonomy Categories + 77 Resource Tools).
- [`resources_directory_en.md`](file:///home/carlos/AI/Resources_Dir/resources_directory_en.md) — English Directory (12 Taxonomy Categories + 77 Resource Tools).
- [`resources_directory.md`](file:///home/carlos/AI/Resources_Dir/resources_directory.md) — Combined Bilingual Master Document.
- [`spa_option1/`](file:///home/carlos/AI/Resources_Dir/spa_option1/) — Interactive Single Page Application (SPA) to explore the directory and taxonomy.

---

## 💻 Web Application Options

### Option 1: Vanilla HTML5 / CSS3 / ES6 SPA ([`spa_option1/`](file:///home/carlos/AI/Resources_Dir/spa_option1/))
Lightweight, zero-dependency implementation using native browser standards.

```bash
# Serve with Python
python3 -m http.server 8080
# Open: http://localhost:8080/spa_option1/
```

### Option 2: Vite + React SPA ([`spa_option2/`](file:///home/carlos/AI/Resources_Dir/spa_option2/))
Modern component-based architecture using React, Lucide React icons, Vite, and custom React hooks (`useResourcesData`).

```bash
cd spa_option2
npm install
npm run dev

# Or build for production:
npm run build
```

---

### Key Application Features (Both Options)

* **Presentation Slide Deck Mode ("Diapositivas")**: Interactive 14-slide presentation mode (Hero Welcome slide + Category Map + 12 Category Slides). Includes bottom navigation, pagination dots, and keyboard shortcuts (`←` / `→` arrow keys).
* **Slide Index Drawer ("Índice de Diapositivas")**: Slide-over panel for quick jumping to any presentation slide.
* **Directory Explorer Mode ("Explorador")**: Full directory grid view with instant live search and filtering by category code or difficulty level (*Fácil*, *Media*, *Difícil*).
* **Bilingual Switcher (`ES` / `EN`)**: Dynamically toggles UI text and parses the corresponding Markdown file (`resources_directory_es.md` or `resources_directory_en.md`).
* **Live Markdown Source of Truth**: Parses Markdown files directly in the browser at runtime. Editing the `.md` files immediately updates the web app upon page refresh without any rebuild step.
* **Responsive Dark Glassmorphic Theme**: Viewport-aware multi-column grid layout designed for high resolution and mobile displays.

---

## 🏷️ Taxonomy Categories (12 Áreas de Aplicación)

1. **AIA** — Asistencia IA y Planificación de Clases / AI Assistance & Lesson Planning
2. **CWS** — Espacios de Trabajo Colaborativo / Collaborative Workspaces
3. **DEV** — Desarrollo de Software y Herramientas Dev / Software Development & Dev Tools
4. **FIB** — Repositorios Multimedia y Banco de Imágenes / Free Image & Media Repositories
5. **IAG** — Evaluación Interactiva y Gamificación / Interactive Assessment & Gamification
6. **IDC** — Diseño Instruccional y Creación de Contenidos / Instructional Design & Content Creation
7. **LMS** — Gestión de Aula y Aprendizaje / Classroom & Learning Management
8. **OER** — Recursos Educativos Abiertos y Repositorios / Open Educational Resources & Repositories
9. **REG** — Regulación de FP y Catálogos Oficiales / Vocational Education Regulations & Catalogs
10. **SEC** — Cálculo y Diseño de Energía Solar / Solar Energy Calculation & Design Tools
11. **TOU** — Turismo, Hostelería y Gestión de Destinos / Tourism & Destination Management
12. **TST** — Herramientas de Simulación Técnica y Taller / Technical Simulation & Workshop Tools
