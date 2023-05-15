import Script from 'next/script';

export default function Nextra({ Component, PageProps }) {
    const getLayout = Component.getLayout || ((page) => page);
    return (
        <>
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-9CRWHZW2T3"
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){window.dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-9CRWHZW2T3');
                `}
            </Script>
            {getLayout(<Component {...PageProps} />)}
        </>
    )
}