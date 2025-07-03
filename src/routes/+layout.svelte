<script>
	import { onMount } from 'svelte';
	import { user, accessToken, logout } from '../stores/user';
	import { goto } from '$app/navigation';

	const roleLinks = {
		4: [
			{ href: '/history', label: 'Главная страница' }
		],
		2: [
			{ href: '/account', label: 'Профиль' },
			{ href: '/students', label: 'Студенты' }
		],
		3: [
			{ href: '/account', label: 'Профиль' }
		],
		5: [
			{ href: '/account', label: 'Профиль' },
			{ href: '/organization', label: 'Организация' }
		]
	};

	const roleTranslations = {
		4: 'Пользователь',
		2: 'Преподаватель',
		3: 'Студент',
		5: 'Администратор',
		1: 'Аккаунт организации'
	};

	const roleColors = {
		2: '#527358', // Преподаватель
		3: '#AD9BAA', // Студент
		5: '#FF8C42', // Администратор
		default: '#7f8c8d' // Остальные
	};

	function getInitials(firstName, lastName) {
		return `${firstName?.[0] || ''}${lastName?.[0] || ''}`.toUpperCase();
	}

	function handleLogout() {
		logout();
		goto('/signin');
	}

	onMount(() => {
		if ($accessToken && !$user) {
			fetch('http://localhost:8000/api/me/', {
				headers: { Authorization: `Bearer ${$accessToken}` }
			})
				.then(res => res.ok ? res.json() : Promise.reject())
				.then(data => user.set(data))
				.catch(() => logout());
		}
	});
</script>

<div class="app-layout" class:authenticated={$user}>
	{#if $user}
		<!-- Вертикальное меню для авторизованных -->
		<aside class="sidebar">
			<div class="profile-card">
				<div class="avatar-container" style="--role-color: {roleColors[$user.role_id] || roleColors.default}">
					<img
						src="https://ui-avatars.com/api/?name={getInitials($user.first_name, $user.last_name)}&background={roleColors[$user.role_id]?.slice(1) || '7f8c8d'}&color=fff&size=150"
						alt="Аватар"
						class="user-avatar"
					/>
				</div>
				<div class="profile-info">
					<h3 class="user-name">{$user.first_name} {$user.last_name}</h3>
					<div class="user-role" style="background-color: {roleColors[$user.role_id] || roleColors.default}">
						{roleTranslations[$user.role_id]}
					</div>
				</div>
			</div>

			<nav class="main-nav">
				{#each roleLinks[$user.role_id] || [] as link, i}
					<a
						href={link.href}
						class="nav-link"
						style="--link-hover: {roleColors[$user.role_id] || roleColors.default}"
					>
						<span class="link-number">{i + 1}</span>
						{link.label}
					</a>
				{/each}
			</nav>

			<button class="logout-btn" on:click={handleLogout}>
				<svg class="logout-icon" viewBox="0 0 24 24">
					<path fill="currentColor" d="M16 17v-3H9v-4h7V7l5 5-5 5M14 2a2 2 0 0 1 2 2v2h-2V4H5v16h9v-2h2v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9z"/>
				</svg>
				Выйти
			</button>
		</aside>
	{:else}
		<!-- Горизонтальное меню для гостей -->
		<header class="header">
			<div class="container">
				<a href="/" class="logo">GOST</a>
				<nav class="nav">
					<a href="#about" class="nav-link">О нас</a>
					<a href="#tarifs" class="nav-link">Тарифы</a>
					<a href="#how-work" class="nav-link">Как это работает?</a>
					<a href="#contacts" class="nav-link">Контакты</a>
				</nav>
				<div class="auth-buttons">
					<a href="/signin" class="btn btn-login">Вход</a>
					<a href="/signup" class="btn btn-signup">Регистрация</a>
				</div>
			</div>
		</header>
	{/if}

	<main>
		<slot />
	</main>

	{#if !$user}
		<footer class="footer">
			<div class="container">
				<div class="footer-content">
					<div class="contacts">
						<h3>Контакты</h3>
						<p>Email: support@dubravacontrol.ru</p>
					</div>
					<div class="legal">
						<a href="#" class="legal-link">Условия использования</a>
						<a href="#" class="legal-link">Политика конфиденциальности</a>
					</div>
				</div>
			</div>
		</footer>
	{/if}
</div>

<style>
    :root {
        --primary: #527358;
        --secondary: #AD9BAA;
        --accent: #FF8C42;
        --light: #f8f9fa;
        --dark: #2c3e50;
        --gray: #7f8c8d;
        --danger: #ff6b6b;
        --border-radius: 8px;
        --transition: all 0.3s ease;
    }

    /* Базовые стили */
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Roboto', sans-serif;
        line-height: 1.6;
        color: var(--dark);
    }

    .app-layout {
        display: flex;
        min-height: 100vh;
    }

    .app-layout:not(.authenticated) {
        flex-direction: column;
    }

    main {
        flex: 1;
    }

    /* Вертикальное меню */
    .sidebar {
        width: 280px;
        background: white;
        padding: 2rem 1.5rem;
        display: flex;
        flex-direction: column;
        border-right: 1px solid #e5e7eb;
    }

    .profile-card {
        text-align: center;
        margin-bottom: 2rem;
    }

    .avatar-container {
        width: 100px;
        height: 100px;
        margin: 0 auto 1rem;
        border-radius: 50%;
        padding: 5px;
        background: linear-gradient(135deg, var(--role-color), #fff);
    }

    .user-avatar {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        border: 3px solid white;
        object-fit: cover;
    }

    .user-name {
        font-size: 1.25rem;
        margin-bottom: 0.5rem;
    }

    .user-role {
        display: inline-block;
        padding: 0.25rem 0.75rem;
        border-radius: 1rem;
        font-size: 0.75rem;
        color: white;
        font-weight: 500;
    }

    .main-nav {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    .nav-link {
        display: flex;
        align-items: center;
        padding: 0.75rem 1rem;
        border-radius: var(--border-radius);
        text-decoration: none;
        transition: var(--transition);
    }

    .nav-link:hover {
        background-color: rgba(var(--link-hover), 0.1);
        color: var(--link-hover);
        transform: translateX(5px);
    }

    .link-number {
        width: 24px;
        height: 24px;
        background-color: var(--link-hover);
        color: white;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 0.75rem;
        font-size: 0.75rem;
        font-weight: bold;
    }

    .logout-btn {
        margin-top: auto;
        padding: 0.75rem;
        background: var(--danger);
        color: white;
        border: none;
        border-radius: var(--border-radius);
        font-weight: 500;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        transition: var(--transition);
    }

    .logout-btn:hover {
        background: #ff5252;
        box-shadow: 0 4px 8px rgba(255, 107, 107, 0.3);
    }

    .logout-icon {
        width: 18px;
        height: 18px;
    }

    /* Горизонтальное меню */
    .header {
        background: white;
        height: 100px;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #e5e7eb;
    }

    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 1rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 2rem;
    }

    .logo {
        font-family: 'Spectral SC', serif;
        font-size: 1.75rem;
        font-weight: 400;
        text-decoration: none;
        color: var(--primary);
    }

    .logo-subtitle {
        font-family: 'Roboto', sans-serif;
        font-size: 0.85rem;
        color: var(--gray);
        margin-top: 0.25rem;
        max-width: 300px;
        line-height: 1.2;
    }

    .nav {
        display: flex;
        gap: 1.5rem;
        flex: 1;
        justify-content: center;
    }

    .nav-link {
        color: var(--dark);
        text-decoration: none;
        position: relative;
        padding: 0.5rem 0;
        font-size: 1rem;
        font-weight: 500;
    }

    .nav-link::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 0;
        height: 2px;
        background: var(--primary);
        transition: width 0.3s;
    }

    .nav-link:hover::after {
        width: 100%;
    }

    .auth-buttons {
        display: flex;
        gap: 0.75rem;
    }

    .btn {
        padding: 0.5rem 1.5rem;
        border-radius: var(--border-radius);
        text-decoration: none;
        font-weight: 500;
        transition: var(--transition);
    }

    .btn-login {
        background: var(--primary);
        color: white;
    }

    .btn-login:hover {
        background: #3a5240;
    }

    .btn-signup {
        background: white;
        color: var(--primary);
        border: 1px solid var(--primary);
    }

    .btn-signup:hover {
        background: #f8f9fa;
    }

    /* Футер */
    .footer {
        background: var(--primary);
        color: white;
        padding: 2rem 0;
    }

    .footer-content {
        display: flex;
        justify-content: space-around;
        gap: 15px;
        width: 100%;
        align-items: center;
    }

    .contacts h3 {
        margin-bottom: 0.5rem;
    }

    .legal {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    .legal-link {
        color: white;
        text-decoration: none;
        transition: var(--transition);
    }

    .legal-link:hover {
        text-decoration: underline;
    }

    /* Адаптивность */
    @media (max-width: 992px) {
        .container {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
        }

        .header {
            height: auto;
            padding: 1rem 0;
        }

        .nav {
            justify-content: center;
        }

        .logo-subtitle {
            max-width: 100%;
        }
    }

    @media (max-width: 768px) {
        .sidebar {
            width: 240px;
            padding: 1.5rem 1rem;
        }

        .avatar-container {
            width: 80px;
            height: 80px;
        }

        .header {
            height: auto;
            padding: 1rem 0;
        }

        .nav {
            flex-direction: column;
            gap: 0.75rem;
        }

        .auth-buttons {
            flex-direction: column;
            gap: 0.5rem;
            width: 100%;
        }

        .btn {
            width: 100%;
            text-align: center;
        }

        .footer-content {
            flex-direction: column;
            gap: 1.5rem;
            text-align: center;
        }
    }

    @media (max-width: 576px) {
        .logo {
            font-size: 1.5rem;
        }

        .logo-subtitle {
            font-size: 0.75rem;
        }

        .nav-link {
            font-size: 0.9rem;
        }
    }
</style>