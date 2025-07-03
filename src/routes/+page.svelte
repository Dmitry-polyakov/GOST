<script>
	// Функция плавной прокрутки
	const scrollToSection = (id) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
		}
	};
</script>

<section class="hero-section">
	<div class="hero-container">
		<div class="hero-content">
			<div style="display: flex; flex-direction:column; horiz-align:center; justify-content: center; vertical-align: center">
				<h1 class="hero-title">Сервис электронной проверки</h1>
				<p class="hero-subtitle">на соответствие норм стандартов организации и ГОСТ</p>
			</div>

			<div>
				<div class="hero-buttons">
					<a href="/signup" class="hero-button">
						<img src="/icons8-пользователь-96.png" alt="Пользователь" class="button-icon" />
						<div class="button-text">
							<p class="button-main-text">Загружайте и проверяйте свои работы</p>
							<p class="button-secondary-text">Студентам/Частным лицам</p>
						</div>
					</a>

					<button on:click={() => scrollToSection('tarifs')} class="hero-button">
						<img src="/icons8-менеджер-по-работе-с-клиентами-96.png" alt="Корпоративный клиент" class="button-icon" />
						<div class="button-text">
							<p class="button-main-text">Узнайте о приобретении сервиса для организации</p>
							<p class="button-secondary-text">Корпоративным клиентам</p>
						</div>
					</button>
				</div>
			</div>

		</div>
	</div>
</section>

<section id="tarifs" class="tarifs-section">
	<div class="section-container">
		<h2 class="section-title">Наши тарифы</h2>

		<div class="pricing-cards">
			<!-- FREE тариф -->
			<div class="pricing-card free-card">
				<div class="card-header free-bg">
					<h3 class="card-title">FREE</h3>
				</div>
				<ul class="features-list">
					<li class="feature-item included">
						<span class="check-icon">✓</span>
						Гарантия конфиденциальности
					</li>
					<li class="feature-item included">
						<span class="check-icon">✓</span>
						Актуальные данные
					</li>
					<li class="feature-item excluded">
						<span class="cross-icon">✗</span>
						Полный документ
					</li>
					<li class="feature-item excluded">
						<span class="cross-icon">✗</span>
						Индивидуальные консультации экспертов
					</li>
					<li class="feature-item excluded">
						<span class="cross-icon">✗</span>
						История проверки
					</li>
					<li class="feature-item excluded">
						<span class="cross-icon">✗</span>
						Безлимитная проверка
					</li>
				</ul>
				<a href="/organizations/organization" class="card-button free-button">Ознакомиться</a>
			</div>

			<!-- PREMIUM тариф (центральный, выделенный) -->
			<div class="pricing-card premium-card featured">
				<div class="card-header premium-bg">
					<h3 class="card-title">PREMIUM</h3>
				</div>
				<ul class="features-list">
					<li class="feature-item included">
						<span class="check-icon">✓</span>
						Гарантия конфиденциальности
					</li>
					<li class="feature-item included">
						<span class="check-icon">✓</span>
						Актуальные данные
					</li>
					<li class="feature-item included">
						<span class="check-icon">✓</span>
						Полный документ
					</li>
					<li class="feature-item included">
						<span class="check-icon">✓</span>
						Индивидуальные консультации экспертов
					</li>
					<li class="feature-item included">
						<span class="check-icon">✓</span>
						История проверки
					</li>
					<li class="feature-item included">
						<span class="check-icon">✓</span>
						Безлимитная проверка
					</li>
				</ul>
				<a href="/organizations/add-organization" class="card-button premium-button">Купить</a>
			</div>

			<!-- CORPORATE тариф -->
			<div class="pricing-card corporate-card">
				<div class="card-header corporate-bg">
					<h3 class="card-title">CORPORATE</h3>
				</div>
				<ul class="features-list">
					<li class="feature-item included">
						<span class="check-icon">✓</span>
						Гарантия конфиденциальности
					</li>
					<li class="feature-item included">
						<span class="check-icon">✓</span>
						Актуальные данные
					</li>
					<li class="feature-item included">
						<span class="check-icon">✓</span>
						Полный документ
					</li>
					<li class="feature-item excluded">
						<span class="cross-icon">✗</span>
						Индивидуальные консультации экспертов
					</li>
					<li class="feature-item excluded">
						<span class="cross-icon">✗</span>
						История проверки
					</li>
					<li class="feature-item excluded">
						<span class="cross-icon">✗</span>
						Безлимитная проверка
					</li>
				</ul>
				<a href="#" class="card-button corporate-button">Купить</a>
			</div>
		</div>
	</div>
</section>

<section id="how-work" class="how-it-works">
	<div class="section-container">
		<h2 class="section-title">Как это работает</h2>

		<div class="work-steps">
			<div class="work-step">
				<img src="/laptop1.png" alt="Загрузка" class="step-image" />
				<div class="step-content">
					<h3 class="step-title">Загрузка</h3>
					<p class="step-description">Пользователь загружает файл в систему</p>
				</div>
			</div>

			<div class="work-step">
				<img src="/laptop3.png" alt="Анализ" class="step-image" />
				<div class="step-content">
					<h3 class="step-title">Анализ</h3>
					<p class="step-description">Система анализирует файл, проверяет его на соответствие нормам и стандартам
						ГОСТ</p>
				</div>
			</div>

			<div class="work-step">
				<img src="/laptop2.png" alt="Результат" class="step-image" />
				<div class="step-content">
					<h3 class="step-title">Результат</h3>
					<p class="step-description">Пользователь получает документ, соответствующий нормам и стандартам ГОСТ</p>
				</div>
			</div>
		</div>
	</div>
</section>

<section id="about" class="about-section">
	<div class="section-container">
		<h2 class="section-title">О нашем сервисе</h2>

		<div class="about-content">
			<p class="about-text">
				<span class="highlight-text">ГОСТ</span> – это инновационный подход к созданию научных работ.
			</p>

			<p class="about-text">
				Наш проект решает ключевую проблему современных исследователей – нехватку ресурсов для
				эффективной работы. В отличие от традиционных методов, где возможны ошибки из-за
				человеческого фактора, <span class="highlight-text">ГОСТ</span> обеспечивает точность и соответствие стандартам.
			</p>

			<p class="about-text">
				Мы разработали интеллектуальный инструмент, который:
			</p>

			<ul class="benefits-list">
				<li class="benefit-item">Автоматизирует оформление научных работ по ГОСТ</li>
				<li class="benefit-item">Сокращает время на изучение стандартов</li>
				<li class="benefit-item">Повышает качество за счёт исключения ручных ошибок</li>
			</ul>

			<p class="about-conclusion">
				Это не просто сервис, а ваш надежный помощник в мире академических исследований.
			</p>
		</div>
	</div>
</section>

<style>
    /* Базовые стили */
    :root {
        --primary-color: #2c3e50;
        --secondary-color: #FF8C42;
        --accent-color: #e74c3c;
        --light-color: #ecf0f1;
        --dark-color: #2c3e50;
        --success-color: #527358;
        --warning-color: #f39c12;
        --danger-color: #e74c3c;
        --border-radius: 12px;
        --box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        --transition: all 0.3s ease;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        line-height: 1.6;
        color: #333;
    }

    .section-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
    }

    .section-title {
        text-align: center;
        font-size: 2.5rem;
        margin-bottom: 3rem;
        color: var(--dark-color);
        position: relative;
        padding-bottom: 15px;
    }

    .section-title::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 100px;
        height: 4px;
        background: var(--secondary-color);
        border-radius: 2px;
    }

    /* Герой секция */
    .hero-section {
        background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/IDN.jpg') no-repeat center center;
        background-size: cover;
        color: white;
        padding: 100px 0;
        min-height: 50vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .hero-content {
        text-align: center;
        max-width: 1200px;
				vertical-align: center;
        margin: 0 auto;
				display: flex;
				gap: 100px;
    }

    .hero-title {
        font-size: 3.5rem;
        font-weight: 700;
        margin-bottom: 1rem;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }

    .hero-subtitle {
        font-size: 1.8rem;
        margin-bottom: 3rem;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }

    .hero-buttons {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 30px;
    }

    .hero-button {
        background: rgba(255, 255, 255, 0.15);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: var(--border-radius);
        padding: 30px;
        width: 100%;
        max-width: 400px;
        color: white;
        text-decoration: none;
        transition: var(--transition);
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .hero-button:hover {
        transform: translateY(-5px);
        background: rgba(255, 255, 255, 0.25);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }

    .button-icon {
        width: 60px;
        height: 60px;
        margin-bottom: 15px;
    }

    .button-main-text {
        font-size: 1.2rem;
        font-weight: 600;
        margin-bottom: 5px;
    }

    .button-secondary-text {
        font-size: 0.9rem;
        opacity: 0.8;
    }

    /* Секция тарифов */

    .tarifs-section {
        padding: 80px 0;
        background-color: #f9f9f9;
    }

    .pricing-cards {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 30px;
        margin-top: 50px;
        align-items: center;
    }

    .pricing-card {
        background: white;
        border-radius: var(--border-radius);
        overflow: hidden;
        box-shadow: var(--box-shadow);
        transition: var(--transition);
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    .featured {
        transform: scale(1.05);
        z-index: 1;
        border: 2px solid rgba(82, 115, 88, 0.3);
    }

    .card-header {
        padding: 25px;
        text-align: center;
        color: white;
    }

    .free-bg {
        background-color: rgb(158, 157, 157);
    }

    .premium-bg {
        background-color: rgba(82, 115, 88, 0.8);
    }

    .corporate-bg {
        background-color: rgba(255, 140, 66, 0.8);
    }

    .card-title {
        font-size: 1.8rem;
        margin: 0;
        font-weight: 700;
    }

    .features-list {
        list-style: none;
        padding: 25px;
        flex-grow: 1;
    }

    .feature-item {
        padding: 12px 0;
        display: flex;
        align-items: center;
        font-size: 1rem;
        border-bottom: 1px solid #eee;
    }

    .feature-item:last-child {
        border-bottom: none;
    }

    .feature-item.included {
        color: var(--dark-color);
    }

    .feature-item.excluded {
        color: #95a5a6;
    }

    .check-icon, .cross-icon {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 24px;
        height: 24px;
        margin-right: 10px;
        border-radius: 50%;
        font-weight: bold;
    }

    .check-icon {
        background-color: rgba(46, 204, 113, 0.2);
        color: var(--success-color);
    }

    .cross-icon {
        background-color: rgba(231, 76, 60, 0.2);
        color: var(--danger-color);
    }

    .card-button {
        display: block;
        padding: 15px;
        text-align: center;
        color: white;
        border-radius: 0;
        text-decoration: none;
        font-weight: 600;
        transition: var(--transition);
        border: none;
        cursor: pointer;
        font-size: 1.1rem;
        margin-top: auto;
    }

    .free-button {
        background-color: #9e9d9d;
    }

    .premium-button {
        background-color: #527358;
    }

    .corporate-button {
        background-color: #FF8C42;
    }

    .free-button:hover {
        background-color: rgba(173, 155, 170, 0.8);
    }

    .premium-button:hover {
        background-color: rgba(82, 115, 88, 0.8);
    }

    .corporate-button:hover {
        background-color: rgba(255, 140, 66, 0.8);
    }

    /* Секция "Как это работает" */
    .how-it-works {
        padding: 80px 0;
        background-color: var(--success-color);
        color: white;
    }

    .how-it-works .section-title {
        color: white;
    }

    .how-it-works .section-title::after {
        background: white;
    }

    .work-steps {
        display: flex;
        flex-direction: column;
        gap: 40px;
        max-width: 800px;
        margin: 0 auto;
    }

    .work-step {
        display: flex;
        align-items: center;
        gap: 30px;
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(5px);
        border-radius: var(--border-radius);
        padding: 30px;
        transition: var(--transition);
    }

    .work-step:hover {
        transform: translateX(10px);
        background: rgba(255, 255, 255, 0.2);
    }

    .step-image {
        width: 120px;
        height: auto;
        object-fit: contain;
    }

    .step-content {
        flex: 1;
    }

    .step-title {
        font-size: 1.5rem;
        margin-bottom: 10px;
    }

    .step-description {
        opacity: 0.9;
    }

    /* Секция "О нас" */
    .about-section {
        padding: 80px 0;
        background-color: white;
    }

    .about-content {
        max-width: 800px;
        margin: 0 auto;
    }

    .about-text {
        margin-bottom: 20px;
        font-size: 1.1rem;
        line-height: 1.8;
    }

    .highlight-text {
        font-family: 'Georgia', serif;
        font-weight: 700;
        color: var(--secondary-color);
    }

    .benefits-list {
        list-style: none;
        margin: 30px 0;
    }

    .benefit-item {
        position: relative;
        padding-left: 30px;
        margin-bottom: 15px;
        font-size: 1.1rem;
    }

    .benefit-item::before {
        content: '✓';
        position: absolute;
        left: 0;
        color: var(--success-color);
        font-weight: bold;
    }

    .about-conclusion {
        font-size: 1.5rem;
        text-align: center;
        margin-top: 50px;
        font-style: italic;
        color: var(--dark-color);
    }

    /* Адаптивность */

    @media (max-width: 992px) {
        .pricing-cards {
            grid-template-columns: 1fr;
            max-width: 500px;
            margin-left: auto;
            margin-right: auto;
        }

        .featured {
            transform: none;
            order: -1;
        }
    }
    @media (max-width: 992px) {
        .hero-title {
            font-size: 2.8rem;
        }

        .hero-subtitle {
            font-size: 1.5rem;
        }

        .section-title {
            font-size: 2rem;
        }
    }

    @media (max-width: 768px) {
        .hero-section {
            padding: 80px 0;
            min-height: auto;
        }

        .hero-title {
            font-size: 2.2rem;
        }

        .hero-subtitle {
            font-size: 1.3rem;
        }

        .hero-buttons {
            flex-direction: column;
            align-items: center;
        }

        .hero-button {
            padding: 20px;
        }

        .button-secondary-text {
            display: none;
        }

        .work-step {
            flex-direction: column;
            text-align: center;
        }

        .step-image {
            margin-bottom: 20px;
        }

        .card-title {
            font-size: 1.8rem;
        }
    }

    @media (max-width: 576px) {
        .hero-title {
            font-size: 1.8rem;
        }

        .section-title {
            font-size: 1.8rem;
        }

        .pricing-cards {
            grid-template-columns: 1fr;
        }
    }
</style>