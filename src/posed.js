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