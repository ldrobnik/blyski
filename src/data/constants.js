import React from 'react';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebookSquare, faInstagram, faMedium, faPatreon, faTwitterSquare} from '@fortawesome/free-brands-svg-icons';
import {faAngleDoubleLeft, faGlobe, faInfoCircle} from '@fortawesome/free-solid-svg-icons';
import {HoverableLink} from '../styled';

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
        about: ' – informacje'
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
            <p>Bohaterką <HoverableLink><Link to='/1/wszyscy-wiemy-o-margo'><strong>pierwszego
                numeru </strong></Link></HoverableLink> jest <HoverableLink><Link to='/1/bio'><strong>Megan
                Pillow</strong></Link></HoverableLink>.</p>
        </React.Fragment>,
        contact: <React.Fragment><strong>Kontakt z&nbsp;redakcją:</strong> blyski.pismo [at] gmail [dot]
            com.</React.Fragment>,
        disclaimer: <React.Fragment>Idea <strong>błysków</strong> jest taka, by ukazywały się w nich przekłady
            tekstów napisanych
            po angielsku, dlatego niestety nie rozpatruję propozycji wydawniczych, choć do samego pisania flash fiction
            gorąco zachęcam!</React.Fragment>,
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
            textNumbers: ['i', 'ii', 'iii', 'iv', 'v'],
            bio: 'bio',
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
            <p><HoverableLink><a href="https://blyski.org" target="_blank" rel="noopener noreferrer"><strong>błyski</strong></a></HoverableLink> (Polish for <em>flashes</em>) is a journal publishing solicited flash fiction in Polish translation. It is run by <HoverableLink><a href="https://drobnik.co" target="_blank" rel="noopener noreferrer"><strong>Łukasz Drobnik</strong></a></HoverableLink>.</p>
            <p>The journal is a minimalist affair—each issue comprises five flashes by one author and their bio. That’s it.</p>
            <p>The first issue is dedicated to <HoverableLink><a href="https://blyski.org" target="_blank" rel="noopener noreferrer"><strong>Megan Pillow</strong></a></HoverableLink>.</p>
        </React.Fragment>,
        deal: <React.Fragment>
            <p>We offer <strong>an honorarium of 50 USD</strong>, payable before the issue goes live, via PayPal or other agreed service. (Fees may apply).</p>
            <p>We ask for <strong>one-time Polish translation rights</strong> to feature your pieces on the website and, possibly, in a future anthology.</p>
        </React.Fragment>,
        contact: <React.Fragment>
            <p><strong>Contact:</strong> blyski.pismo [at] gmail [dot]
                com.</p>
            </React.Fragment>
    },
    error: 'Błąd połączenia. Starsze numery chwilowo niedostępne.'
};

//constant containing authors' social media links and links to their work to be used in bio
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
    }
];


//data of last issue to be used in case of connection error
export const FALLBACK_ISSUE = [
    {
        'issue': '1',
        'date': '2021-06-06T18:13:00',
        'author': 'Megan Pillow',
        'texts': [
            {
                'title': 'Wszyscy wiemy o Margo',
                'content': '<p>Kiedy Margo zdejmuje bluzkę, wszyscy wiemy, co nadchodzi.</p>\n<p>Margo, co do której jesteśmy zgodni, że ma najlepsze cycki w&nbsp;maturalnej, w&nbsp;jednej ręce trzyma szota tequili, a&nbsp;bluzkę w&nbsp;drugiej. Ta zwiewna szmatka w&nbsp;kolorach tęczy zwisa z&nbsp;jej palca jak flaga w&nbsp;bezwietrzny dzień. Margo, której wargi są na drugim miejscu, jeśli chodzi o&nbsp;obciąganie, zaraz za tą rudą trzecioklasistką Rachel, wychyla szota jak zawodowiec, odgina głowę i&nbsp;wypina pierś, przez co wszyscy gapimy się na jej cycki cudem pomieszczone w&nbsp;czarnym koronkowym staniczku. Korzystając z&nbsp;jej nieuwagi, Dave ściąga bluzkę z&nbsp;jej palca, że niby „ups”, i&nbsp;wszyscy rechoczemy. Margo, która pierdoliła się raz z&nbsp;Hugo na tyłach drużynowego busa do Cedar Key, a&nbsp;wszyscy wiemy, że tak było, bo słyszeliśmy jej jęki, rzuca kieliszek na środek wykładziny w&nbsp;piwnicy Deana i&nbsp;wszyscy wiemy, co będzie dalej.</p>\n<p>Wszyscy przyglądamy się Margo, która w&nbsp;wieku dziesięciu lat dostała cycki, okres i&nbsp;uwagę tysiąca mężczyzn, jak robimy to w&nbsp;niemal każdy sobotni wieczór. Margo, która na prawym biodrze ma mały tatuaż w&nbsp;kształcie złamanego serca, każe nam pogłośnić muzykę, bo będzie tańczyć. Margo, która dawała Andrew korki z&nbsp;algebry i&nbsp;wyciągnęła tego jebanego lenia na czwórę, wykrzykuje o&nbsp;władzy, truciźnie, bólu i&nbsp;radości w&nbsp;jej DNA, puszczając do Deana oko. Margo, która powiedziała raz Dave’owi, że na tyłach busa Hugo wypłakiwał się w&nbsp;jej ramię po rozwodzie rodziców, a&nbsp;ona udawała jęki, by nikt go nie usłyszał, tym razem bierze do ust butelkę Cuervo i&nbsp;wychyla ją, a&nbsp;my wszyscy poprawiamy wzwody. Margo, która wciąż ma na Instagramie pełno zeszłorocznych wiadomości od Deana, w&nbsp;których po pijaku przyrzekał jej dozgonną miłość i&nbsp;ubolewał nad wielkością swojego fiuta, rozpina szorty, a&nbsp;my wszyscy wiwatujemy. Margo, która tych wiadomości nigdy nikomu nie pokazała, zsuwa szorty z&nbsp;ud, a&nbsp;my zbliżamy głowy. Margo, która na całą noc zostawia światło w&nbsp;łazience, siada na kolanach Andrew, a&nbsp;my wiemy, że to niedługo będziemy my.</p>\n<p>Margo, której włosy pachną rozmarynem, papierosowym dymem, miętą, plastikiem, miodem, tłuszczem z&nbsp;McDonalda, obwodzi językiem płatek ucha Andrew i&nbsp;szepcze coś, co wszyscy chcemy wiedzieć. Margo, która jest na prostej drodze do najlepszego wyniku na roku i&nbsp;dostatnia się na Browna, jeśli tylko wszystkiego nie spierdoli, owija ramiona wokół szyi Andrew i&nbsp;przysuwa go do siebie. Dla nas to wygląda, jakby chciała go nakłonić do possania cycka, ale Andrew tylko odpowiada coś szeptem, próbując nie robić afery. Margo, której brązowe, okolone długimi, długimi rzęsami oczy są z&nbsp;jakiegoś powodu zawsze smutne, odchyla się do tyłu, tyłu, tyłu, a&nbsp;Andrew wkłada rękę pod jej plecy, by ją przytrzymać, lecz tak naprawdę tylko zdejmuje jej stanik.</p>\n<p>Margo, która w&nbsp;drugiej klasie podstawówki wygrała konkurs <em>Highlights</em> wierszem o&nbsp;motylach, Margo, która obejrzała <em>Mamma Mia</em>&nbsp;siedemnaście razy i&nbsp;zna wszystkie słowa, Margo, która zawsze ma pieniądze, gdy ktoś potrzebuje pożyczyć, Margo, która powiedziała komuś w&nbsp;ósmej klasie, że miała raz orgazm od tamponu, co do tej pory jest tematem żartów, Margo, którą wszyscy chłopacy chcą zerżnąć, a&nbsp;wszystkie dziewczyny niby mieć za przyjaciółkę, lecz która w&nbsp;sobotnie wieczory zdaje się nigdy nie mieć lepszego niż my towarzystwa, Margo, która doszła tylko raz w&nbsp;życiu, lecz płakała tysiąc, Margo wsuwa palec pod gumkę swoich majtek i&nbsp;zdejmuje je jedną ręką.</p>\n<p>Margo, której rodzice nie mówią, kiedy ma wrócić do domu, Margo, która niemal od roku nie przespała porządnie nocy, kładzie się z&nbsp;Andrew na kanapie, a&nbsp;my wszyscy czekamy na swoją kolej. Margo, która przez ramię Andrew ogląda <em>MasterChefa</em>, udaje, że zamiast tego robi suflet. Margo, która kiedyś w&nbsp;ostatniej kabinie damskiej ubikacji napisała jasnoczerwonym tuszem „Margo to dziwka&#8221;, jest w&nbsp;kuchni ze światłem za zasłonami i&nbsp;żarem piekarnika na rękach, i&nbsp;zapachem wznoszenia się w&nbsp;nozdrzach. Margo, która powiedziała rodzicom, że będzie nocować u&nbsp;Maggie, choć wcale jej nie pytali, próbuje nie myśleć o&nbsp;niedzieli.</p>\n<p>Margo, która ledwie moment temu wyszeptała na ucho Andrew „zabierz mnie, proszę, do domu”, Margo, która w&nbsp;wyszeptanej odpowiedzi usłyszała „jest za późno”. Margo, która jest imieniem i&nbsp;ciałem, do jakich wszyscy powracamy, leżąc samotnie w&nbsp;łóżkach, Margo, która jest imieniem, jakiego nie będziemy chcieli nawet pomyśleć po skończeniu liceum, Margo, która nie zjawi się na pięcio-, dziesięcio-, piętnastoleciu matury, a&nbsp;nikt z&nbsp;nas nie będzie się dziwił, Margo, która tylko czeka, aż skończymy, Margo, Margo, Margo, która.</p>\n',
                'slug': 'wszyscy-wiemy-o-margo'
            },
            {
                'title': 'W nowym świecie',
                'content': '<p>Dziesiątego dnia deszczu znaleźliśmy altanę. Porastało ją kudzu, lecz jej dach był nietknięty, słupki mocne. Gina milczała, ale sposób, w&nbsp;jaki kucnęła, z&nbsp;głową w&nbsp;dłoniach, mówił mi, że zatrzymujemy się na noc. Zdjęłam plecak i&nbsp;zaczęłam kopać pod kudzu w&nbsp;poszukiwaniu rozpałki na ognisko.</p>\n<p>Dzieci nie narzekały&nbsp;na przerwę. Przez ostatni miesiąc pokonywaliśmy dwanaście mil dziennie, a&nbsp;Del, starszy, był chudy, milczący. Lila i&nbsp;Eckram wciąż mieli trochę energii do zabawy, lecz gdy wrócili z&nbsp;garściami mchu na ognisko, zobaczyłam ich policzki – zapadłe, jakby ssali cytryny – i&nbsp;kazałam im usiąść. Wykopałam dziurę w&nbsp;kudzu, rozpaliłam ognisko na betonie i&nbsp;wydałam racje: jeden plaster beef jerky, jedna cząstka suszonego mango.</p>\n<p>Gina nie jadła. Kiedy myślała, że nie patrzę, przedarła swoje porcje na trzy i&nbsp;rozdała dzieciom. Gapiła się w&nbsp;ogień, gmerała przy drewnianych koralach na szyi. Znalazła je sześć miesięcy temu w&nbsp;Traverse City w&nbsp;jakimś przegniłym butiku, który pewnie splądrowano podczas zamieszek. To było, nim znalazłyśmy dzieci, zaraz jak usłyszałyśmy o&nbsp;bezpiecznej strefie po drugiej stronie gór w&nbsp;Utah – gdzie, nikt nie był pewien. Gina wygrzebała te korale, wielkie jak piłki do golfa, ze sterty zżartych przez mole szali i&nbsp;wyszczerzyła zęby.</p>\n<p><em>Nie da się z&nbsp;nimi wędrować</em>, powiedziałam.</p>\n<p><em>Sara, są lekkie</em>, odparła.&nbsp;<em>Schowam je pod bluzkę.</em>&nbsp;<em>Widzisz?</em>&nbsp;Ich zarys falował jak kręgosłup w&nbsp;poprzek jej brzucha. Spała tak co noc, tuląc korale do skóry niczym karmione niemowlę, kryjąc je przed wzrokiem. Poza jednym razem: śniłam, że jestem w&nbsp;domu mojej babci i&nbsp;śpię w&nbsp;jej mosiężnym łożu, a&nbsp;rozłożysty dąb przed domem drapie gałęziami o&nbsp;szybę. Słyszałam obok miękki oddech babci, czułam ręcznie robioną narzutę otuloną wokół szyi i&nbsp;byłam bezpieczna, i&nbsp;było mi ciepło, i&nbsp;wtedy znowu obudziłam się w&nbsp;znajomy chłód, lecz drapanie nie ustało. Otworzyłam oczy. Gina, z&nbsp;głową zwieszoną nad brzuchem w&nbsp;przyćmionym świetle, skrobała coś agrafką na jednym z&nbsp;korali. Jakiś wizerunek, czego – nie mogłam do końca rozpoznać. Nie powiedziałam nic, tylko na powrót zamknęłam oczy. To było na długo, nim zaufała mi na tyle, by pokazać, nad czym pracuje, lecz dzięki tej krótkiej chwili zrozumiałam, po co jej te korale.</p>\n<p>– Co to za miejsce? – zapytała Lila. Skubała mango niczym mysz.</p>\n<p>– To altana – odparłam.</p>\n<p>– Do czego służy? – dopytał Eckram, oblizując palce. Del po prostu na mnie patrzył.&nbsp;<em>Kiedyś byłam księgową</em>, chciałam powiedzieć.&nbsp;<em>Zanim to wszystko się stało, miałam mazdę i&nbsp;córeczkę, którą karmiłam w&nbsp;bujanym fotelu, słuchając NPR.</em>&nbsp;Jednak tak wiele z&nbsp;tych słów – <em>księgowa</em>, <em>mazda</em>, <em>bujany fotel</em>, <em>NPR</em> – brzmiały jak obcy język. Nie znaczyły nic.</p>\n<p>– To schronienie – powiedziałam. – Dla wędrowców jak my.</p>\n<p>Potem, jak każdej nocy, głaskałam ich po głowach. Mówiłam o&nbsp;miejscu po drugiej stronie gór, gdzie jest jedzenie, prycze, czysta woda. Mówiłam, że wkrótce tam dotrzemy. Wkrótce.</p>\n<p>Zerknęłam na Ginę. Spała, z&nbsp;koralami rozciągniętymi w&nbsp;poprzek piersi. Wczoraj w&nbsp;nocy skończyła skrobać na dziesiątym koralu: rozpostarła się flaga. Może z&nbsp;czasów wojny o&nbsp;niepodległość. Wyobraziłam je sobie pewnego dnia w&nbsp;muzeum – historia świata, który obrócił się w&nbsp;popiół, wyskrobana agrafką na sznurze korali. Zastanawiałam się, czy ludzie w&nbsp;nowym świecie będą znali słowo <em>muzeum</em>.</p>\n',
                'slug': 'w-nowym-swiecie'
            },
            {
                'title': 'Kiedy w twoim mieście zamkną Wal-Mart',
                'content': '<p>Pozostaje cisza. Trzy puszki dyni pod mgiełką kurzu. Rozbity słój pikli. Kałuże ciemności, mącone migotaniem umierającej świetlówki.&nbsp;Uschły wiecheć ogonków bananów, który jakieś dziecko wkopnęło miesiąc temu pod lodówkę z&nbsp;owocami morza. Szminki w&nbsp;kolorach typu Come Hither czy Quiet Siren. Czerstwa piętka chleba. Wózki i&nbsp;koszyki – próżno czekać, by ktoś napełnił ich brzuchy towarem – gromadzą się tuż za szybą drzwi jak kaczki w&nbsp;rogu zamarłego stawu. Monety rozsypane na kształt gwiazdozbioru. George, który zmiata duchy zostawionych przez klientów śladów stóp i&nbsp;czeka na telefon o&nbsp;przeniesieniu. Duch George’a, który zmiata paragony i&nbsp;foliówki szeleszczące jak liście, który wie, że ten telefon nigdy nie nadejdzie. Szczotka, która wie, że to koniec, której brakuje słów, by powiedzieć George’owi, że będzie za nim tęsknić i&nbsp;nie chce zostać sama. Szczotka, która może tylko wyszeptać <em>szszsz</em>, <em>szszsz</em>, <em>szszsz</em> po podłodze. Ostatnie z&nbsp;bukietów róż, ich płatki na krawędzi rozkładu, piętrzące się na stanowisku obsługi klienta jak ciała. Płynne echo Patsy Cline. Powietrze – niewprawiane w&nbsp;ruch przez klientów ani&nbsp;rozsuwane drzwi – zaczęło już smakować wnętrzem grobowca.</p>\n<p>Na zewnątrz wciąż pali się światło. Jego snop wskazuje na bok budynku, niczym reflektor na scenę, jakby czekając na wejście solisty. Nad drzwiami kolejne światło rozjaśnia fragment, w&nbsp;którym kiedyś była nazwa. W&nbsp;pustym, czarnym przestworzu parkingu miejsca parkingowe wciąż pamiętają samochody, dreszcz, który czuły, gdy się w&nbsp;nie wsuwały, ich ciężar, który wypierał wszystko, co straszne. Pamiętają też ludzi: małolatów, którzy parkowali na skraju parkingu, by się pieprzyć, by zapomnieć – niemowlęta, które wrzeszczały, niemal dławiąc się językami – kobiety, które potrzebowały paru głębszych – mężczyzn, których stawy niemal tarły się w&nbsp;proch.</p>\n<p>Ale pamiętają też innych: niemowlęta, których twarze rozświetlał uśmiech, i&nbsp;roześmiane kobiety, i&nbsp;mężczyzn, którzy truchtali przez parking, bo nie mogli się doczekać powrotu do domu, i&nbsp;małolatów, którzy trwali w&nbsp;objęciach, bo możesz wsadzić fiuta niemal wszędzie i&nbsp;rozłożyć nogi niemal przed każdym, ale jest tylko garstka osób, które dadzą ci miejsce, by oprzeć głowę.</p>\n<p>I tak budynek i&nbsp;parking będą w&nbsp;żałobie po ludziach, bo nawet smutni ludzie czymś je wypełniali, a&nbsp;bez nich nie ma już nic. Jakiś czas będą w&nbsp;żałobie same. I&nbsp;wtedy, pewnego dnia poczują, jak w&nbsp;pozostawione przez ludzi miejsca wściubiają się palce korzeni. Oczyszczający potok wody przebiegnie jak łzy po betonowej powierzchni i&nbsp;przez alejki. Pnącza i&nbsp;gałęzie rozburzą je i&nbsp;uniosą, jak unosi się ciało osoby, która zaraz umrze, jak unosi się ciało osoby, której ostatni oddech chce się czuć na policzku zamiast słuchać go z&nbsp;drugiego końca pokoju, i&nbsp;przez chwilę będą je trzymać w&nbsp;objęciach. Wody wymyją ból. I&nbsp;wtedy korzenie zaczną je na powrót składać razem z&nbsp;leżącą pod spodem ziemią, aż budynek i&nbsp;parking staną się czymś nowym.</p>\n<p>Pewnego dnia, za wiele, wiele lat, w&nbsp;odwiedziny przyjdzie dziewczyna. Zdejmie buty, by poczuć trawę pod stopami. Zobaczy, jak drzewa chylą się nad głową, chroniąc ją przed słońcem. Zrozumie, że to nowe jest na powrót dobre, że jego pustka nie jest pustką, którą trzeba zapełnić, ale pustką rojącą się milionem powitań. I&nbsp;gdy odejdzie, nowe będzie wiedziało, że ona wróci i&nbsp;przyprowadzi innych. Będzie wiedziało tak samo, jak można przyłożyć rękę do ziemi pod koniec zimy i&nbsp;wiedzieć, że przez glebę ku górze pnie się zieleń.</p>\n',
                'slug': 'kiedy-w-twoim-miescie-zamkna-wal-mart'
            },
            {
                'title': 'Lily w świetle',
                'content': '<p>Lily nie śpi, ale i&nbsp;tak próbuję wstać z&nbsp;łóżka bezszelestnie. Zasłony są zasunięte i&nbsp;uchylam je ciutkę, wpuszczając do środka cienki promień światła, lecz nie na tyle, by ktokolwiek z&nbsp;zewnątrz nas zobaczył. Promień idzie do łóżka, do leżącego tam ciała, jakby ktoś złotym pędzlem nakreślił linię w&nbsp;poprzek jej brzucha, a&nbsp;pod tym liźnięciem złota jej skóra, och, skóra Lily płonie jak jeden z&nbsp;tych papierowych lampionów, które podpalasz i&nbsp;posyłasz w&nbsp;niebo. Zamykam oczy i&nbsp;znów je otwieram. Jeszcze mi nie zniknęła.</p>\n<p>Lily nie śpi, ale trwa bez ruchu, a&nbsp;jej włosy płyną w&nbsp;poprzek poduszki jak strumyk wody. Klękam obok niej. Nabieram je w&nbsp;dłoń, zupełnie jak robili to Steven, Marcus, Ahmed, Dan, nim przykładali usta do jej gardła, gdy leżała tam nieruchomo, zupełnie jak robił to tamten malarz, który rozlał je na powrót w&nbsp;poprzek poduszki i&nbsp;oznajmił, że jest jego muzą i&nbsp;teraz musi zamrzeć.</p>\n<p>Lily nie śpi, ale bezustannie jest w&nbsp;moim łóżku, patrząc przeze mnie ku zasłonie, ku dziedzińcowi, ku pokojowi, w&nbsp;którym powinna była spędzić noc, ku ścieżce, prerii, setkom zwierząt, które się budzą, przeciągają, drepczą przez szepczącą trawę. Wypuszczam jej włosy z&nbsp;rąk. Obracam jej twarz ku sobie. Nie patrzy mi w&nbsp;oczy. Bez przerwy wygląda za okno ku słońcu, strumieniowi, drogom, które idą jak strzały w&nbsp;głąb miasta, gdzie jej mąż wciąż pewnie śpi w&nbsp;ich łóżku. Przebiegam ręką od jej policzka do ramienia, krągłości piersi, wypukłości biodra, szczytu uda, gdzie włosy migoczą w&nbsp;złotym świetle, gdzie włosy miękkością przypominają puch królików, które skradają się ku nam przez gąszcz. Wiem, że to udo uchylało drzwi w&nbsp;setkach starych domów, przywierało do łydki, gdy kucała, by zrobić kolejne zdjęcie struktury cienia i&nbsp;światła. Wiem, że to udo napina się, gdy ona biegnie nocą przez miasto, a&nbsp;jedynym, co słyszy, jest dźwięk własnego oddechu w&nbsp;uszach i&nbsp;nikły wrzask syren. Wiem, że każdy mężczyzna, który wtacza się do jej łóżka, zakłada to udo wokół siebie tak samo, jak składa prześcieradło, by zaraz je rzucić w&nbsp;kąt szafy. Wiem, że tamten malarz układa jej uda w&nbsp;świetle tak samo, jak składa skrzydła papierowego żurawia, a&nbsp;potem śledzi oczami i&nbsp;pędzlem wzdłuż każdej zamarłej krągłości.</p>\n<p>Lily nie śpi, ale bezustannie jest w&nbsp;moim łóżku i&nbsp;trwa nieruchomo, jak zawsze to robi przy mężczyznach. Chcę do niej szepnąć, że tu, w&nbsp;tym łóżku jesteśmy kobietami, że jesteśmy tylko my dwie na całym świecie.</p>\n<p><em>Taką mnie lubią</em>, mówi.</p>\n<p><em>Taką ja cię lubię</em>, odpowiadam i&nbsp;rozchylam jej nogi, i&nbsp;wkładam w&nbsp;nią język, i&nbsp;po raz pierwszy – ona żyje. Lily w&nbsp;świetle podskakuje jak strumyk wody na gorącej patelni, jak królik mknący przez gąszcz, jak puls w&nbsp;jej udzie, który tętni na moim policzku, gdy zakłada wokół mnie nogi. Kładę jedną rękę pod nią, a&nbsp;drugą na delikatnej wypukłości brzucha, na skórze, która jarzy się w&nbsp;świetle promienia, i&nbsp;w&nbsp;tym świetle się poruszamy, w&nbsp;tym świetle jesteśmy zaślubione, w&nbsp;tym świetle tworzymy sztukę lepszą niż jakiegokolwiek mężczyzny, i&nbsp;nie mówię jej, nigdy jej nie powiem, ale w&nbsp;tym świetle czuję też ukłucie żałoby, bo wiem, że podobnie jak to światło, ta sztuka przeminie.</p>\n',
                'slug': 'lily-w-swietle'
            },
            {
                'title': 'Margo. Skręć w lewo.',
                'content': '<p>Oto pierwszy liść, jego brzegi skrwawione żółcią. Oto rybołów, który poluje na myszy z&nbsp;żerdzi palmy w&nbsp;ogrodzie Mastersonów. Oto i&nbsp;pierwszy nocny chłód, co uderza, gdy zachodzi słońce – nagle i&nbsp;mocno jak strzał z&nbsp;kija w&nbsp;czaszkę. Ale my ledwie to zauważamy, bo przyglądamy się&nbsp;Margo, jak siedzi sama w&nbsp;swoim samochodzie na końcu ulicy.</p>\n<p>Stoi przed znakiem „stop”, patrząc w&nbsp;lewo, w&nbsp;prawo, w&nbsp;lewo, a&nbsp;my nie widzimy jej twarzy, lecz dostrzegamy dłoń stukającą w&nbsp;szybę i&nbsp;wszystkie wiemy, co robi. Słyszymy to nawet przez płot ogrodu Amy: to dzwonienie jej obrączki ślubnej o&nbsp;szkło, to samo, które zawsze słychać na imprezach, jakby chciała prosić wszystkich o&nbsp;uwagę przed wygłoszeniem toastu, ale Margo nigdy nie ma nic do powiedzenia. Patrzymy na nią z&nbsp;naszych drewnianych foteli nad brzegiem rozświetlonego księżycem basenu Amy i&nbsp;wszystkie słyszymy to <em>dzyń</em>, i&nbsp;to jest dźwięk lata.</p>\n<p>Ten dźwięk, ten dźwięk – zamykamy jednocześnie oczy i&nbsp;tutaj, znowu, jest Margo, Margo z&nbsp;fryzurą od stylisty i&nbsp;porcelanowymi zębami, Margo, która nalewa nam wszystkim kolejny kieliszek wina. Słyszymy to, a&nbsp;Margo przesuwa siatkowe drzwi i&nbsp;wkracza do naszych ogrodów, a&nbsp;nasi mężowie zawsze za nią podążają, szczypce do grilla w&nbsp;ich rękach niczym pochodnie. Słyszymy to, a&nbsp;Margo rozbiera się do bikini i&nbsp;wślizguje pod powierzchnie naszych basenów, a&nbsp;nasi mężowie dzwonią swoimi przyrządami i&nbsp;zapominają oddychać. Słyszymy to i&nbsp;czekamy na męża Margo, na to, aż wszystkie ptaki w&nbsp;sąsiedztwie wzniosą się w&nbsp;niebo jak płonące liście.</p>\n<p><em>Dzyń</em>, robi obrączka Margo o&nbsp;szkło, <em>dzyń</em>, <em>dzyń</em>, <em>dzyń</em>, a&nbsp;Nicki szczotkuje włosy swojego niemowlęcia, ale czuje tylko ciepłe złoto obrączki na szyi, gdy Margo ciągnie ją za drzwi łazienki, aby pocałować. <em>Dzyń</em>, a&nbsp;Amy gubi oczko w&nbsp;dzierganym szaliku, bo to dźwięk Margo, która znowu stuka w&nbsp;jej szklane drzwi o&nbsp;trzeciej nad ranem, ale nigdy nie mówi: <em>pomóż mi</em>. <em>Dzyń</em>, a&nbsp;Rachel niemal wylewa pitą herbatę, bo ten dźwięk to Margo, jej brzuch wciąż płaski, gdy widząc płacz Rachel, z&nbsp;brzękiem upuszcza kubek na podłogę, przyciska dłoń do jej nabrzmiałego brzucha i&nbsp;mówi: <em>to, moja droga, jest magia</em>.</p>\n<p>Oto Margo, wciąż przed znakiem „stop”, a&nbsp;my wszystkie wiemy, że lato nas opuszcza. Wszystkie wiemy, że jej torba jest spakowana, gdy leży na siedzeniu pasażera jak przyrzeczenie. Wszystkie wiemy, że jeśli odjedzie, liście spadną jak kurtyna, słońce się zatrzaśnie, a&nbsp;dzwonki, które dzwonią na każdej werandzie, gdy przechodzi obok, umrą. Ale oto i&nbsp;Margo, jeszcze z&nbsp;nami. Nadszedł czas na inkantację.</p>\n<p>Nicki szczotkuje włosy swojego niemowlęcia i&nbsp;z&nbsp;gładkością, z&nbsp;jaką podkład rozchodzi się po siniaku, ucina z&nbsp;nich lok. Rachel dopija herbatę i&nbsp;z&nbsp;szybkością, z&nbsp;jaką przesuwa się rygiel w&nbsp;drzwiach, wyrzuca na dłoń fusy. Amy wyciąga druty z&nbsp;kłębka i&nbsp;z&nbsp;cichością, z&nbsp;jaką kobieta wymyka się przez boczne drzwi, stuka metalem w&nbsp;skórę swoich znajomych, a&nbsp;one rzucają zawartość dłoni do basenu. Końcami drutów Amy miesza wodę w&nbsp;basenie niczym w&nbsp;kotle i&nbsp;wszystkie szepczemy słowa:</p>\n<p><em>Skręć w&nbsp;lewo, Margo.</em></p>\n<p><em>Margo. Skręć w&nbsp;lewo.</em></p>\n<p>Szepczemy je wciąż na nowo, cicho, by nie usłyszeli nas nasi mężowie, a&nbsp;przed nami woda ciągle wiruje, jakby coś ją zasysało. A&nbsp;gdy tak recytujemy, myślimy to, czego nie możemy powiedzieć:</p>\n<p><em>Skręć w&nbsp;lewo, Margo.</em></p>\n<p>(bo jeśli to zrobisz, droga roztoczy się pod tobą, a&nbsp;niebo odzyska swój kolor, a&nbsp;ty znajdziesz dom, w&nbsp;którym ptaki nie będą przypominały ci o&nbsp;śmierci).</p>\n<p><em>Margo. Skręć w&nbsp;lewo.</em></p>\n<p>(bo pewnego dnia, pewnego dnia będziesz stała gdzieś w&nbsp;rozświetlonej słońcem kuchni, a&nbsp;ktoś przyłoży jedną rękę do twojego policzka z&nbsp;samej tylko miłości, a&nbsp;drugą poda ci do ust brzoskwinię).</p>\n<p><em>Skręć w&nbsp;lewo, Margo.</em></p>\n<p>(bo przesiedziałaś w&nbsp;swoim samochodzie na końcu tej ulicy już cztery lata i&nbsp;zawsze skręcasz w&nbsp;prawo, i&nbsp;wracasz do domu, i&nbsp;tym razem to cię może zabić, i&nbsp;być może to twoja ostatnia szansa).</p>\n<p><em>Margo. Skręć w&nbsp;lewo.</em></p>\n<p>(bo upiłaś nas kiedyś wszystkie tequilą w&nbsp;swojej piwnicy i&nbsp;ustawiłaś w&nbsp;kręgu, i&nbsp;powiedziałaś: <em>mam sekret</em>, i&nbsp;wyszeptałaś:</p>\n<p>Do Nicki: <em>Umarłam kiedyś tutaj.</em></p>\n<p>Do Amy: <em>Jest za późno.</em></p>\n<p>Do Rachel: <em>Wciąż oglądam MasterChefa.</em></p>\n<p>A my nie rozumiałyśmy i&nbsp;nie zadawałyśmy pytań, i&nbsp;nie powtarzałyśmy tych słów nikomu, nawet sobie nawzajem. Ale każdej nocy, gdy leżymy samotnie w&nbsp;łóżkach, oto Margo znów w&nbsp;tamtej piwnicy, oto Margo przykładająca do ust butelkę Cuervo i&nbsp;wszystkie myślimy tylko: <em>żal</em>, <em>żal</em>, <em>żal</em>).</p>\n<p>Oto liść, skrwawiony żółcią. Oto rybołów, na polowaniu. Oto pierwszy nagły strzał chłodu.</p>\n<p>A mimo to.</p>\n<p>Patrzymy na Margo.</p>\n<p>Mieszamy wodę.</p>\n<p>Recytujemy słowa, pięć, dziesięć, piętnaście razy:</p>\n<p><em>Skręć w&nbsp;lewo, Margo.</em></p>\n<p><em>Margo.</em></p>\n<p><em>Skręć w&nbsp;lewo.</em></p>\n',
                'slug': 'margo-skrec-w-lewo'
            }
        ],
        'bio': {
            'title': 'Megan Pillow',
            'content': '<p>Megan Pillow ukończyła University of Iowa Writers&#8217; Workshop (kierunek: proza) i&nbsp;zdobyła tytuł doktora anglistyki na University of Kentucky. Jest współredaktorką <em>The Audacity</em>, biuletynu prowadzonego przez Roxane Gay, oraz założycielką <em>Submerged: An Archive Of Caregivers Underwater</em>, archiwum historii osób opiekujących się bliskimi w&nbsp;czasie pandemii. Jej twórczość ukazała się lub niedługo ukaże w&nbsp;takich pismach jak&nbsp;<em>The Believer</em>,&nbsp;<em>SmokeLong Quarterly</em>,&nbsp;<em>Passages North</em>,&nbsp;<em>Guernica</em>, <em>Electric Lit</em>&nbsp;czy <em>Gay Magazine</em>. Jej prozę ujęto w&nbsp;prestiżowym zestawieniu <em>Wigleaf Top 50</em> i&nbsp;wśród wyróżnionych opowiadań w&nbsp;antologii <em>The Best American Short Stories</em>. Z&nbsp;kolei twórczość non-fiction znalazła się na liście wartych uwagi utworów w&nbsp;zbiorze <em>The Best American Essays</em>.</p>\n',
            'slug': 'megan-pillow'
        }
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
