import SearchForm from './SearchForm';

export default class extends React.Component{

    render(){
        return(
            <section className='Home'>
                <figure className='Hero__image'>
                    <img src='https://i.imgur.com/O5ZWxon.jpg' alt='awesome pixabay isotype'/>
                    <figcaption></figcaption>
                </figure>
                <SearchForm/>
                <style jsx>{`
                    .Home{
                        min-height: 80vh;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        width: 100%;
                    }
                    .Hero__image{
                        max-width: 600px;
                        width: 60%;
                        margin-bottom: 24px;
                    }
                    :global(*){
                        margin: 0%;
                        padding: 0%;
                        box-sizing: border-box;
                    }
                    :global(img){
                        max-width: 100%
                    }
                `}</style>
            </section>
        )
    }
}