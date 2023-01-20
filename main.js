const button = document.querySelector('button')
const sky = document.querySelector('.sky')
const circle = document.querySelector('.circle')
console.log(circle.classList)
console.log(button)

button.addEventListener('click', () => {
    circle.classList.toggle('circle-night')
    sky.classList.toggle('sky-night')
    if (circle.classList.contains('circle-night')) {
        button.textContent = 'Включить день'
    } else {
        button.textContent = 'Включить ночь'
    }

})



