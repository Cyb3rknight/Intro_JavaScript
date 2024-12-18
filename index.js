/*** IMPORTANT!!!!!!!!!! ***/ 

//Static language:  C#  -  where the variable is defined throughout ex: string name ='Bob'; , num age=30;
//Dynamic language: JAVASCRIPT  -  where the variable can change during coding ex: let name =' Bob '; , let age=30;

/*** IMPORTANT!!!!!!!!!! ***/ 


const lien = document.getElementsByClassName('box');//you name a constant variable (const) which will identify  class='box'
lien[0].style.color = 'blue' ;// you modify the value '0' of the class='box'.More specifically its color(CSS)

lien[1].style.color = 'red' ;


document.querySelector('.paragraphe' ).style.background='greenyellow';

var number=10; //Number
var string="Hello There. Who are you"; //String
var isRad =true; //Boolean in choice situations
document.getElementById('box1').innerHTML = string; // Display in id=box1(HTML) 

document.getElementById('box1').innerHTML =  number+10; //You want to display in id=box1(HTML) number+10(add products)


document.getElementById('box2').addEventListener('click',function() //you want to send an alert message to the client when the id=box2(HTML) is clicked
{
alert("Purchased");
console.log('loading...');
});



/****************************** IN THE CONSOLE YOU MUST INSPECT!!!!! ************************/

for(var i=0;i<10;i++){
    console.log(i);
}

var voiture=['Porch','Lamborghini','Toyota','Subaru'];
for(i=0;i<voiture.length;i++){
    console.log(voiture[i]);
}

var voiture2=['Volkswagen','Hyundai','Mercedes','Maserati']

function carList2(){
for(var i=0;i<voiture2.length;i++)
{
    console.log(voiture2[i]);
}
                       }
                       carList2();






let name='Bob the best'; // String example
let age=30; // Number example
let isApproved=false;  //Boolean example

//Simpler
let person=
{
name:'Bob the best',
age:30
};
person['name']='Bob blabla' // change the variable['name']='Bob the best' par ['name']='Bob blabla'
console.log(person);

//*******************List of objects or products during their shopping on site

let SelectedColors = ['red','blue'];

SelectedColors[2]='green tomato'; //  Add to position [2] the string variable 'green tomato' 

SelectedColors[3]=1;

console.log(SelectedColors[2]); //  Select a specific variable, in this case [0]



function greet(name,lastname) //Opens the function //Declaration function which performs the job of calculating a value
{
console.log('Hello ' + name + ' '+ lastname);// displays 'Hello ' + name('Bob') + lastname('B.')

}

greet('Bob','B.');//Activate the 'greet' function

console.log("I'm learning Javascript"); // the "..." are used when we have certain signs ex:I'm

console.log('some\n\ntext') // the '\n' means you are breaking a line

console.log(`Items (${1+1}):      $${(2095+799)/100}`); // `...` and `${}` are used to insert a value directly into the string (WITHOUT CONCATENATION)

console.log(`some
text`); // no need to do '\n' every time you need to skip a line

//puts a value into a function "parameter"
function calculateTax(cost/*parameter1*/,taxPercent/*parameter2*/){
    
    console.log(cost * taxPercent); //calculate tax for order

  } 
  
  calculateTax(2000,0.2);
  calculateTax(5000,0.1);

/************************************ IN THE CONSOLE YOU MUST INSPECT!!!!! ******************************/

document.getElementById('box3').innerHTML='$'+(2095+799)/100;//Show price or sum of prices (CONCATENATION)

document.getElementById('box4').innerHTML='Items ('+(1+1)+'):$ '+((2095+799)/100); //Show number of items and price

//Objects: Groups multiple values together
const product = {
 name: 'socks',
 price:1090
};
product.name='cotton socks';//will change name: 'socks' to name: 'cotton socks'
product.definition='5 cm'//add the definition to the product list
console.log(product);
document.getElementById('box5').innerHTML=product.name; //show 'socks' in box5
delete product.name;//delete 'name'
console.log(product);//activate 'delete'
document.getElementById('box6').innerHTML=`J'ai acheter definition:${product.definition} au prix:${product.price}$`;//on peut pas mettre 'product.name' car on l'as supprimer

const product2 = {
    name:'shirt',
    ['delivery-time']:'1 day', //The ['delivery-time'] is used to name objects with signs like - + / ^ etc (does not add). In addition, you can use a variable or an addition ex: product2[var1]; or product2['delivery'+'time'];

 rating:{// object('rating') in an object('product2') to have an easier reading of the code. FOR EXAMPLE: product=price,stars,etc
    stars:4.5,
    count:87
 },

 fun:function function1()//save a function in object
 {
    
 document.getElementById('box8').innerHTML='5 methode:  function inside objet';//a function in an object is called a method ex:console.log 'console'=object 'log'=function
}
}
product2.fun()
document.getElementById('box7').innerHTML=` 1 methode: ${product2.name}                                                                                                                                           2 methode: ${product2['name']}                                        
3 methode:  ${product2['delivery-time']}
4 methode: ${product2.rating.count}`; //method to display the object 'product2' more precisely the 'name'


/*----------- Definition et example of 'JSON' bult-in object --------------------*/

//built-in object 'JSON'(JavaScript Object Notation). You can't put a function and you have to write "name":"shirt", "delivery-time":"1 day"
//JSON syntaxe is universal. All programmers understand this language 
//We use JSON to send data between computers

console.log(JSON.stringify(product2)); //convert JavaScript->JSON
const jsonString=JSON.stringify(product2); //NAME THE JSON built-in object
console.log(JSON.parse(jsonString));//convert JSON->JavaScript




/*----------- Definition et exemple 'localStorage' bult-in object --------------------*/
//Save values more permanently(because variables are temporary)
//Even if you refresh the page, data will be saved (like on an online shopping website)
//Look at the example <!-- ************************Way to remove items from a cart and keep the number even after refreshing the page -->

