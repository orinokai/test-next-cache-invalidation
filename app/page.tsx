async function getData(): Promise<{name: string}> {
  const res = await fetch('https://api.tvmaze.com/shows/1', {
    next: { revalidate: 5 },
  })
  return res.json()
}

export default async function Home() {
  const data = await getData();
  return (
    <dl>
      <dt>Show</dt>
      <dd data-testid="name">{data.name}</dd>
      <dt>Time</dt>
      <dd>{Date.now()}</dd>
    </dl>
  )
}
