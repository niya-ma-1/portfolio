import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Skeleton from "react-loading-skeleton";

const ProjectCard = ({ value }) => {
  const {
    name,
    description,
    youtube,
    repo,
    devpost,
    keywords,
  } = value;

  return (
    <Col md={4}>
      <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
        <Card.Body>
          <Card.Title as="h5">{name || <Skeleton />} </Card.Title>
          {(!youtube) ? "" : 
            <iframe class="responsive-iframe" width='100%' src={youtube} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />}
          <Card.Text>{(!description) ? "" : description || <Skeleton count={3} />} </Card.Text>
          <hr />
          <Keyword keywords={keywords} />
          <CardButtons repo={repo} devpost={devpost}/>
        </Card.Body>
      </Card>
    </Col>
  );
};

const CardButtons = ({ repo, devpost }) => {
  return (
    <div className="d-grid gap-2 d-md-block">
      <a href={repo} target=" _blank" className="btn btn-outline-secondary mx-2">
        <i className="fab fa-github" /> Repo
      </a>
      <a href={devpost} target=" _blank" className="btn btn-outline-secondary mx-2">
        <i /> Devpost
      </a>
    </div>
  );
};


const Keyword = ({ keywords }) => {
  return (
    <div className="pb-3">
      Keywords:{" "}
      {keywords.map((keyword) => (
          <a
            key={keyword}
            className="card-link"
            target=" _blank"
            rel="noopener noreferrer"
          >
            <span className="badge bg-light text-dark">
              {keyword}
            </span>
          </a>
        ))
        }
    </div>
  );
};

export default ProjectCard;
