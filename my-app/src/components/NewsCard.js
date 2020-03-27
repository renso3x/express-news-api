import _ from 'lodash';
import React from 'react';
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardImg,
  Col,
  CardLink
} from 'reactstrap';
import PropTypes from 'prop-types';
import moment from 'moment';
import noImage from '../assets/no-image.png';

const NewsCard = ({
  article
}) => {
  return (
    <Col xs={4}>
      <Card className="news__card">
        <CardImg top width="100%" src={article.urlToImage === 'null' ? noImage : article.urlToImage} alt={article.title} />
        <CardBody>
          <CardTitle>{article.title}</CardTitle>
          <CardSubtitle className="news__card_date">{moment(article.publishedAt).format('YYYY-MM-DD')}</CardSubtitle>
          <CardText className="news__card_content">{article.description.substring(0, 50)}</CardText>
          <CardLink target="_blank" href={article.url}>Read more</CardLink>
        </CardBody>
      </Card>
    </Col>
  );
};

NewsCard.propTypes = {
  article: PropTypes.object
};

export default NewsCard;