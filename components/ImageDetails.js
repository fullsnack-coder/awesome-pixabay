import React, { Component } from 'react';

export default class ImageDetails extends Component{

    closeModal = () =>{
        this.props.desactiveModal(false);

    }

    render(){

        const { userImageURL, user, user_id, likes, comments, downloads, tags, pageURL, webformatURL } = this.props.info.info;
        const arrayTags = tags.split();
        return(
            <div className='ImageDetails'>
                <div className='btn-closeModal' onClick={this.closeModal}>
                    +
                </div>
                <h1>Details</h1>
                <figure className='Image_Profile'>
                    <img src={userImageURL}/>
                </figure>
                {console.log(arrayTags)}
                <style jsx>{`
                    .ImageDetails{
                        min-height: 100vh;
                        background: #fff;
                        position: relative;
                    }
                    .btn-closeModal{
                        font-weight: bold;
                        font-size: 60px;
                        color: black;
                        position: absolute;
                        transform: rotate(45deg);
                        right: 20px;
                        cursor: pointer;
                    }
                `}</style>
            </div>
        )
    }
}