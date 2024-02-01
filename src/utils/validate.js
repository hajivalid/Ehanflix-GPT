export const inputValidation = (email, password) => {
    const emailInput = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const passwordInput = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if (!emailInput) return 'Incorrect Email address ';
    if (!passwordInput) return 'Incorrect password for '+ email;
    return null;
}