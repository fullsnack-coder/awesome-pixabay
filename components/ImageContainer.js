import ImageItem from "./ImageItem";
import QueryNotFound from "./QueryNotFound";
import Loader from "./Loader";
import Modal from "./Modal";

export default class ImageContainer extends React.Component{

    //Method for show the prev-button.
    showPrev = () => {

      //Logic function.
      const {page, active, handlePrevPage}= this.props;
      if(page > 1 && active){
          return (
          <button className='btn' onClick={handlePrevPage}>
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
          )
      }
      return null;
    }

    //Method to show the Next-button.
    showNext = () => {
        //Logic function.
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
      //Logic elements of the function.
        const {
          active,
          images,
          loading,
          query,
          modal,
          modalHandler
        } = this.props;

        //Results-not-found view.
        if(active && images.length==0 && loading==false)
            return <QueryNotFound query={query}/>
        
        //Loading view.
        if(loading)
            return <Loader/>
        
        return (
          <React.Fragment>
            { //Modal validation. (Show the modal if the attribute active of the modal prop is true).
              modal.active ? <Modal info={modal} modalHandler={modalHandler} /> : ""
            }
            <div className="ImageContainer">
              { /* Map the results in this component with the map method :) */
                images.map(image => {
                return (
                  //Passing the info and the modal-handler.
                  <ImageItem
                    key={image.id}
                    image={image}
                    modalHandler={modalHandler}
                  />
                );
              })}
            </div>
            <div className="Btn__container">
              { //Render the buttons with the functions.
                this.showPrev()}
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