/* Get containers */

let cart_container = document.getElementsByClassName("cart_container")[0];
let order_element = document.getElementsByClassName("order_container")[0];
let nav_cart_display = document.getElementsByClassName("cart_amount_display")[0];

/* Keep Cart items number */

let display_cart_displayer = function(){
    let localStorageKeys = Object.keys(localStorage);
    let nr_items = 0;

    for (let key of localStorageKeys){
        let item = JSON.parse(localStorage.getItem(key));
        nr_items += item.amount;
    }

    nav_cart_display.innerHTML = nr_items;

    if(nav_cart_display.innerHTML > 0){
        nav_cart_display.classList.remove("hidden");
    } else {
        nav_cart_display.classList.add("hidden");
    }
}

display_cart_displayer();

/* Generate Total price */

let total_displayer = document.getElementsByClassName("total_price_items")[0];

let total_Calculate = function(){
    let localStorageKeys = Object.keys(localStorage);
    let totals = 0;

    for (let key of localStorageKeys){
        let item = JSON.parse(localStorage.getItem(key));
        totals += item.total;
    }

    total_displayer.innerHTML = totals;
}

total_Calculate();


/* Generate Cart Items Function */

let create_cart_items = function(){

cart_container.innerHTML = "";
let localStorageKeys = Object.keys(localStorage);


for (let key of localStorageKeys){
    let cart_object_value = localStorage.getItem(key);
    let cart_object = JSON.parse(cart_object_value);
    let cart_element = `
    
    <div class="cart_item" id="${cart_object.iD}">
        <div class="item_cart_image"><img src="${cart_object.image}" alt="an image"></div>
        <div class="item_cart_title">Example Item</div>
        <div class="total_price"><p>${cart_object.total}</p><span>$</span></div>
        <div class="item_cart_details">
            <div class="button_less amount_button"><button>-</button></div>
            <div class="item_cart_amount">${cart_object.amount}</div>
            <div class="button_more amount_button"><button>+</button></div>
        </div>
        <div><button class="remove_item">X</button></div>
    </div> 
    
    `

    cart_container.insertAdjacentHTML("beforeend", cart_element);
}

}


/* 
iD: id,
amount: amount,
price: price,
total: added_total_amount,
image: image
*/



/* Function which checks if cart is empty or not + generate empty cart function */

let generate_empty_cart = function(){

    cart_container.innerHTML = "";
    let empty_cart_item = `

    <div class="empty_cart">
        <h1>Cart is Empty!</h1>
        <p>Lets add something!</p>
        <img src="/src/images/empty_cart.png" alt="empty_cart">
    </div>

    `
    cart_container.insertAdjacentHTML("beforeend", empty_cart_item);

}

let generate_Cart = function(){

    if(cart_container.innerHTML == "" || localStorage.length == 0){

        if(order_element.classList.contains("hidden")){
            console.log("it is hidden already, no actions required");
        } else {
            order_element.classList.add("hidden");
        }
        generate_empty_cart();
        
    } else {

        if(order_element.classList.contains("hidden")){
            order_element.classList.remove("hidden");
        } else {
            console.log("it is visible already, no actions required");
        }
        create_cart_items();

    }


}

generate_Cart();


/* Event listener for cart buttons */

window.addEventListener("click", function(event){

    let clickedElement = event.target;
    let clickedElementParent = clickedElement.parentElement;
    let clickedElementGrandParent = clickedElementParent.parentElement;

    let grantparentID = clickedElementGrandParent.id;


    if(clickedElement.classList.contains("remove_item")){

        localStorage.removeItem(grantparentID);
        generate_Cart();
        display_cart_displayer();
        total_Calculate();
        
    } else if(clickedElementParent.classList.contains("amount_button")){
        
        let clickedElementID = clickedElementGrandParent.parentElement.id;
        let localyStoredItem = JSON.parse(this.localStorage.getItem(clickedElementID));
        let amount_display = clickedElementGrandParent.getElementsByClassName("item_cart_amount")[0].innerHTML;


        if(clickedElementParent.classList.contains("button_less") && amount_display > 0){
            
            if(amount_display == 1){

            } else {
                
                localyStoredItem.amount -= 1;
                localyStoredItem.total = localyStoredItem.price * localyStoredItem.amount;

            }
            
        } else if(clickedElementParent.classList.contains("button_more") && amount_display > 0){

            localyStoredItem.amount += 1;
            localyStoredItem.total = localyStoredItem.price * localyStoredItem.amount;
        }

        let stringifiedLocalyStoredItem = JSON.stringify(localyStoredItem);
        localStorage.setItem(clickedElementID, stringifiedLocalyStoredItem);
        generate_Cart();
        display_cart_displayer();
        total_Calculate();
    }


})