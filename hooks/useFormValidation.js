import { useState } from "react";
import { placeholderData } from "@/public/assets/data/placeholderData";
import { insert } from "@/auth-actions/insert";
import { loginUser } from "@/auth-actions/loginUser";

const validateRegisterForm = (values) => {
    let errors = {};

    if (!values.email.trim()) {
        errors.email = "Email is required";
    }

    if (!values.username.trim()) {
        errors.username = "Username is required";
    }

    if (!values.firstName.trim()) {
        errors.firstName = "First Name is required";
    }

    if (!values.lastName.trim()) {
        errors.lastName = "Last Name is required";
    }
    if (!values.password.trim()) {
        errors.password = "Password is required";
    } else if (values.password.length < 6) {
        errors.password = "Password must be at least 6 characters";
    }

    if (!values.confirmPassword.trim()) {
        errors.confirmPassword = "Confirm your password.";
    } else if (values.confirmPassword.length < 6) {
        errors.confirmPassword = "Must be at least 6 characters";
    }

    if (values.password !== values.confirmPassword) {
        errors.confirmPassword = "Password does not match";
    }

    const matchingUser = placeholderData.find(
        (user) => user.username === values.username
    );

    if (
        values.username.trim() &&
        values.password.trim() &&
        values.password.length >= 5 &&
        matchingUser
    ) {
        errors.matchingUser = "Username already exists";
    }

    return { errors };
};

const validateLoginForm = (values) => {
    let errors = {};

    if (!values.email.trim()) {
        errors.email = "Email is required";
    }

    if (!values.password.trim()) {
        errors.password = "Password is required";
    } else if (values.password.length < 5) {
        errors.password = "Password must be at least 5 characters";
    }
    return { errors };
};

export const useFormValidation = (initialState, type) => {
    const [values, setValues] = useState(initialState);
    const [errors, setErrors] = useState({});
    const [submit, setSubmit] = useState(false);

    const handleInsertValues = async () => {
        const result = await insert(values);
        const { error } = JSON.parse(result);

        if (error?.message) {
            setSubmit(false);
            setErrors({ formError: error.message });
        } else {
            setSubmit(true);
        }
    };

    const handleLoginUser = async () => {
        const result = await loginUser(values);
        console.log(result);
        const { error } = JSON.parse(result);

        if (error?.message) {
            setSubmit(false);
            setErrors({ formError: error.message });
        } else {
            setSubmit(true);
        }
    };

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (type === "login") {
            const { errors } = validateLoginForm(values);
            if (Object.keys(errors).length === 0) {
                handleLoginUser();
            } else setSubmit(false);
            setErrors(errors);
        } else {
            const { errors } = validateRegisterForm(values);
            if (Object.keys(errors).length === 0) {
                handleInsertValues();
            } else setSubmit(false);
            setErrors(errors);
        }
    };

    return {
        values,
        errors,
        submit,
        handleFormChange,
        handleFormSubmit,
    };
};
