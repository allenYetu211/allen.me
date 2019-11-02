import Layout from '@com/layout';
import { useEffect } from 'react';
import Link from 'next/link';
import http from '@http/index';


const HomePage = (props) => {
  useEffect(() => {
    console.log('useEffect', props);
  },[])

  return (
    <Layout>
      <div>HomePage</div>
    </Layout>
  )
}

HomePage.getInitialProps = async function() {
  const data = await http.get({
    url: 'getUserArticle'
  })
  console.log('rest', data)

  return {
    shows: data
  };
};

export default HomePage;