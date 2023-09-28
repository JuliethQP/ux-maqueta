import React from 'react';
import {
    Button, Form, Input, Select, ConfigProvider,
    Switch, Col, Row
} from 'antd';
import './index.css';

const onFinish = (values) => {
    console.log('Success:', values);
};

const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};



const Crear = () => {
    return <ConfigProvider
        theme={{
            components: {
                Tabs: {
                    colorFill: '#CDA8F0',
                    colorFillQuaternary: '#CDA8F0',
                    colorFillSecondary: '#CDA8F0',
                    colorFillTertiary: '#CDA8F0',
                    colorBorderSecondary: '#CDA8F0'
                },
                Switch: {
                    colorPrimaryHover: '#b285e3',
                    colorPrimary: '#b285e3'
                },
                Input: {
                    colorPrimaryHover: '#b285e3',
                    colorPrimary: '#b285e3',
                    colorBorder: '#b285e3',
                    controlOutline: '#ebd7fa',
                    width: '214px',
                    height: '141px'
                },
                Select: {
                    colorPrimaryHover: '#b285e3',
                    colorPrimary: '#b285e3',
                    colorBorder: '#b285e3',
                    controlOutline: '#ebd7fa',
                    fontSize: '20px',
                    width: '214px',
                    height: '141px'
                }, Button: {
                    colorPrimaryHover: '#cda8f0',
                    colorPrimary: '#ab7ae0',
                    colorPrimaryActive: '#6a17ab',
                    controlOutlineWidth: 0,
                    fontSize: '20px',
                    width: '192px',
                    height: '48px'
                }
            },
        }}
    >
        <Row className='container-crear'>
            <Col span={14} className='container-image-crear'>
                <Form className='formulario'
                    labelCol={{ span: 12 }}
                    wrapperCol={{ span: 6 }}
                    style={{ maxWidth: 1020 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >

                    <Form.Item className='label-form' label="Franja horaria" valuePropName="checked">
                        <span style={{ fontSize: '20px', color: "black", paddingTop: '10px' }}>A.M</span>
                        <Switch style={{ paddingTop: '10px !important' }} />
                        <span style={{ fontSize: '20px', color: "black" }}>P.M</span>

                    </Form.Item>
                    <Form.Item name="note" label="Hora" >
                        <Input className='input-hora' />
                    </Form.Item>

                    <Form.Item label="Tipo de notificación">
                        <Select className='input-hora'>
                            <Select.Option className='input-hora' value="correo">Correo electrónico</Select.Option>
                            <Select.Option className='input-hora' value="celular">Celular</Select.Option>
                        </Select>
                    </Form.Item>

                    <Form.Item label="Frecuencia en minutos">
                        <Select className='input-hora'>
                            <Select.Option value="5">5</Select.Option>
                            <Select.Option value="10">10</Select.Option>
                            <Select.Option value="20">20</Select.Option>
                            <Select.Option value="25">25</Select.Option>
                        </Select>
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 20,  }}>
                        <Button className='btn-crear' type="primary" >
                            Crear
                        </Button>
                    </Form.Item>
                </Form>

            </Col>
            <Col span={10} className='container-image-crear'>
                <div className='image-crear'>
                    <img className='img-crear'
                        src="./assets/9137360.png"
                    />
                </div>
            </Col>
        </Row>
    </ConfigProvider>
}
export default Crear;