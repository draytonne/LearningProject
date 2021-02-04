/*function Salute(name="John",time="Evening")
{
    document.write("Good " + time +" "+ name );
}
Salute("Karl","Morning");

//function expression

const speak = function(name){
document.writeln("Good day," +name);
}

speak("Joe");

const CalcArea = function(radius)
{
    let Area =3.142* radius**2;
    return Area;
}

document.writeln(CalcArea(5)+"<br>");

function factorial(n){
    
    if(n == 0 || n == 1){
        return 1;
    
    }else{
        return n * factorial(n-1);
    }
}
let n = 0;
number = factorial(n)
document.write(("The factorial of " + n + " is " + number)+"<br>");

const bill = function(products,tax)
{
    let total = 0;
    for(let i=0 ;i< products.length; i++)
    {
        total += products[i]+ products[i] * tax;
    }
    return total;;
}
document.writeln(bill([10,80,56,89,45,30], 0.14),"<br>");

var fruits=["Apples","Mangoes","Grapes","Oranges"];

fruits.forEach( function(item,index){
    document.writeln(index+1+" " +item +"<br>" );
});


function power(x,n)
{
if (n==0)
return 1;
else 
return x* power(x,n-1);
}

document.write(power(2,0)+ "<br>"); 

function Countdown(value){
    if(value > 0){
        document.write(value+ "<br>");
        return Countdown(value-1);
    }else
     return value;
}
document.writeln("Count down " + "<br>");
document.writeln(Countdown(10) + "<br>");

*/
function revstr(str)
{
    if (str=="")
    return "No value was keyed in";
    return revstr(str.substring(1) +str.charAt(0));
}

document.writeln(revstr('cat') +"<br>");
