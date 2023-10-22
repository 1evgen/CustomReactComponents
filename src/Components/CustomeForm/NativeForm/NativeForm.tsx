import styled from '@emotion/styled'
import {InputField} from "Components/CustomeForm/NativeForm/StyleComponents/Input";
import style from './containerForms.module.css'

export const NativeForm = ()=> {
    return (
        <Box>
            <form method='post'>
                <HeaderForm> Sign In </HeaderForm>
                <InputField id={'fieldName'}
                            name={'user-name'}
                            inputType={'text'}
                            placeholder={'Enter name'}/>
                <InputField id={'fieldEmail'}
                            name={'user-email'}
                            inputType={'email'}
                            placeholder={'Enter email'}/>
                <InputField id={'fieldPassword'}
                            name={'user-password'}
                            inputType={'password'}
                            placeholder={'Enter password'}/>
                <InputField id={'rememberMe'}
                            inputType={'checkbox'}

                />
                <InputField id={'fieldSubmit'}
                            inputType={'submit'}
                            placeholder={'Remember me'}
                />

            </form>
        </Box>

    )
}

const Box = styled.div`
  border: 2px solid black;
  width: 300px;
  height: 70%;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  background-color: #ffffff;
`

const HeaderForm = styled.h1`
 
  
`

