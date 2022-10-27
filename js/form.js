$ = document.querySelector.bind(document);

window.onload = function() {
    declareEvents();
}

function declareEvents() {
    $("#id_form").addEventListener("submit", function(e) {
        e.preventDefault();
        let email_val = $("#id_email").value;
        if ($("#id_name").value.length < 2) {
            alert("Enter valid name");
            return;
        } else if (!email_val.includes("@") || !email_val.includes(".") || email_val.length < 6) {
            alert("* Please Enter Valide Email '@' and '.'");
            return;
        } else if ($("#id_phone").value.length < 10) {
            alert("please enter phone number");
            return;
        }
        alert("Thank you we will be contact :)");

    })

    $("#id_name").addEventListener("keydown", function(e) {
        console.log(e.key);
        if (e.key == "Enter") {
            let search_val = $("#id_name").value;
            doApi(search_val);
        }
    })
}