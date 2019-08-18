export default class Loader extends React.Component{
    render(){
        return(
            <div className='container'>
                <div className="lds-heart"><div></div></div>
                <style jsx>{`
                    .container{
                        display: flex;
                        align-items: center;
                        min-height: 60vh;
                    }
                    .lds-heart {
                        display: inline-block;
                        position: relative;
                        width: 64px;
                        height: 64px;
                        transform: rotate(45deg);
                        transform-origin: 32px 32px;
                    }
                    .lds-heart div {
                        top: 23px;
                        left: 19px;
                        position: absolute;
                        width: 26px;
                        height: 26px;
                        background: #FE9E54;
                        animation: lds-heart 1.2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);
                    }
                    .lds-heart div:after,
                    .lds-heart div:before {
                        content: " ";
                        position: absolute;
                        display: block;
                        width: 26px;
                        height: 26px;
                        background: #FE9E54;
                    }
                    .lds-heart div:before {
                        left: -17px;
                        border-radius: 50% 0 0 50%;
                        }
                        .lds-heart div:after {
                        top: -17px;
                        border-radius: 50% 50% 0 0;
                    }
                    @keyframes lds-heart {
                    0% {
                        transform: scale(0.95);
                    }
                    5% {
                        transform: scale(1.1);
                    }
                    39% {
                        transform: scale(0.85);
                    }
                    45% {
                        transform: scale(1);
                    }
                    60% {
                        transform: scale(0.95);
                    }
                    100% {
                        transform: scale(0.9);
                    }
                    }
                `}</style>
            </div>
        )
    }
}