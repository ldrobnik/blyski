import React from 'react';
import {ThemeProvider} from 'styled-components';
import ReactGA from 'react-ga';
import Home from './components/Home/Home';

//Google Analytics code
const ANALYTICS_KEY = process.env.REACT_APP_ANALYTICS_KEY; // Google analytics API key
ReactGA.initialize(ANALYTICS_KEY);

// ReactGA.initialize(ANALYTICS_KEY, { testMode: true });
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {

    // Theme to be used in the project, two primary colors depending on redux state
    const theme = {
        //colours
        darkColor: '#0f0f0f',
        lightColor: '#fff',
        themeColor: '#f04b23',
        lightThemeColor: '#fcd8cf',
        background: 'rgba(40,40,40,0.1)',

        //fonts
        sansSerif: `'Maven Pro', sans-serif`,
        serif: `'Roboto Slab', serif`,

        //font sizes
        titleSize: '5em',
        subtitleSize: '1.5em',
        bodySize: '1.3em',
        captionSize: '1em',
        smallCaptionSize: '0.8em',

        //breakpoints
        veryTinyScr: '250px',
        tinyScr: '350px',
        extraSmallScr: '380px',
        smallScr: '630px',
        mediumScr: '750px',
        largeScr: '1000px',
        extraLargeScr: '1600px',
        hugeScr: '2100px',

        //opacity
        slightlyTranslucent: '0.7',
        translucent: '0.5',
        transparent: '0.1',

        //animations
        pulsateAnimation: '0.8s ease-in-out infinite',
        blurAnimation: '6s ease-out alternate infinite',
        popAnimation: '0.5s ease-in-out 1',
        fadeInAnimation: '0.7s ease-in-out 1',

        //blur filter
        lightBlur: '3px',
        heavyBlur: '8px',

        //spacing
        navIconMargin: '0.1em',
        navIconPadding: '0.6em'
    };

    return (
        <ThemeProvider theme={theme}>
            <Home/>
        </ThemeProvider>
    );
}

export default App;
