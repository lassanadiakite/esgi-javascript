String.prototype.ucfirst= function(){
    //if(typeof str !== "string" || !str) return '';
    if (this.length === 0) return '';

    return this.charAt(0).toUpperCase() + this.substring(1);
}

console.log("test".ucfirst());
console.log("Test".ucfirst());
console.log(" test".ucfirst());
console.log("test Test tst".ucfirst());
console.log("".ucfirst());

String.prototype.capitalize= function() {
    if (this.length === 0) return '';

    return this.toLowerCase().split(" ").map(function(item){
        return this.ucfirst(item);
    }).join(" ");
}
console.log("test".capitalize());
console.log("Test".capitalize());
console.log(" test".capitalize());
console.log("test Test tst".capitalize());
console.log("".ucfirst());