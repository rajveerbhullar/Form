function clearErrors(){

    errors = document.getElementsByClassName('formerror');
    for(let item of errors)
    {
        item.innerHTML = "";
    }


}
function seterror(id, error){
    //sets error inside tag of id 
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;

}

function validateForm(){
    var returnval = true;
    clearErrors();
    var name = document.forms['myForm']["fname"].value;
    if (name.length<5){
        seterror("name", "*Length of name is too short");
        returnval = false;
    }

    if (name.length == 0){
        seterror("name", "*Length of name cannot be zero!");
        returnval = false;
    }

    var faname = document.forms['myForm']["fathername"].value;
    if (name.length<5){
        seterror("faname", "*Length of name is too short");
        returnval = false;
    }
    
    if (name.length == 0){
        seterror("faname", "*Length of name cannot be zero!");
        returnval = false;
    }
    var Date= document.forms['myForm']["bDate"].value;
    
    if (Date.length == 0){
        seterror("Date", "*Date of birth  cannot be null!");
        returnval = false;
    }

    var code= document.forms['myForm']["pcode"].value;
    if (code.length<5){
        seterror("code", "*Length of postal code is too short");
        returnval = false;
    }
    
    if (code.length == 0){
        seterror("code", "*Length of postal code cannot be zero!");
        returnval = false;
    }

    var add = document.forms['myForm']["Address"].value;
    
    if (add.length == 0){
        seterror("add", "*Address cannot be null");
        returnval = false;
    }

    var email = document.forms['myForm']["Email"].value;
    if (email.length == 0){
        seterror("add", "*Email cannot be zero!");
        returnval = false;
    }

    var phone = document.forms['myForm']["Mobile"].value;
    
    if (phone.length == 0){
        seterror("phone", "*Please enter phone number ");
        returnval = false;
    }

    return returnval;
}