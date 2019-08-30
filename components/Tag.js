export default function Tag(props){

    //Little functional component to see the image tags.
    return(
        <div className='Tag'>
            {props.tag}
            <style jsx>{`
                .Tag{
                    display: inline-block;
                    padding: 4px 14px;
                    border: solid 1.5px black;
                    border-radius: 22px;
                    margin: 4px 8px 4px 0px;
                }

            `}</style>
        </div>
    )
}