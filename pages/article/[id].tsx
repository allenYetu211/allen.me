import Layout from 'components/layout';
import http from 'http/index';


const ArticlePage = (props) => {
  console.log('props', props)
  return (
    <Layout>
      <title>
        {props.detail.title}
      </title>

      <div>

        <h1>
          {props.detail.title}
        </h1>

        
        
      </div>

      <div>
        {props.detail.content}
      </div>

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