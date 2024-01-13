
function show()
{
    let checkbox = document.getElementById("showhello");
    let inputpassword = document.getElementById("inputpassword");
    if(checkbox.checked){
        inputpassword.type = "text";
        inputpassword.fontSize = "larger";
    }
    else{
        inputpassword.type = "password";
    }
}
