document.addEventListener('DOMContentLoaded', function() {
    const icons = document.querySelectorAll('.teamIcon');
    const popup = document.getElementById('popup');
    const popupOverlay = document.getElementById('popupOverlay');
    const posinowaLogo = document.getElementById('posinowaLogo');
    const popupBackendText = document.getElementById('popupBackendText');
    const popupTitle = document.getElementById('popupTitle');
    const popupContent = document.getElementById('popupContent');
    const container = document.querySelector('.container');

    if (icons.length > 0) {
        icons.forEach(icon => {
            icon.addEventListener('click', function(event) {
                popupTitle.textContent = icon.title || "Team Information";
                const bgImage = icon.getAttribute('data-background');
                const image = icon.getAttribute('data-logo');
                const background = bgImage;
                const logo = image;
                const text = icon.alt;
                

                popup.style.display = 'block';
                popupOverlay.style.display = 'block';
                container.classList.add('blur');

                popup.style.backgroundImage = `url(${background})`;
                popup.style.backgroundSize = 'cover';
                popup.style.backgroundPosition = 'center';
                popup.style.backgroundRepeat = 'no-repeat';
                
                posinowaLogo.src = logo;
                posinowaLogo.style.borderRadius = '5px';
                popupBackendText.textContent = text;

                event.stopPropagation();
            });
        });
    } 
    
    else {
        console.error('No elements found with the class name "teamIcon".');
    }

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



  
  
  