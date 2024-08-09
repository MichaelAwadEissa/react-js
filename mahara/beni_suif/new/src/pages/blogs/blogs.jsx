import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MyCard from '../../components/cards';
import Dropdown from 'react-bootstrap/Dropdown';

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [KeyWord, setKeyWord] = useState("iot");

  useEffect(() => {
    axios.get(`https://newsapi.org/v2/everything?q=${KeyWord}&apiKey=9d331bb9fc0c46b0aa8a9190cb4526a4`)
      .then((res) => {
        setBlogs(res.data.articles); // Update the state with fetched articles
      })
      .catch((err) => {
        console.log(err);
      });
  }, [KeyWord]); // Re-run the effect when KeyWord changes

  const handleSelect = (eventKey) => {
    setKeyWord(eventKey);
  }

  return (
    <>
      <h1>Blogs page</h1>
      <Dropdown onSelect={handleSelect}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {KeyWord}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item eventKey="iot">IOT</Dropdown.Item>
          <Dropdown.Item eventKey="blockchain">Blockchain</Dropdown.Item>
          <Dropdown.Item eventKey="ai">AI</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      {blogs.map((blog, index) => (
        <MyCard key={index} name={blog.title} logo={blog.urlToImage} />
      ))}
     
    </>
  );
}

export default Blogs;
