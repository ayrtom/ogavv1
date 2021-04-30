function validateForm() {
    var x = document.forms["myForm"]["title"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }