const sights = [];
const content = document.querySelector('#container');
const myH2 = document.querySelectorAll('h2');


for (const h2 of myH2) {
    h2.addEventListener('click', (e) => {
    console.log(e.target.textContent);
})
};
