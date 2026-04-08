document.addEventListener('DOMContentLoaded', function () {
  var toggles = document.querySelectorAll('.accordion-toggle');

  toggles.forEach(function (toggle) {
    toggle.addEventListener('click', function () {
      var isOpen = this.getAttribute('aria-expanded') === 'true';
      var content = this.nextElementSibling;

      // Close all other open accordions
      toggles.forEach(function (other) {
        if (other !== toggle) {
          other.setAttribute('aria-expanded', 'false');
          var otherContent = other.nextElementSibling;
          if (otherContent) {
            otherContent.classList.remove('is-open');
            otherContent.hidden = true;
          }
        }
      });

      // Toggle current
      if (isOpen) {
        this.setAttribute('aria-expanded', 'false');
        content.classList.remove('is-open');
        content.hidden = true;
      } else {
        this.setAttribute('aria-expanded', 'true');
        content.hidden = false;
        // Force reflow so transition plays
        content.getBoundingClientRect();
        content.classList.add('is-open');
      }
    });

    // Keyboard support (Enter / Space)
    toggle.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.click();
      }
    });
  });
});
