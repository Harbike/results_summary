const dataDisplay = document.querySelector('#dataDisplay');
let output = '';

fetch('data.json')
.then(response => response.json())
.then(data => {
    // console.log(data);
    data.forEach(element => {
        output += `
        <div class="${element.class} sum-properties flex">
              <div class="flex gap">
                <img src="${element.icon}" alt="${element.altTxt}">
                <p>${element.category}</p>
              </div>
              <p class="light-font">
                <span class="bolder">${element.score}</span> /
                <span>100</span>
              </p>
            </div>
        `;
    });
    dataDisplay.innerHTML = output;  
})
.catch(error => console.log('Error fetching JSON data:', error));