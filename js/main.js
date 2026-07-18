// Slider
(function(){
  const slides = document.getElementById('slides');
  const dotsWrap = document.getElementById('dots');
  const count = slides.children.length;
  let index = 0;
  function buildDots(){
    for(let i=0;i<count;i++){const d=document.createElement('div');d.className='dot';d.addEventListener('click',()=>goto(i));dotsWrap.appendChild(d)}
  }
  function update(){
    slides.style.transform = `translateX(${ -index * 100 }%)`;
    Array.from(dotsWrap.children).forEach((d,i)=>d.classList.toggle('active',i===index));
  }
  function goto(i){index=i;update()}
  function next(){index=(index+1)%count;update()}
  buildDots();update();
  let t = setInterval(next,4000);
  // pause on hover
  slides.parentElement.addEventListener('mouseenter',()=>clearInterval(t));
  slides.parentElement.addEventListener('mouseleave',()=>t=setInterval(next,4000));
})();

// Mobile nav
(function(){
  const burger=document.querySelector('.burger');const links=document.querySelector('.links');burger.addEventListener('click',()=>{links.style.display = links.style.display === 'flex' ? 'none' : 'flex'})
})();

// Reveal on scroll
(function(){
  const obs = new IntersectionObserver((entries)=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');obs.unobserve(e.target)}}),{threshold:0.12});
  document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
})();
