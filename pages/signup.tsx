import styled from '@emotion/styled';
// import Link from 'next/link';
import React from 'react';

const BodyWrapper = styled.div`
  padding: 64px 0 62px;
  background-color: #141517;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.div`
  margin-top: 83px;
  text-align: center;
  width: 124px;
  height: 48px;
  font-family: Roboto;
  font-size: 24px;
  font-style: italic;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;
  color: rgba(255, 255, 255, 0.25);
`;

const SignUpText = styled.div`
  margin-top: 40px;
  width: 72px;
  height: 22px;
  text-align: center;
  font-family: Noto Sans KR;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`;

const TextInput = styled.input`
  width: 335px;
  height: 44px;
  border-radius: 6px;
  background-color: #28292a;
  margin-bottom: 24px;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 22px;
  letter-spacing: -0.2px;
  border: 0px;
  outline-color: #8FFCFF;
  padding-left: 16px;
`;

const GenderWrapper = styled.div`
  display: flex;
  width: 335px;
  height: 44px;
  border-radius: 6px;
  padding-left: 16px;
  background-color: #28292a;
  margin-bottom: 24px;
  border: 0px;
  outline-color: #8FFCFF;
  padding-left: 16px;
  padding-right: 18px;
  justify-content: space-between;
  &:hover {
    cursor: pointer;
    outline-color: #8FFCFF;
  }
`;

const GenderText = styled.div `
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 22px;
  letter-spacing: -0.2px;
  color: #a0a0a0;
  margin-top: 11px;
`;

const SelectDown = styled.img`
  width: 16px;
  height: 8px;
  margin-top: 18px;
`;

const ActivityWrapper = styled.div `
  display: flex;
  flex-direction: row;
  display: flex;
  width: 335px;
  height: 44px;
  margin-bottom: 24px;
  border: 0px;
  outline-color: #8FFCFF;
  justify-content: space-between;
  &:hover {
    cursor: pointer;
  }
`;

const GenerationWrapper = styled.div `
  display: flex;
  width: 162px;
  height: 44px;
  border-radius: 6px;
  padding-left: 16px;
  background-color: #28292a;
  margin-bottom: 24px;
  border: 0px;
  outline-color: #8FFCFF;
  padding-left: 16px;
  padding-right: 18px;
  justify-content: space-between;
`;

const GenerationText = styled.div `
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 22px;
  letter-spacing: -0.2px;
  color: #a0a0a0;
  margin-top: 11px;
`;

const PositionWrapper = styled.div `
  display: flex;
  width: 162px;
  height: 44px;
  border-radius: 6px;
  padding-left: 16px;
  background-color: #28292a;
  margin-bottom: 24px;
  border: 0px;
  outline-color: #8FFCFF;
  padding-left: 16px;
  padding-right: 18px;
  justify-content: space-between;
`;

const PositionText = styled.div `
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 22px;
  letter-spacing: -0.2px;
  color: #a0a0a0;
  margin-top: 11px;
`;

const AgreeCheckWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 76px;
  justify-content: center;
`;

const AgreeCheckBox = styled.div`
  width: 16px;
  height: 16px;
  background-color: #ffffff;
  &:active {
    background-color: #0087d1;
  }
`;

const AgreeCheckText = styled.div`
  width: 140px;
  height: 20px;
  margin-left: 8px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 20px;
  letter-spacing: -0.2px;
  color: #0087d1;
  &:hover {
    cursor: pointer;
  }
`;

const SignUpButtonWrapper = styled.button `
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #a0a0a0;
  margin-top: 70px;
  width: 335px;
  height: 44px;
  border-radius: 6px;
  padding: 11px;
  outline: none;
`;

const SignUpButton = styled.div `
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 22px;
  text-align: center;
  letter-spacing: -0.1px;
  color: #FFFFFF;
`;



function SignUp() {



  return (
    <>
      <BodyWrapper>
        <Logo>
          Logo <br /> Placehorder
        </Logo>
        <SignUpText>회원가입</SignUpText>
        <FormWrapper>
          <TextInput
            id='name'
            name='name'
            placeholder="Name"
            autoComplete="off"
            // onChange={onChange}
            // value={formik.values.name}
            // onChange={formik.handleChange}
          />
          <TextInput
            id='email'
            name='email'
            placeholder="Email"
            autoComplete="off"
            // value={formik.values.name}
            // onChange={formik.handleChange}
          />
          <TextInput
            id='password'
            name='password'
            placeholder="Password"
            autoComplete="off"
            // value={formik.values.name}
            // onChange={formik.handleChange}
          />
          <TextInput
            id='phoneNumber'
            name='phoneNumber'
            placeholder="Phone Number"
            autoComplete="off"
            // value={formik.values.name}
            // onChange={formik.handleChange}
          />
          <TextInput
            id='major'
            name='major'
            placeholder="Major"
            autoComplete="off"
            // value={formik.values.name}
            // onChange={formik.handleChange}
          />
          <TextInput
            id='studentId'
            name='studentId'
            placeholder="Student Id"
            autoComplete="off"
            // value={formik.values.name}
            // onChange={formik.handleChange}
          />
          
          <GenderWrapper>
            <GenderText>Gender</GenderText>
            <SelectDown  src="/images/selectDown.svg"/>
          </GenderWrapper>
        
          <ActivityWrapper>
            <GenerationWrapper>
              <GenerationText>Generation</GenerationText>
              <SelectDown  src="/images/selectDown.svg"/>
            </GenerationWrapper>
            <PositionWrapper>
              <PositionText>Position</PositionText>
              <SelectDown  src="/images/selectDown.svg"/>
            </PositionWrapper>
          </ActivityWrapper>

          <TextInput
            id='github'
            name='github'
            placeholder="Github"
            autoComplete="off"
            // value={formik.values.name}
            // onChange={formik.handleChange}
          />
        </FormWrapper>
        <AgreeCheckWrapper>
          <AgreeCheckBox />
          {/* <Link href="/#"> */}
          <AgreeCheckText>이용약관에 동의 (필수)</AgreeCheckText>
          {/* </Link> */}
        </AgreeCheckWrapper>
        <SignUpButtonWrapper>
          <SignUpButton>회원가입</SignUpButton>
        </SignUpButtonWrapper>
      </BodyWrapper>
    </>
  );
}

export default SignUp;
