import React from 'react';
import { Button, Form, FormInstance, Input, Select, Space } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { useMediaQuery } from 'react-responsive';
// import nodemailer from 'nodemailer';


const SubmitButton = ({ form, children }:{form:FormInstance<any>, children:any}) => {
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
    <Button onClick={() => sendWhatsappMessage(form)} type="primary" htmlType="submit" disabled={!submittable}>
      {children}
    </Button>
  );
};


const sendWhatsappMessage = async (form:FormInstance<any>) => {
  const s2Number = "557908000004181";
  form.validateFields().then(async (values) => {
    const { name, email, phone, subject, sector, message } = values;

    let setor;
    if (sector === "sales") setor = "Vendas";
    else if (sector === "support") setor = "Suporte";
    else if (sector === "finance") setor = "Financeiro";

    const msg = `Nome: ${name}\nE-Mail: ${email}\nTelefone: ${phone}\nAssunto: ${subject}\nSetor: ${setor}\nMensagem: ${message}`;
    const whatsappLink = `https://wa.me/${s2Number}?text=${encodeURIComponent(msg)}`;
    window.open(whatsappLink);
  }).finally(() => {
    form.resetFields();
  })
}


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
        label="Nome"
        rules={[
          {
            required: true,
            pattern: /^[a-zA-Z\s]*$/,
            message: "Insira seu nome"
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
            type: 'email',
            message: "Insira um email válido"
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
            pattern: /^\(?[1-9]{2}\)?9[1-9][0-9]{3}-?[0-9]{4}$/,
            message: "Insira seu telefone, sem espaços"
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
            min: 5,
            message: "O assunto precisa conter pelo menos 5 caracteres"
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
            message: "Escolha com qual setor quer falar"
          },
        ]}
      >
        <Select>
            <Select.Option value="sales">Quero Contratar</Select.Option>
            <Select.Option value="support">Suporte</Select.Option>
            <Select.Option value="finance">Financeiro</Select.Option>
          </Select>
      </Form.Item>
      <Form.Item name="message" label="Mensagem">
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