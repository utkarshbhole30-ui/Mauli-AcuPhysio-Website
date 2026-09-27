
(function(){const b=document.querySelector('.menu-toggle'),m=document.querySelector('.menu');if(!b||!m)return;b.addEventListener('click',()=>{const open=m.classList.toggle('open');b.setAttribute('aria-expanded',String(open));});m.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{m.classList.remove('open');b.setAttribute('aria-expanded','false')}));})();
