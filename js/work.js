let work = (function () {

  let projectList = [
    {
      name: 'Angular Movie Info App',
      github: 'https://github.com/khurdt/movie-app-angular-client',
      view: 'https://khurdt.github.io/movie-app-angular-client',
      description: `This app displays movies based on its existing server-side code (REST API and database), and allows you to see information about each movie, its genre and director. One can create an account and collect their personal favorite movies and delete them.
      This app utitlized "Angular" for its client-side technology and "typedoc" for the supporting documentation. I used Angular Material to aid me in implementing CSS, Angular Routing was implemented, as well as a "service" for all my endpoint api calls.`,
      img: './images/angularFlix.png',
      modalimg: './images/angular.png'
    },
    {
      name: 'Chat App',
      github: 'https://github.com/khurdt/chat-app',
      view: 'https://github.com/khurdt/chat-app#simple-chat-application',
      description: 'An app to to be able to send texts, images, and current location. This app utilized "Expo" for making universal native apps for Android, iOS, and the web with JavaScript and React, "Firebase" as its real-time database, and "Gifted Chat" as its Chat UI. One of the issues faced was implementing external libraries to be able to pick a photo from library, take a photo, get current location, and send it through Gifted Chat.',
      img: './images/chat-app.png',
      modalimg: './images/holding-phone.png'
    },
    {
      name: 'Meet App',
      github: 'https://github.com/khurdt/meet-app',
      view: 'https://khurdt.github.io/meet-app/',
      description: 'an App for users to see events in different cities and potentially meet with others. Using Google Calendars as my data source and a serverless function from AWS I could render a list of events making it look pretty with Bootstrap. I also used recharts as a way to make pie and bar charts. This app was also converted into a Progressive Web App(PWA) being able to be offline and used as either as a desktop or mobile app. The most challenging issue was learning how the serverless functions work, and getting data from google calendars with the lambda function',
      img: './images/meet.png',
      modalimg: './images/event-ticket-png.png'
    },
    {
      name: 'React Movie Info App',
      github: 'https://github.com/khurdt/movie-app-client',
      view: 'https://kh-cinema-app.netlify.app/',
      description: 'An App for users to see movies and their info and keep track of favorites. Built server and database using node, express, and mongo. Enjoyed creating endpoints and connecting them to the database. Also built client side using React, Redux, and Bootstrap. One of the difficulties or main cause of bugs was trying to pass props and functions without losing their state or loading them before page rendered. The other difficulty was how to keep all the data the same as different views updated.',
      img: './images/movie-app.png',
      modalimg: './images/lego.png'
    },
    {
      name: 'Movie App Server and Database',
      github: 'https://github.com/khurdt/movie-app-api',
      view: 'https://kh-movie-app.herokuapp.com',
      description: 'Built server and database using node, express, and mongo. Also utilized mongoose middleware for model schemas and passport middleware for generating and authenticating JWT token. Also used bycrypt middleware to hashing password and authenticating hashed password. Enjoyed creating endpoints and connecting them to the mongo database and testing them with Postman. Creating Mongo database from the terminal was a good learning curve.',
      img: './images/server.jpg',
      modalimg: './images/database.png'
    },
    {
      name: 'Pokedex App',
      github: 'https://github.com/khurdt/pokedex.github.io',
      github2: 'https://khurdt.github.io/portfolio/work.html',
      github2title: 'No API',
      view: 'https://khurdt.github.io/pokedex.github.io/',
      description: 'An app that fetches pokemon from an API and displays its image and information within a modal. This app was built using vanilla javascript, HTML5, and CSS. The main learning curve was manipulating the DOM via javascript and implementing the search bar, and learning how to access data from api.',
      img: './images/pokedex.png',
      modalimg: './images/venusaur.png'
    },
    {
      name: 'Drawing App',
      github: 'github__link" href="https://github.com/khurdt/drawing.app.github.io',
      github2: 'https://khurdt.github.io/portfolio/work.html',
      github2title: 'No API',
      view: 'https://khurdt.github.io/drawing-app.github.io/',
      description: 'An app for drawing on a blank canvas with different colors, multiple width sizes, and mirror or quardrant lines. This app utilized HTML5 canvas.',
      img: './images/drawing.png',
      modalimg: './images/color1.png'
    },
    {
      name: 'To Do List App',
      github: 'github__link" href="https://github.com/khurdt/to-do-list.app.github.io',
      github2: 'https://khurdt.github.io/portfolio/work.html',
      github2title: 'No API',
      view: 'https://khurdt.github.io/to-do-list-app.github.io/',
      description: 'An app that displays a list from the provided input and allows you to highlight, cross out, or delete items. This app utilized JQuery instead of vanilla javascript.',
      img: './images/todolist.png',
      modalimg: './images/todolist (1).png'
    },
  ];

  let project;
  function loadWork() {
    projectList.forEach(function (item) {
      project = {
        name: item.name,
        github: item.github,
        view: item.view,
        description: item.description
      }
    });
  }

  function displayWork(project) {
    let container = $('#work');
    let listWork = $('<li class="list-item"></li>');
    let button = $(`<button style="background-image: url('${project.img}');" class="grid__item"></button>`);
    let title = $(`<h4>${project.name}</h4>`);
    listWork.append(title);
    listWork.append(button);
    container.append(listWork);

    button.on('click', () => {
      showModal(project)
      // displayDetails(project);
      // toggleModal();
    })
  }


  function showModal(project) {
    let maxWidth = (window.innerWidth);
    let modal = $(`#modal-container`);
    modal.css({ maxWidth: maxWidth })
    let modalBody = $('.modal-body');
    let modalTitle = $('.modal-title');
    let modalFooter = $('.modal-footer')

    modalTitle.empty();
    modalBody.empty();
    modalFooter.empty();

    let pokemonTitle = $('<h1 class="text-capitalize">' + project.name + '</h1>')
    let pokemonImage = $('<img style="width:30%;display:grid;margin: auto;">');
    pokemonImage.attr('src', project.modalimg);

    //display details in  a grid
    let detailsList = $('<li style="list-style-type: none;"></li>');
    let pokemonInfo = $(`<p style="margin:10px;">${project.description}</p>`);

    let seeProject = $(`<button href=${project.view} type="button" class="btn btn-secondary">See Project</button>`);
    let seeGitHub = $(`<button href=${project.github} type="button" class="btn btn-secondary">See GitHub</button>`);
    let close = $('<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>')

    modalTitle.append(pokemonTitle);
    modalBody.append(pokemonImage)
    modalBody.append(detailsList);
    detailsList.append(pokemonInfo);
    modalFooter.append(seeProject);
    modalFooter.append(seeGitHub);
    modalFooter.append(close);

    modal.modal();
  }

  function getAll() {
    return projectList;
  }

  return {
    loadWork: loadWork,
    displayWork: displayWork,
    showModal: showModal,
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

// - What was your role for this project and what tasks did you face?
// - What decisions did you take and why? What were the consequences?
// - If you could, what would you do differently?
// - What lessons did you learn during this project?
// 2) A screenshot to represent the project.
// 3) A link to the project’s GitHub repository.
// 4) A link to the live, hosted version of your app (if possible). If you don’t have a live version, include screenshots that show the app’s functionality or a recording of your app in use.
// 5) A list of the technologies used for each project (React, CSS etc. — again, you can pull this from your README file).
// 6) Any other relevant materials you created for the project; for example, user flows, user stories, and/or a Kanban board. Be sure to explain how you worked with these materials during the project.

// function displayDetails(project) {
//   modal.innerHTML = '';

//   closeIcon = document.createElement('img');
//   closeIcon.classList.add('close-icon');
//   closeIcon.src = './images/close-icon.png';

//   let listDetails = document.createElement('div');
//   listDetails.classList.add('modal-list')

//   let modalImg = document.createElement('img');
//   modalImg.classList.add('modal-item');
//   modalImg.src = project.modalimg;

//   let projectLink = document.createElement('a');
//   projectLink.classList.add('modal-item');
//   let viewLink = document.createTextNode("See Project Now");
//   projectLink.appendChild(viewLink);
//   projectLink.href = project.view;
//   projectLink.target = '_blank';

//   let githubLink = document.createElement('a');
//   githubLink.classList.add('modal-item');
//   let gitLink = document.createTextNode("See GitHub");
//   githubLink.appendChild(gitLink);
//   githubLink.href = project.github;
//   githubLink.target = '_blank';

//   let paragraph = document.createElement('p');
//   paragraph.classList.add('modal-item');
//   paragraph.innerText = project.description;

//   listDetails.appendChild(modalImg);
//   listDetails.appendChild(paragraph);
//   listDetails.appendChild(projectLink);
//   listDetails.appendChild(githubLink);
//   modal.appendChild(closeIcon);
//   modal.appendChild(listDetails);

//   closeIcon.addEventListener('click', () => {
//     toggleModal();
//   })
// }

// function toggleModal() {
//   if (modal.classList.contains('display')) {
//     modal.classList.remove('display');
//     closeIcon.style.display = 'none';
//   } else {
//     modal.classList.add('display');
//     closeIcon.style.display = 'block';
//   }
// }

// //hide modal if escape is clicked on keyboard
// window.addEventListener('keydown', (e) => {
//   if (e.key === 'Escape' && modal.classList.contains('display')) {
//     modal.classList.remove('display');
//   }
// });

// window.addEventListener('keydown', (e) => {
//   if (e.key === 'Escape' && modal.classList.contains('display')) {
//     modal.classList.remove('display');
//   }
// });