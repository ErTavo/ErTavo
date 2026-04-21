import Head from "next/head";
import PropTypes from 'prop-types';

export default function HeadComponent ({ title }) {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Gustavo Gutiérrez's Portfolio"
      />
      <meta
        name="keywords"
        content="gustavo gutierrez, full stack developer, scrum master, portfolio"
      />
      <meta
        name="author"
        content="Gustavo Gutiérrez"
      />
      <meta
        property="og:title"
        content="Gustavo Gutiérrez's Portfolio"
      />
    </Head>
  )
}

HeadComponent.propTypes = {
  title: PropTypes.string.isRequired
}
