function checkName() {

    let name = document.getElementById("name").value;
    let regex = /^[a-zA-ZА-Яа-я]{2,15}$/;
    
    if (regex.test(name)) { // if testing of first is true
        document.getElementById("name").style.borderColor = "green";
        return true;
    } 
    else {// if it's not
        document.getElementById("name").style.borderColor = "red";
        return false;
    }
}

function checkLastName() {

    let lastName = document.getElementById("lastName").value;
    let regex = /^[a-zA-ZА-Яа-я]{2,15}$/;
    
    if (regex.test(lastName)) { // if testing of first is true
        document.getElementById("lastName").style.borderColor = "green";
        return true;
    } 
    else {// if it's not
        document.getElementById("lastName").style.borderColor = "red";
        return false;
    }
}

function checkTel() {

    let tel = document.getElementById("tel").value;
    let regex = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
    
    if (regex.test(tel)) { // if testing of first is true
        document.getElementById("tel").style.borderColor = "green";
        return true;
    } 
    else {// if it's not
        document.getElementById("tel").style.borderColor = "red";
        return false;
    }
}

function checkMail() {

    let mail = document.getElementById("mail").value;
    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+$/;
    
    if (regex.test(mail)) { // if testing of first is true
        document.getElementById("mail").style.borderColor = "green";
        return true;
    } 
    else {// if it's not
        document.getElementById("mail").style.borderColor = "red";
        return false;
    }
}

// function checkDate() {

//     let date = document.getElementById("date").value;
//     let regex = /^[0-9]{2}+.+[0-9]{2}+.+[0-9]{4}$/;
    
//     if (regex.test(date)) { // if testing of first is true
//         document.getElementById("date").style.borderColor = "green";
//         return true;
//     } 
//     else {// if it's not
//         document.getElementById("date").style.borderColor = "red";
//         return false;
//     }
// }
