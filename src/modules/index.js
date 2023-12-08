import '../styles/meyer-reset.css';
import '../styles/page.css';
import '../styles/header.css';
import '../styles/main.css';
import '../styles/footer.css';
import NewTab from '../icons/open-in-new.svg';
import Phone from '../icons/phone.svg';
import Email from '../icons/email.svg';
import HeaderImage from '../img/image0.jpeg';
import FooterImage from '../img/image1.jpeg';
import Battleship from '../img/battleship.png';
import Cinemalist from '../img/cinemalist.png';
import EtchASketch from '../img/etch-a-sketch.png';
import Italy from '../img/italy.png';
import ToDoList from '../img/to-do-list.png';
import WeatherApp from '../img/weather-app.png';

function addNewTabSVG() {
    const livePreview = document.querySelectorAll('.live-preview-link');
    livePreview.forEach((preview) => {
        const newTabIcon = new Image();
        newTabIcon.src = NewTab;
        newTabIcon.classList.add('svg');
        preview.append(newTabIcon);
    });
}

function addPhoneSVG() {
    const phone = document.querySelector('phone-container');
    const phoneSVG = new Image();
    phoneSVG.src = Phone;
    phoneSVG.classList.add('svg');
    phoneSVG.classList.add('phone-svg');
    phone.insertBefore(phoneSVG, phone.firstChild);
}

function addEmailSVG() {
    const email = document.querySelector('email-container');
    const emailSVG = new Image();
    emailSVG.src = Email;
    emailSVG.classList.add('svg');
    emailSVG.classList.add('email-svg');
    email.insertBefore(emailSVG, email.firstChild);
}

function addHeaderImage() {
    const headerImageContainer = document.querySelector('header-image');
    const headerImage = new Image();
    headerImage.src = HeaderImage;
    headerImageContainer.append(headerImage);
}

function addFooterImage() {
    const footerImageContainer = document.querySelector('footer-image');
    const footerImage = new Image();
    footerImage.src = FooterImage;
    footerImage.classList.add('footer-img');
    footerImageContainer.append(footerImage);
}

function addBattleshipImage() {
    const container = document.querySelector('.battleship-image-container');
    const image = new Image();
    image.src = Battleship;
    image.classList.add('work-images');
    container.append(image);
}

function addWeatherAppImage() {
    const container = document.querySelector('.weather-app-container');
    const image = new Image();
    image.src = WeatherApp;
    image.classList.add('work-images');
    image.classList.add('weather-app-image');
    container.append(image);
}

function addToDoListImage() {
    const container = document.querySelector('.to-do-list-container');
    const image = new Image();
    image.src = ToDoList;
    image.classList.add('work-images');
    image.classList.add('to-do-list');
    container.append(image);
}

function addItalyImage() {
    const container = document.querySelector('.italy-itinerary-container');
    const image = new Image();
    image.src = Italy;
    image.classList.add('work-images');
    container.append(image);
}

function addEtchASketchImage() {
    const container = document.querySelector('.etch-a-sketch-container');
    const image = new Image();
    image.src = EtchASketch;
    image.classList.add('work-images');
    container.append(image);
}

function addCinemalistImage() {
    const container = document.querySelector('.cinemalist-container');
    const image = new Image();
    image.src = Cinemalist;
    image.classList.add('work-images');
    image.classList.add('cinemalist');
    container.append(image);
}

addNewTabSVG();
addPhoneSVG();
addEmailSVG();
addHeaderImage();
addFooterImage();
addBattleshipImage();
addWeatherAppImage();
addToDoListImage();
addItalyImage();
addEtchASketchImage();
addCinemalistImage();
