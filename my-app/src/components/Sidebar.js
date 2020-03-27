import React from 'react';
import PropTypes  from 'prop-types';
import { connect } from 'react-redux'
import { ListGroup, ListGroupItem } from 'reactstrap';

const Sidebar = ({
  articles
}) => {

  return (
    <div>
      <ListGroup className="aside__container">
        <ListGroupItem tag="b">News Sources</ListGroupItem>
        {
          articles.map((article, k) => {
            const { name } = article.source;
            return (
              <ListGroupItem
                key={k}
                tag="a"
                href={article.url}
                target="_blank"
              >{name}</ListGroupItem>
            )
          })
        }

      </ListGroup>
    </div>
  );
}

Sidebar.propTypes = {
  topics: PropTypes.array,
  selectedTopic: PropTypes.string,
  setTopic: PropTypes.func
};

const mapStateToProps = ({ news }) => ({
  articles: news.articles,
})

export default connect(mapStateToProps, {
})(Sidebar);