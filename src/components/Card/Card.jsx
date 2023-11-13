  import React from 'react'
import './Card.css';
import { GrStatusGoodSmall } from "react-icons/gr";

const Card = ({ id, title, tag, status, groupValue }) => {
  return (
    <div className="cardContainer flex-gap-10" style={{ gap: '5px' }}>
      <div className='IDcontainer'>
<p>{id}</p>
<div className='imgcont' style={{"height":"25px" , "width":"25px"}}>
  <img style={{"height":"25px" , "width":"25px"}} src="https://quicksell.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F90d06c75-2211-4d1b-85e6-513f4f2d58ac%2FQS_Logo.jpg?table=block&id=17869537-f4b3-4af6-80f1-a6a65ab92a54&spaceId=867c6222-5e73-49fb-b21f-a276ba2d258b&width=250&userId=&cache=v2" alt="QuickSell" />
</div>
      </div>
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
