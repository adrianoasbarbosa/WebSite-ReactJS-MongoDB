import React from 'react'
import { InputCustom } from './styles'

export default function Input({
    name,
    placeholder,
    onChange,
    type,
}) {
    return (
        <InputCustom
            name={name}
            placeholder={placeholder}
            onChange={onChange}
            type={type}
        />
    )
}   
