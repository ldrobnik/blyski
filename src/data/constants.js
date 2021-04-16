import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faTwitterSquare,
    faFacebookSquare,
    faInstagram,
    faMedium,
    faPatreon
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
            path: 'https://twitter.com/blyskipismo'
        },
        {
            message: instagramIcon,
            path: 'https://www.instagram.com/blyskipismo'
        },
        {
            message: facebookIcon,
            path: 'https://www.facebook.com/blyskipismo'
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
            <p><strong>Flash fiction</strong> to bardzo krótkie prozy nieprzekraczające – zależnie od definicji – 1000
                lub 1500&nbsp;słów objętości. W&nbsp;odróżnieniu od prozy poetyckiej zawsze mają fabułę.</p>
            <p>Z&nbsp;kolei <strong>błyski</strong> to nieregularnik, który stawia sobie za cel przybliżenie polskim
                czytelnikom tej
                popularnej w&nbsp;świecie anglosaskim formy. Każdy numer jest poświęcony jednemu autorowi: zawiera pięć
                jego tekstów plus biogram – i&nbsp;tyle.</p>
        </React.Fragment>,
        contact: <React.Fragment><strong>Kontakt z&nbsp;redakcją:</strong> blyski.pismo [at] gmail [dot]
            com.</React.Fragment>,
        desclaimer: <React.Fragment>Idea <strong>błysków</strong> jest taka, by ukazywały się w nich wyłącznie przekłady
            tekstów napisanych
            po angielsku, dlatego niestety nie rozpatruję propozycji wydawniczych, choć do samego pisania flash fiction
            gorąco zachęcam!</React.Fragment>,
        credits: <React.Fragment>red. nacz. –&nbsp;ja, dobór tekstów –&nbsp;ja, przekłady –&nbsp;ja, projekt strony
            –&nbsp;ja*</React.Fragment>,
        footnote: <React.Fragment><HoverableLink href="https://drobnik.co/" target="_blank" rel="noopener noreferrer">*ja
            = Łukasz Drobnik</HoverableLink></React.Fragment>,
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
            selectedWorks: 'Wybrane teksty:'
        }
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
        works: [{
            heading: "Proza",
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
                },
                {
                    title: '„Long Live The Girl Detective” [Electric Lit]',
                    url: 'https://electricliterature.com/long-live-the-girl-detective-by-megan-pillow/'
                },
                {
                    title: '„Water in the Blood” [Triquarterly]',
                    url: 'https://triquarterly.org/issues/issue-159/water-blood'
                },
                {
                    title: '„While The Men Go Hunt the Shark, Mrs. Brody Meets Her Lover” [SmokeLong Quarterly]',
                    url: 'https://hobartpulp.com/web_features/while-the-men-go-hunt-the-shark-mrs-brody-meets-her-lover'
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
                heading: "Non-fiction",
                links: [
                    {
                        title: '„Instructions for Fucking Your Postpartum Wife” [Lost Balloon]',
                        url: 'https://lost-balloon.com/2021/02/03/your-postpartum-wife-megan-pillow/'
                    },
                    {
                        title: '„Once I Was An Animal” [JMWW]',
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
                        title: '„Horror Lives In The Body” [Electric Lit]',
                        url: ': https://electricliterature.com/horror-lives-in-the-body/'
                    }
                ]
            }
        ]
    }
];


//data of last issue to be used in case of connection error
export const FALLBACK_ISSUE = [
    null,
    null,
    null,
    {
        "issue": "4",
        "date": "2020-09-02T19:51:40",
        "author": "Samantha Went Wronging",
        "texts": [
            {
                "title": "Wszyscy wiemy o Margo",
                "content": "<p>Kiedy Margo zdejmuje koszulę, wszyscy wiemy, co nadchodzi.</p>\n<p>Margo, co do której jesteśmy zgodni, że ma najlepsze cycki w&nbsp;maturalnej, w&nbsp;jednej ręce trzyma szota tequili, a koszulę w&nbsp;drugiej. Ta zwiewna szmatka w&nbsp;kolorach tęczy zwisa z&nbsp;jej palca jak flaga w&nbsp;bezwietrzny dzień. Margo, której wargi są na drugim miejscu, jeśli chodzi o&nbsp;obciąganie, zaraz za tą rudą Rachel z&nbsp;pierwszej klasy, wychyla szota jak zawodowiec, odgina szyję i&nbsp;wypina pierś, przez co wszyscy gapimy się na jej cycki cudem pomieszczone w&nbsp;czarnym koronkowym staniczku. Korzystając z&nbsp;jej nieuwagi, Dave ściąga koszulę z&nbsp;jej palca, że niby „ups”, i&nbsp;wszyscy rechoczemy. Margo, która raz się pieprzyła z&nbsp;Hugo na tyłach drużynowego busa do Cedar Key, a&nbsp;wszyscy wiemy, że tak było, bo słyszeliśmy jej jęki, rzuca kieliszek na sam środek wyłożonej wykładziną piwnicy Deana i&nbsp;wszyscy wiemy, co będzie dalej.</p>\n<p>Wszyscy patrzymy na Margo, która w&nbsp;wieku dziesięciu lat dostała cycki, okres i&nbsp;uwagę tysiąca mężczyzn, jak robimy to w&nbsp;niemal każdy sobotni wieczór. Margo, która na prawym biodrze ma niewielki tatuaż w&nbsp;kształcie złamanego serca, każe nam pogłośnić muzykę, bo będzie tańczyć. Margo, która dawała Andrew korki z&nbsp;algebry i&nbsp;wyciągnęła tego jebanego lenia na czwórkę, wykrzykuje o&nbsp;władzy, truciźnie, bólu i&nbsp;radości w&nbsp;jej DNA, puszczając do Deana oko. Margo, która raz powiedziała Dave’owi, że na tyłach autobusu Hugo wypłakiwał się w&nbsp;jej ramię po rozwodzie rodziców, a&nbsp;ona udawała jęki, by nikt go nie usłyszał, tym razem bierze do ust butelkę Cuervo i&nbsp;wychyla ją, a my wszyscy poprawiamy wzwody. Margo, która wciąż ma na Instagramie pełno zeszłorocznych pijackich wiadomości od Deana, w&nbsp;których przyrzekał jej dozgonną miłość i&nbsp;ubolewał nad rozmiarem swojego fiuta, rozpina szorty, a my wszyscy wiwatujemy. Margo, która tych wiadomości nigdy nikomu nie pokazała, zsuwa z&nbsp;ud szorty, a my zbliżamy głowy. Margo, która zostawia światło w&nbsp;łazience na całą noc, siada na kolanach Andrew, a&nbsp;my wiemy, że niedługo to będziemy my.</p>\n<p>Margo, której włosy pachną rozmarynem, papierosowym dymem, miętą, plastikiem, miodem,&nbsp;tłuszczem z&nbsp;McDonalda, obwodzi językiem płatek ucha Andrew i&nbsp;szepcze coś, co wszyscy chcemy wiedzieć. Margo, która jest na dobrej drodze do najlepszego wyniku w&nbsp;klasie i&nbsp;dostatnia się na Browna, jeśli wszystkiego nie spierdoli, owija ręce wokół szyi Andrew i&nbsp;przysuwa go do siebie. Dla nas to wygląda, jakby chciała go nakłonić do possania jednego z&nbsp;tych swoich cycków, ale Andrew tylko odpowiada coś szeptem, próbując nie robić afery. Margo, której brązowe, okolone długimi, długimi rzęsami oczy są niemal zawsze smutne, odchyla się do tyłu, tyłu, tyłu, a&nbsp;Andrew wkłada rękę pod jej plecy, by ją przytrzymać, lecz tak naprawdę tylko zdejmuje jej stanik.</p>\n<p>Margo, która w&nbsp;drugiej klasie napisała wiersz o&nbsp;motylach nagrodzony główną nagrodą w&nbsp;konkursie <em>Highlights</em>, Margo, która obejrzała <em>Mamma Mia</em> siedemnaście razy i&nbsp;zna wszystkie słowa, Margo, która zawsze ma pieniądze, gdy ktoś potrzebuje pożyczyć, Margo, która powiedziała komuś w&nbsp;ósmej klasie, że miała raz orgazm od tamponu, co do tej pory się za nią ciągnie, Margo, którą wszyscy chłopacy chcą zerżnąć, a&nbsp;wszystkie dziewczyny niby mieć za przyjaciółkę, lecz która w&nbsp;sobotnie wieczory zdaje się nie mieć lepszego towarzystwa, Margo, która doszła tylko raz w&nbsp;życiu, lecz płakała tysiąc, Margo wsuwa palec pod gumkę swoich majtek i&nbsp;zdejmuje je jedną ręką.</p>\n<p>Margo, której rodzice nie mówią, kiedy ma wrócić do domu, Margo, która niemal od roku nie przespała porządnie nocy, kładzie się z&nbsp;Andrew na kanapie, a&nbsp;my wszyscy czekamy na naszą kolej. Margo, która przez ramię Andrew ogląda <em>MasterChefa</em>, udaje, że zamiast tego robi suflet. Margo, która w&nbsp;ostatniej kabinie damskiej ubikacji napisała kiedyś na jasnoróżowo „Margo to dziwka”, jest w&nbsp;kuchni ze światłem za zasłonami i&nbsp;żarem piekarnika na rękach, i&nbsp;zapachem wzniesionego wypieku w&nbsp;nozdrzach. Margo, która powiedziała rodzicom, że będzie nocować u&nbsp;Maggie, choć wcale jej nie pytali, próbuje nie myśleć o&nbsp;niedzieli.</p>\n<p>Margo, która ledwie moment temu wyszeptała na ucho Andrew „zabierz mnie proszę do domu”, Margo, która w&nbsp;wyszeptanej odpowiedzi usłyszała „za późno”. Margo, której imię i&nbsp;ciało jest tym, do czego wszyscy powracamy, leżąc samotnie w&nbsp;łóżkach, Margo, która jest imieniem, jakiego nie będziemy chcieli nawet wspomnieć po skończeniu szkoły, Margo, która nie zjawi się na pięcio-, dziesięcio-, piętnastoleciu matury, a&nbsp;nikt z&nbsp;nas nie będzie się dziwił, Margo, która w&nbsp;tej chwili tylko czeka, aż skończymy, Margo, Margo, Margo, która.</p>\n",
                "slug": "4_wszyscy-wiemy-o-margo"
            },
            {
                "title": "W nowym świecie",
                "content": "<p>Dziesiątego dnia deszczu znaleźliśmy altanę. Porastało ją kudzu, lecz jej dach był nietknięty, słupki mocne. Gina milczała, lecz sposób, w&nbsp;jaki kucała, z&nbsp;głową w&nbsp;dłoniach, mówił mi, że zostajemy tu na noc. Odłożyłam plecak i&nbsp;zaczęłam kopać pod kudzu w&nbsp;poszukiwania suchej rozpałki na ognisko.</p>\n<p>Dzieci cieszyły się z&nbsp;przerwy. Przez ostatni miesiąc pokonywaliśmy dwanaście mil dziennie, a&nbsp;Del, najstarszy, był chudy, cichy. Lila i&nbsp;Eckram wciąż mieli trochę energii do zabawy, ale gdy wrócili z&nbsp;garściami mchu na ognisko, zobaczyłam ich policzki — zapadłe, jakby ssali cytryny — i kazałam im usiąść. Zrobiłam dziurę w&nbsp;kudzu, rozpaliłam ognisko na betonie i&nbsp;wydałam racje: jeden plaster beef jerky, jedna cząstka suszonego mango.</p>\n<p>Gina nie jadła. Gdy myślała, że nie patrzę, przedarła swoje porcje na trzy i&nbsp;rozdała je dzieciom. Gapiła się w&nbsp;ogień, gmerała przy drewnianych koralach na szyi. Znalazła je sześć miesięcy temu w&nbsp;Traverse City w&nbsp;jakimś przegniłym butiku, który pewnie splądrowano w&nbsp;czasie zamieszek. To było, zanim znalazłyśmy dzieci, zaraz po tym, jak usłyszałyśmy o&nbsp;bezpiecznej strefie po drugiej stronie gór w&nbsp;Utah — gdzie, nikt nie był pewien. Gina wygrzebała te korale, wielkie jak piłki do golfa, ze sterty zżartych przez mole szali i&nbsp;wyszczerzyła zęby.</p>\n<p><em>Nie da się z nimi podróżować</em>, powiedziałam.</p>\n<p><em>Sara, one są lekkie</em>, odparła.&nbsp;<em>Schowam je pod koszulę.&nbsp;Widzisz?</em> Ich kontur falował jak kręgosłup w&nbsp;poprzek jej brzucha. Spała tak co noc, tuląc korale do skóry jak karmione niemowlę, kryjąc je przed wzrokiem. Poza jednym razem: śniłam, że jestem w&nbsp;domu mojej babci i&nbsp;śpię z&nbsp;nią w&nbsp;jej wielkim mosiężnym łóżku, a&nbsp;spory dąb przed domem drapie gałęziami o&nbsp;szybę. Słyszałam obok miękki oddech babci, czułam ręcznie robioną narzutę otuloną wokół szyi i&nbsp;byłam bezpieczna, i&nbsp;było mi ciepło, i&nbsp;wtedy znowu się obudziłam do znajomego chłodu, ale wciąż słyszałam drapanie. Otworzyłam oczy. Gina, z głową zwieszoną nad brzuchem w&nbsp;przyćmionym świetle, skrobała coś agrafką na powierzchni jednego z&nbsp;korali. To był obraz, coś, czego nie mogłam do końca rozpoznać. Nic nie powiedziałam, tylko na powrót zamknęłam oczy. To było na długo, nim zaufała mi na tyle, by pokazać, nad czym pracowała, lecz ta krótka chwila pozwoliła mi zrozumieć, po co jej były te korale.</p>\n<p>– Co to za miejsce? – spytała Lila. Skubała mango niczym mysz.</p>\n<p>– To altana – dodałam.</p>\n<p>– Do czego to służy? – spytał Eckram, oblizując palce. Del po prostu na mnie patrzył.&nbsp;<em>Kiedyś byłam księgową</em>, chciałam powiedzieć.&nbsp;<em>Wcześniej miałam mazdę i&nbsp;córeczkę, którą karmiłam w&nbsp;bujanym fotelu, słuchając NPR</em>.&nbsp;Ale tak wiele z&nbsp;tych słów — <em>księgowa</em>, <em>mazda</em>, <em>bujany fotel</em>, <em>NPR</em> — brzmiały jak obcy język. Nie znaczyły nic.</p>\n<p>– To schronienie – powiedziałam. – Dla wędrowców jak my.</p>\n<p>Potem, jak każdej nocy, głaskałam ich włosy. Mówiłam o&nbsp;miejscu po drugiej stronie gór, w&nbsp;którym było jedzenie, prycze, czysta woda. Mówiłam, że niedługo tam dotrzemy. Niedługo.<br />\nZerknęłam na Ginę. Spała, z&nbsp;naszyjnikiem rozciągniętym w&nbsp;poprzek piersi. Wczoraj w&nbsp;nocy skończyła skrobać na dziesiątym koralu: rozpostarła się flaga. Może z&nbsp;amerykańskiej rewolucji. Wyobraziłam sobie te korale pewnego dnia w&nbsp;muzeum — historia świata, który obrócił się w&nbsp;popiół, wyskrobana agrafką na każdym koralu. Zastanawiałam się, czy ludzie w&nbsp;nowym świecie będą znali słowo <em>muzeum</em>.</p>\n",
                "slug": "4_w-nowym-swiecie"
            },
            {
                "title": "Lily w świetle",
                "content": "<p>Lily nie śpi, lecz i tak próbuję wstać z&nbsp;łóżka bezszelestnie. Zasłony są zasunięte i&nbsp;otwieram je ciutkę, by do środka wpadł cienki promień światła, nie na tyle, by ktokolwiek z&nbsp;zewnątrz nas widział. Promień idzie do łóżka, do leżącego tam ciała, jakby ktoś złotym pędzlem nakreślił linię w poprzek jej brzucha, a&nbsp;pod tym liźnięciem złota jej skóra, och, skóra Lily zapala się jak jeden z&nbsp;tych papierowych lampionów, które podpalasz i&nbsp;posyłasz w&nbsp;niebo. Zamykam oczy i&nbsp;znowu je otwieram. Jeszcze mi nie zniknęła.<br />\nLily nie śpi, ale trwa bez ruchu, a&nbsp;jej włosy biegną w poprzek poduszki jak strumyk wody. Klękam obok niej. Nabieram je w&nbsp;dłoń zupełnie jak robili to Steven, Marcus, Ahmed, Dan, nim przykładali usta do jej szyi, gdy leżała tam nieruchomo, zupełnie jak ten malarz, który na powrót rozlał je w&nbsp;poprzek poduszki i&nbsp;powiedział, że jest jego muzą i&nbsp;teraz musi zastygnąć w bezruchu.<br />\nLily nie śpi, ale bezustannie jest w&nbsp;moim łóżku, patrząc ponad mną ku zasłonie, ku dziedzińcowi, ku pokojowi, w&nbsp;którym powinna była spędzić noc, ku ścieżce, prerii, setkom zwierząt, które się budzą, przeciągają, drepczą przez szepczącą trawę. Wypuszczam jej włosy z&nbsp;rąk. Obracam jej twarz ku sobie. Nie patrzy mi w oczy. Bez przerwy wypatruje za okno ku słońcu, strumieniowi, drogom, które idą jak strzały w&nbsp;głąb miasta, gdzie jej mąż wciąż pewnie śpi w&nbsp;ich łóżku. Przebiegam ręką od jej policzka do ramienia, krągłości piersi, wypukłości biodra, szczytu uda, gdzie włosy migoczą w&nbsp;złotym świetle, gdzie włosy przypominają puch królików skradających się ku nam przez gąszcz. Wiem, że to udo uchylało drzwi w setkach starych domów, przywierało do łydki, gdy kucała, by zrobić kolejne zdjęcie struktury cienia i&nbsp;światła. Wiem, że to udo napina się, gdy biegnie nocą przez miasto, a&nbsp;jedynym, co słyszy, jest dźwięk własnego oddechu w&nbsp;uszach i&nbsp;nikły wrzask syren. Wiem, że każdy mężczyzna, który wchodzi do jej łóżka, zakłada to udo wokół siebie tak samo, jak składa prześcieradło, które zaraz rzuca w&nbsp;kąt szafy. Wiem, że malarz składa jej uda w&nbsp;świetle tak samo, jak składa skrzydła papierowego żurawia, a&nbsp;potem śledzi oczami i&nbsp;pędzlem wzdłuż każdej zastygłej krągłości.<br />\nLily nie śpi, ale bezustannie jest w&nbsp;moim łóżku i&nbsp;trwa bez ruchu, jak to zawsze robi przy mężczyznach. Chcę do niej szepnąć, że tu, w&nbsp;tym łóżku jesteśmy kobietami i&nbsp;jesteśmy tylko my dwie na całym świecie.<br />\n<em>Taką mnie lubią</em>, mówi.<br />\n<em>Taką ja cię lubię</em>, odpowiadam i rozchylam jej nogi, i&nbsp;wkładam w&nbsp;nią język, i&nbsp;po raz pierwszy — ona żyje. Lily w&nbsp;świetle podskakuje jak strumyk wody na gorącej patelni, jak królik mknący przez gąszcz, jak puls w&nbsp;jej udzie, który tętni na moim policzku, gdy zakłada wokół mnie nogi. Kładę jedną rękę pod nią, a&nbsp;drugą na delikatnej wypukłości brzucha, na skórze, która jarzy się w&nbsp;świetle promienia i&nbsp;w&nbsp;tym świetle się poruszamy, w&nbsp;tym świetle jesteśmy zaślubione, w&nbsp;tym świetle tworzymy sztukę lepszą niż jakiegokolwiek mężczyzny, i&nbsp;nie mówię jej, nigdy jej nie powiem, ale w&nbsp;tym świetle czuję ukłucie żałoby, bo wiem, że podobnie jak to światło, ta sztuka przeminie.</p>\n",
                "slug": "4-lily-w-swietle"
            },
            {
                "title": "Gdy w twoim rodzinnym mieście zamknie się Wal-Mart",
                "content": "<p>Pozostaje cisza. Trzy puszki dyni pod mgiełką kurzu. Rozbity słój przetworów. Kałuże ciemności, mącone migotaniem umierającej świetlówki. &nbsp;Uschły wiecheć ogonków bananów, który jakieś dziecko wkopnęło miesiąc temu pod lodówkę z&nbsp;owocami morza. Szminki w&nbsp;kolorach Come Hither i&nbsp;Quiet Siren. Czerstwa piętka chleba. Wózki i&nbsp;koszyki — próżno czekać, by ktoś napełnił ich brzuchy towarami — gromadzą się tuż za szybą drzwi niczym kaczki w&nbsp;rogu stawu spokojnego jak tafla szkła. Monety rozsypane jak gwiazdozbiór. George, który zmiata duchy zostawionych przez klientów odcisków palców i&nbsp;czeka na telefon o&nbsp;przeniesieniu. Duch George’a, który zmiata paragony i&nbsp;foliówki szeleszczące jak liście, który wie, że ten telefon nigdy nie nadejdzie. Szczotka, która wie, że to koniec, której brakuje słów, by powiedzieć George’owi, że będzie za nim tęsknić i&nbsp;nie chce zostać sama. Szczotka, która może tylko wyszeptać <em>szszsz</em>, <em>szszsz</em>, <em>szszsz</em> po podłodze. Ostatnie z&nbsp;bukietów róż, ich płatki na krawędzi rozkładu, ułożone na stanowisku obsługi klienta jak ciała. Płynne echo Patsy Cline. Powietrze — niewprawiane w&nbsp;ruch przez klientów i&nbsp;ruchome drzwi — zaczęło już smakować jak wnętrze grobowca.<br />\nNa zewnątrz wciąż pali się światło. Jego promień wskazuje na bok budynku, niczym reflektor na scenie, jakby czekając na wejście solisty. Nad drzwiami kolejne światło rozjaśnia miejsce, w&nbsp;którym kiedyś była nazwa. W&nbsp;pustym, czarnym przestworzu parkingu miejsca parkingowe wciąż pamiętają samochody, dreszcz, który czuły, gdy samochody się w&nbsp;nie wsuwały, ich ciężar, który wypierał wszystko, co straszne. Pamiętają też ludzi: małolaty, które zaparkowały na skraju parkingu, by się pieprzyć, by zapomnieć — niemowlęta, które wrzeszczały, niemal połykając języki — kobiety, które potrzebowały jednego małego — mężczyzn, których stawy niemal tarły się na proch.<br />\nAle pamiętają też innych: niemowlęta, których twarze rozświetlał uśmiech, kobiety, które znosiły się śmiechem, mężczyzn, którzy truchtali przez parking, bo nie mogli się doczekać powrotu do domu, małolaty, które trwały w&nbsp;objęciach, bo możesz wsadzić fiuta niemal wszędzie i&nbsp;otworzyć nogi przed niemal każdym, ale jest tylko garstka osób, które dadzą ci miejsce, na którym oprzesz głowę.<br />\nI tak budynek i&nbsp;parking będą w&nbsp;żałobie po ludziach, bo nawet smutni ludzie czymś je wypełniali, a&nbsp;bez nich nie ma już nic. Jakiś czas będą w&nbsp;żałobie same. I pewnego dnia poczują, jak w&nbsp;miejsca pozostawione przez ludzi wściubiają się  palce korzeni. Oczyszczający potok wody przebiegnie jak łzy po betonowej powierzchni i&nbsp;przez alejki. Pnącza i&nbsp;gałęzie rozburzą je i uniosą, jak unosi się ciało osoby, która prawie umarła, jak unosi się ciało osoby, której ostatni oddech chce się czuć na policzku, a&nbsp;nie tylko słuchać z&nbsp;drugiego końca pokoju, i&nbsp;przez chwilę będą je trzymać w&nbsp;objęciach. Wody wymyją ból. I&nbsp;wtedy korzenie zaczną je na powrót składać razem z ziemią, którą pod sobą miały, aż budynek i&nbsp;parking staną się czymś nowym.<br />\nPewnego dnia, za wiele, wiele lat, w odwiedziny przyjdzie dziewczyna. Zdejmie buty, by poczuć pod stopami trawę. Zobaczy, jak drzewa zginają się nad jej głową, by chronić przed słońcem. Zrozumie, że to nowe jest znowu dobre, że ta pustka nie jest pustką, którą trzeba zapełnić, ale pustką rojącą się milionem różnych powitań. I&nbsp;gdy odejdzie, nowe będzie wiedziało, że wróci i&nbsp;przyprowadzi innych. Będzie wiedziało tak samo, jak można przyłożyć rękę do ziemi na koniec zimy i&nbsp;wiedzieć, że przez glebę ku górze pnie się zieleń.</p>\n",
                "slug": "4_gdy-w-twoim-rodzinnym-miescie-zamknie-sie-wal-mart"
            },
            {
                "title": "Margo. Skręć w lewo.",
                "content": "<p>Oto pierwszy liść, jego brzegi skrwawione żółcią. Oto rybołów, który łowi myszy z&nbsp;żerdzi na palmie w&nbsp;ogrodzie Mastersonów. Oto i&nbsp;pierwszy nocny chłód, co uderza nagle i&nbsp;mocno jak strzał z&nbsp;kija w&nbsp;czaszkę, gdy zachodzi słońce. Ale my ledwie to widzimy, bo wpatrujemy się w&nbsp;Margo, jak siedzi sama w&nbsp;swoim samochodzie na końcu ulicy.</p>\n<p>Stoi przed znakiem „Stop”, patrząc w&nbsp;lewo, w&nbsp;prawo, w&nbsp;lewo, a&nbsp;my nie widzimy jej twarzy, lecz widzimy jej dłoń stukającą w&nbsp;szybę i&nbsp;wszystkie wiemy, co robi. Nawet przez płot ogrodu Amy słyszymy to: dzwonienie jej obrączki ślubnej o&nbsp;szybę, to samo, które zawsze robi na imprezach, jakby chciała zwrócić uwagę wszystkich, by wygłosić toast, ale Margo nigdy nie ma nic do powiedzenia. Patrzymy na nią z&nbsp;drewnianych foteli nad brzegiem skąpanego w&nbsp;księżycowej poświacie basenu Amy i&nbsp;wszystkie słyszymy to dzyń, i&nbsp;jest to dźwięk lata.</p>\n<p>Ten dźwięk, ten dźwięk — zamykamy jednocześnie oczy i&nbsp;tutaj, znowu, jest Margo, Margo z&nbsp;fryzurą od drogiego stylisty i&nbsp;porcelanowymi zębami, Margo, która nalewa nam wszystkim kolejny kieliszek wina. Słyszymy to, a&nbsp;Margo otwiera rozsuwane drzwi i&nbsp;wkracza do naszych ogrodów, a&nbsp;nasi mężowie zawsze za nią idą, szczypce do grilla w&nbsp;ich dłoniach niczym pochodnie. Słyszymy to, a&nbsp;Margo rozbiera się do bikini i&nbsp;wślizguję pod powierzchnie naszych basenów, a&nbsp;nasi mężowie dzwonią swoimi przyrządami i&nbsp;zapominają o&nbsp;oddychaniu. Słyszymy to i&nbsp;czekamy na męża Margo, na to, aż wszystkie ptaki w&nbsp;sąsiedztwie wzbiją się w&nbsp;niebo jak płonące liście.</p>\n<p><em>Dzyń</em>, robi obrączka Margo o&nbsp;szkło, <em>dzyń</em>, <em>dzyń</em>, <em>dzyń</em>, a&nbsp;Nicki szczotkuje włosy swojego niemowlęcia, ale czuje tylko ciepłe złoto obrączki Margo na swojej szyi, gdy ciągnie ją za drzwi łazienki, żeby ją pocałować. <em>Dzyń</em>, a&nbsp;Amy gubi oczko w&nbsp;dzierganym szaliku, bo to dźwięk Margo stukającej w&nbsp;jej szklane drzwi o&nbsp;trzeciej w&nbsp;nocy, ale ona nigdy nie mówi <em>pomóż mi</em>. <em>Dzyń</em>, a&nbsp;Rachel niemal upuszcza pitą herbatę, bo ten dźwięk to Margo, wciąż z&nbsp;płaskim brzuchem, która pozwala, by jej kubek spadł z&nbsp;brzękiem na podłogę, gdy Rachel płacze, i&nbsp;przyciska dłoń do nabrzmiałego brzucha Raczel, mówiąc, <em>to, moja droga, jest magia</em>.&nbsp;<br />\nOto Margo, wciąż przed znakiem „Stop”, a&nbsp;my wszystkie wiemy, że lato nas opuszcza. Wszystkie wiemy, że jej torba jest spakowana, leząć na siedzeniu pasażera jak przyrzeczenie. Wszystkie wiemy, że jeśli odjedzie, liście spadną jak kurtyna, słońce się zatrzaśnie, a dzwonki, które dzwonią na każdej werandzie, gdy przechodzi obok, umrą. A oto i&nbsp;Margo, jeszcze z&nbsp;nami. Nadszedł czas na inkantację.&nbsp;<br />\nNicki szczotkuje włosy swojego niemowlęcia i&nbsp;z&nbsp;gładkością, z&nbsp;jaką rozchodzi się zapowiedź siniaka, ucina z&nbsp;nich lok. Rachel dopija herbatę i&nbsp;z&nbsp;szybkością, z&nbsp;jaką przesuwa się rygiel w&nbsp;drzwiach, wyrzuca fusy na swoją dłoń. Amy wysuwa druty z&nbsp;kłębka włóczki i&nbsp;z&nbsp;cichością, z&nbsp;jaką kobieta wymyka się przez boczne drzwi, stuka metalem w&nbsp;skórę swoich znajomych, a&nbsp;one opróżniają zawartość swoich rąk do basenu. Końcami drutów Amy miesza wodę w&nbsp;basenie niczym w&nbsp;kotle i&nbsp;wszystkie szepczemy słowa:</p>\n<p><em>Skręć w&nbsp;lewo, Margo.</em></p>\n<p><em>Margo. Skręć w&nbsp;lewo.</em></p>\n<p>Szepczemy je wciąż na nowo, cicho, by nie usłyszeli nas nasi mężowie, a&nbsp;przed nami woda wciąż wiruje, jakby coś ją zasysało. A gdy tak recytujemy, myśli o&nbsp;tym, czego nie możemy powiedzieć:&nbsp;<br />\n<em>Skręć w&nbsp;lewo, Margo.</em></p>\n<p>(bo jeśli to zrobisz, droga roztoczy się pod tobą, a&nbsp;niebo odzyska swój kolor, a&nbsp;ty znajdziesz dom, gdzie ptaki nie będą przypominać ci o&nbsp;śmierci).</p>\n<p><em>Margo. Skręć w&nbsp;lewo.</em></p>\n<p>(bo pewnego dnia, pewnego dnia, będziesz stała gdzieś w&nbsp;słonecznej kuchni, a&nbsp;ktoś przyłoży jedną rękę do policzka z&nbsp;samej tylko miłości, a&nbsp;drugą poda ci do ust brzoskwinię).</p>\n<p><em>Skręć w&nbsp;lewo, Margo.</em></p>\n<p>(bo przesiedziałaś w&nbsp;swoim samochodzie na końcu tej drogi już cztery lata i&nbsp;zawsze skręcasz w&nbsp;prawą, i&nbsp;wracasz do domu, i&nbsp;tym razem to może cię zabić, i&nbsp;to może być ostatnia twoja szansa).</p>\n<p><em>Margo. Skręć w&nbsp;lewo.</em></p>\n<p>(po upiłaś nas kiedyś wszystkie tequilą w&nbsp;swojej piwnicy i&nbsp;ustawiłaś nas w&nbsp;kręgu,&nbsp;powiedziałaś <em>Mam sekret</em> i&nbsp;wyszeptałaś:</p>\n<p>Do Nicki: <em>Kiedyś tu umarłam.</em><br />\nDo Amy: <em>Za późno.</em><br />\nDo Rachel: <em>Wciąż oglądam MasterChefa.</em></p>\n<p>A my nie rozumiałyśmy i&nbsp;nie zadawałyśmy pytań, i&nbsp;nie powtarzałyśmy tych słów nikomu, nawet sobie. Ale każdej nocy, gdy leżymy samotnie w&nbsp;łóżkach, oto Margo znów w&nbsp;piwnicy, oto Margo, przykładająca do ust butelkę Cuervo, i&nbsp;wszystkie myślimy tylko: <em>żal</em>, <em>żal</em>, <em>żal</em>).</p>\n<p>Oto liść, skrwawiony żółcią. Oto rybołów, na łowach. Oto pierwszy nagły strzał chłodu.</p>\n<p>A&nbsp;mimo to.<br />\nPatrzymy na Margo.<br />\nMieszamy wodę.<br />\nRecytujemy słowa, pięć, dziesięć, piętnaście razy:</p>\n<p><em>Skręć w&nbsp;lewo, Margo.</em></p>\n<p><em>Margo.</em></p>\n<p><em>Skręć w&nbsp;lewo.</em></p>\n",
                "slug": "4_margo-skrec-w-lewo"
            }
        ],
        "bio": {
            "title": "Meg Pillow",
            "content": "<p>Meg Pillow ma bardzo dużo osiągnięć. Tak dużo, że trudno wymienić.</p>\n",
            "slug": "4_meg-pillow"
        }
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
