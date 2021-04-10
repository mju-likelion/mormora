import styled from '@emotion/styled';

import icModalClose from 'images/modal/icModalClose.svg';

interface TermsofServiceModalProps {
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
  backdrop-filter: blur(29.8667px);
  width: 100%;
  height: 100%;
  z-index: 3;
  overflow: auto;
`;

const ModalBlock = styled.div`
  display: flex;
  z-index: 1;
  position: relative;
  flex-direction: column;
  border-radius: 6px;
  padding: 48px 24px;
  background-color: #28292a;
  width: 375px;
  max-height: 620px;
  overflow: auto;
  min-height: calc(100vh - 100px);
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

const Title = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 22px;
  letter-spacing: -0.1px;
  text-align: center;
`;

const Contents = styled.div`
  font-size: 15px;
  line-height: 22px;
  color: #a0a0a0;
  width: 328px;
  word-break: break-all;
`;

function TermsofServiceModal({ onClose }: TermsofServiceModalProps) {
  return (
    <ModalFullScreen>
      <ModalBlock>
        <CloseButton onClick={onClose} />
        <Title>이용약관</Title>
        <Contents>
          아직 내용 작성중..아직 내용 작성중..아직 내용 작성중..아직 내용
          작성중..아직 내용 작성중..아직 내용 작성중..아직 내용 작성중..아직
          내용 작성중..아직 내용 작성중..아직 내용 작성중..아직 내용
          작성중..아직 내용 작성중..아직 내용 작성중..아직 내용 작성중..아직
          내용 작성중..아직 내용 작성중..아직 내용 작성중..아직 내용
          작성중..아직 내용 작성중..아직 내용 작성중..아직 내용 작성중..아직
          내용 작성중..아직 내용 작성중..아직 내용 작성중..아직 내용
          작성중..아직 내용 작성중..아직 내용 작성중..아직 내용 작성중..아직
          내용 작성중..아직 내용 작성중..아직 내용 작성중..아직 내용
          작성중..아직 내용 작성중..아직 내용 작성중..아직 내용 작성중..아직
          내용 작성중..아직 내용 작성중..아직 내용 작성중..아직 내용
          작성중..아직 내용 작성중..아직 내용 작성중..아직 내용 작성중..아직
          내용 작성중..아직 내용 작성중..아직 내용 작성중..아직 내용
          작성중..아직 내용 작성중..아직 내용 작성중..아직 내용 작성중..아직
          내용 작성중..아직 내용 작성중..아직 내용 작성중..아직 내용
          작성중..아직 내용 작성중..아직 내용 작성중..아직 내용 작성중..아직
          내용 작성중..아직 내용 작성중..아직 내용 작성중..아직 내용
          작성중..아직 내용 작성중..아직 내용 작성중..아직 내용 작성중..아직
          내용 작성중..아직 내용 작성중..아직 내용 작성중..아직 내용
          작성중..아직 내용 작성중..아직 내용 작성중..아직 내용 작성중..아직
          내용 작성중..아직 내용 작성중..아직 내용 작성중..아직 내용
          작성중..아직 내용 작성중..아직 내용 작성중..아직 내용 작성중..아직
          내용 작성중..아직 내용 작성중..아직 내용 작성중..아직 내용
          작성중..아직 내용 작성중..아직 내용 작성중..아직 내용 작성중..아직
          내용 작성중..아직 내용 작성중..아직 내용 작성중..아직 내용
          작성중..아직 내용 작성중..아직 내용 작성중..아직 내용 작성중..아직
          내용 작성중..아직 내용 작성중..아직 내용 작성중..아직 내용
          작성중..아직 내용 작성중..아직 내용 작성중..아직 내용 작성중..아직
          내용 작성중..아직 내용 작성중..아직 내용 작성중..아직 내용
          작성중..아직 내용 작성중..아직 내용 작성중..아직 내용 작성중..아직
          내용 작성중..아직 내용 작성중..아직 내용 작성중..아직 내용
          작성중..아직 내용 작성중..아직 내용 작성중..아직 내용 작성중..아직
          내용 작성중..아직 내용 작성중..아직 내용 작성중..아직 내용
          작성중..아직 내용 작성중..아직 내용 작성중..아직 내용 작성중..아직
          내용 작성중..아직 내용 작성중..아직 내용 작성중..아직 내용
          작성중..아직 내용 작성중..아직 내용 작성중..아직 내용 작성중..아직
          내용 작성중..아직 내용 작성중..아직 내용 작성중..아직 내용
          작성중..아직 내용 작성중..아직 내용 작성중..아직 내용 작성중..아직
          내용 작성중..아직 내용 작성중..아직 내용 작성중..
        </Contents>
      </ModalBlock>
    </ModalFullScreen>
  );
}

export default TermsofServiceModal;
