function checkWordCount (input) {
	if(input.split(" ").length>=100) {
		alert(`${input.split(" ").length-100} more word(s) than 100 words`);
			
		return false;
	}
	return true;
}

function duplicateCheck (input) {
	let arr = input.toLowerCase().split(' ').sort();
	let truth = true;
	let counter = 0;
	if (arr.length > 1) {
		arr.forEach((item,index)=>{
			if(item===arr[index+1]) {
				truth = false;
				counter+=1;
			}
		})
		if (truth) {
			return true;
		}
		else {
			alert(`${counter} duplicate(s)`);
			return false;
		}
		
	} else {
		return true;
	}
	
}

function verifyAlphaNumeric (input) {
	let counter=0;
	if (input.match(/[^a-z0-9 ]/gi)===null) {
		return true;
	}
	else if (input.match(/[^a-z0-9 ]/gi).length>0 ){
		alert(`${input.match(/[^a-z0-9 ]/gi).length} non-alphanumeric character(s)`);
		return false;
	}
}