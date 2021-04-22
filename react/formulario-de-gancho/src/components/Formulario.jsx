import React, { useRef, useState } from 'react';
import verify from '../hooks/useFormVerification';

const Formulario = () => {
    const [formInfo, setFormInfo] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const formRef = useRef(null);
    const [formSuccess, setFormSuccess] = useState(false);

    const showError = (errores) => {
        formRef.current
            .querySelectorAll(`[data-error-de]`)
            .forEach((span) => (span.innerText = ''));
        errores.forEach((err) => {
            const { location, msg } = err;
            const span = formRef.current.querySelector(
                `[data-error-de="${location}"]`,
            );
            span.innerText = msg;
        });
    };

    const getFormData = (target) => {
        const form = target.closest('form');
        const formData = new FormData(form);
        const data = {};
        for (let [key, value] of formData.entries()) data[key] = value;
        return data;
    };

    const onChange = (e) => {
        e.preventDefault();
        const data = getFormData(e.target);
        setFormInfo(data);
        const { errores } = verify(data);
        showError(errores);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const verified = verify(formInfo, true);
        if (verified.exito === true) {
            console.log('%cExito!', 'font-size: 2rem; color: limegreen;');
            setFormSuccess(true);
            formRef.current.style.display = 'none';
        } else {
            showError(verified.errores);
            // const errorMessages = verified.errores.map(({msg}) => msg).join('\n\n');
            // alert(errorMessages);
            console.error(verified.errores);
        }
    };

    const mensaje = (
        <h3>{formSuccess ? 'Thank You, Bye' : 'Please fill out the form'}</h3>
    );

    const { firstName, lastName, email, password, confirmPassword } = formInfo;

    return (
        <div className="container">
            {mensaje}
            <form
                className="form-test"
                onChange={onChange}
                onSubmit={onSubmit}
                ref={formRef}
            >
                <div>
                    <label htmlFor="firstName">First Name </label>
                    <input name="firstName" />
                    <span data-error-de="firstName"></span>
                </div>
                <div>
                    <label htmlFor="lastName">Last Name </label>
                    <input name="lastName" />
                    <span data-error-de="lastName"></span>
                </div>
                <div>
                    <label htmlFor="email">Email </label>
                    <input name="email" />
                    <span data-error-de="email"></span>
                </div>
                <div>
                    <label htmlFor="password">Password </label>
                    <input type="password" name="password" />
                    <span data-error-de="password"></span>
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm Password </label>
                    <input type="password" name="confirmPassword" />
                    <span data-error-de="confirmPassword"></span>
                </div>

                <input type="submit" />
            </form>
            <div>
                <div>First Name: {firstName}</div>
                <div>Last Name: {lastName}</div>
                <div>Email: {email}</div>
                <div>Password: {password}</div>
                <div>Confirm Password: {confirmPassword}</div>
            </div>
        </div>
    );
};

export default Formulario;
