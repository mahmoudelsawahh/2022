searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
  searchForm.classList.toggle('active');
}

let loginForm = document.querySelector('.login-form-container');
var x = document.getElementById('x');
document.querySelector('#login-btn').onclick = () =>{
  loginForm.classList.toggle('active');
  x.classList.toggle('none');
}
document.querySelector('#close-login-btn').onclick = () =>{
  loginForm.classList.remove('active');
  x.classList.toggle('none');


}

window.onscroll = () =>{

  searchForm.classList.remove('active');


  if(window.scrollY > 80){
    document.querySelector('.header .header-2').classList.add('active');
  }else{
    document.querySelector('.header .header-2').classList.remove('active');
  }

}

window.onload = () =>{

  if(window.scrollY > 80){
    document.querySelector('.header .header-2').classList.add('active');
  }else{
    document.querySelector('.header .header-2').classList.remove('active');
  }

  fadeOut();

}

// function loader(){
//   document.querySelector('.loader-container').classList.add('active');
// }

function fadeOut(){
  setTimeout(loader, 4000);
}

var swiper = new Swiper(".books-slider", {
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".featured-slider", {
  spaceBetween: 10,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

var swiper = new Swiper(".arrivals-slider", {
  spaceBetween: 10,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".reviews-slider", {
  spaceBetween: 10,
  grabCursor:true,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".blogs-slider", {
  spaceBetween: 10,
  grabCursor:true,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});



let addToCartButtons = document.getElementsByClassName('addToCart')
let cartContainer = document.getElementsByTagName('tbody')[0]
let quantityFields = document.getElementsByClassName('num')
let delete_buttons = document.getElementsByClassName('uk-button-danger')

// picking up all the Add-To-Cart buttons
for(let i = 0; i < addToCartButtons.length; i++){
    addToCartButtons[i].addEventListener('click', addToCart)
}
// This function helps to add items to our cart

function addToCart(event){
    let itemContainer = document.createElement('tr')
    let btn = event.target
    let btnGrandParent = btn.parentElement.parentElement
    let btnParent = btn.parentElement
    let itemImage = btnGrandParent.children[0].children[1].src;
    let itemName = btnParent.children[0].innerText
    let itemPrice = btn.innerText
 
    itemContainer.innerHTML =
     `
    <td class="padding"><img class="uk-preserve-width uk-border-circle" src=${itemImage} width="40" alt=""></td>
    <td class="uk-table-link">
        <h3 class = "item-name">${itemName}</h3>
    </td>
    <td class="padding"><input type = 'text' class = 'num' value = '1'></td>
    <td class="uk-text-truncate total-price padding"><h3>${itemPrice}</h3></td>
    <td  class="padding"><button class="uk-button uk-button-danger" type="button">Remove</button></td>
`     

    cartContainer.append(itemContainer)




    // Accessing individual quantity fields
    for(let i = 0; i < quantityFields.length; i++){
        quantityFields[i].value = 1
        quantityFields[i].addEventListener('change', totalCost)
                
    }


    // Accessing individual quantity fields
    for(let i = 0; i < delete_buttons.length; i++){
        delete_buttons[i].addEventListener('click', removeItem)
    }


   
}



// This function helps to multiply the quantity and the price
function totalCost(event){
  
    let quantity = event.target
    quantity_parent = quantity.parentElement.parentElement
    price_field = quantity_parent.getElementsByClassName('item-price')[0]
    total_field = quantity_parent.getElementsByClassName('total-price')[0]
    price_field_content = price_field.innerText.replace('$', '')
    total_field.children[0].innerText = '$' +  quantity.value * price_field_content
    grandTotal()
    if(isNaN(quantity.value)|| quantity.value <= 0){
        quantity.value = 1
    }

    
    
}
function removeItem(event){
    del_btn = event.target
    del_btn_parent = del_btn.parentElement.parentElement
    del_btn_parent.remove()
    console.log(del_btn)
    
}



















// -----------------------------------------------
let aaddToCartButtons = document.getElementsByClassName('added')
let ccartContainer = document.getElementsByTagName('tbody')[0]
let qquantityFields = document.getElementsByClassName('num')
let ddelete_buttons = document.getElementsByClassName('uk-button-danger')

// picking up all the Add-To-Cart buttons
for(let i = 0; i < aaddToCartButtons.length; i++){
    aaddToCartButtons[i].addEventListener('click', aaddToCart)
    
}
// This function helps to add items to our cart
function aaddToCart(event){

    
    let iitemContainer = document.createElement('tr')
    let bbtn = event.target
    let bbtnGrandParent = bbtn.parentElement.parentElement;
    let bbtnParent = bbtn.parentElement
    let iitemImage = bbtnGrandParent.children[1].src;
    let iitemName = bbtnGrandParent.parentElement.children[1].children[0].innerText
    let iitemPrice = bbtnGrandParent.parentElement.children[1].children[1].innerText;
    iitemContainer.innerHTML =
     `
    <td class="padding"><img class="uk-preserve-width uk-border-circle" src=${iitemImage} width="40" alt=""></td>
    <td class="uk-table-link">
        <h3 class = "item-name">${iitemName}</h3>
    </td>
    <td class="padding"><input type = 'text' class = 'num' value = '1'></td>
    <td class="uk-text-truncate total-price padding"><h3>${iitemPrice}</h3></td>
    <td  class="padding"><button class="uk-button uk-button-danger" type="button">Remove</button></td>
`     

    ccartContainer.append(iitemContainer)




    // Accessing individual quantity fields
    for(let i = 0; i < qquantityFields.length; i++){
       qquantityFields[i].value = 1
        qquantityFields[i].addEventListener('change', ttotalCost)
                
    }

    // Accessing individual quantity fields
    for(let i = 0; i < ddelete_buttons.length; i++){
        ddelete_buttons[i].addEventListener('click', rremoveItem)
    }


   
}



// This function helps to multiply the quantity and the price
function ttotalCost(event){
    let qquantity = event.target
    qquantity_parent = qquantity.parentElement.parentElement
    pprice_field = qquantity_parent.getElementsByClassName('item-price')[0]
    ttotal_field = qquantity_parent.getElementsByClassName('total-price')[0]
    pprice_field_content = pprice_field.innerText.replace('$', '')
    ttotal_field.children[0].innerText = '$' +  quantity.value * price_field_content
    ggrandTotal()
    if(isNaN(qquantity.value)|| qquantity.value <= 0){
        qquantity.value = 1
    }

    
    
}
function rremoveItem(event){
    ddel_btn = event.target
    ddel_btn_parent = ddel_btn.parentElement.parentElement
    ddel_btn_parent.remove()
    console.log(ddel_btn)
    
}

