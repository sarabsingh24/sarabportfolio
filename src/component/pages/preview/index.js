import React from 'react'
import {useParams} from 'react-router-dom';
import Container from '../../common/container';
import './style.css'



export default function Index() {

    const { id } = useParams();

return (
  <>
    <section className="preview-header">
      <article className="preview-info-contener">
        <header className="title">
          Grofar - Online Grocery Supermarket HTML Mobile Template
        </header>
      </article>
    </section>
    <Container>
    
    </Container>
  </>
);
}
