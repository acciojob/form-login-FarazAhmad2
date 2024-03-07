function getFormvalue() {
    //Write your code here
	var formData = new FormData(document.getElementById('form1'));
	var formValues = '';
  for (var pair of formData.entries()) {
    formValues += pair[1].trim() + ' ';
  }
  alert(formValues.trim());

}
