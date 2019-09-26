import { showMessage } from 'react-native-flash-message';

export const CustomToast = {
    showWarning,
    showError,
    showInfo,
    showSuccess,
};


function showWarning(body, callback) {
    show('Alert', body, 'warning', 'warning', callback);
}
function showError(body, callback) {
    show('Error', body, 'danger', 'danger', callback);
}
function showInfo(body, callback) {
    show('Information', body, 'info', 'info', callback);
}
function showSuccess(body, callback) {
    show('Success', body, 'success', 'success', callback);
}
//private
function show(title, body, category, symbol, callback) {
    showMessage({
        textStyle: { marginLeft: 5, marginRight: 5, },
        message: title,
        description: body,
        type: category,
        icon: symbol,
        floating: true,
        onPress: () => {
            if (callback !== null && callback !== undefined) {
                callback();
            }
        },
    });
}
