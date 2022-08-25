var button = document.querySelector('.share-button');
var tooltip = document.querySelector('.tooltip');

button.addEventListener('mouseover', (event) => {
    tooltip.style.opacity = 1;
});

button.addEventListener('mouseout', (event) => {
    tooltip.style.opacity = 0;
});