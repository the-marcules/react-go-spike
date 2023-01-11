import { useEffect, useState } from 'react';

// BROKEN!! continue here.

function CrashTests() {
    const [tests, setTests] = useState([]);

    async function getApiData() {
        let myHeaders = new Headers();

        fetch('http://localhost:10000/users', {
            method: 'POST',
            headers: myHeaders,
            redirect: 'follow',
        })
            .then((response) => response.text())
            .then((result) => {
                setTests(JSON.parse(result));
            })
            .catch((err) => {
                console.log(err);
            });
    }

    useEffect(() => {
        getApiData();
    }, []);

    return (
        <div>
            <h2>Crash Tests</h2>
            <ul>
                {tests.map(function (user) {
                    return <li key={user}>{user} ✅</li>;
                })}
            </ul>
        </div>
    );
}

export default CrashTests;
