import React from 'react'
import { ButtonCustom } from './styles'

export default function Button({
    type,
    text,
    onClick,
}) {
    return (
        <ButtonCustom
            type={type}
            text={text}
            onClick={onClick}>
            {text}
        </ButtonCustom>

    )
}   
