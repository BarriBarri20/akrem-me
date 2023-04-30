import { FC } from 'react';

interface TestimonialDetailProps {
  name: string;
  address: string;
  description: string;
  img: string;
}

const TestiMonialsDetails: FC<TestimonialDetailProps> = ({ name, address, description, img }) => {
  return (
    <div className="item">
      <div className="shadow-effect">
        <img className="img-circle" src={img} />
        <p>{description}</p>
      </div>
      <div className="testimonial-name">
        <h5>{name}</h5>
        <small>{address}</small>
      </div>
    </div>
  );
};

export default TestiMonialsDetails;
