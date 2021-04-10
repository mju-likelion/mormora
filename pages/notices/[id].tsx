import { useRouter } from 'next/dist/client/router';

function NoticesDetail() {
  const router = useRouter();
  const { id } = router.query;

  return <h1>Post : {id}</h1>;
}

export default NoticesDetail;
