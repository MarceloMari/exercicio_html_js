const form = document.querySelector(".form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const campoA = document.getElementById("campoA");
  const campoB = document.getElementById("campoB");

  const valorA = Number(campoA.value);
  const valorB = Number(campoB.value);

  if (valorB > valorA) {
    document.querySelector(".correto").style.display = "block";
    document.querySelector(".incorreto").style.display = "none";

    campoA.value = "";
    campoB.value = "";
  } else {
    document.querySelector(".incorreto").style.display = "block";
    document.querySelector(".correto").style.display = "none";
  }
});
