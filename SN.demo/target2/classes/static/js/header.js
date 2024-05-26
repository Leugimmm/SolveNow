document.addEventListener('DOMContentLoaded', function () {
    var ilustracion = document.getElementById('ilustracion');
    var rectangle1 = document.getElementById('Rectangle1');
    var rectangle3 = document.getElementById('Rectangle3');
    
    var explorarMovil = document.getElementById('explorar-a');

    var abierto = false;
    var profileAbierto = false;
    var explorarAbierto = false;

    var explorar2 = false;

 

    function profileFunction(event) {
        event.stopPropagation();
        profileAbierto = !profileAbierto;
        updateDropdown("profileDropdown", profileAbierto);

        // Reset the animation for the myFunction SVG
        abierto = false;

    }

    function updateDropdown(dropdownId, isOpen, customRectangle1, customRectangle3) {
        var dropdown = document.getElementById(dropdownId);
       

        dropdown.classList.toggle("show", isOpen);
    }

    document.addEventListener('click', function (event) {
        if (abierto) {
            updateDropdown("myDropdown", false);
            abierto = false;
        }

        if (profileAbierto) {
            updateDropdown("profileDropdown", false);
            profileAbierto = false;
        }

        if (explorarAbierto) {
            updateDropdown("explorarDropdown", false);
            explorarAbierto = false;
        }
    });

   

   

    // Separate event listener for the profile button
    var profileDropdownBtn = document.querySelector('.profile-dropdown .dropbtn');
    profileDropdownBtn.addEventListener('click', profileFunction);

    // Separate event listener for the profile SVG
    var profileSVG = document.querySelector('.profile');
    profileSVG.addEventListener('click', function (event) {
        event.stopPropagation();
        // Animation code for the profile SVG if needed
        profileFunction(event);
    });
});