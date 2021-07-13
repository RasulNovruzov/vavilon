import React, { useContext } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="email" placeholder="Введите номер" />
        <Input type="password" placeholder="Пароль" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit">Регистрация</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Есть аккаунт?
        <BoldLink href="#" onClick={switchToSignin}>
          Войти
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}