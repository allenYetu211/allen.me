import style from './style/index.scss';
import '@asset/style/global.scss';
import Head from '@components/head';
import Footer from '@components/footer';

const LayoutComponents = (props) => {
  return (
    <div className={style.layoutStyle}>
      <Head/>
      <div className={style.main}>
      {props.children}
      </div>
      <Footer/>
   </div>
  )
}

export default LayoutComponents;