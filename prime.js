function prime(z){
 let count =0;
 for (let i =1;i<=z;i++){
    if(z%i==0){
       count++;
     }
  }
 if(count==2){
   console.log("Yes");
  }
  else{
     console.log("No");
  }
}