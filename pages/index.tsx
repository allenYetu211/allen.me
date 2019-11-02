import Layout from '@com/layout';
import { useEffect } from 'react';
import Link from 'next/link';
import http from '@http/index';
import fetch from 'isomorphic-unfetch';

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

HomePage.getInitialProps = async () => {
  const res = await fetch('http://localhost:7001/getUserArticle');
  
  const data = await res.json();
  
  return data

  
  // const data = await http.get({
  //   url: '/getUserArticle'
  // })
  // console.log('rest', data)
  // return {
  //   shows: data
  // };
};

export default HomePage;