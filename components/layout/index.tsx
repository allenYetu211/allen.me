import style from './style/index.scss';


const LayoutComponents = (props) => {
  return (
    <div className={style.layoutStyle}>
      <p>Components====</p>
      {props.children}
   </div>
  )
}

export default LayoutComponents;