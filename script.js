document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelectorAll("img[data-src]");if("IntersectionObserver"in window){let t=new IntersectionObserver((e,t)=>{e.forEach(e=>{if(e.isIntersecting){let r=e.target;r.src=r.getAttribute("data-src"),r.removeAttribute("data-src"),t.unobserve(r)}})});e.forEach(e=>t.observe(e))}else e.forEach(e=>{e.src=e.getAttribute("data-src"),e.removeAttribute("data-src")});let r=document.querySelectorAll(".faq-item h3");function l(e){return/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(String(e).toLowerCase())}function o(e){let t=document.getElementById(e);t&&t.scrollIntoView({behavior:"smooth"})}r.forEach(e=>{e.addEventListener("click",()=>{let t=e.nextElementSibling,r="block"===t.style.display;document.querySelectorAll(".faq-item .answer").forEach(e=>e.style.display="none"),t.style.display=r?"none":"block"})});let n=document.querySelector('button[onclick*="scrollToSection"]');n&&n.addEventListener("click",()=>o("contact"))});
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.dienst').forEach(dienst => {
        dienst.addEventListener('click', function () {
            this.classList.toggle('expanded');
        });
    });
});
