fetch('https://catfact.ninja/fact')
    .then(
        function (response) {
            return response.json();
        }
    )
    .then(
        function (data) {

            text2Div.textContent = data.fact
        }
    )



let textDiv = document.querySelector('.text')
let text2Div = document.querySelector('.text2')

fetch('https://jsonplaceholder.typicode.com/photos')
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);

        console.log(data[0]);
        console.log(data[0].url);
        console.log(data[0].title);

        text2Div.textContent = data.title
        // text2Div.textContent = data[0].title

        textDiv.innerHTML = `<img src='https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg'>`
    })

textDiv.classList.add('phote')
text2Div.classList.add('mars')