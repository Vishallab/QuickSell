import React from "react";
import { useSelector } from "react-redux";
import { FcProcess } from "react-icons/fc";
import { AiOutlinePlus } from "react-icons/ai";
import "./KanbanView.css";
import Card from "../Card/Card";

const KanbanView = () => {
  const { selectedData, user } = useSelector(
    (state) => state.SelectDataReducer
  );

  return (
    selectedData && (
      <div className="KanbanContainer" style={{ justifyContent: "space-evenly" }}>
        {selectedData.map((elem, index) => {
          return (
            <>
              <div key={index} className="KanbanCardContainer">
                <div className="KanbanCardHeading flex-sb">
                  <div className="leftView">
                    {!user ? (
                      <FcProcess />
                    ) : (
                      <>
                        <div
                          className="imageContainer relative"
                          style={{ width: "25px", height: "25px", display : 'inline-block' }}
                        >
                          <img
                            style={{
                              width: "100%",
                              height: "100%",
                            }}
                            src="https://quicksell.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F90d06c75-2211-4d1b-85e6-513f4f2d58ac%2FQS_Logo.jpg?table=block&id=17869537-f4b3-4af6-80f1-a6a65ab92a54&spaceId=867c6222-5e73-49fb-b21f-a276ba2d258b&width=250&userId=&cache=v2"
                            alt="UserImage"
                          />
                        </div>
                      </>
                    )}
                    <span>
                      {" "}
                      {elem[index]?.title} {elem[index]?.value?.length}
                    </span>
                  </div>
                  <div className="rightView">
                    <AiOutlinePlus />{" "}
                    <span style={{ letterSpacing: "2px" }}>...</span>
                  </div>
                </div>
                <div className="KanbanList flex-gap-10">
                  {elem[index]?.value?.map((elem, ind) => {
                    return (
                      <Card id={elem.id} title={elem.title} tag={elem.tag} />
                    );
                  })}
                </div>
              </div>
            </>
          );
        })}
      </div>
    )
  );
};

export default KanbanView;
