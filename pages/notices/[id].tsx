import { NextPageContext } from 'next';
import { useRouter } from 'next/router';

import styled from '@emotion/styled';

interface SubTitleProps {
  sub?: boolean;
}

const NoticeSelf = styled.div`
  max-width: 800px;
  margin: auto;
`;

const NoticeTitleBlock = styled.div`
  padding-bottom: 20px;
  margin-top: 111px;
  border-top: 5px solid #0087d1;
  border-bottom: 1px solid #a0a0a0;
`;

const NoticeTitle = styled.div`
  font-size: 40px;
  line-height: 47px;
  color: #fff;
  margin: 32px 0 16px 0;
`;

const SubTitleBlock = styled.div`
  display: flex;
`;

const SubTitle = styled.div<SubTitleProps>`
  font-size: 15px;
  line-height: 22px;
  color: ${props => (props.sub ? ' #0087D1' : '#fff')};
`;

const Contents = styled.div`
  padding: 24px 0 80px 0;
`;

const VerticalBar = styled.div`
  border: 1px solid #ffffff;
  height: 17px;
  margin: 3px 8px;
`;

const ContentBlock = styled.div``;

function NoticesDetail({ item }) {
  const router = useRouter();

  console.log(item);
  return (
    <NoticeSelf>
      {item.map(content => (
        <ContentBlock key={content.number}>
          <NoticeTitleBlock>
            <NoticeTitle>{content.noticeTitle}</NoticeTitle>
            <SubTitleBlock>
              <SubTitle sub>{content.noticeWriter}</SubTitle>
              <VerticalBar />
              <SubTitle>{content.noticeData}</SubTitle>
              <VerticalBar />
              <SubTitle>조회수 : 123</SubTitle>
            </SubTitleBlock>
          </NoticeTitleBlock>
          <Contents>본문</Contents>
        </ContentBlock>
      ))}
    </NoticeSelf>
  );
}

NoticesDetail.getInitialProps = async ({ query }: NextPageContext) => {
  const res = await import('../../components/data/NoticeData');
  return {
    item: res.noticeData.filter(notice => notice.number === +query.id),
  };
};

export default NoticesDetail;
