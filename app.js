const validations = require('./Validation')

let ok = validations('Haidy Yasser', '*********', 20, 'Female');
if(ok){
        console.log("Welcome to our website");
} else {
        console.log("Please enter a valid data");
}