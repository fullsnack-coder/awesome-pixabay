import SearchForm from './SearchForm';
import ImageContainer from './ImageContainer';

export default class extends React.Component{

    render(){
        return(
            <section className={(this.props.active)? 'Home active': 'Home'}>
                <main className={(this.props.active)? 'Header active' : 'Header'}>
                    <figure onClick={this.props.handleActive} className={(this.props.active)? 'Hero__image active': 'Hero__image'}>
                        <img src='https://i.imgur.com/O5ZWxon.jpg' alt='awesome pixabay isotype'/>
                        <figcaption></figcaption>
                    </figure>
                    <SearchForm
                        searchData={this.props.searchData}
                    />
                </main>
                <ImageContainer
                    images={this.props.images}
                    active={this.props.active}
                    loading={this.props.loading}
                />
                <style jsx>{`
                    .Home{
                        min-height: 80vh;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                    }
                    .Home.active{
                        justify-content: flex-start;
                    }
                    .Header{
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        width: 100%;
                        transition: all ease .3s;
                        cursor: pointer;
                    }
                    .Header.active{
                        padding: 12px;
                        flex-direction: row;
                        justify-content: space-around;
                    }
                    .Hero__image{
                        max-width: 600px;
                        width: 60%;
                        margin-bottom: 24px;
                    }
                    .Hero__image.active{
                        width: 150px;
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