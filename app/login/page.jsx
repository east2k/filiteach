import readUserSession from "@/auth-actions/readUserSession";
import LoginPage from "@/components/CredentialComponents/LoginPage";
import { redirect } from "next/navigation";
import React from "react";

const Login = async () => {
    const { data } = await readUserSession();
    if (data.session) {
        return redirect("/learning");
    }

    return (
        <>
            <LoginPage />
        </>
    );
};

export default Login;
