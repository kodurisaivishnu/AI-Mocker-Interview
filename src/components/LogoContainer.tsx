import { Link } from "react-router"

const LogoContainer = () => {
  return (
    <div>
      <Link to={"/"}> 
        <img src="/assets/svg/logo.svg" alt=""  className="max-w-5 max-h-5 object-contain"/>
      </Link>      
    </div>
  )
}

export default LogoContainer;
