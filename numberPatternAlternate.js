// 1 
// 3 2 
// 4 5 6 
// 10 9 8 7 
let rows=+prompt("enter rows:");
let val=1;
for(i=1;i<=rows;i++){
    res="";
    for(j=1;j<=i;j++){
        if(i%2!==0){
        res=res+val+" ";
        val++;
        }
        else{
            res=val+" "+res;
        val++;
        }
    }
    console.log(res);
}