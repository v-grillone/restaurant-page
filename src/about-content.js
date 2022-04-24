let aboutContent = function(){
    //div container
    let aboutDiv = document.createElement('div');
    aboutDiv.id = 'about';
    aboutDiv.className = 'content';
    //h1
    let aboutH1 = document.createElement('h1');
    aboutH1.innerText = 'About';
    //p
    let aboutP = document.createElement('p');
    aboutP.innerText = 'Let us tell you a little about us...'
    //contructing the html
    aboutDiv.appendChild(aboutH1);
    aboutDiv.appendChild(aboutP);
    return aboutDiv;
};

export default aboutContent