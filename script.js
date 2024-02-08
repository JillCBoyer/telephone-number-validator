const input = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const output = document.getElementById('results-div');


checkBtn.addEventListener('click', () => {
    output.textContent = ``;

    if (input.value === "") {
        return alert(`Please provide a phone number`)
    }

    const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
    
    if (regex.test(input.value)) {
        output.textContent = `${input.value} is a valid US number: `;
    } else {
        output.textContent = `${input.value} is not a valid US number`;
    }  
})

clearBtn.addEventListener('click', () => {
    input.value = "";
    output.textContent = "";
})