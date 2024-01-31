import Project from './project';

export default function main() {
    let projects = [];
    let items = [];
    const leftSide = document.getElementById('left__side');
    const rightSide = document.getElementById("right__side");
    const form = document.createElement('form');
    const input = document.createElement('input');
    const button = document.createElement('button');
    form.appendChild(input);
    form.appendChild(button);
    button.textContent = "+"
    input.setAttribute('name', 'title');
    button.setAttribute('id', 'input__btn');
    form.setAttribute('id', 'btn__submit');
    leftSide.appendChild(form, items);
    document.getElementById('btn__submit').addEventListener('submit', (e) => {
        e.preventDefault()
        let newProj = new Project(e.target.elements['title'].value)
        newProj.items = items;
        projects.push(newProj);
        rightSide.innerHTML = ''
        for(let i = 0; i < projects.length; i += 1) {
            
            addProject(projects[i]);
        }
        
        

    });
    


}

function addProject(arr, arr2) {
        const rightSide = document.getElementById("right__side");
   

    
        
        const div = document.createElement('div');
        const div2 = document.createElement('div');
        const bTag = document.createElement('button');
        const form = document.createElement('form');
        const input = document.createElement('input');
        const button = document.createElement('button');

        div.setAttribute('id', 'div__card');
        form.setAttribute('id', 'item__sub')
        input.setAtribute('name', 'title');
        button.textContent = "+"
        bTag.textContent = arr.title
        div.appendChild(bTag);
        div.appendChild(div2);
        form.appendChild(input);
        form.appendChild(button);
        div2.appendChild(form);
        rightSide.appendChild(div);

        document.getElementById('item__sub').addEventListener('submit', (e) => {
            e.preventDefault();
            arr2.push(new Item(e.target.elements['title'].value));
        });



    



}