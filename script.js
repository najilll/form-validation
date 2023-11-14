function validation() {

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
function input(){
    let a=document.getElementById("name").value
    
    if(a===""){
        document.getElementById("name").classList.add("input-edit")
    }
    else{
        document.getElementById("name").classList.remove("input-edit")
    }

    let b=document.getElementById("birth").value
    
    if (b==="") {
        document.getElementById("birth").classList.add("input-edit")
    } else {
        document.getElementById("birth").classList.remove("input-edit")
    }
    
    let c=document.getElementById("email").value

    if(c===""){
        document.getElementById("email").classList.add("input-edit")
    }else{
        document.getElementById("email").classList.remove("input-edit")
    }

    let d=document.getElementById("mobile_number").value

    if(d===""){
        document.getElementById("mobile_number").classList.add("input-edit")
    }else{
        document.getElementById("mobile_number").classList.remove("input-edit")
    }

    let e=document.getElementById("gender").value

    if(e===""){
        document.getElementById("gender").classList.add("input-edit")
    }else{
        document.getElementById("gender").classList.remove("input-edit")
    }

    let f=document.getElementById("occupation").value

    if(f===""){
        document.getElementById("occupation").classList.add("input-edit")

    }else{
        document.getElementById("occupation").classList.remove("input-edit")
    }
    
    let g=document.getElementById("id_type").value

    if(g===""){
        document.getElementById("id_type").classList.add("input-edit")
    }else{
        document.getElementById("id_type").classList.remove("input-edit")
    }

    let h=document.getElementById("id_number").value

    if(h===""){
        document.getElementById("id_number").classList.add("input-edit")
    }else{
        document.getElementById("id_number").classList.remove("input-edit")
    }

    let i=document.getElementById("issue_authority").value

    if(i===""){
        document.getElementById("issue_authority").classList.add("input-edit")
    }else{
        document.getElementById("issue_authority").classList.remove("input-edit")
    }

    let j=document.getElementById("issue_date").value

    if(j===""){
        document.getElementById("issue_date").classList.add("input-edit")
    }else{
        document.getElementById("issue_date").classList.remove("input-edit")
    }

    let k=document.getElementById("issue_state").value

    if(k===""){
        document.getElementById("issue_state").classList.add("input-edit")
    }else{
        document.getElementById("issue_state").classList.remove("input-edit")
    }

    let l=document.getElementById("expiry_date").value

    if(l===""){
        document.getElementById("expiry_date").classList.add("input-edit")
    }else{
        document.getElementById("expiry_date").classList.remove("input-edit")
    }

}

function btn(){
    validation()
    input()
}