'use strict'
function display( name,...myName)
{
    console.log(name,myName);
}
display("anil", 31, "city", true);

function divide(x,y=1)
{
    console.log(x/y);
}
divide(10);