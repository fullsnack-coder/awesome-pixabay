//Components
import SearchForm from './SearchForm';
import ImageContainer from './ImageContainer';

/**
 *  Presentational component created by show all data images. :)
 */
export default class Home extends React.Component{

    render(){

      const { active, resetSearch, searchData, images, loading, page, pages, handleNextPage, handlePrevPage, query, modalHandler, modal } = this.props;

        return (
          //Changing the style depending of the ACTIVE prop.
          <section className={active ? "Home active" : "Home"}>
            <main className={active ? "Header active" : "Header"}>
              <figure
                onClick={resetSearch}
                className={ active ? "Hero__image active" : "Hero__image" }
              >
                <img
                  src="https://i.imgur.com/RBJanpf.jpg"
                  alt="awesome pixabay isotype"
                />
              </figure>
              <SearchForm searchData={searchData} />
            </main>
            <ImageContainer
              images={images}
              active={active}
              loading={loading}
              page={page}
              pages={pages}
              handleNextPage={handleNextPage}
              handlePrevPage={handlePrevPage}
              query={query}
              modalHandler={modalHandler}
              modal={modal}
            />
            <style jsx>{`
              .Home {
                min-height: 85vh;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
              }
              .Home.active {
                justify-content: flex-start;
              }
              .Header {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                width: 100%;
                transition: all ease 0.3s;
                cursor: pointer;
              }
              .Header.active {
                padding: 12px;
                flex-direction: row;
                justify-content: space-around;
              }
              .Hero__image {
                max-width: 600px;
                width: 60%;
                margin-bottom: 24px;
              }
              .Hero__image.active {
                width: 150px;
              }
              :global(*) {
                margin: 0%;
                padding: 0%;
                box-sizing: border-box;
              }
              :global(img) {
                max-width: 100%;
              }
            `}</style>
          </section>
        );
    }
}
