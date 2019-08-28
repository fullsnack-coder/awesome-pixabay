import React, { Component } from 'react';
import Tag from './Tag';
import Button from './Button';

export default class ImageDetails extends Component{

    closeModal = () =>{
        this.props.desactiveModal(false);

    }

    render(){

        const { userImageURL, user, user_id, likes, comments, downloads, tags, pageURL, webformatURL } = this.props.info.info;
        const arrayTags = tags.split(',');
        return (
          <section className="ImageDetails">
            <div className="btn-closeModal" onClick={this.closeModal}>
              +
            </div>
            <div className="ImageDetails_section">
              <h1 className="title">Details</h1>
              <div className="section-user">
                <figure className="Image_Profile">
                  <img src={userImageURL} />
                </figure>
                <div className="user-info">
                  <h4 className="user">{user}</h4>
                  <h5># {user_id}</h5>
                </div>
              </div>
            </div>
            <div className="ImageDetails_section">
              <span>
                <img
                  className="insight_icon"
                  src="https://i.imgur.com/B1yQvwd.png"
                />{" "}
                {likes} likes
              </span>
              <span>
                <img
                  className="insight_icon"
                  src="https://i.imgur.com/iIkvD8u.png"
                />{" "}
                {comments} comments
              </span>
              <span>
                <img
                  className="insight_icon"
                  src="https://i.imgur.com/rvPKVWG.png"
                />{" "}
                {downloads} downloads
              </span>
            </div>
            <div className="ImageDetails_section">
              <h3 className="title">Tags:</h3>
              {arrayTags.map(tag => (
                <Tag key={arrayTags.indexOf(tag)} tag={tag} />
              ))}
            </div>
            <div className="ImageDetails_section">
              <h3 className="title">Actions:</h3>
              <div>
                <Button success={true} text="See Original" url={pageURL} />
                <Button text="Download" url={webformatURL} />
              </div>
            </div>
            {console.log(arrayTags)}
            <style jsx>{`
              .ImageDetails {
                background: #fff;
                width: 30%;
                position: relative;
                min-width: 350px;
                padding: 10px 4px 18px 4px;
                height: 100%;
              }
              .ImageDetails_section {
                padding: 10px;
              }
              .ImageDetails_section h1 {
                font-size: 50px;
                font-weight: normal;
              }
              .ImageDetails_section .title {
                margin-bottom: 12px;
              }
              .section-user {
                display: flex;
                padding: 5px;
              }
              .ImageDetails_section span {
                display: inline-block;
                margin-right: 10px;
              }
              .Image_Profile {
                overflow: hidden;
                border-radius: 50%;
                height: 60px;
                width: 60px;
                margin-right: 12px;
              }
              .Image_Profile img {
                width: 100%;
                height: 100%;
              }
              .user {
                color: #9785e8;
              }
              .insight_icon {
                width: 14px;
                height: 14px;
              }

              .btn-closeModal {
                font-weight: bold;
                font-size: 60px;
                color: #999;
                position: absolute;
                transform: rotate(45deg);
                right: 20px;
                cursor: pointer;
              }

              @media screen and (max-width: 700px) {
                .ImageDetails {
                  margin-top: -20px;
                  border-radius: 20px 20px 8px 8px;
                  width: 100%;
                }
              }
            `}</style>
          </section>
        );
    }
}