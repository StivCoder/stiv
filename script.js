// EDIT: your WhatsApp number, country code first, no + or spaces
const WA_NUMBER="254700000000";
const b=document.querySelector('.burger'),m=document.querySelector('.menu');
b.onclick=()=>b.setAttribute('aria-expanded',m.classList.toggle('open'));
document.querySelectorAll('[data-wa]').forEach(a=>{a.href=`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(a.dataset.wa)}`;a.target='_blank';a.rel='noopener'});
const f=document.getElementById('waForm');
f&&f.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(f);
window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(`Hello Stiv, I'm ${d.get('name')}.\nService: ${d.get('service')}\nEmail: ${d.get('email')}\n\n${d.get('message')}`)}`,'_blank','noopener')});
document.querySelectorAll('.fl button').forEach(x=>x.onclick=()=>{document.querySelectorAll('.fl button').forEach(y=>y.classList.remove('on'));x.classList.add('on');
document.querySelectorAll('[data-cat]').forEach(c=>c.style.display=(x.dataset.f=='all'||c.dataset.cat.includes(x.dataset.f))?'':'none')});
