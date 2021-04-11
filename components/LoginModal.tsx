import styled from '@emotion/styled';
import { useFormik } from 'formik';
import Link from 'next/link';
import { FocusEventHandler, useState } from 'react';
import { useCookies } from 'react-cookie';
import * as Yup from 'yup';

import icModalClose from 'images/modal/icModalClose.svg';
import icWarning from 'images/modal/icWarning.svg';
import axios from 'lib/axios';

const ModalFullScreen = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(42px);
  width: 100%;
  height: 100%;
`;

const ModalBlock = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  border-radius: 6px;
  padding: 48px 0 63px;
  background-color: #28292a;
  width: 375px;
  @media (max-width: 768px) {
    flex: 1;
    width: auto;
    height: 100%;
  }
`;

const CloseButton = styled.div`
  position: absolute;
  top: 24px;
  right: 20px;
  background: url(${icModalClose}) 0 center no-repeat;
  width: 16px;
  height: 16px;
  cursor: pointer;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 22px;
  letter-spacing: -0.1px;
  margin: 24px 0 16px;
`;

const Input = styled.input`
  width: 335px;
  height: 44px;
  background: #3a3b3d;
  border-radius: 6px;
  border: none;
  margin: 11px 0 0;
  padding: 11px 12px;
  font-size: 17px;
  font-weight: 400;
  line-height: 22px;

  &:focus {
    outline: none;
    border: 1px solid ${props => props.theme.colors.outline};
  }
`;

const Warning = styled.p`
  font-size: 12px;
  line-height: 22px;
  letter-spacing: -0.2px;
  color: ${props => props.theme.colors.orangeL1};
  background: url(${icWarning}) left no-repeat;
  margin: 8px 0 0;
  padding: 0 0 0 20px;
`;

const LogInButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.primary};
  width: 335px;
  height: 44px;
  border-radius: 6px;
  margin: 20px 0 25px;
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 22px;
  letter-spacing: -0.2px;

  &:disabled {
    background-color: ${props => props.theme.colors.whiteD1};
    cursor: not-allowed;
  }
`;

const AdditionalDesc = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${props => props.theme.colors.whiteD1};

  a {
    color: ${props => props.theme.colors.primary};
  }
`;

const Paragraph = styled.p`
  margin: 0 0 14px;
`;

interface LoginModalProps {
  onClose: () => void;
}

function LoginModal({ onClose }: LoginModalProps) {
  const [focus, setFocus] = useState({
    email: false,
    password: false,
  });

  const [, setCookie] = useCookies(['user']);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('이메일 형식에 맞지 않습니다.')
        .required('이메일을 입력해주세요.'),
      password: Yup.string()
        .min(8, '비밀번호는 최소 8글자 이상 입력해주세요.')
        .required('비밀번호를 입력해주세요.'),
    }),
    onSubmit: async ({ email, password }) => {
      try {
        const result = await axios.post('/api/auth/login', { email, password });

        setCookie('user', result.headers.access_token, {
          path: '/',
          maxAge: 60 * 60 * 24 * 7, // 7 days
          sameSite: true,
        });
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
      }
    },
  });

  const handleFocus: FocusEventHandler<HTMLInputElement> = e => {
    setFocus({ ...focus, [e.target.name]: true });
  };

  const handleBlur: FocusEventHandler<HTMLInputElement> = e => {
    formik.handleBlur(e);
    setFocus({ ...focus, [e.target.name]: false });
  };

  return (
    <ModalFullScreen>
      <ModalBlock>
        <CloseButton onClick={onClose} />
        <Form onSubmit={formik.handleSubmit}>
          <Title>로그인</Title>
          <Input
            id='email'
            name='email'
            placeholder='Email'
            autoComplete='off'
            onChange={formik.handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && !focus.email && (
            <Warning>{formik.errors.email}</Warning>
          )}
          <Input
            id='password'
            name='password'
            type='password'
            placeholder='Password'
            autoComplete='off'
            onChange={formik.handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password &&
            formik.errors.password &&
            !focus.password && <Warning>{formik.errors.password}</Warning>}
          <LogInButton
            type='submit'
            disabled={!!formik.errors.email || !!formik.errors.password}
          >
            로그인
          </LogInButton>
        </Form>
        <AdditionalDesc>
          <Paragraph>
            <Link href='#'>
              <a>비밀번호를 잊어버리셨나요?</a>
            </Link>
          </Paragraph>
          <Paragraph>
            새로 들어오셨나요?{' '}
            <Link href='#'>
              <a>회원가입하러 가기</a>
            </Link>
          </Paragraph>
        </AdditionalDesc>
      </ModalBlock>
    </ModalFullScreen>
  );
}

export default LoginModal;
