import React from 'react';

import {
    LabelStyle,
    ContentStyle,
    InputStyle,
} from './style'

import { ErrorMessage } from './ErrorMessage';

const Input = ({ name, label, type, register, errors, number, placeholder, disabled }) => {
    return (
        <LabelStyle >
            <ContentStyle>{label}</ContentStyle>
            <InputStyle
                type={type}
                name={name}
                {...register(name)}
                disabled={disabled}
                placeholder={placeholder}
            />
            {(!!number) &&
                <span style={{ fontSize: '10px', marginTop: '5px' }}>Digite apenas números</span>
            }
            <ErrorMessage>
                {errors[name]?.message}
            </ErrorMessage>
        </LabelStyle>
    );
}

const Field = {
    Input,
}

export default Field;