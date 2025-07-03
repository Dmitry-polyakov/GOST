<body>
	<div class="sidebar sidebar-phone">
		<ul>
			<li>
				<a href="/account" class="link-black"
					><span>Профиль</span><img
						src="/icons8-гость-мужчина-96.png"
						alt=""
						class="disappearing-icon"
					/></a
				>
			</li>
			<li>
				<a href="/dashboard" class="link-black">
					<span>Dashboard</span><img
						src="/icons8-график-96.png"
						alt=""
						class="disappearing-icon"
					/></a
				>
			</li>
			<li>
				<a href="/uploading" class="link-black">
					<span>Загрузка файлов</span><img
						src="/icons8-загрузить96 (1).png"
						alt=""
						class="disappearing-icon"
					/></a
				>
			</li>
			<li>
				<a href="/history" class="link-black"
					><span>История отчетов</span><img
						src="/icons8-прошедшее-время-96.png"
						alt=""
						class="disappearing-icon"
					/></a
				>
			</li>
		</ul>
	</div>
	<div class="container">
		<h1>Огранизация</h1>
		<div class="organization-table">
			<div class="table-header">
				<div class="table-column">Название организации</div>
				<div class="table-column">Действия</div>
			</div>
			<div class="table-row">
				<div class="table-column">Государственный университет управления</div>
				<div class="table-column">
					<ul>
						<li>
							<a href="/account" class="link"
								><span>Изменить</span><img
									src="/edit_bhl65lxw8c7g.svg"
									alt=""
									class="disappearing-icon"
								/></a
							>
						</li>
						<li>
							<a href="/dashboard" class="link">
								<span>Удалить</span><img
									src="/delete_x1u75mjxr4e9.svg"
									alt=""
									class="disappearing-icon"
								/></a
							>
						</li>
					</ul>
				</div>
			</div>
            <div class="table-row">
				<div class="table-column">Московский гуманитарный университет</div>
				<div class="table-column">
					<ul>
						<li>
							<a href="/account" class="link"
								><span>Изменить</span><img
									src="/edit_bhl65lxw8c7g.svg"
									alt=""
									class="disappearing-icon"
								/></a
							>
						</li>
						<li>
							<a href="/dashboard" class="link">
								<span>Удалить</span><img
									src="/delete_x1u75mjxr4e9.svg"
									alt=""
									class="disappearing-icon"
								/></a
							>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
	<div class="sidebar">
		<ul>
			<li>
				<a href="/account" class="link-black"><span>Профиль</span> </a>
			</li>
			<li>
				<a href="/dashboard" class="link-black">
					<span>Dashboard</span>
				</a>
			</li>
			<li>
				<a href="/uploading" class="link-black">
					<span>Загрузка файлов</span>
				</a>
			</li>
			<li>
				<a href="/history" class="link-black"><span>История отчетов</span></a>
			</li>
		</ul>
	</div>
</body>

<style>
	body {
		display: flex;
		min-height: 100vh;
		background-color: #527358;
		opacity: 80%;
	}

	.organization-table {
		margin-top: 1.5rem;
		border-top: 2px solid black;
	}

	.table-header,
	.table-row {
		display: flex;
		justify-content: space-between;
		padding: 10px;
	}

	.table-header {
		font-weight: bold;
		background-color: #f0f0f0;
	}

	.table-column {
		width: 50%; /* Каждая колонка занимает 50% ширины */
		text-align: center;
		border-bottom: 1px solid #ccc;
	}

    .table-column ul {
        display: flex;
        justify-content: space-around;
        margin: 0;
        padding: 0;
    }

	.disappearing-icon {
		display: none;
	}

	.sidebar-phone {
		display: none;
	}

	@media (max-width: 1230px) {
		body {
			flex-direction: column;
		}

		.container {
			width: 80%; /* Ширина равна ширине контейнера с navbar */
			box-sizing: border-box;
		}

		.sidebar {
			display: none;
			margin: 0;
		}

		.sidebar-phone {
			display: block;
			background-color: #ffffff;
			padding: 1rem;
			margin-inline: 5rem;
			margin-top: 5rem;
			border: 2px solid black;
			border-radius: 16px;
			width: 80%; /* Ширина равна ширине контейнера с dashboard */
			box-sizing: border-box;
		}

		.sidebar-phone ul {
			display: flex;
			align-items: center;
			justify-content: space-around; /* Распределение кнопок по линии с равными отступами */
			list-style-type: none;
			padding: 0;
			margin: 0;
		}

		.sidebar-phone ul li {
			text-decoration: none;
			margin: 0;
		}
	}
	@media (max-width: 935px) {
		.link-black span {
			display: none;
		}
		.disappearing-icon {
			display: block;
			width: 1.5rem;
			height: 1.5rem;
			margin-left: 0.2rem; /* Отступ справа от изображения */
			border: 2px solid black;
			border-radius: 16px;
			padding: 10px 30px;
		}
		.sidebar-phone {
			padding: 0.5rem;
			margin-top: 2.5rem;
			margin-inline: auto;
			width: 90%; /* Ширина равна ширине контейнера с dashboard */
		}
		.container {
			margin-block: 2.5rem;
			margin-inline: auto;
			width: 90%; /* Ширина равна ширине контейнера с navbar */
			box-sizing: border-box;
		}
	}
</style>
