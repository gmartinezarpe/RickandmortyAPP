import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
import { Card, Menu } from 'antd';
import { SettingOutlined, EditOutlined, EllipsisOutlined } from '@ant-design/icons';
import { Layout, Space } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

const headerStyle = {
    textAlign: 'center',
    color: 'black',
    height: 64,
    paddingInline: 50,
    lineHeight: '64px',
    backgroundColor: '#00FF00',
    margin: '1px',
};
const contentStyle = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#00FF00',
    margin:'5px'
};
const siderStyle = {
    textAlign: 'center',
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#3ba0e9',
};
const footerStyle = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#7dbcea',
};






export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['']);


    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories])
    }



    return (
        <>






            <hr></hr>





            <Layout>
                <Sider style={{ backgroundColor: 'black' }}>
                    <h1> Rick and morty </h1>

                    <AddCategory onNewCategory={onAddCategory} />
                </Sider>
                <Layout>
                    <Header style={headerStyle}>Rick and morty</Header>
                    <Content style={contentStyle}>



                        {
                            categories.map((category) => (
                                <Card 
                                    key={category}
                                    category={category}

                                    style={{ width: 250 , margin:'3px'}}
                                    cover={
                                        <img
                                            alt="example"
                                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                        />
                                    }






                                />
                            ))}



                    </Content>
                    <Footer style={footerStyle}>Footer</Footer>
                </Layout>




            </Layout>







        </>
    )
}

