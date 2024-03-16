const getData = async () => {
  await new Promise((res) => setTimeout(() => res(),2000))
  return {data: [1,2,3]};
}
/* 
- If using an ORM, can handle database fetching above.

- Full control of how, where and when data is cached.

- Full control of revalidation of cache.
*/

const Home = async () => {
  const data = await getData()
  console.log(data)
  return (
    <div>home</div>
  )
}

export default Home
