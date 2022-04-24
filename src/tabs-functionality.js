let tabFunctionality = function(){
    const tabs = document.querySelectorAll('[data-tab]');
    const tabContents = document.querySelectorAll('.content');

    tabs.forEach( tab => {
        tab.addEventListener('click', () => {
            const target = document.querySelector(tab.dataset.tab);
            tabContents.forEach(tabContent => {
                tabContent.classList.remove('active');
            })
            tabs.forEach(tab => {
                tab.classList.remove('active');
            })
            tab.classList.add('active');
            target.classList.add('active');
        })
    })

};

export default tabFunctionality