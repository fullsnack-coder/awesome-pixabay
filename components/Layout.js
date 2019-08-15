import Head from 'next/head';
import Footer from './Footer';

function Layout(props){
    return(
        <div>
            <Head>
                <title>{props.title}</title>
            </Head>
            {props.children}
            <Footer/>
        </div>
    )
}

export default Layout;