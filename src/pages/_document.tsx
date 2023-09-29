import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <meta charSet='utf-8' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
        <link
          href='https://fonts.googleapis.com/css2?family=Cabin:wght@400;500;600;700&family=Crimson+Text&family=Montserrat:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;500;600;700&display=swap'
          rel='stylesheet'
        />
        <meta name='description' content='app description goes here'></meta>
        <meta name='title' content='app title goes here' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
