/* WRITE YOUR JS HERE... YOU MAY REQUIRE MORE THAN ONE JS FILE. IF SO SAVE IT SEPARATELY IN THE SCRIPTS DIRECTORY */

const coffeeData = [
    {
      brand: 'La Colombe',
      name: 'Corsica',
      roast: 'dark',
      flavor: 'baker\'s chocolate, red wine, and spices',
      bean: 'a mix of different beans',
      region: ['Brazil', 'Columbia', 'Honduras', 'Mexico'],
      price: '$14/12oz',
      img:'/images/la-colombe.png'
    },
   {
     brand: 'Just Bright',
     name:'Light Roast',
     roast:'light',
     flavor:'crisp and clean',
     bean:'Arabica',
     region:'central and south America',
     price:'$5.12/12oz',
     img: '/images/just-bright.png'
   },
   {
     brand:'Melitta',
     name:'Colombian Supreme',
     roast:'medium',
     flavor:'french vanilla',
     bean:'Arabica',
     region:'Columbia',
     price:'$6.49/11oz',
     img:'/images/melitta.png'
    },
   {
     brand:'Death Wish',
     name:'Organic Whole Bean Coffee',
     roast:'dark',
     flavor:'bold, dark chocolate and black cherry',
     bean:['Arabica', 'Robusta'],
     region:['coffee belt', 'others'],
     price:'$17.48/16oz',
     img:'/images/death-wish.png'
    },
   {
     brand:'Superlost Coffee',
     name:'Natural Process Coffee',
     roast:'medium',
     flavor:'dark chocolate, sweet peach, key lime pie',
     bean:'a mix of different beans',
     region:'Columbia',
     price:'$15/8oz',
     img:'/images/superlost.png'
    },
   {
     brand:'Lavazza',
     name:'Espresso Italiano',
     roast:'medium',
     flavor:'fruit and flowers',
     bean:'Arabica',
     region:'central and south America',
     price:'$8.49/16oz',
     img:'/images/lavazza.png'
    },
   {
     brand:"Peet's Coffee",
     name:'Big Bang',
     roast:'medium',
     flavor:'fruit cup, milk chocolate, graham crust',
     bean:'Arabica',
     region:['Africa','Arabia', 'America'],
     price:'$18.95/16oz',
     img:'/images/peets-coffee.png'
    },
   {
     brand:'Good & Gather Organic',
     name:'Tierra del Sol',
     roast:'medium',
     flavor:'dark chocolate, toffee and warm spice',
     bean:'Arabica',
     region:'Mexico',
     price:'$7.39/12oz',
     img:'/images/good-gather.png'
    },
   {
     brand:'Intelligentsia',
     name:'House Blend',
     roast:'light',
     flavor:'apple, citrus and milk chocolate',
     bean:'Arabica',
     region:['Brazil', 'Costa Rica', 'El Salvador'],
     price:'$16.5/12oz',
     img:'/images/intelligentsia.png'
    },
   {
     brand:'Copper Cow Coffee',
     name:'Salted Caramel Ground Coffee',
     roast:'medium',
     flavor:'caramel, salty, chocolate and nutty',
     bean:['Arabica', 'Robusta'],
     region:'Vietnamese',
     price:'$17/12oz',
     img:'/images/copper-cow.png'
    },
   {
     brand:'Counter Culture Coffee',
     name:'Big Trouble',
     roast:'medium',
     flavor:'caramel, nutty, dark chocolate',
     bean:'a mix of different beans',
     region:['Honduras', 'Mexico'],
     price:'$13.42/12oz',
     img:'/images/counter-culture.png'
    },
   {
     brand:'Equal Exchange',
     name:'Organic French Roast Coffee',
     roast:'dark',
     flavor:'dark chocolate, sweet and fruity',
     bean:'Arabica',
     region:'Nicaragua',
     price:'$6.38/10oz',
     img:'/images/equal-exchange.png'
    },
   {
     brand:'Dope Coffee',
     name:'Organic Guatemalan',
     roast:'medium',
     flavor:'dark chocolate and apricot blossoms',
     bean:'a mix of different beans',
     region:'Guatemala',
     price:'$17/12oz',
     img:'/images/dope-coffee.png'
    },
   {
     brand:"Seattle's Best Coffee",
     name:'Post Alley Blend',
     roast:'dark',
     flavor:'bittersweet, toasty, decadent chocolate',
     bean:'Arabica',
     region:'Latin America',
     price:'$12/12oz',
     img:'/images/seattles-best.png'
    },
   {
     brand:'Bizzy Cold Brew',
     name:'Smooth & Sweet',
     roast:'medium',
     flavor:'caramel, hazelnut',
     bean:'Arabica',
     region:['Guatemala', 'Peru', 'Nicaragua'],
     price:'$14.99/16oz',
     img:'/images/bizzy.png'
    },
   {
     brand:'Fresh Roasted Coffee',
     name:'Tanzanian Peaberry',
     roast:'light',
     flavor:'lemon, peach, and black tea',
     bean:'Arabica',
     region:'Tanzania',
     price:'$13.95/12oz',
     img:'/images/fresh-roasted.png'
    },
   {
     brand:'CoffeeZyme',
     name:'Coffee Cake',
     roast:'medium',
     flavor:'cinnamon, vanilla',
     bean:'a mix of different beans',
     region:'Brazil',
     price:'$14.99/16oz',
     img:'/images/coffeezyme.png'
    },
   {
     brand:'Shock',
     name:'Shock Coffee',
     roast:'medium',
     flavor:'cinnamon, vanilla',
     bean:'a mix of different beans',
     region:'Brazil',
     price:'$14.99/16oz',
     img:'/images/shock.png'
    },
   {
     brand:'Cafés Granell',
     name:'Wild Kopi Luwak Coffee',
     roast:'medium',
     flavor:'smooth, earthy, nutty and with a slight hint of spice',
     bean:'Arabica',
     region:'Indonesia',
     price:'$109.98/3.5oz',
     img:'/images/garnell.png'
    },
   {
     brand:'CoffeeAM',
     name:'Jamaica Blue Mountain Estate Coffee',
     roast:'light',
     flavor:'chocolate',
     bean:'Arabica',
     region:'Jamaica',
     price:'$54.95/16oz',
     img:'/images/coffeeam.png'
    },
 ];


//global variables

let list = document.getElementById("brands-list");
const resetBtn = document.getElementById("clearFilter");
//?????? how to reset filter options to default when click resetBtn?

const filterRoast = document.getElementById("roast-filter-choice");
const filterBean = document.getElementById("beans-filter-choice");

//events

//make drawCoffee defaultly run when open the page
window.onload = drawCoffee(coffeeData);

//showAllBtn did the same as default
resetBtn.addEventListener("click", function(){
  drawCoffee(coffeeData)
});

filterRoast.addEventListener("change", showRoast);
filterBean.addEventListener("change", showBean);


function drawCoffee(coffee) {
  console.log('hello world');
  list.innerHTML = "";
  
  coffee.forEach((beanCard) => {
    const brandCard = document.createElement('div');
    brandCard.setAttribute('class', 'brand-card');
    const brandInner = document.createElement('div');
    brandInner.setAttribute('class','brand-inner');  
    
    const brandFront = document.createElement('div');
    brandFront.setAttribute('class','brand-front');
    const brandPic = document.createElement('img');
    brandPic.setAttribute('src', beanCard.img);
    
    const brandBack = document.createElement('div');
    brandBack.setAttribute('class','brand-back');
    const h3 = document.createElement("h3");
    h3.textContent = `${beanCard.brand}`;
    const h4 = document.createElement("h4");
    h4.textContent = `${beanCard.name}`;
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
    
    list.appendChild(brandCard);
    brandCard.appendChild(brandInner);
    brandInner.appendChild(brandFront);
    brandFront.appendChild(brandPic);
    
    brandInner.appendChild(brandBack);
    brandBack.appendChild(h3);
    brandBack.appendChild(h4);
    brandBack.appendChild(cfRoast);
    brandBack.appendChild(cfFlavor);
    brandBack.appendChild(cfBean);
    brandBack.appendChild(cfRegion);
    brandBack.appendChild(cfPrice);
    
    console.log('hello world!!!');
  
  });
  
}

function showRoast() {
  console.log('hello world!');
  let final = [];
  
  coffeeData.forEach(item => {
    console.log(filterRoast.value);
    console.log(item.roast);
    if (item.roast == filterRoast.value){
      final.push(item);
    }
  });
  console.log(final);
  //how to call drawCoffee
  drawCoffee(final);
}


function showBean() {
  
  let final = [];
  
  coffeeData.forEach(item => {
    console.log(filterBean.value);
    console.log(item.bean);
    if (item.bean == filterBean.value){
      final.push(item);
    }
  });
  console.log(final);
  //how to call drawCoffee
  drawCoffee(final);
}




