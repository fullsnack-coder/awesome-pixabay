import React, { Component } from 'react';
import ImageDetails from './ImageDetails';

export default class Modal extends Component{
    render(){

        const {info, desactiveModal} = this.props;

        return(
            <div className='Modal'>
                <figure className='Modal_cover'>
                    {console.log(this.props)}
                    <img src={info.info.largeImageURL}/>
                </figure>
                <ImageDetails info={info} desactiveModal= {desactiveModal}/>
                <style jsx>{`
                    .Modal{
                        min-height: 100vh;
                        width: 100%;
                        background: rgba(23, 37, 59, .5);
                        position: fixed;
                        top: 0;
                        z-index: 1000;
                        display: grid;
                        grid-template-columns: 1fr 1fr 1fr;
                        justify-content: center;
                        align-content: center;
                        padding: 20px;
                    }
                    .Modal_cover{
                        grid-column: 1 / 3; 
                    }
                    img{
                        max-height: 100vh;
                    }
                `}</style>
            </div>
        )
    }
}