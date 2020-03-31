import { useEffect } from 'react';
import Link from 'next/link';
import http from 'http/index';
import Layout from 'components/layout';
import ArticleComponent from 'components/article';
import { ArticleType , TagsType} from 'types/index';
import style from '../asset/style/home.scss'


const HomePage = (props) => {
  return (
    <Layout
      tags={props.tags}>
      <div className={style.container}>
        <div className={style.title}>
          最新
        </div>
        <div>
          {
            props.article.map((item: ArticleType) => {
              return (<ArticleComponent key={item._id} {...item}/>)
            })
          }
        </div>
      </div>
    </Layout>
  )
}

HomePage.getInitialProps = async () => {
  const result: ArticleType[] = await http.get({
    url: '/u/v/user/getUserArticle'
  })
  
  const tagResult: TagsType[] = await http.get({
    url: '/u/v/user/getTags'
  })

  return {
    article: result,
    tags:tagResult
  };
};

export default HomePage;