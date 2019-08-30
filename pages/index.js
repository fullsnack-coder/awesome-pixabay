import React from 'react';
import Error from 'next/error';

import Layout from '../components/Layout';
import Home from '../components/Home';

//Fetch data dependency
import 'isomorphic-fetch';

export default class extends React.Component{


    //Constructor method for the initialState.
    constructor(props){
        super(props);
        this.state = {
            data : [],
            loading: false,
            searchActive: false,
            error: null,
            page : null,
            pages : null,
            query : null,
            modal: {
                active: false,
                info: null
            }
        }
    }

    //Function to enable and disable the modal. 
    //Receive 2 params, the state of the modal and the media image, default media param will be empty.
    modalHandler = (state, info = {}) => {
        const modalState = state;

        this.setState({
            modal : {
                active: modalState,
                info
            }
        })
    }

    //Main function to fetch data from Pixabay.com
    //For more information about the API request check the oficial Pixabay documentation on: https://pixabay.com/api/docs/
    consultAPI = () =>{

        try {
            //URL elements.
            const {query} = this.state;
            const key = '13117088-38c3fbd9bd8d2c29d5a7a5020';
            const per_page = 20;

            //Request status is loading.
            this.setState({ loading : true, searchActive: true});

            //Timeout for the loading animation.
            setTimeout( async() => {
                const reqImages = await fetch(`https://pixabay.com/api/?key=${key}&q=${query}&per_page=${per_page}&page=${this.state.page}`);
                //Status validation.
                if (reqImages.status == 200) {
                    //Success logic.
                    const dataImages = await reqImages.json();
                    //Calculating the number of pages.
                    const pages = Math.ceil(dataImages.totalHits / per_page);

                    this.setState({
                        data: dataImages.hits,
                        searchActive: true,
                        loading: false,
                        error: null,
                        pages
                    })
                    
                }
                else if(reqImages.status !=200){
                    //Set the error state
                    this.setState({
                        loading: false,
                        error: reqImages.status
                    })
                }
            }, 800);
        }
        //Catching and set the error state.
        catch(e){
            this.setState({
                loading: false,
                error: e
            })
        }
    }


    searchData = (query) => {
        //Set the query state and call the consultAPI() method when it ends.
        this.setState({
            query : query,
            page : 1
        }, ()=>{
            this.consultAPI()
        });
    }

    //Method to reset the search status.
    resetSearch = () =>{
        this.setState({
            searchActive : false,
            data : []
        })
    }

    //Method to go back one page in the results.
    handleNextPage = () => {
        //Function logic.
        const { pages, page } = this.state;
        if(pages>page){
            this.setState({
                page: page+1
            }, () => {
                this.consultAPI()
            });
        }
        return null
    }

    //Method to advance a page in the results.
    handlePrevPage = () =>{
        //Function logic.
        const { page } = this.state;
        if (page > 1) {
            this.setState({
                page: page-1
            }, ()=>{
                this.consultAPI()
            });
        }
        return null
    }

    render(){
        const {error, loading, modal, searchActive, data, page, pages, query} = this.state;
        //Error case view.
        if(error){
            return <Error statusCode={error}/>
        }
        //Succes case view.
        return (
          <Layout title="Awesome PIXA">
            <Home
              active={searchActive}
              images={data}
              page={page}
              pages={pages}
              query={query}
              modal={modal}
              loading={loading}
              searchData={this.searchData}
              resetSearch={this.resetSearch}
              handleNextPage={this.handleNextPage}
              handlePrevPage={this.handlePrevPage}
              modalHandler={this.modalHandler}
            />
            <style jsx>{`
              :global(body) {
                background-color: #f7f7f7;
              }
            `}</style>
          </Layout>
        );
    }
}