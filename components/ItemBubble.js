import React from 'react';

export default function ItemBubble(props){

    //Elements that are going to be shown.
    const {likes, comments, downloads} = props.image;
    return (
      <div className="Item__bubble">
        <div className="Image_data">
          <img src="https://i.imgur.com/FjJPTCD.png" alt="like icon" />
          <p>{likes}</p>
        </div>
        <div className="Image_data">
          <img src="https://i.imgur.com/9J5q6wj.png" alt="comment icon" />
          <p>{comments}</p>
        </div>
        <div className="Image_data">
          <img src="https://i.imgur.com/5BZE6Ds.png" alt="download icon" />
          <p>{downloads}</p>
        </div>
        <style jsx>{`
          .Item__bubble {
            position: absolute;
            padding: 20px;
            top: 5px;
            right: 5%;
            left: 5%;
            background-color: #706adf;
            display: flex;
            border-radius: 8px;
            justify-content: center;
            z-index: -100;
            opacity: 0;
            transform: scale(0);
            transition: all ease-out 0.3s;
          }
          .Item__bubble::after {
            content: "";
            position: absolute;
            background-color: #706adf;
            width: 20px;
            height: 20px;
            bottom: -10px;
            transform: rotate(45deg);
          }

          .Image_data {
            display: flex;
            align-items: center;
            margin: 0px 10px;
          }
          .Image_data img {
            margin-right: 5px;
            height: 17px;
            width: 19px;
          }
          .Image_data p {
            margin-right: 5px;
            font-size: 12px;
          }
          @media screen and (max-width: 700px) {
            .Image_data img {
              height: 12px;
              width: 11px;
            }
            .Image_data p {
              font-size: 10px;
            }
          }
        `}</style>
      </div>
    );
}