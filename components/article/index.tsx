
import {ArticleType} from 'types/index';
import dayjs from 'dayjs';
import style from './style/index.scss';
import Link from 'next/link';

const ArticleComponent = (props: ArticleType ) => {
  return (
    <Link href="/article/[id]" as={`/article/${props._id}`}>
      <div className={style.articleItem}>
        <div> 
          <h2 className={style.title}>{props.title}</h2>
          <p>发布于：{ dayjs(props.createTime).format('YYYY-MM-DD hh:mm:ss')}</p>
        </div>
        <div className={style.tagsContainer}>
          {props.tags.map((item: string, key: number) => {
            return (
            <span 
              className={style.tagItem}
              key={`${key}${item}`}>
              {item}
            </span>
            )})}
        </div>
        {/* <p className={style.readArticle}>阅读全文 »</p> */}
      </div>
    </Link>
  )  
}

export default ArticleComponent;