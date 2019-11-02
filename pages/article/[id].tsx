import Layout from 'components/layout';
import http from 'http/index';


const ArticlePage = (props) => {
  console.log('props', props)
  return (
    <Layout>
      <div>ArticleComponent</div>
    </Layout>
  )
}

ArticlePage.getInitialProps = async (context) => {
  const { id } = context.query;
  const result = await http.get({
    url: '/getUserArticleDetail',
    params: {
      id
    }
  })
  return {
    detail: result,
  };
};

export default ArticlePage;