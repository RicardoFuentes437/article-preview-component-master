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

if (window.matchMedia("(max-width: 920px)").matches) {
    button.addEventListener('mouseover', (event) => {
        button.style.backgroundColor = 'hsl(214, 17%, 51%)';
    });
    
    button.addEventListener('mouseout', (event) => {
        button.style.backgroundColor = '#f0f0f0';
    });
}