/* eslint-disable max-len */
import Head from 'next/head';
import PropTypes from 'prop-types';

const BaseLayout = ({ children }) => {
  return (
    <div id="main">
      <Head>
        <title>Anh Tuan | Web developer</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#181818" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <meta
          name="viewport"
          key="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@tuanna" />
        <meta property="og:site_name" content="Anh Tuan | Web developer" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Anh Tuan | Web developer" />
        <meta property="og:locale" content="en" />
        <meta property="og:url" content="https://tuanna.com" />
        <meta
          name="description"
          content="Hello! I'm Tuan, a software developer freelancer, specializing in building exceptional websites and
      websites and design, deployment, and maintenance part of the database system."
        />
        <meta
          name="keywords"
          content="Developer, Java Spring, Freelancer, React, React native, Java, Angular Developer, Vue JS Developer, React Developer"
        />
        <meta property="og:image" content="https://tuanna.com/avatar.jpeg" />
        <meta property="twitter:image" content="https://tuanna.com/avatar.jpeg" />
      </Head>
      {children}
    </div>
  );
};

BaseLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default BaseLayout;
