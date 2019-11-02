import Layout from '@components/layout';
import { useEffect } from 'react';
import Link from 'next/link';
import http from '@http/index';
import ArticleComponent from '@components/article';
import { ArticleType } from '../types/index';


const HomePage = (props) => {
  return (
    <Layout>
      {
        props.article.map((item: ArticleType) => {
          return (<ArticleComponent key={item._id} {...item}/>)
        })
      }
    </Layout>
  )
}

HomePage.getInitialProps = async () => {
  const result = await http.get({
    url: '/getUserArticle'
  })
  return {
    article: result
  };
};

export default HomePage;