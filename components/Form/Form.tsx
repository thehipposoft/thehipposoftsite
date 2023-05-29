import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
//Hook
import useContactForm from './useContactForm';
//Component
import MyInput from './CustomInput';
import styles from './form.module.scss';
import Button from '../common/Button';


const INTEREST_ARRAY = ['Web Design', 'SEO', 'Graphic Design', 'Branding', 'Other'];

let SELECTED_INTEREST = [];

const MyCustomForm = ({
    fields,
    onSuccessMessage,
    onErrorMessage,
    customClass,
    emailServiceURL,
    submitButtonLabel
}:any) => {
    const [messageSent, setMessageSent] = useState('');
    const [isAPILoading, setIsAPILoading] = useState(false);
    const [messageDescription, setMessageDescription] = useState('');
    const [selectedInterest, setSelectedInterest] = useState([]);
    const initialValues = {
        name: '',
        customerEmail: '',
        phone: '',
        message: '',
    };

    const {
        values,
        handleChange,
        errors,
        handleSubmit,
        setValues,
    } = useContactForm({
        initialValues,
        fields,
        onSubmit: () => {
            setIsAPILoading(true);
            axios.post(
                emailServiceURL,
                {
                    message: values.message,
                    name: values.name,
                    phone: values.phone,
                    interest: selectedInterest.join('- '),
                    customerEmail: values.customerEmail,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'accept': 'application/json, text/plain, */*',
                    },
                }
            )
                .then(function (response) {
                    setValues(initialValues);
                    setMessageSent('succeed');
                    setIsAPILoading(false);
                })
                .catch(function (error) {
                    setMessageDescription(error.toString());
                    setMessageSent('error');
                    setIsAPILoading(false);
                });
        }
    });

    const renderSentMessage = () => {
        if (messageSent === 'succeed') {
            return <div className={`message succeed w-full text-center mb-6`}>
                <h2 className={'mb-4 font-semibold'}>Thanks!</h2>
                <p>{onSuccessMessage}</p>
            </div>
        }
        if (messageSent === 'error') {
            return <div className={`message error w-full text-center mb-6`}>
                <h2 className={'mb-4 text-red-500'}>Algo salió mal</h2>
                <p>{onErrorMessage}</p>
                <p>{messageDescription}</p>
            </div>
        }
        return null;
    };

    const handleInterest = (interest:string) => {
        const newArray = [...selectedInterest]
        const index = newArray.indexOf(interest)
        if (index === -1) {
            newArray.push(interest)
        } else {
            newArray.splice(index, 1)
        }
        setSelectedInterest(newArray)
        console.log(newArray)
    }

    const isInterestActive = (interest:string) => selectedInterest.find((i) => i === interest)

    return (
        <form 
            className={`form ${customClass}`}
            onSubmit={(event) => handleSubmit(event)}
        >
            <div className='flex flex-wrap mb-4'>
                {
                    INTEREST_ARRAY.map((value) => 
                    <div 
                            className={`interest ${isInterestActive(value) ? 'text-white bg-[#291959]' : 'bg-white opacity-50 border-neutral-500'}`}
                            onClick={() => handleInterest(value)}
                            key={value}
                    >
                        {value}
                    </div>)
                }
            </div>
            {
                fields.map((field:any)=> {
                    const { name, type, label, validations, selectOptions, size, placeholder } = field;

                    switch (type) {
                        case 'text':
                            return (
                                <MyInput
                                    key={name}
                                    fieldName={name}
                                    fieldType={'text'}
                                    label={label}
                                    handleChange={handleChange}
                                    value={values[name]}
                                    validations={validations}
                                    errors={errors}
                                    size={size}
                                    placeholder={placeholder}
                                />
                            );
                        case 'textArea':
                            return (
                                <section className={'item'} key={name}>
                                    <label className={'contact-label'}>{label}</label>
                                    <textarea
                                        name={name}
                                        id={name}
                                        value={values[name]}
                                        rows={1}
                                        cols={40}
                                        className={'input_box'}
                                        placeholder={placeholder}
                                        onChange={(e) => handleChange(e, [])}
                                    />
                                </section>
                            );
                        case 'select':
                            return (
                                <select key={name}>
                                    {
                                        selectOptions.map((option:any, index:any) => <option value={option.value} key={index}>{option.label}</option>)
                                    }
                                </select>
                            );
                        default:
                            return (
                                <MyInput
                                    key={name}
                                    fieldName={name}
                                    fieldType={'text'}
                                    label={label}
                                    size={size}
                                    handleChange={handleChange}
                                    value={values[name]}
                                    validations={validations}
                                    errors={errors}
                                    placeholder={placeholder}
                                />
                            )
                    }
                })
            }
            {renderSentMessage()}
            <section className={`${styles.btn} text-white text-center`}>
                <input
                    type={'submit'}
                    value={submitButtonLabel ? submitButtonLabel : 'SEND'}
                    className={`${isAPILoading ? 'opacity-50' : ''}`}
                    disabled={isAPILoading}
                />
            </section>
        </form>
    )
};

MyCustomForm.propTypes = {
    fields: PropTypes.array,
    onSuccessMessage: PropTypes.string,
    onErrorMessage: PropTypes.string,
    customClass: PropTypes.string,
    submitButtonLabel: PropTypes.string,
    emailServiceURL: PropTypes.string,
    placeholder: PropTypes.string,
};

MyCustomForm.defaultProps = {
    fields: [{
        name: 'name',
        type: 'text',
        label: 'Name',
        placeholder: 'Name'
    }],
    onSuccessMessage: 'Success!',
    onErrorMessage: 'Something went wrong.'
};

export default MyCustomForm
