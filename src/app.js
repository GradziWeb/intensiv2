document.getElementById('trigger').onclick = function (e) {
    document.getElementById('triggered').classList.toggle('visible');
}

document.getElementById('close').onclick = function (e) {
    document.getElementById('triggered').classList.remove('visible');
}

//
window.addEventListener('scroll', (e) => {
    document.querySelectorAll('.sticky').forEach((sticky) => {
        if (sticky.offsetTop - window.scrollY <= parseInt(window.getComputedStyle(sticky).top)) {
            sticky.classList.add('sticked');
        }
        else {
            sticky.classList.remove('sticked');
        }
    });
});


