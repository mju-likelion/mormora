import { useRecoilState } from 'recoil';

import LoginModal from 'components/LoginModal';
import Portal from 'components/Portal';
import loginModalState from 'stores/loginModalState';

function Home() {
  const [loginModalOpen, setLoginModalOpen] = useRecoilState(loginModalState);

  function handleLoginModalClose() {
    setLoginModalOpen(false);
  }

  return (
    <>
      준비중...
      {loginModalOpen && (
        <Portal>
          <LoginModal onClose={handleLoginModalClose} />
        </Portal>
      )}
    </>
  );
}

export default Home;
