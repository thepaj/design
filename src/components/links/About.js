import Dena from '../../images/dn.jpg';

function About() {
    return (
      <div className="About">
        <div className='about-container'>
          <div className='about-card'>
            <img src={Dena} alt='dena' className='dena-image'/>
          </div>
          <div className='about-card'>
            <div className='about-text'>
              <p>
              Aenean feugiat in ligula ut scelerisque. Proin erat erat, ultricies ut bibendum quis, egestas quis enim. Ut ornare erat in odio tempus, id eleifend tortor rutrum. Vivamus pulvinar neque vestibulum fringilla varius. Vestibulum purus ante, venenatis sed nulla et, feugiat luctus massa. Quisque consequat imperdiet magna, bibendum fermentum neque malesuada eget. Sed vitae quam vitae nisi imperdiet feugiat vel quis lorem. In sit amet elementum mi. Morbi scelerisque mauris risus, sed suscipit massa dictum non. Integer egestas nec libero quis consectetur. Fusce non erat purus. 
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}
  
export default About;