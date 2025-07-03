
<body>
    <header class="navbar">
        <nav class="nav-links">
            <div class="logo">Логотип</div>
            <a href="#" class="nav-link">О нас</a>
            <a href="#" class="nav-link">Контакты</a>
            <a href="#" class="nav-link">Подписка</a>
        </nav>
        <div class="container">
            <div class="center">
              <button class="btn">
                <svg width="180px" height="60px" viewBox="0 0 180 60" class="border">
                  <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
                  <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
                </svg>
                <span>Личный кабинет</span>
              </button>
            </div>
        </div>
    </header>
    
</body>
<hr> 

<slot/>
<footer class="transparent-footer">
    <div class="footer-1">
        <div class="footer-content">
            <h3>Контакты</h3>
            <p>Email: GOST@gmail.com</p>
        </div>
        <div class="legal-documents">
            <ul>
                <li>
                    <a class="link" href="#" style="margin-bottom: 10px;">Условия использования</a> 
                </li>
                <li>
                    <a class="link" href="#">Политика конфиденциальности</a>
                </li>
            </ul>
        </div>
    </div>
    <div class="social-links">
        <a href="https://t.me/Yar4okStory"> 
            <img src="images/image 9.png" alt="Телеграмм">
        </a>
        <a href="https://vk.com/br_guu">
            <img src="images/image 10.png" alt="ВКонтакте">
        </a>
    </div>
</footer>




<style>
    body {
    margin: 0;
    font-family: Arial, sans-serif;
}

.navbar {
    display: flex;
    align-items: center;
    background-color: #527358;
    padding: 1% 10%;
    justify-content: space-between;
}

.logo {
    color: white;
    font-size: 24px;
    margin-right: 90px; /* Отступ от логотипа до ссылок */
}

.nav-links {
    display: flex;
    align-items: center;
}

.nav-link {
    color: white;
    text-decoration: none;
    margin: 0 30px; /* Отступы между ссылками */
    position: relative;
}

.center {
  width: 180px;
  height: 60px;
  position: relative;
}

svg {
  position: absolute;
  left: 0;
  top: 0;
  fill: none;
  stroke: #fff;
  stroke-dasharray: 150 480;
  stroke-dashoffset: 150;
  transition: 1s ease-in-out;
}

.container {
    justify-content: space-between;
}

.nav-link::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: -1px; /* Положение линии под ссылкой */
    height: 1px;
    background-color: #fff;
    transform: scaleX(0);
    transition: transform 0.3s ease; /* Анимация */
}

.nav-link:hover::after {
    transform: scaleX(1); /* Линия появляется при наведении */
}


/* Нижняя часть стайта */
footer {
	box-shadow: 4px 0 10px rgba(0, 0 ,0, .1) ;
}

.transparent-footer {
    background-color: white;
    color:#000000; 
    padding: 20px;
}

.footer-1 {
	display: flex;
    justify-content: space-between;
    align-items: center;
	margin-inline: 6rem;
	margin-top: 0.5rem;
	margin-bottom: 1rem;
    border-bottom: 1px solid black;
}

/* Отображение ссылок */

/* Ссылки */
.link {
	display: inline-block;
	color: #000;
	opacity: 0.6;
	text-decoration: none;
	transition: all .2s ease-in-out;
}

/* Ссылки при наведении */
.link:hover {
	opacity: 1;
	color: #000;
}

.social-links {
	margin-inline: 6rem;
}

.legal-documents ul {
    list-style-type: none;
    padding-left: 0;
}

.social-links img {
    width: 30px; /* Размер иконок */
    height: auto;
}

/* Добавляем черную линию под юридическими документами */
.legal-documents p:last-child {
    border-bottom: 1px solid black;
    padding-bottom: 5px;
}

</style>