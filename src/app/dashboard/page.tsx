import Sidebar from '@/components/sidebar';
import ContentsCard from '@/components/contents-card';

const Page = () => {
  return (
    <main className="max-w-screen-2xl m-auto px-4">
      <div className="flex">
        <Sidebar />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
          {contents.map((content) => (
            <ContentsCard key={content.title} contents={content} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Page;

const contents = [
  {
    title: 'Aikenを学ぼう！',
    description: 'Hello World コントラクトでAikenを学びます。',
  },
];
