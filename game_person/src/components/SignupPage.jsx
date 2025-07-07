import { Formik, Form, Field } from 'formik';
import { routes } from '../api/routes.js';
import { useState } from 'react';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const [serverError, setServerError] = useState('');
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    username: Yup.string()
      .min(3, "От 3 до 20 символов")
      .max(20, "От 3 до 20 символов")
      .required("Обязательное поле"),
    password: Yup.string()
      .min(6, "Не менее 6 символов")
      .required("Обязательное поле"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], "Пароли должны совпадать")
      .required("Обязательное поле"),
  })

  const handleSubmit = async (values, { setSubmitting }) => {
    setServerError('');
    try {
      const response = await axios.post(routes.signup(), {
        username: values.username.trim(),
        password: values.password.trim(),
      })
      const { username } = response.data
      console.log(username)
      localStorage.setItem('token', response.data.token || 'dummy_token');
      navigate(routes.homePage(), { replace: true })
    }
    catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setServerError(error.response.data.message);
      }
    }
    finally {
      setSubmitting(false)
    }
  }

    return (
        <div className="w-screen h-screen box-border bg-no-repeat bg-center bg-cover bg-[url('/img/bg/signup.png')] flex items-center justify-center">
            <div className="border-4 border-yellow-300 rounded-lg p-8 w-full max-w-2xl bg-white bg-opacity-95 shadow-lg">
                <div className="flex flex-col md:flex-row items-center gap-6">
                    <img
                        src="/img/bg/ноут.png"
                        alt="девочка за ноутбуком"
                        className="w-80 h-auto object-contain mb-4 md:mb-0"
                    />
                    <div className="flex-1 w-full">
                        <h1 className="text-shadow-lg text-2xl flex items-center justify-center p-4">Регистрация</h1>
                    <Formik
                        initialValues={{ username: '', password: '', confirmPassword: '' }}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                    {({ errors, touched }) => (
                    <Form>
                        <div className="form-group">
                        <label className="sr-only" htmlFor="username">Имя пользователя</label>
                        <Field
                            type="text"
                            name="username"
                            id="username"
                            placeholder="Имя пользователя"
                            autoComplete="username"
                            required
                            className="w-full mt-3 px-3 py-2 border border-gray-300 rounded-md form-control focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        />
                        {errors.username && touched.username && (
                            <div className="text-red-600 text-sm mt-1">{errors.username}</div>
                        )}
                        </div>
                        <div className="form-group">
                            <label className="sr-only" htmlFor="password">Пароль</label>
                            <Field
                                id="password"
                                type="password"
                                name="password"
                                placeholder="Пароль"
                                autoComplete="current-password"
                                required
                                className="w-full mt-3 px-3 py-2 border border-gray-300 rounded-md form-control focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            />
                            {errors.password && touched.password && (
                                <div className="text-red-600 text-sm mt-1">{errors.password}</div>
                            )}
                        </div>
                        <div className="form-group">
                            <label className="sr-only" htmlFor="confirmPassword">Повторите пароль</label>
                            <Field
                                id="confirmPassword"
                                type="confirmPassword"
                                name="confirmPassword"
                                placeholder="Повторите пароль"
                                autoComplete="current-password"
                                required
                                className="w-full mt-3 px-3 py-2 border border-gray-300 form-control rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            />
                            {errors.confirmPassword && touched.confirmPassword && (
                                <div className="text-red-600 text-sm mt-1">{errors.confirmPassword}</div>
                            )}
                        </div>
                        {serverError && (
                            <div className="text-red-600 text-center mt-3">
                            {serverError}
                            </div>
                        )}
                        <div className="flex justify-end mt-3">
                            <button
                                type="submit"
                                className="px-5 py-2 btn btn-outline-primary border border-gray-300 rounded-md text-shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 hover:bg-yellow-200"
                            >
                                Продолжить
                            </button>
                        </div>
                        </Form>
                        )}
                    </Formik>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SignupPage;