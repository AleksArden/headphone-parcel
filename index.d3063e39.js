if("undefined"!=typeof window){var e={get passive(){!0}};window.addEventListener("testPassive",null,e),window.removeEventListener("testPassive",null,e)}"undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints);(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),i=document.querySelector(".js-close-menu"),a=()=>{const i="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!i),e.classList.toggle("is-open");bodyScrollLock[i?"enableBodyScroll":"disableBodyScroll"](document.body)};t.addEventListener("click",a),i.addEventListener("click",a),window.matchMedia("(min-width: 1440px)").addEventListener("change",(i=>{i.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))}))})();let t=e=>document.querySelector(e);t(".review__button-list").addEventListener("click",(function(e){if("BUTTON"!==e.target.nodeName)return;const i=e.target.dataset.action;t('div[data-action="01"]').classList.remove("review__active-display"),t('div[data-action="02"]').classList.remove("review__active-display"),t('div[data-action="03"]').classList.remove("review__active-display"),t(`div[data-action="${i}"]`).classList.add("review__active-display"),t('button[data-action="01"]').classList.remove("review__active-opacity"),t('button[data-action="02"]').classList.remove("review__active-opacity"),t('button[data-action="03"]').classList.remove("review__active-opacity"),t(`button[data-action="${i}"]`).classList.add("review__active-opacity")}));const i=[{number:"0",text:"По-перше, переконайтеся, що навушники включені одним натисканням верхньої кнопки на задній стороні правого навушника. Натисніть і утримуйте кнопку живлення протягом 3x секунд, щоб перевести навушники в режим сполучення. Зверніть увагу: якщо ви вмикаєте навушники вперше, вони автоматично включаються відразу в цьому режимі сполучення. Голосові підказки нададуть вам додаткові вказівки. Ми рекомендуємо використовувати програму Bose Music для завершення сполучення, але ви також можете використовувати налаштування Bluetooth на своєму пристрої."},{number:"1",text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse voluptatum, et excepturi sit dolor placeat rem eius quos aliquid cumque dolorem odit alias repellat quae illo deleniti veritatis? Esse cupiditate ipsam commodi facilis autem, ipsum dicta maiores perferendis magni praesentium beatae architecto animi vel ullam nihil veritatis cum ratione. Perferendis"},{number:"2",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, aperiam. Laudantium ex dolores soluta incidunt odio. Perferendis autem ratione deleniti, nihil doloribus ipsam rerum aperiam quod? Expedita debitis deserunt beatae fugiat iste quam corporis iure necessitatibus, consequatur magnam sint cum ullam cumque eligendi placeat accusantium repudiandae neque corrupti porro natus exercitationem reiciendis itaque sunt ad? Consectetur, voluptate. Repudiandae explicabo dolorum quae neque autem ex, voluptas dolores atque inventore blanditiis? Fugit"},{number:"3",text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia deserunt quas aut tempora quo nihil adipisci aliquid laborum assumenda expedita repudiandae, voluptate repellendus eum corporis at perspiciatis voluptas hic. Impedit."}];let a=e=>document.querySelector(e);a(".questions__list").addEventListener("click",(function(e){if("use"!==e.target.nodeName)return;const t=e.target.dataset.action,{number:o,text:n}=i[`${t}`];if(null!==a(`p[data-text="${t}"]`))return void function(e){a(`p[data-text="${e}"]`).remove()}(o);!function(e,t){const i=document.createElement("p");i.setAttribute("data-text",`${e}`),i.textContent=`${t}`,i.style.marginTop="16px",a(`div[data-action="${e}"]`).append(i)}(o,n)}));let o=e=>document.querySelector(e);o(".sales__btn-list").addEventListener("click",(function(e){if("BUTTON"!==e.target.nodeName)return;if("black"===e.target.dataset.action)return o('img[data-action="gray"]').style.display="none",void(o('img[data-action="black"]').style.display="block");o('img[data-action="black"]').style.display="none",o('img[data-action="gray"]').style.display="block"}));
//# sourceMappingURL=index.d3063e39.js.map