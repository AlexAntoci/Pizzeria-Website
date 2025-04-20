

/* getting needed elements */


let menuContainer = document.getElementById("M1");


/* Storing menu items as objects within an array */

let allMenuItems = [
    [
        {
            itemName: "Rancho Pizza",
            itemDescription: "This pizza contains chicken, cheese and peppers. A classic!",
            itemPrice: 20,
            itemCategory: "Pizza",
            itemID: 10000,
            itemImage: "/src/images/pizza_rancho.png"
        },
        {
    
            itemName: "Pepperoni Pizza",
            itemDescription: "Classic choice. Pizza which contains delicous pepperoni disks.",
            itemPrice: 15,
            itemCategory: "Pizza",
            itemID: 20000,
            itemImage: "/src/images/pizza_pepperoni.png"
        },
        {
    
            itemName: "Onion Pizza",
            itemDescription: "Pizza which contains pieces of fried onion, giving it an impeccable taste.",
            itemPrice: 15,
            itemCategory: "Pizza",
            itemID: 40000,
            itemImage: "/src/images/pizza_onion.webp"
        },
        {
    
            itemName: "Mushroom Pizza",
            itemDescription: "Pizza with delicious mushrooms and olives.",
            itemPrice: 20,
            itemCategory: "Pizza",
            itemID: 60000,
            itemImage: "/src/images/pizza_mushroom_olives.webp"
        },
        {
    
            itemName: "Pizza Milano",
            itemDescription: "Traditional italian pizza which contains an interesting combination of chicken meat and vegetables.",
            itemPrice: 25,
            itemCategory: "Pizza",
            itemID: 70000,
            itemImage: "/src/images/pizza_le_milano.webp"
        },
        {
    
            itemName: "Cheese Pizza",
            itemDescription: "Perfect choice for our Vegan costumers.",
            itemPrice: 10,
            itemCategory: "Pizza",
            itemID: 80000,
            itemImage: "/src/images/pizza_cheese_vegan.png"
        }
    ],
    [
        {
    
            itemName: "Olivie Salad",
            itemDescription: "Traditional slavic salad.",
            itemPrice: 15,
            itemCategory: "Salad",
            itemID: 11000,
            itemImage: "/src/images/salad_olivie.jpg"
        },
        {
    
            itemName: "Greek Salad",
            itemDescription: "Tradition Greek salad, known for its delicious feta cheese.",
            itemPrice: 20,
            itemCategory: "Salad",
            itemID: 21000,
            itemImage: "/src/images/salad_greek.png"
        },
        {
    
            itemName: "Salad Caesar",
            itemDescription: "Salad with pieces of bread and meat combined with fresh vegetables.",
            itemPrice: 20,
            itemCategory: "Salad",
            itemID: 31000,
            itemImage: "/src/images/salad_caesar.png"
        },
        {
    
            itemName: "Avocado Salad",
            itemDescription: "Delicious salad with Avocado and other fresh vegetables.",
            itemPrice: 25,
            itemCategory: "Salad",
            itemID: 41000,
            itemImage: "/src/images/salad_avocado.png"
        }
    ],
    [
        {
    
            itemName: "Orange Juice",
            itemDescription: "Sweet and refreshing orange juice.",
            itemPrice: 5,
            itemCategory: "Drinks",
            itemID: 11100,
            itemImage: "/src/images/juice_orange.png"
        },
        {
    
            itemName: "Lemonade",
            itemDescription: "Refreshing lemonade which has the perfect level between sweet and sour.",
            itemPrice: 6,
            itemCategory: "Drinks",
            itemID: 11200,
            itemImage: "/src/images/juice_lemon.png"
        },
        {
    
            itemName: "Chocolate Milkshake",
            itemDescription: "Best choice. Crazily delicious choco-milk drink.",
            itemPrice: 10,
            itemCategory: "Drinks",
            itemID: 11300,
            itemImage: "/src/images/juice_chocolate.jpg"
        },
        {
    
            itemName: "Banana Milkshake",
            itemDescription: "Classic milkshake. Tastes exotic!",
            itemPrice: 10,
            itemCategory: "Drinks",
            itemID: 11400,
            itemImage: "/src/images/juice_banana.png"
        },
        {
    
            itemName: "Strawberry Milkshake",
            itemDescription: "Feeling special? Then this drink is for you!",
            itemPrice: 10,
            itemCategory: "Drinks",
            itemID: 11500,
            itemImage: "/src/images/juice_strawberry.webp"
        },
    ],
    [
        {
    
            itemName: "Potatoe Fries",
            itemDescription: "Crunchy fries, perfect combined with all our pizzas!",
            itemPrice: 10,
            itemCategory: "Snacks",
            itemID: 11110,
            itemImage: "/src/images/snack_potatoe_fries.png"
        },
        {
    
            itemName: "Fried Vegetables",
            itemDescription: "Juicy fried vegetables ready to be served!",
            itemPrice: 10,
            itemCategory: "Snacks",
            itemID: 11120,
            itemImage: "/src/images/snack_fried_vegetables.png"
        },
        {
    
            itemName: "Chicken Nuggets",
            itemDescription: "Classic choice. Sauce included!",
            itemPrice: 20,
            itemCategory: "Snacks",
            itemID: 11130,
            itemImage: "/src/images/snack_chicken_nuggets.png"
        },
        {
    
            itemName: "Burger",
            itemDescription: "Burger made with love (+ Beef, cheese and pickles!).",
            itemPrice: 25,
            itemCategory: "Snacks",
            itemID: 11140,
            itemImage: "/src/images/snack_burger.jpg"
        },
    ]

];


/* Menu - displaying items function */


let addMenuItems = function(array){
    menuContainer.innerHTML = "";
    for(i = 0; i < array.length; i++){
        let menuItem;
        menuItem = `
                <div class="menu_item">
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
        menuContainer.insertAdjacentHTML("beforeend", menuItem);
    }
}

addMenuItems(allMenuItems[0]);



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


/* Menu - Add event listeners to Menu Buttons */

let menuNavButtons = document.getElementsByClassName("nav_button");

let cartArray = [];
let cartNumber = 0;


document.addEventListener("click", function(event){
    let clickedElement = event.target;
    if (clickedElement.classList.contains("nav_button")){
        let elementID = clickedElement.id;
        let convertedID = parseInt(elementID);
        addMenuItems(allMenuItems[convertedID]);
    } else if (clickedElement.classList.contains("quantity_button")){

        let parentElement = clickedElement.parentElement;
        let amountDisplay = parentElement.getElementsByClassName("quantity_display");
        add_remove_itemCounter(clickedElement.innerHTML, amountDisplay);
    }
})
