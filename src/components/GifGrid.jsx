import { useEffect } from "react";
import { useState } from "react";
import { getGifs, getPage } from "../helpers/getGifts";
import { Card, Col, Row, Divider } from "antd";


export const CharactesGrid = ({ category }) => {
  const [characters, setCharacters] = useState([]);

  const getCharacters = async () => {
    const newCharacters = await getGifs(category);
    setCharacters(newCharacters);
  };

  useEffect(() => {
    getCharacters();
    getPage();
  }, []);

  



  return (
    <>
      <ol>
        <Row gutter={[16, 16]}>
          {characters.map((char) => (
            <Col span={6} key={char.id}>
              <Card style={{ margin: "2px" }}>
                <img
                  src={char.image}
                  style={{ objectFit: "cover", height: "200px" }}
                ></img>{" "}
                <div></div>
                {char.name}
                <div></div>
                {char.status}
              </Card>
            </Col>
          ))}
        </Row>
      </ol>
    </>
  );
};
