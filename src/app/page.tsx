import { redirect } from 'next/navigation';


// you can also do it in middleware once its available
export default async function Home() {
  redirect('/wow');
  return;
}
