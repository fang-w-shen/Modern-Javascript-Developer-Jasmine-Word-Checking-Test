describe("The specification for word checking", function() {

  it("should have a checkWordCount function", function() {
    expect(checkWordCount).toBeDefined();
  });

  it("should limit to 100 or less words", function() {
  	let lessthan100words = "less than 100 words";
  	let morethan100words = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).";
    expect(checkWordCount(lessthan100words)).toBeTruthy();
    expect(checkWordCount(morethan100words)).toBeFalsy();
  });


  it("should have a duplicateCheck function", function() {
    expect(duplicateCheck).toBeDefined();
  });

  it("should check for duplicates", function() {
  	let noduplicates = "a b c";
  	let duplicates = "word and word"
    expect(duplicateCheck(noduplicates)).toBeTruthy();
    expect(duplicateCheck(duplicates)).toBeFalsy();
  });

  it("should have a verifyAlphaNumeric function", function() {
    expect(verifyAlphaNumeric).toBeDefined();
  });

  it("should check for non-AlphaNumeric characters", function() {
  	let alphanumeric = "a a123987 sodfjFASFS";
  	let non_alphanumeric ="09$28 09284 20";
    expect(verifyAlphaNumeric(alphanumeric)).toBeTruthy();
    expect(verifyAlphaNumeric(non_alphanumeric)).toBeFalsy();
  });
  	 



});


document.getElementById("textAreabutton").addEventListener("click",function(){  
        let value = document.getElementById("textArea").value;
        checkWordCount(value);
        duplicateCheck(value);
        verifyAlphaNumeric(value);
});