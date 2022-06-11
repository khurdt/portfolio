let work = (function () {

  let projectList = [
    {
      name: 'Angular Movie Info App',
      github: 'https://github.com/khurdt/movie-app-angular-client',
      view: 'https://khurdt.github.io/movie-app-angular-client',
      whatIsIt: 'An app that displays movies based on its existing server-side code (REST API and database), and allows you to see information about each movie, its genre and director. One can create an account and collect their personal favorite movies and delete them.',
      how: `This app utitlized "Angular" for its client-side technology and "typedoc" for the supporting documentation. I used Angular Material to aid me in implementing CSS, Angular Routing was implemented, as well as a "service" for all my endpoint api calls.`,
      challenges: 'Learning Angular Material and how it effected the rest of the css. Also converting API data in order to display all user likes for each movie.',
      img: './images/angularFlix.png',
      modalImg: './images/angular.png'
    },
    {
      name: 'Chat App',
      github: 'https://github.com/khurdt/chat-app',
      view: 'https://github.com/khurdt/chat-app#simple-chat-application',
      whatIsIt: 'An app to to be able to send texts, images, and current location.',
      how: 'This app utilized React-Native by using "Expo" for making universal native apps for Android, iOS, and the web with JavaScript and React, "Firebase" as its real-time database, and "Gifted Chat" as its Chat UI.',
      challenges: 'One of the issues faced was implementing external libraries to be able to pick a photo from library, take a photo, get current location, and send it through Gifted Chat.',
      img: './images/chat-app.png',
      modalImg: './images/holding-phone.png'
    },
    {
      name: 'Meet App',
      github: 'https://github.com/khurdt/meet-app',
      view: 'https://khurdt.github.io/meet-app/',
      whatIsIt: 'An app for users to see events in different cities and potentially meet with others.',
      how: 'Built using React, Google Calendars as my data source and a serverless function from AWS I could render a list of events making it look pretty with Bootstrap. I also used recharts as a way to make pie and bar charts. This app was also converted into a Progressive Web App(PWA) being able to be offline and used as either as a desktop or mobile app.',
      challenges: 'The most challenging issue was learning how the serverless functions work, and getting data from google calendars with the lambda function',
      img: './images/meet.png',
      modalImg: './images/event-ticket-png.png'
    },
    {
      name: 'React Movie Info App',
      github: 'https://github.com/khurdt/movie-app-client',
      view: 'https://kh-cinema-app.netlify.app/',
      whatIsIt: 'An app that displays movies based on its existing server-side code (REST API and database), and allows you to see information about each movie, its genre and director. One can create an account and collect their personal favorite movies and delete them.',
      how: 'Built App using React, Bootstrap, Redux, and Axios for HTTPS calls.',
      challenges: 'One of the difficulties or main cause of bugs was trying to pass props and functions without losing their state or loading them before page rendered. The other difficulty was how to keep all the data the same as different views updated.',
      img: './images/movie-app.png',
      modalImg: './images/lego.png'
    },
    {
      name: 'Movie App Server and Database',
      github: 'https://github.com/khurdt/movie-app-api',
      view: 'https://kh-movie-app.herokuapp.com',
      whatIsIt: 'Server and Database for serving movie data to the React and Angular Movie Apps;',
      how: 'Built using Node, Express, and Mongo. Also utilized Mongoose middleware for model schemas and Passport middleware for generating and authenticating JWT token. Also used Bycrypt middleware to hashing password and authenticating hashed password. Testing endpoints with Postman.',
      challenges: 'Learning how to create endpoints and manipulate the data with the mongo language, and implementing the JWT token.',
      img: './images/server.jpg',
      modalImg: './images/database.png'
    },
    {
      name: 'Pokedex App',
      github: 'https://github.com/khurdt/pokedex.github.io',
      view: 'https://khurdt.github.io/pokedex.github.io/',
      whatIsIt: 'An app that fetches pokemon from an API and displays its image and information within a modal.',
      how: 'This app was built using Vanilla Javascript, HTML5, and CSS.',
      challenges: 'The main learning curve was manipulating the DOM via Javascript and implementing the search bar, and learning how to access data from api.',
      img: './images/pokedex.png',
      modalImg: './images/venusaur.png'
    },
    {
      name: 'Drawing App',
      github: 'github__link" href="https://github.com/khurdt/drawing.app.github.io',
      view: 'https://khurdt.github.io/drawing-app.github.io/',
      whatIsIt: 'An app for drawing on a blank canvas with different colors, multiple width sizes, and mirror or quardrant lines.',
      how: 'This app utilized HTML5 canvas, Vanilla Javascript, and CSS',
      challenges: 'Learning the canvas language and how to draw multiple lines at the same time',
      img: './images/drawing.png',
      modalImg: './images/color1.png'
    },
    {
      name: 'To Do List App',
      github: 'github__link" href="https://github.com/khurdt/to-do-list.app.github.io',
      view: 'https://khurdt.github.io/to-do-list-app.github.io/',
      whatIsIt: 'An app that displays a list from the provided input and allows you to highlight, cross out, or delete items.',
      how: 'This app utilized JQuery, HTML5, and CSS.',
      challenges: 'Learning the JQuery language which was found to be much simpler than Vanilla Javascript',
      img: './images/todolist.png',
      modalImg: './images/todolist (1).png'
    },
  ];

  let project;
  function loadWork() {
    projectList.forEach(function (item) {
      project = {
        name: item.name,
        github: item.github,
        view: item.view,
        whatIsIt: item.whatIsIt,
        how: item.how,
        challenges: item.challenges,
        img: item.img,
        modalImg: item.modalImg
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
    })
  }


  function showModal(project) {
    let modal = $(`#modal-container`);
    let modalBody = $('.modal-body');
    let modalTitle = $('.modal-title');
    let modalFooter = $('.modal-footer');

    modalTitle.empty();
    modalBody.empty();
    modalFooter.empty();

    let projectTitle = $('<h1 class="text-capitalize">' + project.name + '</h1>')
    let modalImage = $('<img style="width:30%;display:grid;margin: auto;">');
    modalImage.attr('src', project.modalImg);

    //display details in  a grid
    let detailsList = $('<li style="list-style-type: none;"></li>');
    let modalWhatTitle = $(`<h3 style="margin-right: auto;">What Is It??</h3>`);
    let modalWhat = $(`<p style="margin:10px;">${project.whatIsIt}</p>`);
    let modalHowTitle = $(`<h3 style="margin-right: auto;">How?</h3>`);
    let modalHow = $(`<p style="margin:10px;">${project.how}</p>`);
    let modalChallengesTitle = $(`<h3 style="margin-right: auto;">Challenges:</h3>`);
    let modalChallenges = $(`<p style="margin:10px;">${project.challenges}</p>`);

    let seeProject = $(`<a type="button" target="_blank" class="btn" style="text-decoration: none; margin-right: auto; padding: 10px;background-color: lightcoral;" href="${project.view}">See Project</a>`);
    let seeGitHub = $(`<a type="button" target="_blank" class="btn" style="text-decoration: none; margin-right: auto; padding: 10px; background-color: lightcoral;" href="${project.github}">See GitHub</a>`);
    let close = $('<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>')

    modalTitle.append(projectTitle);
    modalBody.append(modalImage)
    modalBody.append(detailsList);
    detailsList.append(modalWhatTitle);
    detailsList.append(modalWhat);
    detailsList.append(modalHowTitle);
    detailsList.append(modalHow);
    detailsList.append(modalChallengesTitle);
    detailsList.append(modalChallenges);
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
//   modalImg.src = project.modalImg;

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