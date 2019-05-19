/*
cardType:   	0  1  2  3  4  5  6  7  8  9

rarityLevel:	0  1  2  3  4

nfcData:	[cardType][rarityLevel][(cardType) (Math.abs(cardType-rarityLevel)) (rarityLevel) (randomNumber1-9)(randomNumber1-9)]
*/

var cardTypeNum = [0,1,2,3,4,5,6,7,8,9];
var cardTypeStr = ["a","b","c","d","e","f","g","h","i","j"];
var rarityLevelNum = [0,1,2,3,4];
var rarityLevelStr = ["white","blue","purple","yellow","shiny"]
var rarityLevelVal = [1,5,10,15,30];
var id = 0;
for(i = 0; i < cardTypeNum.length; i++){
	for(j = 0; j < rarityLevelNum.length; j++){
		for(k = 0; k <= 9; k++){
			for(l = 0; l <= 9; l++){
				id++;
				console.log("");
				console.log("ID: " + id);
				console.log("Code: " + i + "" + (Math.abs(i-j)) + "" + j + "" + k + "" + l);
				console.log("Card: " + cardTypeStr[i] + ", CheckSum: " + (Math.abs(i-j)) + ", Rarity Level: " + rarityLevelStr[j] + ", Random Numbers: " + k + "" + l);
			}
		}
	}
}


$("#hello").click(function(){
$("#txtOutput").text("");

var myTestCard = $("#numCode").val();

var myCardType = cardTypeStr[parseInt(myTestCard.charAt(0))];
var myCardLevel = rarityLevelStr[parseInt(myTestCard.charAt(2))];
var myCheckSum = Math.abs(parseInt(myTestCard.charAt(0))-parseInt(myTestCard.charAt(2)));
var randomNumbers = myTestCard.charAt(3) + "" + myTestCard.charAt(4);
console.log("Card Type: " + myCardType + ", CheckSum: " + myCheckSum + ", RarityLevel: " + myCardLevel + ", Random Numbers: " + randomNumbers);
 $("#txtOutput").html("Card Type: " + myCardType + "<br>Correct CheckSum: " + myCheckSum + "<br>Your CheckSum: " + parseInt(myTestCard.charAt(1)) + "<br>RarityLevel: " + myCardLevel + "<br>Random Numbers: " + randomNumbers);

if(myCheckSum != parseInt(myTestCard.charAt(1))){
	alert("Incorrect Code!!!")
}
else{
	console.log("all good!");
}

})