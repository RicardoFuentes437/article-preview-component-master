var button = document.querySelector('.share-button');
var tooltip = document.querySelector('.tooltip');
var shareButton = document.getElementById("shareButton");

button.addEventListener('mouseover', (event) => {
    tooltip.style.opacity = 1;
    button.style.backgroundColor = '#48556a';
    shareButton.style.fill = "#ecf2f8";
});

button.addEventListener('mouseout', (event) => {
    tooltip.style.opacity = 0;
    button.style.backgroundColor = '#f0f0f0';
    shareButton.style.fill = "#6e8098";
});