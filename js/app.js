/* Voyara ERP — shared shell + interactions */
const P={
 grid:'<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
 inbox:'<path d="M22 12h-6l-2 3h-4l-2-3H2"/><path d="M5.5 5h13L22 12v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-6z"/>',
 users:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',
 package:'<path d="M21 16V8a2 2 0 0 0-1-1.7l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.7l7 4a2 2 0 0 0 2 0l7-4a2 2 0 0 0 1-1.7z"/><path d="M3.3 7 12 12l8.7-5M12 22V12"/>',
 ticket:'<path d="M3 9a3 3 0 0 0 0 6v3a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-3a3 3 0 0 1 0-6V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1z"/><path d="M13 5v2M13 17v2M13 11v2"/>',
 route:'<circle cx="6" cy="19" r="3"/><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"/><circle cx="18" cy="5" r="3"/>',
 hotel:'<path d="M3 21V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14M3 21h18M8 9h.01M12 9h.01M16 9h.01M8 13h.01M12 13h.01M16 13h.01M10 21v-4h4v4"/>',
 bus:'<rect x="3" y="4" width="18" height="13" rx="2"/><path d="M3 11h18M7 17v3M17 17v3"/><circle cx="7.5" cy="14" r=".5"/><circle cx="16.5" cy="14" r=".5"/>',
 card:'<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20M6 15h4"/>',
 truck:'<path d="M3 7h11v10H3zM14 10h4l3 3v4h-7"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/>',
 chart:'<path d="M3 3v18h18"/><path d="M7 15l4-4 3 3 5-6"/>',
 layers:'<path d="m12 2 10 5-10 5L2 7z"/><path d="m2 17 10 5 10-5M2 12l10 5 10-5"/>',
 settings:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>',
 search:'<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',
 bell:'<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0"/>',
 help:'<circle cx="12" cy="12" r="10"/><path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3M12 17h.01"/>',
 plus:'<path d="M12 5v14M5 12h14"/>', menu:'<path d="M3 6h18M3 12h18M3 18h18"/>', x:'<path d="M18 6 6 18M6 6l12 12"/>',
 filter:'<path d="M22 3H2l8 9.5V19l4 2v-8.5z"/>', download:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>',
 more:'<circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>',
 pin:'<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
 clock:'<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>', cal:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
 star:'<path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/>',
 check:'<path d="M20 6 9 17l-5-5"/>', checkc:'<circle cx="12" cy="12" r="10"/><path d="m8 12 3 3 5-6"/>', xc:'<circle cx="12" cy="12" r="10"/><path d="m15 9-6 6M9 9l6 6"/>',
 alert:'<path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0zM12 9v4M12 17h.01"/>',
 rupee:'<path d="M6 3h12M6 8h12M6 13l8.5 8M6 13h3a5 5 0 0 0 0-10"/>', wallet:'<path d="M20 12V8H6a2 2 0 0 1 0-4h12v4"/><path d="M4 6v12a2 2 0 0 0 2 2h14v-4"/><path d="M18 12a2 2 0 0 0 0 4h4v-4z"/>',
 plane:'<path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>',
 user:'<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>', logout:'<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/>',
 file:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8"/>', edit:'<path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>',
 trash:'<path d="M3 6h18M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6M10 11v6M14 11v6M9 6V4h6v2"/>', eye:'<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>',
 phone:'<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/>',
 mail:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/>', send:'<path d="m22 2-7 20-4-9-9-4zM22 2 11 13"/>',
 utensils:'<path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2M7 2v20M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7"/>', sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
 trend:'<path d="m23 6-9.5 9.5-5-5L1 18"/><path d="M17 6h6v6"/>', refresh:'<path d="M23 4v6h-6M1 20v-6h6"/><path d="M3.5 9a9 9 0 0 1 14.9-3.4L23 10M1 14l4.6 4.4A9 9 0 0 0 20.5 15"/>',
 passport:'<rect x="4" y="2" width="16" height="20" rx="2"/><circle cx="12" cy="10" r="3"/><path d="M8 17h8"/>', grip:'<circle cx="9" cy="6" r="1"/><circle cx="15" cy="6" r="1"/><circle cx="9" cy="12" r="1"/><circle cx="15" cy="12" r="1"/><circle cx="9" cy="18" r="1"/><circle cx="15" cy="18" r="1"/>',
 print:'<path d="M6 9V2h12v7M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/>', upload:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12"/>',
 image:'<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/>', heart:'<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21.2l8.8-8.8a5.5 5.5 0 0 0 0-7.8z"/>',
 share:'<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4"/>', wifi:'<path d="M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0M12 19.5h.01M1.4 9a16 16 0 0 1 21.2 0"/>',
 chevR:'<path d="m9 18 6-6-6-6"/>', chevL:'<path d="m15 18-6-6 6-6"/>', chevD:'<path d="m6 9 6 6 6-6"/>', arrowR:'<path d="M5 12h14M12 5l7 7-7 7"/>', globe:'<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20"/>',
 shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>', tag:'<path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0L2 12V2h10l8.6 8.6a2 2 0 0 1 0 2.8z"/><circle cx="7" cy="7" r="1"/>'
};
const I=(n,c='')=>`<svg class="i ${c}" viewBox="0 0 24 24">${P[n]||''}</svg>`;
window.I=I;
const NAV=[
 ['Overview',[['dashboard','Dashboard','grid'],['reports','Reports','chart']]],
 ['Sales',[['enquiries','Enquiries & Leads','inbox',24],['customers','Customers','users'],['bookings','Bookings','ticket']]],
 ['Products',[['packages','Tour Packages','package'],['itinerary','Itineraries','route'],['hotels','Hotels','hotel'],['transport','Transportation','bus']]],
 ['Finance',[['payments','Payments & Invoices','card'],['suppliers','Suppliers','truck']]],
 ['System',[['components','Design System','layers'],['#','Settings','settings']]]
];
const FILE={dashboard:'index.html',reports:'reports.html',enquiries:'enquiries.html',customers:'customers.html',bookings:'bookings.html',packages:'packages.html',itinerary:'itinerary.html',hotels:'hotels.html',transport:'transport.html',payments:'payments.html',suppliers:'suppliers.html',components:'components.html'};
function shell(){
 const b=document.body, page=b.dataset.page, content=document.getElementById('content');
 if(!content) return;
 const crumbs=(b.dataset.crumbs||'').split('|').filter(Boolean);
 const nav=NAV.map(([g,items])=>`<div class="nav-label">${g}</div>`+items.map(([k,l,ic,c])=>`<a href="${FILE[k]||'#'}" class="${k===page?'active':''}">${I(ic)}<span>${l}</span>${c?`<span class="count">${c}</span>`:''}</a>`).join('')).join('');
 const app=document.createElement('div'); app.className='app';
 app.innerHTML=`<aside class="sidebar" id="sidebar"><div class="brand"><div class="logo">${I('globe')}</div><div>Voyara<small>Travel ERP</small></div></div><nav class="nav">${nav}</nav>
 <div class="side-foot"><b>Peak season · Oct–Jan</b>Departures this month: 68 of 90 seats filled<div class="progress"><i style="width:76%"></i></div></div></aside>
 <div class="main"><header class="topbar"><button class="icon-btn menu-toggle" onclick="document.getElementById('sidebar').classList.toggle('open')" aria-label="Menu">${I('menu')}</button>
 <div class="search">${I('search')}<input placeholder="Search bookings, customers, packages, invoices…" aria-label="Global search"><kbd>⌘ K</kbd></div>
 <div class="top-actions"><a class="btn btn-primary btn-sm hide-sm" href="enquiries.html">${I('plus')}New Enquiry</a><button class="icon-btn hide-sm" aria-label="Help">${I('help')}</button>
 <div class="dropdown"><button class="icon-btn" data-dd aria-label="Notifications">${I('bell')}<span class="dot"></span></button>
 <div class="dd-menu notif"><div style="display:flex;justify-content:space-between;padding:8px 10px"><b style="font-size:13.5px">Notifications</b><a class="btn-link small" style="padding:0">Mark all read</a></div>
 <div class="n"><div class="ic green avatar sm">${I('check')}</div><div><p><b>Payment received</b> ₹1,24,000 from Ananya Iyer (BK-24817)</p><span>4 min ago</span></div></div>
 <div class="n"><div class="ic amber avatar sm">${I('alert')}</div><div><p><b>Visa pending</b> for 3 travellers on Dubai 5N departure 18 Oct</p><span>1 hr ago</span></div></div>
 <div class="n"><div class="ic navy avatar sm">${I('inbox')}</div><div><p><b>New enquiry</b> Maldives honeymoon, 2 pax, Dec</p><span>2 hr ago</span></div></div></div></div>
 <div class="dropdown"><div class="profile" data-dd><img class="avatar" src="img/avatar2.jpg" alt=""><div class="meta"><b>Sailesh Kumar</b><span>Operations Head</span></div>${I('chevD','muted')}</div>
 <div class="dd-menu"><a>${I('user')}My profile</a><a>${I('settings')}Account settings</a><hr><a>${I('logout')}Sign out</a></div></div></div></header>
 <div class="page"><div class="crumbs"><a href="index.html">Home</a>${crumbs.map((c,i)=>`<span class="sep">/</span>${i===crumbs.length-1?`<span style="color:var(--gray-700)">${c}</span>`:`<a>${c}</a>`}`).join('')}</div></div></div>`;
 const pg=app.querySelector('.page'); while(content.firstChild) pg.appendChild(content.firstChild); content.remove();
 b.prepend(app);
}
function toast(title,msg,type=''){let c=document.querySelector('.toasts');if(!c){c=document.createElement('div');c.className='toasts';document.body.appendChild(c)}
 const t=document.createElement('div');t.className='toast '+type;t.innerHTML=`<div style="color:${type==='error'?'var(--danger)':type==='warn'?'var(--warning)':'var(--success)'}">${I(type==='error'?'xc':type==='warn'?'alert':'checkc')}</div><div><b>${title}</b><span>${msg}</span></div>`;
 c.appendChild(t);setTimeout(()=>{t.style.transition='.3s';t.style.opacity=0;setTimeout(()=>t.remove(),300)},3200)}
window.toast=toast;
document.addEventListener('DOMContentLoaded',()=>{
 document.querySelectorAll('[data-i]').forEach(e=>e.insertAdjacentHTML('afterbegin',I(e.dataset.i)));
 shell();
 document.addEventListener('click',e=>{
  const dd=e.target.closest('[data-dd]'); document.querySelectorAll('.dropdown.open').forEach(d=>{if(!dd||d!==dd.parentElement)d.classList.remove('open')});
  if(dd){dd.parentElement.classList.toggle('open');return}
  const o=e.target.closest('[data-open]'); if(o){document.getElementById(o.dataset.open).classList.add('open');return}
  const c=e.target.closest('[data-close]'); if(c||e.target.classList.contains('overlay')){(c?c.closest('.overlay'):e.target).classList.remove('open');if(c&&c.dataset.toast)toast(...c.dataset.toast.split('|'));return}
  const t=e.target.closest('[data-toast]'); if(t){toast(...t.dataset.toast.split('|'));return}
  const ch=e.target.closest('.chip,.seg a,.tabs a,.pages a'); if(ch&&ch.getAttribute('href')===null){[...ch.parentElement.children].forEach(x=>x.classList.remove('active'));ch.classList.add('active')}
  const th=e.target.closest('th.sort'); if(th){const tb=th.closest('table').tBodies[0],i=[...th.parentElement.children].indexOf(th),asc=!th.classList.contains('asc');
   th.parentElement.querySelectorAll('th').forEach(x=>x.classList.remove('asc','desc'));th.classList.add(asc?'asc':'desc');
   const v=r=>{const s=r.children[i].innerText.replace(/[₹,\s]/g,'');return isNaN(parseFloat(s))?s:parseFloat(s)};
   [...tb.rows].sort((a,b)=>(v(a)>v(b)?1:-1)*(asc?1:-1)).forEach(r=>tb.appendChild(r))}
 });
 document.addEventListener('keydown',e=>{if(e.key==='Escape')document.querySelectorAll('.overlay.open').forEach(o=>o.classList.remove('open'));if((e.metaKey||e.ctrlKey)&&e.key==='k'){e.preventDefault();document.querySelector('.search input')?.focus()}});
});
/* Chart defaults */
if(window.Chart){Chart.defaults.font.family="Inter, system-ui, sans-serif";Chart.defaults.font.size=12;Chart.defaults.color='#64748B';Chart.defaults.plugins.legend.labels.usePointStyle=true;Chart.defaults.plugins.legend.labels.boxWidth=8;Chart.defaults.plugins.legend.labels.boxHeight=8;Chart.defaults.plugins.legend.labels.padding=14;Chart.defaults.plugins.tooltip.backgroundColor='#0B1F3A';Chart.defaults.plugins.tooltip.padding=10;Chart.defaults.plugins.tooltip.cornerRadius=8}
const inr=n=>'₹'+Number(n).toLocaleString('en-IN'); window.inr=inr;
window.addEventListener('load',()=>{if(window.Chart)document.fonts.ready.then(()=>Object.values(Chart.instances).forEach(c=>{c.resize();c.update('none')}))});
