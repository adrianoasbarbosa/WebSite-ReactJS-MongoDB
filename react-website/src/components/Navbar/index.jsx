import React from 'react'
import { HeaderContainer, ItensContainer, Logo } from './styles'

export default function Navbar() {
    return (
        <HeaderContainer>
            <Logo href="/">Logo</Logo>

            <nav>
                <ItensContainer href="/home">Home</ItensContainer>
                <ItensContainer href="/">Produtos</ItensContainer>
                <ItensContainer href="/">Carrinho</ItensContainer>
                <ItensContainer href="/">Contatos</ItensContainer>
                <ItensContainer href="/">Perfil</ItensContainer>
            </nav>
        </HeaderContainer>
    )
}
