 document.addEventListener("DOMContentLoaded", function() {
        var mailIcon = document.querySelector('.mailIcon');
        var mailText = document.querySelector('.mailText');

        mailIcon.addEventListener('click', function() {
            window.location.href = 'mailto:info@octoposprime.com'; 
        });

        mailText.addEventListener('click', function() {
            window.location.href = 'mailto:info@octoposprime.com'; 
        });
    });


    function jumpLeftAndDisappear(element) {
        // Remove the class if it exists to reset the animation
        element.classList.remove('jump-and-disappear');
        
        // Force reflow/repaint to restart the animation
        void element.offsetWidth;
    
        // Add the class again to start the animation
        element.classList.add('jump-and-disappear');
    
        // Remove the class after the animation completes to reset state
        setTimeout(() => {
            element.classList.remove('jump-and-disappear');
        }, 2000); // The timeout should match the duration of the animation
    }
    
      

