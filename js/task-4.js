const listenForm = document.querySelector(".login-form")

listenForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();

    const dataObjekt = {email,  password};
    if (email === "" || password === "") {
    return alert('All form fields must be filled in');
    } else { 
        console.log(dataObjekt);
        form.reset();
    };
    
};
    

