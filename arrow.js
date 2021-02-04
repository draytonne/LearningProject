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