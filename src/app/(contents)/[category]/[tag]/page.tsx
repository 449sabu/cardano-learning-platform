// import {
//   getRepository,
//   getSingleFileData,
//   getContentsList,
// } from '@/lib/github';

export async function generateStaticParams() {
  // const contents = ['topics', 'course', 'resource'];
  // const data = contents.map((item) => {
  //   const res = getContentsList(item);
  // });

  return [
    { category: 'topics', tag: 'nft' },
    { category: 'topics', tag: 'contract' },
    { category: 'course', tag: 'contract' },
    { category: 'resource', tag: 'library' },
  ];
}

async function Page({ params }: { params: { category: string; tag: string } }) {
  // const githubRepo = await getRepository();
  // const singleFileData = await getSingleFileData(githubRepo.download_url);
  // console.log(githubRepo);
  // console.log(singleFileData);

  return <h1>{JSON.stringify(params)}</h1>;
}

export default Page;
