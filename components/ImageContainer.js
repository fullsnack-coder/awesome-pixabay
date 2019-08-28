import ImageItem from "./ImageItem";
import QueryNotFound from "./QueryNotFound";
import Loader from "./Loader";
import Modal from "./Modal";

export default class ImageContainer extends React.Component{

    showPrev = () =>{
        const {page, active, handlePrevPage}= this.props;
        if(page > 1 && active){
            return <button className='btn' onClick={handlePrevPage}>
                        Prev
                        <style jsx>{`
                            .btn{
                                padding: 10px;
                                margin: 2px 10px;
                                min-width: 116px;
                                border: solid 1px transparent;
                                color: white;
                                background-color: #3F479B;
                                border-radius: 24px;
                                cursor: pointer;
                                font-family: 'Lexend Deca', sans serif;
                            }
                            .btn:hover{
                                background-color: #000;
                                color: white;
                                border: solid 1px white;
                            }
                        `}</style>
                   </button>
        }
        return null;
    }

    showNext = () =>{
        const {page, pages, active, handleNextPage}=this.props;
        if(pages > page && active){
            return <button className='btn' onClick={handleNextPage}>
                        Next
                        <style jsx>{`
                            .btn{
                                padding: 10px;
                                margin: 2px 10px;
                                min-width: 116px;
                                border: solid 1px transparent;
                                color: white;
                                background-color: #3F479B;
                                border-radius: 24px;
                                cursor: pointer;
                                font-family: 'Lexend Deca', sans serif;
                            }
                            .btn:hover{
                                background-color: #000;
                                color: white;
                                border: solid 1px white;
                            }
                        `}</style>
                    </button>
        }
        return null;
    }

    render(){

        const {
          active,
          images,
          loading,
          query,
          activeModal,
          modal,
          desactiveModal
        } = this.props;

        if(active && images.length==0 && loading==false)
            return <QueryNotFound query={query}/>
        if(loading)
            return <Loader/>
        
        return (
          <React.Fragment>
            {modal.active ? <Modal info={modal} desactiveModal={desactiveModal} /> : ""}
            <div className="ImageContainer">
              {images.map(image => {
                return (
                  <ImageItem
                    key={image.id}
                    image={image}
                    activeModal={activeModal}
                  />
                );
              })}
            </div>
            <div className="Btn__container">
              {this.showPrev()}
              {this.showNext()}
            </div>
            <style jsx>{`
              .ImageContainer {
                max-width: 1300px;
                column-count: 4;
                padding: 12px;
                margin-bottom: 12px;
              }

              @media screen and (max-width: 700px) {
                .ImageContainer {
                  column-count: 3;
                }
              }
              @media screen and (max-width: 400px) {
                .ImageContainer {
                  column-count: 2;
                }
              }
            `}</style>
          </React.Fragment>
        );
    }
}