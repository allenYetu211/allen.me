import style from './style/index.scss';
import 'asset/style/global.scss';
import Head from 'components/head';
import Footer from 'components/footer';
import {  TagsType} from 'types/index';
interface Props {
  tags?: TagsType[];
  children: any;
}

const LayoutComponents = (props: Props) => {
  console.log('props.tags::', props.tags)
  return (
    <div className={style.layoutStyle}>
      <Head/>
      <div className={style.content}>

      <div className={style.navigationBar}></div>

        <div className={style.main}>
          {props.children}
        </div>

        <div className={style.informationBar}> 
          {/* 标签栏 */}
          {
            props.tags &&
            <div className={style.uiContainer}>
              {props.tags.map((item: TagsType) => {
                return (<div
                  key={`${item._id}`}
                  className={style.tagsItem}>
                    {item.msg}
                </div>)
              })}
            </div>
          }
        </div>
      </div>
       
      <Footer/>
   </div>
  )
}

export default LayoutComponents;