import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Passengers() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Passenger - {id}</h1>
    </div>
  );
}
