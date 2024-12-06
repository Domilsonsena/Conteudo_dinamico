import flags from './model/flags.js';

function FlagsCards(flag) {
    return `
    <div class="flag col-2 my2 text-center">
        <img src="https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/${flag.id}.svg" alt="${flag.name}">
        <p>${flag.name}</p>
      </div>
    `;
  }
  const flagsGrid = document.querySelector('main');
  
  flagsGrid.innerHTML = flags.map(e => FlagsCards(e)).join('')
  