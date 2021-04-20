const verify = (data) => {
    const { firstName, lastName, email, password, confirmPassword } = data;
    const errores = [];

    if (!firstName && firstName.length <= 2) {
        errores.push({
            location: 'firstName',
            msg: 'First Name needs to be more than 0 characters',
        });
    }

    const regexFirstName = /[0-9]/;
    if (regexFirstName.test(firstName)) {
        errores.push({
            location: 'firstName',
            msg: 'You cannot be named with numbers',
        });
    }

    if (!lastName && lastName.length <= 0) {
        errores.push({
            location: 'lastName',
            msg: 'Last Name needs to be more than 0 characters',
        });
    }

    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!email && !regexEmail.test(email)) {
        errores.push({
            location: 'email',
            msg: 'Email needs to be formatted correctly',
        });
    }

    if (!password && password.length < 8) {
        errores.push({
            location: 'password',
            msg: 'Password must be greater than 8 characters',
        });
    }

    if (!confirmPassword && password !== confirmPassword) {
        errores.push({
            location: 'confirmPassword',
            msg: 'Passwords must match',
        });
    }

    return { errores, exito: !errores.length };
};

export default verify;
