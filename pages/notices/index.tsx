import styled from '@emotion/styled';
import Link from 'next/link';

// import NoticeData, { noticeData } from '../../components/data/NoticeData';

const NoticeSelf = styled.div`
  max-width: 800px;
  margin: auto;
`;

const NoticeTitle = styled.div`
  font-weight: normal;
  font-size: 40px;
  line-height: 47px;
  color: #0087d1;
  padding-bottom: 20px;
  padding-top: 111px;
  border-bottom: 5px solid #0087d1;
  margin: auto;
`;

const SectionBlock = styled.div`
  font-size: 20px;
  display: flex;
  border-bottom: 2px solid #0087d1;
  text-align: center;
  margin: auto;
  padding: 10px 0;
`;

const TableNumber = styled.div`
  width: 130px;
`;
const TableWriter = styled.div`
  width: 160px;
`;
const TableDate = styled.div`
  width: 140px;
`;

const TableTitle = styled.div`
  width: 439px;
`;

const TableTitleContents = styled.div`
  margin: auto;
  padding: 0 24px;
  width: 441px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
`;

const TableNumberContents = styled.div`
  width: 85px;
  text-align: center;
`;

const TableDateContents = styled.div``;

const TableWriterContents = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 134px;
  padding-right: 24px;
`;

const ContentsDiv = styled.div`
  height: 650px;
  border-bottom: 5px solid #0087d1;
  margin-bottom: 40px;
`;

const ContentsWrapper = styled.div`
  margin: auto;
  padding: 15px;
  display: flex;
  border-bottom: 2px solid #28292a;
`;

function NoticeList({ items }) {
  console.log(items);
  return (
    <NoticeSelf>
      <NoticeTitle>NOTICE</NoticeTitle>
      <SectionBlock>
        <TableNumber>번호</TableNumber>
        <TableTitle>제목</TableTitle>
        <TableWriter>작성자</TableWriter>
        <TableDate>날짜</TableDate>
      </SectionBlock>
      <ContentsDiv>
        {items
          .map(item => (
            <ContentsWrapper key={item.number}>
              <TableNumberContents>{item.number}</TableNumberContents>
              <Link href={`/notices/${item.number}`}>
                <TableTitleContents>{item.noticeTitle}</TableTitleContents>
              </Link>
              <TableWriterContents>{item.noticeWriter}</TableWriterContents>
              <TableDateContents>{item.noticeData}</TableDateContents>
            </ContentsWrapper>
          ))
          .reverse()}
      </ContentsDiv>
    </NoticeSelf>
  );
}

NoticeList.getInitialProps = async () => {
  const res = await import('../../components/data/NoticeData');
  return {
    items: res.noticeData,
  };
};

export default NoticeList;
