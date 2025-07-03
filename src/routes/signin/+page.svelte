<script>
	import { goto } from '$app/navigation';
	import { user, accessToken, refreshToken } from '../../stores/user';

	let email = '';
	let password = '';
	let rememberMe = false;
	let errors = {};
	let isLoading = false;

	// Реактивная проверка валидности формы
	$: isFormValid = email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && password.length >= 8;

	async function handleSubmit() {
		if (!isFormValid) return;
		isLoading = true;
		errors = {};

		try {
			// Получение токенов
			const response = await fetch('http://localhost:8000/api/token/', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ email, password })
			});

			if (response.ok) {
				const { access, refresh } = await response.json();
				accessToken.set(access);
				refreshToken.set(refresh);

				// Загрузка данных пользователя
				const userResponse = await fetch('http://localhost:8000/api/me/', {
					headers: { Authorization: `Bearer ${access}` }
				});

				if (userResponse.ok) {
					user.set(await userResponse.json());
					await goto('/account');
				} else {
					errors.general = 'Ошибка загрузки данных пользователя';
				}
			} else {
				const errorData = await response.json();
				errors.general = errorData.detail || 'Неверный email или пароль';
			}
		} catch (err) {
			errors.general = 'Ошибка сервера. Попробуйте позже.';
			console.error('Ошибка входа:', err);
		} finally {
			isLoading = false;
		}
	}
</script>

<div class="_container">
	<div class="center">
		<div class="login-container">
			<form on:submit|preventDefault={handleSubmit}>
				<h1>Вход</h1>

				{#if errors.general}
					<p class="error">{errors.general}</p>
				{/if}

				<div class="form-group">
					<label for="email">E-mail</label>
					<input type="email" id="email" name="email" bind:value={email} required disabled={isLoading} />
					{#if errors.email}
						<p class="error">{errors.email}</p>
					{/if}
				</div>

				<div class="form-group">
					<label for="password">Пароль</label>
					<input type="password" id="password" name="password" bind:value={password} required disabled={isLoading} />
					<a href="#" class="link-black" style="float: right; margin-top: 5px; font-size: small;">Забыли пароль?</a>
					{#if errors.password}
						<p class="error">{errors.password}</p>
					{/if}
				</div>

				<div class="remember-me">
					<label for="remember-me">
						<input type="checkbox" id="remember-me" bind:checked={rememberMe} disabled={isLoading} />
						Запомнить меня
					</label>
				</div>

				<div class="btn-container">
					<button
						type="submit"
						class="btn1"
						style="width: 100%; margin-bottom: 10px; border-radius: 8px; font-size: 20px"
						disabled={!isFormValid || isLoading}
					>
						{#if isLoading}Вход...{:else}Войти{/if}
					</button>
					<a
						href="/signup"
						class="btn"
						style="width: 100%; background-color: white; border: solid 2px gray; color: gray;"
					>Регистрация</a
					>
				</div>
			</form>
		</div>
	</div>
</div>


<style>
    a {
        text-decoration: none;
    }

    .login-container {
        max-width: 400px;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 80vh;
        height: auto;
    }

    h1 {
        text-align: center;
        color: gray;
        margin-bottom: 30px;
    }

    form {
        background-color: white;
        border-radius: 16px;
        border: solid 2px black;
        padding: 30px;
    }

    .form-group {
        margin-bottom: 15px;
    }

    label {
        display: block;
        color: black;
        opacity: 100%;
        margin-bottom: 5px;
        margin-left: 25px;
    }

    input[type='email'],
    input[type='password'] {
        width: 95%;
        padding: 10px;
        border: 2px solid gray;
        border-radius: 8px;
    }

    .remember-me label {
        display: flex;
        align-items: center;
        margin-top: 1rem;
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

    .error {
        color: red;
        font-size: 16px;
        margin-left: 25px;
        margin-top: 5px;
    }

    .btn1 {
        background-color: #527358;
        color: #fff;
        border: none;
        padding: 10px;
        cursor: pointer;
    }

    .btn1:hover:not(:disabled) {
        background-color: #333;
    }

    .btn1:disabled {
        background-color: #ccc;
        cursor: not-allowed;
    }
</style>