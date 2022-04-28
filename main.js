/*function clearForm() {
    document.getElementById('sentence').value = '';
    document.getElementById('letter').value = '';
  }*/

//declaring global
const trimErrorMsg = "The letter does not exist in the sentence";

function validateForm() {
  var _sentence = document.getElementById("sentence").value;
  var _letter = document.getElementById("letter").value;
  let _isValid = true;

  document.getElementById("errorInSentence").innerHTML = "";
  document.getElementById("errorInLetter").innerHTML = "";
  document.getElementById("result").innerHTML = "";

  //regex
  var sentenceRegex = /([a-zA-Z]+[\s]*)*/;
  var letterRegex = /^[a-zA-z]$/;

  if (_sentence.trim() == "") {
    document.getElementById("errorInSentence").innerHTML ="*Blank are not allowed";
    _isValid = false;
  } else if (_sentence.length > 500 || !sentenceRegex.test(_sentence)) {
    document.getElementById("errorInSentence").innerHTML ="*Please Enter Valid Sentence";
    _isValid = false;
  }

  if (_letter.trim() == "") {
    document.getElementById("errorInLetter").innerHTML ="*Blank are not allowed";
    _isValid = false;
  } else if (_letter.length > 1 || !letterRegex.test(_letter)) {
    document.getElementById("errorInLetter").innerHTML ="*Please Enter Valid Sentence";
    _isValid = false;
  }
  return _isValid;
}

//after validation submit it
function submitForm() {
  if (validateForm()) {
    result();
  }
}

//triming the result to display
function result() {
  var _sentence = document.getElementById("sentence").value;
  var _letter = document.getElementById("letter").value;
  let index = _sentence.indexOf(_letter); //to check the letter present in sentence
  document.getElementById("result").innerHTML = index == -1 ? trimErrorMsg : _sentence.slice(index + 1, _sentence.length); //validating the letter in sentence
}
