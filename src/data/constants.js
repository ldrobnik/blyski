import React from 'react';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebookSquare, faInstagram, faMedium, faPatreon, faTwitterSquare} from '@fortawesome/free-brands-svg-icons';
import {faAngleDoubleLeft, faGlobe, faInfoCircle} from '@fortawesome/free-solid-svg-icons';
import {HoverableLink} from '../styled';

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

//Function returning 'random' rotation class
//(actually the class isn't random but depends on current time)
export const getRandomRotationClass = () => {
    let currentDate = new Date();

    //current value of seconds
    let currentSeconds = currentDate.getSeconds();

    //Number between 0 and 3 depending on the current seconds value
    const classNumber = Math.floor(currentSeconds / 15);

    return getRotationClass(classNumber);
};


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

const text1 = (
    <React.Fragment>
        <div title="Pierwszy tekst">
            i
        </div>
        <span className="sr-only">Pierwszy tekst</span>
    </React.Fragment>
);

const text2 = (
    <React.Fragment>
        <div title="Drugi tekst">
            ii
        </div>
        <span className="sr-only">Drugi tekst</span>
    </React.Fragment>
);

const text3 = (
    <React.Fragment>
        <div title="Trzeci tekst">
            iii
        </div>
        <span className="sr-only">Trzeci tekst</span>
    </React.Fragment>
);

const text4 = (
    <React.Fragment>
        <div title="Czwarty tekst">
            iv
        </div>
        <span className="sr-only">Czwarty tekst</span>
    </React.Fragment>
);

const text5 = (
    <React.Fragment>
        <div title="Piąty tekst">
            v
        </div>
        <span className="sr-only">Piąty tekst</span>
    </React.Fragment>
);

const bio = (
    <React.Fragment>
        <div title="Biogram">
            bio
        </div>
        <span className="sr-only">Biogram</span>
    </React.Fragment>
);

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

const patreonIcon = (
    <React.Fragment>
        <FontAwesomeIcon
            icon={faPatreon}
            aria-hidden="true"
            title="Patreon">
        </FontAwesomeIcon>
        <span className="sr-only">Patreon</span>
    </React.Fragment>
);

//Text used on the website
export const WEBSITE_TEXT = {
    title: {
        main: 'błyski – flash fiction w przekładzie',
        about: ' – informacje',
        english: 'błyski – flash fiction in Polish translation'
    },
    mainNavbar: [
        {
            message: infoIcon,
            path: '/info'
        },
        {
            message: facebookIcon,
            path: 'https://www.facebook.com/blyskipismo'
        },
        {
            message: instagramIcon,
            path: 'https://www.instagram.com/blyskipismo'
        },
        {
            message: twitterIcon,
            path: 'https://twitter.com/blyskipismo'
        }
    ],
    issueList: {
        magazineName: 'błyski',
        translator: <React.Fragment>w&nbsp;przekładzie Łukasza Drobnika</React.Fragment>,
        bio: 'biogram',
        homeButton: 'strona główna'
    },
    about: {
        title: 'błyski',
        subtitle: <React.Fragment>flash fiction w&nbsp;przekładzie</React.Fragment>,
        content: <React.Fragment>
            <p>Flash fiction to bardzo krótkie opowiadania – takie do przeczytania w&nbsp;parę minut. W&nbsp;odróżnieniu
                od prozy poetyckiej zawsze mają fabułę.</p>
            <p>Z&nbsp;kolei <HoverableLink><Link to='/'><strong>błyski</strong></Link></HoverableLink> to nieregularnik,
                który stawia sobie za cel przybliżenie polskim
                czytelnikom tej
                popularnej w&nbsp;świecie anglosaskim formy.</p>
            <p>Każdy numer <HoverableLink><Link to='/'><strong>błysków</strong></Link></HoverableLink> jest poświęcony
                jednemu autorowi: zawiera pięć
                jego tekstów plus biogram – i&nbsp;tyle.</p>
            <p>Bohaterką <HoverableLink><Link to='/2/byc-zamordowana-dziewczyna'><strong>najnowszego
                numeru</strong></Link></HoverableLink> jest <HoverableLink><Link to='/2/bio'><strong>Cathy Ulrich</strong></Link></HoverableLink>.</p>
        </React.Fragment>,
        contact: <React.Fragment><strong>Kontakt z&nbsp;redakcją:</strong> blyski.pismo [at] gmail [dot]
            com.</React.Fragment>,
        disclaimer: <React.Fragment>Idea <strong>błysków</strong> jest taka, by ukazywały się w nich przekłady
            tekstów napisanych
            po angielsku, dlatego niestety nie rozpatruję propozycji wydawniczych, choć do samego pisania flash fiction
            gorąco zachęcam! Obecnie <strong>błyski</strong> nie szukają też do współpracy tłumaczy.</React.Fragment>,
        credits: <React.Fragment>red. nacz. –&nbsp;ja, dobór tekstów –&nbsp;ja, przekłady –&nbsp;ja, projekt strony
            –&nbsp;ja*</React.Fragment>,
        footnote: <React.Fragment><HoverableLink><a href="https://drobnik.co/" target="_blank"
                                                    rel="noopener noreferrer">*ja
            = Łukasz Drobnik</a></HoverableLink></React.Fragment>,
        button: 'strona główna',
        copyright: <React.Fragment>&copy; 2021 Łukasz Drobnik</React.Fragment>
    },
    text: {
        navbar: {
            textNumbers: [text1, text2, text3, text4, text5],
            bio: bio,
            home: backIcon
        },
        nextButton: 'następny tekst',
        bioButton: 'biogram',
        homeButton: 'strona główna',
        bio: {
            moreInfo: 'Więcej informacji:',
            selectedWorks: 'Wybrane utwory:'
        }
    },
    pubTerms: {
        title: 'błyski',
        subtitle: <React.Fragment>flash fiction in Polish translation</React.Fragment>,
        content: <React.Fragment>
            <p><HoverableLink><a href="https://blyski.org" target="_blank" rel="noopener noreferrer" className={'underlined'}><strong>błyski</strong></a></HoverableLink> (Polish for <em>flashes</em>) is a journal publishing solicited flash fiction in Polish translation. It is run by <HoverableLink><a href="https://drobnik.co" target="_blank" rel="noopener noreferrer" className={'underlined'}><strong>Łukasz Drobnik</strong></a></HoverableLink>.</p>
            <p>The journal is a minimalist affair—each issue is made of five flashes by one author and their bio. That’s it.</p>
            <p>The latest issue is dedicated to <HoverableLink><a href="https://blyski.org/2" target="_blank" rel="noopener noreferrer" className={'underlined'}><strong>Cathy Ulrich</strong></a></HoverableLink>.</p>
        </React.Fragment>,
        deal: <React.Fragment>
            <p>We offer <strong>50&nbsp;USD</strong>, payable before the issue goes live, via PayPal or other agreed service.</p>
            <p>We ask for <strong>one-time Polish translation rights</strong> to publish your stories on the website and, possibly, in a future anthology.</p>
        </React.Fragment>,
        contact: <React.Fragment>
            <p><strong>Contact:</strong> blyski.pismo [at] gmail [dot]
                com.</p>
            </React.Fragment>
    },
    error: 'Błąd połączenia. Starsze numery chwilowo niedostępne.'
};

//details of all issues
export const ISSUES = [
    {
        published: true,
        date: '2021-06-06',
        author: 'Megan Pillow',
        texts: [
            {
                title: 'Wszyscy wiemy o Margo',
                slug: 'wszyscy-wiemy-o-margo'
            },
            {
                title: 'W nowym świecie',
                slug: 'w-nowym-swiecie'
            },
            {
                title: 'Kiedy w twoim mieście zamkną Wal-Mart',
                slug: 'kiedy-w-twoim-miescie-zamkna-wal-mart'
            },
            {
                title: 'Lily w świetle',
                slug: 'lily-w-swietle'
            },
            {
                title: 'Margo. Skręć w lewo.',
                slug: 'margo-skrec-w-lewo'
            }
        ],
        alt: 'Biała kobieta z włosami przystrzyżonymi w boba i wyrazistą szminką'
    },
    {
        published: true,
        date: '2021-12-31',
        author: 'Cathy Ulrich',
        texts: [
            {
                title: 'Być zamordowaną dziewczyną',
                slug: 'byc-zamordowana-dziewczyna'
            },
            {
                title: 'Być zamordowaną żoną',
                slug: 'byc-zamordowana-zona'
            },
            {
                title: 'Być zamordowaną kochanką',
                slug: 'byc-zamordowana-kochanka'
            },
            {
                title: 'Być zamordowaną syreną',
                slug: 'byc-zamordowana-syrena'
            },
            {
                title: 'Być zamordowaną we śnie',
                slug: 'byc-zamordowana-we-snie'
            }
        ],
        alt: 'Kobieta mieszanej rasy z kręconymi włosami i w okularach, pozująca na tle ściany obwieszonej zdjęciami aktorów'
    }
];

//checks which glider frame should be displayed in the logo based on the number of published issues
const checkGliderFrame = () => {
    //number of published issues
    let publishedIssues = 0;

    //checks how many issues have been published
    for (let issue of ISSUES) {
        if (issue.published) publishedIssues++
    }

    //return one of the four glider frames depending on the number of published issues (counting from 0)
    return (publishedIssues - 1) % 4;
}

//the number of glider frame to be displayed in the logo, based on the number of published issues
export const GLIDER_FRAME = checkGliderFrame();

console.log(GLIDER_FRAME);


//authors' social media links and links to their work to be used in bio
export const AUTHOR_LINKS = [
    {
        links: [
            {
                icon: websiteIcon,
                url: 'https://www.meganpillow.com/'
            },
            {
                icon: patreonIcon,
                url: 'https://www.patreon.com/submergedarchive/'
            },
            {
                icon: twitterIcon,
                url: 'https://twitter.com/megpillow'
            }
        ],
        works: [
            {
                heading: 'Teksty z numeru',
                links: [
                    {
                        title: '„We All Know About Margo” [SmokeLong Quarterly]',
                        url: 'http://www.smokelong.com/we-all-know-about-margo/'
                    },
                    {
                        title: '„In the New World” [Longleaf Review]',
                        url: 'http://longleafreview.com/in-the-new-world/'
                    },
                    {
                        title: '„After the Wal-Mart Closes in Your Hometown” [Pithead Chapel]',
                        url: 'https://pitheadchapel.com/after-the-wal-mart-closes-in-your-hometown/'
                    },
                    {
                        title: '„Lily in the Light” [X-R-A-Y Literary Magazine]',
                        url: 'http://x-r-a-y.com/lily-in-the-light-by-megan-pillow-davis-2/fiction/'
                    },
                    {
                        title: '„Margo. Turn Left.” [Passages North]',
                        url: 'https://www.passagesnorth.com/passagesnorthcom/2019/9/13/margo-turn-left-by-megan-pillow-davis'
                    }
                ]
            },
            {
                heading: 'Inna proza',
                links: [
                    {
                        title: '„Long Live the Girl Detective” [Electric Lit]',
                        url: 'https://electricliterature.com/long-live-the-girl-detective-by-megan-pillow/'
                    },
                    {
                        title: '„Margo on the Hunt” [Pithead Chapel]',
                        url: 'https://pitheadchapel.com/margo-on-the-hunt/'
                    },
                    {
                        title: '„Water in the Blood” [Triquarterly]',
                        url: 'https://triquarterly.org/issues/issue-159/water-blood'
                    },
                    {
                        title: '„While the Men Go Hunt the Shark, Mrs. Brody Meets Her Lover” [Hobart]',
                        url: 'https://www.hobartpulp.com/web_features/while-the-men-go-hunt-the-shark-mrs-brody-meets-her-lover'
                    },
                    {
                        title: '„Look What You Made Me Do” [BULL]',
                        url: 'http://bullmensfiction.com/fiction/look-what-you-made-me-do/'
                    },
                    {
                        title: '„Yell Louder” [Atticus Review]',
                        url: 'https://atticusreview.org/yell-louder/'
                    }
                ]
            },
            {
                heading: 'Non-fiction',
                links: [
                    {
                        title: '„Instructions for Fucking Your Postpartum Wife” [Lost Balloon]',
                        url: 'https://lost-balloon.com/2021/02/03/your-postpartum-wife-megan-pillow/'
                    },
                    {
                        title: '„Once I Was an Animal” [JMWW]',
                        url: 'https://jmwwblog.wordpress.com/2020/12/31/creative-nonfiction-once-i-was-an-animal-after-mary-oliver-by-megan-pillow/'
                    },
                    {
                        title: '„The Settle Point” [Gay Magazine]',
                        url: 'https://gay.medium.com/the-settle-point-a0c5dc767c4c'
                    },
                    {
                        title: '„Whenever Men Think I’m Smiling” [Brevity]',
                        url: 'https://brevitymag.com/nonfiction/whenever-men-think-im-smiling/'
                    },
                    {
                        title: '„Horror Lives in the Body” [Electric Lit]',
                        url: 'https://electricliterature.com/horror-lives-in-the-body/'
                    }
                ]
            }
        ]
    },
    {
        links: [
            {
                icon: websiteIcon,
                url: 'https://cathyulrichwriter.wordpress.com/'
            },
            {
                icon: twitterIcon,
                url: 'https://twitter.com/loki_writes'
            }
        ],
        works: [
            {
                heading: 'Zbiór opowiadań',
                links: [
                    {
                        title: '„Ghosts of You” [Okay Donkey]',
                        url: 'https://www.amazon.pl/Ghosts-You-Cathy-Ulrich/dp/1733244107/ref=sr_1_1?__mk_pl_PL=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=ghosts+of+you&qid=1639923520&sr=8-1'
                    }
                ],
                footnote: 'Zawiera cztery pierwsze teksty z numeru'
            },
            {
                heading: 'Seria Murdered Ladies (teksty z numeru)',
                links: [
                    {
                        title: '„Being the Murdered Girl” [Crab Fat Magazine nr 2 s. 55]',
                        url: 'https://www.crabfatmagazine.com/wp-content/uploads/Crab-Fat-Issue-2.pdf'
                    },
                    {
                        title: '„Being the Murdered Lover” [Cotton Xenomorph]',
                        url: 'https://www.cottonxenomorph.com/journal/2018/3/27/being-the-murdered-lover'
                    },
                    {
                        title: '„Being the Murdered Mermaid” [Gordon Square Review]',
                        url: 'http://www.gordonsquarereview.org/being-the-murdered-mermaid.html'
                    },
                    {
                        title: '„Being the Murdered Sleeper” [Barzakh]',
                        url: 'https://www.barzakhmag.net/spring-2021-prose/2021/6/2/v5ymzixbhlgwm1kx01d5a45lbmq47l-8ezn4-ls96r'
                    }
                ],
                footnote: 'Opowiadanie „Being the Murdered Wife” można przeczytać w zbiorze „Ghosts of You”'
            },
            {
                heading: 'Seria Japan',
                links: [
                    {
                        title: '„Where the Drowned Ride” [Wigleaf]',
                        url: 'http://wigleaf.com/201708drowned.htm'
                    },
                    {
                        title: '„Cliffs of Tojinbo” [Booth]',
                        url: 'https://booth.butler.edu/2016/11/18/cliffs-of-tojinbo/'
                    },
                    {
                        title: '„Between the Liking and the Pretending” [Ghost Parachute]',
                        url: 'http://ghostparachute.com/issue/february-2019-issue/between-the-liking-and-the-pretending/'
                    }
                ]
            },
            {
                heading: 'Seria Girl Detective',
                links: [
                    {
                        title: '„The Whole Girl Detective Thing” [Black Warrior Review]',
                        url: 'https://bwr.ua.edu/45-1-sneak-peek-the-whole-girl-detective-thing-by-cathy-ulrich/'
                    },
                    {
                        title: '„In All That Light” [Empty House Press]',
                        url: 'https://www.emptyhousepress.com/issue-four/cathy-ulrich'
                    },
                    {
                        title: '„A Girl Detective Decides” [Pigeon Pages]',
                        url: 'https://pigeonpagesnyc.com/a-girl-detective-decides'
                    }
                ]
            },
            {
                heading: 'Seria Apocalypse Girlfriend',
                links: [
                    {
                        title: '„Your Girlfriend as a Weapon of Mass Destruction” [100 word story]',
                        url: 'http://100wordstory.org/your-girlfriend-as-a-weapon-of-mass-destruction/'
                    },
                    {
                        title: '„Your Girlfriend as a Radium Watch Face” [The Citron Review]',
                        url: 'https://citronreview.com/2020/06/21/your-girlfriend-as-a-radium-watch-face/'
                    },
                    {
                        title: '„Your Girlfriend as the American Dream” [(mac)ro(mic)]',
                        url: 'https://macromic.org/2020/09/21/your-girlfriend-as-the-american-dream-by-cathy-ulrich/'
                    }
                ]
            },

            {
                heading: 'Seria Astronaut Love Stories',
                links: [
                    {
                        title: '„Closer to the Moon” [Longleaf Review]',
                        url: 'https://longleafreview.com/closer-to-the-moon/'
                    },
                    {
                        title: '„All the Stars We Contain” [Jet Fuel Review]',
                        url: 'https://www.jetfuelreview.com/cathy-ulrich-spring-2021.html'
                    },
                    {
                        title: '„The Sky Is Nothing at All” [Former Cactus]',
                        url: 'https://formercactus.wordpress.com/2018/07/15/cathy-ulrich-the-sky-is-nothing-at-all/'
                    }
                ]
            }

        ]
    }
];

//adds 0 for issue numbers below 10
export const formatIssueNumber = (issueNumber) => {
    let issueName = WEBSITE_TEXT.issueList.magazineName + ' ';
    if (issueNumber < 10) {
        return issueName + '0' + issueNumber;
    } else {
        return issueName + issueNumber;
    }
};

//timeout used for fade-in animation
export const fadeTimeout = 500;
