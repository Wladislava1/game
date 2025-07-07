import { Formik, Form, Field } from 'formik';
import { useState } from 'react';
import { routes } from '../api/routes.js'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [serverError, setServerError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (values, { setSubmitting }) => {
    setServerError('');
    try {
      const response = await axios.post(routes.login(), {
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
        <div className="w-screen h-screen box-border bg-no-repeat bg-center bg-cover bg-[url('/img/bg/девочкиФон.png')] flex items-center justify-center">
            <div className="border-4 border-yellow-300 rounded-lg p-8 w-full max-w-md bg-white bg-opacity-95 shadow-lg">
                <h1 className="text-shadow-lg text-2xl flex items-center justify-center p-4">У тебя уже есть аккаунт?</h1>
                <Formik
                    initialValues={{ username: "", password: "" }}
                    onSubmit={handleSubmit}
                >
                {() => (
                    <Form>
                        <div className="form-group">
                            <label htmlFor="username" className="sr-only">Имя пользователя</label>
                            <Field
                                type="text"
                                name="username"
                                id="username"
                                placeholder="Имя пользователя"
                                autoComplete="username"
                                required
                                className="w-full mt-3 px-3 py-2 border border-gray-300 rounded-md form-control focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password" className="sr-only">Пароль</label>
                            <Field
                                id="password"
                                type="password"
                                name="password"
                                placeholder="Пароль"
                                autoComplete="current-password"
                                required
                                className={`w-full mt-3 px-3 py-2 border border-gray-300 rounded-md form-control focus:outline-none focus:ring-2 focus:ring-yellow-400`}
                            />
                        </div>
                        {serverError && (
                            <div className="text-red-600 text-center mt-3">
                            {serverError}
                            </div>
                        )}
                        <div className="flex justify-end mt-3 gap-2">
                            <Link
                                to="/signup"
                                className="flex items-center underline decoration-1 px-3"
                            >
                                Нет аккаунта? Зарегистрироваться
                            </Link>
                            <button
                                type="submit"
                                className="px-5 py-2 btn btn-outline-primary text-shadow-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 hover:bg-yellow-200"
                            >
                                Войти
                            </button>
                        </div>
                    </Form>
                )}
                </Formik>
            </div>
        </div>
    )
}

export default LoginPage;