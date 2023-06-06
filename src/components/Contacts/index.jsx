import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import emailjs from 'emailjs-com'
import { LanguageContext } from '@/contexts/languageContext'
import { useContext } from 'react'
import { contacts } from '../Home/data'
import Link from 'next/link'

const Contacts = () => {
    const { language } = useContext(LanguageContext)

    const initialValues = {
        name: '',
        email: '',
        message: '',
    }

    const validationSchema = Yup.object({
        name: Yup.string().required(`
            ${
                language === 'pt'
                    ? 'O campo nome é obrigatório'
                    : 'The name field is required'
            }
        `),
        email: Yup.string().email(
            `
                ${
                    language === 'pt'
                        ? 'O campo email é inválido'
                        : 'The email field is invalid'
                }
            `
        ).required(`
                ${
                    language === 'pt'
                        ? 'O campo email é obrigatório'
                        : 'The email field is required'
                }
            `),
        message: Yup.string().required(`
                ${
                    language === 'pt'
                        ? 'O campo mensagem é obrigatório'
                        : 'The message field is required'
                }
        `),
    })

    // Função para enviar o e-mail com o serviço do EmailJS
    const sendEmail = (values, { resetForm }) => {
        emailjs
            .send(
                'service_k21iesm',
                'template_yg7habx',
                {
                    from_name: values.name,
                    from_email: values.email,
                    message: values.message,
                },
                'HGj7UBc6tZzJNEO9g'
            )
            .then(
                () => {
                    console.log('E-mail enviado com sucesso!')
                    resetForm()
                },
                () => {
                    console.log('Erro ao enviar o e-mail!')
                }
            )
    }

    const onSubmit = (values, { setSubmitting, resetForm }) => {
        sendEmail(values, { resetForm })
        setTimeout(() => {
            setSubmitting(false)
        }, 4000)
    }

    return (
        <section
            className={`
        py-16 `}
        >
            <div
                className="mx-auto"
                style={{
                    width: 'min(800px, 95vw)',
                }}
            >
                <h1
                    className={`   
                text-3xl font-bold mb-6 text-primary`}
                >
                    {language === 'pt' ? 'Contate-me' : 'Contact me'}
                    <div className="flex justify-between mx-auto items-center w-[85%]">
                        {contacts
                            .filter(
                                (item) =>
                                    item.id === 1 ||
                                    item.id === 4 ||
                                    item.id === 5
                            )

                            .map((item, index) => (
                                <Link
                                    key={index}
                                    href={item.url}
                                    target="_blank"
                                    className="flex flex-col items-center gap-2 justify-center pt-6"
                                >
                                    <item.icon className=" mr-2 text-decoration " />
                                    <span className="text-xs">{item.name}</span>
                                </Link>
                            ))}
                    </div>
                </h1>
                <div></div>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form className="px-1 sm:px-0 flex flex-col">
                            <div className="sm:flex sm:justify-between sm:gap-4">
                                <div className="mb-6 w-full">
                                    <label
                                        htmlFor="name"
                                        className="block text-gray-700 font-bold mb-2"
                                    >
                                        {language === 'pt' ? 'Nome' : 'Name'}
                                    </label>
                                    <Field
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder={
                                            language === 'pt'
                                                ? 'Digite seu nome'
                                                : 'Enter your name'
                                        }
                                        className="w-full rounded-md py-2 px-3 bg-input border-gray-400"
                                    />
                                    <ErrorMessage
                                        name="name"
                                        className="text-red-500 mt-2"
                                        component="div"
                                    />
                                </div>
                                <div className="mb-6 w-full">
                                    <label
                                        htmlFor="email"
                                        className="block text-gray-700 font-bold mb-2"
                                    >
                                        Email
                                    </label>
                                    <Field
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder={
                                            language === 'pt'
                                                ? 'Digite seu e-mail'
                                                : 'Enter your e-mail'
                                        }
                                        className="w-full rounded-md border-gray-400 py-2 px-3 bg-input"
                                    />
                                    <ErrorMessage
                                        name="email"
                                        className="text-red-500 mt-2"
                                        component="div"
                                    />
                                </div>
                            </div>

                            <div className="mb-6">
                                <label
                                    htmlFor="message"
                                    className="block text-gray-700 font-bold mb-2"
                                >
                                    {language === 'pt' ? 'Mensagem' : 'Message'}
                                </label>
                                <Field
                                    as="textarea"
                                    id="message"
                                    name="message"
                                    placeholder={
                                        language === 'pt'
                                            ? 'Digite sua mensagem'
                                            : 'Enter your message'
                                    }
                                    rows="5"
                                    className="w-full rounded-md border-gray-400 py-2 px-3 bg-input"
                                />
                                <ErrorMessage
                                    name="message"
                                    className="text-red-500 mt-2"
                                    component="div"
                                />
                            </div>
                            <div className="flex justify-center">
                                <button
                                    type="submit"
                                    className="bg-blue-500 text-white px-4 py-2 rounded-lg disabled:bg-gray-400 disabled:cursor-not-allowed"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting
                                        ? language === 'pt'
                                            ? 'Enviando...'
                                            : 'Sending...'
                                        : language === 'pt'
                                        ? 'Enviar'
                                        : 'Send'}
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </section>
    )
}

export default Contacts
