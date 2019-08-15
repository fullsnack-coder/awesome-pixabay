export default class SearchForm extends React.Component{
    render(){
        return(
            <form>
                <input
                    type='text'
                    placeholder='Search image and videos...'

                />
                <button type='button'>
                    Search
                </button>
            </form>
        )
    }
}