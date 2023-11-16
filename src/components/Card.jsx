import React from 'react';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function BasicExample(props) {
  return (
    <div className='container m-2 title' >
      {props.allPost ?
        props.allPost.map((post, index) => (
          <Card key={index} style={{ width: '18rem', marginRight:"10px" }} >
            <Card.Img variant="top" src="https://picsum.photos/100/100" />
            <Card.Body>
              <Card.Title>{post.title}</Card.Title>
            <Card.Text>
                {post.body}
              </Card.Text>
              <Link to={`/post/${post?.id}`} variant="primary">Go somewhere</Link>
            </Card.Body>
          </Card>
        ))
        : null}
    </div>
  );
}

export default BasicExample;
