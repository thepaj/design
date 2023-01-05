import ServiceCard from "../small/ServiceCard";

function Services() {
    return (
      <div className="services">
        <div className="service-cards-container">
          <ServiceCard title={'Byt'}/>
          <ServiceCard title={'Dum'}/>
          <ServiceCard title={'Pozemek'}/>
          <ServiceCard title={'Projekt'}/>
        </div>
      </div>
    );
}
  
export default Services;