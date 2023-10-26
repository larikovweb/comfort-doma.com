function preloaderFunc () {
    let preloader = document.querySelector('.preloader'),
        body = document.querySelector('body');
        body.classList.add('hidden');
        preloader.classList.add('active');
        setTimeout(function() {
          preloader.classList.add('inactive');
        setTimeout(()=> {
            preloader.classList.remove('active')
        }, 2500);
    }, 3500);
    setTimeout(() => {
        body.classList.remove('hidden');
    }, 4500);
};
preloaderFunc();