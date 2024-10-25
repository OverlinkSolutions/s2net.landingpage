import React from 'react';
import { Button, Form, Input, Select, Space } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { useMediaQuery } from 'react-responsive';


const SubmitButton = ({ form, children }:any) => {
  const [submittable, setSubmittable] = React.useState(false);
  // Watch all values
  const values = Form.useWatch([], form);
  React.useEffect(() => {
    form
      .validateFields({
        validateOnly: true,
      })
      .then(() => setSubmittable(true))
      .catch(() => setSubmittable(false));
  }, [form, values]);
  return (
    <Button type="primary" htmlType="submit" disabled={!submittable}>
      {children}
    </Button>
  );
};


export default function ContactForm() {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const isTablet = useMediaQuery({ query: '(max-width: 992px)' });
  const [form] = Form.useForm();
  return (
    <Form  
    form={form}
    labelCol={{ span: 200 }}
    wrapperCol={{ span: 500 }}
    layout="vertical"
    style={{ width: isMobile ? 300 : isTablet ? 600 : 900 }}>
      <Form.Item
        name="name"
        label="Name"
        rules={[
          {
            required: true,
            message: "Por favor, insira seu nome"
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="email"
        label="E-Mail"
        rules={[
          {
            required: true,
            message: "Por favor, insira seu email"
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="phone"
        label="Telefone"
        rules={[
          {
            required: true,
            message: "Por favor, insira seu telefone"
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="subject"
        label="Assunto"
        rules={[
          {
            required: true,
            message: "Por favor, insira o assunto"
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="sector"
        label="Setor"
        rules={[
          {
            required: true,
            message: "Por favor, escolha o assunto"
          },
        ]}
      >
        <Select>
            <Select.Option value="sales">Quero Contratar</Select.Option>
            <Select.Option value="support">Suporte</Select.Option>
            <Select.Option value="finance">Financeiro</Select.Option>
          </Select>
      </Form.Item>
      <Form.Item label="Mensagem">
          <TextArea rows={10} />
        </Form.Item>
      <Form.Item>
        <Space>
          <SubmitButton form={form}>Enviar</SubmitButton>
        </Space>
      </Form.Item>
    </Form>
  );
};