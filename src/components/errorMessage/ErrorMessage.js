import img from '../../resources/img/404-page-vector.jpg'
const ErrorMessage = () => {
  return (
    <img className={'d-block object-fit-contain'} src={img} alt="Error" style={{   //todo
      // display:"block",
      width: "250px",
      height:"250px",
      // objectFit:"contain",
      margin: "0 auto",
    }}/>
  )
}

export default ErrorMessage;