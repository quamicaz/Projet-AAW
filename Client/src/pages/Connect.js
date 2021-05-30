import { useRef, useState } from "react";
import { useContext } from "react";
import { Redirect } from "react-router-dom";


export const DEFAUT_REDIRECTION = "/";

const API_URL = "http://localhost:8080/"

const Connexion= () => {
    const [redirect, setRedirect] = useState("");
    const [errors, setErrors] = useState("");

    const inputEl = useRef(null);
    const passwordEl = useRef(null);

    const fecthConnect = async () => {
        if (inputEl && inputEl.current && passwordEl && passwordEl.current) {
            const params = [
                ["name", inputEl.current.value],
                ["password", passwordEl.current.value],
            ];
            let url = new URL(`${API_URL}connect`);
            url.search = new URLSearchParams(params).toString();
            try {
                const response = await fetch(url.toString());
                if (response.status === 200) {
                    const json = await response.json();
                    console.log(json);
                } else {
                    setErrors("Error in authentification");
                }
            } catch (error) {
                setErrors("Error in authentification");
            }
        }
    }

    if (redirect !== "") {
        return <Redirect to={redirect} />
    }
    return (
        <main>
            <section>
                <p>{errors}</p>
                <div>
                    <label htmlFor="name">Username</label>
                    <input ref={inputEl} type="text" id="name" />
                </div>
                <div>
                    <label htmlFor="pwd">password</label>
                    <input ref={passwordEl} type="password" id="pwd" />
                </div>
                <button onClick={() => fecthConnect()}>Connect</button>
            </section>
        </main>
    )
}

export default Connexion;