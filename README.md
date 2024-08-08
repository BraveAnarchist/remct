
# Formik & Yup Validation Form

This project demonstrates a basic form built with React, leveraging Formik and Yup for efficient form management and robust validation.


## Project Overview

This project showcases how to build a form with the following features:

- **Name Field:**
    - Requires 2-15 characters.
    - Displays error messages if the input is invalid.
- **Email Field:**
    - Requires a valid email format.
    - Displays error messages if the input is invalid.
- **Password Field:**
    - Requires password starting with "rishiME@199".
    - Displays error messages if the input is incorrect.
- **Confirm Password Field:**
    - Ensures the password and confirm password fields match.
    - Displays error messages if the passwords don't match.
- **Submit Button:**
    - Initially disabled.
    - Enabled only when all input fields are valid.
**Technologies Used**

- **React:** JavaScript library for building user interfaces.
- **Formik:** Form library simplifying form handling, validation, and submission.
- **Yup:** Schema validation library seamlessly integrated with Formik to define and enforce validation rules.


**Getting Started**

1. **Clone the repository:**
   ```bash
   git clone <https://github.com/BraveAnarchist/remct.git>

2. **Install dependencies:**
    ```bash
    npm install formik --save
    npm install yup --save

3. **Run the project:**
    ```bash
    npm start
## Instructions

-  Navigate to the form in your browser.
-  Input your email and password in the respective fields.
-  Ensure the password matches the "rishiME@199" requirement.
-  Confirm the password by typing it into the "Confirm Password"field.
- The submit button will be enabled once all fields are validated successfully.

## Learning Objectives

This project serves as a learning resource for understanding:
- Formik's role in streamlining form management.
- Utilizing Yup to define and validate user inputs.
- Implementing real-time validation and error handling.
- Controlling the state and enabling/disabling UI elements based on validation results.