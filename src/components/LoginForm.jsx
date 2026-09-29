import { useState } from 'react';
import '../App.css';


export default function LoginForm() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('')
	const handleSubmit = (e) => {
		e.preventDefault()
		alert('It worked...')
	}
	return (
		<div className='login-container'>
			<form className='login-form' onSubmit={handleSubmit}>
				<input type='email'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder='User email'
					id='email'
					name='email'
					required
				/>
				<input type='text'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					placeholder='User password'
					id='password'
					name='password'
					required
				/>
				<button type='submit'>Log In</button>
			</form>

		</div>
	)
}
