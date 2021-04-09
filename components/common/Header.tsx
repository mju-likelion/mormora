import styled from '@emotion/styled';

const Self = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 60px;
  width: 100vw;
  height: 64px;
  background: ${props => props.theme.colors.headerBackground};
`;

const Left = styled.div``;

const Right = styled.div``;

const BorderlessButton = styled.button`
  height: 35px;
  box-sizing: border-box;
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
  return (
    <Self>
      <Left>LOGO PLACEHOLDER</Left>
      <Right>
        <BorderlessButton>LOGIN</BorderlessButton>
        <BorderButton>SIGNUP</BorderButton>
      </Right>
    </Self>
  );
}

export default Header;
