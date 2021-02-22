import styled from "@emotion/styled";
import { useFormik } from "formik";

const Self = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const TextInput = styled.input`
  background: #1a1b1c;
  padding: 8px 12px;
  border: 1px solid #333435;
`;

const FileUploadButton = styled.button`
  color: #5d5e5f;
  background: none;
  padding: 8px 12px;
  border: 1px solid #404042;
  margin: 16px 0;
`;

const SubmitButton = styled.button`
  background: #222324;
  color: #dbdbdb;
  padding: 8px 12px;

  &:hover {
    background: #ffffff;
    color: #000000;
  }
`;

function FileUpload() {
  const formik = useFormik({
    initialValues: {
      sid: "",
      name: "",
      file: "",
    },
    onSubmit: (value) => {
      console.log(value);
    },
  });

  return (
    <Self>
      <h1>
        멋쟁이 사자처럼 at 명지대(자연) 9기에 지원해주셔서 감사합니다.
        <br />
        3MB가 넘어가는 첨부파일은 이곳에 제출해주세요 🙂
      </h1>
      <Form onSubmit={formik.handleSubmit}>
        <p>학번</p>
        <TextInput
          id="sid"
          name="sid"
          value={formik.values.sid}
          onChange={formik.handleChange}
        />
        <p>이름</p>
        <TextInput
          id="name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        <FileUploadButton type="button">파일 업로드</FileUploadButton>
        <SubmitButton type="submit">제출</SubmitButton>
      </Form>
    </Self>
  );
}

export default FileUpload;
