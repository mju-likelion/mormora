import * as Yup from 'yup';

const signupValidationSchema = Yup.object({
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
});

export default signupValidationSchema;
