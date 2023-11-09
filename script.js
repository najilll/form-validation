function btn() {

    let name = document.getElementById("name").value
    let dob = document.getElementById("birth").value
    let email = document.getElementById("email").value

    let mnumber = document.getElementById("mobile_number").value
    let gender = document.getElementById("gender").value
    let occupation = document.getElementById("occupation").value

    let idType = document.getElementById("id_type").value
    let idNumber = document.getElementById("id_number").value
    let issueAthourity = document.getElementById("issue_authority").value

    let issueDate = document.getElementById("issue_date").value
    let issueState = document.getElementById("issue_state").value
    let expiryDate = document.getElementById("expiry_date").value

    if (!name || !dob || !email || !mnumber || !gender || !occupation || !idType || !idNumber || !issueAthourity || !issueDate || !issueState || !issueState || expiryDate === "") {
        alert("invalid input")
        return false;
    }
        alert("success")
        window.open("welcome.html")
        return true;
        
    

}