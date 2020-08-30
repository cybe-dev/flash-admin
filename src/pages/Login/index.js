import React from "react";
import { MainContainer, TextInput, Button } from "../../components";
import { faUser, faKey } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { AuthContext, LanguageContext } from "../../contexts";

const Login = (props) => {
  const { control, handleSubmit } = useForm();
  const { setAuth } = React.useContext(AuthContext);
  const { dictionary } = React.useContext(LanguageContext.LanguageContext);

  const loginSubmit = (data) => {
    setAuth(data.username);
  };
  return (
    <MainContainer>
      <div className="bg-dominant w-1/2 h-screen hidden lg:block"></div>
      <div className="mt-12 lg:mt-0 py-5 px-10 lg:px-24 flex flex-col items-center justify-start lg:justify-center w-full md:w-2/3 lg:w-1/2">
        <h1 className="text-4xl text-black-600 exo font-bold">TokoLoka</h1>
        <form className="mt-12 w-full" onSubmit={handleSubmit(loginSubmit)}>
          <TextInput
            type="text"
            label={dictionary.usernameLabel}
            icon={faUser}
            name="username"
            control={control}
          />
          <TextInput
            type="password"
            label={dictionary.passwordLabel}
            icon={faKey}
            name="password"
            control={control}
          />
          <div className="text-right">
            <Button type="submit" className="bg-dominant px-10">
              {dictionary.login}
            </Button>
          </div>
        </form>
      </div>
    </MainContainer>
  );
};

export default Login;
