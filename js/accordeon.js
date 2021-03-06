const accordeon = () => {
    //Первый вариант
    /*const contents = document.querySelectorAll('.program-line__content')

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
    })*/


    //Второй вариант
    const contents = document.querySelectorAll('.program-line__content')
    const contentsDescr = document.querySelectorAll('.program-line__descr')

    contents.forEach((elem) => {
        const title = elem.querySelector('.program-line__title')
        const descr = elem.querySelector('.program-line__descr')

        descr.style.transition = 'height .3s'
        descr.style.overflow = 'hidden'

        title.addEventListener('click', () => {
            contentsDescr.forEach((tab) => {
                if (tab === descr) {
                    tab.style.height = tab.scrollHeight + 'px'
                } else {
                    tab.style.height = 0
                }
            })
        })
    })
}

accordeon()