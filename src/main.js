// import './style.css'
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vite.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))




document.addEventListener('DOMContentLoaded', () => {
  const contactRapid = document.getElementById('contactRapide');
  const navbar = document.getElementById('navbar');

  window.addEventListener('scroll', () => {
    const valeurY = window.scrollY;

    if (valeurY > 51) {
      contactRapid.classList.add('hidden');
      navbar.classList.add(
        'fixed',
        'top-0',
        'left-0',
        'z-50',
        'transition',
        'duration-300',
        'ease-in-out' 
      );
    } else {
      contactRapid.classList.remove('hidden');
      navbar.classList.remove(
        'fixed',
        'top-0',
        'left-0',
        'z-50',
        'transition',
        'duration-1000',
        'ease-in-out'
      );
    }
  })
});
