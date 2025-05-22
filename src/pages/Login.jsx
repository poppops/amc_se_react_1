import React, { use, useEffect, useState } from "react";
import DefaultPage from "../components/templates/DefaultPage";

function Login() {
    const [user, setUser] = useState({
        username: '',
        password: '',
    });

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        for (const required of ['username', 'password']) {
            if (user?.[required] === '') {
                alert(`The field ${required} is required`);
                return;
            }
        }

        setIsLoggedIn(true);
        alert(`Welcome back, ${user.username}`);
    }

    useEffect(() => {
        const alreadyLoggedIn = localStorage.getItem('isLoggedIn');
        console.log("Already logged in: ", alreadyLoggedIn);
        const username = localStorage.getItem("username");
        console.log("Username: ", username);

        setIsLoggedIn(alreadyLoggedIn);
        setUser({
            username
        });

    }, []);

    useEffect(() => {
        if (isLoggedIn === true) {
            localStorage.setItem('isLoggedIn', true);
            localStorage.setItem('username', user.username);
        }

        // if (isLoggedIn === false) {
        //     localStorage.removeItem('isLoggedIn');
        //     localStorage.removeItem('username');
        // }
    }, [isLoggedIn, user.username]);

    return (
        <DefaultPage>
            {isLoggedIn && `Welcome back, ${user.username}`}

            {!isLoggedIn &&
                <>
                    <p>Username &nbsp;
                        <input type="text" value={user?.username} onChange={(e) => setUser({
                            ...user,
                            username: e.target.value
                        })} />
                    </p>
                    <p>Password &nbsp;
                        <input type="password" value={user?.password} onChange={(e) => setUser({
                            ...user,
                            password: e.target.value
                        })} />
                    </p>
                    <p>
                        <button onClick={() => handleLogin()}>Sign In</button>
                    </p>
                </>
            }
        </DefaultPage >
    );
}

export default Login;