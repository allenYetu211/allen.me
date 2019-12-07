import Layout from 'components/layout';
import http from 'http/index';
import marked from 'plugins/marked';
import style from './style/index.scss';
// import 'highlight.js/scss/a11y-dark.scss';
// import 'highlight.js/styles/a11y-dark.css';

// const css = require('highlight.js/styles/a11y-dark.css');

const ArticlePage = (props) => {
  return (
    <Layout>
      <div className={style.articleContainer}>
        <title>
          {props.detail.title}
        </title>

        <div>
          <h1>
            {props.detail.title}
          </h1>
          
        </div>

        <div className={style.articleContainer} dangerouslySetInnerHTML={{__html: marked(props.detail.content)}} />
      </div>
    </Layout>
  )
}

ArticlePage.getInitialProps = async (context) => {
  const { id } = context.query;
  const result = await http.get({
    url: '/u/v/user/getUserArticleDetail',
    params: {
      id
    }
  })
  return {
    detail: result,
  };
};

export default ArticlePage;