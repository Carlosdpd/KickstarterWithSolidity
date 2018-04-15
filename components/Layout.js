//Dependencias de interface, rutas y elementos útiles del contrato
import React from 'react';
import { Container } from 'semantic-ui-react';
import Head from 'next/head';
import Header from './Header';

export default (props) => {
  return (

    {/* Contenedor principal que contiene el CDN de Semantic-UI */}
    <Container>
      <Head>
        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>
      </Head>
      <Header />
        {props.children}

    </Container>
  );
};
