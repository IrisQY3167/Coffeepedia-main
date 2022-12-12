/* WRITE YOUR JS HERE... YOU MAY REQUIRE MORE THAN ONE JS FILE. IF SO SAVE IT SEPARATELY IN THE SCRIPTS DIRECTORY */

const coffeeData = [
  {
    brand:'Bizzy Cold Brew',
    name:'Smooth & Sweet',
    roast:'medium',
    flavor:'caramel, hazelnut',
    bean:'Arabica',
    region:['Guatemala', 'Peru', 'Nicaragua'],
    price:'$14.99/16oz',
    img:'images/bizzy.png'
  },
  {
    brand:'Cafés Granell',
    name:'Wild Kopi Luwak',
    roast:'medium',
    flavor:'smooth, earthy, nutty and with a slight hint of spice',
    bean:'Arabica',
    region:'Indonesia',
    price:'$109.98/3.5oz',
    img:'images/garnell.png'
  },
  {
    brand:'CoffeeAM',
    name:'Jamaica Blue Mountain Estate',
    roast:'light',
    flavor:'chocolate',
    bean:'Arabica',
    region:'Jamaica',
    price:'$54.95/16oz',
    img:'images/coffeeam.png'
   },
  {
    brand:'CoffeeZyme',
    name:'Coffee Cake',
    roast:'medium',
    flavor:'cinnamon, vanilla',
    bean:'a mix of different beans',
    region:'Brazil',
    price:'$14.99/16oz',
    img:'images/coffeezyme.png'
   },
  {
    brand:'Copper Cow Coffee',
    name:'Salted Caramel Ground Coffee',
    roast:'medium',
    flavor:'caramel, salty, chocolate and nutty',
    bean:['Arabica', 'Robusta'],
    region:'Vietnamese',
    price:'$17/12oz',
    img:'images/copper-cow.png'
  },
  {
    brand:'Counter Culture Coffee',
    name:'Big Trouble',
    roast:'medium',
    flavor:'caramel, nutty, dark chocolate',
    bean:'a mix of different beans',
    region:['Honduras', 'Mexico'],
    price:'$13.42/12oz',
    img:'images/counter-culture.png'
  },
  {
    brand:'Death Wish',
    name:'Organic Whole Bean Coffee',
    roast:'dark',
    flavor:'bold, dark chocolate and black cherry',
    bean:['Arabica', 'Robusta'],
    region:'coffee belt',
    price:'$17.48/16oz',
    img:'images/death-wish.png'
  },
  {
    brand:'Dope Coffee',
    name:'Organic Guatemalan',
    roast:'medium',
    flavor:'dark chocolate and apricot blossoms',
    bean:'a mix of different beans',
    region:'Guatemala',
    price:'$17/12oz',
    img:'images/dope-coffee.png'
  }, 
  {
    brand:'Equal Exchange',
    name:'Organic French Roast Coffee',
    roast:'dark',
    flavor:'dark chocolate, sweet and fruity',
    bean:'Arabica',
    region:'Nicaragua',
    price:'$6.38/10oz',
    img:'images/equal-exchange.png'
  },
  {
    brand:'Fresh Roasted Coffee',
    name:'Tanzanian Peaberry',
    roast:'light',
    flavor:'lemon, peach, and black tea',
    bean:'Arabica',
    region:'Tanzania',
    price:'$13.95/12oz',
    img:'images/fresh-roasted.png'
   },
  {
    brand:'Good & Gather Organic',
    name:'Tierra del Sol',
    roast:'medium',
    flavor:'dark chocolate, toffee and warm spice',
    bean:'Arabica',
    region:'Mexico',
    price:'$7.39/12oz',
    img:'images/good-gather.png'
  },
  {
    brand:'Intelligentsia',
    name:'House Blend',
    roast:'light',
    flavor:'apple, citrus and milk chocolate',
    bean:'Arabica',
    region:['Brazil', 'Costa Rica', 'El Salvador'],
    price:'$16.5/12oz',
    img:'images/intelligentsia.png'
  },
  {
    brand: 'Just Bright',
    name:'Light Roast',
    roast:'light',
    flavor:'crisp and clean',
    bean:'Arabica',
    region:'central and south America',
    price:'$5.12/12oz',
    img: 'images/just-bright.png'
  },
  {
    brand: 'La Colombe',
    name: 'Corsica',
    roast: 'dark',
    flavor: 'baker\'s chocolate, red wine, and spices',
    bean: 'a mix of different beans',
    region: ['Brazil', 'Columbia', 'Honduras', 'Mexico'],
    price: '$14/12oz',
    img:'images/la-colombe.png'
  },
  {
    brand:'Lavazza',
    name:'Espresso Italiano',
    roast:'medium',
    flavor:'fruit and flowers',
    bean:'Arabica',
    region:'central and south America',
    price:'$8.49/16oz',
    img:'images/lavazza.png'
  },
  {
    brand:'Melitta',
    name:'Colombian Supreme',
    roast:'medium',
    flavor:'french vanilla',
    bean:'Arabica',
    region:'Columbia',
    price:'$6.49/11oz',
    img:'images/melitta.png'
  },
  {
    brand:"Peet's Coffee",
    name:'Big Bang',
    roast:'medium',
    flavor:'fruit cup, milk chocolate, graham crust',
    bean:'Arabica',
    region:['Africa','Arabia', 'America'],
    price:'$18.95/16oz',
    img:'images/peets-coffee.png'
  },
  {
    brand:"Seattle's Best Coffee",
    name:'Post Alley Blend',
    roast:'dark',
    flavor:'bittersweet, toasty, decadent chocolate',
    bean:'Arabica',
    region:'Latin America',
    price:'$12/12oz',
    img:'images/seattles-best.png'
  },
  {
    brand:'Shock',
    name:'Shock Coffee',
    roast:'medium',
    flavor:'cinnamon, vanilla',
    bean:'a mix of different beans',
    region:'Brazil',
    price:'$14.99/16oz',
    img:'images/shock.png'
   },
  {
    brand:'Superlost Coffee',
    name:'Natural Process Coffee',
    roast:'medium',
    flavor:'dark chocolate, sweet peach, key lime pie',
    bean:'a mix of different beans',
    region:'Columbia',
    price:'$15/8oz',
    img:'images/superlost.png'
  },
  
];


//GLOBAL VARIABLES
let list = document.getElementById("brands-list");
const resetBtn = document.getElementById("clearFilter");
const filterRoast = document.getElementById("roast-filter-choice");
const filterBean = document.getElementById("beans-filter-choice");
const filterRegion = document.getElementById("region-filter-choice");

//EVENTS
//make drawCoffee run defaultly when open the page
window.onload = drawCoffee(coffeeData);
//reset all the filters' value and drawCoffee
resetBtn.addEventListener("click", function(){
  resetFilter();
  drawCoffee(coffeeData)
});
//events for the three options lists
filterRoast.addEventListener("change", showRoast);
filterBean.addEventListener("change", showBean);
filterRegion.addEventListener("change", showRegion);

//FUNCTIONS
//drawCoffee will be called everytime to show the products selected
function drawCoffee(coffee) {
  list.innerHTML = "";
  
  coffee.forEach((beanCard) => {

    const brandCard = document.createElement('div');
    brandCard.setAttribute('class', 'brandCard');

    const brandPicture = document.createElement('div'); 
    brandPicture.setAttribute('class', 'brandPicture');
    const brandPic = document.createElement('img');
    brandPic.setAttribute('src', beanCard.img);
    brandPic.alt = `Coffee Pic ${beanCard.brand}`;

    const brandTitle = document.createElement('div');
    brandTitle.setAttribute('class','brandTitle'); 
    const cfBrand = document.createElement('h3');
    cfBrand.textContent = `${beanCard.brand}`;
    const cfName = document.createElement("h4");
    cfName.textContent = `${beanCard.name}`;
    
    const brandInfo = document.createElement('div');
    brandInfo.setAttribute('class','brandInfo');
    const cfRoast = document.createElement('p');
    cfRoast.textContent = `Roast level: ${beanCard.roast}`;
    const cfFlavor = document.createElement('p');
    cfFlavor.textContent = `Flavor: ${beanCard.flavor}`;
    const cfBean = document.createElement('p');
    cfBean.textContent = `Bean: ${beanCard.bean}`;
    const cfRegion = document.createElement('p');
    cfRegion.textContent = `Region: ${beanCard.region}`;
    const cfPrice = document.createElement('p');
    cfPrice.textContent = `Price: ${beanCard.price}`;
    const cfEmpty = document.createElement('p');
    cfEmpty.textContent = `     `;
    
    list.appendChild(brandCard);
    brandCard.appendChild(brandPicture);
    brandPicture.appendChild(brandPic);
    
    brandCard.appendChild(brandTitle);
    brandTitle.appendChild(cfBrand);
    brandTitle.appendChild(cfName);

    brandCard.appendChild(brandInfo);
    brandInfo.appendChild(cfRoast);
    brandInfo.appendChild(cfFlavor);
    brandInfo.appendChild(cfBean);
    brandInfo.appendChild(cfRegion);
    brandInfo.appendChild(cfPrice);
    brandInfo.appendChild(cfEmpty);
      
  });
  
}

//when "Roast Lv." option change
function showRoast() {
  //clear other filters
  filterBean.value = 'reset';
  filterRegion.value = 'reset';
  //set the selected filter & products displayed
  let final = [];
  coffeeData.forEach(item => {
    if (item.roast == filterRoast.value){
      final.push(item);
    }else if(filterRoast.value == 'reset'){
      final.push(item);
    }
  });
  //call drawCoffee
  drawCoffee(final);
}

//when "Beans" option change
function showBean() {
  //clear other filters
  filterRoast.value = 'reset';
  filterRegion.value = 'reset';
  //set the selected filter & products displayed
  let final = [];
  coffeeData.forEach(item => {
    if (item.bean == filterBean.value){
      final.push(item);
    }else if(filterBean.value == 'mix' & item.bean != 'Arabica'){
      final.push(item);
    }else if(filterBean.value == 'reset'){
      final.push(item);
    }
  });
  //call drawCoffee
  drawCoffee(final);
}

function showRegion(){
  //clear other filters
  filterRoast.value = 'reset';
  filterBean.value = 'reset';
  //set the selected filter & products displayed
  let final =[];
  coffeeData.forEach(item => {
    if (item.region == filterRegion.value){
      final.push(item);
    }else if(filterRegion.value == 'mix' & item.region != 'Brazil'
    & item.region != 'Columbia' & item.region != 'Mexico'){
      final.push(item);
    }else if(filterRegion.value == 'reset'){
      final.push(item);
    }
  });
  //call drawCoffee
  drawCoffee(final);
}

function resetFilter(){
  filterRoast.value = 'reset';
  filterBean.value = 'reset';
  filterRegion.value = 'reset';
}
