import { useState } from 'react';

import Portal from 'components/Portal';
import SignInModal from 'components/SignInModal';

function Home() {
  const [signInModalOpen, setSignInModalOpen] = useState(true);

  function handleSignInModalClose() {
    setSignInModalOpen(false);
  }

  return (
    <>
      준비중...
      {signInModalOpen && (
        <Portal>
          <SignInModal onClose={handleSignInModalClose} />
        </Portal>
      )}
    </>
  );
}

export default Home;
