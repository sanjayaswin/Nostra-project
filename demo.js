<script>
    document.addEventListener("DOMContentLoaded", function () {
      const hearts = document.querySelectorAll('.heart-icon');

      hearts.forEach((heart) => {
        heart.addEventListener('click', () => {
          heart.classList.toggle('fa-regular');
          heart.classList.toggle('fa-solid');
        });
      });
    });
  </script>