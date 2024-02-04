import Sidebar from '@/components/sidebar';

const topics = [
  {
    key: 'cnft',
    name: 'CNFT',
  },
  {
    key: 'contract',
    name: 'スマートコントラクト',
  },
];

const Page = () => {
  return (
    <main className="max-w-screen-2xl m-auto px-4">
      <div className="flex">
        <Sidebar navigationItems={topics} />
        Dashboard
      </div>
    </main>
  );
};

export default Page;
