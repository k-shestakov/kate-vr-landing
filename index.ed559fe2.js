const e=document.querySelector(".header");function t(e,t){document.querySelector(e).addEventListener("click",e=>{if(e.preventDefault(),e.target.closest(t)){let t=e.target.getAttribute("href").slice(1);document.getElementById(t).scrollIntoView({behavior:"smooth"})}})}function s(e){let t=document.querySelector(e),s=t.getAttribute("href").slice(1),o=document.getElementById(s);s&&t.addEventListener("click",e=>{e.preventDefault(),o.scrollIntoView({behavior:"smooth"})})}window.addEventListener("scroll",t=>{pageYOffset>0?e.classList.add("_bg"):e.classList.remove("_bg")}),s(".hero__move > a"),s(".scroll-to-top"),s(".header__logo"),s(".footer__logo"),s(".contact-popup"),t(".menu__list",".menu__item.item-close"),t(".footer__list",".footer__item");const o=document.querySelectorAll("._anim-items");if(o.length>0){function l(){for(let e=0;e<o.length;e++){let t=o[e],s=t.offsetHeight,l=function(e){let t=e.getBoundingClientRect(),s=window.pageXOffset||document.documentElement.scrollLeft,o=window.pageYOffset||document.documentElement.scrollTop;return{top:t.top+o,left:t.left+s}}(t).top,n=window.innerHeight-s/2;s>window.innerHeight&&(n=window.innerHeight-window.innerHeight/2),pageYOffset>l-n&&pageYOffset<l+s?t.classList.add("_limn"):t.classList.contains("_anim-no-hide")||t.classList.remove("_limn")}}window.addEventListener("scroll",l),setTimeout(()=>{l()},300)}new class{constructor(e){this.type=e}init(){this.оbjects=[],this.daClassname="_dynamic_adapt_",this.nodes=[...document.querySelectorAll("[data-da]")],this.nodes.forEach(e=>{let t=e.dataset.da.trim().split(","),s={};s.element=e,s.parent=e.parentNode,s.destination=document.querySelector(`${t[0].trim()}`),s.breakpoint=t[1]?t[1].trim():"767",s.place=t[2]?t[2].trim():"last",s.index=this.indexInParent(s.parent,s.element),this.оbjects.push(s)}),this.arraySort(this.оbjects),this.mediaQueries=this.оbjects.map(({breakpoint:e})=>`(${this.type}-width: ${e}px),${e}`).filter((e,t,s)=>s.indexOf(e)===t),this.mediaQueries.forEach(e=>{let t=e.split(","),s=window.matchMedia(t[0]),o=t[1],l=this.оbjects.filter(({breakpoint:e})=>e===o);s.addEventListener("change",()=>{this.mediaHandler(s,l)}),this.mediaHandler(s,l)})}mediaHandler(e,t){e.matches?t.forEach(e=>{this.moveTo(e.place,e.element,e.destination)}):t.forEach(({parent:e,element:t,index:s})=>{t.classList.contains(this.daClassname)&&this.moveBack(e,t,s)})}moveTo(e,t,s){if(t.classList.add(this.daClassname),"last"===e||e>=s.children.length){s.append(t);return}if("first"===e){s.prepend(t);return}s.children[e].before(t)}moveBack(e,t,s){t.classList.remove(this.daClassname),void 0!==e.children[s]?e.children[s].before(t):e.append(t)}indexInParent(e,t){return[...e.children].indexOf(t)}arraySort(e){if("min"===this.type)e.sort((e,t)=>e.breakpoint===t.breakpoint?e.place===t.place?0:"first"===e.place||"last"===t.place?-1:"last"===e.place||"first"===t.place?1:0:e.breakpoint-t.breakpoint);else{e.sort((e,t)=>e.breakpoint===t.breakpoint?e.place===t.place?0:"first"===e.place||"last"===t.place?1:"last"===e.place||"first"===t.place?-1:0:t.breakpoint-e.breakpoint);return}}}("max").init(),function(){let e=document.querySelector(".overlay");function t(){document.documentElement.classList.toggle("menu-open"),document.documentElement.classList.toggle("stop-scroll"),e.classList.toggle("_show-ov")}document.addEventListener("click",function(e){let s=e.target,o=document.documentElement.classList.contains("menu-open");s.closest(".item-close")&&o&&t(),s.closest(".icon-menu")&&t()})}(),function(){let e=document.querySelectorAll(".select"),t=null;e.forEach(s=>{let o=s.querySelector(".select__list"),l=s.querySelector(".select__current");s.addEventListener("click",o=>{o.preventDefault();let l=s.previousElementSibling;if(s.classList.contains("_active")){s.classList.remove("_active"),l&&l.classList.value.startsWith("aside-buy-order")&&l.classList.remove("blue"),t=null;return}e.forEach(e=>{e.classList.remove("_active");let t=e.previousElementSibling;t&&l.classList.value.startsWith("aside-buy-order")&&t.classList.remove("blue")}),s.classList.add("_active"),l&&l.classList.value.startsWith("aside-buy-order")&&l.classList.add("blue"),t=s}),o&&o.addEventListener("click",e=>{let t=e.target.closest(".select__item > a");if(t){let o=t.textContent;l.textContent=o,e.stopPropagation(),s.classList.remove("_active");let n=s.previousElementSibling;n&&n.classList.value.startsWith("aside-buy-order")&&n.classList.remove("blue"),e.preventDefault()}})}),document.addEventListener("click",e=>{if(!e.target.closest(".select")&&t){let e=t.previousElementSibling;t.classList.remove("_active"),e&&e.classList.value.startsWith("aside-buy-order")&&e.classList.remove("blue"),t=null}}),document.addEventListener("keydown",e=>{if("Escape"===e.code&&t){let e=t.previousElementSibling;t.classList.remove("_active"),e&&e.classList.value.startsWith("aside-buy-order")&&e.classList.remove("blue"),t=null}})}(),function(){document.querySelectorAll(".dashed-top"),document.querySelectorAll(".dashed-bottom");let e=document.createElement("span");e.classList.add("dashed"),e.style.height="2px",e.style.backgroundColor="#058498",e.style.display="inline-block";let t=Math.ceil(22.5);document.querySelectorAll(".video-btn").forEach(s=>{let o=[];for(let l=0;l<25;l++){let n;let i=e.cloneNode(!0);0===l?i.style.width="30px":i.style.width="2px",n=l<t?Math.floor(l/3)+1:Math.floor(l/3)+1+2,i.style.marginRight=n+"px";let c=Math.max(.1,1-.09*Math.floor(l/3));i.style.opacity=c,o.push(c),s.querySelector(".dashed-top").appendChild(i.cloneNode(!0)),s.querySelector(".dashed-bottom").appendChild(i.cloneNode(!0))}s.addEventListener("mouseenter",()=>{let e=s.querySelectorAll(".dashed-top .dashed"),t=s.querySelectorAll(".dashed-bottom .dashed");e.forEach((e,t)=>{setTimeout(()=>{e.style.opacity="1",e.style.boxShadow="0 0 10px #058498"},20*t)}),t.forEach((e,t)=>{setTimeout(()=>{e.style.opacity="1",e.style.boxShadow="0 0 10px #058498"},20*t)})}),s.addEventListener("mouseleave",()=>{let e=s.querySelectorAll(".dashed-top .dashed"),t=s.querySelectorAll(".dashed-bottom .dashed");e.forEach((e,t)=>{setTimeout(()=>{e.style.opacity=o[t],e.style.boxShadow="none"},30*t)}),t.forEach((e,t)=>{setTimeout(()=>{e.style.opacity=o[t],e.style.boxShadow="none"},30*t)})})})}();const n=document.querySelector(".about__fraction"),i=document.querySelectorAll(".about-slider__slide");document.createElement("span");const c=document.querySelector(".about__bullets");function a(){let e=r().slice(0,1),t=document.querySelectorAll(".about__bullet");t.forEach(e=>{e.classList.contains("_cur")&&e.classList.remove("_cur")}),t[+e-1].classList.add("_cur")}function r(){let e=document.querySelector(".about-slider__slide.swiper-slide-active").getAttribute("aria-label").replaceAll(" ","");return n.textContent=`${e}`,e}new Swiper(".hero-slider",{navigation:{nextEl:".hero__next",prevEl:".hero__prev"},effect:"fade",pagination:{el:".hero__progressbar",type:"progressbar"}}),new Swiper(".about-slider",{navigation:{nextEl:".about__next",prevEl:".about__prev"},effect:"fade",autoplay:{delay:2e3},pagination:{el:".about__progressbar",type:"progressbar"},on:{slideChangeTransitionStart:r,slideChangeTransitionStart:a}}),i.forEach(e=>{let t=document.createElement("span");t.classList.add("about__bullet"),c.append(t)}),a(),r(),document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelector(".aside__back--cross"),t=document.querySelector(".aside-buy-complete__button"),s=document.querySelector(".aside-buy__steps"),o=s.querySelector(".dot"),l=s.querySelectorAll(".aside-buy__step-btn");function n(){l.forEach(e=>e.classList.remove("aside-buy__step-btn--active")),updateDotPosition()}window.updateDotPosition=function(){let e=s.querySelector(".aside-buy__step-btn--active");if(e){let t=e.getBoundingClientRect(),l=s.getBoundingClientRect(),n=o.getBoundingClientRect(),i=t.width;o.style.width=window.innerWidth<=768?`${i}px`:"4px";let c=t.left-l.left+t.width/2-n.width/2;o.style.left=`${c}px`}else{let e=l[0].getBoundingClientRect(),t=s.getBoundingClientRect(),n=e.width;o.style.width=window.innerWidth<=768?`${n}px`:"4px",o.style.left=`${e.left-t.left+e.width/2-o.getBoundingClientRect().width/2}px`}},l.forEach(e=>{e.addEventListener("click",()=>{l.forEach(e=>e.classList.remove("aside-buy__step-btn--active")),e.classList.add("aside-buy__step-btn--active"),updateDotPosition()})}),e.addEventListener("click",n),t.addEventListener("click",n),updateDotPosition(),window.innerWidth<=768&&(o.style.left="0px"),window.addEventListener("resize",updateDotPosition)}),document.querySelectorAll(".form__fields").forEach(e=>{e.querySelectorAll(".form__input").forEach(e=>{e.addEventListener("focus",()=>{e.classList.add("_foc")}),e.addEventListener("blur",()=>{e.value.trim()||e.classList.remove("_foc")})})});const d={btn1:".aside-buy__step-btn--order",btn2:".aside-buy__step-btn--pay",sec1:".aside-buy-order",sec2:".aside-buy-pay"},u={btn1:".aside-buy__step-btn--pay",btn2:".aside-buy__step-btn--complete",sec1:".aside-buy-pay",sec2:".aside-buy-complete"};function m(e){let t=document.querySelector(e.btn1),s=document.querySelector(e.btn2),o=document.querySelector(e.sec1),l=document.querySelector(e.sec2);t.classList.remove("aside-buy__step-btn--active"),t.classList.add("aside-buy__step-btn--lock"),s.classList.remove("aside-buy__step-btn--lock"),s.classList.add("aside-buy__step-btn--active"),o.classList.add("_hidden-section"),l.classList.remove("_hidden-section"),window.updateDotPosition&&window.updateDotPosition()}function p(e){let t=document.getElementById(e),s=document.querySelectorAll(".aside-buy-pay__card > input");async function o(o){let i;o.preventDefault(),i=0,t.querySelectorAll("._req").forEach(e=>{n(e),e.classList.contains("_min")&&!function(e){let t=parseInt(e.getAttribute("maxlength"),10)||0;return e.value.trim().length>=t}(e)&&(l(e,"empty"),i++),e.classList.contains("_email")?""===e.value.trim()?(l(e,"empty"),i++):!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(e.value)&&(l(e,"format"),i++):""===e.value.trim()&&(l(e,"empty"),i++),s.forEach(e=>{e.addEventListener("click",e=>{s[0].classList.remove("_error")}),e.classList.contains("_error")&&(s[0].classList.contains("_error")||(s[0].style.borderBottom="1px solid #2f2f2f"),s[0].classList.add("_error"))}),e.addEventListener("focus",function(){n(e)})}),!i&&("aside-buy-order-form"===e&&(m(d),window.updateDotPosition&&window.updateDotPosition()),"aside-buy-pay-form"===e&&(m(u),window.updateDotPosition&&window.updateDotPosition()))}function l(e,t=""){let s=e.closest(".form__field"),o=s.querySelector(".empty-error"),n=s.querySelector(".format-error");e.classList.add("_error"),"empty"===t&&o?(o.style.display="block",n&&(n.style.display="none")):"format"===t&&n&&(n.style.display="block",o&&(o.style.display="none"))}function n(e){let t=e.closest(".form__field"),s=t.querySelector(".empty-error"),o=t.querySelector(".format-error");e.classList.remove("_error"),s&&(s.style.display="none"),o&&(o.style.display="none")}t.addEventListener("submit",o)}p("main-form"),p("aside-buy-order-form"),p("aside-buy-pay-form");const y=[{x:5,y:5},{x:395,y:5},{x:395,y:65}],h=[{x:5,y:102},{x:40,y:102},{x:40,y:102},{x:40,y:5},{x:122,y:5}],_=[{x:185,y:5},{x:185,y:240},{x:5,y:240}];function b(e,t){let s=document.getElementById(e),o=s.getContext("2d"),l=0;!function e(){var n,i,c,a;o.clearRect(0,0,s.width,s.height);let r=0,d=[];for(let e=0;e<t.length-1;e++){let s=(n=t[e],Math.sqrt(((i=t[e+1]).x-n.x)**2+(i.y-n.y)**2));d.push(s),r+=s}let u=l*r,m=0;for(;m<d.length&&u>d[m];)u-=d[m],m++;if(m<d.length){let e=t[m],s=t[m+1],l=u/d[m],n=(c=e.x)+(s.x-c)*l,i=(a=e.y)+(s.y-a)*l;o.beginPath(),o.moveTo(t[0].x,t[0].y);for(let e=1;e<=m;e++)o.lineTo(t[e].x,t[e].y);o.lineTo(n,i),o.strokeStyle="#05C2DF",o.lineWidth=1,o.stroke(),o.beginPath(),o.arc(n,i,3,0,2*Math.PI),o.fillStyle="#05C2DF",o.fill()}(l+=.01)<1&&requestAnimationFrame(e)}()}!function(){let e=document.querySelector(".tech-specs");new IntersectionObserver((e,t)=>{e.forEach(e=>{e.intersectionRatio>=.85&&(b("line-1",y),setTimeout(()=>{b("line-2",h)},300),setTimeout(()=>{b("line-3",_)},600),setTimeout(()=>{!function(e,t,s,o){let l=document.getElementById(e),n=l.getContext("2d");l.width=600,l.height=600;let i=0;!function e(){n.clearRect(0,0,l.width,l.height);let t=3/4*Math.PI,s=t+(5/4*Math.PI-t)*i;n.beginPath(),n.arc(300,300,150,t,s),n.strokeStyle="#05C2DF",n.lineWidth=1,n.stroke(),(i+=.02)<=1&&requestAnimationFrame(e)}()}("circle",0,0,0)},1200),t.unobserve(e.target))})},{threshold:.85}).observe(e)}(),document.addEventListener("click",e=>{let t=e.target.closest(".tech-specs__button");if(t){let e=t.classList.contains("_open"),s=t.nextElementSibling;document.querySelectorAll(".tech-specs__button").forEach(e=>{let t=e.nextElementSibling;e.classList.remove("_open"),t.classList.add("_invisible")}),e||(s.classList.remove("_invisible"),t.classList.add("_open"))}else document.querySelectorAll(".tech-specs__button").forEach(e=>{let t=e.nextElementSibling;e.classList.remove("_open"),t.classList.add("_invisible")})}),function(){let e=0,t=!1,s=document.querySelector(".lower-button"),o=document.querySelector(".scroll-to-top"),l=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight),n=s.getBoundingClientRect(),i=l/100*10;window.addEventListener("scroll",()=>{let c=window.pageYOffset||document.documentElement.scrollTop,a=n.y+c+i;0===c&&o.classList.remove("_lw-btn"),c>e?(s.classList.add("_lw-btn"),o.classList.remove("_lw-btn"),t=!1):c<e&&!t&&(o.classList.add("_lw-btn"),s.classList.remove("_lw-btn"),t=!0),a>l&&s.classList.remove("_lw-btn"),e=c})}(),function(){let e=document.documentElement.clientWidth,t=window.innerWidth-e,s=document.documentElement,o=document.querySelectorAll("._avoid-jolt"),l=document.querySelectorAll(".pop-up");function n(e){e&&(e.classList.remove("_popup-open"),setTimeout(()=>{s.classList.remove("stop-scroll"),s.style.paddingRight="0px",o.forEach(e=>{e.style.paddingRight="0px"})},300))}function i(){o.forEach(e=>{e.style.paddingRight=`${t}px`})}l.length>0&&l.forEach(e=>{let o=e.getAttribute("id"),l=document.getElementById(o);document.querySelectorAll(`[data-popup="${o}"]`).forEach(e=>{e.addEventListener("click",e=>{l&&(l.classList.add("_popup-open"),s.classList.add("stop-scroll"),s.style.paddingRight=`${t}px`,i(),l.addEventListener("click",e=>{e.target.closest(".pop-up__content")||n(l),e.target.classList.contains("transition-to")&&(n(l),setTimeout(()=>{"A"===e.target.tagName?s.classList.remove("stop-scroll"):(i(),s.classList.add("stop-scroll"),s.style.paddingRight=`${t}px`)},300))})),e.preventDefault()})})}),document.querySelectorAll(".close-pop-up").forEach(e=>{e.addEventListener("click",e=>{n(e.target.closest(".pop-up")),e.preventDefault()})}),document.addEventListener("keydown",e=>{"Escape"===e.code&&n(document.querySelector(".pop-up._popup-open"))})}(),function(){let e=document.getElementById("show-more-acc"),t=document.querySelector(".accordion"),s=document.querySelectorAll(".accordion__item"),o=+t.dataset.initToShow,l=15*(o-1),n=60*o+l;function i(){s.forEach(e=>{e.classList.remove("_acc-open"),t.style.height=`${n}px`,e.style.height="60px"})}t.style.height=`${n}px`,e.addEventListener("click",c=>{if((o+=1)===s.length&&e.classList.add("_less"),o<=s.length)l=15*(o-1),n=60*o+l,t.style.height=`${n}px`,i();else{let s=+t.dataset.initToShow;l=15*(s-1),n=60*s+l,t.style.height=`${n}px`,o=s,e.classList.remove("_less"),i()}}),t.addEventListener("click",e=>{e.target.closest(".accordion__button")&&function(e){let o=e.querySelector(".accordion__content").getBoundingClientRect().height,l=null;s.forEach(e=>{e.classList.contains("_acc-open")&&(l=e)}),e.classList.toggle("_acc-open"),t.style.height=`${n+o}px`,l&&(l.classList.remove("_acc-open"),t.style.height=`${n}px`,l.style.height="60px"),e.classList.contains("_acc-open")?(t.style.height=`${n+o}px`,e.style.height=`${o+60}px`):(t.style.height=`${n}px`,e.style.height="60px")}(e.target.closest(".accordion__item"))})}(),function(){let e=document.querySelectorAll(".aside"),t=document.querySelectorAll(".back-aside"),s=document.documentElement;e.forEach(t=>{let o=t.getAttribute("id"),l=document.getElementById(o);(l.classList.contains("aside-buy")?document.querySelectorAll(`[data-aside="${o}"]`):document.querySelectorAll(`[href="#${o}"]`)).forEach(t=>{t.addEventListener("click",t=>{e.forEach(e=>{e.classList.contains("_aside-open")&&e.classList.remove("_aside-open")}),s.classList.add("stop-scroll"),l.classList.add("_aside-open"),t.preventDefault()})}),l.addEventListener("click",e=>{(e.target.closest(".menu__item")||e.target.closest(".item-close"))&&l.classList.remove("_aside-open")})}),t.forEach(e=>{e.addEventListener("click",e=>{let t=document.querySelector(".aside._aside-open");t.classList.contains("aside-buy")&&s.classList.remove("stop-scroll"),t&&t.classList.remove("_aside-open")})})}(),function(){let e=document.querySelectorAll(".product__amount"),t=document.querySelectorAll(".number"),s=parseInt(e[0].textContent.replace("$",""));function o(t){e.forEach(e=>{let s=parseInt(e.textContent.replace("$",""));e.textContent=`${s+t}$`})}function l(){t.forEach(e=>{let t=parseInt(e.querySelector(".number__quantity").textContent);t<=1?e.querySelector(".number__decrease").classList.add("_lock"):e.querySelector(".number__decrease").classList.remove("_lock"),t>=10?e.querySelector(".number__increase").classList.add("_lock"):e.querySelector(".number__increase").classList.remove("_lock")})}t.forEach(e=>{e.addEventListener("click",n=>{var i;let c=parseInt(e.querySelector(".number__quantity").textContent);n.target.closest(".number__decrease")&&c>1&&(c-=1,o(-s)),n.target.closest(".number__increase")&&c<10&&(c+=1,o(s)),i=c,t.forEach(e=>{e.querySelector(".number__quantity").textContent=i}),l()})}),l()}(),function(){let e=document.documentElement,t=document.getElementById("aside-buy"),s=t.querySelectorAll("input"),o=document.querySelectorAll(".aside-buy__step-btn"),l=document.querySelectorAll(".aside-buy__section"),n=document.querySelector(".aside__back--cross "),i=document.querySelector(".aside-buy-complete__button"),c="_hidden-section",a=document.querySelector(".empty-error--buy"),r=document.querySelector(".format-error--buy");n.addEventListener("click",u),i.addEventListener("click",s=>{u(),t.classList.remove("_aside-open"),e.classList.remove("stop-scroll")});let d={"aside-buy__step-btn--order":document.querySelector(".aside-buy-order"),"aside-buy__step-btn--pay":document.querySelector(".aside-buy-pay"),"aside-buy__step-btn--complete":document.querySelector(".aside-buy-complete")};function u(){setTimeout(()=>{l.forEach(e=>e.classList.add(c)),o.forEach(e=>e.classList.add("aside-buy__step-btn--lock")),o.forEach(e=>e.classList.remove("aside-buy__step-btn--active")),o[0].classList.remove("aside-buy__step-btn--lock"),o[0].classList.add("aside-buy__step-btn--active"),l[0].classList.remove(c)},500),s.forEach(e=>{e.classList.remove("_foc"),e.classList.remove("_error"),e.value=""}),a.style.display="none",r.style.display="none"}o.forEach(e=>{e.addEventListener("click",e=>{let t=e.target.closest(".aside-buy__step-btn");t.classList.contains("aside-buy__step-btn--active")||function(e){let t="aside-buy__step-btn--active";o.forEach(s=>{s!==e?(s.classList.remove(t),s.classList.add("aside-buy__step-btn--lock")):(s.classList.add(t),s.classList.remove("aside-buy__step-btn--lock"))}),l.forEach(e=>e.classList.add(c));let s=d[e.classList[1]];s&&s.classList.remove(c)}(t)})})}(),function(){let e=document.querySelector(".aside-buy-pay__card").querySelectorAll(".aside-buy-pay__input");e.forEach((t,s)=>{t.addEventListener("input",t=>{let o=t.target.value;if(t.target.value=o.replace(/\D/g,""),t.target.value.length===t.target.maxLength){let t=e[s+1];t&&t.focus()}}),t.addEventListener("keydown",t=>{if("Tab"===t.key&&t.shiftKey){t.preventDefault();let o=e[s-1];o&&o.focus()}})})}(),function(){let e=document.getElementById("input-expiration");e.addEventListener("input",e=>{let t=e.target.value;(t=t.replace(/[^\d]/g,"")).length>=3?t=t.slice(0,2)+" / "+t.slice(2,4):t.length>=2&&(t=t.slice(0,2)+" / "),e.target.value=t}),e.addEventListener("keydown",e=>{let t=e.target.value;"Backspace"===e.key&&t.endsWith(" / ")&&(e.target.value=t.slice(0,-3),e.preventDefault())})}();const f=document.querySelector(".aside-buy-pay__card-type");f.addEventListener("click",e=>{e.preventDefault(),f.classList.toggle("_hide-card")});
//# sourceMappingURL=index.ed559fe2.js.map
