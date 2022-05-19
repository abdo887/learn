var output = [];
var count =3;
function fizzBuzz() {
    if(count % 3 ===0 ){
     output.push("fizz");
    }else{
    output.push(count);
    }
    count++;
    console.log(output);
}
fizzBuzz();