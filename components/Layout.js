import Head from "next/Head";

export default function Layout({ children }) {
  return (
    <div className="content">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Innovate@trix Title" key="title" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      {children}
    </div>
  );
}
