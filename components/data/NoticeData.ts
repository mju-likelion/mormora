interface NoticeData {
  number: number;
  noticeTitle: string;
  noticeWriter: string;
  noticeData: string;
}

export default NoticeData;

export const noticeData: NoticeData[] = [
  {
    number: 1,
    noticeTitle: '첫번째 글 제목',
    noticeWriter: '작성자1',
    noticeData: '2021-03-20',
  },
  {
    number: 2,
    noticeTitle: '첫번째 글 제목 첫번째 글 제목 첫번째 글 제목 첫번째 글 제목',
    noticeWriter: '작성자2작성자2작성자2작성자2',
    noticeData: '2021-03-20',
  },
  {
    number: 3,
    noticeTitle: '첫번째 글 제목',
    noticeWriter: '작성자3',
    noticeData: '2021-03-20',
  },
  {
    number: 4,
    noticeTitle: '첫번째 글 제목',
    noticeWriter: '작성자4',
    noticeData: '2021-03-20',
  },
];
