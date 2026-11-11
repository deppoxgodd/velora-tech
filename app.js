'use strict';
(() => {
  const categories = {all:'Вся техника',mobile:'Смартфоны и планшеты',computing:'Компьютеры',tv:'ТВ и аудио',appliances:'Бытовая техника',climate:'Климат и уборка',business:'Для бизнеса'};
  const products = [
    {id:'one-s',name:'One S',type:'Смартфон',category:'mobile',price:59990,art:'phone',desc:'Яркий экран для любимых кадров, 256 ГБ для важных моментов и корпус из матового алюминия.',specs:{'Экран':'6,5″ AMOLED, 120 Гц','Память':'8 / 256 ГБ','Камера':'50 + 12 Мп','Аккумулятор':'5 000 мА·ч','Подключение':'5G, Wi-Fi 6, NFC'},colors:true},
    {id:'tab-air',name:'Tab Air',type:'Планшет',category:'mobile',price:24990,art:'tablet',desc:'Лёгкий планшет для заметок, чтения и сериалов. Большой экран, который удобно взять с собой.',specs:{'Экран':'11″ IPS','Память':'6 / 128 ГБ','Вес':'465 г','Аккумулятор':'8 000 мА·ч'}},
    {id:'book-pro',name:'Book Pro 14',type:'Ноутбук',category:'computing',price:89990,art:'laptop',desc:'Алюминиевый ноутбук для работы с графикой, учёбы и ежедневных проектов.',specs:{'Экран':'14″, 2,8K','Процессор':'8-ядерный V8','Память':'16 ГБ / SSD 512 ГБ','Масса':'1,35 кг'}},
    {id:'view-27',name:'View 27',type:'Монитор',category:'computing',price:29990,art:'monitor',desc:'Просторный 4K-экран для макетов, таблиц и видеомонтажа. Подключение к ноутбуку одним кабелем.',specs:{'Диагональ':'27″','Разрешение':'3 840 × 2 160','Частота':'60 Гц','Подключение':'USB-C 65 Вт, HDMI'}},
    {id:'vision-55',name:'Vision 55',type:'Телевизор',category:'tv',price:69990,art:'tv',desc:'Большой экран с глубоким цветом для фильмов, игр и семейных вечеров.',specs:{'Диагональ':'55″','Разрешение':'4K UHD','Частота':'120 Гц','Звук':'40 Вт, стерео'}},
    {id:'sound-air',name:'Sound Air',type:'Наушники',category:'tv',price:12990,art:'headphones',desc:'Полноразмерные беспроводные наушники с мягкими амбушюрами и активным шумоподавлением.',specs:{'Тип':'Беспроводные, полноразмерные','Автономность':'До 40 часов','Подключение':'Bluetooth 5.3, USB-C','Шумоподавление':'Активное ANC'}},
    {id:'wash-8',name:'Wash 8',type:'Стиральная машина',category:'appliances',price:44990,art:'washer',desc:'Бережный уход за любимыми вещами с обработкой паром и отдельными программами для деликатных тканей.',specs:{'Загрузка':'8 кг','Отжим':'До 1 400 об/мин','Программы':'14','Глубина':'45 см'}},
    {id:'fresh-360',name:'Fresh 360',type:'Холодильник',category:'appliances',price:64990,art:'fridge',desc:'Место для недельных покупок и отдельная зона свежести. Размораживание не требуется.',specs:{'Объём':'360 л','Система':'No Frost','Ширина':'60 см','Уровень шума':'37 дБ'}},
    {id:'brew-mini',name:'Brew Mini',type:'Кофемашина',category:'appliances',price:34990,art:'coffee',desc:'Эспрессо из свежемолотых зёрен и молочная пенка на вашей кухне. Настройте крепость под себя.',specs:{'Давление':'15 бар','Резервуар':'1,5 л','Кофемолка':'5 степеней помола','Напитки':'Эспрессо, американо, капучино'}},
    {id:'air-pure',name:'Air Pure',type:'Очиститель воздуха',category:'climate',price:19990,art:'purifier',desc:'Фильтрация воздуха и тихий ночной режим. Для спальни, гостиной и домашнего кабинета.',specs:{'Площадь':'До 45 м²','Фильтр':'HEPA H13','Производительность':'320 м³/ч','Ночной режим':'От 24 дБ'}},
    {id:'clean-r1',name:'Clean R1',type:'Робот-пылесос',category:'climate',price:27990,art:'vacuum',desc:'Сам строит карту комнат, собирает пыль и протирает пол. Уборка по вашему расписанию.',specs:{'Навигация':'Лидар','Уборка':'Сухая и влажная','Время работы':'До 150 минут','Контейнер':'450 мл'}},
    {id:'studio-43',name:'Studio 43',type:'Бизнес-дисплей',category:'business',price:64990,art:'business',desc:'Профессиональный экран для переговорных, презентаций и информационных зон.',specs:{'Диагональ':'43″','Разрешение':'4K UHD','Режим работы':'16 / 7','Подключение':'HDMI, USB-C, LAN'}}
  ];
  const money = value => new Intl.NumberFormat('ru-RU').format(value) + ' ₽';
  const escape = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const image = p => 'assets/' + p.art + '.svg';
  const current = location.pathname.split('/').pop() || 'index.html';
  const nav = [['index.html','Главная'],['catalog.html','Каталог'],['about.html','О компании']];
  document.querySelector('[data-header]').innerHTML = `<a class="wordmark" href="index.html" aria-label="VELORA — главная">VELORA</a><button class="menu-toggle" aria-expanded="false" aria-controls="navigation">Меню</button><nav class="nav" id="navigation" aria-label="Основная навигация">${nav.map(([href,label])=>`<a href="${href}" ${current===href?'aria-current="page"':''}>${label}</a>`).join('')}</nav><button class="cart-open" aria-label="Открыть корзину"><span class="cart-label">Корзина</span><svg width="20" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M5 7h14l1 14H4L5 7Z"/><path d="M8 8V6a4 4 0 0 1 8 0v2"/></svg><span class="cart-count">0</span></button>`;
  document.querySelector('[data-footer]').innerHTML = `<div class="footer-top"><div><a href="index.html" class="wordmark">VELORA</a><p>Техника, с которой удобно жить.<br>С собой. Дома. На работе.</p></div><nav class="footer-links" aria-label="Навигация в подвале"><a href="catalog.html">Каталог</a><a href="catalog.html?category=business">Для бизнеса</a><a href="about.html">О компании</a></nav><nav class="footer-links" aria-label="Помощь"><a href="about.html#support">Вопросы о магазине</a><button class="button secondary" data-open-cart>Открыть корзину</button></nav></div><div class="footer-bottom"><span>© ${new Date().getFullYear()} VELORA</span><span>Учебный проект. Компания и товары вымышлены.</span></div>`;
  const menuButton = document.querySelector('.menu-toggle');
  const closeMenu = () => { menuButton.setAttribute('aria-expanded','false'); document.querySelector('.nav').classList.remove('open'); };
  menuButton.addEventListener('click', () => { const open = menuButton.getAttribute('aria-expanded') !== 'true'; menuButton.setAttribute('aria-expanded',String(open)); document.querySelector('.nav').classList.toggle('open',open); });
  document.addEventListener('keydown', e => { if(e.key==='Escape') closeMenu(); });
  document.addEventListener('click', e => { if(!e.target.closest('.header')) closeMenu(); });
  let cart = [];
  try { const saved=JSON.parse(localStorage.getItem('velora-cart') || '[]'); if(Array.isArray(saved)) cart=saved.filter(row=>products.some(p=>p.id===row.id)&&Number.isInteger(row.qty)&&row.qty>0&&row.qty<=99&&['standard','sage','graphite'].includes(row.color)); } catch { /* Storage unavailable: basket remains usable in this page. */ }
  let toastTimer;
  const notify = message => { const node=document.querySelector('.toast'); node.textContent=message; clearTimeout(toastTimer); toastTimer=setTimeout(()=>node.textContent='',3500); };
  const saveCart = () => { try { localStorage.setItem('velora-cart',JSON.stringify(cart)); } catch { notify('Корзина работает до закрытия страницы: сохранение недоступно.'); } document.querySelector('.cart-count').textContent=cart.reduce((sum,row)=>sum+row.qty,0); };
  const colorName = color => color==='sage'?'Шалфей':color==='graphite'?'Графит':'Стандартный';
  document.querySelector('[data-cart]').innerHTML='<dialog id="cart-dialog" aria-labelledby="cart-heading"><div class="cart-inner"><div class="cart-title"><h2 id="cart-heading">Ваша корзина</h2><button class="close-dialog" aria-label="Закрыть корзину">×</button></div><div id="cart-items"></div></div></dialog>';
  const dialog=document.getElementById('cart-dialog');
  function renderCart(){
    const target=document.getElementById('cart-items');
    if(!cart.length){target.innerHTML='<p class="cart-empty">В корзине пока ничего нет.</p><a class="button" href="catalog.html">Выбрать технику</a>';return;}
    target.innerHTML=cart.map((row,index)=>{const p=products.find(p=>p.id===row.id);return `<article class="cart-row"><img src="${image(p)}" width="80" height="80" alt="${p.type} VELORA ${p.name}"><div><h3>${p.name}</h3><p>${colorName(row.color)}</p><div class="quantity"><button data-quantity="${index}" data-delta="-1" aria-label="Уменьшить количество ${p.name}" ${row.qty===1?'disabled':''}>−</button><span aria-label="Количество">${row.qty}</span><button data-quantity="${index}" data-delta="1" aria-label="Увеличить количество ${p.name}" ${row.qty===99?'disabled':''}>+</button></div></div><div><p>${money(p.price*row.qty)}</p><button class="remove-item" data-remove="${index}" aria-label="Удалить ${p.name}">Удалить</button></div></article>`;}).join('')+`<p class="cart-total">Итого: ${money(cart.reduce((sum,row)=>sum+products.find(p=>p.id===row.id).price*row.qty,0))}</p><p class="cart-notice">Учебный магазин: заказ и оплата не оформляются. Выбранные товары сохраняются только в вашем браузере.</p><button class="button secondary" data-close-cart>Продолжить выбор</button>`;
  }
  function addCart(id,color='standard'){
    const p=products.find(item=>item.id===id); if(!p)return;
    const existing=cart.find(row=>row.id===id&&row.color===color);
    if(existing?.qty===99){notify('Можно добавить не больше 99 единиц одной модели.');return;}
    if(existing)existing.qty++;else cart.push({id,color,qty:1});
    saveCart(); notify(`${p.name} добавлен в корзину`);
  }
  document.addEventListener('click', e=>{
    if(e.target.closest('.cart-open,[data-open-cart]')){renderCart();dialog.showModal();}
    if(e.target.closest('.close-dialog,[data-close-cart]'))dialog.close();
    const add=e.target.closest('[data-add]');if(add)addCart(add.dataset.add,add.dataset.color||'standard');
    const remove=e.target.closest('[data-remove]');if(remove){cart.splice(Number(remove.dataset.remove),1);saveCart();renderCart();document.querySelector('.close-dialog').focus();}
    const quantity=e.target.closest('[data-quantity]');if(quantity){const index=Number(quantity.dataset.quantity),delta=Number(quantity.dataset.delta);cart[index].qty=Math.max(1,Math.min(99,cart[index].qty+delta));saveCart();renderCart();const replacement=dialog.querySelector(`[data-quantity="${index}"][data-delta="${delta}"]`);if(replacement&&!replacement.disabled)replacement.focus();else dialog.querySelector('.close-dialog').focus();}
  });
  dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
  window.addEventListener('storage',e=>{if(e.key==='velora-cart')location.reload();});
  saveCart();
  const params=new URLSearchParams(location.search);
  if(document.getElementById('products')){
    let category=params.get('category')||'all';if(category==='home')category='home';else if(!Object.hasOwn(categories,category))category='all';
    const search=document.getElementById('search'),sort=document.getElementById('sort');search.value=params.get('q')||'';
    if(['default','price-asc','price-desc','name'].includes(params.get('sort')))sort.value=params.get('sort');
    const choices={...categories,home:'Всё для дома'};
    document.getElementById('categories').innerHTML=Object.entries(choices).map(([id,label])=>`<button data-category="${id}" aria-pressed="${category===id}">${label}</button>`).join('');
    function render(){
      const term=search.value.trim().toLocaleLowerCase('ru');
      let list=products.filter(p=>(category==='all'||p.category===category||(category==='home'&&['tv','appliances','climate'].includes(p.category)))&&`${p.name} ${p.type} ${p.desc}`.toLocaleLowerCase('ru').includes(term));
      if(sort.value==='price-asc')list.sort((a,b)=>a.price-b.price);if(sort.value==='price-desc')list.sort((a,b)=>b.price-a.price);if(sort.value==='name')list.sort((a,b)=>a.name.localeCompare(b.name));
      document.querySelectorAll('[data-category]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.category===category)));
      document.getElementById('result-count').textContent=`Найдено устройств: ${list.length}`;
      document.getElementById('products').innerHTML=list.length?list.map(p=>`<article class="product-card"><a class="product-visual" href="product.html?id=${p.id}" aria-label="${p.type} VELORA ${p.name}"><img src="${image(p)}" alt="${p.type} VELORA ${p.name}" width="400" height="400" loading="lazy"></a><p>${p.type}</p><h2><a href="product.html?id=${p.id}">${p.name}</a></h2><p>${Object.values(p.specs).slice(0,2).map(escape).join(' · ')}</p><div class="product-actions"><span class="price">${money(p.price)}</span><button class="add-small" data-add="${p.id}" data-color="${p.colors?'sage':'standard'}" aria-label="Добавить ${p.name} в корзину">В корзину</button></div></article>`).join(''):'<div class="empty-state"><h2>Ничего не найдено</h2><p>Попробуйте другое название или категорию.</p><button class="button secondary" id="reset-search">Сбросить фильтры</button></div>';
      const url=new URL(location.href);url.search='';if(category!=='all')url.searchParams.set('category',category);if(search.value)url.searchParams.set('q',search.value);if(sort.value!=='default')url.searchParams.set('sort',sort.value);try{history.replaceState(null,'',url);}catch{/* file:// fallback */}
    }
    document.getElementById('categories').addEventListener('click',e=>{const button=e.target.closest('[data-category]');if(button){category=button.dataset.category;render();}});
    search.addEventListener('input',render);sort.addEventListener('change',render);
    document.getElementById('products').addEventListener('click',e=>{if(e.target.closest('#reset-search')){category='all';search.value='';sort.value='default';render();search.focus();}});render();
  }
  if(document.getElementById('product-detail')){
    const requested=params.get('id')||'one-s';const p=products.find(p=>p.id===requested);
    if(!p){document.getElementById('product-detail').innerHTML='<div class="wrap section"><h1>Товар не найден</h1><p>Этого устройства нет в каталоге.</p><a class="button" href="catalog.html">В каталог</a></div>';}
    else{
      document.title=`${p.type} VELORA ${p.name} — характеристики и цена`;document.getElementById('product-crumb').textContent=p.name;
      document.getElementById('product-detail').innerHTML=`<section class="product-main" aria-labelledby="product-title"><img class="detail-image" id="detail-image" src="${image(p)}" alt="${p.type} VELORA ${p.name}" width="700" height="700"><div class="product-info"><h1 id="product-title">VELORA ${p.name}</h1><p class="description">${p.desc}</p><p>${p.type}</p><p class="detail-price">${money(p.price)}</p>${p.colors?'<p id="color-label">Цвет: Шалфей</p><div class="color-options" role="group" aria-label="Цвет корпуса"><button class="swatch color-sage" data-color-option="sage" aria-label="Шалфей" aria-pressed="true"></button><button class="swatch color-graphite" data-color-option="graphite" aria-label="Графит" aria-pressed="false"></button></div>':''}<button class="button detail-add" data-add="${p.id}" data-color="${p.colors?'sage':'standard'}">Добавить в корзину</button><p class="service-note">Концептуальная модель VELORA. Характеристики и цена приведены для учебного проекта.</p></div></section><section class="specs" aria-labelledby="spec-title"><h2 id="spec-title">Характеристики</h2><dl>${Object.entries(p.specs).map(([key,value])=>`<dt>${escape(key)}</dt><dd>${escape(value)}</dd>`).join('')}</dl><p class="service-note">Изображение — иллюстрация модели.</p></section>`;
      document.querySelectorAll('[data-color-option]').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('[data-color-option]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));document.getElementById('color-label').textContent='Цвет: '+colorName(button.dataset.colorOption);document.querySelector('.detail-add').dataset.color=button.dataset.colorOption;document.getElementById('detail-image').src=button.dataset.colorOption==='graphite'?'assets/phone-graphite.svg':'assets/phone.svg';}));
    }
  }
  const sceneImage=document.getElementById('space-image');
  if(sceneImage&&'IntersectionObserver' in window){const alts={home:'Гостиная с техникой VELORA',computing:'Ноутбук, монитор и наушники VELORA',appliances:'Бытовая техника VELORA'};new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){const key=entry.target.dataset.scene;sceneImage.src=`assets/${key}.png`;sceneImage.alt=alts[key];}});},{rootMargin:'-20% 0px -35% 0px',threshold:.15}).observe(document.querySelector('[data-scene]'));const observer=new IntersectionObserver(entries=>{for(const entry of entries)if(entry.isIntersecting){const key=entry.target.dataset.scene;sceneImage.src=`assets/${key}.png`;sceneImage.alt=alts[key];}},{rootMargin:'-20% 0px -35% 0px',threshold:.15});document.querySelectorAll('[data-scene]').forEach(node=>observer.observe(node));}
})();
