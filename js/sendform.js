const sendform = () => {
    const form = document.querySelector('.modal')

    form.addEventListener('submit', (event) => {
        event.preventDefault()

        //let formData = new FormData([form]);

        const text = form.querySelector('input[type=text]')
        const tel = form.querySelector('input[type=tel]')
        const email = form.querySelector('input[type=email]')

        const sendObj = {
            name: text.value,
            phone: tel.value,
            email: email.value
        }

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(sendObj),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
            .then((response) => {
                if (response.status != 201) {
                    alert('Ошибка отправки формы');
                }
                   return response.json()
            })
            .then((json) => console.log(json))
            .finally(() => {
                console.log('Форма очищена');
            })
        form.reset();
        
    })

}

sendform()