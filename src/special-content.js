let specialContent = function(){
    //div container
    let specialDiv = document.createElement('div');
    specialDiv.id = 'special';
    specialDiv.className = 'content';
    specialDiv.classList.add('active');
    //h1
    let specialH1 = document.createElement('h1');
    specialH1.innerText = 'Special';
    //p
    let specialP = document.createElement('p');
    specialP.innerText = 'Check out our signature special...'
    //contructing the html
    specialDiv.appendChild(specialH1);
    specialDiv.appendChild(specialP);
    return specialDiv;
};

export default specialContent