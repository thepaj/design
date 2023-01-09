import Dena from '../../images/dn.jpg';

function About() {
    return (
      <div className="About">
        <div className="about-card">
          <div className="imgBx">
              <img src={Dena} alt="images" />
          </div>
          <div className="details">
              <h2>SomeOne Famous<br/><span>Director</span></h2>
          </div>
        </div>
      </div>
    );
}
  
export default About;