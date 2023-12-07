import '../styles/meyer-reset.css';
import '../styles/page.css';
import '../styles/header.css';
import '../styles/main.css';
import '../styles/footer.css';
import NewTab from '../icons/open-in-new.svg';
import Phone from '../icons/phone.svg';
import Email from '../icons/email.svg';
import HeaderImage from '../img/image0.jpeg';

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
    phone.insertBefore(phoneSVG, phone.firstChild);
}

function addEmailSVG() {
    const email = document.querySelector('email-container');
    const emailSVG = new Image();
    emailSVG.src = Email;
    emailSVG.classList.add('svg');
    email.insertBefore(emailSVG, email.firstChild);
}

function addHeaderImage() {
    const headerImageContainer = document.querySelector('header-image');
    const headerImage = new Image();
    headerImage.src = HeaderImage;
    headerImageContainer.append(headerImage);
}

addNewTabSVG();
addPhoneSVG();
addEmailSVG();
addHeaderImage();
