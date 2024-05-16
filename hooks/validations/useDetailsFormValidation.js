import { useState } from "react";

const validateDetails = (values) => {
    let errors = {};

    if (!values.title) {
        errors.title = "Title is empty";
    }

    if (!values.description) {
        errors.description = "Description is empty";
    }

    if (!values.score) {
        errors.score = "Score is empty";
    }

    if (!values.subject) {
        errors.subject = "Subject is empty";
    }

    if (!values.thumbnail) {
        errors.thumbnail = "Thumbnail is empty";
    } else if (!/\.(jpg|jpeg|png)$/i.test(values.thumbnail.name)) {
        errors.thumbnail = "Thumbnail must be an image file";
    }

    return { errors };
};

const validateVideo = (values) => {
    let errors = {};

    if (!values.summary) {
        errors.summary = "Summary is empty";
    }
    if (!values.video) {
        errors.video = "Video is empty";
    }
    return { errors };
};

export const useDetailsFormValidation = (initialState, type) => {
    const [values, setValues] = useState(initialState);
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState(false);

    const handleDetailsFormChange = (e) => {
        const { value, name, type, files } = e.target;

        if (type === "radio") {
            setValues((prevState) => {
                return {
                    ...prevState,
                    subject: value,
                };
            });
        } else if (type === "file") {
            setValues((prevState) => {
                return {
                    ...prevState,
                    [name]: files[0],
                };
            });
        } else {
            setValues((prevState) => {
                return { ...prevState, [name]: value };
            });
        }
    };

    const handleDetailsFormSubmit = (e) => {
        e.preventDefault();
        if (type === "video") {
            const { errors } = validateVideo(values);
            if (Object.keys(errors).length === 0) {
                setStatus(true);
            } else {
                setStatus(false);
            }
            setErrors(errors);
        } else {
            const { errors } = validateDetails(values);
            if (Object.keys(errors).length === 0) {
                setStatus(true);
            } else {
                setStatus(false);
            }
            setErrors(errors);
        }
    };

    return {
        values,
        errors,
        status,
        handleDetailsFormChange,
        handleDetailsFormSubmit,
    };
};
