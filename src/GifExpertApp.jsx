import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import {  Card } from "antd";
import { Layout, Row, Col, Avatar  } from "antd";
import { CharactesGrid } from "./components/GifGrid";

const { Header, Footer, Sider, Content } = Layout;

const headerStyle = {
  textAlign: "center",
  color: "black",
  height: 100,
  paddingInline: 20,
  lineHeight: "64px",
  backgroundColor: "#000000",

};
const contentStyle = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#014B63",
  margin: "5px",
};
const siderStyle = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#3ba0e9",
};
const footerStyle = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#7dbcea",
};

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([""]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };



  return (
    <>
      <hr></hr>
      <Layout>
        <Sider style={{ backgroundColor: "black" }}>
          <h1> Rick and morty </h1>

          <AddCategory onNewCategory={onAddCategory} />
        </Sider>
        <Layout>
          <Header style={headerStyle} > <img src="https://cdn.shopify.com/s/files/1/1920/1289/collections/RickAndMorty_NATIVE-R1_CollectionBanner.jpg?v=1669078529" style={headerStyle}  alt="Imagen del encabezado" /></Header>

          <Content style={contentStyle} >
            {categories.map((category) => (
              <CharactesGrid />
            ))}
          </Content>
          <Footer style={footerStyle}>Footer</Footer>
        </Layout>
      </Layout>
    </>
  );
};
