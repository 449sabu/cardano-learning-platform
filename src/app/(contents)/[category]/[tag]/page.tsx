import ContentsCard from '@/components/contents-card';
import { getConfigYaml, getContentsList, getTags } from '@/lib/github';

export async function generateStaticParams() {
  const tags = await getTags();
  const params: { category: string; tag: string }[] = [];
  const keys = Object.keys(tags) as Array<'course' | 'topics' | 'resource'>;

  keys.map((key) => {
    tags[key].map((tag) => {
      params.push({
        category: key,
        tag: tag.label,
      });
    });
  });

  return params;
}

async function Page({ params }: { params: { category: string; tag: string } }) {
  if (params.category === 'course') {
    const courseArray = await getContentsList(params.category);

    const courseHeaderArray = await Promise.all(
      courseArray.map(async (data) => {
        const configYaml = await getConfigYaml(`${data.path}/config.yaml`);
        return configYaml;
      }),
    );

    const data = courseHeaderArray.filter((item) => {
      if (item.tags.includes(params.tag)) {
        return item;
      }
    });

    return (
      <div className="p-4 grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {data.map((item) => (
          <ContentsCard
            key={item.title}
            contents={{ title: item.title, description: item.description }}
          />
        ))}
      </div>
    );
  }

  return <h1>{JSON.stringify(params)}</h1>;
}

export default Page;
