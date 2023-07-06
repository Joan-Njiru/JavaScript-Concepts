let a = 20 //Global variable-accessed everywhere

function add(b){
    console.log(a+b);
    let c=30;//local variable -accessible in the scope defined
    console.log(a+b+c);
}
add(20)

function greet(){
    let hello = "hey"
    function talk(){
        let greeting="Hello there";
        console.log(`${hello} ${greeting}`);
    }
    talk()
}
greet()


