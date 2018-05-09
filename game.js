//array of words
var listofwords = ["JAZZ", "IVORY", "OXYGEN", "SPHINX", "RHYTHMIC", "ZOMBIE", "PIXEL", "MEMENTO", "PAJAMA", "KLUTZ", "POLKADOT", "ALPHA", "BETA", "CRYPT", "DWARVES", "FISHHOOK", "GYPSY", "HAIKU", "MYSTERY", "QUADRANT", "TOADY", "UNZIP", "YACHT", "ZEALOUS", "PHELGM", "SWIVEL"];
var wordappearance = document.getElementById('name').innerHTML = listofwords[Math.floor(Math.random() * listofwords.length)];
var answerArray = [];
for (c = 0; c < wordappearance.length; c++) {
	answerArray[c] = "-";
}
document.getElementById('name').innerHTML = answerArray;
// Hint Button
var wordlength = wordappearance.length;
var hint = document.getElementById('Hint');
hint.addEventListener('click', () => {
	document.getElementById('#ofletters').innerHTML = "There are " + wordlength + " letters in this word. ";
});
var hint2 = document.getElementById('Hint2');
hint2.addEventListener('click', () => {
	getanotherhint();
});

function getanotherhint() {
	if (wordappearance === listofwords[0]) {
    	document.getElementById('secondhint').innerHTML = "This word is a music genre...";
	} else if (wordappearance === listofwords[1]) {
    	document.getElementById('secondhint').innerHTML = "This word is the creamy white substance that is in elephant tusks...";
	} else if (wordappearance === listofwords[2]) {
    	document.getElementById('secondhint').innerHTML = "This word is an oderless reactive gas...";
	} else if (wordappearance === listofwords[3]) {
    	document.getElementById('secondhint').innerHTML = "This word is in greek mythology...";
	} else if (wordappearance === listofwords[4]) {
    	document.getElementById('secondhint').innerHTML = "This word means to occurr regularly...";
	} else if (wordappearance === listofwords[5]) {
    	document.getElementById('secondhint').innerHTML = "What is another word for the living dead?";
	} else if (wordappearance === listofwords[6]) {
    	document.getElementById('secondhint').innerHTML = "A basic unit in a computer image.";
	} else if (wordappearance === listofwords[7]) {
    	document.getElementById('secondhint').innerHTML = "An object kept as a remainder of a person/place.";
	} else if (wordappearance === listofwords[8]) {
    	document.getElementById('secondhint').innerHTML = "A lounging outfit...";
	} else if (wordappearance === listofwords[9]) {
    	document.getElementById('secondhint').innerHTML = "A clumsy person...";
	} else if (wordappearance === listofwords[10]) {
    	document.getElementById('secondhint').innerHTML = "Consists of a pattern of something...Usually in shoes and clothes.";
	} else if (wordappearance === listofwords[11]) {
    	document.getElementById('secondhint').innerHTML = "The first letter in the greek alphabet...";
	} else if (wordappearance === listofwords[12]) {
    	document.getElementById('secondhint').innerHTML = "The second letter of the greek alphabet...";
	} else if (wordappearance === listofwords[13]) {
    	document.getElementById('secondhint').innerHTML = "An underground chamber...";
	} else if (wordappearance === listofwords[14]) {
    	document.getElementById('secondhint').innerHTML = "Think of Snow White...";
	} else if (wordappearance === listofwords[15]) {
    	document.getElementById('secondhint').innerHTML = "Piece of metal used on a fishing rod...";
	} else if (wordappearance === listofwords[16]) {
    	document.getElementById('secondhint').innerHTML = "A free-spirited person...";
	} else if (wordappearance === listofwords[17]) {
    	document.getElementById('secondhint').innerHTML = "A japanese poem of seventeen syllables...";
	} else if (wordappearance === listofwords[18]) {
    	document.getElementById('secondhint').innerHTML = "A movie genre...";
	} else if (wordappearance === listofwords[19]) {
    	document.getElementById('secondhint').innerHTML = "Each of four parts of a graph/plane...";
	} else if (wordappearance === listofwords[20]) {
    	document.getElementById('secondhint').innerHTML = "A person who flatters or defers to others for self-serving reasons...";
	} else if (wordappearance === listofwords[21]) {
    	document.getElementById('secondhint').innerHTML = "Unfastening of a zipper...";
	} else if (wordappearance === listofwords[22]) {
    	document.getElementById('secondhint').innerHTML = "A sailboat...";
	} else if (wordappearance === listofwords[23]) {
    	document.getElementById('secondhint').innerHTML = "This word means ethusiastic and eager...";
	} else if (wordappearance === listofwords[24]) {
    	document.getElementById('secondhint').innerHTML = "Viscid mucus secreted in adnormal quantity in the respiratory passages...";
	} else if (wordappearance === listofwords[25]) {
    	document.getElementById('secondhint').innerHTML = "Turn around a point or axis...";
	}
}
// Alphabet Buttons
var alphabetArray = [];
var alphabet = document.getElementById('usedLetters').innerHTML = alphabetArray;
var message = document.getElementById('Message');
var a = document.getElementById('A');
a.addEventListener('click', () => {
	if(alphabet.indexOf("A") > -1){
    	message.textContent = "This letter was already used!";
    	message.style.color = "red";
	} else {
	document.getElementById('A').innerHTML = alphabet.unshift("A");
	document.getElementById('usedLetters').innerHTML = alphabet;
	replace();
}});
var b = document.getElementById('B');
b.addEventListener('click', () => {
	if(alphabet.indexOf("B") > -1){
    	message.textContent = "This letter was already used!";
    	message.style.color = "red";
	} else {
	document.getElementById('B').innerHTML =
    	alphabet.unshift("B");
	document.getElementById('usedLetters').innerHTML = alphabet;
	replace();
}});
var c = document.getElementById('C');
c.addEventListener('click', () => {
	if(alphabet.indexOf("C") > -1){
    	message.textContent = "This letter was already used!";
    	message.style.color = "red";
	} else {
	document.getElementById('C').innerHTML = alphabet.unshift("C");
	document.getElementById('usedLetters').innerHTML = alphabet;
	replace();
}});
var d = document.getElementById('D');
d.addEventListener('click', () => {
	if(alphabet.indexOf("D") > -1){
    	message.textContent = "This letter was already used!";
    	message.style.color = "red";
	} else {
	document.getElementById('D').innerHTML = alphabet.unshift("D");
	document.getElementById('usedLetters').innerHTML = alphabet;
	replace();
}});
var e = document.getElementById('E');
e.addEventListener('click', () => {
	if(alphabet.indexOf("E") > -1){
    	message.textContent = "This letter was already used!";
    	message.style.color = "red";
	} else {
	document.getElementById('E').innerHTML = alphabet.unshift("E");
	document.getElementById('usedLetters').innerHTML = alphabet;
	replace();
}});
var f = document.getElementById('F');
f.addEventListener('click', () => {
	if(alphabet.indexOf("F") > -1){
    	message.textContent = "This letter was already used!";
    	message.style.color = "red";
	} else {
	document.getElementById('F').innerHTML = alphabet.unshift("F");
	document.getElementById('usedLetters').innerHTML = alphabet;
	replace();
}});
var g = document.getElementById('G');
g.addEventListener('click', () => {
	if(alphabet.indexOf("G") > -1){
    	message.textContent = "This letter was already used!";
    	message.style.color = "red";
	} else {
	document.getElementById('G').innerHTML = alphabet.unshift("G");
	document.getElementById('usedLetters').innerHTML = alphabet;
	replace();
}});
var h = document.getElementById('H');
h.addEventListener('click', () => {
	if(alphabet.indexOf("H") > -1){
    	message.textContent = "This letter was already used!";
    	message.style.color = "red";
	} else {
	document.getElementById('H').innerHTML = alphabet.unshift("H");
	document.getElementById('usedLetters').innerHTML = alphabet;
	replace();
}});
var i = document.getElementById('I');
i.addEventListener('click', () => {
	if(alphabet.indexOf("I") > -1){
    	message.textContent = "This letter was already used!";
    	message.style.color = "red";
	} else {
	document.getElementById('I').innerHTML = alphabet.unshift("I");
	document.getElementById('usedLetters').innerHTML = alphabet
	replace();
}});
var j = document.getElementById('J');
j.addEventListener('click', () => {
	if(alphabet.indexOf("J") > -1){
    	message.textContent = "This letter was already used!";
    	message.style.color = "red";
	} else {
	document.getElementById('J').innerHTML = alphabet.unshift("J");
	document.getElementById('usedLetters').innerHTML = alphabet;
	replace();
}});
var k = document.getElementById('K');
k.addEventListener('click', () => {
	if(alphabet.indexOf("K") > -1){
    	message.textContent = "This letter was already used!";
    	message.style.color = "red";
	} else {
	document.getElementById('K').innerHTML = alphabet.unshift("K");
	document.getElementById('usedLetters').innerHTML = alphabet;
	replace();
}});
var l = document.getElementById('L');
l.addEventListener('click', () => {
	if(alphabet.indexOf("L") > -1){
    	message.textContent = "This letter was already used!";
    	message.style.color = "red";
	} else {
	document.getElementById('L').innerHTML = alphabet.unshift("L");
	document.getElementById('usedLetters').innerHTML = alphabet;
	replace();
}});
var m = document.getElementById('M');
m.addEventListener('click', () => {
	if(alphabet.indexOf("M") > -1){
    	message.textContent = "This letter was already used!";
    	message.style.color = "red";
	} else {
	document.getElementById('M').innerHTML = alphabet.unshift("M");
	document.getElementById('usedLetters').innerHTML = alphabet;
	replace();
}});
var n = document.getElementById('N');
n.addEventListener('click', () => {
	if(alphabet.indexOf("N") > -1){
    	message.textContent = "This letter was already used!";
    	message.style.color = "red";
	} else {
	document.getElementById('N').innerHTML = alphabet.unshift("N");
	document.getElementById('usedLetters').innerHTML = alphabet;
	replace();
}});
var o = document.getElementById('O');
o.addEventListener('click', () => {
	if(alphabet.indexOf("O") > -1){
    	message.textContent = "This letter was already used!";
    	message.style.color = "red";
	} else {
	document.getElementById('O').innerHTML = alphabet.unshift("O");
	document.getElementById('usedLetters').innerHTML = alphabet;
	replace();
}});
var p = document.getElementById('P');
p.addEventListener('click', () => {
	if(alphabet.indexOf("P") > -1){
    	message.textContent = "This letter was already used!";
    	message.style.color = "red";
	} else {
	document.getElementById('P').innerHTML = alphabet.unshift("P");
	document.getElementById('usedLetters').innerHTML = alphabet;
	replace();
}});
var q = document.getElementById('Q');
q.addEventListener('click', () => {
	if(alphabet.indexOf("Q") > -1){
    	message.textContent = "This letter was already used!";
    	message.style.color = "red";
	} else {
	document.getElementById('Q').innerHTML = alphabet.unshift("Q");
	document.getElementById('usedLetters').innerHTML = alphabet;
	replace();
}});
var r = document.getElementById('R');
r.addEventListener('click', () => {
	if(alphabet.indexOf("R") > -1){
    	message.textContent = "This letter was already used!";
    	message.style.color = "red";
	} else {
	document.getElementById('R').innerHTML = alphabet.unshift("R");
	document.getElementById('usedLetters').innerHTML = alphabet;
	replace();
}});
var s = document.getElementById('S');
s.addEventListener('click', () => {
	if(alphabet.indexOf("S") > -1){
    	message.textContent = "This letter was already used!";
    	message.style.color = "red";
	} else {
	document.getElementById('S').innerHTML = alphabet.unshift("S");
	document.getElementById('usedLetters').innerHTML = alphabet;
	replace();
}});
var t = document.getElementById('T');
t.addEventListener('click', () => {
	if(alphabet.indexOf("T") > -1){
    	message.textContent = "This letter was already used!";
    	message.style.color = "red";
	} else {
	document.getElementById('T').innerHTML = alphabet.unshift("T");
	document.getElementById('usedLetters').innerHTML = alphabet;
	replace();
}});
var u = document.getElementById('U');
u.addEventListener('click', () => {
	if(alphabet.indexOf("U") > -1){
    	message.textContent = "This letter was already used!";
    	message.style.color = "red";
	} else {
	document.getElementById('U').innerHTML = alphabet.unshift("U");
	document.getElementById('usedLetters').innerHTML = alphabet;
	replace();
}});
var v = document.getElementById('V');
v.addEventListener('click', () => {
	if(alphabet.indexOf("V") > -1){
    	message.textContent = "This letter was already used!";
    	message.style.color = "red";
	} else {
	document.getElementById('V').innerHTML = alphabet.unshift("V");
	document.getElementById('usedLetters').innerHTML = alphabet;
	replace();
}});
var w = document.getElementById('W');
w.addEventListener('click', () => {
	if(alphabet.indexOf("W") > -1){
    	message.textContent = "This letter was already used!";
    	message.style.color = "red";
	} else {
	document.getElementById('W').innerHTML = alphabet.unshift("W");
	document.getElementById('usedLetters').innerHTML = alphabet;
	replace();
}});
var x = document.getElementById('X');
x.addEventListener('click', () => {
	if(alphabet.indexOf("X") > -1){
    	message.textContent = "This letter was already used!";
    	message.style.color = "red";
	} else {
	document.getElementById('X').innerHTML = alphabet.unshift("X");
	document.getElementById('usedLetters').innerHTML = alphabet;
	replace();
}});
var y = document.getElementById('Y');
y.addEventListener('click', () => {
	if(alphabet.indexOf("Y") > -1){
    	message.textContent = "This letter was already used!";
    	message.style.color = "red";
	} else {
	document.getElementById('Y').innerHTML = alphabet.unshift("Y");
	document.getElementById('usedLetters').innerHTML = alphabet;
	replace();
}});
var z = document.getElementById('Z');
z.addEventListener('click', () => {
	if(alphabet.indexOf("Z") > -1){
    	message.textContent = "This letter was already used!";
    	message.style.color = "red";
	} else {
	document.getElementById('Z').innerHTML = alphabet.unshift("Z");
	document.getElementById('usedLetters').innerHTML = alphabet;
	replace();
}});
//checks if letter is already used

//checks solution
var reveal = [];
var lives = 3;
var show = document.getElementById('lives').innerHTML = lives;
var remainingletters = wordappearance.length;
var receive = document.getElementsByClassName('alphabet');
var letter = '';
var i = 0;
var remainingletters = wordappearance.length;
function replace(letter) {
	while (lives > i && reveal.indexOf(letter) >= i) {
    	if (wordappearance.includes(letter) == -1) {
        	lives--;
        	document.getElementById('Message').innerHTMl = "Yeek! Wrong guess!"
    	} else if(wordappearance.includes(letter) > -1){
                	answerArray[i] = letter;
                	remainingletters--;
                	document.getElementById('name') = letter;
                	document.getElementById('Message').innerHTMl = "Good Job!"
        	document.getElementById('name') = reveal.push('');
    	}
            	}
	var message = document.getElementById('Message');
	if (lives === 1) {
    	message.textContent = "Be extremely careful. This might be your last chance!!!";
    	message.style.color = "orange";
	} else if (lives === 0) {
    	message.textContent = "Sorry my friend, you are out of lives. You have lost. The word that you failed to guess was: " + wordappearance;
    	message.style.color = "red";
	} else if (remainingletters.length === 0) {
    	message.textContent = "Yay, You won!The secret word was: " + wordappearance;
    	message.style.color = "green";
	}
	return message;
}
