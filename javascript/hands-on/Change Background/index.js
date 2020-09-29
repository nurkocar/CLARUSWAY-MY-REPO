const colors = [
    'red', 
    'blue', 
    'gray', 
    'green', 
    'purple'];

const buttonElement = document.querySelector('#randomColorButton');
const addColorButton = document.querySelector('#setColorButton');

buttonElement.addEventListener('click', changeColors);
addColorButton.addEventListener('click', addColor)

function changeColors(){
    const randomIndex = Math.floor(Math.random() * colors.length);

    document.querySelector('#colorName').textContent = colors[randomIndex];
    document.querySelector('body').style.backgroundColor = colors[randomIndex];
}

function addColor(){
    const userInput = document.querySelector('.colorInput');

    if (colors.indexOf(userInput.value) == -1){
        document.querySelector('body').style.backgroundColor = userInput.value;
        colors.push(userInput.value);
        userInput.value = '';
        userInput.focus();
    }else{
        alert('You already have this color');
    }
}
