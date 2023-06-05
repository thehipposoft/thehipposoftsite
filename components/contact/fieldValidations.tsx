const required = (value:any) => value ? undefined : 'Required';


const email = (value:any) => {
    if (!value) {
        return 'Required';
    }
    return !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
        'Incorrect email format' : undefined;
};

export {
    required,
    email,
}