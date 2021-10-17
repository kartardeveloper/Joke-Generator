const input = document.querySelector('.input');
const getData = document.querySelector('.get-data');
const list = document.querySelector('.container ul')

input.focus();

getData.addEventListener('click' , function() {
    let xhr = new XMLHttpRequest();
    console.log(input)
    xhr.open('GET' , `http://api.icndb.com/jokes/random/${Number(input.value)}` , true);

    xhr.onload = function() {
        let response = JSON.parse(this.responseText);
        console.log(response.value)
        for(let jokeArr in response.value) {
            console.log(response.value[jokeArr].joke)
            let newElement = document.createElement('li');
            list.appendChild(newElement);
            let output = response.value[jokeArr].joke;
            newElement.innerText = output;
        }

    }

    xhr.send();
})