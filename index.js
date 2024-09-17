let a=10;
let obj={
    a:"valla10",
    fun:function(x,y){
        console.log("inside object", this.a,x,y);
    }

}
let dom={
    a:"malla reddy"
}
let domobj=obj.fun.bind(dom);
domobj("anna","munna");