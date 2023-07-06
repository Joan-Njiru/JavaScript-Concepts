let student ={
    name:"Steven",
    age:19,
    greet:function(){
        console.log("Hello");
    }
};

student.greet()
student.talk=function(){
    console.log("Hi there");
    console.log(`Hello my name is ${student.name} and I am ${student.age} years old`);
console.log(`Hello my name is ${this.name} and I am ${this.age} years old`);
}
student.talk()



