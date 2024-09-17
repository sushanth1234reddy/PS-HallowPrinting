// * * * * * 
//  *     * 
//   *   * 
//    * * 
//     * 
let rows=+prompt();
for(i=rows;i>=1;i--){
    res="";
    for(k=1;k<=rows-i;k++){
        res=res+" ";
    }
    for(j=1;j<=i;j++){
        if(i==rows || j==1 || i==j)
        res=res+"* ";
        else
        res=res+"  ";
    }
    console.log(res);
}