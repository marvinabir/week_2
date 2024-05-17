    var newProjectInput = document.getElementById('new-project');
    var addProjectButton = document.getElementById('add-project');
    var projectList = document.getElementById('project-list');
    var projectViewSection = document.getElementById('project-view-section');
    var projectView = document.getElementById('project-view');

    let projects = [];

    var renderProjectList = () => {
        projectList.innerHTML = '';
        projects.forEach(project => {
            var li = document.createElement('li');
            li.textContent = project.name;
            li.dataset.id = project.id;

            var buttonsDiv = document.createElement('div');
            buttonsDiv.className = 'buttons';

            var viewButton = document.createElement('button');
            viewButton.textContent = 'View';
            viewButton.className = 'view';
            viewButton.onclick = () => viewProject(project.id);

            var deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.onclick = () => deleteProject(project.id);

            buttonsDiv.appendChild(viewButton);
            buttonsDiv.appendChild(deleteButton);
            li.appendChild(buttonsDiv);
            projectList.appendChild(li);
        });
    };

    var addProject = name => {
        var project = {
            id: Date.now(),
            name
        };
        projects.push(project);
        renderProjectList();
    };

   var viewProject = id => {
        var project = projects.find(project => project.id === id);
        if (project) {
            projectView.innerHTML = `<h3>${project.name}</h3>`;
            projectViewSection.style.display = 'block';
        }
    };

    var deleteProject = id => {
        projects = projects.filter(project => project.id !== id);
        renderProjectList();
        projectViewSection.style.display = 'none';
    };

    addProjectButton.addEventListener('click', () => {
        var projectName = newProjectInput.value.trim();
        if (projectName) {
            addProject(projectName);
            newProjectInput.value = '';
        }
    });

    renderProjectList();
