import styled from '@emotion/styled';
import Link from 'next/link';

const FooterSelf = styled.footer`
  background-color: #1e252c;
`;

const SectionSelf = styled.div`
  height: 62px;
  display: flex;
  padding: 22px 0;
  max-width: 1440px;
  margin: auto;
  font-size: 16px;

  @media screen and (max-width: 768px) {
    max-width: 768px;
    height: 100px;
    padding: 23px 0;
    display: block;
    text-align: center;
  }

  @media screen and (max-width: 375px) {
    padding: 69px 0;
    max-width: 375px;
    height: 200px;
    font-size: 14px;
  }
`;

const SectionMjuLogo = styled.div`
  margin-left: 95px;
  margin-right: auto;

  @media screen and (max-width: 768px) {
    margin: auto;
  }
`;

const SectionSnsWrap = styled.div`
  display: inline-flex;

  @media screen and (max-width: 768px) {
    padding-top: 16px;
  }

  @media screen and (max-width: 375px) {
    padding-top: 24px;
  }
`;

const SectionSnsLine = styled.div`
  margin-top: 8px;
  width: 35px;
  height: 2px;
  color: #fff;
  background-color: #fff;

  @media screen and (max-width: 375px) {
    margin-top: 10px;
    width: 20px;
  }
`;

const SnsBlock = styled.div`
  margin-right: 24px;
`;

const SectionSnsGit = styled.div`
  margin-right: 165px;

  @media screen and (max-width: 768px) {
    margin-right: 0;
  }
`;

const SectionSns = styled.img`
  height: 19px;
  width: 19px;

  @media screen and (max-width: 375px) {
    height: 15px;
    width: 15px;
  }
`;

function Footer() {
  const date = new Date();
  const years = date.getFullYear();

  return (
    <FooterSelf>
      <SectionSelf>
        <SectionMjuLogo>LIKE LION | MJU Nature © {years}</SectionMjuLogo>
        <SectionSnsWrap>
          <SnsBlock>
            <Link href='https://www.facebook.com/likelionatmju/'>
              <a>
                <SectionSns
                  src='/images/sns-icon-facebook.svg'
                  alt='멋쟁이 사자처럼 at 명지대 자연 페이스북'
                />
              </a>
            </Link>
          </SnsBlock>
          <SnsBlock>
            <SectionSnsLine />
          </SnsBlock>
          <SnsBlock>
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
          </SnsBlock>
          <SnsBlock>
            <SectionSnsLine />
          </SnsBlock>
          <SectionSnsGit>
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
          </SectionSnsGit>
        </SectionSnsWrap>
      </SectionSelf>
    </FooterSelf>
  );
}
export default Footer;
