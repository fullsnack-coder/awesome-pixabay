
export default class SearchForm extends React.Component{

    query = React.createRef();

    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.searchData(this.query.current.value);
    }

    render(){
        return(
            <form className='Form' onSubmit={this.handleSubmit}>
                <input
                    type='text'
                    placeholder='Search your images ...'
                    ref={this.query}
                />
                <button className='btn-search' type='submit'>
                    <img
                        src='https://i.imgur.com/Bwc7Tk3.png'
                    />
                    <p className='btn-text'>Search</p>
                </button>
                <style jsx>{`
                    .Form{
                        border: solid 2px #FE9E54;
                        height: 50px;
                        display: inline-flex;
                        align-items: center;
                        justify-content: space-between;
                        border-radius: 30px;
                        padding: 0px 5px 0px 20px;
                        width: 94%;
                        max-width: 550px;
                    }
                    .Form input{
                        height: 100%;
                        font-size: 18px;
                        border: none;
                        outline: none;
                        background-color: transparent;
                        font-family: 'Lexend Deca', sans-serif;
                        width: 70%;
                    }
                    .Form .btn-search{
                        font-family: 'Lexend Deca', sans-serif;
                        height: 80%;
                        background-color: #5C94FB;
                        color: white;
                        min-width: 160px;
                        border: none;
                        border-radius: 22px;
                        outline: none;
                        font-weight: bolder;
                        font-size: 14px;
                        cursor: pointer;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        transition: all ease .3s;
                    }
                    .Form .btn-search:hover{
                        background-color: #000;
                        min-width: 160px;
                    }
                    .Form .btn-search:hover .btn-text{
                        display: inline-block;
                    }
                    .btn-search img{
                        height: 15px;
                        margin-right: 6px;
                    }

                    @media screen and (max-width: 470px){
                        .Form .btn-search{
                            background-color: #000;
                            color: white;
                            min-width: 60px;
                            border: none;
                            border-radius: 22px;
                            outline: none;
                            font-weight: bolder;
                            font-size: 16px;
                            cursor: pointer;
                        }
                        .Form input{
                            height: 100%;
                            font-size: 18px;
                            border: none;
                            outline: none;
                            background-color: transparent;
                            width: 65%;
                        }
                        .btn-text{
                            display: none;
                        }
                        .Form .btn-search:hover{
                            background-color: #000;
                            min-width: 60px;
                        }
                        .Form .btn-search:hover .btn-text{
                            display: none;
                        }
                    }
                `}</style>
            </form>
        )
    }
}