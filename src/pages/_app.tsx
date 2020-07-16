import React from 'react';
import App, { Container } from 'next/app';
import withApollo from '../lib/apollo/client';
import '../styles/main.sass';

class MyApp extends App {
    static async getInitialProps({ Component, router, ctx }: { Component: any, router: any, ctx: any }) {

        let pageProps: any = {}
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }

        return { pageProps }
    }

    render() {

        const { Component, pageProps } = this.props;
        return (
            <>
                <Component {...pageProps} />
            </>
        )
    }
}


export default withApollo({ ssr: true })(MyApp);