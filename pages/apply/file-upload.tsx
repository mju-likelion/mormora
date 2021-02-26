import styled from '@emotion/styled';
import { useFormik } from 'formik';
import { useRef, useState } from 'react';

import Modal from 'components/Modal';
import Portal from 'components/Portal';
import { storageService } from 'lib/firebase';

interface Values {
  sid: string;
  name: string;
  filename: string;
  fileContentType: string;
  file: File;
}

const Self = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

const Title = styled.h1`
  font-size: 32px;
  padding: 0 15px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const TextInput = styled.input`
  background: #1a1b1c;
  padding: 8px 12px;
  border: 1px solid #333435;
  width: 256px;
  outline: none;
`;

const FileInput = styled.input`
  display: none;
`;

const FileUploadButton = styled.button`
  color: #5d5e5f;
  background: none;
  padding: 8px 12px;
  border: 1px solid #404042;
  margin: 16px 0;
  outline: none;
`;

const SubmitButton = styled.button`
  background: #222324;
  color: #dbdbdb;
  padding: 8px 12px;
  outline: none;

  &:hover {
    background: #ffffff;
    color: #000000;
  }
`;

const Link = styled.a`
  color: #ff9e1b;
  font-weight: 500;
`;

function FileUpload() {
  const [modal, setModal] = useState<React.ReactNode>(null);
  const fileInputRef = useRef<HTMLInputElement>();

  function handleModalClose() {
    setModal(null);
  }

  const formik = useFormik<Values>({
    initialValues: {
      sid: '',
      name: '',
      filename: '',
      fileContentType: '',
      file: null,
    },
    onSubmit: values => {
      const fileRef = storageService
        .ref()
        .child(`${values.sid}/${values.filename}`);
      const uploadTask = fileRef.put(values.file, {
        contentType: values.fileContentType,
      });

      uploadTask.on(
        'state_changed',
        snapshot => {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          // const progress =
          //   (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          // console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case 'paused':
              // console.log('Upload is paused');
              break;
            case 'running':
              // console.log('Upload is running');
              break;
            default:
              break;
          }
        },
        error => {
          // A full list of error codes is available at
          // https://firebase.google.com/docs/storage/web/handle-errors
          switch (error.code) {
            case 'storage/unauthorized':
              // User doesn't have permission to access the object
              break;

            case 'storage/canceled':
              // User canceled the upload
              break;

            case 'storage/unknown':
              // Unknown error occurred, inspect error.serverResponse
              break;

            default:
              break;
          }
        },
        () => {
          // Upload completed successfully, now we can get the download URL
          uploadTask.snapshot.ref.getDownloadURL().then(downloadUrl => {
            // console.log('File available at', downloadURL);
            setModal(
              <Portal>
                <Modal onClose={handleModalClose}>
                  업로드가 정상적으로 완료되었습니다. 파일은{' '}
                  <Link href={downloadUrl}>여기</Link>에서 확인하실 수 있습니다.
                </Modal>
              </Portal>,
            );
          });
        },
      );
    },
  });

  function handleFileUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.currentTarget.files[0];

    if (file.size > 10 * 1024 * 1024) {
      // if filesize is larger than 10MB
      setModal(
        <Portal>
          <Modal onClose={handleModalClose}>
            10MB가 넘는 파일은 첨부할 수 없습니다.
          </Modal>
        </Portal>,
      );
    } else if (file) {
      formik.setFieldValue('filename', file.name);
      formik.setFieldValue('fileContentType', file.type);
      formik.setFieldValue('file', file);
    } else {
      // TODO: 파일이 없을 경우 Modal을 띄워야 함
    }
  }

  return (
    <>
      <Self>
        <Title>
          멋쟁이 사자처럼 at 명지대(자연) 9기에 지원해주셔서 감사합니다.
          <br />
          3MB가 넘어가는 첨부파일은 이곳에 제출해주세요 🙂
        </Title>
        <Form onSubmit={formik.handleSubmit}>
          <p>학번</p>
          <TextInput
            id='sid'
            name='sid'
            value={formik.values.sid}
            onChange={formik.handleChange}
          />
          <p>이름</p>
          <TextInput
            id='name'
            name='name'
            value={formik.values.name}
            onChange={formik.handleChange}
          />
          <FileInput
            type='file'
            ref={fileInputRef}
            onChange={handleFileUpload}
          />
          <FileUploadButton
            type='button'
            onClick={() => fileInputRef.current.click()}
          >
            파일 업로드
          </FileUploadButton>
          <SubmitButton type='submit'>제출</SubmitButton>
        </Form>
      </Self>
      {modal}
    </>
  );
}

export default FileUpload;
