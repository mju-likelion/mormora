import styled from '@emotion/styled';
// import Link from 'next/link';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import * as Yup from 'yup';

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

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`;

const TextInput = styled.input`
  width: 336px;
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
  outline-color: #8ffcff;
  padding-left: 16px;
`;

const GenderWrapper = styled.div`
  display: flex;
  position: relative;
  width: 336px;
  height: 44px;
  border-radius: 6px;
  padding-left: 16px;
  background-color: #28292a;
  margin-bottom: 24px;
  border: 0px;
  outline-color: #8ffcff;
  padding-left: 16px;
  padding-right: 18px;
  justify-content: space-between;
  &:hover {
    cursor: pointer;
  }
`;

const GenderText = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 22px;
  letter-spacing: -0.2px;
  color: #757575;
  margin-top: 11px;
`;

const SelectDown = styled.img`
  width: 16px;
  height: 8px;
  margin-top: 18px;
`;

const ActivityWrapper = styled.div`
  display: flex;
  flex-direction: row;
  display: flex;
  width: 336px;
  border: 0px;
  outline-color: #8ffcff;
  justify-content: space-between;
  &:hover {
    cursor: pointer;
  }
`;

const ActivitySelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const GenerationWrapper = styled.div`
  display: flex;
  /* position: relative; */
  width: 162px;
  height: 44px;
  border-radius: 6px;
  padding-left: 16px;
  background-color: #28292a;
  margin-bottom: 24px;
  border: 0px;
  outline-color: #8ffcff;
  padding-left: 16px;
  padding-right: 18px;
  justify-content: space-between;
`;

const GenerationText = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 22px;
  letter-spacing: -0.2px;
  color: #757575;
  margin-top: 11px;
`;

const PositionWrapper = styled.div`
  display: flex;
  /* position: relative; */
  width: 162px;
  height: 44px;
  border-radius: 6px;
  padding-left: 16px;
  background-color: #28292a;
  margin-bottom: 24px;
  border: 0px;
  outline-color: #8ffcff;
  padding-left: 16px;
  padding-right: 18px;
  justify-content: space-between;
`;

const PositionText = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 22px;
  letter-spacing: -0.2px;
  color: #757575;
  margin-top: 11px;
`;

const ActivityText = styled.div`
  height: 22px;
  left: 552px;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 22px;
  letter-spacing: -0.2px;
  color: #0087d1;
  margin-bottom: 24px;
`;

const AgreeCheckWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 8px;
  justify-content: center;
`;

const AgreeCheckBox = styled.input`
  width: 16px;
  height: 16px;
  background-color: #ffffff;
`;

const AgreeCheckText = styled.div`
  width: 140px;
  height: 20px;
  margin-left: 8px;
  margin-top: 2px;
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

const SignUpButtonWrapper = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #0087d1;
  margin-top: 24px;
  width: 336px;
  height: 44px;
  border-radius: 6px;
  padding: 11px;
  outline: none;
  &:disabled {
    background-color: #a0a0a0;
  }
`;

const SignUpButton = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 22px;
  text-align: center;
  letter-spacing: -0.1px;
  color: #ffffff;
`;

const Error = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`;

const ErrorFinal = styled.div`
  display: flex;
  margin-top: 24px;
  align-items: center;
`;

const Option = styled.img`
  width: 16px;
  height: 16px;
  color: #ffcf53;
`;

const ErrorText = styled.div`
  font-size: 12px;
  line-height: 22px;
  letter-spacing: -0.2px;
  color: #ffcf53;
  margin-left: 4px;
`;

const GenderListWrapper = styled.div`
  width: 336px;
  position: absolute;
  top: 753px;
  display: flex;
  flex-direction: column;
  background-color: #28292a;
  border-radius: 6px;
  justify-content: center;
  margin-bottom: 24px;
`;

const GenderList = styled.ul`
  width: 336px;
  padding: 0;
  background-color: #28292a;
  list-style: none;
  text-align: center;
  margin: 8px 0;
`;

const GenderItem = styled.li`
  height: 42px;
  background-color: #28292a;
  &:hover {
    background-color: #a0a0a0;
  }
  color: #757575;
  font-size: 14px;
  padding-top: 13px;
`;

const ActivityListWrapper = styled.div`
  width: 162px;
  position: absolute;
  top: 821px;
  display: flex;
  flex-direction: column;
  background-color: #28292a;
  border-radius: 6px;
  justify-content: center;
  margin-bottom: 24px;
`;

const ActivityList = styled.ul`
  width: 162px;
  padding: 0;
  background-color: #28292a;
  list-style: none;
  text-align: center;
  margin: 8px 0;
`;

const ActivityItem = styled.li`
  height: 42px;
  background-color: #28292a;
  &:hover {
    background-color: #a0a0a0;
  }
  color: #757575;
  font-size: 14px;
  padding-top: 13px;
`;

interface Values {
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  major: string;
  studentId: string;
  gender: string;
  generation: string;
  position: string;
  github: string;
  agreeCheck: boolean;
}

function SignUp() {
  const formik = useFormik<Values>({
    initialValues: {
      name: '',
      email: '',
      password: '',
      phoneNumber: '',
      major: '',
      studentId: '',
      gender: '',
      generation: '',
      position: '',
      github: '',
      agreeCheck: true,
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, '2글자 이상 4글자 이하로 입력해주세요')
        .max(4, '2글자 이상 4글자 이하로 입력해주세요')
        .required('이름을 입력해주세요.'),
      email: Yup.string()
        .email('이메일 형식에 맞지 않습니다.')
        .required('이메일을 입력해주세요.'),
      password: Yup.string()
        .min(8, '최소 8글자 이상 입력해주세요.')
        .required('비밀번호를 입력해주세요.'),
      phoneNumber: Yup.string()
        .matches(/\b\d{11,11}\b/, '숫자만 입력해주세요.')
        .required('휴대폰 번호를 입력해주세요'),
      major: Yup.string().required('전공을 입력해주세요.'),
      studentId: Yup.string()
        .matches(/\b\d{8,8}\b/, '올바른 학번을 입력해주세요.')
        .required('학번을 입력해주세요.'),
      gender: Yup.string().required('성별을 선택해주세요.'),
      generation: Yup.string().required('기수를 선택해주세요.'),
      position: Yup.string().required('직책을 선택해주세요.'),
      agreeCheck: Yup.boolean().oneOf(
        [true],
        '회원가입을 위해 약관에 동의해주세요.',
      ),
    }),
    onSubmit: () => {},
  });

  const GenderOptions = ['여성', '남성'];
  const GenerationOptions = ['7기', '8기', '9기'];
  const PositionOptions = ['대표', '부대표', '운영진', '아기사자'];

  const [isGenderOpen, setIsGenderOpen] = useState(false);
  const [isGenerationOpen, setIsGenerationOpen] = useState(false);
  const [isPositionOpen, setIsPositionOpen] = useState(false);

  const [selectedGender, setSelectedGender] = useState(null);
  const [selectedGeneration, setSelectedGeneration] = useState(null);
  const [selectedPosition, setSelectedPosition] = useState(null);

  const togglingGender = () => setIsGenderOpen(!isGenderOpen);
  const togglingGeneration = () => setIsGenerationOpen(!isGenerationOpen);
  const togglingPosition = () => setIsPositionOpen(!isPositionOpen);

  const onGenderOptionClicked = value => () => {
    setSelectedGender(value);
    setIsGenderOpen(false);
  };
  const onGenerationOptionClicked = value => () => {
    setSelectedGeneration(value);
    setIsGenerationOpen(false);
  };
  const onPositionOptionClicked = value => () => {
    setSelectedPosition(value);
    setIsPositionOpen(false);
  };

  return (
    <>
      <BodyWrapper>
        <Logo>
          Logo <br /> Placehorder
        </Logo>
        <SignUpText>회원가입</SignUpText>
        <FormWrapper name='form' onSubmit={formik.handleSubmit}>
          <TextInput
            id='name'
            name='name'
            placeholder='Name'
            autoComplete='off'
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name && (
            <Error>
              <Option src='/images/option.svg' />
              <ErrorText>{formik.errors.name}</ErrorText>
            </Error>
          )}

          <TextInput
            id='email'
            name='email'
            placeholder='Email'
            autoComplete='off'
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email && (
            <Error>
              <Option src='/images/option.svg' />
              <ErrorText>{formik.errors.email}</ErrorText>
            </Error>
          )}

          <TextInput
            id='password'
            name='password'
            type='password'
            placeholder='Password'
            autoComplete='off'
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password && (
            <Error>
              <Option src='/images/option.svg' />
              <ErrorText>{formik.errors.password}</ErrorText>
            </Error>
          )}

          <TextInput
            id='phoneNumber'
            name='phoneNumber'
            placeholder='Phone Number'
            autoComplete='off'
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.phoneNumber && formik.errors.phoneNumber && (
            <Error>
              <Option src='/images/option.svg' />
              <ErrorText>{formik.errors.phoneNumber}</ErrorText>
            </Error>
          )}

          <TextInput
            id='major'
            name='major'
            placeholder='Major'
            autoComplete='off'
            value={formik.values.major}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.major && formik.errors.major && (
            <Error>
              <Option src='/images/option.svg' />
              <ErrorText>{formik.errors.major}</ErrorText>
            </Error>
          )}

          <TextInput
            id='studentId'
            name='studentId'
            placeholder='Student Id'
            autoComplete='off'
            value={formik.values.studentId}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.studentId && formik.errors.studentId && (
            <Error>
              <Option src='/images/option.svg' />
              <ErrorText>{formik.errors.studentId}</ErrorText>
            </Error>
          )}
          <GenderWrapper onClick={togglingGender}>
            <GenderText>{selectedGender || 'Gender'}</GenderText>
            <SelectDown src='/images/selectDown.svg' />
          </GenderWrapper>
          {isGenderOpen && (
            <GenderListWrapper>
              <GenderList>
                {GenderOptions.map(option => (
                  <GenderItem
                    onClick={onGenderOptionClicked(option)}
                    key={Math.random()}
                  >
                    {option}
                  </GenderItem>
                ))}
              </GenderList>
            </GenderListWrapper>
          )}
          {formik.touched.gender && formik.errors.gender && (
            <Error>
              <Option src='/images/option.svg' />
              <ErrorText>{formik.errors.gender}</ErrorText>
            </Error>
          )}

          <ActivityWrapper>
            <ActivitySelectWrapper>
              <GenerationWrapper onClick={togglingGeneration}>
                <GenerationText>
                  {selectedGeneration || 'Generation'}
                </GenerationText>
                <SelectDown src='/images/selectDown.svg' />
              </GenerationWrapper>
              {isGenerationOpen && (
                <ActivityListWrapper>
                  <ActivityList>
                    {GenerationOptions.map(option => (
                      <ActivityItem
                        onClick={onGenerationOptionClicked(option)}
                        key={Math.random()}
                      >
                        {option}
                      </ActivityItem>
                    ))}
                  </ActivityList>
                </ActivityListWrapper>
              )}
            </ActivitySelectWrapper>

            <ActivitySelectWrapper>
              <PositionWrapper onClick={togglingPosition}>
                <PositionText>{selectedPosition || 'Position'}</PositionText>
                <SelectDown src='/images/selectDown.svg' />
              </PositionWrapper>
              {isPositionOpen && (
                <ActivityListWrapper>
                  <ActivityList>
                    {PositionOptions.map(option => (
                      <ActivityItem
                        onClick={onPositionOptionClicked(option)}
                        key={Math.random()}
                      >
                        {option}
                      </ActivityItem>
                    ))}
                  </ActivityList>
                </ActivityListWrapper>
              )}
            </ActivitySelectWrapper>
          </ActivityWrapper>
          <ActivityText>
            기수 및 직책은 {new Date().getFullYear()}년 기준으로 선택해주세요.
          </ActivityText>

          {formik.touched.generation && formik.errors.generation && (
            <Error>
              <Option src='/images/option.svg' />
              <ErrorText>{formik.errors.generation}</ErrorText>
            </Error>
          )}

          {formik.touched.position && formik.errors.position && (
            <Error>
              <Option src='/images/option.svg' />
              <ErrorText>{formik.errors.position}</ErrorText>
            </Error>
          )}

          <TextInput
            id='github'
            name='github'
            placeholder='Github'
            autoComplete='off'
          />
        </FormWrapper>

        <AgreeCheckWrapper>
          <AgreeCheckBox
            type='checkbox'
            name='agreeCheck'
            value='agreeCheck'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          {/* <Link href="/#"> */}
          <AgreeCheckText>이용약관에 동의 (필수)</AgreeCheckText>
          {/* </Link> */}
        </AgreeCheckWrapper>
        {formik.touched.agreeCheck && formik.errors.agreeCheck && (
          <ErrorFinal>
            <Option src='/images/option.svg' />
            <ErrorText>{formik.errors.agreeCheck}</ErrorText>
          </ErrorFinal>
        )}
        <SignUpButtonWrapper type='submit' disabled={!!formik.errors}>
          <SignUpButton>회원가입</SignUpButton>
        </SignUpButtonWrapper>
      </BodyWrapper>
    </>
  );
}

export default SignUp;
