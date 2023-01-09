import { Link } from 'react-router-dom';

function ServiceCard(props) {
    return (
      <div className="card-container">
        <div class="card">
            <div class="face face1">
                <div class="content">
                    <div className="card-title">{props.title}</div>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <h3>
                      {props.title}
                    </h3>
                    <p>{props.description}</p>
                    <Link to='/contact'>
                      <button className='card-btn'>Napiste nam</button>
                    </Link>
                </div>
            </div>
        </div>
      </div>
    );
}
  
export default ServiceCard;