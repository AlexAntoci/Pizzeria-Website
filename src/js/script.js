

/* getting needed elements */


let menuContainer = document.getElementById("M1");




/* Storing menu items as objects within an array */

let allMenuItems = [
    [],
    [],
    [],
    []
];





/* Keep Cart items number */

let nav_cart_display = document.getElementsByClassName("cart_amount_display")[0];

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


/* Creating menu item class so we can create menu items easier + method calling class and add the objects in arrays based on category */

class menuItem {

    constructor(itemName, itemDescription, itemPrice, itemCategory, itemID, itemImage){
        this.itemName = itemName;
        this.itemDescription = itemDescription;
        this.itemPrice = itemPrice;
        this.itemCategory = itemCategory;
        this.itemID = itemID;
        this.itemImage = itemImage;
    }

}

let storeMenuItems = function(itemName, itemDescription, itemPrice, itemCategory, itemID, itemImage){

    switch(itemCategory){
        case "Pizza":
            allMenuItems[0].push(new menuItem(itemName, itemDescription, itemPrice, itemCategory, itemID, itemImage));
            break;
        case "Salad":
            allMenuItems[1].push(new menuItem(itemName, itemDescription, itemPrice, itemCategory, itemID, itemImage));
            break;
        case "Drinks":
            allMenuItems[2].push(new menuItem(itemName, itemDescription, itemPrice, itemCategory, itemID, itemImage));
            break;
        case "Snacks":
            allMenuItems[3].push(new menuItem(itemName, itemDescription, itemPrice, itemCategory, itemID, itemImage));
            break;
        default:
            console.log("Not valid Category");
    }
}




/* Creating items and storing them in array */
storeMenuItems("Rancho Pizza", "This pizza contains chicken, cheese and peppers. A classic!", 20, "Pizza", 10000, "/src/images/pizza_rancho.png");
storeMenuItems("Pepperoni Pizza", "Classic choice. Pizza which contains delicous pepperoni disks.", 15, "Pizza", 20000, "/src/images/pizza_pepperoni.png");
storeMenuItems("Onion Pizza", "Pizza which contains pieces of fried onion, giving it an impeccable taste.", 15, "Pizza", 40000, "/src/images/pizza_onion.webp");
storeMenuItems("Mushroom Pizza", "Pizza with delicious mushrooms and olives.", 20, "Pizza", 60000, "/src/images/pizza_mushroom_olives.webp");
storeMenuItems("Pizza Milano", "Traditional italian pizza which contains an interesting combination of chicken meat and vegetables.", 25, "Pizza", 70000, "/src/images/pizza_le_milano.webp");
storeMenuItems("Cheese Pizza", "Perfect choice for our Vegan costumers.", 10, "Pizza", 80000, "/src/images/pizza_cheese_vegan.png");

storeMenuItems("Olivie Salad", "Traditional slavic salad.", 15, "Salad", 11000, "/src/images/salad_olivie.jpg");
storeMenuItems("Greek Salad", "Tradition Greek salad, known for its delicious feta cheese.", 20, "Salad", 21000, "/src/images/salad_greek.png");
storeMenuItems("Salad Caesar", "Salad with pieces of bread and meat combined with fresh vegetables.", 20, "Salad", 31000, "/src/images/salad_caesar.png");
storeMenuItems("Avocado Salad", "Delicious salad with Avocado and other fresh vegetables.", 25, "Salad", 41000,  "/src/images/salad_avocado.png");

storeMenuItems("Orange Juice", "Sweet and refreshing orange juice.", 5, "Drinks", 11100,  "/src/images/juice_orange.png");
storeMenuItems("Lemonade", "Refreshing lemonade which has the perfect level between sweet and sour.", 6, "Drinks", 11200, "/src/images/juice_lemon.png");
storeMenuItems("Chocolate Milkshake", "Best choice. Crazily delicious choco-milk drink.", 10, "Drinks", 11300, "/src/images/juice_chocolate.jpg");
storeMenuItems("Banana Milkshake", "Classic milkshake. Tastes exotic!", 10, "Drinks", 11400,  "/src/images/juice_banana.png");
storeMenuItems("Strawberry Milkshake", "Feeling special? Then this drink is for you!", 10, "Drinks", 11500,  "/src/images/juice_strawberry.webp");

storeMenuItems("Potatoe Fries", "Crunchy fries, perfect combined with all our pizzas!", 10, "Snacks", 11110, "/src/images/snack_potatoe_fries.png");
storeMenuItems("Fried Vegetables", "Juicy fried vegetables ready to be served!", 10, "Snacks", 11120, "/src/images/snack_fried_vegetables.png");
storeMenuItems("Chicken Nuggets",  "Burger made with love (+ Beef, cheese and pickles!).", 25, "Snacks", 11130, "/src/images/snack_chicken_nuggets.png");
storeMenuItems("Burger", "Delicious salad with Avocado and other fresh vegetables.", 25, "Snacks", 11140,  "/src/images/snack_burger.jpg");



/* Menu - displaying items function */


let addItems = function(array, containerElement){
    containerElement.innerHTML = "";
    switch(containerElement){
        case menuContainer:
            for(i = 0; i < array.length; i++){
                let item;
                item = `
                        <div class="menu_item" id="${array[i].itemID}">
                            <h3 class="item_name">${array[i].itemName}</h3>
                            <div class="item_image"><img src="${array[i].itemImage}" alt="pizza image"></div>
                            <p class="item_description">${array[i].itemDescription}</p>
                            <div class="item_details">
                                <div class="item_price"><span class="price">${array[i].itemPrice}</span>$</div>
                                <div class="item_quantity">
                                    <button class="increase quantity_button">+</button>
                                    <div class="quantity_display">1</div>
                                    <button class="decrease quantity_button">-</button>
                                </div>
                            </div>
                            <div class="add_cart_container">
                                <button class="add_cart_button">Add Cart</button>
                            </div>
                        </div>
                    `;
                    containerElement.insertAdjacentHTML("beforeend", item);
            }
            break;
        default:
            console.log('invalid Container to perform operation');
    }
   
}

addItems(allMenuItems[0], menuContainer);



/* Menu - add/remove amount in Amount Displayer */

let add_remove_itemCounter = function(symbol, counterAmount){
    let amount = parseInt(counterAmount[0].innerHTML);
    if (symbol == "-" && amount > 0){
        let newValue = amount - 1;
        counterAmount[0].innerHTML = newValue;
    } else if (symbol == "+"){
        let newValue = amount + 1;
        counterAmount[0].innerHTML = newValue;
    } else {
        console.log('Invalid symbol!');
    }
};

/* Menu - add/update in cart */

let cartArray = [{
    /* iD: 0,
    amount: 0,
    price: 0,
    total: 0,
    image: "image" */

}];
let cartNumber = 0;

let add_update_cart = function(item, price, amount, id, image){

   

    let cart_display_element = document.getElementsByClassName("cart_amount_display")[0];
    let cart_display_value = parseFloat(cart_display_element.innerHTML);

    let added_total_amount = price * amount;

/* 
    console.log("item: ", item);
    console.log("price: ", price);
    console.log("amount: ", amount);
    console.log("ID: ", id);
    console.log("total: ", added_total_amount); */


    /* let resultOfSearch = cartArray.some((element) => element.iD == id); */

    let localStorageKeys = Object.keys(localStorage);

    let resultOfSearch = function(){
        for(let key of localStorageKeys){
            if(key == id){
                return true;
            }
        }
    }

    console.log(resultOfSearch())

    if(resultOfSearch()){
       /*  let cart_item = cartArray.find((element) => element.iD == id); */
        let cart_item = JSON.parse(localStorage.getItem(id));
        cart_item.amount += amount;
        cart_item.total += added_total_amount;
        localStorage.setItem(id, JSON.stringify(cart_item));
    } else {
        let addingElement = {

            iD: id,
            amount: amount,
            price: price,
            total: added_total_amount,
            image: image

        }
        cartArray.push(addingElement);
        localStorage.setItem(id, JSON.stringify(addingElement));
    }


    cart_display_element.innerHTML = cart_display_value + amount;
 
}


/* Menu - Add event listeners to Menu Buttons */

let menuNavButtons = document.getElementsByClassName("nav_button");


document.addEventListener("click", function(event){
    let clickedElement = event.target;
    if (clickedElement.classList.contains("nav_button")){
        let elementID = clickedElement.id;
        let convertedID = parseInt(elementID);
        addItems(allMenuItems[convertedID], menuContainer);
    } else if (clickedElement.classList.contains("quantity_button")){

        let parentElement = clickedElement.parentElement;
        let amountDisplay = parentElement.getElementsByClassName("quantity_display");
        add_remove_itemCounter(clickedElement.innerHTML, amountDisplay);
    } else if (clickedElement.classList.contains("add_cart_button")){


        let parentElement = clickedElement.parentElement;
        let grandparentElement = parentElement.parentElement;
        let grandparentElementID = parseInt(grandparentElement.id);

        let getDetails = grandparentElement.getElementsByClassName("item_details")[0];

        let detailsPrice = getDetails.getElementsByClassName("item_price")[0];
        let price = parseInt(detailsPrice.getElementsByClassName("price")[0].innerHTML);

        let detailsAmount = getDetails.getElementsByClassName("item_quantity")[0];
        let amountDisplay = parseInt(detailsAmount.getElementsByClassName("quantity_display")[0].innerHTML);
        
        let elementImage = grandparentElement.getElementsByClassName("item_image")[0];
        let elementImageIMG = elementImage.childNodes[0].src;

        add_update_cart(parentElement, price, amountDisplay, grandparentElementID, elementImageIMG);
        display_cart_displayer();
    }
})


/* Carousel Script */

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].classList.remove("hidden");
  slides[slideIndex-1].style.display = "block";
}




