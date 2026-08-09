/* ==================================================================
   DATA — 行程 / 人員 / 價格 全部依據「恆春出遊行程與預算表_附潛水提醒.pdf」
   圖片規則：
   1. 優先使用 Wikimedia Commons Special:FilePath 可驗證圖片
   2. 無法驗證真實對應照片的地點，一律顯示優雅 fallback
   3. 絕對不使用其他景點照片頂替
   ================================================================== */

const WM = (name) => `https://commons.wikimedia.org/wiki/Special:FilePath/${name}`;

const destinations = [
  {
    id: "diving",
    title: "潛水",
    en: "Scuba Diving",
    day: 1,
    tag: "主線行程①",
    tagType: "main",
    desc: "六人中詮／祥／榮／源選擇 2,000 元的潛水行程，嘉為 1,400 元，傑為 400 元的方案。下水前務必睡飽、不飲酒，並全程遵從教練指示。",
    price: [
      { label: "詮 / 祥 / 榮 / 源", value: "$2,000／人" },
      { label: "嘉", value: "$1,400" },
      { label: "傑", value: "$400" },
    ],
    note: "圖片為墾丁／恆春海域珊瑚礁真實照片（Wikimedia Commons），可反映當地海底地貌。",
    images: [
      { src: WM("Kenting_coral_reef_%E5%A2%BE%E4%B8%81%E7%8F%8A%E7%91%9A%E7%A4%81.jpg"), caption: "墾丁珊瑚礁" },
      { src: WM("%E5%A2%BE%E4%B8%81%E7%8D%A8%E7%AB%8B%E7%A4%81%E7%9A%84%E6%B5%B7%E9%9B%9E%E5%86%A0.jpg"), caption: "墾丁獨立礁海雞冠軟珊瑚" },
      { src: WM("%E4%B8%83%E6%98%9F%E7%A4%81.jpg"), caption: "七星礁水下珊瑚礁生態" },
      { src: WM("Tomato_clownfish.jpg"), caption: "海葵與小丑魚" },
    ],
  },
  {
    id: "dinosaur-kart",
    title: "墾丁國際卡丁樂園",
    en: "Kenting International Karting",
    day: 1,
    tag: "主線行程②",
    tagType: "main",
    desc: "位於恆公路上的墾丁國際卡丁樂園，引進義大利原裝進口超跑卡丁車，搭載 Honda-GX 引擎，賽道全長 900 公尺達國際標準規格。嘉選擇不參與此行程。",
    price: [
      { label: "單人超跑卡丁車（嘉不參與）", value: "$350／場" },
    ],
    note: "建議提前電話確認現場等候時間，旺季人多。",
    images: [
      { src: "https://commons.wikimedia.org/wiki/Special:FilePath/Outdoor_karting.jpg", caption: "墾丁國際卡丁樂園賽道" },
      { src: "https://commons.wikimedia.org/wiki/Special:FilePath/Young_go-kart_driver.jpg", caption: "超跑卡丁車速度體驗" },
    ],
  },
  {
    id: "old-street",
    title: "恆春老街",
    en: "Hengchun Old Street",
    day: 1,
    tag: "支線行程",
    tagType: "optional",
    desc: "沿著恆春古城的城門與老街散步，磚造街屋與百年城牆是這座南國小鎮最悠緩的角落，此段行程免費。",
    price: [{ label: "費用", value: "$0" }],
    note: "圖片為恆春古城實景照片。",
    images: [
      { src: "pic/old_street.jpg",  caption: "恆春小鎮夜景" },
      { src: "pic/old_street2.jpg", caption: "恆春老街日景" },
      { src: WM("%E6%81%86%E6%98%A5%E7%B8%A3%E5%9F%8E%E5%8D%97%E9%96%80.JPG"),   caption: "古城南門（曉春門）" },
      { src: WM("%E6%81%86%E6%98%A5%E7%B8%A3%E5%9F%8E%E5%8D%97%E9%96%80.JPG").replace('%E5%8D%97%E9%96%80', '%E5%8C%97%E9%96%80'), caption: "古城北門（拱辰門）" },
      { src: WM("City_Wall_Hengchun1.jpg"), caption: "古城城牆" },
    ],
  },
  {
    id: "cape-no-7",
    title: "海角七號・阿嘉的家",
    en: "Cape No.7 — Aga's House",
    day: 1,
    tag: "支線行程",
    tagType: "optional",
    desc: "電影《海角七號》的重要拍攝場景，恆春也因這部電影成為許多影迷造訪的南國小鎮，此段行程免費。",
    price: [{ label: "費用", value: "$0" }],
    note: "圖片為《海角七號》電影拍攝地「阿嘉的家」真實照片（Wikimedia Commons）。",
    images: [
      { src: WM("%E9%98%BF%E5%98%89%E7%9A%84%E5%AE%B6.JPG"), caption: "阿嘉的家外觀" },
      { src: WM("%E6%B5%B7%E8%A7%92%E4%B8%83%E8%99%9F%E2%80%93%E9%98%BF%E5%98%89%E7%9A%84%E5%AE%B6.jpg"), caption: "阿嘉的家正面" },
      { src: WM("%E6%B5%B7%E8%A7%92%E4%B8%83%E5%8F%B7%E9%98%BF%E5%98%89%E7%9A%84%E5%AE%B6_-_House_of_A_Jia_-_2012.02_-_panoramio.jpg"), caption: "阿嘉的家全景" },
    ],
  },
  {
    id: "luching",
    title: "鹿境梅花鹿生態園區",
    en: "Luching Deer Ecological Park",
    day: 1,
    tag: "支線・可去可不去",
    tagType: "optional",
    desc: "近距離餵食梅花鹿的生態園區，暫抓每人 250 元，是否前往可視現場狀況彈性決定。",
    price: [{ label: "暫抓費用", value: "$250／人" }],
    note: "圖片為鹿境梅花鹿生態園區實景照片。",
    images: [
      { src: "pic/deer.jpg", caption: "鹿境園區梅花鹿" },
    ],
  },
  {
    id: "nmmba",
    title: "國立海洋生物博物館",
    en: "National Museum of Marine Biology & Aquarium",
    day: 2,
    tag: "主線行程③",
    tagType: "main",
    desc: "台灣規模最大的海洋生物博物館，擁有世界級的珊瑚王國館與水族長廊；詮免費入場，其餘五人每人 450 元。",
    price: [
      { label: "詮", value: "$0" },
      { label: "其餘五人", value: "$450／人" },
    ],
    note: "圖片為海生館展區真實照片。",
    images: [
      { src: "pic/NMMBA1.jpg", caption: "大洋池魚群" },
      { src: "pic/NMMBA2.jpg", caption: "海底隧道" },
    ],
  },
];

const stay = {
  name: "宇悅・木光旅居",
  images: [
    { src: "pic/stay.jpg", caption: "木光旅居全景" },
  ],
};

// 費用表：完全依照 PDF「恆春兩天一夜．總行程與預算表」
const people = [
  { name:"詮", diving:2000, kart:350, deer:250, nmmba:0,   car:667, etc:67, insurance:65, gas:333, stay:1125, total:4857 },
  { name:"祥", diving:2000, kart:350, deer:250, nmmba:450, car:667, etc:67, insurance:65, gas:333, stay:1125, total:5307 },
  { name:"榮", diving:2000, kart:350, deer:250, nmmba:450, car:667, etc:67, insurance:65, gas:333, stay:1125, total:5307 },
  { name:"源", diving:2000, kart:350, deer:250, nmmba:450, car:667, etc:67, insurance:65, gas:333, stay:1125, total:5307 },
  { name:"傑", diving:400,  kart:350, deer:250, nmmba:450, car:667, etc:67, insurance:65, gas:333, stay:1750, total:4332 },
  { name:"嘉", diving:1400, kart:0,   deer:250, nmmba:450, car:667, etc:67, insurance:65, gas:333, stay:1750, total:4982 },
];
const itemLabels = { diving:"潛水", kart:"卡丁車", deer:"鹿境", nmmba:"海生館", car:"車資", etc:"ETC", insurance:"保險", gas:"油錢", stay:"住宿" };

/* ==================================================================
   RENDER
   ================================================================== */
const fmt = n => "$" + n.toLocaleString();

function mediaFallbackHTML(name) {
  return `<div class="media-fallback">
    <i data-lucide="image-off"></i>
    <b>${name}</b>
    <span>圖片暫時無法載入，尚待補上正確照片</span>
  </div>`;
}

window.handleStopImgError = function(imgEl, name) {
  const slide = imgEl.closest('.swiper-slide');
  const swiper = imgEl.closest('.swiper');
  if (slide && swiper) {
    slide.remove();
    if (swiper.querySelectorAll('.swiper-slide').length === 0) {
      const target = swiper.parentElement;
      target.outerHTML = mediaFallbackHTML(name);
      if (window.lucide) lucide.createIcons();
    } else if (swiper.swiper) {
      swiper.swiper.update();
    }
  } else {
    const target = imgEl.parentElement;
    target.outerHTML = mediaFallbackHTML(name);
    if (window.lucide) lucide.createIcons();
  }
};
window.handleGalleryImgError = function(imgEl, name) {
  imgEl.outerHTML = mediaFallbackHTML(name);
  if (window.lucide) lucide.createIcons();
};
window.handleLightboxImgError = function(imgEl) {
  const holder = imgEl.parentElement;
  holder.innerHTML = '<div class="lightbox-fallback">圖片暫時無法載入</div>';
};

function renderStopMedia(dest) {
  if (!dest.images || dest.images.length === 0) {
    return mediaFallbackHTML(dest.title);
  }
  const swiperId = `sw-${dest.id}`;
  const safeTitle = dest.title.replace(/'/g, "\\'");
  let slides = dest.images.map(img =>
    `<div class="swiper-slide"><img src="${img.src}" alt="${dest.title} ${img.caption || ''}" loading="lazy"
        onerror="handleStopImgError(this,'${safeTitle}')"></div>`
  ).join('');
  return `
    <div class="swiper" id="${swiperId}">
      <div class="swiper-wrapper">${slides}</div>
      <div class="swiper-pagination"></div>
    </div>
    ${dest.images.length > 1 ? `<div class="media-count"><i data-lucide="images" style="width:12px;height:12px"></i>${dest.images.length}</div>` : ''}
  `;
}





/* ---- Places gallery ---- */
const sizeCycle = ["xl", "sm", "md", "wide", "md", "sm"];
        ${img ? `<div class="g-zoom"><i data-lucide="expand" style="width:14px;height:14px"></i></div>` : ''}
        <div class="g-caption"><b>${d.title}</b><span>Day 0${d.day} · ${d.en}</span></div>
      </div>
    `;
  }).join('');
}


/* ---- Stay gallery ---- */
  const [main, ...rest] = stay.images;
  el.innerHTML = `
    <a class="stay-main" data-gallery="stay" data-idx="0"><img src="${main.src}" alt="宇悅木光旅居" loading="lazy"></a>
    <div class="stay-side">
      ${rest.slice(0, 2).map((img, i) => `<a class="stay-side-item" data-gallery="stay" data-idx="${i + 1}"><img src="${img.src}" alt="宇悅木光旅居" loading="lazy"></a>`).join('')}
    </div>
  `;
}


/* ---- Budget person cards ---- */

document.querySelectorAll('.person-card').forEach(card => {
  card.addEventListener('click', () => card.classList.toggle('open'));
});
      </div></div>
    </div>
  `).join('');
  el.querySelectorAll('.person-card').forEach(card => {
    card.addEventListener('click', () => card.classList.toggle('open'));
  });
}


/* ==================================================================
   CURTAIN REVEAL — 布簾進場動畫
   ================================================================== */
const curtainWrap = document.getElementById('curtainWrap');
const curtainLogo = document.getElementById('curtainLogo');
const curtainProgress = document.getElementById('curtainProgress');

function openCurtain() {
  curtainWrap.classList.add('curtain-opened');
  curtainLogo.style.opacity = '0';
  curtainLogo.style.pointerEvents = 'none';
  setTimeout(() => {
    curtainWrap.classList.add('curtain-done');
    curtainLogo.style.display = 'none';
  }, 2000);
}

function startLoading() {
  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.floor(Math.random() * 15) + 5;
    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);
      curtainProgress.innerText = '100%';
      setTimeout(openCurtain, 400);
    } else {
      curtainProgress.innerText = progress.toString().padStart(2, '0') + '%';
    }
  }, 60);
}

// 等字體與資源載入後再跑 Loading，並加入 3 秒強制解鎖防呆
if (document.fonts && document.fonts.ready) {
  Promise.race([
    document.fonts.ready,
    new Promise(resolve => setTimeout(resolve, 3000))
  ]).then(() => setTimeout(startLoading, 300));
} else {
  setTimeout(startLoading, 600);
}

/* ==================================================================
   HERO SWIPER + PARALLAX
   ================================================================== */
const heroSlides = [
  { src: WM("Beautiful_view_of_Pingtung_coastline_from_Longpan_Park.jpg"),  alt: "龍磐公園海岸線" },
  { src: WM("Kenting_National_Park_Baishawan.jpg"),                          alt: "墾丁白沙灣海灘" },
  { src: WM("Kenting_Hengchun-Township_Taiwan_Sail-Rock-01.jpg"),            alt: "帆船石海岸" },
  { src: WM("Sunrise_at_low_tide_seaside_Kenting_National_Park-ID9286.jpg"), alt: "墾丁日出晨光" },
  { src: "pic/NMMBA1.jpg",                                                   alt: "海生館魚群" },
  { src: "pic/NMMBA2.jpg",                                                   alt: "海生館海底隧道" },
];


const heroSwiper = new Swiper('#heroSwiper', {
  loop: true,
  effect: 'fade',
  fadeEffect: { crossFade: true },
  autoplay: { delay: 6500, disableOnInteraction: false, pauseOnMouseEnter: true },
  pagination: { el: '.hero-dots', clickable: true },
  speed: 1800,
});

// 視差滾動：Hero 圖片 (Performance optimized)
let parallaxTicking = false;
function updateHeroParallax() {
  const scrollY = window.scrollY;
  document.querySelectorAll('.hero-parallax-img').forEach(img => {
    img.style.transform = `translateY(${scrollY * 0.35}px)`;
  });
  parallaxTicking = false;
}
window.addEventListener('scroll', () => {
  if (!parallaxTicking) {
    window.requestAnimationFrame(updateHeroParallax);
    parallaxTicking = true;
  }
}, { passive: true });

/* init all stop-media swipers */
const swipers = [];
document.querySelectorAll('.stop-media .swiper').forEach(elm => {
  const sw = new Swiper(elm, {
    loop: elm.querySelectorAll('.swiper-slide').length > 1,
    autoplay: { delay: 4500, disableOnInteraction: false, pauseOnMouseEnter: true },
    pagination: { el: elm.querySelector('.swiper-pagination'), clickable: true },
    effect: 'fade',
    fadeEffect: { crossFade: true },
    speed: 800,
  });
  swipers.push(sw);
});

// Performance optimization: Stop autoplay when swiper is out of viewport
if ('IntersectionObserver' in window) {
  const swiperObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.target.swiper) {
        if (entry.isIntersecting) {
          entry.target.swiper.autoplay.start();
        } else {
          entry.target.swiper.autoplay.stop();
        }
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.swiper').forEach(s => swiperObserver.observe(s));
}

/* ==================================================================
   NAV
   ================================================================== */
const nav = document.getElementById('nav');
const progressBar = document.getElementById('progress-bar');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
  
  // 更新進度條
  if (progressBar) {
    const totalScroll = document.documentElement.scrollTop;
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scroll = `${totalScroll / windowHeight * 100}%`;
    progressBar.style.width = scroll;
    progressBar.style.opacity = totalScroll > 100 ? '1' : '0';
  }
}, { passive: true });
// 初始化進度條與導覽列狀態
window.dispatchEvent(new Event('scroll'));

const navToggle = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');
navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});
mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  navToggle.classList.remove('open');
  mobileMenu.classList.remove('open');
}));

/* ==================================================================
   SCROLL REVEAL
   ================================================================== */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

document.querySelectorAll('.reveal, .reveal-stag, .reveal-img').forEach(el => revealObserver.observe(el));

/* ==================================================================
   DRAWER
   ================================================================== */
const drawer = document.getElementById('drawer');
const drawerBackdrop = document.getElementById('drawerBackdrop');
const drawerMedia = document.getElementById('drawerMedia');
const drawerTitle = document.getElementById('drawerTitle');
const drawerDesc = document.getElementById('drawerDesc');
const drawerEyebrow = document.getElementById('drawerEyebrow');
const drawerPriceBox = document.getElementById('drawerPriceBox');

function openDrawer(id) {
  const d = destinations.find(x => x.id === id);
  if (!d) return;
  drawerEyebrow.textContent = `Day 0${d.day} · ${d.en}`;
  drawerTitle.textContent = d.title;
  drawerDesc.textContent = d.desc + (d.note ? `　${d.note}` : '');
  drawerPriceBox.innerHTML = d.price.map(p => `<div class="row"><span>${p.label}</span><b>${p.value}</b></div>`).join('');
  drawerMedia.innerHTML = renderStopMedia(d);
  drawer.classList.add('open');
  drawerBackdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
  if (window.lucide) lucide.createIcons();
  const sw = drawerMedia.querySelector('.swiper');
  if (sw) new Swiper(sw, {
    loop: sw.querySelectorAll('.swiper-slide').length > 1,
    pagination: { el: sw.querySelector('.swiper-pagination'), clickable: true },
    effect: 'fade', fadeEffect: { crossFade: true },
  });
}
function closeDrawer() {
  drawer.classList.remove('open');
  drawerBackdrop.classList.remove('open');
  document.body.style.overflow = '';
}
document.addEventListener('click', (e) => {
  const opener = e.target.closest('[data-open]');
  if (opener) { openDrawer(opener.getAttribute('data-open')); }
});
document.getElementById('drawerClose').addEventListener('click', closeDrawer);
drawerBackdrop.addEventListener('click', closeDrawer);

/* ==================================================================
   LIGHTBOX
   ================================================================== */
const lightbox = document.getElementById('lightbox');
const lbImgHolder = document.getElementById('lbImgHolder');
const lbName = document.getElementById('lbName');
const lbSub = document.getElementById('lbSub');
let lbSet = []; let lbIndex = 0;

function openLightbox(id, startIdx = 0) {
  let dest, imgs;
  if (id === 'stay') { dest = stay; imgs = stay.images; }
  else { dest = destinations.find(x => x.id === id); imgs = dest ? dest.images : []; }
  if (!imgs || imgs.length === 0) return;
  lbSet = imgs.map(img => ({ src: img.src, caption: img.caption || '', name: dest.title || dest.name }));
  lbIndex = startIdx;
  renderLightbox();
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function renderLightbox() {
  const item = lbSet[lbIndex];
  if (!item) { lbImgHolder.innerHTML = `<div class="lightbox-fallback">圖片暫時無法載入</div>`; return; }
  lbImgHolder.innerHTML = `<img src="${item.src}" alt="${item.name}" onerror="handleLightboxImgError(this)">`;
  lbName.textContent = item.name;
  lbSub.textContent = item.caption ? `${item.caption} · ${lbIndex + 1} / ${lbSet.length}` : `${lbIndex + 1} / ${lbSet.length}`;
}
function closeLightbox() { lightbox.classList.remove('open'); document.body.style.overflow = ''; }
document.getElementById('lbClose').addEventListener('click', closeLightbox);
document.getElementById('lbPrev').addEventListener('click', () => { lbIndex = (lbIndex - 1 + lbSet.length) % lbSet.length; renderLightbox(); });
document.getElementById('lbNext').addEventListener('click', () => { lbIndex = (lbIndex + 1) % lbSet.length; renderLightbox(); });
lightbox.addEventListener('click', (e) => { if (e.target === lightbox || e.target.classList.contains('lightbox-stage')) closeLightbox(); });
document.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('open')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') document.getElementById('lbPrev').click();
  if (e.key === 'ArrowRight') document.getElementById('lbNext').click();
});
let touchStartX = null;
lightbox.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; });
lightbox.addEventListener('touchend', e => {
  if (touchStartX === null) return;
  const dx = e.changedTouches[0].clientX - touchStartX;
  if (Math.abs(dx) > 50) { dx > 0 ? document.getElementById('lbPrev').click() : document.getElementById('lbNext').click(); }
  touchStartX = null;
});
document.addEventListener('click', (e) => {
  const g = e.target.closest('[data-gallery]');
  if (g) {
    const id = g.getAttribute('data-gallery');
    const idx = parseInt(g.getAttribute('data-idx') || '0', 10);
    openLightbox(id, idx);
  }
});

/* ==================================================================
   LUCIDE ICONS
   ================================================================== */
if (window.lucide) lucide.createIcons();