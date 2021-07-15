/* POSED COMPONENTS */

import posed from "react-pose";

/* General */

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

/* AuthorPhoto.js */

export const AnimatedAuthorPic = posed.div({
    visible: {
        transform: 'scale(1, 1)',
        opacity: 1,
        duration: 200,
        delay: 500,
        transition: {
            type: 'spring',
            stiffness: 100
        }
    },
    hidden: {
        transform: 'scale(1, 0)',
        opacity: 0
    }
});