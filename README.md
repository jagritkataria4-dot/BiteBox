<!DOCTYPE html>
<html lang="en"><head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>Bite Box</title>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;800&family=DM+Sans:wght@400;500;700&display=swap">
<link rel="stylesheet" href="style.css"></head><body>
<div id="welcome" class="screen"><div class="wcard"><img class="logo wl" alt="Bite Box logo"><h1>Bite Box</h1><p>Good food, happy mood! Enter your details once and we will remember them for every order.</p>
<label for="wn">Name</label><input type="text" id="wn" autocomplete="name">
<label for="wp">Phone number</label><input type="tel" id="wp" maxlength="10" inputmode="numeric" placeholder="10-digit number" autocomplete="tel">
<label for="wa">Delivery address</label><textarea id="wa" rows="3" autocomplete="street-address" placeholder="House no., street, landmark"></textarea><button type="button" class="loc" data-t="wa">📍 Use my current location</button><p class="hint"></p>
<p class="err" id="werr" role="alert"></p><button class="btn" type="button" id="wgo" style="width:100%">Start ordering</button></div></div>

<div id="app" hidden>
<header class="top"><img class="logo" alt=""><span>Bite Box</span><span class="crumb" id="crumb"></span><span id="hi"></span></header>
<main class="wrap">
<div class="view" id="v-home"><h2 class="pagetitle">🏠 Home</h2>
<div class="homehero"><div class="floaters" aria-hidden="true"><i>🍕</i><i>🍔</i><i>🍟</i><i>🍝</i><i>🥤</i><i>🍰</i></div>
<img class="logo" alt="Bite Box logo"><h1>Bite Box</h1><p class="greet" id="greet"></p><p>Pure veg pizza, burgers, pasta and more, delivered to your door.</p><button class="btn" type="button" data-go="menu">View menu</button></div>
<div class="marq" aria-hidden="true"><div>🌱 100% Pure Veg &nbsp;•&nbsp; 🔥 Fresh &amp; Hot &nbsp;•&nbsp; 😋 Good Food, Happy Mood! &nbsp;•&nbsp; 🛵 Cash on delivery &nbsp;•&nbsp; 🌱 100% Pure Veg &nbsp;•&nbsp; 🔥 Fresh &amp; Hot &nbsp;•&nbsp; 😋 Good Food, Happy Mood! &nbsp;•&nbsp; 🛵 Cash on delivery &nbsp;•&nbsp;</div></div>
<div id="reorder"></div>
<h3 class="sec">⭐ Popular picks</h3><div class="hscroll" id="pop"></div>
<h3 class="sec">What are you craving?</h3><div class="tiles" id="tiles"></div>
<div class="box" style="margin-top:20px"><b>Deliver to</b><div class="savedbox" id="dl"></div><button class="link" type="button" data-go="profile">Change details</button></div></div>
<div class="view" id="v-menu" hidden><h2 class="pagetitle">🍔 Menu</h2><p class="sub">Pick a size, tap Add, then open your cart.</p><div id="menuBox"></div></div>
<div class="view" id="v-cart" hidden><h2 class="pagetitle">🛒 My Cart</h2><div id="cartWrap"><div class="box"><h2>Your order</h2><div id="cart"></div><div class="total"><span>Total</span><span>₹<span id="total">0</span></span></div></div>
<div class="box" style="margin-top:18px"><b>Deliver to</b><div class="savedbox" id="dl2"></div><button class="link" type="button" data-go="profile">Change details</button>
<label>Payment</label><div>💵 Cash on delivery</div><p class="err" id="err" role="alert"></p><button class="btn" type="button" id="placeBtn" style="width:100%">Place order</button></div></div><div id="billWrap" hidden></div></div>
<div class="view" id="v-profile" hidden><h2 class="pagetitle">👤 My Profile</h2><div class="box"><h2>Your details</h2><label for="pn">Name</label><input type="text" id="pn"><label for="pp">Phone number</label><input type="tel" id="pp" maxlength="10" inputmode="numeric"><label for="pa">Delivery address</label><textarea id="pa" rows="3" placeholder="House no., street, landmark"></textarea><button type="button" class="loc" data-t="pa">📍 Use my current location</button><p class="hint"></p>
<p class="err" id="perr" role="alert"></p><p class="msg" id="pmsg"></p><button class="btn" type="button" id="psave" style="width:100%">Save details</button></div></div>
</main>
<nav class="tabs"><button data-go="home" class="on"><span class="i">🏠</span>Home</button><button data-go="menu"><span class="i">🍔</span>Menu</button><button data-go="cart"><span class="i">🛒</span>Cart<b id="badge"></b></button><button data-go="profile"><span class="i">👤</span>Profile</button></nav>
</div>
<script src="script.js"></script></body></html>


:root{box-sizing:border-box;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px);
--bg:#fff7e0;--ink:#1d1a16;--card:#fff;--yellow:#ffc21a;--orange:#ff5a1f;--green:#1f8a3b;--line:#1d1a16;--mut:#6b6254}
@media(prefers-color-scheme:dark){:root:not([data-theme="light"]){--bg:#17150f;--ink:#fff3d6;--card:#25221a;--line:#ffc21a;--mut:#b9ab8d}}
:root[data-theme="dark"]{--bg:#17150f;--ink:#fff3d6;--card:#25221a;--line:#ffc21a;--mut:#b9ab8d}
html{scroll-padding-top:env(safe-area-inset-top,0px);scroll-behavior:smooth}
*,*:before,*:after{box-sizing:inherit}
body{margin:0;background:var(--bg);color:var(--ink);font:17px/1.55 'DM Sans',Arial,sans-serif}
h1,h2,h3{font-family:'Baloo 2',Arial,sans-serif;line-height:1.1;margin:0}
.wrap{max-width:1000px;margin:0 auto;padding:0 20px}
.hero{background:#1d1a16;color:#fff3d6;padding:36px 0 56px;border-bottom:8px solid var(--yellow)}
.hero .wrap{display:flex;align-items:center;gap:36px;flex-wrap:wrap;justify-content:center}
.hero img{width:260px;height:260px;border-radius:50%;border:5px solid var(--yellow);object-fit:cover}
.hero h1{font-size:clamp(46px,9vw,84px);color:var(--yellow);font-weight:800}
.hero p{max-width:420px;margin:12px 0 22px;color:#f1e6c8}
.btn{display:inline-block;background:var(--orange);color:#fff;border:0;border-radius:999px;padding:12px 26px;font:700 17px 'DM Sans',Arial,sans-serif;cursor:pointer;text-decoration:none}
.btn:hover{filter:brightness(.92)}
.btn:focus-visible,input:focus-visible,select:focus-visible,textarea:focus-visible,.pill:focus-visible{outline:3px solid var(--orange);outline-offset:2px}
section{padding:48px 0 0}
h2{font-size:38px;margin-bottom:6px}
.sub{color:var(--mut);margin:0 0 22px}
.cat{display:grid;grid-template-columns:260px 1fr;gap:24px;margin-bottom:34px;background:var(--card);border:3px solid var(--line);border-radius:22px;overflow:hidden}
.emo{display:flex;align-items:center;justify-content:center;background:var(--yellow);font-size:96px;min-height:200px}
.cat>img{width:100%;height:100%;min-height:220px;object-fit:cover}
.items{padding:18px 20px 18px 0}
.items h3{font-size:28px;margin-bottom:8px}
.item{display:flex;flex-wrap:wrap;align-items:center;gap:10px 14px;padding:12px 0;border-top:1px dashed var(--mut)}
.item .nm{flex:1 1 150px;font-weight:700}
.pills{display:flex;gap:6px;flex-wrap:wrap}
.pill{border:2px solid var(--line);background:transparent;color:var(--ink);border-radius:999px;padding:5px 12px;font:500 14px 'DM Sans',Arial,sans-serif;cursor:pointer}
.pill.on{background:var(--yellow);color:#1d1a16;border-color:#1d1a16;font-weight:700}
.add{background:var(--ink);color:var(--bg);border:0;border-radius:999px;padding:8px 16px;font:700 15px 'DM Sans',Arial,sans-serif;cursor:pointer}
.add:hover{background:var(--orange);color:#fff}
.order{display:grid;grid-template-columns:1fr 1fr;gap:24px;align-items:start;padding-bottom:70px}
.box{background:var(--card);border:3px solid var(--line);border-radius:22px;padding:24px}
label{display:block;font-weight:700;margin:14px 0 5px}
input[type=text],input[type=tel],textarea{width:100%;padding:11px;border:2px solid var(--mut);border-radius:10px;font:16px 'DM Sans',Arial,sans-serif;background:var(--bg);color:var(--ink)}
.cartrow{display:flex;justify-content:space-between;gap:10px;align-items:center;padding:10px 0;border-bottom:1px dashed var(--mut)}
.cartrow small{display:block;color:var(--mut)}
.q{display:flex;align-items:center;gap:6px}
.q button{width:28px;height:28px;border-radius:50%;border:2px solid var(--line);background:transparent;color:var(--ink);font-weight:700;cursor:pointer}
.total{display:flex;justify-content:space-between;font:800 28px 'Baloo 2',Arial,sans-serif;margin-top:14px}
.savedbox{background:var(--bg);border:2px dashed var(--mut);border-radius:14px;padding:14px 16px;margin-top:14px}.savedbox b{display:block}.link{background:none;border:0;color:var(--orange);font:700 15px 'DM Sans',Arial,sans-serif;cursor:pointer;padding:0;margin-top:6px;text-decoration:underline}

@keyframes rise{from{opacity:0;transform:translateY(34px)}to{opacity:1;transform:none}}
@keyframes floaty{0%,100%{transform:translateY(0) rotate(-2deg)}50%{transform:translateY(-12px) rotate(2deg)}}
@keyframes pulse{0%,100%{box-shadow:0 0 0 0 rgba(255,90,31,.55)}50%{box-shadow:0 0 0 14px rgba(255,90,31,0)}}
@keyframes pop{0%{transform:scale(.8);opacity:0}70%{transform:scale(1.05)}100%{transform:scale(1);opacity:1}}
@keyframes bump{50%{transform:scale(1.3);color:var(--orange)}}
.hero img{animation:floaty 5s ease-in-out infinite}
.hero h1{animation:rise .8s ease both}.hero p{animation:rise .8s .15s ease both}.hero .btn{animation:rise .8s .3s ease both,pulse 2.2s 1.2s infinite}
.btn,.add,.pill{transition:transform .15s,background .2s,filter .2s}
.btn:hover,.add:hover{transform:translateY(-2px)}.btn:active,.add:active,.pill:active{transform:scale(.94)}
.pill:hover{transform:translateY(-1px)}
.cat{opacity:0;transition:box-shadow .25s,transform .25s}.cat.seen{opacity:1}.cat.in{animation:rise .7s ease forwards}
.cat:hover{transform:translateY(-4px);box-shadow:6px 8px 0 var(--yellow)}
.cat>img{transition:transform .5s}.cat:hover>img{transform:scale(1.05)}.cat{overflow:hidden}
.box{animation:rise .6s ease both}.ok{animation:pop .6s ease both}
.bump{display:inline-block;animation:bump .4s}
.cartrow{animation:pop .3s ease both}
@media(prefers-reduced-motion:reduce){*,*:before,*:after{animation:none!important;transition:none!important}.cat{opacity:1}}
.ok{grid-column:1/-1}.bill{text-align:left;background:var(--bg);border:2px dashed var(--mut);border-radius:14px;padding:18px;margin:16px auto 20px;max-width:560px}
.bh{text-align:center;border-bottom:2px dashed var(--mut);padding-bottom:10px;margin-bottom:10px}.bh b{display:block;font:800 28px 'Baloo 2',Arial,sans-serif;color:var(--orange)}
.bm{display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap;padding:3px 0;font-size:15px}
.tw{overflow-x:auto;margin:10px 0}.bill table{width:100%;border-collapse:collapse;font-size:15px}.bill th{text-align:left;border-bottom:2px solid var(--ink);padding:6px 4px}.bill td{padding:6px 4px;border-bottom:1px dashed var(--mut)}.bill td small{color:var(--mut)}
.bt{display:flex;justify-content:space-between;font:800 26px 'Baloo 2',Arial,sans-serif;border-top:2px solid var(--ink);padding-top:8px;margin-top:6px}.bn{text-align:center;margin:12px 0 0;font-size:15px;color:var(--mut)}
.receipt{background:#fffdf5;color:#1d1a16;border:2px dashed #1d1a16;border-radius:14px;padding:18px;text-align:left;margin:16px 0;font-size:15px}
.receipt .rh{text-align:center;font-weight:500}.receipt .rh b{font:800 24px 'Baloo 2',Arial,sans-serif}
.receipt .meta{display:flex;justify-content:space-between;gap:10px;flex-wrap:wrap;margin-top:8px}.receipt .meta2{margin:10px 0;padding:8px 0;border-top:1px dashed #1d1a16;border-bottom:1px dashed #1d1a16}
.receipt table{width:100%;border-collapse:collapse}.receipt th,.receipt td{padding:6px 4px;text-align:right;border-bottom:1px solid #e6dcc0}.receipt th:first-child,.receipt td:first-child{text-align:left}.receipt small{color:#6b6254}
.receipt .gt{display:flex;justify-content:space-between;font:800 24px 'Baloo 2',Arial,sans-serif;margin:10px 0}
.err{color:var(--orange);font-weight:700;min-height:24px;margin:10px 0 0}
.ok{text-align:center}.ok h2{color:var(--green)}
footer{background:#1d1a16;color:#f1e6c8;text-align:center;padding:22px;font-weight:500}
@media(max-width:760px){.cat,.order{grid-template-columns:1fr}.cat>img{height:200px}.items{padding:0 18px 18px}}

[hidden]{display:none!important}
body{padding-bottom:90px}
.screen{min-height:100vh;display:flex;align-items:center;justify-content:center;padding:24px;background:#1d1a16}
.wcard{background:var(--card);border:3px solid var(--yellow);border-radius:24px;padding:26px;max-width:420px;width:100%;animation:pop .6s both}
.wl{width:130px;height:130px;border-radius:50%;border:4px solid var(--yellow);display:block;margin:0 auto 8px;animation:floaty 5s ease-in-out infinite}
.wcard h1{text-align:center;color:var(--orange);font-size:44px}.wcard p{text-align:center;margin:6px 0 0}
.top{position:sticky;top:env(safe-area-inset-top,0px);z-index:5;background:#1d1a16;color:var(--yellow);display:flex;align-items:center;gap:10px;padding:10px 16px;font:800 22px 'Baloo 2',Arial,sans-serif}
.top img{width:38px;height:38px;border-radius:50%;border:2px solid var(--yellow)}.top #hi{margin-left:auto;font:500 15px 'DM Sans',Arial,sans-serif;color:#f1e6c8}
.tabs{position:fixed;left:0;right:0;bottom:0;display:flex;background:#1d1a16;border-top:3px solid var(--yellow);padding:6px 6px calc(6px + env(safe-area-inset-bottom,0px));z-index:6}
.tabs button{flex:1;background:none;border:0;color:#cdbf9c;font:600 12px 'DM Sans',Arial,sans-serif;cursor:pointer;padding:4px 0;position:relative}
.tabs button span.i{display:block;font-size:22px}.tabs button.on{color:var(--yellow)}
#badge{position:absolute;top:0;left:55%;background:var(--orange);color:#fff;border-radius:999px;font-size:11px;min-width:18px;padding:0 5px}#badge:empty{display:none}
.view{padding:24px 0 20px;animation:rise .4s both}
.homehero{background:#1d1a16;border-radius:24px;padding:24px;text-align:center;color:#f1e6c8;border:3px solid var(--yellow)}
.homehero img{width:150px;height:150px;border-radius:50%;border:4px solid var(--yellow);animation:floaty 5s ease-in-out infinite}
.homehero h1{color:var(--yellow);font-size:52px}.homehero p{margin:8px 0 16px}
.tiles{display:grid;grid-template-columns:repeat(auto-fit,minmax(130px,1fr));gap:12px;margin-top:20px}
.tile{background:var(--card);border:3px solid var(--line);border-radius:18px;padding:14px;text-align:center;font:700 17px 'DM Sans',Arial,sans-serif;color:var(--ink);cursor:pointer;transition:transform .15s}.tile:active{transform:scale(.95)}.tile span{display:block;font-size:36px}

@keyframes grad{0%,100%{background-position:0 50%}50%{background-position:100% 50%}}
@keyframes drift{0%,100%{transform:translateY(0) rotate(-8deg)}50%{transform:translateY(-22px) rotate(10deg)}}
@keyframes mq{to{transform:translateX(-100%)}}
@keyframes shine{0%{box-shadow:0 0 0 0 rgba(255,194,26,.7)}100%{box-shadow:0 0 0 18px rgba(255,194,26,0)}}
.pagetitle{margin-bottom:14px;animation:rise .5s both}
.homehero{position:relative;overflow:hidden;background:linear-gradient(135deg,#1d1a16,#4a3410,#1d1a16);background-size:220% 220%;animation:grad 9s ease infinite}
.homehero>*{position:relative;z-index:1}.homehero>.floaters{position:absolute;inset:0;z-index:0}
.floaters i{position:absolute;font-style:normal;font-size:30px;opacity:.45;animation:drift 6s ease-in-out infinite}
.floaters i:nth-child(1){left:6%;top:10%}.floaters i:nth-child(2){right:8%;top:8%;animation-delay:-1s}.floaters i:nth-child(3){left:10%;bottom:10%;animation-delay:-2s}
.floaters i:nth-child(4){right:10%;bottom:14%;animation-delay:-3s}.floaters i:nth-child(5){left:42%;top:3%;animation-delay:-4s}.floaters i:nth-child(6){right:36%;bottom:3%;animation-delay:-5s}
.greet{font:800 22px 'Baloo 2',Arial,sans-serif;color:#fff;margin:0}
.homehero .btn{animation:shine 1.8s infinite}
.marq{overflow:hidden;white-space:nowrap;background:var(--yellow);color:#1d1a16;border-radius:999px;margin-top:16px;font-weight:700;padding:8px 0}
.marq div{display:inline-block;padding-left:100%;animation:mq 22s linear infinite}
.sec{font-size:26px;margin:26px 0 4px;animation:rise .5s both}
.hscroll{display:flex;gap:12px;overflow-x:auto;padding:8px 2px 14px;scroll-snap-type:x mandatory}
.pcard{flex:0 0 150px;scroll-snap-align:start;background:var(--card);border:3px solid var(--line);border-radius:18px;padding:12px;text-align:center;animation:pop .5s both;animation-delay:calc(var(--d)*90ms)}
.pcard .e{font-size:42px;display:block;animation:floaty 4s ease-in-out infinite}.pcard b{display:block;line-height:1.2;min-height:38px}.pcard small{color:var(--mut)}
.pcard .add{margin-top:8px;width:100%}
.tile{animation:pop .5s both;animation-delay:calc(var(--d)*80ms)}.tile:hover{transform:translateY(-4px) rotate(-1deg)}
.reorder{margin-top:18px;border-color:var(--orange);animation:pop .6s both}.reorder small{display:block;color:var(--mut);margin:4px 0 10px}
@media(prefers-reduced-motion:reduce){.marq div{padding-left:0}}
.lm{font-size:14px;color:var(--mut);margin:6px 0 0}.savedbox,.receipt .meta2{white-space:pre-line}
.loc{display:block;width:100%;margin-top:8px;background:transparent;color:var(--ink);border:2px solid var(--orange);border-radius:10px;padding:10px;font:700 15px 'DM Sans',Arial,sans-serif;cursor:pointer;transition:background .2s,transform .15s}
.loc:hover{background:var(--yellow);color:#1d1a16}.loc:active{transform:scale(.97)}
.hint{margin:6px 0 0;font-size:14px;color:var(--mut);min-height:20px;text-align:left!important}
.savedbox,.receipt .meta2{white-space:pre-line}
.tile img.ti{width:76px;height:76px;border-radius:50%;object-fit:cover;border:3px solid var(--yellow);display:block;margin:0 auto 8px}
.pcard img.pi{width:96px;height:96px;border-radius:50%;object-fit:cover;border:3px solid var(--yellow);display:block;margin:0 auto 8px;animation:floaty 4s ease-in-out infinite}
body{--acc:#ffc21a}body[data-page=menu]{--acc:#ff5a1f}body[data-page=cart]{--acc:#1f8a3b}body[data-page=profile]{--acc:#2f6fed}
@keyframes bounce{40%{transform:translateY(-9px) scale(1.3)}}
.top{border-bottom:5px solid var(--acc);transition:border-color .4s}
.crumb{color:#fff;background:var(--acc);border-radius:999px;padding:1px 14px;font:700 15px 'DM Sans',Arial,sans-serif;animation:pop .4s both}
.tabs{border-top-color:var(--acc);transition:border-color .4s}
.tabs button{transition:color .3s}.tabs button.on{color:#fff}.tabs button.on span.i{animation:bounce .5s}
.tabs button.on::before{content:"";position:absolute;inset:0 6px;border-radius:14px;background:var(--acc);z-index:-1;animation:pop .35s both}
body[data-page=home] .tabs button.on,body[data-page=home] .crumb,body[data-page=home] .pagetitle{color:#1d1a16}
.pagetitle{display:inline-block;background:var(--acc);color:#fff;border-radius:16px;padding:4px 20px;box-shadow:4px 4px 0 var(--ink);font-size:34px}
.msg{color:var(--green);font-weight:700;min-height:24px}



const LOGO="images/logo.jpg";
const OWNER_WA="917404852562";/* shop WhatsApp number with country code, e.g. 919876543210 */
const MENU=[
{t:"Pizza",img:"images/pizza.jpg",sizes:["Regular","Medium","Large"],items:[["Golden Delight Pizza",[170,260,360]],["Cheese Burst Pizza",[200,280,400]],["Margherita Pizza",[220,350,450]],["Veggie Supreme Pizza",[190,290,390]],["Paneer Tikka Pizza",[210,310,420]],["Corn & Capsicum Pizza",[180,270,370]],["Mushroom Delight Pizza",[200,300,400]]]},
{t:"Burger",img:"images/burger.jpg",sizes:[""],items:[["Veg Burger",[50]],["Aloo Tikki Burger",[70]],["Crispy Veg Burger",[80]],["Cheese Burger",[90]],["Paneer Burger",[100]],["Mexican Veggie Burger",[110]]]},
{t:"Pasta",img:"images/pasta.jpg",sizes:["Half","Full"],items:[["White Sauce Pasta",[155,275]],["Red Sauce Pasta",[165,285]],["Mix Sauce Pasta",[175,295]],["Pink Sauce Pasta",[170,290]],["Mac & Cheese",[180,300]],["Paneer Makhani Pasta",[185,305]],["Pesto Veg Pasta",[180,300]]]},
{t:"Fries & Snacks",img:"images/fries.jpg",sizes:["Regular","Large"],items:[["French Fries",[70,115]],["Peri Peri Fries",[90,145]],["Veg Nuggets",[90,150]],["Garlic Bread",[100,165]],["Cheesy Garlic Bread",[125,190]],["Loaded Cheese Fries",[130,190]]]},
{t:"Drinks",img:"images/drink.jpg",sizes:["Small","Large"],items:[["Cold Drink",[35,55]],["Fresh Lime Soda",[45,70]],["Cold Coffee",[80,120]],["Mango Shake",[90,130]],["Oreo Shake",[100,150]]]},
{t:"Desserts",img:"images/dessert.jpg",sizes:[""],items:[["Gulab Jamun (2 pcs)",[60]],["Chocolate Brownie",[80]],["Choco Lava Cake",[90]],["Ice Cream Sundae",[110]]]}];
const cart={};const sel={};
const $=id=>document.getElementById(id);
function renderMenu(){
$("menuBox").innerHTML=MENU.map((c,ci)=>`<div class="cat" id="cat${ci}">${c.img?`<img src="${c.img}" alt="${c.t}">`:`<div class="emo" aria-hidden="true">${c.emo}</div>`}<div class="items"><h3>${c.t}</h3>`+
c.items.map(([n,p],ii)=>{const k=ci+"-"+ii,s=sel[k]??0;
return `<div class="item"><span class="nm">${n}</span>`+
(c.sizes[0]?`<div class="pills" role="group" aria-label="Size">${c.sizes.map((z,zi)=>`<button type="button" class="pill ${zi===s?'on':''}" onclick="pick('${k}',${zi})">${z}</button>`).join("")}</div>`:"")+
`<b>₹${p[s]??p[0]}</b><button type="button" class="add" onclick="add(${ci},${ii},this)">Add</button></div>`}).join("")+`</div></div>`).join("");reveal();}
const revealed=new Set();
const io="IntersectionObserver"in window?new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");revealed.add(+e.target.dataset.i);io.unobserve(e.target)}}),{threshold:.15}):null;
function reveal(){document.querySelectorAll(".cat").forEach((el,i)=>{el.dataset.i=i;if(revealed.has(i)||!io)el.classList.add("seen");else io.observe(el)})}
function pick(k,z){sel[k]=z;renderMenu()}
function add(ci,ii,b){if(b){const o=b.textContent;b.textContent="Added ✓";setTimeout(()=>b.textContent=o,900)}const c=MENU[ci],s=sel[ci+"-"+ii]??0,[n,p]=c.items[ii];
const key=n+"|"+s;cart[key]=cart[key]||{n,z:c.sizes[s]||"",p:p[s],q:0};cart[key].q++;renderCart();}
function chg(k,d){cart[k].q+=d;if(cart[k].q<=0)delete cart[k];renderCart()}
function renderCart(){const ks=Object.keys(cart);let t=0;
$("cart").innerHTML=ks.length?ks.map(k=>{const i=cart[k];t+=i.p*i.q;
return `<div class="cartrow"><div>${i.n}<small>${i.z?i.z+" · ":""}₹${i.p} each</small></div><div class="q"><button type="button" aria-label="Remove one" onclick="chg('${k}',-1)">−</button><b>${i.q}</b><button type="button" aria-label="Add one" onclick="chg('${k}',1)">+</button></div><b>₹${i.p*i.q}</b></div>`}).join(""):'<p class="sub">Your cart is empty. Add something from the menu.</p>';
const tt=$("total");if(tt.textContent!=String(t)){tt.textContent=t;tt.classList.remove("bump");void tt.offsetWidth;tt.classList.add("bump")}$("badge").textContent=Object.values(cart).reduce((a,x)=>a+x.q,0)||"";return t}
const KEY="bitebox_details";
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
let me=null;try{const d=JSON.parse(localStorage.getItem(KEY));if(d&&d.name&&d.ph&&d.ad)me=d}catch(x){}
function check(n,p,a){if(!n)return"Please enter your name.";if(!/^[0-9]{10}$/.test(p))return"Please enter a valid 10-digit phone number (no +91 or spaces).";if(!a)return"Please enter your delivery address.";return""}
function save(d){me=d;try{localStorage.setItem(KEY,JSON.stringify(d))}catch(x){}}
function show(v){["home","menu","cart","profile"].forEach(k=>{$("v-"+k).hidden=k!==v;document.querySelector('.tabs [data-go="'+k+'"]').classList.toggle("on",k===v)});document.body.dataset.page=v;const c=$("crumb");c.textContent=({home:"🏠 Home",menu:"🍔 Menu",cart:"🛒 Cart",profile:"👤 Profile"})[v];c.style.animation="none";void c.offsetWidth;c.style.animation="";window.scrollTo(0,0)}
const LKEY="bitebox_last";
const POP=[[0,1,"🍕"],[1,1,"🍔"],[2,1,"🍝"],[3,0,"🍟"],[4,3,"🥤"]];
$("pop").innerHTML=POP.map(([c,i,e],n)=>{const it=MENU[c].items[i];return `<div class="pcard" style="--d:${n}"><img class="pi" src="${MENU[c].img}" alt=""><b>${it[0]}</b><small>from ₹${it[1][0]}</small><button type="button" class="add" onclick="add(${c},${i},this)">Add</button></div>`}).join("");
function renderReorder(){let l=null;try{l=JSON.parse(localStorage.getItem(LKEY))}catch(x){}
if(!l||!l.length){$("reorder").innerHTML="";return}
const tot=l.reduce((a,[k,x])=>a+x.p*x.q,0);
$("reorder").innerHTML=`<div class="box reorder"><b>🔁 Order your usual?</b><small>${l.map(([k,x])=>x.q+"× "+esc(x.n)).join(", ")}</small><button class="btn" type="button" id="reBtn">Reorder · ₹${tot}</button></div>`;
$("reBtn").onclick=()=>{l.forEach(([k,x])=>{cart[k]={...x}});renderCart();show("cart")}}
function renderMe(){const hr=new Date().getHours();$("greet").textContent=(hr<12?"Good morning":hr<17?"Good afternoon":"Good evening")+", "+me.name.split(" ")[0]+"! Hungry? 😋";renderReorder();$("hi").textContent="Hi, "+me.name.split(" ")[0];const b=`<b>${esc(me.name)} · ${esc(me.ph)}</b>${esc(me.ad)}`;$("dl").innerHTML=b;$("dl2").innerHTML=b;$("pn").value=me.name;$("pp").value=me.ph;$("pa").value=me.ad}
function enter(){$("welcome").hidden=true;$("app").hidden=false;renderMe();show("home")}
document.querySelectorAll(".logo").forEach(i=>i.src=LOGO);
document.querySelectorAll("[data-go]").forEach(b=>b.onclick=()=>show(b.dataset.go));
const ems=["🍕","🍔","🍝","🍟","🥤","🍰"];
$("tiles").innerHTML=MENU.map((c,i)=>`<button type="button" class="tile" data-c="${i}" style="--d:${i}"><img class="ti" src="${c.img}" alt="">${c.t}</button>`).join("");
document.querySelectorAll(".tile").forEach(b=>b.onclick=()=>{show("menu");setTimeout(()=>{const e=$("cat"+b.dataset.c);if(e)e.scrollIntoView({behavior:"smooth",block:"start"})},80)});
document.querySelectorAll(".loc").forEach(b=>b.onclick=()=>{const ta=$(b.dataset.t),m=b.nextElementSibling;
if(!navigator.geolocation){m.textContent="Location is not available here. Please type your address.";return}
m.textContent="Finding your location…";
navigator.geolocation.getCurrentPosition(p=>{const link="https://maps.google.com/?q="+p.coords.latitude.toFixed(6)+","+p.coords.longitude.toFixed(6);
ta.value=(ta.value.trim()?ta.value.trim()+"\n":"")+"📍 My location: "+link;m.textContent="Location added ✓ Please also add your house no. or landmark."},
()=>{m.textContent="Could not get your location. Please allow location access, or type your address."},{enableHighAccuracy:true,timeout:12000})});
$("wgo").onclick=()=>{const n=$("wn").value.trim(),p=$("wp").value.trim(),a=$("wa").value.trim(),m=check(n,p,a);$("werr").textContent=m;if(!m){save({name:n,ph:p,ad:a});enter()}};
$("psave").onclick=()=>{const n=$("pn").value.trim(),p=$("pp").value.trim(),a=$("pa").value.trim(),m=check(n,p,a);$("perr").textContent=m;$("pmsg").textContent="";if(!m){save({name:n,ph:p,ad:a});renderMe();$("pmsg").textContent="Saved ✓"}};
const place=()=>{const t=renderCart(),er=m=>{$("err").textContent=m;if(m){try{$("err").scrollIntoView({block:"center"})}catch(x){}}};
if(!Object.keys(cart).length)return er("Please add at least one item from the menu first.");
er("");const {name,ph,ad}=me;
const rows=Object.values(cart).map(x=>`<tr><td>${esc(x.n)}${x.z?`<br><small>${x.z}</small>`:""}</td><td>${x.q}</td><td>₹${x.p}</td><td>₹${x.p*x.q}</td></tr>`).join("");
const no="BB"+Math.floor(1000+Math.random()*9000),when=new Date().toLocaleString("en-IN",{dateStyle:"medium",timeStyle:"short"});
const lines=Object.values(cart).map(x=>"- "+x.n+(x.z?" ("+x.z+")":"")+" x"+x.q+" = Rs."+x.p*x.q).join("\n");
const msg="New order #"+no+"\nName: "+name+"\nPhone: "+ph+"\nAddress: "+ad+"\n\nItems:\n"+lines+"\n\nTotal: Rs."+t+"\nPayment: Cash on delivery";
const waUrl="https://wa.me/"+OWNER_WA+"?text="+encodeURIComponent(msg);
$("billWrap").innerHTML=`<div class="box ok" id="billBox"><h2>Order placed!</h2><p>Thanks ${esc(name)}! Your order is confirmed. Here is your bill.</p>
<div class="receipt"><div class="rh"><b>🍔 BITE BOX</b><br>Good Food, Happy Mood!</div>
<div class="meta"><span>Order #${no}</span><span>${when}</span></div>
<div class="meta2"><b>${esc(name)}</b> · ${esc(ph)}<br>${esc(ad)}</div>
<table><thead><tr><th>Item</th><th>Qty</th><th>Price</th><th>Amt</th></tr></thead><tbody>${rows}</tbody></table>
<div class="gt"><span>Grand Total</span><span>₹${t}</span></div>
<div class="meta"><span>Payment</span><span>Cash on delivery</span></div>
<div class="rh" style="margin-top:12px">Thank you for ordering from Bite Box! ❤️</div></div>
<p><b>Last step:</b> send this order to the shop on WhatsApp.</p><button class="btn" id="waBtn" type="button" style="background:#1f8a3b;margin-bottom:12px">Send order on WhatsApp</button>
<div class="manual"><small>WhatsApp did not open? Copy the order and send it to <b>+91 74048 52562</b>.</small><textarea id="ordTxt" rows="7" readonly style="margin-top:6px">${esc(msg)}</textarea><button class="btn" id="cpBtn" type="button" style="margin-top:8px;background:var(--ink);color:var(--bg)">Copy order</button></div><br>
<button class="btn" type="button" id="again">Order again</button></div>`;
$("cartWrap").hidden=true;$("billWrap").hidden=false;window.scrollTo(0,0);
$("waBtn").onclick=()=>{let w=null;try{w=window.open(waUrl,"_blank")}catch(x){}if(!w){try{window.top.location.href=waUrl}catch(x){}}};
$("cpBtn").onclick=()=>{const tx=$("ordTxt");tx.focus();tx.select();try{document.execCommand("copy")}catch(x){}try{navigator.clipboard&&navigator.clipboard.writeText(msg)}catch(x){}$("cpBtn").textContent="Copied ✓ Now paste it in WhatsApp"};
$("again").onclick=()=>{$("billWrap").hidden=true;$("cartWrap").hidden=false;show("menu")};
try{localStorage.setItem(LKEY,JSON.stringify(Object.entries(cart)))}catch(x){}
Object.keys(cart).forEach(k=>delete cart[k]);renderCart();renderReorder();};
$("placeBtn").addEventListener("click",place);
renderMenu();renderCart();if(me)enter();
