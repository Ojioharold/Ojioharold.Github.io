function showError(message) {
    var formError = document.querySelector('.form-error');
    if (!formError) {
        formError = document.createElement('div');
        formError.className = 'form-error';
        document.querySelector('form').insertBefore(formError, document.querySelector('form').firstChild);
    }

    formError.textContent = message;

    formError.style.color = 'red';
    formError.style.marginTop = '10px';
}

function clearError() {
    var formError = document.querySelector('.form-error');
    if (formError) {
        formError.textContent = '';
    }
}

function validateInputs() {
    var usernameInput = document.getElementById('name');
    var passwordInput = document.getElementById('password');
    var maxLength = 11;
    var errors = [];

    clearError();

    if (usernameInput.value.length > maxLength) {
        errors.push(`Username 输入内容不能超过 ${maxLength} 位数字。`);
    }

    if (passwordInput.value.length > maxLength) {
        errors.push(`Password 输入内容不能超过 ${maxLength} 位数字。`);
    }

    if (errors.length > 0) {
        showError(errors.join(' '));
        return false;
    }

    return true;
}

document.addEventListener('DOMContentLoaded', function () {
    var form = document.querySelector('form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        if (validateInputs()) {
            form.action = "数据科学学院.html"; 
            form.submit();
        }
    });
});