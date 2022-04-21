let banner = function(){
    // Banner container
    let bannerContainer = document.createElement('div'); 
    bannerContainer.className = 'banner';
    // Banner title
    let bannerTitle = document.createElement('h3');
    bannerTitle.className = 'title';
    bannerTitle.innerText = 'Lucky Cafe';
    // Banner Overlay
    let bannerOverlay = document.createElement('div');
    bannerOverlay.className = 'overlay';
    // Banner image
    let bannerImage = document.createElement('img');
    bannerImage.src = '/assets/michael-dam-7Czv6Vm9Lf8-unsplash.jpg';
    bannerImage.alt = 'Photo by Michael Dam on Unsplash';
    bannerImage.className = 'banner-img';
    // Appending Chilren to banner container
    bannerContainer.appendChild(bannerTitle);
    bannerContainer.appendChild(bannerOverlay);
    bannerContainer.appendChild(bannerImage);
}

export default banner;