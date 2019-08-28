import React, { Component } from 'react';
import ImageDetails from './ImageDetails';

export default class Modal extends Component{
    render(){

        const {info, desactiveModal} = this.props;

        return (
          <section className="Modal">
            <div className="Modal_PopUp">
              <figure className="Modal_cover">
                {console.log(this.props)}
                <img src={info.info.largeImageURL} />
              </figure>
              <ImageDetails info={info} desactiveModal={desactiveModal} />
            </div>
            <style jsx>{`
              .Modal {
                width: 100%;
                height: 100vh;
                background: rgba(23, 37, 59, 0.5);
                position: fixed;
                top: 0;
                z-index: 1000;
                padding: 20px;
                padding-bottom: 80px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-family: "Lexend Deca", sans-serif;
                overflow-y: auto;
              }
              .Modal_PopUp {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 550px;
              }
              .Modal_cover {
                height: 100%;
                width: 60%;
                background-color: black;
                display: flex;
                align-items: center;
                justify-content: center;
              }
              img {
                max-height: 100%;
                display: inline-block;
              }
              @media screen and (max-width: 700px) {
                .Modal {
                  align-items: flex-start;
                }
                .Modal_PopUp {
                  flex-direction: column;
                  justify-content: center;
                }
                .Modal_cover {
                  width: 100%;
                  height: auto;
                }
              }
            `}</style>
          </section>
        );
    }
}