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
		<h1>Добавление организации</h1>
		<h3>
			Федеральное государственное бюджетное образовательное учреждение высшего образования
			«Государственный университет управления»
		</h3>
		<div class="row">
			<div class="form-group">
				<label for="inn">ИНН *</label>
				<input type="text" class="form-control" id="inn" value="7721037218" />
			</div>
			<div class="form-group">
				<label for="phone">Телефон</label>
				<input type="text" class="form-control" id="phone" value="8 (495) 377-89-14" />
			</div>
		</div>
		<div class="row">
			<div class="form-group">
				<label for="name">Наименование *</label>
				<input
					type="text"
					class="form-control"
					id="name"
					value="Государственный университет управления"
				/>
			</div>
			<div class="form-group">
				<label for="full-name">Наименование полностью *</label>
				<input
					type="text"
					class="form-control"
					id="full-name"
					value="Федеральное государственное бюджетное о"
				/>
			</div>
		</div>
		<div class="row">
			<div class="form-group full-width">
				<label for="description">Описание</label>
				<textarea class="form-control" id="description" rows="3">
					Государственный университет управления это сформированный многоуровневый научно-учебный
					комплекс. Он по праву считается основателем управленческого образования в стране. Ему
					заслуженно принадлежит приоритет не только в открытии, но и в дальнейшем развитии
					подготовки управленческих кадров для нужд экономики страны.
				</textarea>
			</div>
		</div>
		<div class="row">
			<a href="/account" class="btn1" style="margin-bottom: 1.5rem; border-radius: 8px;">Сохранить</a>
			<a
				href="/account"
				class="btn1"
				style="margin-bottom: 1.5rem; background-color: white; border: 2px solid gray; color: gray; border-radius: 8px;"
				>Сбросить</a
			>
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

	.container {
		display: flex;
		flex-direction: column;
		padding: 20px;
		align-items: flex-start; /* Прижимает элементы к левому краю */
	}

	.row {
		display: flex;
		width: 100%; /* Занимает всю ширину контейнера */
		margin-bottom: 15px; /* Отступ между строками */
	}

	.row a {
		width: 50%; /* Каждая форма занимает половину строки */
		margin-right: 10px; /* Отступ между формами */
	}

	.form-group {
		width: 50%; /* Каждая форма занимает половину строки */
		margin-right: 10px; /* Отступ между формами */
	}

	.form-group.full-width {
		width: 100%; /* Описание занимает всю ширину */
	}

	input[type='text'] {
		width: 95%;
		padding: 10px;
		border: 2px solid gray;
		border-radius: 8px;
	}

	.form-group label {
		display: block; /* Метки под полями ввода */
		margin-bottom: 5px; /* Отступ между меткой и полем ввода */
		color: gray; /* Цвет меток */
	}

	.form-control {
		width: 95%;
		padding: 10px;
		border: 2px solid gray;
		border-radius: 8px;
	}

	body {
		display: flex;
		min-height: 100vh;
	}

	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 20px;
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

		/* Новые стили для медиазапроса max-width: 935px */
		.row {
			flex-direction: column; /* Элементы располагаются в столбик */
			width: 100%; /* Занимает всю ширину */
		}

		.form-group {
			width: 100%; /* Каждая форма занимает всю ширину */
			margin-right: 0; /* Убираем отступ между формами */
			margin-bottom: 15px; /* Отступ между формами */
		}

		.row a {
			width: 100%; /* Кнопки занимают всю ширину */
			margin-right: 0; /* Убираем отступ между кнопками */
		}
	}
</style>
