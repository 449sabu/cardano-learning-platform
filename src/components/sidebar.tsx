'use client';

import { useParams, useRouter } from 'next/navigation';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import type { TagsList } from '@/types/config';

const Sidebar = ({ tags }: { tags: TagsList }) => {
  const params = useParams<{
    category: 'course' | 'topics' | 'resource';
    tag: string;
  }>();
  const router = useRouter();

  return (
    <div className="flex gap-3 min-h-screen">
      <div className="flex flex-col gap-2 py-4">
        {tags[params.category].map((category) => (
          <Button
            key={category.label}
            variant={params.tag === category.label ? 'default' : 'ghost'}
            className="justify-start"
            onClick={() => router.push(`/${params.category}/${category.label}`)}
          >
            {category.name}
          </Button>
        ))}
      </div>
      <Separator orientation="vertical" />
    </div>
  );
};

export default Sidebar;
