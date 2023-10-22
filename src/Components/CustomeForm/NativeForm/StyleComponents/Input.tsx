import styled from '@emotion/styled'

type propsType = {
    id: string
    placeholder?: string
    inputType: string
    name?: string
}

export const InputField = ({id, placeholder,name,inputType}: propsType)=> {
    return (
        <ContainerField >
            <label htmlFor={id}>{placeholder}</label>
            <Input id={id} type={inputType} name={name} placeholder={placeholder}  />
        </ContainerField>
    )
}

export const ContainerField = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    
`

export  const Input = styled.input`
  width: 200px;
  height: 30px;
`

