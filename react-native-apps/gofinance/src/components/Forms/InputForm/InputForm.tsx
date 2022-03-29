import React from 'react'
import { Input } from '../Input/Input'
import { Container } from './style'
import { TextInputProps } from 'react-native'
import { Control, Controller } from 'react-hook-form'

type Props = TextInputProps & {
    control: Control;
    name: string;
}

export const InputForm = ({control, name, ...rest}:Props) => {

    return (
        <Container>
            <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) =>(
                <Input  {...rest}/>
            )}
            name={name}
            />
        </Container>
    )
}