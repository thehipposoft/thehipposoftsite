const required = (value:any) => value ? undefined : 'Requerido';


const email = (value:any) => {
    if (!value) {
        return 'Requerido';
    }
    return !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
        'El email incorrecto' : undefined;
};

export {
    required,
    email,
}