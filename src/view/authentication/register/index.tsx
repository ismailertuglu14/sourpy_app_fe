import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";
import { LoginRequest } from "../login/models/login_request";
import { validationSchema } from "./models/validation_schema";

interface FormValues {
  sourpy_name: string;
  sourpy_lastname: string;
  sourpy_username: string;
  sourpy_password: string;
  sourpy_password_again: string;
  sourpy_email: string;
}
const initialValues: FormValues = {
  sourpy_name: "",
  sourpy_lastname: "",
  sourpy_username: "",
  sourpy_password: "",
  sourpy_password_again: "",
  sourpy_email: "",
};

const Register: React.FC = () => {
  /// [pwdSecure] is using for password show/hide button
  const [pwdSecure, setPwdSecure] = useState(true);

  const navigate = useNavigate();

  /// Send request if [Formik] doesn't have an error
  const handleLogin = (formValues: FormValues) => {
    validationSchema.isValid(formValues).then(function (isValid) {
      if (isValid) {
        const user = new LoginRequest(
          formValues.sourpy_username,
          formValues.sourpy_password
        );
        // TODO: Login function here.
        // login(user)
        console.log("Request has been sent");
      } else {
        console.log("Some error occured");
      }
    });
  };

  return (
    <div className="flex flex-row w-full h-screen ">
      {/* Left Image Side */}
      <div className="w-[100%] h-screen bg-green-400 flex">
        <img
          src="/assets/images/login-banner.jpg"
          alt="Sourpy Login"
          className="object object-cover opacity-80"
        />
      </div>

      {/*  Right Form Side*/}
      <div className="flex flex-col justify-center items-center  w-full h-screen  ">
        <Formik
          initialValues={initialValues}
          onSubmit={(values, actions) => {
            console.log({ values, actions });
            // actions.setSubmitting(false);
          }}
          validationSchema={validationSchema}
        >
          {(formik) => {
            const { errors, touched, values } = formik;
            return (
              <Form className="flex flex-col justify-center items-center  w-full h-screen ">
                <p className="py-4 text-green-600 text-3xl italic cursor-default">
                  Welcome to Sourpy
                </p>
                <div className="flex flex-row w-1/2 justify-between">
                  {/* Name input start */}
                  <div className="flex flex-col">
                    <Field
                      id="sourpy_name"
                      name="sourpy_name"
                      placeholder="Name"
                      className="w-60 h-14 shadow appearance-none border rounded py-2 px-3  text-black leading-tight focus:outline-none focus:shadow-outline my-6"
                      errors={errors} //Formik errors object
                      touched={touched} //Formik touched props
                      autoFocus={false}
                    />
                    <p className="my-0 py-0">
                      {errors.sourpy_name && touched.sourpy_name ? (
                        <div>{errors.sourpy_name}</div>
                      ) : null}
                    </p>
                  </div>
                  {/* Name input end */}

                  {/* Lastname input start */}
                  <div className="flex flex-col">
                    <Field
                      id="sourpy_lastname"
                      name="sourpy_lastname"
                      placeholder="Lastname"
                      className="w-60 h-14 shadow appearance-none border rounded py-2 px-3  text-black leading-tight focus:outline-none focus:shadow-outline my-6"
                      errors={errors} //Formik errors object
                      touched={touched} //Formik touched props
                      autoFocus={false}
                    />
                    <p className="my-0 py-0">
                      {errors.sourpy_lastname && touched.sourpy_lastname ? (
                        <div>{errors.sourpy_lastname}</div>
                      ) : null}
                    </p>
                  </div>
                  {/* Lastname input end */}
                </div>
                {/* Username input start*/}
                <Field
                  id="sourpy_username"
                  name="sourpy_username"
                  placeholder="Username"
                  className="w-1/2 h-14 shadow appearance-none border rounded py-2 px-3  text-black leading-tight focus:outline-none focus:shadow-outline my-6"
                  errors={errors} //Formik errors object
                  touched={touched} //Formik touched props
                  autoFocus={false}
                />
                {/* Username input end*/}

                {/* Username errors start*/}

                <p className="my-0 py-0">
                  {errors.sourpy_username && touched.sourpy_username ? (
                    <div>{errors.sourpy_username}</div>
                  ) : null}
                </p>
                {/* Username errors end*/}

                {/* Email input start*/}
                <Field
                  id="sourpy_email"
                  name="sourpy_email"
                  placeholder="Email"
                  className="w-1/2 h-14 shadow appearance-none border rounded py-2 px-3  text-black leading-tight focus:outline-none focus:shadow-outline my-6"
                  errors={errors} //Formik errors object
                  touched={touched} //Formik touched props
                  autoFocus={false}
                />
                {/* Email input end*/}

                {/* Email errors start*/}

                <p className="my-0 py-0">
                  {errors.sourpy_email && touched.sourpy_email ? (
                    <div>{errors.sourpy_email}</div>
                  ) : null}
                </p>

                {/* Email errors end*/}

                {/* Password label start*/}
                <div className="relative w-1/2">
                  {/* Password trailing start */}
                  <div className="absolute inset-y-0 right-0  flex items-center px-2">
                    <label
                      className="bg-gray-300 hover:bg-gray-400 rounded px-2 py-1 text-sm text-gray-600 font-mono cursor-pointer"
                      onClick={() => setPwdSecure(!pwdSecure)}
                    >
                      {pwdSecure === true ? "Show" : "Hide"}
                    </label>
                  </div>
                  {/* Password trailing end */}

                  {/* Password input start */}
                  <Field
                    id="sourpy_password"
                    name="sourpy_password"
                    placeholder="Password"
                    type={pwdSecure === true ? "password" : "text"}
                    className="w-full h-14 shadow appearance-none border rounded py-2 px-3  text-black leading-tight focus:outline-none focus:shadow-outline my-6"
                    errors={errors} //Formik errors object
                    touched={touched} //Formik touched props
                    autoFocus={false}
                  />
                  {/* Password input end*/}
                </div>
                {/* Password errors start*/}
                <p>
                  {errors.sourpy_password && touched.sourpy_password ? (
                    <div>{errors.sourpy_password}</div>
                  ) : null}
                </p>
                {/* Password errors end*/}

                {/* Password Again label start*/}
                <div className="relative w-1/2">
                  {/* Password trailing start */}
                  <div className="absolute inset-y-0 right-0  flex items-center px-2">
                    <label
                      className="bg-gray-300 hover:bg-gray-400 rounded px-2 py-1 text-sm text-gray-600 font-mono cursor-pointer"
                      onClick={() => setPwdSecure(!pwdSecure)}
                    >
                      {pwdSecure === true ? "Show" : "Hide"}
                    </label>
                  </div>
                  {/* Password trailing end */}

                  {/* Password input start */}
                  <Field
                    id="sourpy_password_again"
                    name="sourpy_password_again"
                    placeholder="Password Again"
                    type={pwdSecure === true ? "password" : "text"}
                    className="w-full h-14 shadow appearance-none border rounded py-2 px-3  text-black leading-tight focus:outline-none focus:shadow-outline my-6"
                    errors={errors} //Formik errors object
                    touched={touched} //Formik touched props
                    autoFocus={false}
                  />
                  {/* Password input end*/}
                </div>
                {/* Password errors start*/}
                <p>
                  {errors.sourpy_password_again &&
                  touched.sourpy_password_again ? (
                    <div>{errors.sourpy_password_again}</div>
                  ) : null}
                </p>
                {/* Password errors end*/}

                {/* Password Again label end*/}

                {/* Register Button start*/}
                <button
                  className="text-white w-1/2 h-12 bg-green-700 hover:bg-green-800 focus:ring-green-300 font-medium text-xl rounded-lg  px-20 py-1  mb-2 my-4 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 "
                  onClick={() => handleLogin(values)}
                >
                  Register
                </button>
                {/* Register Button end*/}
                <p className="cursor-default lg:text-lg text-xs">
                  Already have an account?
                  <span
                    className="font-bold cursor-pointer hover:underline"
                    onClick={() => navigate("/login")}
                  >
                    {" "}
                    Login!
                  </span>
                </p>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default Register;
