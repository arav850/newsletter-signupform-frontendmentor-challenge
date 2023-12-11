const form = document.querySelector("form")
const card1 = document.querySelector(".card")
const card2 = document.querySelector(".card-2")
const submitBtn = document.querySelector("#submitBtn")
const emailInput = document.querySelector("#email")
const emailId = document.querySelector("#getemailid")

form.addEventListener("submit", (e) => {
    e.preventDefault();
    var email = document.getElementById("email");
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.value.match(mailformat)) {
        card1.classList.add("hide")
        emailId.innerHTML = `${email.value}`;
        card2.classList.remove("hide")
    }
    else if (!email.value) {
        setError(email.value, "Email can't be null")
    }
    else {
        setError(email.value, "valid email required")

    }

});
emailInput.addEventListener('input', function () {
    if (emailInput.value.trim() !== '') {
        submitBtn.style.backgroundColor = 'hsl(4, 100%, 67%)';
    }
    else {
        submitBtn.style.backgroundColor = 'hsl(235, 18%, 26%)';
    }

})

function setError(value, msg) {
    const inputclass = document.querySelector(".myInputClass")
    inputclass.style.borderColor = "red";
    inputclass.style.backgroundColor = "hsl(5,92%,95%)";
    inputclass.style.display = "inline";
    const spanText = document.getElementById("errormsg")
    spanText.style.display = "inline";
    spanText.innerHTML = `${msg}`
    // parentBox.className("")
}



