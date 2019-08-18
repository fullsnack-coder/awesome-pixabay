import Link from 'next/link';

export default function ImageItem(props){
    const {image} = props;
    return(
        <Link href={image.pageURL}>
            <a target='_blank' className='ImageItem'>
                <img
                    src={image.webformatURL}
                />
                <div className='Item__overlay'>
                    <span className='Item__info'>
                        <img src='https://i.imgur.com/FjJPTCD.png' alt='like icon' />
                        <p>{image.likes}</p>
                        <img src='https://i.imgur.com/9J5q6wj.png' alt='comment icon' />
                        <p>{image.comments}</p>
                    </span>
                </div>
                <style jsx>{`
                .ImageItem{
                    margin-bottom: 12px;
                    transition: all ease .3s;
                    background-color: #F7F7F7;
                    border-radius: 6px;
                    position: relative;
                    color: white;
                    font-family: 'Lexend Deca', sans-serif;
                    overflow: hidden;
                    display: inline-block;

                }
                .ImageItem img{
                    border-radius: 6px;
                    display: block;
                    width: 100%;
                }
                .Item__overlay{
                    position: absolute;
                    width: 100%;
                    height: 30px;
                    bottom: -30;
                    z-index: 10;
                    transition: all ease 0.3s;
                }
                .Item__overlay{
                    background: rgba(231,56,39,0);
                    background: -moz-linear-gradient(top, rgba(231,56,39,0) 0%, rgba(231,56,39,0) 0%, rgba(0,0,0,1) 100%);
                    background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(231,56,39,0)), color-stop(0%, rgba(231,56,39,0)), color-stop(100%, rgba(0,0,0,1)));
                    background: -webkit-linear-gradient(top, rgba(231,56,39,0) 0%, rgba(231,56,39,0) 0%, rgba(0,0,0,1) 100%);
                    background: -o-linear-gradient(top, rgba(231,56,39,0) 0%, rgba(231,56,39,0) 0%, rgba(0,0,0,1) 100%);
                    background: -ms-linear-gradient(top, rgba(231,56,39,0) 0%, rgba(231,56,39,0) 0%, rgba(0,0,0,1) 100%);
                    background: linear-gradient(to bottom, rgba(231,56,39,0) 0%, rgba(231,56,39,0) 0%, rgba(0,0,0,1) 100%);
                    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e73827', endColorstr='#000000', GradientType=0 );
                }
                .Item__info{
                    display: flex;
                    align-items: center;
                    width: 100%;
                    padding: 5px;
                }
                .Item__info img{
                    margin-right: 5px;
                    height: 14px;
                    width: 14px;
                }
                .Item__info p{
                    margin-right: 5px;
                    font-size: 11px;
                }

                .ImageItem:hover .Item__overlay{
                    bottom: 0;
                }
            `}</style>
            </a>
        </Link>
    )
}