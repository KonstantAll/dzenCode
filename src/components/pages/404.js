import ErrorMessage from "../errorMessage/ErrorMessage";
import {Link} from "react-router-dom";

const Page404 = () => {
  return (
    <div>
      <ErrorMessage/>
      <p className={'text-center'} style={{ fontWeight: 'bold', fontSize:'24px'}}>
        Page doesn't exist
      </p>
      <Link className={'d-block text-center '} style={{fontWeight: 'bold', fontSize:'24px', color:'#8f2313'}}
            to={'/'}
      >
        Back to main page
      </Link>
    </div>
  )
}

export default Page404;