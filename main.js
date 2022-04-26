function clearForm() {
    document.getElementById('sentence').value = '';
    document.getElementById('letter').value = '';
  }

function validateForm()
{
    var _sentence = document.getElementById('sentence').value;
    var _letter = document.getElementById('letter').value;

    document.getElementById('errorInSentence').innerHTML = '';
    document.getElementById('errorInLetter').innerHTML = '';

    var sentenceRegex = /^([a-zA-Z]+[\s]*){1,5}$/;
    var letterRegex = /^[a-zA-z]$/;
    

    if (_sentence.trim() == "") {
        document.getElementById('errorInSentence').innerHTML = '*Blank are not allowed';
        _isValid = false;
      } else if (_sentence.length > 100 || !sentenceRegex.test(_sentence)) {
        document.getElementById('errorInSentence').innerHTML = "*Please Enter Valid Sentence";
        _isValid = false;
      }

      if (_letter.trim() == "") {
        document.getElementById('errorInLetter').innerHTML = '*Blank are not allowed';
        _isValid = false;
      } else if (_letter.length > 1 || !letterRegex.test(_letter)) {
        document.getElementById('errorInLetter').innerHTML = "*Please Enter Valid Sentence";
        _isValid = false;
      }
}

let index = str.indexOf('@');
if(index==-1)
{

 document.getElementById("demo").innerHTML = "The letter does not exist in the sentence";

}
else
{
document.getElementById("demo").innerHTML = str.slice(index+1,str.length); 
}
