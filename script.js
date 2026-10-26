const LOGO="images/logo.jpg";
const OWNER_WA="917404852562";/* shop WhatsApp number with country code, e.g. 919876543210 */
const MENU=[
{t:"Pizza",img:"images./pizza.jpg",{sizes:["Regular","Medium","Large"],items:[["Golden Delight Pizza",[170,260,360]],["Cheese Burst Pizza",[200,280,400]],["Margherita Pizza",[220,350,450]],["Veggie Supreme Pizza",[190,290,390]],["Paneer Tikka Pizza",[210,310,420]],["Corn & Capsicum Pizza",[180,270,370]],["Mushroom Delight Pizza",[200,300,400]]]},
{t:"Burger",img:"images./burger.jpg",sizes:[""],items:[["Veg Burger",[50]],["Aloo Tikki Burger",[70]],["Crispy Veg Burger",[80]],["Cheese Burger",[90]],["Paneer Burger",[100]],["Mexican Veggie Burger",[110]]]},
{t:"Pasta",img:"images./pasta.jpg",sizes:["Half","Full"],items:[["White Sauce Pasta",[155,275]],["Red Sauce Pasta",[165,285]],["Mix Sauce Pasta",[175,295]],["Pink Sauce Pasta",[170,290]],["Mac & Cheese",[180,300]],["Paneer Makhani Pasta",[185,305]],["Pesto Veg Pasta",[180,300]]]},
{t:"Fries & Snacks",img:"images./fries.jpg",sizes:["Regular","Large"],items:[["French Fries",[70,115]],["Peri Peri Fries",[90,145]],["Veg Nuggets",[90,150]],["Garlic Bread",[100,165]],["Cheesy Garlic Bread",[125,190]],["Loaded Cheese Fries",[130,190]]]},
{t:"Drinks",img:"images./drink.jpg",sizes:["Small","Large"],items:[["Cold Drink",[35,55]],["Fresh Lime Soda",[45,70]],["Cold Coffee",[80,120]],["Mango Shake",[90,130]],["Oreo Shake",[100,150]]]},
{t:"Desserts",img:"images./dessert.jpg",sizes:[""],items:[["Gulab Jamun (2 pcs)",[60]],["Chocolate Brownie",[80]],["Choco Lava Cake",[90]],["Ice Cream Sundae",[110]]]}];
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
