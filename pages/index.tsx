import Layout from '../src/components/Layout'

const title = "Hello, I'm Drew 👋"
const subtitle = "I'm a UI/UX Design Engineer at Stashpad, and living in Charlotte, North Carolina."

export default function Home() {
  return (
    <Layout title="Home" description={`${title} - ${subtitle}`}>

    </Layout>
  )
}
