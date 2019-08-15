import React from 'react';
import 'isomorphic-fetch';

import Layout from '../components/Layout';
import Home from '../components/Home';

export default class extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            data : []
        }
    }

    render(){
        return(
            <Layout title='Awesome PIXA'>
                <Home/>
                <style jsx>{`
                    :global(body){
                        background-color: #F7F7F7;
                    }
                `}</style>
            </Layout>
        )
    }
}