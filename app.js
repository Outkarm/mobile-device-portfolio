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

const cards = [
  {
    mainCardImage:
      './images/completed-projects/to-do-list-app/rsz_2to-do-1.png',
    mainCardHeading: 'To-Do List App',
    mainCardInfo:
      'Minimalist To Do List Project is a website that helps to organize your day. It simply lists the things that you need to do and allows you to mark them as complete. It is inspired by the minimalist website. That website is already offline but you can still play with thanks to web.archive.org',
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
      'Awesome Books allows users to add and delete book credentials using local storage ',
    cardBudgeList: ['css', 'html', 'javaScript'],
    cardButton: 'See Project',
    cardImg: '',
    popUpCardSeeLiveButton: 'See Live ',
    popUpCardSeeSourceButton: 'See Source ',
    popUpCardSeeLive: 'https://outkarm.github.io/awesome-book-es6-project/',
    popUpCardSeeSource: 'https://github.com/Outkarm/awesome-book-es6-project',
    popUpCardImage:
      './images/completed-projects/Awesome-Books/Awesome-book-1.PNG',
    popUpCardBudgeList: ['css', 'html', 'javaScript'],
    popUpCardText:
      'Awesome books is a website that helps you keep track of Booke that you own, In this project we made a form and added functionality of delete and add books with plain javascript HTML & CSS JavaScript',
  },
  {
    cardHeading: 'Leaderboards',
    cardText:
      'This is a web app that keep track of scores of players by saving variouse data in a sever. 🛠️ Built With HTML CSS Javascript(ES6) Webpack',
    cardBudgeList: ['css', 'html', 'javaScript', 'Webpack'],
    cardButton: 'See Project',
    cardImg: './images/background/background.png',
    popUpCardSeeLiveButton: 'See Live ',
    popUpCardSeeSourceButton: 'See Source ',
    popUpCardSeeLive: 'https://outkarm.github.io/leaderboard/dist/',
    popUpCardSeeSource: 'https://github.com/Outkarm/leaderboard',
    popUpCardImage:
      './images/completed-projects/leaderboards/leaderboards-thb-2.PNG',
    popUpCardBudgeList: ['css', 'html', 'javaScript', 'Webpack'],
    popUpCardText:
      'This is a web app that keep track of scores of players by saving variouse data in a sever. 🛠️ Built With HTML CSS Javascript(ES6) Webpack',
  },
  {
    cardHeading: 'Calculator',
    cardText:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    cardBudgeList: ['React', 'javaScript'],
    cardButton: 'See Project',
    cardImg: './images/background/background.png',
    popUpCardSeeLiveButton: 'See Live ',
    popUpCardSeeSourceButton: 'See Source ',
    popUpCardSeeLive: 'https://calculator-26hg.onrender.com',
    popUpCardSeeSource: 'https://github.com/Outkarm/math-magicians-app',
    popUpCardImage:
      './images/completed-projects/Math-magician-app/Math-Magician-1.PNG',
    popUpCardBudgeList: ['React', 'javaScript'],
    popUpCardText:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  },
  {
    cardHeading: 'Restaurant Web Page',
    cardText:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    cardBudgeList: ['css', 'html', 'javaScript'],
    cardButton: 'See Project',
    cardImg: './images/background/background.png',
    popUpCardSeeLiveButton: 'See Live ',
    popUpCardSeeSourceButton: 'See Source ',
    popUpCardSeeLive: '#',
    popUpCardSeeSource: '#',
    popUpCardImage: './images/pop-up-img.png',
    popUpCardBudgeList: ['css', 'html', 'javaScript'],
    popUpCardText:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  },
  {
    cardHeading: 'Profesional Art Printing Data',
    cardText:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    cardBudgeList: ['html', 'bootstrap', 'Ruby'],
    cardButton: 'See Project',
    cardImg: './images/background/background.png',
    popUpCardSeeLiveButton: 'See Live ',
    popUpCardSeeSourceButton: 'See Source ',
    popUpCardSeeLive: '#',
    popUpCardSeeSource: '#',
    popUpCardImage: './images/pop-up-img.png',
    popUpCardBudgeList: ['html', 'bootstrap', 'Ruby on rails'],
    popUpCardText:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  },
  {
    cardHeading: 'Profesional Art Printing Data',
    cardText:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    cardBudgeList: ['html', 'bootstrap', 'Ruby'],
    cardButton: 'See Project',
    cardImg: './images/background/background.png',
    popUpCardSeeLiveButton: 'See Live ',
    popUpCardSeeSourceButton: 'See Source ',
    popUpCardSeeLive: '#',
    popUpCardSeeSource: '#',
    popUpCardImage: './images/pop-up-img.png',
    popUpCardBudgeList: ['html', 'bootstrap', 'Ruby on rails'],
    popUpCardText:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
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
  cards[0].mainCardBudgeList.forEach((e) => {
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
