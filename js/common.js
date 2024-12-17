const containerPadding = 100;
const minPadding = 15;
const minWidth = 320;
const maxWidth = 1440;

const containers = document.querySelectorAll('[class*="__container"]');

function updatePadding() {
  const screenWidth = window.innerWidth;
  let newPadding;

  if (screenWidth >= maxWidth) {
    newPadding = containerPadding;
  }
  else if (screenWidth <= minWidth) {
    newPadding = minPadding;
  } 
  else {
    const proportion = (maxWidth - screenWidth) / (maxWidth - minWidth);
    newPadding = containerPadding - (containerPadding - minPadding) * proportion;
  }

  containers.forEach(container => {
    container.style.paddingLeft = `${newPadding}px`;
    container.style.paddingRight = `${newPadding}px`;
  });
}

window.addEventListener('resize', updatePadding);
window.addEventListener('load', updatePadding);

updatePadding();