# błyski

**błyski** (Polish for *flashes*) is an upcoming online literary magazine featuring flash fiction in Polish translation. It will be a minimalistic affair --- each issue will consist of five pieces by one author and their bio. 

The website is a **work in progress**. It uses a **React-based frontend** and **Wordpress as a headless CMS**. So far, it’s all functionality, zero design, but you can see a (very ugly) demo [here](https://blyski.netlify.app/).

* [Planned features](#planned-features)
* [Technicalities](#technicalities)

## Planned features

* **the main page** showing an expandable list of issues with links to individual texts;
* **the text page** displaying a chosen piece from a given issue or the author's bio;
* **the about section** in the form of a modal.

## Technicalities

* a single-page app created with **React.js**;
* app state controlled with **Redux**;
* routes managed with **React-Router**;
* neat styles thanks to **styled-components**;
* a blog section utilising **Wordpress API**;
* **Pose** to add extra oomph to animations.
