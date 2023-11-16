const btn = document.querySelector("#menu");

btn.addEventListener("click", () => {
    const side = document.querySelector(".sidebar");
    side.classList.toggle("active");
});

document.getElementById('start').addEventListener('click', function() {
    var targetElement = document.getElementById('section');
    targetElement.scrollIntoView({ behavior: 'smooth' });
  });

