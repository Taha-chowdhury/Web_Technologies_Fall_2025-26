let registrations = [];
 
function validate(){
    let name = document.getElementById("name").value.trim();
    let company = document.getElementById("company").value.trim();
    let email = document.getElementById("email").value.trim();
    let attend = document.querySelector("input[name='attend']:checked");
 
    let valid = true;
 
    if(name.length < 6 || name.length > 100){
        document.getElementById("nameErr").innerHTML = "Name must be between 6 and 100 characters.";
        valid = false;
    }else{
        document.getElementById("nameErr").innerHTML = "";
    }
 
    if(!email.includes("@") || !email.includes(".")){
        document.getElementById("emailErr").innerHTML = "Please enter a valid professional email address.";
        valid = false;
    }else{
        document.getElementById("emailErr").innerHTML = "";
    }

    if(company.length > 100){
        document.getElementById("CErr").innerHTML = "Maximum 100 characters";
        valid = false;
    }else{
        document.getElementById("CErr").innerHTML = "";
    }
 
  
    if(!attend){
        document.getElementById("attendErr").innerHTML = "Please select your attendance type.";
        valid = false;
    }else{
        document.getElementById("attendErr").innerHTML = "";
    }
 
    return valid;
}
 
 
function handleSubmit(){
    if(validate()){
        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let company = document.getElementById("company").value.trim();
        let attend = document.querySelector("input[name='attend']:checked").value;
 
        registrations.push({
            name, email, company, attend
        });
 
        alert("Registration Successful!");
        updateStats();
 
        document.getElementById("regForm").reset();
    }
}
 
 
 
function updateStats(){
    let total = registrations.length;
    let virtual = registrations.filter(r => r.attend === "Virtual").length;
    let inPerson = registrations.filter(r => r.attend === "In-Person").length;
 
    document.getElementById("totalReg").innerHTML = total;
    document.getElementById("virtualCount").innerHTML = virtual;
    document.getElementById("inCount").innerHTML = inPerson;
}
 
 
 
function toggleStats(){
    let panel = document.getElementById("statsPanel");
    let btn = document.getElementById("statsBtn");
 
    if(panel.style.display === "none"){
        panel.style.display = "block";
        btn.innerText = "Hide Event Analytics";
    }else{
        panel.style.display = "none";
        btn.innerText = "Show Event Analytics";
    }
}
 