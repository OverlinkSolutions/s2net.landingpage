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
    <Button onSubmit={() => sendEmail(form)} type="primary" htmlType="submit" disabled={!submittable}>
      {children}
    </Button>
  );
};


const sendEmail = async (form:FormInstance<any>) => {
}
// const sendEmail = async (form:FormInstance<any>) => {
//   const transporter = nodemailer.createTransport({
//     host: process.env.REACT_APP_EMAIL_HOST,
//     port: 465,
//     secure: true,
//     auth: {
//       user: process.env.REACT_APP_EMAIL_USER,
//       pass: process.env.REACT_APP_EMAIL_PASS,
//     },
//   });

//   const options = {
//     from: form.getFieldValue("email"),
//     to: process.env.REACT_APP_EMAIL_TO,
//     subject: form.getFieldValue("subject"),
//     html: `
//     <h1>Contato</h1>
//     <p><strong>Nome:</strong> ${form.getFieldValue("name")}</p>
//     <p><strong>Email:</strong> ${form.getFieldValue("email")}</p>
//     <p><strong>Telefone:</strong> ${form.getFieldValue("phone")}</p>
//     <p><strong>Assunto:</strong> ${form.getFieldValue("subject")}</p>
//     <p><strong>Setor:</strong> ${form.getFieldValue("sector")}</p>
//     <p><strong>Mensagem:</strong> ${form.getFieldValue("message")}</p>
//     `,
//   };
  
//   await transporter.sendMail(options);
// }

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