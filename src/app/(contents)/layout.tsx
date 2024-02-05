import type { Metadata } from 'next';
import Sidebar from '@/components/sidebar';

export const metadata: Metadata = {
  title: 'Cardano Learning Contents List',
  description: 'Cardanoプログラミングを学ぶ',
};

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main className="max-w-screen-2xl m-auto px-4">
      <div className="flex">
        <Sidebar />
        {children}
      </div>
    </main>
  );
};

export default Layout;
