const contents = document.querySelectorAll('.program-line__content')

contents.forEach((elem) => {
    const title = elem.querySelector('.program-line__title');

    title.addEventListener('click', () => {
        contents.forEach((el) => {
            const descr = el.querySelector('.program-line__descr');
            if (el === elem) {
                descr.classList.toggle('active');
            }
            else {
                descr.classList.remove('active');
            }
        }) 
    })
})
