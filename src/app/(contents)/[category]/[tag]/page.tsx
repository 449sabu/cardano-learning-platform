export async function generateStaticParams() {
  return [
    { category: 'topics', tag: 'nft' },
    { category: 'topics', tag: 'contract' },
    { category: 'course', tag: 'contract' },
    { category: 'resource', tag: 'library' },
  ];
}

function Page({ params }: { params: { tag: string } }) {
  return <h1>{JSON.stringify(params)}</h1>;
}

export default Page;
