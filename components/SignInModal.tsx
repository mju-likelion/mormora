import styled from '@emotion/styled';
import { useFormik } from 'formik';
import Link from 'next/link';

import icModalClose from 'images/modal/icModalClose.svg';
// import * as Yup from 'yup';

interface SignInModalProps {
  onClose: () => void;
}

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
  margin: 8px 0 0;
  padding: 11px 12px;
  font-size: 17px;
  font-weight: 22px;
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

function SignInModal({ onClose }: SignInModalProps) {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    // validationSchema: Yup.object({
    //   email: Yup.string().email().required('이메일을 입력해주세요.'),
    //   password: Yup.string()
    //     .min(8, '비밀번호는 최소 8글자 이상 입력해주세요.')
    //     .required('비밀번호를 입력해주세요.'),
    // }),
    onSubmit: () => {},
  });

  return (
    <ModalFullScreen>
      <ModalBlock>
        <CloseButton onClick={onClose} />
        <Form>
          <Title>로그인</Title>
          <Input
            id='email'
            name='email'
            placeholder='Email'
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <Input
            id='password'
            name='password'
            placeholder='Password'
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <LogInButton>로그인</LogInButton>
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

export default SignInModal;
