import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faTwitterSquare,
    faFacebookSquare,
    faInstagram,
    faMedium
} from '@fortawesome/free-brands-svg-icons';
import {
    faInfoCircle,
    faAngleDoubleLeft,
    faGlobe
} from '@fortawesome/free-solid-svg-icons';
import posed from 'react-pose';
import styled from "styled-components";

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

//hover text effect
const HoverableLink = styled.a`
display: inline-block;
position: relative;
overflow: hidden;
cursor: pointer;
transition: all 0.2s ease-in;
padding: 5px;

&:hover {
color: ${props => props.theme.themeColor};
}

&:before {
  content: '';
  background-color: ${props => props.theme.lightColor};
  position: absolute;
  width: 120%;
  height: 120%;
  left: 0;
  top: 0;
  z-index: -20;
  transform: translateY(100%);
  transition: all 0.2s ease-in;
}

  &:hover:before {
  transform: translateY(-2px);
  }
`;

//Fontawesome icons
const infoIcon = (
    <React.Fragment>
        <FontAwesomeIcon
            icon={faInfoCircle}
            aria-hidden="true"
            title="Informacje">
        </FontAwesomeIcon>
        <span className="sr-only">Informacje</span>
    </React.Fragment>
);

const twitterIcon = (
    <React.Fragment>
        <FontAwesomeIcon
            icon={faTwitterSquare}
            aria-hidden="true"
            title="Twitter">
        </FontAwesomeIcon>
        <span className="sr-only">Twitter</span>
    </React.Fragment>);

const instagramIcon = (
    <React.Fragment>
        <FontAwesomeIcon
            icon={faInstagram}
            aria-hidden="true"
            title="Instagram">
        </FontAwesomeIcon>
        <span className="sr-only">Instagram</span>
    </React.Fragment>
);

const facebookIcon = (
    <React.Fragment>
        <FontAwesomeIcon
            icon={faFacebookSquare}
            aria-hidden="true"
            title="Facebook">
        </FontAwesomeIcon>
        <span className="sr-only">Facebook</span>
    </React.Fragment>
);

const mediumIcon = (
    <React.Fragment>
        <FontAwesomeIcon
            icon={faMedium}
            aria-hidden="true"
            title="Medium">
        </FontAwesomeIcon>
        <span className="sr-only">Medium</span>
    </React.Fragment>);

const backIcon = (
        <React.Fragment>
            <FontAwesomeIcon
                icon={faAngleDoubleLeft}
                aria-hidden="true"
                title="Strona główna">
            </FontAwesomeIcon>
            <span className="sr-only">Strona główna</span>
        </React.Fragment>
    );

const websiteIcon = (
    <React.Fragment>
        <FontAwesomeIcon
            icon={faGlobe}
            aria-hidden="true"
            title="Strona internetowa">
        </FontAwesomeIcon>
        <span className="sr-only">Strona internetowa</span>
    </React.Fragment>
);

//Text used on the website
export const WEBSITE_TEXT = {
    title: {
        main: "błyski – flash fiction w przekładzie",
        about: " – informacje"
    },
    mainNavbar: [
        {
            message: infoIcon,
            path: '/info'
        },
        {
            message: twitterIcon,
            path: 'https://twitter.com/'
        },
        {
            message: instagramIcon,
            path: 'https://www.instagram.com/'
        },
        {
            message: facebookIcon,
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
            <p>Flash fiction to bardzo krótkie prozy mieszczące się — zależnie od definicji — w&nbsp;1000 lub 1500
                słowach. W&nbsp;przeciwieństwie do prozy poetyckiej zawsze mają fabułę.</p>
            <p><strong>błyski</strong> to niereguralnik, który stawia sobie za cel przybliżenie polskim czytelnikom tej
                popularnej w&nbsp;świecie anglosaskim formy. Każdy numer jest poświęcony jednemu autorowi i składa się
                z&nbsp;pięciu jego tekstów oraz biogramu — i&nbsp;tyle.</p>
        </React.Fragment>,
        contact: <React.Fragment>Kontakt z&nbsp;redakcją: blyski [at] gmail [dot] com.</React.Fragment>,
        desclaimer: <React.Fragment>Jako że <strong>błyski</strong> składają się wyłącznie z&nbsp;tekstów napisanych
            pierwotnie po angielsku, nie przyjmujemy propozycji wydawniczych.</React.Fragment>,
        credits: <React.Fragment>red. nacz. — ja, dobór tekstów — ja, przekłady — ja, projekt strony —
            ja*</React.Fragment>,
        footnote: <React.Fragment><HoverableLink href="https://drobnik.co/" target="_blank" rel="noopener noreferrer">*ja
            = Łukasz Drobnik</HoverableLink></React.Fragment>,
        button: 'strona główna'
    },
    text: {
        navbar: {
            textNumbers: ['i', 'ii', 'iii', 'iv', 'v'],
            bio: 'bio',
            home: backIcon
        },
        nextButton: 'następny tekst',
        bioButton: 'biogram',
        homeButton: 'strona główna'
    }
};

//constant containing authors' social media links and links to their work to be used in bio
const BIO_LINKS = [
    {
        social: [
            {
                icon: websiteIcon,
                url: 'https://drobnik.co'
            },
            {
                icon: twitterIcon,
                url: 'https://twitter.com/drobnik'
            },
            {
                icon: instagramIcon,
                url: 'https://twitter.com/drobnik'
            },
            {
                icon: facebookIcon,
                url: 'https://twitter.com/drobnik'
            },
            {
                icon: mediumIcon,
                url: 'https://medium.com/@drobnik'
            }
        ],
        works: [
            {
                title: '„Cellulose” [FlashFlood]',
                url: 'http://flashfloodjournal.blogspot.com/2020/06/cellulose-by-ukasz-drobnik.html'
            },
            {
                title: '„Nameless” [Akashic Books]',
                url: 'http://www.akashicbooks.com/nameless-by-lukasz-drobnik/'
            },
            {
                title: '„A very long and winding title, so long that it won’t probably fit into one line” [Pithead Chapel]',
                url: 'https://pitheadchapel.com/entrails/'
            },
            {
                title: '„Fake title alert! Fake title alert!” [Atticus Review]',
                url: 'https://atticusreview.org/treasures/'
            },
            {
                title: '„Deadlines” [Storgy]',
                url: 'https://storgy.com/2020/02/21/deadlines-by-lukasz-drobnik/'
            },
            {
                title: '„Spores” [X-R-A-Y Literary Magazine]',
                url: 'https://xraylitmag.com/spores-lukasz-drobnik/fiction/'
            }
        ]
    },
    {
        social: [
            {
                icon: websiteIcon,
                url: 'https://drobnik.co'
            },
            {
                icon: twitterIcon,
                url: 'https://twitter.com/drobnik'
            },
            {
                icon: instagramIcon,
                url: 'https://twitter.com/drobnik'
            },
            {
                icon: facebookIcon,
                url: 'https://twitter.com/drobnik'
            },
            {
                icon: mediumIcon,
                url: 'https://medium.com/@drobnik'
            }
        ],
        works: [
            {
                title: '„Cellulose” [FlashFlood]',
                url: 'http://flashfloodjournal.blogspot.com/2020/06/cellulose-by-ukasz-drobnik.html'
            },
            {
                title: '„Nameless” [Akashic Books]',
                url: 'http://www.akashicbooks.com/nameless-by-lukasz-drobnik/'
            },
            {
                title: '„A very long and winding title, so long that it won’t probably fit into one line” [Pithead Chapel]',
                url: 'https://pitheadchapel.com/entrails/'
            },
            {
                title: '„Fake title alert! Fake title alert!” [Atticus Review]',
                url: 'https://atticusreview.org/treasures/'
            },
            {
                title: '„Deadlines” [Storgy]',
                url: 'https://storgy.com/2020/02/21/deadlines-by-lukasz-drobnik/'
            },
            {
                title: '„Spores” [X-R-A-Y Literary Magazine]',
                url: 'https://xraylitmag.com/spores-lukasz-drobnik/fiction/'
            }
        ]
    },
    {
        social: [
            {
                icon: twitterIcon,
                url: 'https://twitter.com/drobnik'
            },
            {
                icon: instagramIcon,
                url: 'https://twitter.com/drobnik'
            },
            {
                icon: facebookIcon,
                url: 'https://twitter.com/drobnik'
            }
        ],
        works: [
            {
                title: '„Cellulose” [FlashFlood]',
                url: 'http://flashfloodjournal.blogspot.com/2020/06/cellulose-by-ukasz-drobnik.html'
            },
            {
                title: '„Nameless” [Akashic Books]',
                url: 'http://www.akashicbooks.com/nameless-by-lukasz-drobnik/'
            },
            {
                title: '„Fake title alert! Fake title alert!” [Atticus Review]',
                url: 'https://atticusreview.org/treasures/'
            },
            {
                title: '„Deadlines” [Storgy]',
                url: 'https://storgy.com/2020/02/21/deadlines-by-lukasz-drobnik/'
            },
            {
                title: '„Spores” [X-R-A-Y Literary Magazine]',
                url: 'https://xraylitmag.com/spores-lukasz-drobnik/fiction/'
            }
        ]
    },
    {
        social: [
            {
                icon: websiteIcon,
                url: 'https://drobnik.co'
            },
            {
                icon: twitterIcon,
                url: 'https://twitter.com/drobnik'
            },
            {
                icon: facebookIcon,
                url: 'https://twitter.com/drobnik'
            },
            {
                icon: mediumIcon,
                url: 'https://medium.com/@drobnik'
            }
        ],
        works: [
            {
                title: '„Cellulose” [FlashFlood]',
                url: 'http://flashfloodjournal.blogspot.com/2020/06/cellulose-by-ukasz-drobnik.html'
            },
            {
                title: '„A very long and winding title, so long that it won’t probably fit into one line” [Pithead Chapel]',
                url: 'https://pitheadchapel.com/entrails/'
            },
            {
                title: '„Fake title alert! Fake title alert!” [Atticus Review]',
                url: 'https://atticusreview.org/treasures/'
            },
            {
                title: '„Deadlines” [Storgy]',
                url: 'https://storgy.com/2020/02/21/deadlines-by-lukasz-drobnik/'
            }
        ]
    }
];

//adds 0 for issue numbers below 10
export const formatIssueNumber = (issueNumber) => {
    let issueName = WEBSITE_TEXT.issueList.magazineName + " ";
    if (issueNumber < 10) {
        return issueName + "0" + issueNumber;
    } else {
        return issueName + issueNumber;
    }
};

//Reusable posed component specifying the basic fade-in animation
export const AnimatedContent = posed.div({
    visible: {
        opacity: 1,
        transition: {
            ease: 'easeIn',
            duration: 500
        }
    },
    hidden: {
        opacity: 0
    }
});

//timeout used for fade-in animation
export const fadeTimeout = 500;