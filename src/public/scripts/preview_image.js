
    function previewImage() {
        var file = document.getElementById("image").files;
        if (file.length > 0) {
            var fileReader = new FileReader();
 
            fileReader.onload = function (event) {
                document.getElementById("preview").setAttribute("src", event.target.result);
            };
 
            fileReader.readAsDataURL(file[0]);
        }
    }

 
//<form method="POST" action="/" enctype="multipart/form-data">
    //<input type="file" name="file" id="file" accept="image/*" onchange="previewImage();">
 
    //<img id="preview">
//</form>