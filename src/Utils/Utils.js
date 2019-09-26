import Images from "../res/Images";

export const Utils = {
    validateInputEmail,
    validateInputPassword,
    getCategoryIcon,
    getCategoryIconUsingIndex
};

function validateInputEmail(email) {
    if (email === undefined) {
        return false;
    }
    var regex = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
    return regex.test(email);
}

function validateInputPassword(password) {
    if (password === undefined && password.length < 8) {
        return false;
    }
    var letter = /[a-zA-Z]/;
    var number = /[0-9]/;
    return number.test(password) && letter.test(password);
}

function getCategoryIcon(categoryName, isSelected) {
    switch (categoryName) {
        case 'category A':
            return isSelected ? Images.aSelected : Images.a;
        case 'category B':
            return isSelected ? Images.bSelected : Images.b;
        case 'category C':
            return isSelected ? Images.cSelected : Images.c;
        default:
            return isSelected ? Images.aSelected : Images.a;
    }
}

function getCategoryIconUsingIndex(categoryName) {
    switch (categoryName) {
        case 1:
            return Images.b;
        case 2:
            return Images.c;
        default:
            return Images.a;
    }
}
