import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Input from '../../components/Input';
import axiosInstance from '../../utils/axiosInstance';
import { validateEmail } from '../../utils/helper';
import { Container, Form, SubContainerSign } from './styles';

export default function Cadastro() {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const handleCadastro = async (e) => {
        e.preventDefault();

        if (!name) {
            setError("Por favor coloque seu nome!");
            return;
        }
        if (!validateEmail(email)) {
            setError("Por favor coloque um email valido!");
            return;
        }

        if (!password) {
            setError("Por favor coloque uma senha valida!")
            return;
        }

        setError('');


        try {
            const response = await axiosInstance.post("/register", {
                name: name,
                email: email,
                password: password,
            });

            if (response.data && response.data.error) {
                setError(response.data.message)
                return
            }

            if (response.data && response.data.accessToken) {
                localStorage.setItem("token", response.data.accessToken)
                navigate("/login")
            }
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                setError(error.response.data.message);
            } else {
                setError("Um erro inesperado ocorreu. Por favor tente denovo!");
            }
        }
    }
    return (
        <Container>
            <Form
                onSubmit={handleCadastro}
            >
                <h1>Faça o seu Cadastro</h1>
                <Input
                    name='nome'
                    placeholder='Digite o seu nome'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type='text'
                />
                <Input
                    name='email'
                    placeholder='Digite o seu email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type='email'
                />
                <Input
                    name='senha'
                    placeholder='Digite a sua senha'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type='password'
                />
                {error && <p>{error}</p>}
                <Button
                    type='submit'
                    text='Cadastrar'
                />
                <SubContainerSign>
                    <p>Já possui conta?</p>
                    <Link to="/">Entrar</Link>
                </SubContainerSign>
            </Form>
        </Container>
    )
}
