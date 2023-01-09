import ServiceCard from "../small/ServiceCard";

function Services() {
    return (
      <div className="services">
        <div className="service-cards-container">
          <ServiceCard title={'Byt'} description={'Aliquam facilisis enim vel justo tempus luctus a et urna. Praesent fermentum in eros in cursus.'}/>
          <ServiceCard title={'Dum'} description={'Aliquam facilisis enim vel justo tempus luctus a et urna. Praesent fermentum in eros in cursus.'}/>
          <ServiceCard title={'Pozemek'} description={'Aliquam facilisis enim vel justo tempus luctus a et urna. Praesent fermentum in eros in cursus.'}/>
          <ServiceCard title={'Projekt'} description={'Aliquam facilisis enim vel justo tempus luctus a et urna. Praesent fermentum in eros in cursus.'}/>
        </div>
      </div>
    );
}
  
export default Services;