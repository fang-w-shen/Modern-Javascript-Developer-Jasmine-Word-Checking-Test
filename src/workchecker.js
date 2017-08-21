function checkWordCount (input) {
	if(input.split(" ").length>=100) {
		console.log("more than 100 words");
			
		return false;
	}
	return true;
}

function duplicateCheck (input) {
	let arr = input.split(' ').sort();
	let truth = true;
	if (arr.length > 1) {
		arr.forEach((item,index)=>{
			if(item===arr[index+1]) {
				truth = false;
				console.log("there is a duplicate");
					
			}
		})
		if (truth) {
			return true;
		}
		else {
			return false;
		}
		
	} else {
		return true;
	}
	
}

function verifyAlphaNumeric (input) {
	if (input.match(/[^a-z0-9 ]/gi)===null) {
		return true;
	}
	else if (input.match(/[^a-z0-9 ]/gi).length>0 ){
		console.log("non alphanumeric character");
		return false;
	}
}