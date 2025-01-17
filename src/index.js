// Select the form using querySelector
const form = document.querySelector('form');

// Attached a submit event listener to the form
form.addEventListener('submit', function(e) {
    e.preventDefault(); // Stop the form from submitting
    // Capture formData
    const formData = {
        name: e.target.name.value,
        email: e.target.email.value,
        phone: e.target.phone.value,
        reason: e.target.reason.value,
        message: e.target.message.value
    };

    renderConfirmation(formData);
    console.log(formData); // Log the formData object
});


function renderConfirmation(formData) {
    // Create a heading element
    const h2 = document.createElement('h2');
    h2.textContent = 'Submission Confirmation';

    // Create paragraph elements for each form data entry
    const nameP = document.createElement('p');
    nameP.textContent = `Name: ${formData.name}`;

    const emailP = document.createElement('p');
    emailP.textContent = `Email: ${formData.email}`;

    const phoneP = document.createElement('p');
    phoneP.textContent = `Phone: ${formData.phone}`;

    const reasonP = document.createElement('p');
    reasonP.textContent = `Reason for Contact: ${formData.reason}`;

    const messageP = document.createElement('p');
    messageP.textContent = `Message: ${formData.message}`;

    // Select the container where the data should be rendered
    const section = document.querySelector('section'); // Ensure your HTML has a <section> or similar element
    section.innerHTML = ''; // Clear previous content

    // Append all elements to the container
    section.append(h2, nameP, emailP, phoneP, reasonP, messageP);
}


/*

const renderConfirmation = (formData) => {
    const h2 = document.createElement("h2");
    h2.textContent = "Submission Confirmation";
  
  const nameP = document.createElement("p");
  nameP.textContent = formData.name;
  
  const emailP = document.createElement("p");
  emailP.textContent = formData.email;
  
  const phoneP = document.createElement("p");
  phoneP.textContent = formData.phone;
  
  const reasonP = document.createElement("p");
  reasonP.textContent = formData.reason;
  
  const messageP = document.createElement("p");
  messageP.textContent = formData.message;
  
  const section = document.querySelector("section");
  section.innerHTML = "";
  
  section.append(h2, nameP, emailP, phoneP, reasonP, messageP);
  };

*/

