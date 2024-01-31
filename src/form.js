import Project from './project';
import Item from './item';
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
    input.setAttribute('id', 'input__form');
    button.setAttribute('id', 'input__btn');
    form.setAttribute('id', 'btn__submit');
    leftSide.appendChild(form, items);
    document.getElementById('btn__submit').addEventListener('submit', (e) => {
        e.preventDefault()
        let newProj = new Project(e.target.elements['title'].value)
        // newProj.items = items;
        // projects.push(newProj);
        
        // for(let i = 0; i < projects.length; i += 1) {
            
            addProject(newProj);
        // }
        
        

    });
    


}

function addProject(obj) {
        const rightSide = document.getElementById("right__side");
   

    
        
        const div = document.createElement('div');
        const div2 = document.createElement('div');
        const bTag = document.createElement('h2');
        const form = document.createElement('form');
        const input = document.createElement('input');
        const button = document.createElement('button');
        const deleteBtn = document.createElement('button');
        const ul = document.createElement('ul');

        div.setAttribute('class', 'div__card');
        form.setAttribute('class', 'item__sub')
        input.setAttribute('name', 'title');
        input.setAttribute('class', 'input__left');
        button.setAttribute('class', 'btn__card');
        

        button.textContent = "+";
        deleteBtn.textContent = "Close";
        bTag.textContent = obj.title;
        bTag.setAttribute('class', 'card__heading');
        div.appendChild(deleteBtn);
        div.appendChild(bTag);
        div.appendChild(div2);
        div.appendChild(ul);
        form.appendChild(input);
        
        form.appendChild(button);
       
        button.addEventListener('click', (e) => {
            e.preventDefault();
            var titleValue = form.elements['title'].value;
            obj.items.push(new Item(titleValue));
            console.log(obj.items) 
            ul.innerHTML = ''
            console.log(e.target)
            for (let i = 0; i < obj.items.length; i += 1) {
                const delBtn = document.createElement('button');
                delBtn.setAttribute('class', 'btn__card');
                delBtn.textContent = '-'
                const li = document.createElement('li');

                li.textContent = obj.items[i].title;
                
                ul.appendChild(li);

                li.addEventListener('click', (e) => {
                    e.preventDefault();
                    obj.items = obj.items.filter((item) => item.title !== e.target.textContent);
                    e.target.remove();
                });
            }
        });
        
        deleteBtn.addEventListener('click', (e) => {
            e.preventDefault();
    
                div.remove();
            
           });

        div2.appendChild(form);
        rightSide.appendChild(div);



}
