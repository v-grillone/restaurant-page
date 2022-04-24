let contactContent = function(){
    //div container
    let contactDiv = document.createElement('div');
    contactDiv.id = 'contact';
    contactDiv.className = 'content';
    //h1
    let contactH1 = document.createElement('h1');
    contactH1.innerText = 'Contact';
    //p
    let contactP = document.createElement('p');
    contactP.innerText = 'You can contact us at...'
    //contructing the html
    contactDiv.appendChild(contactH1);
    contactDiv.appendChild(contactP);
    return contactDiv;
};

export default contactContent