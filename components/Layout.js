import Head from 'next/head';
import Footer from './Footer';

function Layout(props){
    return(
        <div>
            <Head>
                <title>{props.title}</title>
                <meta name="viewport" content="width=device-width, user-scalable=no"/>
                <link href="https://fonts.googleapis.com/css?family=Lexend+Deca&display=swap" rel="stylesheet"/>
            </Head>
            {props.children}
            <Footer/>
        </div>
    )
}

export default Layout;