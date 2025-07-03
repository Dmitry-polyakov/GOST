<script>
	import { onMount } from 'svelte';
	import { user, accessToken } from '../../../stores/user';
	import { goto } from '$app/navigation';
	import Chart from 'chart.js/auto';

	// Моковые данные для низкого соответствия
	const check = {
		id: 3,
		file_name: 'test_вкр_2',
		file_size: 1536000,
		file_type: 'docx',
		created_at: '2025-01-03T14:00:00Z',
		result: {
			compliance_score: 40,
			sections: {
				title_page: { is_compliant: false, errors: ['Отсутствует название работы', 'Неправильный шрифт'] },
				contents: { is_compliant: false, errors: ['Отсутствует нумерация страниц', 'Неправильная структура'] },
				main_content: { is_compliant: false, errors: ['Несоответствие шрифта ГОСТу', 'Неправильные отступы'] },
				references: { is_compliant: false, errors: ['Неправильный формат ссылок', 'Отсутствуют источники'] }
			},
			details: { total_pages: 50, formatting_errors: 5, citation_errors: 4, structure_errors: 3 }
		}
	};

	let complianceChart = null;
	let errorChart = null;

	onMount(() => {
		if (!$user || !$accessToken) {
			goto('/signin');
			return;
		}

		createCharts();

		return () => {
			if (complianceChart) complianceChart.destroy();
			if (errorChart) errorChart.destroy();
		};
	});

	function createCharts() {
		const complianceCtx = document.getElementById('complianceChart').getContext('2d');
		complianceChart = new Chart(complianceCtx, {
			type: 'bar',
			data: {
				labels: ['Титульный лист', 'Содержание', 'Основная часть', 'Литература'],
				datasets: [{
					label: 'Соответствие',
					data: [
						check.result.sections.title_page.is_compliant ? 100 : 0,
						check.result.sections.contents.is_compliant ? 100 : 0,
						check.result.sections.main_content.is_compliant ? 100 : 0,
						check.result.sections.references.is_compliant ? 100 : 0
					],
					backgroundColor: ['#527358', '#527358', '#527358', '#527358'],
					borderColor: ['#3a5240', '#3a5240', '#3a5240', '#3a5240'],
					borderWidth: 1
				}]
			},
			options: {
				scales: {
					y: { beginAtZero: true, max: 100, title: { display: true, text: '% Соответствия' } }
				},
				plugins: { legend: { display: false } }
			}
		});

		const errorCtx = document.getElementById('errorChart').getContext('2d');
		errorChart = new Chart(errorCtx, {
			type: 'doughnut',
			data: {
				labels: ['Форматирование', 'Цитирование', 'Структура'],
				datasets: [{
					data: [
						check.result.details.formatting_errors,
						check.result.details.citation_errors,
						check.result.details.structure_errors
					],
					backgroundColor: ['#FF8C42', '#7f8c8d', '#ff6b6b'],
					borderColor: ['#fff', '#fff', '#fff'],
					borderWidth: 2
				}]
			},
			options: {
				plugins: { legend: { position: 'bottom' } }
			}
		});
	}
</script>

<div class="container">
	<h2 class="section-title">Отчет по проверке</h2>

	<div class="report-card">
		<h3 class="report-title">{check.file_name}</h3>
		<p class="report-meta">
			Загружено: {check.created_at.split('T')[0]} | Тип: {check.file_type.toUpperCase()} | Размер: {(check.file_size / (1024 * 1024)).toFixed(1)} MB
		</p>
		<div class="report-score">
			<span>Соответствие ГОСТу: {check.result.compliance_score}%</span>
		</div>

		<div class="report-sections">
			<h4>Разделы</h4>
			<ul>
				<li class:compliant={check.result.sections.title_page.is_compliant}>
					Титульный лист: {check.result.sections.title_page.is_compliant ? 'Соответствует' : 'Ошибки'}
					{#if check.result.sections.title_page.errors.length}
						<ul class="error-list">
							{#each check.result.sections.title_page.errors as error}
								<li>{error}</li>
							{/each}
						</ul>
					{/if}
				</li>
				<li class:compliant={check.result.sections.contents.is_compliant}>
					Содержание: {check.result.sections.contents.is_compliant ? 'Соответствует' : 'Ошибки'}
					{#if check.result.sections.contents.errors.length}
						<ul class="error-list">
							{#each check.result.sections.contents.errors as error}
								<li>{error}</li>
							{/each}
						</ul>
					{/if}
				</li>
				<li class:compliant={check.result.sections.main_content.is_compliant}>
					Основная часть: {check.result.sections.main_content.is_compliant ? 'Соответствует' : 'Ошибки'}
					{#if check.result.sections.main_content.errors.length}
						<ul class="error-list">
							{#each check.result.sections.main_content.errors as error}
								<li>{error}</li>
							{/each}
						</ul>
					{/if}
				</li>
				<li class:compliant={check.result.sections.references.is_compliant}>
					Литература: {check.result.sections.references.is_compliant ? 'Соответствует' : 'Ошибки'}
					{#if check.result.sections.references.errors.length}
						<ul class="error-list">
							{#each check.result.sections.references.errors as error}
								<li>{error}</li>
							{/each}
						</ul>
					{/if}
				</li>
			</ul>
		</div>

		<div class="report-charts">
			<div class="chart-container">
				<h4>Соответствие разделов</h4>
				<canvas id="complianceChart"></canvas>
			</div>
			<div class="chart-container">
				<h4>Типы ошибок</h4>
				<canvas id="errorChart"></canvas>
			</div>
		</div>
	</div>
</div>

<style>
    :root {
        --primary: #527358;
        --secondary: #FF8C42;
        --gray: #7f8c8d;
        --light: #f8f9fa;
        --dark: #2c3e50;
        --border-radius: 4px;
        --transition: all 0.3s ease;
    }

    .container {
        max-width: 800px;
        margin: 2rem auto;
        padding: 0 1rem;
    }

    .section-title {
        font-size: 2rem;
        color: var(--dark);
        text-align: center;
        margin-bottom: 2rem;
        position: relative;
        padding-bottom: 10px;
    }

    .section-title::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 80px;
        height: 3px;
        background: var(--secondary);
        border-radius: 2px;
    }

    .report-card {
        background: white;
        border: 1px solid #d1d5db;
        border-radius: var(--border-radius);
        padding: 1.5rem;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }

    .report-title {
        font-size: 1.5rem;
        color: var(--dark);
        margin-bottom: 0.5rem;
    }

    .report-meta {
        font-size: 0.9rem;
        color: var(--gray);
        margin-bottom: 1rem;
    }

    .report-score {
        font-size: 1.2rem;
        font-weight: 600;
        color: var(--primary);
        margin-bottom: 1.5rem;
        text-align: center;
        padding: 0.5rem;
        background: var(--light);
        border-radius: var(--border-radius);
    }

    .report-sections h4 {
        font-size: 1.2rem;
        color: var(--dark);
        margin-bottom: 1rem;
    }

    .report-sections ul {
        list-style: none;
        margin-bottom: 1.5rem;
    }

    .report-sections li {
        padding: 0.5rem 0;
        font-size: 1rem;
        color: var(--dark);
    }

    .report-sections li.compliant {
        color: var(--primary);
    }

    .error-list {
        margin-top: 0.5rem;
        padding-left: 1.5rem;
        color: #ff6b6b;
        font-size: 0.9rem;
    }

    .report-charts {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
        margin-top: 2rem;
    }

    .chart-container {
        background: var(--light);
        padding: 1rem;
        border-radius: var(--border-radius);
        border: 1px solid #d1d5db;
    }

    .chart-container h4 {
        font-size: 1.1rem;
        color: var(--dark);
        margin-bottom: 1rem;
        text-align: center;
    }

    @media (max-width: 768px) {
        .report-charts {
            grid-template-columns: 1fr;
        }
    }

    @media (max-width: 576px) {
        .section-title {
            font-size: 1.5rem;
        }

        .report-title {
            font-size: 1.2rem;
        }

        .report-score {
            font-size: 1rem;
        }
    }
</style>