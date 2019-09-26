import Strings from "../res/Strings";

export const LoginService = {
    validateUserCredentials,
};

function validateUserCredentials(email, password) {
    const serverEmail = 'test@ideavate.com';
    const serverPassword = 'ideavate@123';
    const data = {
        status: 200,
        message: '',
    };
    if (email !== serverEmail) {
        data.status = 401;
        data.message = Strings.serverMessage.serverEmailWrong
    } else if (password !== serverPassword) {
        data.status = 401;
        data.message = Strings.serverMessage.serverPasswordWrong
    } else {
        data.message = Strings.serverMessage.serverLoginSuccessMessage
    }
    return data;
}
