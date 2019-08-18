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
            error: null
        }
    }

    searchData = async(query) =>{
        try {
            const key = '13117088-38c3fbd9bd8d2c29d5a7a5020';
            this.setState({ loading : true, active: true});
            setTimeout(async()=>{
                const reqImages = await fetch(`https://pixabay.com/api/?key=${key}&q=${query}`);
                if (reqImages.status == 200) {
                    const dataImages = await reqImages.json();
                    this.setState({
                        data: dataImages.hits,
                        loading: false,
                        active: true,
                        error: null
                    })
                    console.log(dataImages)
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

    handleActive = () =>{
        this.setState({
            active : false,
            data : []
        })
    }

    render(){
        const {error, loading} = this.state;
        if(error){
            return <Error statusCode={error}/>
        }

        return(
            <Layout title='Awesome PIXA'>
                <Home
                    active={this.state.active}
                    searchData={this.searchData}
                    images={this.state.data}
                    loading={loading}
                    handleActive={this.handleActive}
                />
                <style jsx>{`
                    :global(body){
                        background-color: #F7F7F7;
                    }
                `}</style>
            </Layout>
        )
    }
}