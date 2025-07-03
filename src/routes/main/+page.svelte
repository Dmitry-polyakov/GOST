<body>
	<div class="login-container">
		<form>
			<h1>Вход</h1>

			<div class="form-group">
				<label for="email">E-mail</label>
				<input type="email" id="email" name="email" required />
			</div>

			<div class="form-group">
				<label for="password">Пароль</label>
				<input type="password" id="password" name="password" required />
				<span class="forgot-password">Забыли пароль?</span>
			</div>

			<div class="remember-me">
				<label for="remember-me">
					<input type="checkbox" id="remember-me" />
					Запомнить меня
				</label>
			</div>

			<div class="btn-container">
				<a href="#" class="btn" style="width: 100%; margin-bottom: 10px;">Войти</a>
				<a href="#" class="btn" style="width: 100%; background-color: white; border: solid 2px gray; color: gray;">Регистрация</a>
			</div>
		</form>
	</div>
</body>

<style>
	body {
		font-family: 'Montserrat', sans-serif;
		font-size: 16px;
		font-weight: 550;
		background-color: rgb(255, 255, 255);
		line-height: 1.4;
		color: #000;
		min-width: 280px;
		overflow-x: hidden;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
		margin: 0;
		scroll-behavior: smooth;
		margin: 0;
		padding: 0;
	}

	a {
		text-decoration: none;
	}

	.login-container {
		max-width: 400px;
		margin: 5rem;
	}

	h1 {
		text-align: center;
		color: gray;
		margin-bottom: 30px;
	}

	form {
		background-color: white;
		border-radius: 50px;
		border: solid 2px black;
		padding: 30px;
	}

	.form-group {
		margin-bottom: 15px;
	}

	label {
		display: block;
		margin-bottom: 5px;
		margin-left: 25px;
		font-weight: bold;
	}

	input[type='email'],
	input[type='password'] {
		width: 95%;
		padding: 10px;
		border: 2px solid gray;
		border-radius: 50px;
	}

	.forgot-password {
		float: right;
		margin-top: 5px;
		cursor: pointer;
		color: gray;
		font-size: small;
	}

	.forgot-password:hover {
		color: black;
		transition: 0.3s;
	}

	.remember-me label {
		display: flex;
		align-items: center;
		margin-top: 7rem;
		font-size: 15px;
	}

	.remember-me input[type='checkbox'] {
		margin-right: 5px;
	}

	.btn-container {
		display: flex;
		width: 100%;
		flex-direction: column;
	}
</style>
