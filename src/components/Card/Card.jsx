  import React from 'react'
import './Card.css';
import { GrStatusGoodSmall } from "react-icons/gr";

const Card = ({ id, title, tag, status, groupValue }) => {
  return (
    <div className="cardContainer flex-gap-10" style={{ gap: '5px' }}>
           <div className="cardTitle" style={{ fontWeight: 200 }}>
        <p>{title}</p>
      </div>
      {groupValue !== 'priority' && (
        <div className="cardTags">
          <div className="tags color-grey"><span className='dot'>...</span>  </div>
          {tag?.map((elem, index) => (
            <div key={index} className="tags color-grey">
              <span> <GrStatusGoodSmall /></span> {elem}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Card;
