const image_input = document.querySelector("#idoso");

var upload = "";

image_input.addEventListener("change", function(){
    const reader = new FileReader();
    reader.addEventListener("load", () =>{
        upload = reader.result;
        document.querySelector("#imageI").style.backgroundImage = `url(${upload})`
        document.querySelector("#imageI").style.backgroundSize = `cover`
    })
    reader.readAsDataURL(this.files[0]);
})