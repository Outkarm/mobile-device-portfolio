// pop up menu JS

const close = document.createElement('img');
const navBar = document.querySelector('.navbar');
const menuIcon = document.querySelector('.menu');
const subMenuIcon = document.querySelector('.nav-bar-list-icon');
const navBarText = document.querySelectorAll('.nav-bar-list');

function menuPopUp() {
  navBar.classList.remove('navbar');
  navBar.classList.add('Phone-menu-section');
  menuIcon.classList.add('vanish');
  subMenuIcon.classList.add('vanish');
  navBarText.forEach((element) => element.classList.add('Phone-menu-section-text'));
  close.src = './images/close-icon.png';
  close.classList.add('close');
  navBar.prepend(close);
  close.classList.remove('vanish');
}

function menuCloseUp() {
  navBar.classList.add('navbar');
  navBar.classList.remove('Phone-menu-section');
  menuIcon.classList.remove('vanish');
  subMenuIcon.classList.remove('vanish');
  navBarText.forEach((element) => element.classList.remove('Phone-menu-section-text'));
  close.classList.add('vanish');
}

menuIcon.addEventListener('click', menuPopUp);
close.addEventListener('click', menuCloseUp);
navBarText.forEach((element) => {
  element.addEventListener('click', menuCloseUp);
});

const resumeButton = document.querySelector('.resume');

resumeButton.addEventListener('click', () => {
  const resumeURL = 'https://docs.google.com/document/d/1pY2aZYe2xszmshg2gSoAQdjE9PWKKIciab4FFzIkHqs/edit?usp=sharing';
  window.open(resumeURL);
});

const cards = [
  {
    mainCardImage:
      './images/completed-projects/to-do-list-app/rsz_2to-do-1.png',
    mainCardHeading: 'To-Do List App',
    mainCardInfo:
      'This is a website designed to help users organize their day by providing a simple list format to track tasks. Users can mark items as complete, taking inspiration from minimalist website design.',
    mainCardBudgeList: ['css', 'html', 'javaScript'],
    mainCardButton: 'See Project',
    popUpCardSeeLiveButton: 'See Live ',
    popUpCardSeeSourceButton: 'See Source ',
    popUpCardSeeLive: 'https://outkarm.github.io/To-Do-List-App/dist/',
    popUpCardSeeSource: 'https://github.com/Outkarm/To-Do-List-App',
    popUpCardImage:
      './images/completed-projects/to-do-list-app/rsz_to-do-2.png',
    popUpCardBudgeList: ['css', 'html', 'javaScript'],
    popUpCardText:
      'Minimalist To Do List Project is a website that helps to organize your day. It simply lists the things that you need to do and allows you to mark them as complete. It is inspired by the minimalist website. That website is already offline but you can still play with thanks to web.archive.org',
  },
  {
    cardHeading: 'Awesome Books',
    cardText:
      'This is an Awesome Book project. In this project, I made a form and added the functionality of deleting and adding books with plain javascript.',
    cardBudgeList: ['css', 'html', 'javaScript'],
    cardButton: 'See Project',
    cardImg: './images/completed-projects/Awesome-Books/Awesome-book-1.PNG',
    popUpCardSeeLiveButton: 'See Live ',
    popUpCardSeeSourceButton: 'See Source ',
    popUpCardSeeLive: 'https://outkarm.github.io/awesome-book-es6-project/',
    popUpCardSeeSource: 'https://github.com/Outkarm/awesome-book-es6-project',
    popUpCardImage:
      './images/completed-projects/Awesome-Books/Awesome-book-1.PNG',
    popUpCardBudgeList: ['css', 'html', 'javaScript'],
    popUpCardText:
      "The Awesome Book project is a web application created using HTML5, CSS3, and JavaScript. It features a user-friendly form that allows users to add, delete, and manage their book collection. The application utilizes the power of plain JavaScript to provide seamless functionality and interactivity. Upon loading the page, users are presented with an intuitive interface displaying their existing book collection, if any. They can easily add new books by clicking the add book button on the nav bar and entering the title and author details in the provided form. Clicking the 'Add' button triggers JavaScript code that validates the input and adds the new book to the collection. To delete a book, users can click on a delete button or an associated icon next to each book. This action triggers JavaScript code that removes the book from the collection, updating the display in real time.  The Awesome Book project demonstrates the power of plain JavaScript in creating a dynamic and functional web application. With its easy-to-use form and book management features, it offers a convenient solution for book enthusiasts to organize and track their collection effectively.",
  },
  {
    cardHeading: 'Leaderboards',
    cardText:
      'This is a web app that keeps track of scores of players by saving various data on a server.',
    cardBudgeList: ['css', 'html', 'javaScript'],
    cardButton: 'See Project',
    cardImg: './images/completed-projects/leaderboards/leaderboards-thb-1.PNG',
    popUpCardSeeLiveButton: 'See Live ',
    popUpCardSeeSourceButton: 'See Source ',
    popUpCardSeeLive: 'https://outkarm.github.io/leaderboard/dist/',
    popUpCardSeeSource: 'https://github.com/Outkarm/leaderboard',
    popUpCardImage:
      './images/completed-projects/leaderboards/leaderboards-thb-2.PNG',
    popUpCardBudgeList: ['css', 'html', 'javaScript'],
    popUpCardText:
      "This web application serves as a comprehensive solution for efficiently tracking and managing player scores. By leveraging server-side technology, it effectively stores and organizes various data points associated with player scores. This ensures accurate and real-time updates, enabling users to conveniently monitor and analyze performance. The app's functionality and data storage capabilities contribute to seamless score management and enhance the overall user experience.",
  },
  {
    cardHeading: 'Calculator',
    cardText:
      'The Calculator app offers a clean and minimalist interface, accurate functionality, memory capabilities, and customizable options, providing users with a reliable and convenient tool for quick and efficient mathematical calculations.',
    cardBudgeList: ['React', 'HTML5', 'JavaScript'],
    cardButton: 'See Project',
    cardImg:
      './images/completed-projects/Math-magician-app/Math-Magician-1.PNG',
    popUpCardSeeLiveButton: 'See Live ',
    popUpCardSeeSourceButton: 'See Source ',
    popUpCardSeeLive: 'https://calculator-26hg.onrender.com',
    popUpCardSeeSource: 'https://github.com/Outkarm/math-magicians-app',
    popUpCardImage:
      './images/completed-projects/Math-magician-app/Math-Magician-1.PNG',
    popUpCardBudgeList: ['React', 'JavaScript', 'HTML5', 'CSS3'],
    popUpCardText:
      "Introducing our basic calculator app, designed to provide a simple yet powerful tool for performing mathematical calculations. Whether you're a student, professional, or anyone in need of quick calculations, our app is here to assist you with its user-friendly interface and essential features. Upon launching the app, you'll be greeted by a clean and intuitive design that mimics the appearance of a physical calculator. The interface is minimalistic, with large, easy-to-read buttons and a clear display, making it accessible to users of all ages and technical backgrounds. The functionality of our calculator app covers the fundamental operations necessary for everyday calculations. You can perform addition, subtraction, multiplication, and division with ease. The app also includes a decimal point button for working with decimal numbers, as well as a clear button to remove any erroneous input. To input numbers, simply tap the corresponding buttons on the calculator interface. The display will show your inputs in real-time, allowing you to verify and edit them if needed. The app supports multiple-digit numbers and ensures accurate calculations by following standard mathematical rules. One of the notable features of our calculator app is its memory functionality. You can store and recall numbers using the memory buttons, allowing you to perform calculations involving multiple values without losing track of intermediate results. This feature is particularly useful for complex calculations or when you need to store temporary values. For enhanced convenience, the calculator app supports both portrait and landscape orientations, adapting to your device's screen size and orientation. This ensures a seamless user experience across smartphones and tablets, enabling you to perform calculations comfortably on any device. Beyond its core functionality, our calculator app also aims to provide a delightful user experience. The app's settings allow you to customize aspects such as the display format (decimal or fraction), button sounds, and theme colors, allowing you to personalize the app to your preferences.t",
  },
  {
    cardHeading: 'Restaurant Web Page',
    cardText:
      "Restaurant web app is a web app utilizing 'The Meals API', showcasing API integration, UI development, and data presentation.",
    cardBudgeList: ['css', 'html', 'javaScript'],
    cardButton: 'See Project',
    cardImg: './images/completed-projects/Restaurant-app/restaurant-app-s.png',
    popUpCardSeeLiveButton: 'See Live ',
    popUpCardSeeSourceButton: 'See Source ',
    popUpCardSeeLive:
      'https://outkarm.github.io/javascript-capstone-group-project/dist/',
    popUpCardSeeSource:
      'https://github.com/Outkarm/javascript-capstone-project',
    popUpCardImage:
      './images/completed-projects/Restaurant-app/restaurant-app-l.png',
    popUpCardBudgeList: ['JavaScript', 'HTML5', 'CSS3'],
    popUpCardText:
      "Restaurant web app project is about building a web application using 'The Meals API' as the data source. The web app will consist of three interfaces: a home page with a search bar, a meal details page, and a random meal generator. Additional features can include user favorites, filtering and sorting options, responsive design, and error handling. The project aims to showcase your skills in API integration, UI development, and data presentation.",
  },
  {
    cardHeading: 'React Todo List App',
    cardText:
      'This is a to-do list application that allows you to add, delete, submit, and edit items. The application utilizes browser local storage to store your to-do items, ensuring that they persist even if you reload or close the app',
    cardBudgeList: ['React', 'Redux', 'JavaScript'],
    cardButton: 'See Project',
    cardImg: './images/completed-projects/React-Todo-List-App/Todo-List-s.png',
    popUpCardSeeLiveButton: 'See Live ',
    popUpCardSeeSourceButton: 'See Source ',
    popUpCardSeeLive: 'https://to-do-list-p1tg.onrender.com',
    popUpCardSeeSource: 'https://github.com/Outkarm/react-todo',
    popUpCardImage:
      './images/completed-projects/React-Todo-List-App/Todo-List-l.png',
    popUpCardBudgeList: ['React', 'JavaScript', 'HTML5', 'CSS3'],
    popUpCardText:
      "The To-Do List application is a powerful and intuitive web application built using HTML5, CSS3, JavaScript, and React. Its main objective is to help users effectively manage their tasks by providing features such as adding, deleting, submitting, and editing items. The application's interface presents users with a clean and organized layout, displaying their existing to-do items, if any. Users can easily add new tasks by entering the task details in the provided input field and clicking the 'Add' button. Upon submission, the application triggers JavaScript and React code to validate the input and add the new task to the list. Each task in the list is accompanied by options to delete or edit the task. Clicking the delete button or icon triggers JavaScript code to remove the task from the list, providing users with a seamless way to declutter their task list. Similarly, clicking the edit button allows users to modify the task details directly within the application. One of the key features of the To-Do List application is its utilization of browser local storage. The application leverages this storage mechanism to store the to-do items persistently, ensuring that they are retained even if the user reloads or closes the app. This functionality guarantees that users can conveniently resume their task management without any loss of data. The To-Do List application offers a smooth and efficient user experience, enabling users to stay organized and focused on their tasks. By utilizing the power of React and browser local storage, the app ensures seamless task management with persistent data storage, making it a valuable tool for individuals seeking an effective and user-friendly to-do list solution.",
  },
  {
    cardHeading: 'Book Store App',
    cardText:
      'Bookstore App is a web application for effortless book collection management, allowing users to input titles and authors, create, list, and remove books. Ideal for book enthusiasts and collectors.',
    cardBudgeList: ['React', 'Redux', 'JavaScript'],
    cardButton: 'See Project',
    cardImg: './images/completed-projects/Bookstore-App/Bookstore-app-s.png',
    popUpCardSeeLiveButton: 'See Live ',
    popUpCardSeeSourceButton: 'See Source ',
    popUpCardSeeLive: 'https://book-store-f2zl.onrender.com',
    popUpCardSeeSource: 'https://github.com/Outkarm/book-store',
    popUpCardImage:
      './images/completed-projects/Bookstore-App/Bookstore-app-l.png',
    popUpCardBudgeList: ['React', 'Redux', 'JavaScript', 'HTML5', 'CSS3'],
    popUpCardText:
      "The Bookstore App is a comprehensive web application developed using HTML5, CSS3, JavaScript, React, and Redux. It empowers users to create, manage, and organize their book collections with ease. Upon launching the app, users are presented with a user-friendly interface where they can input the title and author name of a book. After entering the details, they can click the 'Add' button, which triggers React and Redux code to store the book in the application's state. This centralized state management provided by Redux ensures a predictable and efficient data flow throughout the app. The Bookstore App also offers functionalities such as book listing and removal. Users can view their entire book collection, with each book displayed along with its title and author name. To remove a book, users can simply click on a delete button or icon associated with the respective book. This action triggers Redux code to update the application's state and dynamically remove the book from the collection.The use of Redux in the Bookstore App ensures that the book collection remains synchronized and easily manageable. It provides a centralized source of truth for the data, enabling seamless updates and consistent user experience across different components of the application.Book enthusiasts and collectors will find the Bookstore App to be a valuable tool for organizing and tracking their books. With its user-friendly interface and efficient functionalities, the app simplifies the process of creating, listing, and removing books, making it a go-to resource for managing book collections effectively.",
  },
  {
    cardHeading: 'Nba Teams',
    cardText:
      'The NBA project is a React-Redux web application that retrieves NBA team information from an API and displays it on the page.',
    cardBudgeList: ['React', 'Redux', 'JavaScript'],
    cardButton: 'See Project',
    cardImg: './images/completed-projects/NBA-App/Nba-informations-app-s.png',
    popUpCardSeeLiveButton: 'See Live ',
    popUpCardSeeSourceButton: 'See Source ',
    popUpCardSeeLive: 'https://nba-info.onrender.com',
    popUpCardSeeSource: 'https://github.com/Outkarm/react-capstone-nba',
    popUpCardImage:
      './images/completed-projects/NBA-App/Nba-informations-app-l.png',
    popUpCardBudgeList: ['React', 'Redux', 'JavaScript', 'HTML5', 'CSS3'],
    popUpCardText:
      "The NBA project is an impressive React-Redux web application designed specifically for mobile devices. It offers NBA enthusiasts a comprehensive resource for accessing detailed team information effortlessly. The application retrieves NBA team data from an API and dynamically displays it on the page. Users are greeted with a user-friendly interface that allows them to browse through the various NBA teams. The responsive design ensures optimal viewing and interaction on mobile devices, providing an immersive and enjoyable experience. The NBA project incorporates powerful search and filtering capabilities, enabling users to quickly find specific teams based on their preferences. Whether users are looking for a particular team or exploring teams based on specific criteria, the application simplifies the process by providing efficient search functionality and flexible filtering options. The application leverages the benefits of React and Redux for state management, ensuring a centralized and predictable data flow. The dynamic updates offered by Redux allow for seamless and real-time updates to the displayed team information, enhancing the user experience. With its user-friendly interface, search and filtering capabilities, dynamic updates, and responsive design, the NBA project serves as an invaluable resource for NBA enthusiasts. It offers easy access to detailed team information, enabling users to stay up to date with their favorite teams and discover new ones. Whether it's for casual browsing or in-depth research, the NBA project provides a comprehensive and enjoyable mobile experience for NBA fans.",
  },
  {
    cardHeading: 'Budget App',
    cardText:
      'This is a classic example of a blog website. It is a functional website that shows the list of Categories and associated operations to each category.',
    cardBudgeList: ['Ruby', 'Ruby on rails', 'bootstrap'],
    cardButton: 'See Project',
    cardImg: './images/completed-projects/Badget-App/Budget-App-s.png',
    popUpCardSeeLiveButton: 'See Live ',
    popUpCardSeeSourceButton: 'See Source ',
    popUpCardSeeLive: 'https://budgetapp-fnyd.onrender.com/',
    popUpCardSeeSource: 'https://github.com/Outkarm/Budget-app',
    popUpCardImage: './images/completed-projects/Badget-App/Budget-App-l.png',
    popUpCardBudgeList: ['Ruby', 'Ruby on rails', 'bootstrap'],
    popUpCardText:
      "Welcome to our budget app, a powerful tool designed to help you manage your finances effectively. Whether you're looking to track expenses, create budgets, or gain a better understanding of your spending habits, our app is here to assist you. With its user-friendly interface and comprehensive features, you'll be able to take control of your finances and achieve your financial goals. To get started, you'll need to sign up or log in to the app. This ensures that your financial data remains secure and accessible only to you. Once you've logged in, you'll be greeted by a clean and organized dashboard that provides an overview of your financial status. The main focus of our budget app is the ability to create and manage categories. Categories represent different areas of expenditure in your life, such as groceries, entertainment, bills, or transportation. You can easily add new categories and customize them to suit your specific needs. Within each category, you can add a list of transactions. Transactions represent individual expenses or income that you incur within a specific category. You can enter the date, amount, description, and other relevant details for each transaction. The app will automatically calculate the total sum of transactions within each category, providing you with a clear picture of your spending in that area. The category cards on the dashboard display important information at a glance. This includes the total sum of transactions within each category, giving you a quick overview of your expenditure. By organizing your finances into categories, you can easily identify areas where you might need to adjust your spending habits. Our budget app also allows you to set budget limits for each category. This helps you stay on track and avoid overspending. You can specify a monthly or weekly budget for each category, and the app will track your spending against these limits, providing you with real-time insights into your progress. In addition to category and transaction management, our app offers various features to enhance your financial management experience. These may include generating reports and visualizations to analyze your spending patterns, setting financial goals, receiving notifications for upcoming bills or due dates, and syncing your data across multiple devices for seamless access. We prioritize the security of your financial information, employing robust encryption and security measures to protect your data. We understand the importance of privacy and ensure that your personal and financial data remains confidential and secure. In summary, our budget app provides a comprehensive and user-friendly platform for managing your finances. With its ability to create and customize categories, track transactions, set budgets, and offer additional features, you can gain valuable insights into your financial health and make informed decisions to reach your financial goals. Sign up or log in to our app today and take control of your financial future.",
  },
  {
    cardHeading: 'Carbooky App',
    cardText:
      'Cab Booky is an application which allows users to create,delete and reserve cabs. A user also can reserve available cabs from the cab store.',
    cardBudgeList: ['Ruby', 'React', 'PostgreSQL'],
    cardButton: 'See Project',
    cardImg: './images/completed-projects/Carbooky-App/Carbooky-App-s.png',
    popUpCardSeeLiveButton: 'See Live ',
    popUpCardSeeSourceButton: 'See Source ',
    popUpCardSeeLive: 'https://carbooky.vercel.app/cabs-new',
    popUpCardSeeSource: 'https://github.com/Ezzywealth/cab_bookings_api',
    popUpCardImage:
      './images/completed-projects/Carbooky-App/Carbooky-App-l.png',
    popUpCardBudgeList: [
      'Ruby on rails',
      'Ruby',
      'React',
      'Redux',
      'PostgreSQL',
    ],
    popUpCardText:
      'The Carbooky App, also known as Cab Booky, is a robust web application developed using Ruby, Ruby on Rails, React, Redux, and Postgresql. It provides users with a seamless experience for creating, deleting, and reserving cabs. The application offers a user-friendly interface where users can easily create their cab bookings. By entering the necessary details such as pick-up location, drop-off location, and preferred time, users can reserve a cab to suit their transportation needs. The app utilizes the power of React and Redux for efficient state management, ensuring a smooth and reliable booking process. In addition to creating new cab bookings, users also have the ability to delete their existing reservations. If a user no longer requires a reserved cab, they can easily remove it from their booking list with just a few clicks. This feature allows for flexibility and easy management of reservations. Moreover, the Carbooky App includes a cab store feature where users can browse and reserve available cabs. This functionality allows users to select from a range of options and reserve the cab that best suits their preferences and requirements. By providing access to a cab store, the app enhances the overall convenience and accessibility for users. With its combination of Ruby, Ruby on Rails, React, Redux, and Postgresql, the Carbooky App offers a powerful and efficient solution for cab booking and management. Users can create, delete, and reserve cabs with ease, making it a valuable tool for individuals seeking a reliable and user-friendly transportation booking experience.',
  },
];

// multi post images

const workSection = document.querySelector('.work-section');
const multiPostStories = document.createElement('div');
multiPostStories.classList.add('multi-post-stories');
multiPostStories.classList.add('general-container');
workSection.append(multiPostStories);
const mCI = document.createElement('img');
mCI.src = cards[0].mainCardImage;
multiPostStories.append(mCI);
mCI.classList.add('image-placeholder');

// multi post Headers

const multiPostStoriesDesktop = document.createElement('div');
multiPostStoriesDesktop.classList.add('multi-post-stories-desktop');
const multiPostHead = document.createElement('h2');
multiPostHead.innerText = cards[0].mainCardHeading;
multiPostStories.append(multiPostStoriesDesktop);
multiPostStoriesDesktop.append(multiPostHead);
multiPostHead.classList.add('multi-post-head');

// multi post text

const multiPostText = document.createElement('p');
multiPostText.innerText = cards[0].mainCardInfo;
multiPostStoriesDesktop.append(multiPostText);
multiPostText.classList.add('multi-post-text');

// multi post skill list

const mutltiPostSkillList = document.createElement('ul');
cards[0].mainCardBudgeList.forEach((e) => {
  const skillLISTItems = document.createElement('li');
  const skillLISTLink = document.createElement('a');
  skillLISTLink.innerText = e;
  skillLISTItems.append(skillLISTLink);
  skillLISTLink.classList.add('skills-list-text');
  mutltiPostSkillList.append(skillLISTItems);
  skillLISTItems.classList.add('skills-list');
});
multiPostStoriesDesktop.append(mutltiPostSkillList);
mutltiPostSkillList.classList.add('skills');

// multi post button

const multiPostButton = document.createElement('button');
multiPostButton.innerText = cards[0].mainCardButton;
multiPostStoriesDesktop.append(multiPostButton);
multiPostButton.classList.add('mini-see-project');
multiPostButton.classList.add('btn');

function multiPostStoriesProjectPopUpPage() {
  // create pop up page container

  const popUpPageContainer = document.createElement('div');
  popUpPageContainer.classList.add('multi-post-stories');
  popUpPageContainer.classList.add('general-container');
  popUpPageContainer.classList.add('pop-up-general-container');

  // create pop up page head and skill container

  const popUpHeadPlusSkills = document.createElement('div');
  popUpHeadPlusSkills.classList.add('pop-up-head-plus-skills');
  popUpPageContainer.append(popUpHeadPlusSkills);

  // create pop up page img and header container

  const popUpImgHeaderContain = document.createElement('div');
  popUpImgHeaderContain.classList.add('contain');
  popUpHeadPlusSkills.append(popUpImgHeaderContain);

  // create pop up page close img

  const popUpCloseImage = document.createElement('img');
  popUpCloseImage.src = './images/pop-up-close-button.png';
  popUpImgHeaderContain.append(popUpCloseImage);

  // create pop up page header

  const popUpCardHeader = document.createElement('h2');
  popUpCardHeader.classList.add('multi-post-head');
  popUpCardHeader.classList.add('pop-up-header');
  popUpCardHeader.innerText = cards[0].mainCardHeading;
  popUpImgHeaderContain.append(popUpCardHeader);

  // create pop up page skill list

  const popUpSkillList = document.createElement('ul');
  cards[0].popUpCardBudgeList.forEach((e) => {
    const popUpSkillLISTItems = document.createElement('li');
    const popUpSkillLISTLink = document.createElement('a');
    popUpSkillLISTLink.innerText = e;
    popUpSkillLISTItems.append(popUpSkillLISTLink);
    popUpSkillLISTLink.classList.add('skills-list-text');
    popUpSkillList.append(popUpSkillLISTItems);
    popUpSkillLISTItems.classList.add('skills-list');
  });
  popUpHeadPlusSkills.append(popUpSkillList);
  popUpSkillList.classList.add('skills');
  popUpSkillList.classList.add('pop-up-skill');

  // create pop up page main content and image

  const popUpImageAndContent = document.createElement('div');
  popUpImageAndContent.classList.add('pop-up-img-and-content');
  popUpPageContainer.append(popUpImageAndContent);

  // create pop up page main image

  const popUpCardMainImage = document.createElement('img');
  popUpCardMainImage.src = cards[0].popUpCardImage;
  popUpCardMainImage.classList.add('image-placeholder');
  popUpCardMainImage.classList.add('pop-up-image');
  popUpImageAndContent.append(popUpCardMainImage);

  // create pop up page content and buttons container

  const popUpContentAndButtons = document.createElement('div');
  popUpContentAndButtons.classList.add('multi-post-stories-desktop');
  popUpContentAndButtons.classList.add('pop-up-content');
  popUpImageAndContent.append(popUpContentAndButtons);

  // create pop up page content

  const popUpContent = document.createElement('p');
  popUpContent.classList.add('multi-post-text');
  popUpContent.innerText = cards[0].mainCardInfo;
  popUpContentAndButtons.append(popUpContent);

  // create pop up page buttons

  const popUpButtons = document.createElement('div');
  popUpButtons.classList.add('pop-up-buttons');
  popUpContentAndButtons.append(popUpButtons);

  // create pop up page various buttons

  const popUpSeeLiveButton = document.createElement('a');
  popUpSeeLiveButton.classList.add('mini-see-project');
  popUpSeeLiveButton.classList.add('btn');
  popUpSeeLiveButton.innerText = cards[0].popUpCardSeeLiveButton;
  popUpSeeLiveButton.target = '_blank';
  popUpSeeLiveButton.setAttribute('href', cards[0].popUpCardSeeLive);
  const popUpSeeLiveImage = document.createElement('img');
  popUpSeeLiveImage.src = './images/see-live-btn.png';
  popUpSeeLiveButton.append(popUpSeeLiveImage);
  popUpButtons.append(popUpSeeLiveButton);
  const popUpSeeSourceButton = document.createElement('a');
  popUpSeeSourceButton.classList.add('mini-see-project');
  popUpSeeSourceButton.classList.add('btn');
  popUpSeeSourceButton.target = '_blank';
  popUpSeeSourceButton.innerText = cards[0].popUpCardSeeSourceButton;
  popUpSeeSourceButton.setAttribute('href', cards[0].popUpCardSeeSource);
  const popUpSeeSourceImage = document.createElement('img');
  popUpSeeSourceImage.src = './images/source-btn.png';
  popUpSeeSourceButton.append(popUpSeeSourceImage);
  popUpButtons.append(popUpSeeLiveButton);
  popUpButtons.append(popUpSeeSourceButton);
  document.body.append(popUpPageContainer);

  // add background blur

  document.querySelector('#nav-container').classList.add('overlay');
  document.querySelector('.main-container').classList.add('overlay');
  document.querySelector('.work-section').classList.add('overlay');
  document.querySelector('#about').classList.add('overlay');
  document.querySelector('#contact').classList.add('overlay');

  // size up pop up close image

  popUpCloseImage.setAttribute('width', '24px');
  popUpCloseImage.setAttribute('height', '24px');

  // remove background blur

  popUpCloseImage.addEventListener('click', () => {
    document.body.removeChild(popUpPageContainer);
    document.querySelector('#nav-container').classList.remove('overlay');
    document.querySelector('.main-container').classList.remove('overlay');
    document.querySelector('.work-section').classList.remove('overlay');
    document.querySelector('#about').classList.remove('overlay');
    document.querySelector('#contact').classList.remove('overlay');
  });
}

// all project cards

const allProjects = document.createElement('div');
workSection.append(allProjects);
allProjects.classList.add('all-projects');

function projectPopUpPage(card) {
  // create pop up page container

  const popUpPageContainer = document.createElement('div');
  popUpPageContainer.classList.add('multi-post-stories');
  popUpPageContainer.classList.add('general-container');
  popUpPageContainer.classList.add('pop-up-general-container');

  // create pop up page head and skill container

  const popUpHeadPlusSkills = document.createElement('div');
  popUpHeadPlusSkills.classList.add('pop-up-head-plus-skills');
  popUpPageContainer.append(popUpHeadPlusSkills);

  // create pop up page img and header container

  const popUpImgHeaderContain = document.createElement('div');
  popUpImgHeaderContain.classList.add('contain');
  popUpHeadPlusSkills.append(popUpImgHeaderContain);

  // create pop up page close img

  const popUpCloseImage = document.createElement('img');
  popUpCloseImage.src = './images/pop-up-close-button.png';
  popUpImgHeaderContain.append(popUpCloseImage);

  // create pop up page header

  const popUpCardHeader = document.createElement('h2');
  popUpCardHeader.classList.add('multi-post-head');
  popUpCardHeader.classList.add('pop-up-header');
  popUpCardHeader.innerText = cards[card].cardHeading;
  popUpImgHeaderContain.append(popUpCardHeader);

  // create pop up page skill list

  const popUpSkillList = document.createElement('ul');
  cards[card].popUpCardBudgeList.forEach((e) => {
    const popUpSkillLISTItems = document.createElement('li');
    const popUpSkillLISTLink = document.createElement('a');
    popUpSkillLISTLink.innerText = e;
    popUpSkillLISTItems.append(popUpSkillLISTLink);
    popUpSkillLISTLink.classList.add('skills-list-text');
    popUpSkillList.append(popUpSkillLISTItems);
    popUpSkillLISTItems.classList.add('skills-list');
  });
  popUpHeadPlusSkills.append(popUpSkillList);
  popUpSkillList.classList.add('skills');
  popUpSkillList.classList.add('pop-up-skill');

  // create pop up page main content and image

  const popUpImageAndContent = document.createElement('div');
  popUpImageAndContent.classList.add('pop-up-img-and-content');
  popUpPageContainer.append(popUpImageAndContent);

  // create pop up page main image

  const popUpCardMainImage = document.createElement('img');
  popUpCardMainImage.src = cards[card].popUpCardImage;
  popUpCardMainImage.classList.add('image-placeholder');
  popUpCardMainImage.classList.add('pop-up-image');
  popUpImageAndContent.append(popUpCardMainImage);

  // create pop up page content and buttons container

  const popUpContentAndButtons = document.createElement('div');
  popUpContentAndButtons.classList.add('multi-post-stories-desktop');
  popUpContentAndButtons.classList.add('pop-up-content');
  popUpImageAndContent.append(popUpContentAndButtons);

  // create pop up page content

  const popUpContent = document.createElement('p');
  popUpContent.classList.add('multi-post-text');
  popUpContent.innerText = cards[card].popUpCardText;
  popUpContentAndButtons.append(popUpContent);

  // create pop up page buttons

  const popUpButtons = document.createElement('div');
  popUpButtons.classList.add('pop-up-buttons');
  popUpContentAndButtons.append(popUpButtons);

  // create pop up page various buttons

  const popUpSeeLiveButton = document.createElement('a');
  popUpSeeLiveButton.classList.add('mini-see-project');
  popUpSeeLiveButton.classList.add('btn');
  popUpSeeLiveButton.innerText = cards[card].popUpCardSeeLiveButton;
  popUpSeeLiveButton.setAttribute('href', cards[card].popUpCardSeeLive);
  const popUpSeeLiveImage = document.createElement('img');
  popUpSeeLiveImage.src = './images/see-live-btn.png';
  popUpSeeLiveButton.target = '_blank';
  popUpSeeLiveButton.setAttribute('href', cards[card].popUpCardSeeLive);
  popUpSeeLiveButton.append(popUpSeeLiveImage);
  popUpButtons.append(popUpSeeLiveButton);
  const popUpSeeSourceButton = document.createElement('a');
  popUpSeeSourceButton.classList.add('mini-see-project');
  popUpSeeSourceButton.classList.add('btn');
  popUpSeeSourceButton.innerText = cards[card].popUpCardSeeSourceButton;
  popUpSeeSourceButton.setAttribute('href', cards[card].popUpCardSeeSource);
  const popUpSeeSourceImage = document.createElement('img');
  popUpSeeSourceImage.src = './images/source-btn.png';
  popUpSeeSourceButton.target = '_blank';
  popUpSeeSourceButton.setAttribute('href', cards[card].popUpCardSeeSource);
  popUpSeeSourceButton.append(popUpSeeSourceImage);
  popUpButtons.append(popUpSeeLiveButton);
  popUpButtons.append(popUpSeeSourceButton);
  document.body.append(popUpPageContainer);

  // add background blur

  document.querySelector('#nav-container').classList.add('overlay');
  document.querySelector('.main-container').classList.add('overlay');
  document.querySelector('.work-section').classList.add('overlay');
  document.querySelector('#about').classList.add('overlay');
  document.querySelector('#contact').classList.add('overlay');

  // size up pop up close image

  popUpCloseImage.setAttribute('width', '24px');
  popUpCloseImage.setAttribute('height', '24px');

  // remove background blur

  popUpCloseImage.addEventListener('click', () => {
    document.body.removeChild(popUpPageContainer);
    document.querySelector('#nav-container').classList.remove('overlay');
    document.querySelector('.main-container').classList.remove('overlay');
    document.querySelector('.work-section').classList.remove('overlay');
    document.querySelector('#about').classList.remove('overlay');
    document.querySelector('#contact').classList.remove('overlay');
  });
}

for (let card = 1; card < cards.length; card += 1) {
  // create card container

  const projectCard = document.createElement('article');
  projectCard.style.backgroundImage = `url("${cards[card].cardImg}")`;
  projectCard.classList.add('various-projects');
  allProjects.append(projectCard);

  // create card header

  const projectCardHeader = document.createElement('h2');
  projectCardHeader.classList.add('various-Project-heading');
  projectCardHeader.innerText = cards[card].cardHeading;
  projectCard.append(projectCardHeader);

  // create card body

  const projectCardBody = document.createElement('p');
  projectCardBody.classList.add('various-project-text');
  projectCardBody.innerText = cards[card].cardText;
  projectCard.append(projectCardBody);

  // create card skill list

  const projectCardSkillList = document.createElement('ul');
  cards[card].cardBudgeList.forEach((e) => {
    const projectSkillLISTItems = document.createElement('li');
    const projectSkillLISTLink = document.createElement('a');
    projectSkillLISTLink.innerText = e;
    projectSkillLISTItems.append(projectSkillLISTLink);
    projectSkillLISTLink.classList.add('various-required-skills');
    projectCardSkillList.append(projectSkillLISTItems);
    projectSkillLISTItems.classList.add('required-skill');
  });
  projectCard.append(projectCardSkillList);
  projectCardSkillList.classList.add('various-skills');

  // create card button

  const projectCardButton = document.createElement('button');
  projectCardButton.classList.add('various-project-see-project');
  projectCardButton.classList.add('btn');
  projectCardButton.innerText = cards[card].cardButton;
  projectCard.append(projectCardButton);

  projectCardButton.addEventListener('click', () => {
    projectPopUpPage(card);
  });
}

multiPostButton.addEventListener('click', () => {
  multiPostStoriesProjectPopUpPage();
});

// contact validating form

const thisForm = document.querySelector('.contact-form');
const errorM = document.createElement('small');
const mainForm = document.querySelector('.contact-form-section');
errorM.innerText = 'Please enter email only in lowercase';
mainForm.appendChild(errorM);
errorM.className = 'vanish';

function validateEmail() {
  const userInputEmail = thisForm.querySelector('#mail');
  const validatorStr = userInputEmail.value.toLowerCase();
  const validate = userInputEmail.value === validatorStr;
  return validate;
}

thisForm.addEventListener('submit', (val) => {
  if (validateEmail()) {
    thisForm.submit();
    errorM.className = 'vanish';
  } else {
    val.preventDefault();
    errorM.className = 'appear';
  }
});
