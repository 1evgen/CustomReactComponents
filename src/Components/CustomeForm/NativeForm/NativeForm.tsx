import styled from '@emotion/styled'
import {InputField} from "Components/CustomeForm/NativeForm/StyleComponents/Input";

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
                <InputField id={'fieldSubmit'}
                            inputType={'submit'}/>
            </form>
        </Box>

    )
}


const Box = styled.div`
  border: 2px solid black;
  width: 350px;
  height: 400px;
  
  display: flex;
  flex-direction: column;
  align-items: center;
`

const HeaderForm = styled.h1`
  font-weight: normal;
    
`

