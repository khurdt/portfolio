let work = (function () {

  let projectList = [
    {
      name: 'Meet App',
      github: 'https://github.com/khurdt/meet-app',
      view: 'https://khurdt.github.io/meet-app/',
<<<<<<< HEAD
      description: 'an App to see events in specific cities',
      img: './images/meet.png',
      modalimg: './images/event-ticket-png.png'
=======
      description: 'an App for users to see events in different cities and potentially meet with others. Using Google Calendars as my data source and a serverless function from AWS I could render a list of events making it look pretty with Bootstrap.  I also used recharts as a way to make pie and bar charts. This app was also converted into a Progressive Web App(PWA) being able to be offline and used as either as a desktop or mobile app.',
      img: './images/coming-soon.png',
      modalimg: './images/coming-soon.png'
>>>>>>> origin/main
    },
    {
      name: 'Movie Info React App',
      github: 'https://github.com/khurdt/movie-app-api',
      view: 'https://kh-cinema-app.netlify.app/',
      description: 'An App for users to see movies and their info and keep track of favorites. Built server and database using node, express, and mongo. Enjoyed creating endpoints and connecting them to the database. Also built client side using React, Redux, and Bootstrap. One of the difficulties or main cause of bugs was trying to pass props and functions without losing their state or loading them before page rendered. The other difficulty was how to keep all the data the same as different views updated.',
      img: './images/movie-app.png',
      modalimg: './images/lego.png'
    },
    {
      name: 'Pokedex App',
      github: 'https://github.com/khurdt/pokedex.github.io',
      github2: 'https://khurdt.github.io/portfolio/work.html',
      github2title: 'No API',
      view: 'https://khurdt.github.io/pokedex.github.io/',
      description: 'An app that fetches pokemon from an API and displays its image and information within a modal.',
      img: './images/pokedex.png',
      modalimg: './images/venusaur.png'
    },
    {
      name: 'Drawing App',
      github: 'github__link" href="https://github.com/khurdt/drawing.app.github.io',
      github2: 'https://khurdt.github.io/portfolio/work.html',
      github2title: 'No API',
      view: 'https://khurdt.github.io/drawing-app.github.io/',
      description: 'An app for drawing on a blank canvas with different colors, multiple width sizes, and mirror or quardrant lines.',
      img: './images/drawing.png',
      modalimg: './images/color1.png'
    },
    {
      name: 'To Do List App',
      github: 'github__link" href="https://github.com/khurdt/to-do-list.app.github.io',
      github2: 'https://khurdt.github.io/portfolio/work.html',
      github2title: 'No API',
      view: 'https://khurdt.github.io/to-do-list-app.github.io/',
      description: 'An app that displays a list from the provided input and allows you to highlight, cross out, or delete items.',
      img: './images/todolist.png',
      modalimg: './images/todolist (1).png'
    }
  ]

  function loadWork() {
    projectList.forEach(function (item) {
      let project = {
        name: item.name,
        github: item.github,
        view: item.view,
        description: item.description
      }
    });
  }

  function displayWork(project) {
    let container = document.querySelector('#work');
    let listWork = document.createElement('li');
    let button = document.createElement('button');
    let title = document.createElement('h4');
    listWork.classList.add('list-item');
    button.classList.add('grid__item');
    button.style.backgroundImage = 'url(' + project.img + ')';
    title.innerText = project.name;
    listWork.appendChild(title);
    listWork.appendChild(button);
    container.appendChild(listWork);

    button.addEventListener('click', () => {
      displayDetails(project);
      toggleModal();
    })
  }

  let modal = document.querySelector('#control-container');
  let closeIcon = document.querySelector('.close-icon');

  function displayDetails(project) {
    modal.innerHTML = '';

    closeIcon = document.createElement('img');
    closeIcon.classList.add('close-icon');
    closeIcon.src = './images/close-icon.png';

    let listDetails = document.createElement('div');
    listDetails.classList.add('modal-list')

    let modalImg = document.createElement('img');
    modalImg.classList.add('modal-item');
    modalImg.src = project.modalimg;

    let projectLink = document.createElement('a');
    projectLink.classList.add('modal-item');
    let viewLink = document.createTextNode("See Project Now");
    projectLink.appendChild(viewLink);
    projectLink.href = project.view;
    projectLink.target = '_blank';

    let githubLink = document.createElement('a');
    githubLink.classList.add('modal-item');
    let gitLink = document.createTextNode("See GitHub");
    githubLink.appendChild(gitLink);
    githubLink.href = project.github;
    githubLink.target = '_blank';

    let paragraph = document.createElement('p');
    paragraph.classList.add('modal-item');
    paragraph.innerText = project.description;

    listDetails.appendChild(modalImg);
    listDetails.appendChild(paragraph);
    listDetails.appendChild(projectLink);
    listDetails.appendChild(githubLink);
    modal.appendChild(closeIcon);
    modal.appendChild(listDetails);

    closeIcon.addEventListener('click', () => {
      toggleModal();
    })
  }

  function toggleModal() {
    if (modal.classList.contains('display')) {
      modal.classList.remove('display');
      closeIcon.style.display = 'none';
    } else {
      modal.classList.add('display');
      closeIcon.style.display = 'block';
    }
  }

  //hide modal if escape is clicked on keyboard
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('display')) {
      modal.classList.remove('display');
    }
  });

  function getAll() {
    return projectList;
  }

  return {
    loadWork: loadWork,
    displayWork: displayWork,
    displayDetails: displayDetails,
    getAll: getAll
  }

})();

work.getAll().forEach(function (project) {
  work.displayWork(project);
});


// Update your portfolio to include your new project. Be sure to add the hosted version, the GitHub repository, a screenshot,
//a description and objective, a list of the technologies used for the project, and any additional materials you deem relevant.
//Try also to reflect on your work by answering the following questions:
// What was your role for this project and what tasks did you face?
// What decisions did you take and why? What were the consequences?
// If you could, what would you do differently?
// What lessons did you learn during this project?