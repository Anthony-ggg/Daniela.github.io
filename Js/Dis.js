document.getElementById("BVer").addEventListener('click', function() {
    document.getElementById("resultado").style.display = "block";
})

document.getElementById("BotonCerrar").addEventListener('click', function() {
    document.getElementById("resultado").style.display = "none";
    document.querySelector(".Contenedor-Binicio").style.display = "none";
    document.querySelector(".Con-2").style.display = "block";
})
document.addEventListener('DOMContentLoaded', function() {
    function createFirework() {
        const firework = document.createElement('div');
        firework.classList.add('firework');
        firework.style.top = `${Math.random() * 100}vh`;
        firework.style.left = `${Math.random() * 100}vw`;
        document.body.appendChild(firework);
        
        setTimeout(() => {
            firework.remove();
        }, 1500);
    }

    setInterval(createFirework, 300); // Lanza fuegos artificiales cada 300ms
});

