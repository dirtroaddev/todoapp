import Home from './home';
import main from './form';
import './css/style.css';





document.addEventListener('DOMContentLoaded', Home);
const div = document.createElement("div");


document.getElementById("project__button").addEventListener('click', (e) => {
    main();
});

// document.getElementById('btn__submit').addEventListener('submit', (e) => {
//     e.preventDefault()
//     console.log(e.target.elements['title'].value);
// });



