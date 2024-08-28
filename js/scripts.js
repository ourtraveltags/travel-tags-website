window.onscroll = function() {
    stickyNav();
};

var navbar = document.getElementById("navBar");
var introSection = document.querySelector(".introduction");
var sticky = introSection.offsetHeight;

function stickyNav() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const collapsibles = document.querySelectorAll('.collapsible');

    collapsibles.forEach(button => {
        button.addEventListener('click', () => {
            // Close any other open sections
            collapsibles.forEach(otherButton => {
                const otherContent = otherButton.nextElementSibling;
                if (otherContent !== button.nextElementSibling && otherContent.style.maxHeight) {
                    otherContent.style.maxHeight = null;
                }
            });

            // Toggle the current section
            const content = button.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const collapsibles = document.querySelectorAll('.collapsible-transport');
    const expandableSections = document.querySelectorAll('.expandable-section');

    collapsibles.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);

            // Close any currently open section
            expandableSections.forEach(section => {
                if (section !== targetSection && section.style.maxHeight) {
                    section.style.maxHeight = null;
                    section.classList.remove('active');
                }
            });

            // Toggle the selected section
            if (targetSection.classList.contains('active')) {
                targetSection.style.maxHeight = null;
                targetSection.classList.remove('active');
            } else {
                targetSection.classList.add('active');
                targetSection.style.maxHeight = targetSection.scrollHeight + 'px';
            }
        });
    });
});




