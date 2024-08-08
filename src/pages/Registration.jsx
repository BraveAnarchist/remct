import { Formik } from "formik";
import * as Yup from "yup";

export default function Registration() {
  return (
    <div className="container flex w-[100%] md:w-[95%] lg:w-[90%] xl:w-[80%] 2xl:w-[60%] mx-auto duration-500">
      <div className="bg-[#ffffff] w-[50%] grow rounded-l-xl pt-[60px] px-[30px] pb-[20px] duration-500">
        <h1 className="text-[#55311c] text-2xl">Welcome!</h1>
        <Formik
          initialValues={{ name: "", email: "", password: "", cpass: "" }}
          validationSchema={Yup.object({
            name: Yup.string()

              .max(15, "Must be 15 characters or less")
              .min(2, "Must be 2 characters or more")

              .required("Required"),

            email: Yup.string()
              .matches(
                /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                "Invalid email address"
              )
              .required("Required"),

            password: Yup.string()
              .matches(/^rishiME@199/, 'Password must start with "rishiME@199"')
              .required("Password is required"),
            cpass: Yup.string()
              .oneOf([Yup.ref("password"), null], "Passwords must match")
              .required("Confirm password is required"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert("Success :" + JSON.stringify(values, null, 2));
              // resetForm();
              setSubmitting(false);
            }, 400);
          }}
        >
          {(formik) => (
            <form onSubmit={formik.handleSubmit}>
              <div className="box">
                <label
                  htmlFor="name"
                  className="text-[#9d7569] text-xs font-semibold"
                >
                  NAME
                </label>
                <br />

                <input
                  id="name"
                  type="text"
                  placeholder="Name"
                  className="text-sm outline-none w-[100%]"
                  {...formik.getFieldProps("name")}
                />

                {formik.touched.name && formik.errors.name ? (
                  <div className="text-sm text-[#B22B27]">
                    {formik.errors.name}
                  </div>
                ) : null}
              </div>
              <div className="box">
                <label
                  htmlFor="email"
                  className="text-[#9d7569] text-xs font-semibold"
                >
                  EMAIL
                </label>
                <br></br>

                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  {...formik.getFieldProps("email")}
                  className="text-sm outline-none w-[100%]"
                />

                {formik.touched.email && formik.errors.email ? (
                  <div className="text-sm text-[#B22B27]">
                    {formik.errors.email}
                  </div>
                ) : null}
              </div>
              <div className="box">
                <label
                  htmlFor="password"
                  className="text-[#9d7569] text-xs font-semibold"
                >
                  PASSWORD
                </label>
                <br></br>

                <input
                  id="password"
                  type="password"
                  placeholder="Password"
                  {...formik.getFieldProps("password")}
                  className="text-sm outline-none w-[100%]"
                />

                {formik.touched.password && formik.errors.password ? (
                  <div className="text-sm text-[#B22B27]">
                    {formik.errors.password}
                  </div>
                ) : null}
              </div>
              <div className="box">
                <label
                  htmlFor="cpass"
                  className="text-[#9d7569] text-xs font-semibold w-[100%]"
                >
                  CONFIRM PASSWORD
                </label>
                <br></br>

                <input
                  id="cpass"
                  type="password"
                  placeholder="Confirm Password"
                  className="text-sm outline-none w-[100%]"
                  {...formik.getFieldProps("cpass")}
                />

                {formik.touched.cpass && formik.errors.cpass ? (
                  <div className="text-sm text-[#B22B27]">
                    {formik.errors.cpass}
                  </div>
                ) : null}
              </div>
              <div className="flex justify-between items-center">
                <button
                  type="submit"
                  className="button mx-auto text-sm"
                  disabled={
                    !(
                      formik.touched.cpass &&
                      !formik.errors.cpass &&
                      formik.touched.password &&
                      !formik.errors.password &&
                      formik.touched.email &&
                      !formik.errors.email &&
                      formik.touched.name &&
                      !formik.errors.name
                    )
                  }
                >
                  Submit
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
      <div className="laptop w-[50%] rounded-r-xl overflow-hidden">
        <img
          src="https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="h-[100%] w-[100%] rounded-r-xl object-cover"
        />
      </div>
    </div>
  );
}
