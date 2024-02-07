import type { Metadata } from 'next';
import Sidebar from '@/components/sidebar';
import { getTags } from '@/lib/github';

export const metadata: Metadata = {
  title: 'Cardano Learning Contents List',
  description: 'Cardanoプログラミングを学ぶ',
};

async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const tags = await getTags();

  return (
    <main className="max-w-screen-2xl m-auto px-4">
      <div className="flex">
        <Sidebar tags={tags} />
        {children}
      </div>
    </main>
  );
}

export default Layout;
