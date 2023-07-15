const validation = (Fullname, Email, Password, Age, Gender) => {
        let flag = true;
        if(Fullname.length < 6){
                console.log("please enter a valid name at least 6 chars");
                flag = false;
        } 
        if(Email.indexOf('@gmail.com') === -1 && Email.indexOf('@yahoo.com') === -1){
                console.log("please enter a valid email");
                flag = false;
        }
        if(Password.length < 6){
                console.log("please enter a valid password at least 6 chars");
                flag = false;
        }
        if(Age < 18){
                console.log("Age must be start with 18 year");
                flag = false;
        }
        if(['male', 'female'].indexOf(Gender) == -1){
                console.log("Please enter a valid gender");
                flag = false;
        }
        return flag;
}

module.exports = validation;