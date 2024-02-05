export async function generateStaticParams() {
  // const posts = await fetch('https://.../posts').then((res) => res.json());

  const posts = [
    {
      topics: 'test',
    },
  ];

  return posts.map((post) => ({
    topics: post.topics,
  }));
}

const Page = ({ params }: { params: { topics: string } }) => {
  return <div>{JSON.stringify(params)}</div>;
};

export default Page;
