import tabs from './tabs.js';
import tabContent from './tab-content.js';
import aboutContent from './about-content.js';
import contactContent from './contact-content.js';
import specialContent from './special-content.js';
import tabFunctionality from './tabs-functionality.js';
import './styles/styles.css';
//content 
let content = document.getElementById('content');
//html build
let tabsBuild = tabs();
let tabContentBuild = tabContent();
let aboutContentBuild = aboutContent();
let specialContentBuild = specialContent();
let contactContentBuild = contactContent();
//appending to dom
content.appendChild(tabsBuild);
content.appendChild(tabContentBuild);
let tabContentSection = document.getElementById('tab-content');
tabContentSection.appendChild(aboutContentBuild);
tabContentSection.appendChild(specialContentBuild);
tabContentSection.appendChild(contactContentBuild);
tabFunctionality();

console.log('Ciao');