import { useState } from "react";

export const useSectionHandler = () => {
    const [showOptions, setShowOptions] = useState(false);
    const [activeSection, setActiveSection] = useState();
    const [currentSections, setCurrentSections] = useState([
        // {
        //     thumbnail: "/assets/images/placeholder-course-parts/part-1.svg",
        // },
    ]);

    const handleShowOptions = () => {
        setShowOptions(!showOptions);
    };

    const handleActiveSection = (section) => {
        setActiveSection(section);
    };

    const handleSubmitVideoForm = (values) => {
        setCurrentSections((prevState) => [
            ...prevState,
            {
                type: "video",
                video: values.video,
                thumbnail: values.thumbnail,
                summary: values.summary,
            },
        ]);
        setShowOptions(false);
        setActiveSection();
    };

    const handleSubmitQuizForm = (quizList) => {
        setCurrentSections((prevState) => [
            ...prevState,
            {
                type: "quiz",
                items: quizList,
                thumbnail: "/assets/images/quiz-thumbnail.jpg",
            },
        ]);
        setShowOptions(false);
        setActiveSection();
    };

    return {
        showOptions,
        activeSection,
        currentSections,
        handleShowOptions,
        handleActiveSection,
        handleSubmitVideoForm,
        handleSubmitQuizForm,
    };
};
