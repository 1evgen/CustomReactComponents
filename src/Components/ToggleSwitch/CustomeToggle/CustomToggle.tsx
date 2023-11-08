
import style from './CustomeToggle.module.css'
import {ChangeEvent, useState} from "react";
import styled from "styled-components";
import {css} from "styled-components/native";

export const CustomToggle = () => {
    const  [isChecked, setIsChecked] =  useState(false)

    const onToggle = (e: ChangeEvent<HTMLInputElement>)=> {
            setIsChecked(e.currentTarget.checked)
    }


    return (
        <SwitcherWrapper>
            <StyledLabel>
                <StyledSwitcher id={'test'}  type={'checkbox'} onChange={onToggle}></StyledSwitcher>
                <Slider isChecked={isChecked}>
                    <WrapperSpan>on</WrapperSpan>
                    <WrapperSpan>off</WrapperSpan>
                </Slider>
            </StyledLabel>



        </SwitcherWrapper>


    )
}



const SwitcherWrapper = styled.div`
  margin-top: 20px;


`

const StyledLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 30px;

  border-radius: 35%; 
  
`

const StyledSwitcher = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`

const Slider = styled.div<{isChecked: boolean}>`
    position: absolute;
    padding: 5px;
   background-color: #232830;;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: 25% / 50% ;
  
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 0.9em;
   
  
  &::before{
    content: '';
    display: inline-block;
    position: absolute;
    background-color: #68676f;
    border-radius:  50%;
    width: 27px;
    height: 27px;
    top: 1.5px;
    left: 3px;
    transition-duration: 1s;
    ${(props)=> props.isChecked ? {transform: `translate(105%)`} : '' }
    
  }
`

const WrapperSpan = styled.span`
  color: #e83f00;
  text-shadow: 0px 0px 4px #ff0707;
`