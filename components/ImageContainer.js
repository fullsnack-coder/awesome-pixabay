import ImageItem from "./ImageItem";
import QueryNotFound from "./QueryNotFound";
import Loader from "./Loader";

export default class ImageContainer extends React.Component{
    render(){

        const {active, images, loading} = this.props;
        if(active && images.length==0 && loading==false)
            return <QueryNotFound/>

        if(loading)
            return <Loader/>
        
        return(
            <div className='ImageContainer'>
                {images.map(image =>{
                    return <ImageItem
                        key={image.id}
                        image={image}
                    />
                })}
                <style jsx>{`
                    .ImageContainer{
                        max-width: 1300px;
                        column-count: 4;
                        padding: 5px;
                        margin-bottom: 12px;
                    }
                    @media screen and (max-width: 700px){
                        .ImageContainer{
                            column-count: 3;
                        }
                    }
                    @media screen and (max-width: 400px){
                        .ImageContainer{
                            column-count: 2;
                        }
                    }
                `}</style>
            </div>
        )
    }
}