// 1 
// 2 3 
// 4 5 6 
// 7 8 9 10 
// 11 12 13 14 15 
let rows=+prompt("Enter Rows: ");
let c=0;
for(let i=1;i<=rows;i++){
    res="";
    for(j=1;j<=i;j++){
        c=c+1;
        res=res+c+" ";
    }
    console.log(res);
}