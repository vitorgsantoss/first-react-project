export function isValidName(name){
    if (name.length < 3 || name > 255) return false;
    return true;
}

