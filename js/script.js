import Project from './project.js';
import Todo from './todo.js';



document.getElementById('createButton').addEventListener('mouseover', function() {
    this.textContent = '+';
});

document.getElementById('createButton').addEventListener('mouseout', function() {
    this.textContent = 'Create Project';
});