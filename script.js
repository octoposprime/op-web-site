document.addEventListener('DOMContentLoaded', function() {
    const icons = document.querySelectorAll('.teamIcon');
    const popup = document.getElementById('popup');
    const popupOverlay = document.getElementById('popupOverlay');
    const popupTitle = document.getElementById('popupTitle');
    const popupContent = document.getElementById('popupContent');
    const container = document.querySelector('.container');

    icons.forEach(icon => {
        icon.addEventListener('click', function(event) {
            popupTitle.textContent = icon.title || "Team Information";
            popupContent.textContent = icon.alt;
            // Ensure popup and overlay are initially hidden and only displayed through JS
            popup.style.display = 'block';
            popupOverlay.style.display = 'block';
            container.classList.add('blur');
            event.stopPropagation();
        });
    });

    document.addEventListener('click', function(event) {
        if (!popup.contains(event.target) && !event.target.matches('.teamIcon')) {
            popup.style.display = 'none';
            popupOverlay.style.display = 'none';
            container.classList.remove('blur');
        }
    });

    popup.addEventListener('click', function(event) {
        event.stopPropagation();
    });
});



  
  
  