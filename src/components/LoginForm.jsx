import { useState } from 'react'
import axios from 'axios'

const LoginForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = { 'Project-ID': "bcc3adea-3874-4fef-99b3-ff672e5ca78c", 'User-Name': username, 'User-Secret': password }

        try {
            await axios.get('https://api.chatengine.io/chats', { headers: authObject })

            localStorage.setItem('username', username)
            localStorage.setItem('password', password)

            window.location.reload()

        } catch (error) {
            setError('Oops, Incorrect username or password')
        }
    }

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">
                    Chat Application
                </h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" className="input" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter Username" required />
                    <input type="password" className="input" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" required />
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start Chatting</span>
                        </button>
                    </div>
                    <h2 className="error">{error}</h2>
                </form>
            </div>

        </div>
    )
}

export default LoginForm
