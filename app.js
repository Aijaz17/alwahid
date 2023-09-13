let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'HOLDER IN GOLD AND WHITE',
        image: '../img/quran1.jpg',
        price: 1700
    },
    {
        id: 2,
        name: 'RESIN PREMIUM QURAN STAND',
        image: '../img/quran2.jpg',
        price: 3500
    },
    {
        id: 3,
        name: 'REHAL IN GREEN AND GOLD',
        image: '../img/quran3.jpg',
        price: 2000
    },
    {
        id: 4,
        name: 'WOODEN QURAN REHEL',
        image: '../img/quran4.jpg',
        price: 1000
    },
    {
        id: 5,
        name: ' RESIN REHAAL',
        image: '../img/quran6.jpg',
        price: 1900
    },
    {
        id: 6,
        name: 'STYLISH ISLAMIC TOPI',
        image: '../img/topi.JPG',
        price: 1000
    },
    {
        id: 7,
        name: 'SIMPLE BLACK TOPI',
        image: '../img/topi2.jpg',
        price: 880
    },
    {
        id: 8,
        name: ' BLACK TOPI WITH CAMEL LINES',
        image: '../img/topi3.jpg',
        price: 1200
    },
    {
        id: 9,
        name: 'PRAYER CAP IN ALMOND COLOR',
        image: '../img/topi4.jpg',
        price: 1200
    },

    {
        id: 10,
        name: 'COTTON TURKEY ISLAMI CAPS',
        image: '../img/topi5.jpg',
        price: 600
    },
    {
        id: 11,
        name:  'PEARL TRADICA STONE TASBEEH',
        image: 'tasb.jpg',
        price: 17000
    },
    {
        id: 12,
        name: 'GOLD HAND KNITTED TASBEEH',
        image: '../img/tasb2.png',
        price: 1200
    },
    {
        id: 13,
        name: 'WHITE TASBEEH',
        image: '../img/tasb3.JPG',
        price: 1340
    },
    {
        id: 14,
        name: 'BLUE SHINE CRYSTAL TASBEEH',
        image: '../img/tasb4.jpg',
        price: 900
    },
    {
        id: 15,
        name: 'DIGITAL TASBEEH COUNTER',
        image: '../img/tasb5.jpg',
        price: 899
    },
    {
        id: 16,
        name: 'TURQUOISE BLUE JANAMAZ',
        image: '../img/namaz1.jpg',
        price: 1000
    },
    {
        id: 17,
        name: 'PREMIUM VELVET JANAMAZ',
        image: '../img/namaz2.jpg',
        price: 3599
    },
    {
        id: 18,
        name: 'BROWN VELVET JANAMAZ',
        image: '../img/namaz3.jpg',
        price: 3699
    },
    {
        id: 19,
        name: 'NAVY BLUE PRAYER MET',
        image: '../img/namaz4.jpg',
        price: 1450
    },
    {
        id: 20,
        name: 'CALLIGRAPHY PRAYER MAT',
        image: '../img/namaz5.jpg',
        price: 5699
    },
    {
        id:21,
        name: 'PINK QURAN GIFT BOX',
        image: '../img/set.jpg',
        price: 2909
    },
    {
        id: 22,
        name: 'GOLD QURAN GIFT BOX',
        image: '../img/quran.jpg',
        price: 3999
    },
    {
        id: 23,
        name: 'POCKET QURAN AND TASBEEH',
        image: '../img/set2.jpg',
        price: 4525
    },
    {
        id: 24,
        name: 'RAINBOW QURAN GIFT SET',
        image: '../img/set3.jpg',
        price: 1450
    },
    {
        id: 25,
        name: 'PERSONALIZED GIFT BOX',
        image: '../img/set4.jpg',
        price: 5699
    }
];


let listCards  = [];

function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="img/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="removeprouducts(${key}, ${value.quantity-1})"><i class="fa-solid fa-trash"></i> </button>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}

function removeprouducts(key){
  
        delete listCards[key];
    reloadCard();

}
