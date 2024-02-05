'use client';

import { useParams } from 'next/navigation';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';

const Sidebar = () => {
  const params = useParams<{ category: string; tag: string }>();

  return (
    <div className="flex gap-3 min-h-screen">
      <div className="flex flex-col gap-2 py-4">
        {params.category === 'topics'
          ? sidebarItems.topics.map((item) => (
              <Button
                key={item.key}
                variant={params.tag === item.key ? 'default' : 'ghost'}
                className="justify-start"
              >
                {item.name}
              </Button>
            ))
          : params.category === 'course'
            ? sidebarItems.course.map((item) => (
                <Button
                  key={item.key}
                  variant={params.tag === item.key ? 'default' : 'ghost'}
                  className="justify-start"
                >
                  {item.name}
                </Button>
              ))
            : sidebarItems.resources.map((item) => (
                <Button
                  key={item.key}
                  variant={params.tag === item.key ? 'default' : 'ghost'}
                  className="justify-start"
                >
                  {item.name}
                </Button>
              ))}
      </div>
      <Separator orientation="vertical" />
    </div>
  );
};

export default Sidebar;

const sidebarItems = {
  topics: [
    {
      key: 'nft',
      name: 'NFT',
    },
    {
      key: 'real',
      name: 'リアルファイ',
    },
  ],
  course: [
    {
      key: 'contract',
      name: 'スマートコントラクト',
    },
  ],
  resources: [
    {
      key: 'library',
      name: 'ライブラリ',
    },
  ],
};
