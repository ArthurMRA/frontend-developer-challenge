const nextOffers = {
    url: '',
    getURL: () => this.url,
    setURL: function(responseURL) {this.url = responseURL}
}

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

const updateOffers = (URL, nextOffers) => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', URL, true)

    xhr.onload = e => {
        if (xhr.status >= 200 && xhr.status < 300) {
            const response = JSON.parse(xhr.response)
            response.products.forEach(e => updateScreen(e))
            nextOffers.setURL(response.nextPage)
        } else if (xhr >= 400) {
            console.log(xhr.status, xhr.statusText)
        }
    }

    xhr.send()
}

document.querySelector('#more-offers').addEventListener("click", updateOffers(`https://${nextOffers.getURL()}`, nextOffers))

updateOffers('https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1', nextOffers)

