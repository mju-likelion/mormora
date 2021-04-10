import { NextPageContext } from 'next';
import { useRouter } from 'next/router';

import styled from '@emotion/styled';

interface SubTitleProps {
  sub?: boolean;
}

const NoticeSelf = styled.div`
  max-width: 800px;
  margin: auto;
  padding-bottom: 200px;
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

const CommentTitle = styled.div`
  font-size: 24px;
  line-height: 28px;
  color: ${props => props.theme.colors.primary};
  text-align: left;
  margin-bottom: 8px;
`;

const CommentTextareaWrapper = styled.div`
  display: flex;
`;

const CommentTextarea = styled.textarea`
  background: ${props => props.theme.colors.backgroundBlackL1};
  width: 710px;
  height: 70px;
  overflow: scroll;
  padding: 20px;
  outline-color: ${props => props.theme.colors.outline};
  resize: none;
`;

const CommentButton = styled.button`
  background: ${props => props.theme.colors.primary};
  border-radius: 6px;
  margin-left: 20px;
  padding: 0 18px;
  outline-color: ${props => props.theme.colors.outline};
`;

const CommentButtonText = styled.div`
  margin: 0 auto;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
`;

const DivideCommentLine = styled.hr`
  margin-top: 30px;
  color: ${props => props.theme.colors.whiteD1};
`;

const CommentTailWriter = styled.div`
  color: ${props => props.theme.colors.primary};
  font-size: 18px;
  line-height: 21px;
  margin-right: 20px;
`;

const CommentTailDate = styled.div`
  font-size: 13px;
  line-height: 15px;
  margin-top: 5px;
`;

const CommentTailContents = styled.div`
  margin-top: 20px;
  margin-bottom: 30px;
  font-size: 15px;
  line-height: 18px;
`;

const CommentTailButton = styled.button`
  border: 1px solid ${props => props.theme.colors.primary};
  box-sizing: border-box;
  border-radius: 6px;
  padding: 0 18px;
  background: none;
`;

const CommentTailButtonText = styled.div`
  margin: 0 auto;
  font-size: 15px;
  line-height: 18px;
  text-align: center;
`;

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
      <CommentTitle>COMMENT</CommentTitle>
      <CommentTextareaWrapper>
        <CommentTextarea />
        <CommentButton>
          <CommentButtonText>입력</CommentButtonText>
        </CommentButton>
      </CommentTextareaWrapper>
      <DivideCommentLine />
      <CommentTextareaWrapper>
        <CommentTailWriter>딸기</CommentTailWriter>
        <CommentTailDate>2021.03.14</CommentTailDate>
      </CommentTextareaWrapper>
      <CommentTailContents>댓글내용</CommentTailContents>
      <CommentTailButton>
        <CommentTailButtonText>답글</CommentTailButtonText>
      </CommentTailButton>
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
