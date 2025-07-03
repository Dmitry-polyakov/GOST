<script lang="js">
	import { goto } from '$app/navigation';

	let email = '';
	let firstName = '';
	let lastName = '';
	let password = '';
	let passwordConfirm = '';
	let privacyPolicy = false;
	let errors = {};
	let isLoading = false;

	// Реактивная проверка валидности формы
	$: isFormValid = email &&
		/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) &&
		firstName &&
		lastName &&
		password.length >= 8 &&
		!password.toLowerCase().includes(email.toLowerCase()) &&
		password === passwordConfirm &&
		privacyPolicy;

	// Валидация формы
	function validateForm() {
		errors = {};
		if (!email) errors.email = 'Email обязателен';
		else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Неверный формат email';
		if (!firstName) errors.firstName = 'Имя обязательно';
		if (!lastName) errors.lastName = 'Фамилия обязательна';
		if (!password) errors.password = 'Пароль обязателен';
		else if (password.length < 8) errors.password = 'Минимум 8 символов';
		else if (password.toLowerCase().includes(email.toLowerCase())) errors.password = 'Пароль не должен быть похож на email';
		if (password !== passwordConfirm) errors.passwordConfirm = 'Пароли не совпадают';
		if (!privacyPolicy) errors.privacyPolicy = 'Необходимо согласиться с политикой';
		return Object.keys(errors).length === 0;
	}

	// Отправка формы
	async function handleSubmit() {
		if (!validateForm()) return;
		isLoading = true;
		errors = {};

		const data = { email, first_name: firstName, last_name: lastName, password };

		try {
			const response = await fetch('http://localhost:8000/api/register/', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(data)
			});

			if (response.ok) {
				await goto('/signin');
			} else {
				const errorData = await response.json();
				errors = errorData;
				if (errorData.email) errors.email = errorData.email[0];
				if (errorData.first_name) errors.firstName = errorData.first_name[0];
				if (errorData.last_name) errors.lastName = errorData.last_name[0];
				if (errorData.non_field_errors) errors.general = errorData.non_field_errors[0];
			}
		} catch (err) {
			errors.general = 'Ошибка сервера. Попробуйте позже.';
			console.error('Ошибка регистрации:', err);
		} finally {
			isLoading = false;
		}
	}
</script>
<div class="sign-up-container">
	<form on:submit|preventDefault={handleSubmit}>
		<h1>Регистрация</h1>

		{#if errors.general}
			<p class="error">{errors.general}</p>
		{/if}

		<div class="form-group">
			<label for="email">E-mail</label>
			<input type="email" id="email" bind:value={email} required disabled={isLoading} />
			{#if errors.email}
				<p class="error">{errors.email}</p>
			{/if}
		</div>

		<div class="form-group">
			<label for="first-name">Имя</label>
			<input type="text" id="first-name" bind:value={firstName} required disabled={isLoading} />
			{#if errors.firstName}
				<p class="error">{errors.firstName}</p>
			{/if}
		</div>

		<div class="form-group">
			<label for="last-name">Фамилия</label>
			<input type="text" id="last-name" bind:value={lastName} required disabled={isLoading} />
			{#if errors.lastName}
				<p class="error">{errors.lastName}</p>
			{/if}
		</div>

		<div class="form-group">
			<label for="password">Пароль</label>
			<input type="password" id="password" bind:value={password} required disabled={isLoading} />
			{#if errors.password}
				<p class="error">{errors.password}</p>
			{/if}
		</div>

		<div class="form-group">
			<label for="password-confirm">Подтверждение пароля</label>
			<input type="password" id="password-confirm" bind:value={passwordConfirm} required disabled={isLoading} />
			{#if errors.passwordConfirm}
				<p class="error">{errors.passwordConfirm}</p>
			{/if}
		</div>

		<label for="privacy-policy" class="privacy-label">
			<input type="checkbox" id="privacy-policy" bind:checked={privacyPolicy} disabled={isLoading} />
			Я согласен с <a href="#" class="link-black">политикой по обработке персональных данных</a>
			{#if errors.privacyPolicy}
				<p class="error">{errors.privacyPolicy}</p>
			{/if}
		</label>

		<div class="btn-container">
			<button type="submit" class="btn1" disabled={!isFormValid || isLoading}>
				{#if isLoading}Регистрация...{:else}Зарегистрироваться{/if}
			</button>
			<a href="/signin" class="btn">Войти</a>
		</div>
	</form>
</div>
<style>
    body {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        height: auto;
        scroll-behavior: smooth;
    }

    a {
        text-decoration: none;
    }

    h1 {
        text-align: center;
        color: gray;
        margin-bottom: 30px;
    }

    .sign-up-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 auto;
        width: 100%;
        margin: 5rem 0;
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
        margin-bottom: 5px;
        margin-left: 25px;
    }

    input[type='email'],
    input[type='password'],
    input[type='text'] {
        width: 95%;
        padding: 10px;
        border: 2px solid gray;
        border-radius: 8px;
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

    .privacy-label {
        display: flex;
        align-items: center;
        margin: 0;
        margin-bottom: 16px;
    }

    button.btn1 {
        width: 100%;
        margin-bottom: 10px;
        border-radius: 8px;
        font-size: 20px;
        background-color: #527358;
        color: #fff;
        border: none;
        padding: 10px;
        cursor: pointer;
    }

    button.btn1:hover:not(:disabled) {
        background-color: #333;
    }

    button.btn1:disabled {
        background-color: #ccc;
        cursor: not-allowed;
    }

    a.btn {
        width: 100%;
        background-color: white;
        border: solid 2px gray;
        color: gray;
        text-align: center;
        padding: 10px;
        border-radius: 8px;
    }

    @media (max-width: 760px) {
        .link-black,
        .privacy-label {
            font-size: 13px;
        }
    }
</style>