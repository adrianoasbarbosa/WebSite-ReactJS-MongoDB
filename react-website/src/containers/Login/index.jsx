import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Input from '../../components/Input';
import axiosInstance from '../../utils/axiosInstance';
import { validateEmail } from '../../utils/helper';
import { Container, Form, SubContainerSign } from './styles';

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setError("Por favor coloque um email valido!");
            return;
        }

        if (!password) {
            setError("Por favor coloque uma senha valida!")
            return;
        }

        setError("");

        try {
            const response = await axiosInstance.post("/login", {
                email: email,
                password: password,
            });

            if (response.data && response.data.accessToken) {
                localStorage.setItem("token", response.data.accessToken)
                navigate('home');
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
            <Form onSubmit={handleLogin}>
                <h1>Faça o seu Login</h1>
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
                    text='Entrar'
                />
                <SubContainerSign>
                    <p>Não possui conta?</p>
                    <Link to="cadastro">Cadastrar</Link>
                </SubContainerSign>
            </Form>
        </Container>
    )
}
