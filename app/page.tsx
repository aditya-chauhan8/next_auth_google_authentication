import GoogleLoginButton from "@/components/GoogleLoginButton";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
 const session = await getServerSession()

 if(session){
  redirect('/dashboard');
 }
//  console.log(session, 'session');
  return (
    <GoogleLoginButton />
  );
}
