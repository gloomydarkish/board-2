const board = document.querySelector('#board')
const squareNumbers = 2
const colors = ['red', 'green', 'yellow', 'blue', 'purple', 'pink', 'brown', ' orange']
const btnOne = document.querySelector('.btnOne')
const btnTwo = document.querySelector('.btnTwo')

const square = document.createElement('div')
square.classList.add('square')

square.addEventListener('mouseover', () => {
    setColor(square)
})

square.addEventListener('mouseleave', () => {
    removeColor(square)
})

btnOne.addEventListener('click', () => {
    setColor(square)
})

btnTwo.addEventListener('click', () => {
    removeColor(square)
})

board.append(square)

function getRandomColor () {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}

function setColor (square) {
    const color = getRandomColor()
    square.style.backgroundColor = color
    square.style.boxShadow = `0 0 10px ${color}, 0 0 10px ${color}`
}

function removeColor (square) {
    square.style.backgroundColor = `#1d1d1d`
    square.style.boxShadow = `0 0 2px #000`
}

