export const required = (value) => {
    if(value) return undefined;

    return "Field is required";
}

export const validateName = (name) => {//return true if passed
    return undefined;

    let named = /^[a-zA-Z]+ [a-zA-Z]+$/;
    if(name.match(named)) return undefined;

    return ("Wrong name!");
}

export const validateNpi = (npi) => {  //return true if passed
    return undefined;

    let npino = /^\d{10}$/;
    if(npi.match(npino)) return undefined;

    return("Wrong NPI number!");
}

export const validateAddress = (address) => {  //return true if passed
    return undefined;

    let addressd = /^[a-zA-Z0-9\s,'-]*$/;
    if(address.match(addressd)) return undefined;

    return ("Wrong address!");
}

export const validatePhone = (phone) => {   //return true if passed
    return undefined;

    let phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(phone.match(phoneno)) return undefined;

    return ("Wrong phone number!");

}

export const validateEmail = (email) => {   //return true if passed
    return undefined;

    let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.match(mailFormat)) return undefined;

    return("Wrong email address!");
}

// export const maxLength30 = (value) => {
//     if(value && value.length > 30) return "Max length is 30 symbols";
//
//     return undefined;
// }

//thunk
export const maxLengthCreator = (maxLength) => (value) => {
    //if(value && value.length > maxLength) return 'Max length is ${maxLength} symbols';
    if(value && value.length > maxLength) return `Max length is ${maxLength} symbols`;
    return undefined;
}