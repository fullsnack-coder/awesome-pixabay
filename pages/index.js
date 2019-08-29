import React from 'react';
import Error from 'next/error';

import Layout from '../components/Layout';
import Home from '../components/Home';
import 'isomorphic-fetch';

export default class extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            data : [],
            loading: false,
            active: false,
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

    activeModal = (state, info) =>{
        const modalState = state;
        this.setState({
            modal : {
                active: modalState,
                info
            }
        })
    }
    
    desactiveModal = (state) =>{
        const modalState = state;
        this.setState({
            modal : {
                active: modalState
            }
        })
    }


    consultAPI = () =>{
        try {
            const {query} = this.state;
            const key = '13117088-38c3fbd9bd8d2c29d5a7a5020';
            const per_page = 20;
            this.setState({ loading : true, active: true});
            setTimeout(async()=>{
                const reqImages = await fetch(`https://pixabay.com/api/?key=${key}&q=${query}&per_page=${per_page}&page=${this.state.page}`);
                if (reqImages.status == 200) {
                    const dataImages = await reqImages.json();
                    this.setState({
                        data: dataImages.hits,
                        loading: false,
                        active: true,
                        error: null,
                        pages: Math.ceil(dataImages.totalHits/ per_page)
                    })
                    console.log(dataImages);
                    console.log(`pagina: ${this.state.page}`);
                    console.log('paginas: ' + Math.ceil(dataImages.totalHits/ per_page));
                }
                else if(reqImages.status !=200){
                    this.setState({
                        loading: false,
                        error: reqImages.status
                    })
                }
            }, 800);
        }
        catch(e){
            this.setState({
                loading: false,
                error: e
            })
        }
    }

    searchData = (query) =>{
        this.setState({
            query : query,
            page : 1
        }, ()=>{
            this.consultAPI()
        });
    }

    handleActive = () =>{
        this.setState({
            active : false,
            data : []
        })
    }

    handleNextPage = () =>{
        const {pages, page} = this.state;
        if(pages>page){
            this.setState({
                page: page+1
            }, ()=>{
                this.consultAPI()
            });
        }
        return null
    }

    handlePrevPage = () =>{
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
        const {error, loading, modal} = this.state;
        if(error){
            return <Error statusCode={error}/>
        }

        return (
          <Layout title="Awesome PIXA">
            <Home
              active={this.state.active}
              searchData={this.searchData}
              images={this.state.data}
              page={this.state.page}
              pages={this.state.pages}
              query={this.state.query}
              loading={loading}
              handleActive={this.handleActive}
              handleNextPage={this.handleNextPage}
              handlePrevPage={this.handlePrevPage}
              activeModal={this.activeModal}
              desactiveModal={this.desactiveModal}
              modal={this.state.modal}
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