/* eslint-disable no-console */
/* eslint-disable no-alert */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Layout } from 'antd';
import { AiTwotoneDelete, AiFillEdit } from 'react-icons/ai';
import './home.scss';
import useInitialState from '../../../utils/hook/useInitialState';

export default function Home() {
  const history = useHistory();
  const { Header, Content } = Layout;
  const [search, setSearch] = useState('');
  // const API = 'https://suministros-3p29xlxfi.vercel.app/api/articles';
  const API = 'http://localhost:3000/api/articles';
  const initialState = useInitialState(API);
  const articles = Object.values(initialState);
  console.info(articles);

  const editArticle = (id) => {
    history.push(`articulos/actualizar/${id}`);
  };

  function handleProductSearch(e) {
    setSearch(e.target.value.toLowerCase());
  }

  // onClick={() => { onDeleteArticle(article.id); }}

  return (
    <Layout className="layout">
      <Header className="layout-article">Artículos</Header>
      <Content>
        <h2 className="layout-article-title">Catalogo de Artículos</h2>
        <a href="/articulos/crear"> admin </a>
        <section className="layout-article_search">
          <input
            className="layout-article_search-icon"
            name="search"
            placeholder="Escribe el Nombre del Artículo"
            type="search"
            onChange={handleProductSearch}
            value={search}
          />
        </section>
        <section className="layout-article_groupcard">
          { articles.map((article) => (
            <div className="layout-article_card" key={article.IdPS}>
              <img src={initialState.image} alt={article.name} />
              <span className="information">
                <p>
                  <strong>ID: </strong>
                  {article.IdPS}
                </p>
                <p>
                  <strong>Nombre: </strong>
                  {article.name}
                </p>
                <p>
                  <strong>Presentación: </strong>
                  {article.presentation}
                </p>
                <p>
                  <strong>Precio: </strong>
                  {article.Price}
                </p>
                <p>
                  <strong>Concepto tecnico: </strong>
                  {article.concept}
                </p>
                <button type="button">
                  <AiTwotoneDelete />
                </button>
                <button type="button">
                  <AiFillEdit onClick={() => { editArticle(article.id); }} />
                </button>
              </span>
            </div>
          ))}
        </section>
      </Content>
    </Layout>
  );
}
