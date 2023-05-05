function showAlert(alertmessg){
    document.querySelector(".alertmsg").style="display:block";
    document.querySelector(".alertmsg").innerText=alertmessg;
}


module.exports= showAlert;