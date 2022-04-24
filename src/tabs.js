let tabs = function(){
    //tabs div
    let tabsDiv = document.createElement('div');
    tabsDiv.className = 'tabs';
    tabsDiv.id = 'tabs';
    //creating each individual tab
    let tabsUl = document.createElement('ul');
    tabsUl.className = 'tabs-list';
    let aboutLi = document.createElement('li');
    let specialLi = document.createElement('li');
    let contactLi = document.createElement('li')
    aboutLi.textContent = 'About';
    aboutLi.dataset.tab = '#about';
    specialLi.textContent = 'Special';
    specialLi.dataset.tab = '#special';
    specialLi.classList.add('active');
    contactLi.textContent = 'Contact';
    contactLi.dataset.tab = '#contact';
    //building html
    tabsDiv.appendChild(tabsUl);
    tabsUl.appendChild(aboutLi);
    tabsUl.appendChild(specialLi);
    tabsUl.appendChild(contactLi);
    return tabsDiv;
};

export default tabs;