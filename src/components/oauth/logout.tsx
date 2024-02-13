'use client';

import { Button } from '@/components/ui/button';
import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';

const LogoutButton = () => {
  const router = useRouter();
  const supabase = createClient();

  async function signOut() {
    const { error } = await supabase.auth.signOut();

    if (error) {
    }
    router.refresh();
  }

  return <Button onClick={signOut}>ログアウト</Button>;
};

export default LogoutButton;
