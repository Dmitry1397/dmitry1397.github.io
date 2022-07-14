const sights = new Object;
fetch('sights.json') 
.then(response => {
    if(!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
    }
    sights = response.json();
})

.catch(error => console.error(`Fetch problem: ${error.message}`));

const title = document.querySelector('#title');
const myPara = document.querySelector('#description');
const img = document.querySelector('#img');

const left = document.querySelector('.left-arrow');
const right = document.querySelector('.right-arrow');

function random() {
    return Math.floor(Math.random() * sights.length);
}

function generateSights (sights) {
    let obj = sights;
    return sights;
}

function displaySight(index) {

    title.textContent = sights[index].title;
    myPara.textContent = sights[index].description;
    img.setAttribute('src', sights[index].src);
    document.querySelector('title').textContent = sights[index].title;
}

function getCurrentIndex() {
    let current = title.textContent;
    let currentIndex;
    for (sight of sights) {
        if (current === sight.title) {
            currentIndex = sights.indexOf(sight)
        }
    }
    return currentIndex;
}

function clickRight() {
    let index = getCurrentIndex() + 1;
        if (index === sights.length) {
            index = 0;
        }
    displaySight(index);
}

function clickLeft() {
    let index = getCurrentIndex() - 1;
        if (index === -1) {
            index = sights.length - 1;
        }
    displaySight(index);
}

right.addEventListener('click', clickRight);
left.addEventListener('click', clickLeft);


generateSights();
displaySight(0)


