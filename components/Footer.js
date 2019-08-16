export default function Footer(){
    return(
        <div className='Footer'>
            <p>ManuelDEV - Con la tecnolog&iacute;a de </p>
            <figure className='Footer__img'>
                <img
                    src='https://i.imgur.com/3Ps0ZYR.png'
                    alt='pixabay logo'
                />
            </figure>
            <style jsx>{`
                .Footer{
                    font-family: 'Lexend Deca', sans-serif;
                    height: 100px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .Footer p{
                    font-size: 14px;
                }
                .Footer__img{
                    display: inline-block;
                    height: 80px;
                    width: 116px;
                    margin-left: -20px;
                }
                .Footer__img img{
                    max-height: 100%;
                    display: block;
                    margin: auto;
                }
                @media screen and (max-width: 400px){
                    .Footer{
                        flex-direction: column;
                        padding: 12px;
                        text-align: center;
                    }
                    .Footer__img{
                        margin-top: -15px;
                    }
                }
            `}</style>
        </div>
    )
};