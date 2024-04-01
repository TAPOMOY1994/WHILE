let i=0;
while(i<=10)

{
   console.log(i);
   i++;

}


let j=0;
while(j<10)

{
    j++;
   console.log(j);


}


const SECRET="Don";
let guess=prompt("Enter the secret code");

while(guess !==SECRET)

{

    guess=prompt("Enter the secret code");

}

console.log("The code is correct");
