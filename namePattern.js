// S 
// u s 
// h a n 
// t h R e 
// d d y * * 
let rows=5;
let name="SushanthReddy";
let p=0;
for(i=1;i<=rows;i++){
    res="";
    for(j=1;j<=i;j++){
        if(name[p]==undefined){
            res=res+"* ";
        }
        else{
        res=res+name[p]+" ";
        p++
        }
        
    }
    console.log(res);
}