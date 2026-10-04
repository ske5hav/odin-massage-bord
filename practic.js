/*arr =[122,100,101,,20,30,500]
pre=[]
arr.forEach(element => {
    if(element > 100 ){
        console.log(element)
        pre.push(element)
    }
});
console.log(pre)

function fnc(n){
    if(n <= 0){
        return []
    }
    if(n === 1){
        return [0]
    }

   const result =[0,1]

    for(let i=2;i<n;i++){
      result.push(result[i-1]+result[i-2])
    }
    return result
    
}

console.log(fnc(8))

function fncr(n){
    if(n <= 0){
        return []
    }
    if (n === 1) {
        return [0];
    }

    if (n === 2) {
        return [0, 1];
    }

     const result =fncr(n-1)
     
     
     result.push(
        result[result.length -1]+result[result.length -2]
     )
      console.log(result," anja");
     return result
}
console.log(fncr(8))  */


/*let prices= [100,250,500,150,700];

prices.filter(function(a){
    if (a <= 300){
       console.log(a)
    }

})
console.log("Hello");
let marks= [80,90,70,85,95];

let avr = marks.reduce(function(acc, val) {
    return acc + val;
}, 0);

const avg = avr / marks.length;

console.log(avg); 

let numbers= [1,2,3,2,4,2,5,1,1,1];
let count={}
for(let i = 0;i <numbers.length;i++){
    
   let num =numbers[i]
   if (count[num]){
       count[num] += 1
       
   }
   else{
    count[num]=1
   }

}
let frequncy=0
let mostfrequnacy
for(let i in count){
    console.log(count[i])
    if(count[i] > frequncy){
        frequncy= count[i]
        mostfrequnacy =i
    }
}
console.log({mostfrequnacy},{frequncy},"this is anser of ") 



let user= {
name:"Ritik",
age:20
};


let key=0
let val 
console.log()

for (let i in user){
    
    key = user[i]
    val = i
    if(val === "age"){
        user[i]=21
    }
     console.log(`this is key : ${val} and this is val ${key}`)
   
}
console.log(user)

let auser= {
name:"Ritik",
age:20,
city:"Bhopal"
};

for (const [key , val] of Object.entries(auser)){
    console.log(key ,val)
}  


function sum(...num){
    return num.reduce((acc,val) => acc+val ,0)
}
console.log(sum(1,2,34,5,6,7))

let users= [
{ name:"Ritik", age:20 },
{ name:"Aman", age:16 },
{ name:"Priya", age:25 }
];

function getAdults(users){
    return users.filter((user) => user.age>=18)
}
console.log(getAdults(users)) 


let cart= [
{ name:"Mouse", price:500, qty:2 },
{ name:"Keyboard", price:1000, qty:1 },
{ name:"Monitor", price:10000, qty:1 }
];

function getCartTotal(cart){
    return cart.reduce((acc,val) =>{ 
            return acc+(val.price * val.qty)

        },0)
}

console.log(getCartTotal(cart)) */


let students= [
{
    name:"Ritik",
    marks: [80,90,85]
},
{
    name:"Aman",
    marks: [50,40,60]
}
];

function generateReport(students){


  return students.map((student)=>{


     let total = student.marks.reduce((sum, mark) => {
            return sum + mark;
        }, 0);

    let avg = total  /student.marks.length

    let grad

    if (avg  >= 80){
        grad ="A"
    }else if ( avg >=70){
        grad="B"
    }else if ( avg >=50){
        grad="C"
    }else if ( avg >=40){
        grad="D"
    }else{
        grad ="F"
    }

    return {
        name: student.name,
        avg :avg,
        grad :grad
    }
  })

}

console.log(generateReport(students))