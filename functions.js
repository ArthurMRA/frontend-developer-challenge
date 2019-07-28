/* objeto resposavel por guardar o numero da pagina atual */
const actualPage = {
    number: 1
}


/* metodo responsavel por modificar a pagina, adicionando uma oferta ao campo de ofertas especiais(identificado com a tag "special-offers") */
const updateScreen = (offer) => {
    const specialOffers = document.querySelector('#special-offers')

    const div = document.createElement('div')
    div.classList.add('offer')
    div.innerHTML += `<img src = "https://${offer.image}" alt = "${offer.name}" title = "${offer.image}" >`

    const div_name = document.createElement('div')
    div_name.id = "name"
    div_name.innerHTML += offer.name

    const div_description = document.createElement('div')
    div_description.id = 'description'
    div_description.innerHTML += offer.description

    const div_old_price = document.createElement('div')
    div_old_price.id = 'old-price'
    div_old_price.innerHTML += `De R$${offer.oldPrice.toFixed(2)}`

    const div_price = document.createElement('div')
    div_price.id = 'price'
    div_price.innerHTML += `Por R$${offer.price.toFixed(2)}`

    const div_installment_value= document.createElement('div')
    div_installment_value.id = 'installment-value'
    div_installment_value.innerHTML += `ou ${offer.installments.count}x de R$${offer.installments.value.toFixed(2)}`
    
    const div_buy = document.createElement('button')
    div_buy.id = 'buy'
    div_buy.innerHTML += 'Comprar'

    div.appendChild(div_name)
    div.appendChild(div_description)
    div.appendChild(div_old_price)
    div.appendChild(div_price)
    div.appendChild(div_installment_value)
    div.appendChild(div_buy)

    specialOffers.appendChild(div)     
}

/* metodo responsavel por realizar uma requisicao do tipo get e conseguir os dados dos produtos a serem mostrados */
const updateOffers = (URL) => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', URL, true)

    xhr.onload = e => {
        if (xhr.status >= 200 && xhr.status < 300) {
            const response = JSON.parse(xhr.response)
            response.products.forEach(e => updateScreen(e))
            actualPage.number++
        } else if (xhr >= 400) {
            console.log(xhr.status, xhr.statusText)
        }
    }

    xhr.send()
}

/* metodos resposaveis por validar os campos de email e nome do amigo(a) a ser indicado */
const validateEmail = (email) => {
    /* 
    o regex abaixo foi obtido do seguinte topico do stack overflow: https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript .
    ele nao pode ser considerado o "mais correto", mas valida de forma correta em bastante casos.
    */
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
}


const validadeName = (name) => {
    let re = /^[a-zA-Z\s]*$/
    /* apenas nomes que contenham espacos e letras maiusculas ou minusculas, alem de nao serem vazios, sao considerados validos */
    return re.test(String(name))
}


/* chamada do metodo updateOffers para atualizar o campo special-offers com as 8 primeiras ofertas */
updateOffers(`https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=${actualPage.number}`)

/* adicionando EventListeners aos botoes responsáveis por atualizar a selecao de produtos e enviar um email para um amigo */
document.querySelector('#more-offers').addEventListener('click',  function(){ updateOffers(`https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=${actualPage.number}`); })
document.querySelector('#send-button').addEventListener('click', () => {
            if (!validateEmail(document.querySelector('#friend-email').value) || !validadeName(document.querySelector('#friend-name').value)) {
                alert('Email ou nome inválido. Por favor, revise-os e tente novamente')
            } else {
                alert('Seu amigo ficará muito feliz com as ofertas ;)')
            } 
    })


