

let osc;
let se_t;
let width = 1;
let height = 1;
let bits = [];
let iteration = 0;







function setup(){





	osc = new p5.Oscillator('sine');
	osc.amp(0);
	osc.freq(2000);



}

function draw(){

	if(iteration>bits.length){
		clearInterval(se_t);
		osc.amp(0);
	}
	
}




function send() {
	
	bits = []
data_parse()
	osc.start();
	se_t = setInterval(sound,500);
}

function sound(){

	osc.amp(bits[iteration]);
	iteration+=1;
	
}

function data_parse(){

			/*DATA PARSING*/
			let text = document.getElementById("txt").value;

let charBinTrans=[];
let split_text = text.split("");

for (let i = 0; i < split_text.length; i++) {
	 charBinTrans.push( split_text[i].charCodeAt(0).toString(2))   
}

for (let i = 0; i < charBinTrans.length; i++) {

   let tempArr = charBinTrans[i].split("")

   for (let j = 0; j <tempArr.length; j++){
	  bits.push(parseInt(tempArr[j]))
   }
}
/*DATA PARSING*/
console.log(text)
console.log(bits)
}