// ctrl r pour selectionner ton code a executer et ctrl + alt + n pour debugger


function ucfirst(str){
    if(typeof str !== "string" || !str) return '';

    return str[0].toUpperCase() + str.substring(1);
}

console.log(ucfirst("test"));
console.log(ucfirst("Test"));
console.log(ucfirst(" test"));
console.log(ucfirst("test Test tst"));
console.log(ucfirst(""));
console.log(ucfirst(null));
console.log(ucfirst({}));



function capitalize(str) {
    if(typeof str !== "string" || !str) return '';

    return str.toLowerCase().split(" ").map(function(item){
        return ucfirst(item);
    }).join(" ");
}
console.log(capitalize("test"));
console.log(capitalize("Test"));
console.log(capitalize(" test"));
console.log(capitalize("test Test tst"));
console.log(capitalize(""));
console.log(capitalize(null));
console.log(capitalize({}));
function camelCase(str) { 
    if(typeof str !== "string" || !str) return '';

    return str.toLowerCase().split(" ").map(function(item){
        return ucfirst(item).split(/[^A-z]/g).join("");
    }).join("");
} 
console.log(camelCase("test"));
console.log(camelCase("Test"));
console.log(camelCase(" test"));
console.log(camelCase("test2 Test tst"));
console.log(camelCase(""));
console.log(camelCase(null));
console.log(camelCase({}));
function snake_case(str) { 
    if(typeof str !== "string" || !str) return '';
     
    return str.toLowerCase().split(/[^a-zA-Z0-9]/).join("_");
} 
console.log(snake_case("test"));
console.log(snake_case("Test"));
console.log(snake_case(" test"));
console.log(snake_case("test2 Test tst"));
console.log(snake_case(""));
console.log(snake_case(null));
console.log(snake_case({}));

 
function leet(chr) {
    if(typeof str !== "string" || !str) return '';
    var chrs = {'a':'4','e':'3','i':'1','t':'7','s':'5','o':'0'};
    return chrs[chr.toLowerCase()] || chr;
  }
   
  var message = "Ceci est un message sans leet speak !";
   
  console.log( message.replace(/[aeltso]/g, leet) );

