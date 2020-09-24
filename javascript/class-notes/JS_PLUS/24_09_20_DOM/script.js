// DOM

// document.getElement....

// (ID)
// const elements = document.getElementById('user_name');
// console.log(elements);


// (CLASS)
// const classes = document.getElementsByClassName('user_tag');
// console.log(elements);

// (TAG)
// const tags = document.getElementsByTagName('p');
// console.log(tags);

// document.querySelector...

// (ID)
// const element = document.querySelector('#user_name');
// console.log(element)

// (CLASS)
// const elements = document.querySelectorAll('.userTag');
// console.log(elements)

// (TAG)
// const elements = document.querySelectorAll('p');
// console.log(elements)

// ================================================

// const elements_1 = document.getElementsByClassName('user_tag');
// const elements_2 = document.querySelectorAll('.user_tag');

// console.log(elements_1[1].innerHTML);
// console.log(elements_2[1].innerHTML);


// getElementBy.. ile querySelector.. farkini gormek icin bir ornek yapalim..

// const list = document.querySelector('#city_list');

// const elements1 = document.getElementsByClassName('city');
// const elements2 = document.querySelectorAll('.city');

// console.log(elements1)
// console.log(elements2)

// list.innerHTML += "<li class = 'city'>Coruh</li>";

// console.log(elements1)
// console.log(elements2)

// =======================================

// const element = document.querySelector('#my_element');

// element.innerText = 'Merhaba';
// element.innerHTML = '<label> Hello </label>'
// element.innerText = '<p> Hello </p>'

// console.log(element)

// Bir ornek

// const car_list = [
//     { id: 0, brandName: "Mercedes" },
//     { id: 0, brandName: "BMW" },
//     { id: 0, brandName: "Audi" },
//     { id: 0, brandName: "Opel" },
// ];
// const listElement = document.querySelector("#cars");
// car_list.forEach((car) => {
//     listElement.innerHTML += `<li class="car_class">${car.brandName}</li>`;
// });

// Normal for ile de boyle yazilir ama forEach daha kolay
// for (let i = 0; i < car_list.length; i++) {
//     listElement.innerHTML += `<li class="car_class">${car_list[i]}</li>`
// };


//==============================================

// Bir elementin attibute une erisim saglama

// const element = document.querySelector('#link');
// console.log(element);

// const attr = element.getAttribute('href');
// console.log(attr);


// // Attribute degisimi yapalim.
// element.setAttribute('href', 'http://www.clarusway.com');
// element.innerText = 'Go to Clarusway';

//===============================================

// Bir ornek yapalim...

// const list_words = document.querySelectorAll('.word_class')


// list_words.forEach((line) => {
//     text = line.innerText;
//     if (text.includes('error')){
//         line.setAttribute('class','error');
//     }
//     else if (text.includes('success')){
//         line.setAttribute('class','success');
//     }
// }
// )

//================================================

// elementimize yeni bir stil ekleyecegiz

// const element = document.querySelector('.hello');


// element.style.color = 'red';
// element.style.textDecoration = 'line-through';

//=============================================
// yeni bir class ozellikleri var olan bir elemente js ile nasi uygulanir
// const element = document.querySelector('#my_banner');
// console.log(element.classList);

// element.classList.add('active');

// console.log(element.classList);

//============================================

// const element = document.querySelector('#today');
// const myElement = document.createElement('p');

// myElement.innerText = 'Persembe!';

// element.appendChild(myElement);

//=============================================

//Event lar

document.querySelector('#btn').addEventListener('click', clickFunction);

function clickFunction(){
    alert('You clicked the button!');
};

document.querySelector(#para).addEventListener('mouseover', function(){
    alert('Hey!!');
});




