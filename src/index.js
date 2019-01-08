import './index.css';
import {
    deleteProject,
    getProjects
} from './api/projectApi';

// Populate users data
getProjects().then(result => {
    let projectsBody = "";

    result.forEach(project => {
        projectsBody += `<tr>
        <td><a href="#${project.id}" data-id="${project.id}" class="deleteProject">Delete</a></td>
        <td>"${project.name}"</td>
        <td>"${project.description}"</td>
        </tr>`
    });

    global.document.getElementById("projects").innerHTML = projectsBody

    const deleteLinks = global.document.getElementsByClassName('deleteProject');

    Array.from(deleteLinks, link => {
        link.onclick = function (event) {
            const element = event.target;
            event.preventDefault();
            deleteProject(element.attributes["data-id"].value);
            const row = element.parentNode.parentNode;
            row.parentNode.removeChild(row);
        };
    });
});