
import style from './style/index.scss';
import {ArticleType} from 'types/index';

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