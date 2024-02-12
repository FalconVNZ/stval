const btn2 = document.querySelector('.btn2');
const container = document.querySelector('.container');

btn2.addEventListener('mouseover', () => {
    const randomX = Math.floor(Math.random() * (container.offsetWidth - btn2.offsetWidth));
    const randomY = Math.floor(Math.random() * (container.offsetHeight - btn2.offsetHeight));
    btn2.style.position = 'absolute';
    btn2.style.left = `${randomX}px`;
    btn2.style.top = `${randomY}px`;
});

btn2.addEventListener('click', () => {
    const randomX = Math.floor(Math.random() * (container.offsetWidth - btn2.offsetWidth));
    const randomY = Math.floor(Math.random() * (container.offsetHeight - btn2.offsetHeight));
    btn2.style.position = 'absolute';
    btn2.style.left = `${randomX}px`;
    btn2.style.top = `${randomY}px`;
});

const btn1 = document.querySelector('.btn1');

btn1.addEventListener('click', () => {
    alert('Ya sabía que me querias ❤️');
    setTimeout(() => {
        window.location.href = './imagenes/carta/carta.pdf';
    }, 2000);
});
