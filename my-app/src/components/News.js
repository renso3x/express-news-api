import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NewsCard from './NewsCard';

const News = ({ articles }) => {
  return articles.map((article, k) => <NewsCard key={k} article={article} />)
};

News.propTypes = {
  articles: PropTypes.array
};

const mapStateToProps = ({ news }) => ({
  articles: news.articles
});

export default connect(mapStateToProps)(News);