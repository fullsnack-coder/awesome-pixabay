import Link from 'next/link';
import ItemBubble from './ItemBubble';

export default class ImageItem extends React.Component{

  //Method for turn on the modal.
    turnOnModal = (e) => {
      //The image info and modalHandler method.
      const { image, modalHandler } = this.props;
      e.preventDefault();
      modalHandler(true, image);
    }
    
    render(){
      const { image } = this.props;
      return (
        <div className="ImageItem">
          <img src={image.webformatURL} />

          <ItemBubble image={image} />

          <Link href={image.pageURL}>
            <a onClick={this.turnOnModal} target="_blank" className="Item__view">
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

            :global(.ImageItem:hover .Item__bubble) {
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
          `}</style>
        </div>
      );
    }
    
}