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
     str = str.trim();
    return str.toLowerCase().split(" ").join("_");
} 
console.log(snake_case("test"));
console.log(snake_case("Test"));
console.log(snake_case(" test"));
console.log(snake_case("test2 Test tst"));
console.log(snake_case(""));
console.log(snake_case(null));
console.log(snake_case({}));
var message = "Ceci est un message sans leet speak !";
 
var messageLeet = "";
 
for (var i = 0; i < message.length; i++) {
  if (message[i].toLowerCase() === "i") { messageLeet += "1"; }
  else if (message[i].toLowerCase() === "e") { messageLeet += "3"; }
  else if (message[i].toLowerCase() === "a") { messageLeet += "4"; }
  else if (message[i].toLowerCase() === "t") { messageLeet += "7"; }
  else if (message[i].toLowerCase() === "s") { messageLeet += "5"; }
  else if (message[i].toLowerCase() === "o") { messageLeet += "0"; }
  else { messageLeet += message[i].toLowerCase(); }
}
 
console.log(messageLeet);

