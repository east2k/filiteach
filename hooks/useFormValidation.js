import { useState } from "react";
import { placeholderData } from "@/public/assets/data/placeholderData";

const validateRegisterForm = (values) => {
    let errors = {};

    if (!values.username.trim()) {
        errors.username = "Username is required";
    }

    if (!values.password.trim()) {
        errors.password = "Password is required";
    } else if (values.password.length < 5) {
        errors.password = "Password must be at least 5 characters";
    }

    if (!values.confirmPassword.trim()) {
        errors.confirmPassword = "Confirm your password.";
    } else if (values.confirmPassword.length < 5) {
        errors.confirmPassword = "Must be at least 5 characters";
    }

    if (values.password !== values.confirmPassword) {
        console.log("huh?");
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

    return errors;
};

const validateLoginForm = (values) => {
    let errors = {};

    if (!values.username.trim()) {
        errors.username = "Username is required";
    }

    if (!values.password.trim()) {
        errors.password = "Password is required";
    } else if (values.password.length < 5) {
        errors.password = "Password must be at least 5 characters";
    }

    const matchingUser = placeholderData.find(
        (user) =>
            user.username === values.username &&
            user.password === values.password
    );

    if (
        values.username.trim() &&
        values.password.trim() &&
        values.password.length >= 5 &&
        !matchingUser
    ) {
        errors.matchingUser = "User does not exist";
    }

    return errors;
};

export const useFormValidation = (initialState, type) => {
    const [values, setValues] = useState(initialState);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setSubmitting] = useState(false);

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (type === "login") setErrors(validateLoginForm(values));
        else setErrors(validateRegisterForm(values));
        // setSubmitting(true);
    };

    return { values, errors, isSubmitting, handleFormChange, handleFormSubmit };
};
