import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import LoginWithGithubButton from '@/components/oauth/login-with-github';

const LoginPage = async () => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { data } = await supabase.auth.getUser();
  if (data?.user) {
    redirect('/dashboard');
  }

  return (
    <div className="grid grid-cols-2 min-h-screen">
      <div>a</div>
      <div className="flex justify-center items-center">
        <LoginWithGithubButton />
      </div>
    </div>
  );
};

export default LoginPage;
