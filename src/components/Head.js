import Head from "next/head";
import PropTypes from 'prop-types';

export default function HeadComponent ({ title }) {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name = "description"
        content = "Luis Arana's Portfolio"
      />
      <meta 
        name = "keywords"
        content = "luis arana, backend developer, developer, portfolio"
      />
      <meta 
        name = "author"
        content = "Luis Arana"
      />
      <meta 
        property="og:title" 
        content="Luis Arana's Portfolio" 
      />
    </Head>
  )
}

HeadComponent.propTypes = {
  title: PropTypes.string.isRequired
}