import Layout from 'components/layout';
import http from 'http/index';
import marked from 'plugins/marked';
import style from './style/index.scss';
// import 'highlight.js/scss/a11y-dark.scss';
import 'highlight.js/scss/a11y-dark.scss';

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

      <div className={style.articleContainer} dangerouslySetInnerHTML={{__html: marked(props.detail.content)}} />

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