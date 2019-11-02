import style from './style/index.scss';
import '@asset/style/global.scss';
import Head from '@com/head';

const LayoutComponents = (props) => {
  return (
    <div className={style.layoutStyle}>
      <Head/>
      {props.children}
   </div>
  )
}

export default LayoutComponents;