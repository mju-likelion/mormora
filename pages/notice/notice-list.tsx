import styled from '@emotion/styled';

import NoticeData, { noticeData } from '../../components/data/NoticeData';

const NoticeTitle = styled.div`
  padding-top: 111px;
  font-weight: normal;
  font-size: 40px;
  line-height: 47px;
  color: #0087d1;
  margin-bottom: 20px;
`;

const StyledTable = styled.table`
  margin: 0 auto;
  border: none;
  border-collapse: collapse;
  caption-side: bottom;

  td,
  th {
    border: none;
  }

  th {
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 20px;
  }

  td {
    font-size: 18px;
    padding: 15px 24px;
    text-align: center;
    /* padding-top: 15px;
    padding-bottom: 15px; */
    border-bottom: 2px solid #28292a;
  }

  thead > tr {
    width: 800px;
    border-top: 5px solid #0087d1;
    border-bottom: 2px solid #0087d1;
  }
`;

function NoticeList() {
  return (
    <>
      <StyledTable>
        <thead>
          <NoticeTitle>NOTICE</NoticeTitle>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>날짜</th>
          </tr>
        </thead>
        <tbody>
          {noticeData.map((item: NoticeData) => (
            <tr key={item.number}>
              <td>{item.number}</td>
              <td>{item.noticeTitle}</td>
              <td>{item.noticeWriter}</td>
              <td>{item.noticeData}</td>
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </>
  );
}

export default NoticeList;
