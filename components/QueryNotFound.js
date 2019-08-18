export default class QueryNotFound extends React.Component{
    render(){
        return(
            <div className='Not-Found'>
                <img
                    className='nf__icon'
                    src='https://i.imgur.com/jXi8nKG.png'
                    alt='Not found image'
                />
                <h2>No hemos encontrado nada</h2>
                <style jsx>{`
                    .Not-Found{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        min-height: 50vh;
                        font-family: 'Lexend Deca', sans-serif;
                        color: #777777;
                        padding: 12px;
                    }
                    .nf__icon{
                        max-width: 120px;
                    }
                    @media screen and (max-width: 400px){
                        .Not-Found{
                            flex-direction: column;
                            text-align: center;
                        }
                        .nf__icon{
                            margin-bottom: 12px;
                        }
                    }
                `}</style>
            </div>
        )
    }
}