export const required = (value) => {
    if(value) return undefined;

    return "Field is required";
}

export const maxLength17 = (value) => {
    if(value && value.length > 17) return "Length should be 17 symbols";

    return undefined;
}

export const minLength17 = (value) => {
    if(value && value.length < 17) return "Length should be 17 symbols";

    return undefined;
}