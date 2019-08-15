import SearchForm from './SearchForm';

export default class extends React.Component{

    render(){
        return(
            <section>
                <figure className='Hero__image'>
                    <img src='https://i.imgur.com/O5ZWxon.jpg' alt='awesome pixabay isotype'/>
                    <figcaption></figcaption>
                </figure>
                <SearchForm/>
                <style jsx>{`
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