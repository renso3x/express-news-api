import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Jumbotron } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchNews } from './actions/news';

import BigJumbotron from './components/BigJumbotron';
import Sidebar from './components/Sidebar';
import News from './components/News';
import Paginator from './components/Paginator';

function App({
  fetchNews,
}) {
  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div className="App">
      <Container>
        <BigJumbotron />

        <Row>
          <Col xs={3}>
            <Sidebar />
          </Col>

          <Col xs={9}>
            <Row>
              <News />
            </Row>
            <Paginator />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

App.propTypes = {
  fetchNews: PropTypes.func
};

export default connect(null, {
  fetchNews
})(App);
