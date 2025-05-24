// pages/index.js
import Layout from '../layout';

export async function getStaticProps() {
  const res = await fetch('https://www.wondertravelegypt.com/api/general');
  const generalData = await res.json();

  return {
    props: { generalData },
    revalidate: 3600, // Rebuild every hour (optional)
  };
}

export default function Home({ generalData }) {
  return (
    <Layout generalData={generalData}>
      <h1>Welcome to Wonder Travel Egypt</h1>
    </Layout>
  );
}
