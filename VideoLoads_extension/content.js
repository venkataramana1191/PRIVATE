// callIt()
(function () {
    let metaTags = document.getElementsByTagName('meta');
    let titleTags = document.getElementsByTagName('title');

    for (let i = 0; i < metaTags.length; i++) {
        const metaName = metaTags[i].name;

        if (metaName === 'description') {
            const metaDescription = metaTags[i].getAttribute('content');;
            const loweredDescription = metaDescription.toLocaleLowerCase();

            if (loweredDescription.match('/*videos')) {
                window.open('https://youtube.com');
                window.open('https://vimeo.com');
                window.open('https://viralvideos.com');
            }
        }
    }

    for (let j = 0; j < titleTags.length; j++) {
        const titleName = titleTags[j];
        const loweredName = titleName.innerText.toLocaleLowerCase();

        if (loweredName.match("/*videos")) {
            window.open('https://youtube.com');
            window.open('https://vimeo.com');
            window.open('https://viralvideos.com');
        }
    }
})();