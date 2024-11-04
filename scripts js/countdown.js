const countDownDate = new Date("Jan 11, 2025 18:00:00").getTime();

const x = setInterval(function() {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    const dias = Math.floor(distance / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("dias").innerText = String(dias).padStart(2, '0');
    document.getElementById("horas").innerText = String(horas).padStart(2, '0');
    document.getElementById("minutos").innerText = String(minutos).padStart(2, '0');
    document.getElementById("segundos").innerText = String(segundos).padStart(2, '0');

    if (distance < 0) {
        clearInterval(x);
        document.querySelector(".temporizador-container").innerHTML = "Tempo esgotado!";
    }
}, 1000);
