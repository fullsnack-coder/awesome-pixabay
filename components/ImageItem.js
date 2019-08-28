import Link from 'next/link';

export default function ImageItem(props){
    const { image, activeModal } = props;
    return (
      <div className="ImageItem">
        <img src={image.webformatURL} />
        <div className="Item__overlay">
          <div className="Image_data">
            <img src="https://i.imgur.com/FjJPTCD.png" alt="like icon" />
            <p>{image.likes}</p>
          </div>
          <div className="Image_data">
            <img src="https://i.imgur.com/9J5q6wj.png" alt="comment icon" />
            <p>{image.comments}</p>
          </div>
          <div className="Image_data">
            <img src="https://i.imgur.com/5BZE6Ds.png" alt="download icon" />
            <p>{image.downloads}</p>
          </div>
        </div>
        <Link href={image.pageURL}>
          <a onClick={(e)=>{
              e.preventDefault();
              console.log('You click me!...')
              activeModal(true, image);
          }} target="_blank" className="Item__view">
            <img src="https://i.imgur.com/HIH2CQT.png" alt="view logo" />
          </a>
        </Link>
        <style jsx>{`
          .ImageItem {
            margin-bottom: 12px;
            transition: all ease 0.3s;
            background-color: #f7f7f7;
            border-radius: 6px;
            position: relative;
            color: white;
            font-family: "Lexend Deca", sans-serif;
            display: inline-block;
          }
          .ImageItem img {
            border-radius: 6px;
            display: block;
            width: 100%;
          }

          .Item__overlay {
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
            transition: all ease-out .3s;
          }
          .Item__overlay::after {
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

          .ImageItem:hover .Item__overlay {
            z-index: 100;
            opacity: 1;
            transform: scale(1);
          }
          .ImageItem:hover .Item__view {
            z-index: 100;
            opacity: 1;
          }
          .Item__view {
            position: absolute;
            bottom: -2px;
            right: -2px;
            width: 70px;
            height: 45px;
            z-index: -1000;
            background-color: #fa5959;
            border-radius: 100px 0px 12px 0px;
            display: flex;
            justify-content: center;
            align-items: center;
            opacity: 0;
          }
          .Item__view:hover {
            transform: scale(1.03);
          }
          .Item__view img {
            max-width: 100%;
            height: 22px;
            width: 22px;
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