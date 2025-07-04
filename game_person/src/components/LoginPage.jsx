import { Formik, Form, Field } from 'formik';

const LoginPage = () => {
    return (
        <div className="w-screen h-screen box-border p-4 bg-no-repeat bg-center bg-cover bg-[url('/img/bg/девочкиФон.png')] flex items-center justify-center">
            <div className="border-4 border-yellow-300 rounded-lg p-8 w-full max-w-md bg-white bg-opacity-95 shadow-lg">
                <h1 className="text-shadow-lg text-2xl flex items-center justify-center p-4">У тебя уже есть аккаунт?</h1>
                <Formik
                    initialValues={{ email: "", password: "" }}
                    onSubmit={({ setSubmitting }) => {
                        console.log("Form is validated! Submitting the form...");
                        setSubmitting(false);
                    }}
                >
                {() => (
                    <Form>
                        <div className="form-group">
                            <label className="text-shadow-lg" htmlFor="email">Email</label>
                            <Field
                                type="email"
                                name="email"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            />
                        </div>
                        <div className="form-group">
                            <label className="text-shadow-lg" htmlFor="password">Password</label>
                            <Field
                                type="password"
                                name="password"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            />
                        </div>
                    </Form>
                )}
                </Formik>
            </div>
        </div>
    )
}

export default LoginPage;