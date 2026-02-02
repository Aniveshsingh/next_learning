async function projectDetails({ params }: {params: {name: string}}) {
  const { name } = await params;
  return <div>project hi {name}</div>;
}

export default projectDetails;
