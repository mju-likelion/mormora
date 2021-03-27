import styled from '@emotion/styled';

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

const ModalFullScreen = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.74);
  width: 100%;
  height: 100%;
`;

const ModalBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #292929;
  border-radius: 4px;
  padding: 44px;
  background-color: #121212;
  width: 400px;
  @media (max-width: 768px) {
    flex: 1;
    width: auto;
    height: 100%;
  }
`;

const Desc = styled.div`
  margin: 0 0 32px;
`;

const CloseButton = styled.button`
  background: #000000;
  width: 152px;
  padding: 12px 0;
  border: 1px solid #292929;
  border-radius: 2px;
`;

function Modal({ onClose, children }: ModalProps) {
  return (
    <ModalFullScreen>
      <ModalBlock>
        <Desc>{children}</Desc>
        <CloseButton onClick={onClose}>알겠어요</CloseButton>
      </ModalBlock>
    </ModalFullScreen>
  );
}

export default Modal;
