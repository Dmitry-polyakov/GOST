<script>
	import { user, accessToken, logout } from '../../stores/user';
	import { goto } from '$app/navigation';

	// Функция для генерации аватара
	const getAvatarUrl = (name, email) => {
		const initials = name ? name.split(' ').map(n => n[0]).join('').toUpperCase() :
			email ? email[0].toUpperCase() : 'U';
		const bgColor = stringToColor(name || email || 'User');
		return `https://ui-avatars.com/api/?name=${initials}&background=${bgColor.slice(1)}&color=fff&size=200`;
	};

	// Генерация цвета на основе строки
	const stringToColor = (str) => {
		let hash = 0;
		for (let i = 0; i < str.length; i++) {
			hash = str.charCodeAt(i) + ((hash << 5) - hash);
		}
		const colors = ['#527358', '#AD9BAA', '#FF8C42'];
		return colors[Math.abs(hash) % colors.length];
	};

	const roleTranslations = {
		4: 'Пользователь',
		2: 'Преподаватель',
		3: 'Студент',
		5: 'Администратор',
		1: 'Аккаунт организации'
	};

	// Форматирование даты
	const formatDate = (dateStr) => {
		const date = new Date(dateStr);
		return date.toLocaleDateString('ru-RU', { day: '2-digit', month: 'long', year: 'numeric' });
	};

	// Проверка авторизации
	$: if (!$user || !$accessToken) {
		goto('/signin');
	}
</script>

<div class="profile-container">
	{#if $user}
		<div class="profile-card">
			<div class="profile-header">
				<img
					src={getAvatarUrl(`${$user.first_name} ${$user.last_name}`, $user.email)}
					alt="Аватар профиля"
					class="profile-avatar"
				/>
				<div class="profile-info">
					<h2 class="profile-name">{$user.first_name} {$user.last_name}</h2>
					<div class="profile-position">{$user.position || 'Менеджер по учету ТМЦ'}</div>
					<div class="profile-department">{$user.department || 'Логистика'}</div>
				</div>
			</div>

			<div class="profile-details">
				<h3 class="section-title">Личная информация</h3>
				<div class="detail-item">
					<span class="detail-label">Роль:</span>
					<span class="detail-value">{roleTranslations[$user.role_id] || 'Неизвестная роль'}</span>
				</div>
				<div class="detail-item">
					<span class="detail-label">E-mail:</span>
					<span class="detail-value">{$user.email}</span>
				</div>
				<div class="detail-item">
					<span class="detail-label">Телефон:</span>
					<span class="detail-value">{$user.phone || '+7 (999) 123-45-67'}</span>
				</div>
				<div class="detail-item">
					<span class="detail-label">Дата регистрации:</span>
					<span class="detail-value">{formatDate($user.created_at || '2025-01-15')}</span>
				</div>
				<div class="detail-item">
					<span class="detail-label">Статус:</span>
					<span class="detail-value status" class:status-active={$user.is_active !== false}>
            {$user.is_active !== false ? 'Активен' : 'Неактивен'}
          </span>
				</div>
			</div>

			<div class="profile-stats">
				<h3 class="section-title">Активность</h3>
				<div class="stats-grid">
					<div class="stat-item">
						<span class="stat-value">{mockStats.inventoryOperations}</span>
						<span class="stat-label">Операций с ТМЦ</span>
					</div>
					<div class="stat-item">
						<span class="stat-value">{mockStats.trackedItems}</span>
						<span class="stat-label">Отслеживаемых позиций</span>
					</div>
					<div class="stat-item">
						<span class="stat-value">{formatDate(mockStats.lastOperation)}</span>
						<span class="stat-label">Последняя операция</span>
					</div>
				</div>
			</div>

			<div class="profile-actions">
				<a href="/profile/edit" class="profile-button edit-button">Редактировать профиль</a>
				<button on:click={() => logout()} class="profile-button logout-button">Выйти</button>
			</div>
		</div>
	{:else}
		<div class="profile-empty">
			<p>Вы не авторизованы</p>
			<a href="/signin" class="profile-button login-button">Войти</a>
		</div>
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

    .profile-container {
        max-width: 800px;
        margin: 2rem auto;
        padding: 0 1rem;
    }

    .profile-card {
        background: white;
        border-radius: 12px;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        padding: 2rem;
    }

    .profile-header {
        display: flex;
        align-items: center;
        gap: 2rem;
        margin-bottom: 2rem;
        padding-bottom: 1.5rem;
        border-bottom: 1px solid #eee;
    }

    .profile-avatar {
        width: 140px;
        height: 140px;
        border-radius: 50%;
        object-fit: cover;
        border: 4px solid var(--light);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .profile-info {
        flex: 1;
    }

    .profile-name {
        font-size: 2.2rem;
        margin: 0 0 0.5rem 0;
        color: var(--dark);
    }

    .profile-position {
        font-size: 1.2rem;
        color: var(--primary);
        font-weight: 500;
        margin-bottom: 0.25rem;
    }

    .profile-department {
        font-size: 1rem;
        color: var(--gray);
    }

    .section-title {
        font-size: 1.5rem;
        color: var(--dark);
        margin-bottom: 1rem;
        position: relative;
    }

    .section-title::after {
        content: '';
        position: absolute;
        bottom: -4px;
        left: 0;
        width: 60px;
        height: 2px;
        background: var(--accent);
    }

    .profile-details {
        margin-bottom: 2rem;
    }

    .detail-item {
        display: flex;
        align-items: center;
        padding: 0.75rem 0;
        border-bottom: 1px solid #eee;
    }

    .detail-label {
        flex: 0 0 200px;
        font-weight: 600;
        color: var(--gray);
    }

    .detail-value {
        flex: 1;
        color: var(--dark);
    }

    .status {
        padding: 0.3rem 0.8rem;
        border-radius: var(--border-radius);
        font-size: 0.9rem;
        color: white;
    }

    .status-active {
        background: var(--primary);
    }

    .profile-stats {
        margin-bottom: 2rem;
    }

    .stats-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1rem;
    }

    .stat-item {
        background: var(--light);
        padding: 1rem;
        border-radius: var(--border-radius);
        text-align: center;
    }

    .stat-value {
        display: block;
        font-size: 1.5rem;
        color: var(--primary);
        font-weight: 600;
        margin-bottom: 0.25rem;
    }

    .stat-label {
        font-size: 0.9rem;
        color: var(--gray);
    }

    .profile-actions {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
    }

    .profile-button {
        padding: 0.8rem 2rem;
        border-radius: var(--border-radius);
        text-align: center;
        text-decoration: none;
        font-weight: 600;
        border: none;
        cursor: pointer;
        transition: var(--transition);
    }

    .edit-button {
        background-color: var(--primary);
        color: white;
    }

    .edit-button:hover {
        background-color: #3a5240;
        transform: translateY(-2px);
    }

    .logout-button {
        background-color: var(--danger);
        color: white;
    }

    .logout-button:hover {
        background-color: #ff5252;
        transform: translateY(-2px);
    }

    .profile-empty {
        text-align: center;
        padding: 2rem;
        background: white;
        border-radius: 12px;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    }

    .login-button {
        background-color: var(--primary);
        color: white;
        display: inline-block;
        padding: 0.8rem 2rem;
        margin-top: 1rem;
    }

    .login-button:hover {
        background-color: #3a5240;
        transform: translateY(-2px);
    }

    @media (max-width: 768px) {
        .profile-header {
            flex-direction: column;
            text-align: center;
            gap: 1rem;
        }

        .profile-avatar {
            width: 120px;
            height: 120px;
        }

        .profile-name {
            font-size: 1.8rem;
        }

        .detail-item {
            flex-direction: column;
            align-items: flex-start;
        }

        .detail-label {
            flex: 0 0 auto;
            margin-bottom: 0.5rem;
        }

        .stats-grid {
            grid-template-columns: 1fr;
        }
    }

    @media (max-width: 576px) {
        .profile-name {
            font-size: 1.5rem;
        }

        .section-title {
            font-size: 1.2rem;
        }

        .profile-button {
            width: 100%;
        }
    }
</style>