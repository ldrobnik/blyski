import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faTwitterSquare,
    faFacebookSquare,
    faInstagram
} from '@fortawesome/free-brands-svg-icons';
import {
    faInfoCircle,
    faHome
} from '@fortawesome/free-solid-svg-icons';

//Url fragment used for fetching data from Wodpress API
export const WP_URL_FRAGMENT = 'wp-json/wp/v2/posts?per_page=100';

/*Function returning class to rotate an element by a certain number of degrees:
* 0 - 0 degrees;
* 1 - 90 degrees;
* 2 - 180 degrees;
* 3 - 270 degrees.
 */
export const getRotationClass = (classNumber) => {

    //array of available classes for 0, 90, 180 & 270 degree rotation
    const rotationClasses = ['', 'rotateBy90', 'rotateBy180', 'rotateBy270'];

    return rotationClasses[classNumber];

};

//Function returning random rotation class
export const getRandomRotationClass = () => {
    //Random number between 0 and 3
    const randomNumber = Math.floor(Math.random() * 4);

    return getRotationClass(randomNumber);
};

//Text used on the website
export const WEBSITE_TEXT = {
    mainNavbar: [
        {
            message: <FontAwesomeIcon icon={faInfoCircle}></FontAwesomeIcon>,
            path: '/info'
        },
        {
            message: <FontAwesomeIcon icon={faTwitterSquare}></FontAwesomeIcon>,
            path: 'https://twitter.com/'
        },
        {
            message: <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>,
            path: 'https://www.instagram.com/'
        },
        {
            message: <FontAwesomeIcon icon={faFacebookSquare}></FontAwesomeIcon>,
            path: 'https://www.facebook.com/'
        }
    ],
    issueList: {
        magazineName: 'błyski',
        translator: <React.Fragment>w&nbsp;przekładzie Łukasza Drobnika</React.Fragment>,
        bio: 'biogram'
    },
    about: {
        title: "błyski",
        subtitle: <React.Fragment>flash fiction w&nbsp;przekładzie</React.Fragment>,
        content: <React.Fragment>
            <p>Flash fiction to bardzo krótkie prozy mieszczące się — zależnie od definicji — w&nbsp;1000 lub 1500 słowach. W&nbsp;przeciwieństwie do prozy poetyckiej zawsze mają fabułę.</p>
            <p><strong>błyski</strong> to niereguralnik, który stawia sobie za cel przybliżenie polskim czytelnikom tej popularnej w&nbsp;świecie anglosaskim formy. Każdy numer jest poświęcony jednemu autorowi i składa się z&nbsp;pięciu jego tekstów oraz biogramu — i&nbsp;tyle.</p>
        </React.Fragment>,
        contact: <React.Fragment>Kontakt z&nbsp;redakcją: blyski [at] gmail [dot] com.</React.Fragment>,
        desclaimer: <React.Fragment>Jako że <strong>błyski</strong> składają się wyłącznie z&nbsp;tekstów napisanych pierwotnie po angielsku, nie przyjmujemy propozycji wydawniczych.</React.Fragment>,
        credits: <React.Fragment>red. nacz. — ja, dobór tekstów — ja, przekłady — ja, projekt strony — ja*</React.Fragment>,
        footnote: <React.Fragment>*ja = <a href="https://drobnik.co/" target="_blank" rel="noopener noreferrer">Łukasz Drobnik</a></React.Fragment>,
        button: 'strona główna'
    },
    text: {
        navbar: {
            textNumbers: ['i', 'ii', 'iii', 'iv', 'v'],
            bio: 'bio',
            home: <FontAwesomeIcon icon={faInfoCircle}></FontAwesomeIcon>
        },
        nextButton: 'następny tekst',
        bioButton: 'biogram',
        homeButton: 'strona główna'
    }
};

//adds 0 for issue numbers below 10
export const formatIssueNumber = (issueNumber) => {
    let issueName = WEBSITE_TEXT.issueList.magazineName + " ";
    if (issueNumber < 10) {
        return issueName + "0" + issueNumber;
    } else {
        return issueName + issueNumber;
    }
};