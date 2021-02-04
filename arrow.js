const speak = function(name){
    document.writeln('Good day,' +name);
    }
    
    speak('Joe' +"<br>");

const speaks = (name)=> 'Good day '  +name;
document.writeln(speaks('Mary') +"<br>");

const CalcArea = function(radius)
{
    let Area =3.142* radius**2;
    return Area;
}

document.writeln(CalcArea(5)+"<br>");

const CalcAreaS = (radius)=> 3.142*radius**2;
document.writeln(CalcAreaS(10) +"<br>");

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

const factoriall = (n)=>n==0 ?1:n *factoriall(n-1);
document.writeln("The factorial of "+ 6+ "=" +factoriall(6)+ "<br>");

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

const billd = (products,tax) => products[i]+products[i]*tax;
document.writeln(billd([10,80,56,89,45,30],0.14) +"<br>");

function power(x,n)
{
if (n==0)
return 1;
else 
return x* power(x,n-1);
}

document.write(power(2,0)+ "<br>"); 

const powerr = (x,n) =>n==0 ?1:x*powerr(x,n-1);
document.write(powerr(2,3)+ "<br>");