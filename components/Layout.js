import Head from 'next/head';
import Footer from './Footer';

/**
 *  This component is the Layout container of the page, in this component are placed the SEO atributtes.
 */

function Layout(props){
    return(
        <div>
            <Head>
                <title>{props.title}</title>
                <meta name="viewport" content="width=device-width, user-scalable=no"/>
                <link href="https://fonts.googleapis.com/css?family=Lexend+Deca&display=swap" rel="stylesheet"/>
                <link rel='icon' href='./../static/favicon.ico'/>
            </Head>
            {props.children}
            <Footer/>
        </div>
    )
}

export default Layout;