
import style from './style/index.scss';

export interface ArticleType {
  content: string;
  introduce: string;
  isEdit: boolean;
  publishState: boolean;
  tags: string[];
  title: string;
}

const ArticleComponent = (props: ArticleType ) => {
  console.log('props', props)
  return (
    <div className={style.articleItem}>
      <h1 className={style.title}>{props.title}</h1>
      <p>{props.introduce}</p>
    </div>
  )  
}

export default ArticleComponent;