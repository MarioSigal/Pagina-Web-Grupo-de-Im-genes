/* ==========================================================================
   PollenBB16 & Research Projects — Visual Gallery
   100% Portable & Autonomous (Zero server, zero internet needed)
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("gallery");
  const menuToggle = document.getElementById("menu-toggle");
  const drawer = document.getElementById("projects-drawer");
  const drawerClose = document.getElementById("drawer-close");

  const senasView = document.getElementById("senas-view");
  const senasAsado = document.getElementById("senas-asado");
  const senasHambre = document.getElementById("senas-hambre");
  const senasMoneda = document.getElementById("senas-moneda");
  const senasParir = document.getElementById("senas-parir");
  const senasDemo = document.getElementById("senas-demo");
  const senasVideos = [senasAsado, senasHambre, senasMoneda, senasParir, senasDemo];

  const gsfView = document.getElementById("gsf-view");
  const gsfSlide1 = document.getElementById("gsf-slide-1");
  const gsfSlide2 = document.getElementById("gsf-slide-2");
  const gsfSlide3 = document.getElementById("gsf-slide-3");

  const mriView = document.getElementById("mri-view");
  const mriSlide1 = document.getElementById("mri-slide-1");
  const mriSlide2 = document.getElementById("mri-slide-2");

  const joystickView = document.getElementById("joystick-view");
  const joystickVideo1 = document.getElementById("joystick-video-1");
  const joystickVideo2 = document.getElementById("joystick-video-2");
  const backToPollenJoystick = document.getElementById("back-to-pollen-joystick");

  const semaforosView = document.getElementById("semaforos-view");
  const semaforosVideo1 = document.getElementById("semaforos-video-1");
  const semaforosVideo2 = document.getElementById("semaforos-video-2");
  const backToPollenSemaforos = document.getElementById("back-to-pollen-semaforos");

  const placeholderView = document.getElementById("placeholder-view");
  const placeholderTitle = document.getElementById("placeholder-title");
  const placeholderAuthor = document.getElementById("placeholder-author");
  const placeholderDesc = document.getElementById("placeholder-desc");
  const placeholderBadge = document.getElementById("placeholder-badge");
  const backToPollenBtn = document.getElementById("back-to-pollen");
  const placeholderBackBtn = document.getElementById("placeholder-back-btn");
  const projectCards = document.querySelectorAll(".project-card");

  // Lista consolidada de todos los videos continuos tipo GIF
  const allLoopVideos = [
    senasAsado,
    senasHambre,
    senasMoneda,
    senasParir,
    senasDemo,
    joystickVideo1,
    joystickVideo2,
    semaforosVideo1,
    semaforosVideo2
  ];

  // Lightbox Modal para fotos Maps, Modelo y Diapositivas GSF
  const imageModal = document.getElementById("image-modal");
  const modalImg = document.getElementById("modal-img");
  const modalCaption = document.getElementById("modal-caption");
  const modalClose = document.getElementById("modal-close");
  const cardPhotoMaps = document.getElementById("card-photo-maps");
  const cardPhotoModelo = document.getElementById("card-photo-modelo");

  // 1. Control del Panel Desplegable Blanco de Proyectos
  if (menuToggle && drawer) {
    menuToggle.addEventListener("click", () => {
      drawer.classList.toggle("hidden");
    });
  }

  if (drawerClose && drawer) {
    drawerClose.addEventListener("click", () => {
      drawer.classList.add("hidden");
    });
  }

  if (drawer) {
    drawer.addEventListener("click", (e) => {
      if (e.target === drawer) {
        drawer.classList.add("hidden");
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        if (!drawer.classList.contains("hidden")) {
          drawer.classList.add("hidden");
        }
        if (imageModal && !imageModal.classList.contains("hidden")) {
          imageModal.classList.add("hidden");
        }
      }
    });
  }

  // Helper: Pausar todos los videos de las pestañas
  function pauseAllVideos() {
    allLoopVideos.forEach((vid) => {
      if (vid) {
        try {
          vid.pause();
        } catch (_) {}
      }
    });
  }

  // Helper: Iniciar video en modo loop continuo tipo GIF
  function playVideoLoop(vid) {
    if (vid) {
      if (vid.readyState === 0) {
        vid.load();
      }
      vid.currentTime = 0;
      const promise = vid.play();
      if (promise !== undefined) {
        promise.catch(() => {
          // Autoplay silenciado siempre está permitido por navegadores modernos
        });
      }
    }
  }

  // Helper: Ocultar todas las vistas
  function hideAllViews() {
    if (container) container.classList.add("hidden");
    if (senasView) senasView.classList.add("hidden");
    if (gsfView) gsfView.classList.add("hidden");
    if (mriView) mriView.classList.add("hidden");
    if (joystickView) joystickView.classList.add("hidden");
    if (semaforosView) semaforosView.classList.add("hidden");
    if (placeholderView) placeholderView.classList.add("hidden");
  }

  // 2. Navegación y Cambio de Proyectos
  function switchProject(projectId, cardElement) {
    // Actualizar clase activa en las tarjetas del panel
    projectCards.forEach((card) => {
      if (card.dataset.project === projectId) {
        card.classList.add("active-project");
      } else {
        card.classList.remove("active-project");
      }
    });

    // Cerrar el drawer
    if (drawer) {
      drawer.classList.add("hidden");
    }

    // Pausar reproducción activa y ocultar vistas
    pauseAllVideos();
    hideAllViews();

    // Actualizar hash en la URL para navegación directa
    try {
      history.replaceState(null, "", `#${projectId}`);
    } catch (_) {}

    // Cambiar a la vista seleccionada
    if (projectId === "pollen") {
      if (container) container.classList.remove("hidden");
      document.title = "PollenBB16 — Galería Visual (Original | YOLO | SAM)";
    } else if (projectId === "senas") {
      if (senasView) senasView.classList.remove("hidden");
      senasVideos.forEach(playVideoLoop);
      document.title = "Reconocedor Automático de Señas Argentinas (LSA64)";
    } else if (projectId === "gsf") {
      if (gsfView) gsfView.classList.remove("hidden");
      document.title = "Gate-Shift-Fuse (GSF) — Roni Barylko";
    } else if (projectId === "mri") {
      if (mriView) mriView.classList.remove("hidden");
      document.title = "Infiltración Oculta en Glioblastoma (MRI) — Dra. Cecilia Ana Suárez";
    } else if (projectId === "joystick") {
      if (joystickView) joystickView.classList.remove("hidden");
      playVideoLoop(joystickVideo1);
      playVideoLoop(joystickVideo2);
      document.title = "Mapping de Inputs de un Joystick — Nicolas Matias Yañez";
    } else if (projectId === "semaforos") {
      if (semaforosView) semaforosView.classList.remove("hidden");
      playVideoLoop(semaforosVideo1);
      playVideoLoop(semaforosVideo2);
      document.title = "Optimización de Semáforos con RL (SUMO & YOLO)";
    } else {
      // Otros proyectos en desarrollo (placeholder genérico)
      if (cardElement && placeholderView) {
        const titleEl = cardElement.querySelector("h4");
        const paragraphs = cardElement.querySelectorAll("p");
        const statusEl = cardElement.querySelector(".project-status");

        if (placeholderTitle && titleEl) placeholderTitle.textContent = titleEl.textContent;
        if (placeholderAuthor && paragraphs.length > 1) {
          const author = paragraphs[1].textContent;
          const degree = paragraphs.length > 2 ? paragraphs[2].textContent : "";
          const year = paragraphs.length > 3 ? paragraphs[3].textContent : "";
          placeholderAuthor.innerHTML = `<strong>${author}</strong> · ${degree} · ${year}`;
        }
        if (placeholderDesc && paragraphs.length > 0) {
          placeholderDesc.textContent = paragraphs[0].textContent;
        }
        if (placeholderBadge && statusEl) {
          placeholderBadge.textContent = statusEl.textContent;
          if (statusEl.classList.contains("future")) {
            placeholderBadge.className = "project-badge future-badge";
          } else {
            placeholderBadge.className = "project-badge status-badge";
          }
        }
        placeholderView.classList.remove("hidden");
      }
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Permitir pausar/reanudar con un clic en cualquiera de los videos GIF continuos
  allLoopVideos.forEach((vid) => {
    if (vid) {
      vid.addEventListener("click", () => {
        if (vid.paused) {
          vid.play();
        } else {
          vid.pause();
        }
      });
    }
  });

  // Manejo de Lightbox Modal para fotos Maps, Modelo y Diapositivas GSF
  function openImageModal(src, caption) {
    if (imageModal && modalImg) {
      modalImg.src = src;
      if (modalCaption) modalCaption.textContent = caption;
      imageModal.classList.remove("hidden");
    }
  }

  if (cardPhotoMaps) {
    cardPhotoMaps.addEventListener("click", () => {
      openImageModal("assets/semaforos/maps.jpeg", "Google Maps — Zona Av. Maipú y Carlos Villate (Vicente López)");
    });
  }

  if (cardPhotoModelo) {
    cardPhotoModelo.addEventListener("click", () => {
      openImageModal("assets/semaforos/modelo.jpeg", "Red de Tráfico Digital — Modelo SUMO generado automáticamente");
    });
  }

  // Clic en diapositivas GSF para ampliar en modal
  if (gsfSlide1) {
    gsfSlide1.addEventListener("click", () => {
      openImageModal("assets/GSF/slide_1.png", "Diapositiva 1 / 3 · ¿Qué es GSF? Transformación 2D a detector de acciones");
    });
  }
  if (gsfSlide2) {
    gsfSlide2.addEventListener("click", () => {
      openImageModal("assets/GSF/slide_2.png", "Diapositiva 2 / 3 · ¿Para qué sirve? Mismos frames, distinto orden");
    });
  }
  if (gsfSlide3) {
    gsfSlide3.addEventListener("click", () => {
      openImageModal("assets/GSF/slide_3.png", "Diapositiva 3 / 3 · ¿Cómo funciona? Gate, Shift, Fuse por canal");
    });
  }

  // Clic en diapositivas MRI para ampliar en modal
  if (mriSlide1) {
    mriSlide1.addEventListener("click", (e) => {
      if (e.target.closest(".slide-fs-btn")) return;
      openImageModal("assets/MRI/slide_1_graphical_abstract.png", "Diapositiva 1 / 2 · Graphical Abstract: Combined Deep Learning Strategy for Preoperative Hidden Infiltration Identification (Dra. Cecilia Suárez)");
    });
  }
  if (mriSlide2) {
    mriSlide2.addEventListener("click", (e) => {
      if (e.target.closest(".slide-fs-btn")) return;
      openImageModal("assets/MRI/slide_2_microservicios.png", "Diapositiva 2 / 2 · Arquitectura de Microservicios para la Detección de Infiltración Tumoral Oculta en Glioblastoma (Dra. Cecilia Suárez)");
    });
  }

  // Soporte de Pantalla Completa nativa para diapositivas
  document.querySelectorAll(".slide-fs-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const targetId = btn.dataset.target;
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        if (!document.fullscreenElement) {
          if (targetEl.requestFullscreen) {
            targetEl.requestFullscreen();
          } else if (targetEl.webkitRequestFullscreen) {
            targetEl.webkitRequestFullscreen();
          }
        } else {
          if (document.exitFullscreen) {
            document.exitFullscreen();
          }
        }
      }
    });
  });

  if (modalClose && imageModal) {
    modalClose.addEventListener("click", () => {
      imageModal.classList.add("hidden");
    });
  }

  if (imageModal) {
    imageModal.addEventListener("click", (e) => {
      if (e.target === imageModal) {
        imageModal.classList.add("hidden");
      }
    });
  }

  // Asignar eventos de clic a cada tarjeta de proyecto del menú
  projectCards.forEach((card) => {
    card.addEventListener("click", () => {
      const proj = card.dataset.project;
      if (proj) {
        switchProject(proj, card);
      }
    });
  });

  // Botones para volver a la galería de polen
  if (backToPollenBtn) {
    backToPollenBtn.addEventListener("click", () => switchProject("pollen"));
  }
  if (backToPollenJoystick) {
    backToPollenJoystick.addEventListener("click", () => switchProject("pollen"));
  }
  if (backToPollenSemaforos) {
    backToPollenSemaforos.addEventListener("click", () => switchProject("pollen"));
  }
  if (placeholderBackBtn) {
    placeholderBackBtn.addEventListener("click", () => switchProject("pollen"));
  }

  // 3. Cargar datos autónomos desde data.js para PollenBB16
  const data = window.POLLEN_GALLERY_DATA || [];

  if (!container || data.length === 0) {
    if (container) {
      container.innerHTML = "<p style='color:#fff; padding:20px;'>No se encontraron datos en data.js</p>";
    }
    return;
  }

  // 4. Renderizar cada fila de 3 imágenes: [Original | YOLO | SAM]
  // En reposo son 1:1 cuadradas; al hacer clic en una, se abre en formato 16:9
  data.forEach((item, idx) => {
    const row = document.createElement("div");
    row.className = "pollen-row";
    row.id = `row-${item.id}`;

    row.innerHTML = `
      <!-- 1. Foto Original -->
      <div class="photo-cell" data-type="Original" title="${item.sci} (${item.common}) - ${item.grains} granos - Clic para abrir en 16:9">
        <img src="${item.orig}" alt="${item.sci} Original" loading="${idx < 6 ? 'eager' : 'lazy'}">
        <div class="expand-indicator"><span>16:9</span> · Clic para volver</div>
        <div class="photo-tag tag-orig">
          <span>Original</span>
          <span class="species-name">${item.sci}</span>
          <span class="grains-count">(${item.grains} granos)</span>
        </div>
      </div>

      <!-- 2. Foto YOLO -->
      <div class="photo-cell" data-type="YOLO" title="${item.sci} (${item.common}) - ${item.grains} granos - Clic para abrir en 16:9">
        <img src="${item.yolo}" alt="${item.sci} YOLO" loading="${idx < 6 ? 'eager' : 'lazy'}">
        <div class="expand-indicator"><span>16:9</span> · Clic para volver</div>
        <div class="photo-tag tag-yolo">
          <span>YOLO</span>
          <span class="species-name">${item.sci}</span>
          <span class="grains-count">(${item.grains} granos)</span>
        </div>
      </div>

      <!-- 3. Foto SAM -->
      <div class="photo-cell" data-type="SAM" title="${item.sci} (${item.common}) - ${item.grains} granos - Clic para abrir en 16:9">
        <img src="${item.sam}" alt="${item.sci} SAM" loading="${idx < 6 ? 'eager' : 'lazy'}">
        <div class="expand-indicator"><span>16:9</span> · Clic para volver</div>
        <div class="photo-tag tag-sam">
          <span>SAM</span>
          <span class="species-name">${item.sci}</span>
          <span class="grains-count">(${item.grains} granos)</span>
        </div>
      </div>
    `;

    // Manejador de clic: abrir la celda seleccionada a 16:9 o cerrarla si ya está abierta
    const cells = row.querySelectorAll(".photo-cell");
    cells.forEach((cell) => {
      cell.addEventListener("click", () => {
        const isAlreadyExpanded = cell.classList.contains("is-expanded");

        // Cerrar cualquier celda abierta en esta fila
        cells.forEach((c) => c.classList.remove("is-expanded"));
        row.classList.remove("has-expanded");

        // Si no estaba abierta, abrirla en 16:9
        if (!isAlreadyExpanded) {
          cell.classList.add("is-expanded");
          row.classList.add("has-expanded");
        }
      });
    });

    container.appendChild(row);
  });

  // 5. Cargar proyecto inicial según hash en la URL (ej: #senas, #gsf, #joystick, #semaforos)
  const initialHash = window.location.hash.replace("#", "");
  if (initialHash && initialHash !== "pollen") {
    const matchingCard = Array.from(projectCards).find((c) => c.dataset.project === initialHash);
    if (matchingCard) {
      switchProject(initialHash, matchingCard);
    }
  }
});

