// Enter the no.of rows:5
// 1       5 
//   2   4   
//     3     
//   2   4   
// 1       5 
let rows=+prompt("Enter the no.of rows:");
for(i=1;i<=rows;i++){
    res="";
    for(j=1;j<=rows;j++){
        if(i==j || i+j==rows+1){
        
            res=res+j+" ";
        }
        else{
            res=res+"  ";
        }
    }
    console.log(res);
    
}