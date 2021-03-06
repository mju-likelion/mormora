import styled from '@emotion/styled';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCookies } from 'react-cookie';
import { useRecoilState } from 'recoil';

import LoginModal from 'components/LoginModal';
import Portal from 'components/Portal';
import loginModalState from 'stores/loginModalState';

const Self = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 60px;
  width: 100vw;
  height: ${props => props.theme.constants.headerHeight};
  background: ${props => props.theme.colors.headerBackground};
`;

const Left = styled.div``;

const Right = styled.div``;

const BorderlessButton = styled.button`
  height: 35px;
  box-sizing: border-box;
  outline-color: ${props => props.theme.colors.outline};
  font-size: 15px;
  line-height: 17px;
  padding: 0 16px;
  margin: 0 0 0 4px;
`;

const BorderButton = styled(BorderlessButton)`
  border: 1px solid ${props => props.theme.colors.white};
  border-radius: 6px;
`;

function Header() {
  const router = useRouter();
  const [loginModalOpen, setLoginModalOpen] = useRecoilState(loginModalState);
  const [cookie] = useCookies(['user']);

  function handleOpenMyPage() {
    router.push('/mypage');
  }

  function handleLoginModalOpen() {
    setLoginModalOpen(true);
  }

  function handleLoginModalClose() {
    setLoginModalOpen(false);
  }

  return (
    <>
      <Self>
        <Left>LOGO PLACEHOLDER</Left>
        {cookie ? (
          <Right>
            <BorderlessButton onClick={handleOpenMyPage}>
              MY PAGE
            </BorderlessButton>
          </Right>
        ) : (
          <Right>
            <BorderlessButton onClick={handleLoginModalOpen}>
              LOGIN
            </BorderlessButton>
            <Link href='/signup'>
              <BorderButton>SIGNUP</BorderButton>
            </Link>
          </Right>
        )}
      </Self>
      {loginModalOpen && (
        <Portal>
          <LoginModal onClose={handleLoginModalClose} />
        </Portal>
      )}
    </>
  );
}

export default Header;
