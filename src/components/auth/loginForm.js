import React, { useContext } from "react";
import { BoldLink, BoxContainer, FormContainer, Input, MutedLink, SubmitButton } from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import { Link } from "react-router-dom";

export function LoginForm(props) {
    const { switchToSignup } = useContext(AccountContext);

    return (
        <BoxContainer>
            <FormContainer>
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Password" />
            </FormContainer>
            <Marginer direction="vertical" margin={10} />
            <MutedLink href="#">Забыли пароль?</MutedLink>
            <Marginer direction="vertical" margin="1.6em" />
            {/* <SubmitButton type="submit" onClick={ Home }>Signin</SubmitButton> */}
            <Link to='/'>Войти</Link>
            <Marginer direction="vertical" margin="1em" />
            <MutedLink href="#">
                Нет аккаунта?{" "}
                <BoldLink href="#" onClick={switchToSignup}>
                    Регистрация
                </BoldLink>
            </MutedLink>
        </BoxContainer>
    );
}