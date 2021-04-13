import styled from '@emotion/styled';
import Link from 'next/link';

const Self = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: calc(
    100vh - ${props => props.theme.constants.headerHeight} -
      ${props => props.theme.constants.footerHeight.md}
  );

  @media (max-width: ${props => props.theme.screens.sm}) {
    height: calc(
      100vh - ${props => props.theme.constants.headerHeight} -
        ${props => props.theme.constants.footerHeight.sm}
    );
  }

  @media (max-width: ${props => props.theme.screens.xs}) {
    height: calc(
      100vh - ${props => props.theme.constants.headerHeight} -
        ${props => props.theme.constants.footerHeight.xs}
    );
  }
`;

const ErrorMessageBlock = styled.div`
  text-align: center;
  padding: 0 20px;
`;

const ErrorCode = styled.h1`
  font-size: 70px;
  letter-spacing: -0.2px;
  line-height: 100%;
  margin: 0 0 11px;
`;

const PrimaryMessage = styled.p`
  font-size: 21px;
  letter-spacing: -0.3px;
  margin: 0 0 5px;
`;

const SecondaryMessage = styled.p`
  color: #999999;
  font-size: 14px;
  letter-spacing: -0.2px;
  line-height: 150%;
  margin: 0 0 5px;
`;

const GoToHomeButton = styled.a`
  display: inline-block;
  background: #fb8c00;
  font-size: 15px;
  font-weight: bold;
  line-height: 24px;
  padding: 11px 14px 12px;
  margin: 33px auto 0;
  cursor: pointer;
`;

function Custom404() {
  return (
    <Self>
      <ErrorMessageBlock>
        <ErrorCode>404</ErrorCode>
        <PrimaryMessage>이 URL은 존재하지 않는 URL이에요</PrimaryMessage>
        <SecondaryMessage>이런거 시도하지 마세요!</SecondaryMessage>
        <Link href='/'>
          <GoToHomeButton>멋사 명지대 홈으로 가기</GoToHomeButton>
        </Link>
      </ErrorMessageBlock>
    </Self>
  );
}

export default Custom404;
