import styled from '@emotion/styled';
import Link from 'next/link';
import { ReactElement } from 'react';

const SectionWrap = styled.div`
  height: 62px;
  display: flex;
  padding: 22px 0;
  max-width: 1440px;
  margin: auto;
  font-size: 16px;

  @media screen and (max-width: 768px) {
    max-width: 768px;
  }

  @media screen and (max-width: 375px) {
    padding: 25px 0;
    max-width: 375px;
    font-size: 11px;
  }
`;

const SectionMjuLogo = styled.div`
  margin-left: 95px;

  @media screen and (max-width: 768px) {
    margin-left: 63px;
  }

  @media screen and (max-width: 375px) {
    margin-left: 21px;
  }
`;

const SectionSnsWrap = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: 40px;

  @media screen and (max-width: 375px) {
    margin-right: 0;
  }
`;

const SectionSnsStyle = styled.div`
  margin-right: 24px;
`;

const SectionSns = styled.img`
  height: 19px;
  width: 19px;

  @media screen and (max-width: 375px) {
    height: 15px;
    width: 15px;
  }
`;

function Footer(): ReactElement {
  const date = new Date();
  const years = date.getFullYear();

  return (
    <SectionWrap>
      <SectionMjuLogo>LIKE LION | MJU Nature © {years}</SectionMjuLogo>
      <SectionSnsWrap>
        <SectionSnsStyle>
          <Link href='https://www.facebook.com/likelionatmju/'>
            <a>
              <SectionSns
                src='/images/sns-icon-facebook.svg'
                alt='멋쟁이 사자처럼 at 명지대 자연 페이스북'
              />
            </a>
          </Link>
        </SectionSnsStyle>
        <SectionSnsStyle>
          <Link href='https://www.instagram.com/mju_likelion/'>
            <a>
              <SectionSns
                src='/images/sns-icon-instagram.svg'
                width={19}
                height={19}
                alt='멋쟁이 사자처럼 at 명지대 자연 인스타그램'
              />
            </a>
          </Link>
        </SectionSnsStyle>
        <SectionSnsStyle>
          <Link href='https://github.com/mju-likelion'>
            <a>
              <SectionSns
                src='/images/sns-icon-github.svg'
                width={19}
                height={19}
                alt='멋쟁이 사자처럼 at 명지대 자연 깃허브'
              />
            </a>
          </Link>
        </SectionSnsStyle>
      </SectionSnsWrap>
    </SectionWrap>
  );
}
export default Footer;
