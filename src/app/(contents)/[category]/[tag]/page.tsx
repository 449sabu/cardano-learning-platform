import { getTags } from '@/lib/github';

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
  // const githubRepo = await getRepository();
  // const singleFileData = await getSingleFileData(githubRepo.download_url);
  // console.log(githubRepo);
  // console.log(singleFileData);

  return <h1>{JSON.stringify(params)}</h1>;
}

export default Page;
