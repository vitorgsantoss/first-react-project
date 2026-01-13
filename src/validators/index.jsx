export function isValidName(name){
    if (name.length < 3 || name > 255) return false;
    return true;
}

export function isValidPassword(password){
    if (password.length < 6 || password.length > 50) return false;
    return true;
}