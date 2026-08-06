<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <title>Cinema Studio Pro (RAW, DNG & Transform)</title>
  
  <!-- Декодирование HEIC/HEIF -->
  <script src="https://cdn.jsdelivr.net/npm/heic2any@0.0.4/dist/heic2any.min.js"></script>
  <!-- Декодирование DNG/RAW -->
  <script src="https://cdn.jsdelivr.net/npm/utif@3.1.0/UTIF.min.js"></script>

  <style>
    :root {
      --bg-color: #0d0d0f;
      --card-color: #17171a;
      --panel-color: #212126;
      --accent-color: #ffffff;
      --active-blue: #3a86ff;
      --text-main: #f0f0f2;
      --text-muted: #9e9ea8;
      --border-color: #2c2c34;
      --crop-grid-color: rgba(255, 255, 255, 0.45);
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      -webkit-tap-highlight-color: transparent;
    }

    body {
      background-color: var(--bg-color);
      color: var(--text-main);
      display: flex;
      flex-direction: column;
      height: 100vh;
      height: 100dvh;
      overflow: hidden;
      user-select: none;
    }

    .navbar {
      height: 52px;
      background: var(--card-color);
      border-bottom: 1px solid var(--border-color);
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 12px;
      flex-shrink: 0;
      z-index: 30;
    }

    .brand {
      font-size: 14px;
      font-weight: 700;
      letter-spacing: 0.5px;
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .brand-icon {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: linear-gradient(135deg, #fff 50%, #333 50%);
      border: 1px solid #fff;
    }

    .nav-actions {
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .format-select {
      background: var(--panel-color);
      border: 1px solid var(--border-color);
      color: var(--text-main);
      padding: 6px 8px;
      border-radius: 8px;
      font-size: 12px;
      font-weight: 600;
      outline: none;
      cursor: pointer;
    }

    .app-container {
      display: flex;
      flex: 1;
      position: relative;
      overflow: hidden;
    }

    .viewport {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 12px;
      background-image: radial-gradient(#22222a 1px, transparent 0);
      background-size: 20px 20px;
      overflow: hidden;
    }

    .canvas-container {
      position: relative;
      max-width: 100%;
      max-height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0 16px 40px rgba(0,0,0,0.7);
    }

    canvas {
      max-width: 100%;
      max-height: 100%;
      width: auto;
      height: auto;
      object-fit: contain;
      display: block;
    }

    .placeholder-btn {
      padding: 18px 32px;
      font-size: 15px;
      font-weight: 600;
      background: var(--card-color);
      color: var(--text-main);
      border: 1.5px dashed var(--border-color);
      border-radius: 12px;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
    }

    .loading-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(13, 13, 15, 0.85);
      backdrop-filter: blur(8px);
      display: none;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 16px;
      z-index: 50;
    }

    .loading-overlay.active { display: flex; }

    .spinner {
      width: 36px;
      height: 36px;
      border: 3px solid rgba(255,255,255,0.1);
      border-radius: 50%;
      border-top-color: var(--active-blue);
      animation: spin 0.8s linear infinite;
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }

    .loading-text {
      font-size: 13px;
      font-weight: 600;
      color: var(--text-main);
    }

    .dim-badge {
      position: absolute;
      top: 12px;
      left: 12px;
      background: rgba(0, 0, 0, 0.75);
      color: var(--text-main);
      padding: 5px 10px;
      border-radius: 6px;
      font-size: 11px;
      font-family: monospace;
      border: 1px solid var(--border-color);
      backdrop-filter: blur(4px);
      display: none;
      z-index: 4;
      pointer-events: none;
    }

    /* Оверлей кадрирования */
    .crop-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      display: none;
      z-index: 5;
    }

    .crop-overlay.active { display: block; }

    .crop-box {
      position: absolute;
      box-sizing: border-box;
      border: 2px solid #ffffff;
      background: transparent !important;
      box-shadow: 0 0 0 9999px rgba(0, 0, 0, 0.65);
      pointer-events: auto;
      touch-action: none;
      cursor: move;
    }

    .crop-grid {
      width: 100%;
      height: 100%;
      position: relative;
      background: transparent;
    }

    .crop-grid::before, .crop-grid::after {
      content: '';
      position: absolute;
      pointer-events: none;
    }

    .crop-grid::before {
      top: 33.33%;
      bottom: 33.33%;
      left: 0;
      right: 0;
      border-top: 1px dashed var(--crop-grid-color);
      border-bottom: 1px dashed var(--crop-grid-color);
    }

    .crop-grid::after {
      left: 33.33%;
      right: 33.33%;
      top: 0;
      bottom: 0;
      border-left: 1px dashed var(--crop-grid-color);
      border-right: 1px dashed var(--crop-grid-color);
    }

    .handle {
      position: absolute;
      width: 24px;
      height: 24px;
      background: #ffffff;
      border: 2px solid #000;
      border-radius: 50%;
      pointer-events: auto;
      touch-action: none;
    }

    .handle.nw { top: -12px; left: -12px; cursor: nwse-resize; }
    .handle.ne { top: -12px; right: -12px; cursor: nesw-resize; }
    .handle.sw { bottom: -12px; left: -12px; cursor: nesw-resize; }
    .handle.se { bottom: -12px; right: -12px; cursor: nwse-resize; }

    /* Выдвижная панель */
    .sidebar {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 380px;
      max-height: 62vh;
      background-color: var(--card-color);
      border-top: 1px solid var(--border-color);
      border-top-left-radius: 16px;
      border-top-right-radius: 16px;
      display: flex;
      flex-direction: column;
      z-index: 20;
      box-shadow: 0 -8px 30px rgba(0,0,0,0.6);
      transform: translateY(calc(100% - 50px));
      transition: transform 0.25s cubic-bezier(0.1, 0.9, 0.2, 1);
      touch-action: none;
    }

    .sidebar.expanded { transform: translateY(0); }

    .drag-handle-bar {
      width: 100%;
      height: 14px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: grab;
      padding-top: 4px;
    }

    .drag-handle-pill {
      width: 36px;
      height: 4px;
      background-color: var(--border-color);
      border-radius: 2px;
    }

    .tabs {
      display: flex;
      background: var(--card-color);
      border-bottom: 1px solid var(--border-color);
      cursor: pointer;
    }

    .tab-btn {
      flex: 1;
      padding: 10px 8px;
      font-size: 13px;
      font-weight: 600;
      background: none;
      border: none;
      color: var(--text-muted);
      cursor: pointer;
      border-bottom: 2px solid transparent;
      white-space: nowrap;
    }

    .tab-btn.active {
      color: var(--text-main);
      border-bottom-color: var(--accent-color);
    }

    .tab-content {
      flex: 1;
      padding: 16px;
      overflow-y: auto;
      display: none;
      touch-action: pan-y;
    }

    .tab-content.active { display: block; }

    .section-title {
      font-size: 11px;
      font-weight: 700;
      color: var(--text-muted);
      text-transform: uppercase;
      letter-spacing: 0.8px;
      margin-bottom: 10px;
      margin-top: 12px;
    }

    .section-title:first-child { margin-top: 0; }

    .presets-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 8px;
    }

    .preset-btn {
      background: var(--panel-color);
      border: 1px solid var(--border-color);
      color: var(--text-main);
      padding: 10px 6px;
      border-radius: 8px;
      cursor: pointer;
      font-size: 12px;
      font-weight: 500;
    }

    .preset-btn.active {
      background: var(--accent-color);
      color: #000;
      font-weight: 700;
    }

    .transform-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 8px;
      margin-bottom: 12px;
    }

    .ratios-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 8px;
      margin-bottom: 12px;
    }

    .ratio-btn {
      background: var(--panel-color);
      border: 1px solid var(--border-color);
      color: var(--text-main);
      padding: 8px 4px;
      border-radius: 8px;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2px;
    }

    .ratio-btn span.ratio-num { font-size: 12px; font-weight: 700; }
    .ratio-btn span.ratio-desc { font-size: 9px; color: var(--text-muted); }

    .ratio-btn.active {
      border-color: var(--active-blue);
      background: rgba(58, 134, 255, 0.15);
      color: #fff;
    }

    .control-group {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .control {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .control label {
      display: flex;
      justify-content: space-between;
      font-size: 12px;
    }

    .control label span { color: var(--text-muted); font-family: monospace; }

    .control input[type="range"] {
      width: 100%;
      height: 6px;
      accent-color: var(--accent-color);
    }

    .btn {
      padding: 9px 12px;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      font-weight: 600;
      font-size: 12px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      user-select: none;
    }

    .btn-primary { background-color: var(--accent-color); color: #000; }
    .btn-secondary { background-color: var(--panel-color); border: 1px solid var(--border-color); color: var(--text-main); }
    .btn-blue { background-color: var(--active-blue); color: #fff; }
    .btn-full { width: 100%; }

    .crop-actions { display: flex; gap: 8px; margin-top: 8px; }
    #file-input { display: none; }

    @media (min-width: 900px) {
      .viewport { bottom: 0 !important; right: 340px; }
      .sidebar {
        top: 0;
        right: 0;
        left: auto;
        bottom: 0;
        width: 340px;
        height: 100% !important;
        max-height: 100%;
        border-top: none;
        border-left: 1px solid var(--border-color);
        border-radius: 0;
        transform: none !important;
        box-shadow: none;
      }
      .drag-handle-bar { display: none; }
      .ratios-grid { grid-template-columns: repeat(2, 1fr); }
      .presets-grid { grid-template-columns: repeat(2, 1fr); }
    }
  </style>
</head>
<body>

  <header class="navbar">
    <div class="brand">
      <div class="brand-icon"></div>
      <span>Cinema Studio</span>
    </div>
    <div class="nav-actions">
      <button class="btn btn-secondary" id="toggle-panel-btn" disabled>Меню ▲</button>
      <button class="btn btn-secondary" id="open-file-btn">Открыть</button>
      <select class="format-select" id="export-format">
        <option value="image/jpeg">JPEG</option>
        <option value="image/png">PNG</option>
      </select>
      <button class="btn btn-primary" id="download-btn" disabled>Скачать</button>
    </div>
  </header>

  <div class="app-container">
    <div class="viewport" id="viewport">
      <button class="placeholder-btn" id="upload-trigger">
        <span>Выбрать фото (JPG, PNG, HEIC, DNG)</span>
      </button>

      <div class="canvas-container" id="canvas-container" style="display: none;">
        <canvas id="canvas"></canvas>
        <div class="crop-overlay" id="crop-overlay">
          <div class="crop-box" id="crop-box">
            <div class="crop-grid"></div>
            <div class="handle nw" data-handle="nw"></div>
            <div class="handle ne" data-handle="ne"></div>
            <div class="handle sw" data-handle="sw"></div>
            <div class="handle se" data-handle="se"></div>
          </div>
        </div>
      </div>

      <div class="dim-badge" id="dim-badge">0 × 0 px</div>
      <input type="file" id="file-input" accept="image/*,.heic,.heif,.dng,.cr2,.nef,.arw,.raw">
    </div>

    <!-- Индикатор загрузки -->
    <div class="loading-overlay" id="loading-overlay">
      <div class="spinner"></div>
      <div class="loading-text" id="loading-text">Декодирование снимка...</div>
    </div>

    <!-- ВЫДВИЖНАЯ ПАНЕЛЬ МЕНЮ -->
    <div class="sidebar" id="sidebar">
      <div class="drag-handle-bar" id="drag-handle">
        <div class="drag-handle-pill"></div>
      </div>

      <div class="tabs" id="tabs-bar">
        <button class="tab-btn active" data-tab="tab-presets">Стиль / ЧБ</button>
        <button class="tab-btn" data-tab="tab-crop">Кадрирование</button>
        <button class="tab-btn" data-tab="tab-adjust">Коррекция</button>
      </div>

      <!-- Вкладка пресетов -->
      <div class="tab-content active" id="tab-presets">
        <div class="section-title">Режим цвета</div>
        <div class="presets-grid" style="margin-bottom: 12px;">
          <button class="preset-btn active" id="mode-bw-btn">Черно-белое</button>
          <button class="preset-btn" id="mode-color-btn" style="grid-column: span 2;">Без фильтров (Цвет)</button>
        </div>

        <div class="section-title">ЧБ Пресеты</div>
        <div class="presets-grid">
          <button class="preset-btn" data-preset="classic">Классика</button>
          <button class="preset-btn" data-preset="contrast">Контраст</button>
          <button class="preset-btn" data-preset="noir">Нуар</button>
          <button class="preset-btn" data-preset="soft">Мягкий свет</button>
          <button class="preset-btn" data-preset="silver">Серебро</button>
          <button class="preset-btn" data-preset="vintage">Винтаж</button>
        </div>
      </div>

      <!-- Вкладка кадрирования и ориентации -->
      <div class="tab-content" id="tab-crop">
        <div class="section-title">Поворот и Зеркало</div>
        <div class="transform-grid">
          <button class="btn btn-secondary" id="rotate-ccw-btn">⟲ 90° Влево</button>
          <button class="btn btn-secondary" id="rotate-cw-btn">⟳ 90° Вправо</button>
          <button class="btn btn-secondary" id="flip-h-btn">⇄ По гориз.</button>
          <button class="btn btn-secondary" id="flip-v-btn">⇅ По вертик.</button>
        </div>

        <div class="section-title">Соотношения сторон</div>
        <div class="ratios-grid">
          <button class="ratio-btn active" data-ratio="free">
            <span class="ratio-num">Free</span>
            <span class="ratio-desc">Любой</span>
          </button>
          <button class="ratio-btn" data-ratio="2.35">
            <span class="ratio-num">2.35:1</span>
            <span class="ratio-desc">Кино</span>
          </button>
          <button class="ratio-btn" data-ratio="2.39">
            <span class="ratio-num">2.39:1</span>
            <span class="ratio-desc">Scope</span>
          </button>
          <button class="ratio-btn" data-ratio="1.85">
            <span class="ratio-num">1.85:1</span>
            <span class="ratio-desc">Flat</span>
          </button>
          <button class="ratio-btn" data-ratio="1.7777777778">
            <span class="ratio-num">16:9</span>
            <span class="ratio-desc">Wide</span>
          </button>
          <button class="ratio-btn" data-ratio="1.3333333333">
            <span class="ratio-num">4:3</span>
            <span class="ratio-desc">TV</span>
          </button>
          <button class="ratio-btn" data-ratio="1">
            <span class="ratio-num">1:1</span>
            <span class="ratio-desc">Квадрат</span>
          </button>
          <button class="ratio-btn" data-ratio="0.5625">
            <span class="ratio-num">9:16</span>
            <span class="ratio-desc">Stories</span>
          </button>
        </div>

        <div class="crop-actions">
          <button class="btn btn-blue btn-full" id="apply-crop-btn">Применить кадрирование</button>
          <button class="btn btn-secondary" id="reset-crop-btn">Сбросить</button>
        </div>
      </div>

      <!-- Вкладка точной настройки -->
      <div class="tab-content" id="tab-adjust">
        <div class="section-title">Экспозиция и Свет</div>
        <div class="control-group">
          <div class="control">
            <label>Экспозиция <span id="val-brightness">0</span></label>
            <input type="range" id="brightness" min="-100" max="100" value="0">
          </div>
          <div class="control">
            <label>Контраст <span id="val-contrast">0</span></label>
            <input type="range" id="contrast" min="-100" max="100" value="0">
          </div>
          <div class="control">
            <label>Тени (Blacks) <span id="val-shadows">0</span></label>
            <input type="range" id="shadows" min="-100" max="100" value="0">
          </div>
          <div class="control">
            <label>Света (Highlights) <span id="val-highlights">0</span></label>
            <input type="range" id="highlights" min="-100" max="100" value="0">
          </div>
          <div class="control">
            <label>Виньетка <span id="val-vignette">0</span></label>
            <input type="range" id="vignette" min="0" max="100" value="0">
          </div>
        </div>

        <div class="section-title">Пленочные эффекты</div>
        <div class="control-group">
          <div class="control">
            <label>Зернистость <span id="val-grain">0</span></label>
            <input type="range" id="grain" min="0" max="60" value="0">
          </div>
          <div class="control">
            <label>Пыль и царапины <span id="val-dust">0</span></label>
            <input type="range" id="dust" min="0" max="100" value="0">
          </div>
        </div>

        <div class="section-title">Тонирование</div>
        <div class="control-group">
          <div class="control">
            <label>Сепия <span id="val-sepia">0</span></label>
            <input type="range" id="sepia" min="0" max="100" value="0">
          </div>
          <div class="control">
            <label>Тон теней <span id="val-shadowsTint">0</span></label>
            <input type="range" id="shadowsTint" min="-100" max="100" value="0">
          </div>
          <div class="control">
            <label>Тон светов <span id="val-highlightsTint">0</span></label>
            <input type="range" id="highlightsTint" min="-100" max="100" value="0">
          </div>
          <button class="btn btn-secondary btn-full" id="reset-sliders-btn" style="margin-top: 6px;">Сбросить всё</button>
        </div>
      </div>
    </div>
  </div>

  <script>
    const fileInput = document.getElementById('file-input');
    const uploadTrigger = document.getElementById('upload-trigger');
    const openFileBtn = document.getElementById('open-file-btn');
    const downloadBtn = document.getElementById('download-btn');
    const togglePanelBtn = document.getElementById('toggle-panel-btn');
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const canvasContainer = document.getElementById('canvas-container');
    const cropOverlay = document.getElementById('crop-overlay');
    const cropBox = document.getElementById('crop-box');
    const dimBadge = document.getElementById('dim-badge');
    const sidebar = document.getElementById('sidebar');
    const dragHandle = document.getElementById('drag-handle');
    const tabsBar = document.getElementById('tabs-bar');

    const loadingOverlay = document.getElementById('loading-overlay');
    const loadingText = document.getElementById('loading-text');

    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    let originalImage = null;
    let isCropMode = false;
    let isBWMode = true;
    let targetAspectRatio = null;

    let cropRect = { x: 0, y: 0, w: 0, h: 0 };
    let boxRect = { left: 0, top: 0, width: 0, height: 0 };

    const controls = {
      brightness: document.getElementById('brightness'),
      contrast: document.getElementById('contrast'),
      shadows: document.getElementById('shadows'),
      highlights: document.getElementById('highlights'),
      vignette: document.getElementById('vignette'),
      grain: document.getElementById('grain'),
      dust: document.getElementById('dust'),
      sepia: document.getElementById('sepia'),
      shadowsTint: document.getElementById('shadowsTint'),
      highlightsTint: document.getElementById('highlightsTint')
    };

    /* ШТОРКА МЕНЮ */
    function toggleSidebar(forceState) {
      if (window.innerWidth >= 900) return;
      const isExpanded = (typeof forceState === 'boolean') ? forceState : !sidebar.classList.contains('expanded');
      sidebar.classList.toggle('expanded', isExpanded);
      togglePanelBtn.textContent = isExpanded ? 'Меню ▼' : 'Меню ▲';
    }

    togglePanelBtn.addEventListener('click', () => toggleSidebar());
    dragHandle.addEventListener('click', () => toggleSidebar());
    tabsBar.addEventListener('click', () => { if (!sidebar.classList.contains('expanded')) toggleSidebar(true); });

    let sheetStartY = 0, isDraggingSheet = false;
    dragHandle.addEventListener('pointerdown', (e) => {
      isDraggingSheet = true;
      sheetStartY = e.clientY;
      dragHandle.setPointerCapture(e.pointerId);
    });

    dragHandle.addEventListener('pointermove', (e) => {
      if (!isDraggingSheet) return;
      const dy = e.clientY - sheetStartY;
      if (dy < -25) { toggleSidebar(true); isDraggingSheet = false; }
      else if (dy > 25) { toggleSidebar(false); isDraggingSheet = false; }
    });

    dragHandle.addEventListener('pointerup', () => { isDraggingSheet = false; });

    /* РЕЖИМЫ ЦВЕТА */
    const modeBwBtn = document.getElementById('mode-bw-btn');
    const modeColorBtn = document.getElementById('mode-color-btn');

    modeBwBtn.addEventListener('click', () => {
      isBWMode = true;
      modeBwBtn.classList.add('active');
      modeColorBtn.classList.remove('active');
      applyFilters();
    });

    modeColorBtn.addEventListener('click', () => {
      isBWMode = false;
      modeColorBtn.classList.add('active');
      modeBwBtn.classList.remove('active');
      document.querySelectorAll('[data-preset]').forEach(b => b.classList.remove('active'));
      applyFilters();
    });

    /* ВКЛАДКИ */
    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));

        btn.classList.add('active');
        document.getElementById(btn.dataset.tab).classList.add('active');

        if (btn.dataset.tab === 'tab-crop') enableCropMode();
        else disableCropMode();
      });
    });

    /* ФУНКЦИЯ ДЕКОДИРОВАНИЯ EXIF ОРИЕНТАЦИИ */
    function orientCanvas(srcCanvas, orientation) {
      if (orientation <= 1) return srcCanvas;

      const w = srcCanvas.width;
      const h = srcCanvas.height;
      const outCanvas = document.createElement('canvas');
      const outCtx = outCanvas.getContext('2d');

      if (orientation >= 5 && orientation <= 8) {
        outCanvas.width = h;
        outCanvas.height = w;
      } else {
        outCanvas.width = w;
        outCanvas.height = h;
      }

      switch (orientation) {
        case 2: outCtx.transform(-1, 0, 0, 1, w, 0); break;
        case 3: outCtx.transform(-1, 0, 0, -1, w, h); break;
        case 4: outCtx.transform(1, 0, 0, -1, 0, h); break;
        case 5: outCtx.transform(0, 1, 1, 0, 0, 0); break;
        case 6: outCtx.transform(0, 1, -1, 0, h, 0); break;
        case 7: outCtx.transform(0, -1, -1, 0, h, w); break;
        case 8: outCtx.transform(0, -1, 1, 0, 0, w); break;
      }

      outCtx.drawImage(srcCanvas, 0, 0);
      return outCanvas;
    }

    /* ЗАГРУЗКА И ДЕКОДИРОВАНИЕ */
    uploadTrigger.addEventListener('click', () => fileInput.click());
    openFileBtn.addEventListener('click', () => fileInput.click());
    fileInput.addEventListener('change', handleImageUpload);

    function showLoading(msg) {
      loadingText.textContent = msg || 'Декодирование файла...';
      loadingOverlay.classList.add('active');
    }

    function hideLoading() {
      loadingOverlay.classList.remove('active');
    }

    function resetAppData() {
      Object.keys(controls).forEach(key => {
        controls[key].value = 0;
        document.getElementById(`val-${key}`).textContent = 0;
      });
      isBWMode = true;
      modeBwBtn.classList.add('active');
      modeColorBtn.classList.remove('active');
      document.querySelectorAll('[data-preset]').forEach(b => b.classList.remove('active'));
      targetAspectRatio = null;
      document.querySelectorAll('.ratio-btn').forEach(b => b.classList.remove('active'));
      document.querySelector('.ratio-btn[data-ratio="free"]').classList.add('active');
    }

    async function handleImageUpload(e) {
      const file = e.target.files[0];
      if (!file) return;

      const fileName = file.name.toLowerCase();
      showLoading('Чтение файла...');

      try {
        let imageSrc = null;

        if (fileName.endsWith('.heic') || fileName.endsWith('.heif')) {
          showLoading('Конвертация HEIC файла...');
          const conversionResult = await heic2any({ blob: file, toType: 'image/jpeg', quality: 0.92 });
          const blob = Array.isArray(conversionResult) ? conversionResult[0] : conversionResult;
          imageSrc = URL.createObjectURL(blob);
        }
        else if (fileName.endsWith('.dng') || fileName.endsWith('.raw') || fileName.endsWith('.cr2') || fileName.endsWith('.nef') || fileName.endsWith('.arw')) {
          showLoading('Декодирование RAW/DNG структуры...');
          const buffer = await file.arrayBuffer();
          const ifds = UTIF.decode(buffer);
          if (!ifds || ifds.length === 0) throw new Error('Не удалось прочитать RAW заголовок.');

          UTIF.decodeImage(buffer, ifds[0]);
          const rgba = UTIF.toRGBA8(ifds[0]);

          let rawCanvas = document.createElement('canvas');
          rawCanvas.width = ifds[0].width;
          rawCanvas.height = ifds[0].height;
          const rawCtx = rawCanvas.getContext('2d');
          const imgData = rawCtx.createImageData(ifds[0].width, ifds[0].height);
          imgData.data.set(rgba);
          rawCtx.putImageData(imgData, 0, 0);

          // Проверка и применение EXIF ориентации
          const tag274 = ifds[0].t274 || ifds[0]['274'];
          const orientation = (tag274 && tag274.length > 0) ? tag274[0] : 1;
          if (orientation > 1) {
            rawCanvas = orientCanvas(rawCanvas, orientation);
          }

          imageSrc = rawCanvas.toDataURL('image/png');
        }
        else {
          imageSrc = await new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = ev => resolve(ev.target.result);
            reader.onerror = reject;
            reader.readAsDataURL(file);
          });
        }

        const newImg = new Image();
        newImg.onload = () => {
          originalImage = newImg;
          resetAppData();

          cropRect = { x: 0, y: 0, w: originalImage.width, h: originalImage.height };
          uploadTrigger.style.display = 'none';
          canvasContainer.style.display = 'flex';
          downloadBtn.disabled = false;
          togglePanelBtn.disabled = false;

          updateDimBadge();
          applyFilters();
          hideLoading();
          toggleSidebar(true);
          if (isCropMode) initCropBox();
        };
        newImg.onerror = () => {
          hideLoading();
          alert('Ошибка загрузки изображения.');
        };
        newImg.src = imageSrc;

      } catch (err) {
        hideLoading();
        console.error(err);
        alert('Ошибка при чтении файла.');
      } finally {
        fileInput.value = '';
      }
    }

    /* ТРАНСФОРМАЦИЯ ИЗОБРАЖЕНИЯ (ПОВОРОТ / ЗЕРКАЛО) */
    function transformImage(type) {
      if (!originalImage) return;

      const srcW = originalImage.width;
      const srcH = originalImage.height;
      const tempCanvas = document.createElement('canvas');
      const tempCtx = tempCanvas.getContext('2d');

      if (type === 'rotate-cw' || type === 'rotate-ccw') {
        tempCanvas.width = srcH;
        tempCanvas.height = srcW;
        tempCtx.translate(tempCanvas.width / 2, tempCanvas.height / 2);
        tempCtx.rotate(type === 'rotate-cw' ? Math.PI / 2 : -Math.PI / 2);
        tempCtx.drawImage(originalImage, -srcW / 2, -srcH / 2);
      } else if (type === 'flip-h') {
        tempCanvas.width = srcW;
        tempCanvas.height = srcH;
        tempCtx.translate(srcW, 0);
        tempCtx.scale(-1, 1);
        tempCtx.drawImage(originalImage, 0, 0);
      } else if (type === 'flip-v') {
        tempCanvas.width = srcW;
        tempCanvas.height = srcH;
        tempCtx.translate(0, srcH);
        tempCtx.scale(1, -1);
        tempCtx.drawImage(originalImage, 0, 0);
      }

      const transformedImg = new Image();
      transformedImg.onload = () => {
        originalImage = transformedImg;
        cropRect = { x: 0, y: 0, w: originalImage.width, h: originalImage.height };
        updateDimBadge();
        applyFilters();
        if (isCropMode) initCropBox();
      };
      transformedImg.src = tempCanvas.toDataURL('image/png');
    }

    document.getElementById('rotate-ccw-btn').addEventListener('click', () => transformImage('rotate-ccw'));
    document.getElementById('rotate-cw-btn').addEventListener('click', () => transformImage('rotate-cw'));
    document.getElementById('flip-h-btn').addEventListener('click', () => transformImage('flip-h'));
    document.getElementById('flip-v-btn').addEventListener('click', () => transformImage('flip-v'));

    function updateDimBadge() {
      if (cropRect.w && cropRect.h) {
        dimBadge.textContent = `${cropRect.w} × ${cropRect.h} px`;
        dimBadge.style.display = 'block';
      } else {
        dimBadge.style.display = 'none';
      }
    }

    Object.keys(controls).forEach(key => {
      controls[key].addEventListener('input', () => {
        document.getElementById(`val-${key}`).textContent = controls[key].value;
        applyFilters();
      });
    });

    const presets = {
      classic:   { brightness: 0, contrast: 10, shadows: 0, highlights: 0, vignette: 0, grain: 0, dust: 0, sepia: 0, shadowsTint: 0, highlightsTint: 0 },
      contrast:  { brightness: 5, contrast: 45, shadows: -20, highlights: 15, vignette: 15, grain: 0, dust: 0, sepia: 0, shadowsTint: 0, highlightsTint: 0 },
      noir:      { brightness: -15, contrast: 60, shadows: -50, highlights: -10, vignette: 40, grain: 20, dust: 15, sepia: 0, shadowsTint: -20, highlightsTint: 10 },
      soft:      { brightness: 10, contrast: -20, shadows: 20, highlights: -15, vignette: 10, grain: 0, dust: 0, sepia: 0, shadowsTint: 10, highlightsTint: -10 },
      silver:    { brightness: 15, contrast: 25, shadows: 10, highlights: 30, vignette: 20, grain: 5, dust: 0, sepia: 0, shadowsTint: -30, highlightsTint: 20 },
      vintage:   { brightness: -5, contrast: 5, shadows: 10, highlights: -10, vignette: 30, grain: 25, dust: 30, sepia: 35, shadowsTint: 20, highlightsTint: 40 }
    };

    document.querySelectorAll('[data-preset]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const preset = presets[e.target.dataset.preset];
        if (!preset) return;

        isBWMode = true;
        modeBwBtn.classList.add('active');
        modeColorBtn.classList.remove('active');

        Object.keys(preset).forEach(key => {
          controls[key].value = preset[key];
          document.getElementById(`val-${key}`).textContent = preset[key];
        });

        document.querySelectorAll('[data-preset]').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');

        applyFilters();
      });
    });

    document.getElementById('reset-sliders-btn').addEventListener('click', () => {
      Object.keys(controls).forEach(key => {
        controls[key].value = 0;
        document.getElementById(`val-${key}`).textContent = 0;
      });
      applyFilters();
    });

    /* ОБРАБОТКА И ФИЛЬТРЫ */
    function applyFilters() {
      if (!originalImage) return;

      canvas.width = cropRect.w;
      canvas.height = cropRect.h;

      ctx.drawImage(originalImage, cropRect.x, cropRect.y, cropRect.w, cropRect.h, 0, 0, cropRect.w, cropRect.h);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      const b = parseInt(controls.brightness.value);
      const c = parseInt(controls.contrast.value);
      const sh = parseInt(controls.shadows.value);
      const hl = parseInt(controls.highlights.value);
      const sepiaVal = parseInt(controls.sepia.value) / 100;
      const shTint = parseInt(controls.shadowsTint.value);
      const hlTint = parseInt(controls.highlightsTint.value);

      const contrastFactor = (259 * (c + 255)) / (255 * (259 - c));

      for (let i = 0; i < data.length; i += 4) {
        let r = data[i];
        let g = data[i + 1];
        let bPixel = data[i + 2];

        if (isBWMode) {
          let gray = 0.299 * r + 0.587 * g + 0.114 * bPixel;
          gray += b * 2.55;
          gray = contrastFactor * (gray - 128) + 128;
          if (gray < 128) gray += (sh * (128 - gray)) / 128;
          else gray += (hl * (gray - 128)) / 128;
          gray = Math.min(255, Math.max(0, gray));

          r = g = bPixel = gray;

          if (sepiaVal > 0) {
            r = Math.min(255, gray + (gray * 0.393 * sepiaVal));
            g = Math.min(255, gray + (gray * 0.150 * sepiaVal));
            bPixel = Math.max(0, gray - (gray * 0.200 * sepiaVal));
          }
        } else {
          r = contrastFactor * (r + b * 2.55 - 128) + 128;
          g = contrastFactor * (g + b * 2.55 - 128) + 128;
          bPixel = contrastFactor * (bPixel + b * 2.55 - 128) + 128;
        }

        const luminance = 0.299 * r + 0.587 * g + 0.114 * bPixel;

        if (shTint !== 0 && luminance < 128) {
          const factor = ((128 - luminance) / 128) * (Math.abs(shTint) / 100);
          if (shTint > 0) { r += 30 * factor; g += 15 * factor; }
          else { bPixel += 35 * factor; g += 10 * factor; }
        }

        if (hlTint !== 0 && luminance >= 128) {
          const factor = ((luminance - 128) / 128) * (Math.abs(hlTint) / 100);
          if (hlTint > 0) { r += 35 * factor; g += 20 * factor; }
          else { bPixel += 30 * factor; r -= 10 * factor; }
        }

        data[i]     = Math.min(255, Math.max(0, r));
        data[i + 1] = Math.min(255, Math.max(0, g));
        data[i + 2] = Math.min(255, Math.max(0, bPixel));
      }

      ctx.putImageData(imageData, 0, 0);

      const vignetteVal = parseInt(controls.vignette.value);
      if (vignetteVal > 0) applyVignette(vignetteVal);

      const grainVal = parseInt(controls.grain.value);
      if (grainVal > 0) addGrain(grainVal);

      const dustVal = parseInt(controls.dust.value);
      if (dustVal > 0) addDustAndScratches(dustVal);
    }

    function applyVignette(amount) {
      const w = canvas.width;
      const h = canvas.height;
      const radius = Math.sqrt(Math.pow(w / 2, 2) + Math.pow(h / 2, 2));

      const grad = ctx.createRadialGradient(w / 2, h / 2, radius * 0.35, w / 2, h / 2, radius);
      grad.addColorStop(0, 'rgba(0,0,0,0)');
      grad.addColorStop(1, `rgba(0,0,0,${(amount / 100) * 0.85})`);

      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);
    }

    function addGrain(amount) {
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      for (let i = 0; i < data.length; i += 4) {
        const noise = (Math.random() - 0.5) * amount * 3.5;
        data[i]     = Math.min(255, Math.max(0, data[i] + noise));
        data[i + 1] = Math.min(255, Math.max(0, data[i + 1] + noise));
        data[i + 2] = Math.min(255, Math.max(0, data[i + 2] + noise));
      }
      ctx.putImageData(imageData, 0, 0);
    }

    function addDustAndScratches(amount) {
      const w = canvas.width;
      const h = canvas.height;
      ctx.save();

      let seed = 42;
      function rnd() {
        let x = Math.sin(seed++) * 10000;
        return x - Math.floor(x);
      }

      const dustCount = Math.floor((amount / 100) * (w * h / 18000));
      for (let i = 0; i < dustCount; i++) {
        const x = rnd() * w;
        const y = rnd() * h;
        const r = rnd() * 1.8 + 0.4;
        ctx.fillStyle = rnd() > 0.4 ? 'rgba(255,255,255,0.45)' : 'rgba(0,0,0,0.5)';
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
      }

      const scratchCount = Math.floor((amount / 100) * 6);
      for (let i = 0; i < scratchCount; i++) {
        const x = rnd() * w;
        const y1 = rnd() * h * 0.7;
        const y2 = y1 + rnd() * h * 0.4 + 40;
        ctx.strokeStyle = rnd() > 0.3 ? 'rgba(255,255,255,0.25)' : 'rgba(0,0,0,0.3)';
        ctx.lineWidth = rnd() * 1.2 + 0.5;
        ctx.beginPath();
        ctx.moveTo(x, y1);
        ctx.lineTo(x + (rnd() - 0.5) * 8, y2);
        ctx.stroke();
      }
      ctx.restore();
    }

    /* РАБОТА С КАДРИРОВАНИЕМ */
    function enableCropMode() {
      if (!originalImage) return;
      isCropMode = true;
      cropOverlay.classList.add('active');
      initCropBox();
    }

    function disableCropMode() {
      isCropMode = false;
      cropOverlay.classList.remove('active');
    }

    function initCropBox() {
      const cWidth = canvas.clientWidth;
      const cHeight = canvas.clientHeight;
      if (!cWidth || !cHeight) return;

      cropOverlay.style.width = cWidth + 'px';
      cropOverlay.style.height = cHeight + 'px';

      if (targetAspectRatio) {
        applyRatioConstraint(targetAspectRatio);
      } else {
        boxRect.width = cWidth * 0.9;
        boxRect.height = cHeight * 0.9;
        boxRect.left = (cWidth - boxRect.width) / 2;
        boxRect.top = (cHeight - boxRect.height) / 2;
        updateCropBoxUI();
      }
    }

    function updateCropBoxUI() {
      cropBox.style.left = boxRect.left + 'px';
      cropBox.style.top = boxRect.top + 'px';
      cropBox.style.width = boxRect.width + 'px';
      cropBox.style.height = boxRect.height + 'px';
    }

    document.querySelectorAll('.ratio-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        document.querySelectorAll('.ratio-btn').forEach(b => b.classList.remove('active'));
        const target = e.currentTarget;
        target.classList.add('active');

        const ratioVal = target.dataset.ratio;
        targetAspectRatio = ratioVal === 'free' ? null : parseFloat(ratioVal);
        if (targetAspectRatio) applyRatioConstraint(targetAspectRatio);
      });
    });

    function applyRatioConstraint(ratio) {
      const cWidth = canvas.clientWidth;
      const cHeight = canvas.clientHeight;
      let w = cWidth * 0.9;
      let h = w / ratio;

      if (h > cHeight * 0.9) {
        h = cHeight * 0.9;
        w = h * ratio;
      }

      boxRect.width = w;
      boxRect.height = h;
      boxRect.left = (cWidth - w) / 2;
      boxRect.top = (cHeight - h) / 2;
      updateCropBoxUI();
    }

    let isDragging = false, activeHandle = null, startCropX = 0, startCropY = 0, startBox = {};

    cropBox.addEventListener('pointerdown', (e) => {
      activeHandle = e.target.classList.contains('handle') ? e.target.dataset.handle : 'move';
      isDragging = true;
      startCropX = e.clientX;
      startCropY = e.clientY;
      startBox = { ...boxRect };
      cropBox.setPointerCapture(e.pointerId);
      e.stopPropagation();
    });

    cropBox.addEventListener('pointermove', (e) => {
      if (!isDragging) return;
      const dx = e.clientX - startCropX;
      const dy = e.clientY - startCropY;
      const cWidth = canvas.clientWidth;
      const cHeight = canvas.clientHeight;

      if (activeHandle === 'move') {
        boxRect.left = Math.max(0, Math.min(cWidth - startBox.width, startBox.left + dx));
        boxRect.top = Math.max(0, Math.min(cHeight - startBox.height, startBox.top + dy));
      } else {
        let newW = startBox.width, newH = startBox.height, newL = startBox.left, newT = startBox.top;
        if (activeHandle.includes('e')) newW = startBox.width + dx;
        if (activeHandle.includes('s')) newH = startBox.height + dy;
        if (activeHandle.includes('w')) { newW = startBox.width - dx; newL = startBox.left + dx; }
        if (activeHandle.includes('n')) { newH = startBox.height - dy; newT = startBox.top + dy; }

        if (targetAspectRatio) {
          if (activeHandle === 'se' || activeHandle === 'nw') newH = newW / targetAspectRatio;
          else newW = newH * targetAspectRatio;
        }

        if (newW >= 40 && newH >= 40 && newL >= 0 && newT >= 0 && (newL + newW) <= cWidth && (newT + newH) <= cHeight) {
          boxRect.width = newW; boxRect.height = newH; boxRect.left = newL; boxRect.top = newT;
        }
      }
      updateCropBoxUI();
    });

    cropBox.addEventListener('pointerup', () => { isDragging = false; activeHandle = null; });

    document.getElementById('apply-crop-btn').addEventListener('click', () => {
      if (!originalImage) return;
      const scaleX = cropRect.w / canvas.clientWidth;
      const scaleY = cropRect.h / canvas.clientHeight;

      cropRect = {
        x: cropRect.x + Math.round(boxRect.left * scaleX),
        y: cropRect.y + Math.round(boxRect.top * scaleY),
        w: Math.round(boxRect.width * scaleX),
        h: Math.round(boxRect.height * scaleY)
      };

      updateDimBadge();
      applyFilters();
      initCropBox();
    });

    document.getElementById('reset-crop-btn').addEventListener('click', () => {
      if (!originalImage) return;
      cropRect = { x: 0, y: 0, w: originalImage.width, h: originalImage.height };
      updateDimBadge();
      applyFilters();
      initCropBox();
    });

    downloadBtn.addEventListener('click', () => {
      if (!originalImage) return;
      const format = document.getElementById('export-format').value;
      const isPng = format === 'image/png';
      const extension = isPng ? 'png' : 'jpg';

      const link = document.createElement('a');
      link.download = `cinema-photo.${extension}`;
      link.href = canvas.toDataURL(format, isPng ? undefined : 0.95);
      link.click();
    });
  </script>
</body>
</html>
