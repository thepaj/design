import { Link } from "react-router-dom";

function Main() {
    return (
      <div className="main">
        <div className="main-text-container">
            <h1 className="main-title">
                Deena Design
            </h1>
            <div className="main-desc">
                <p>
                    Jsme architektonické studio a projekční kancelář s vlastní stavební firmou. Naši architekti, projektanti a odborníci na realizaci staveb se vám budou věnovat v Praze, Ostravě, Brně a Olomouci.
                </p>
            </div>
        </div>
        <div className="main-btn-container">
            <Link to='/services'>
                <button className="main-btn" type='button'>
                    Nase sluzby
                    <div className="main-btn__horizontal"></div>
	                <div className="main-btn__vertical"></div>
                </button>
            </Link>
        </div>
      </div>
    );
}
  
export default Main;