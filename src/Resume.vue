<script lang="ts">
import {defineComponent} from 'vue'
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import image from './assets/photo.jpg'

export default defineComponent({
  name: "Resume",
  components: {FontAwesomeIcon},
  data() {
    return {
      image
    }
  }
})
</script>

<template>
  <div class="resume">
    <div class="header twin" style="justify-content: space-between;">
      <div style="width: 70%">
        <h1>
          Назаров Владимир
        </h1>
        <p class="accent title" style="margin-bottom: 0.7rem">
          Full Stack Developer
        </p>
        <p class="info-items">
        <span class="info-item">
          <FontAwesomeIcon :icon="['fas', 'phone']"/> +7 908 218-67-16
        </span>
          <span class="info-item">
          <FontAwesomeIcon :icon="['fas', 'envelope']"/> vova24848@gmail.com
        </span>
          <span class="info-item">
            <a href="https://t.me/phoenixNazarov"><FontAwesomeIcon :icon="['fab', 'telegram']"/> phoenixNazarov</a>
        </span>
          <span class="info-item">
          <a href="https://github.com/PhoenixNazarov"><FontAwesomeIcon :icon="['fab', 'github']"/> github.com/PhoenixNazarov</a>
        </span>
          <span class="info-item">
          <FontAwesomeIcon :icon="['fas', 'location-dot']"/> Санкт-Петербург
        </span>
        </p>
      </div>
    </div>
    <div class="twin-adaptive">
      <div class="child">
        <div class="block">
          <h2>
            Summary
          </h2>
          <p>
            Опытный разработчик Python, специализирующийся на создании масштабируемых и надёжных Full Stack решений. Я
            являюсь сторонником написания чистого кода, соответствующего стандартам PEP8, и активно использую принципы
            динамической типизации. В своей работе я использую продвинутые технологии для реализации как монолитных, так
            и микросервисных архитектур. Мои ключевые навыки включают разработку, оптимизацию и администрирование
            реляционных баз данных, а также управление миграциями. Эффективно работаю с контейнеризацией приложений в
            Docker, оркестрацией через Docker Compose и автоматизацией процессов разработки с использованием GitHub
            Actions. Также имею опыт в разработке клиентских приложений с использованием TypeScript и Vue.js, а также в
            создании многофункциональных чат-ботов. Создаю детализированные инструкции для упрощения процессов
            разработки и внедрения новых функций.
          </p>
        </div>
        <div class="block">
          <h2>
            Education
          </h2>
          <p class="title">
            Программирование и Искуственный Интелект
          </p>
          <p class="accent title">
            Санкт-Петербургский национальный исследовательский университет информационных технологий, механики и оптики (ИТМО)
          </p>
          <p class="additional" style="margin-bottom: 1.5rem">
            <FontAwesomeIcon :icon="['fa', 'graduation-cap']"/>
            Магистр
            <FontAwesomeIcon style="margin-left: 1rem" :icon="['fas', 'calendar']"/>
            2025 - 2027
            <FontAwesomeIcon style="margin-left: 1rem" :icon="['fas', 'location-dot']"/>
            Санкт-Петербург
          </p>

          <p class="title">
            Прикладная Математика и Информатика
          </p>
          <p class="accent title">
            Санкт-Петербургский национальный исследовательский университет информационных технологий, механики и оптики (ИТМО)
          </p>
          <p class="additional">
            <FontAwesomeIcon :icon="['fa', 'graduation-cap']"/>
            Бакалавр
            <FontAwesomeIcon style="margin-left: 1rem" :icon="['fas', 'calendar']"/>
            2021 - 2025
            <FontAwesomeIcon style="margin-left: 1rem" :icon="['fas', 'location-dot']"/>
            Санкт-Петербург
          </p>
          <ul>
            <li>
              <p>
                Основные курсы: Математический анализ, линейная алгебра, машинное обучение, дискретная математика,
                алгоритмы и структуры данных.
              </p>
            </li>
            <li>
              <p>
                Профильные языки программирования: Я изучил и активно применял различные языки программирования, включая
                C/C++, Java, Kotlin, Clojure и Haskell. Эта многоплановость в программировании позволила мне гибко
                адаптироваться к различным технологическим стекам и эффективно решать задачи с использованием подходящих
                инструментов.
              </p>
            </li>
            <li>
              <p>
                Разработал программу для автоматизации проверки домашних заданий, которая нашла применение среди
                студентов моего курса.
              </p>
            </li>
          </ul>
        </div>
        <div class="block">
          <h2>
            Experience
          </h2>
          <div class="block">
            <p class="title">Web Developer</p>
            <div class="twin" style="justify-content: space-between;">
              <p class="accent title">ООО "Аис Тех"</p>
              <p class="additional">
                <FontAwesomeIcon :icon="['fas', 'calendar']"/>
                2024 - present
              </p>
            </div>
            <p>
              ООО "Аис Тех" - логистичкая компания, занимающаяся импортом контейнеров из-за границы.
            </p>
            <ul>
              <li>
                <p>
                  Разработал высокоэффективную систему поиска оптимального маршрута с учетом всех возможных вариантов
                  перевозки, используя графовые алгоритмы и ограниченные по длине группы.
                </p>
              </li>
              <li>
                <p>
                  Оптимизировал существующий алгоритм поиска, увеличив производительность на 70% и расширив допустимый
                  объем обрабатываемых ставок.
                </p>
              </li>
              <li>
                <p>
                  В рамках оптимизации переработал подход к задаче: вместо полного графа маршрутов команда перешла к
                  использованию агрегированных групп с ограниченной длиной.
                </p>
              </li>
              <li>
                <p>
                  Создал внутреннюю CRM в стиле Aviasales: с визуализацией маршрутов, фильтрацией по датам, соседними
                  окнами поиска и расширенными параметрами отбора.
                </p>
              </li>
              <li>
                <p>
                  Реализовал интеграцию аутентификации FastAPI-приложения с Active Directory.
                </p>
              </li>
              <li>
                <p>
                  Применил ML-подходы для извлечения и структурирования данных из коммерческих предложений в
                  PDF-формате, поступающих от сторонних поставщиков.
                </p>
              </li>
              <li>
                <p>
                  Построил CI/CD-конвейеры для автоматической упаковки и деплоя контейнеров в GitLab Registry.
                </p>
              </li>
            </ul>
          </div>
          <div class="block">
            <p class="title">FullStack Developer</p>
            <div class="twin" style="justify-content: space-between;">
              <p class="accent title">InCatalyst</p>
              <p class="additional">
                <FontAwesomeIcon :icon="['fas', 'calendar']"/>
                2022 - 2024
              </p>
            </div>
            <p>
              InCatalyst — это инновационная компания, использующая LLM для
              автоматизации создания патентов. Система интерактивно задаёт вопросы пользователям, а затем, на основе
              полученных ответов, формирует патентные заявки. Также система проводит поиск по существующим патентам и,
              учитывая найденные совпадения, адаптирует текст новой заявки.
            </p>
            <ul>
              <li>
                <p>
                  Разработал bundle приложений на Python для создания и взаимодействия большого количества
                  микросервисов.
                </p>
              </li>
              <li>
                <p>
                  Настроил интеграцию с различными базами данных (Elasticsearch, PostgreSQL, Redis) и брокерами
                  сообщений (Redis, RabbitMQ).
                </p>
              </li>
              <li>
                <p>
                  Полностью настроил инфраструктуру для проекта, включая сохранение Docker образов в Amazon ECR.
                </p>
              </li>
              <li>
                <p>
                  Реализовал систему непрерывной интеграции и развертывания (CI/CD) с использованием GitHub Actions,
                  которая автоматизировала выпуск релизов, сборку Docker образов и их развертывание в продакшен и на
                  тестовые стенды.
                </p>
              </li>
              <li>
                <p>
                  Внедрил систему логирования на основе ELK, что позволило эффективно
                  отслеживать и анализировать события.
                </p>
              </li>
              <li>
                <p>
                  Создал векторную базу данных, содержащую более 100 миллионов записей, что значительно оптимизировало
                  процессы поиска с помощью эмбедингов и сопоставления данных.
                </p>
              </li>
              <li>
                <p>
                  Ответственен за написание клиентской части основного проекта и нескольких дополнительных проектов
                  партнёров на Vue.js.
                </p>
              </li>
              <li>
                <p>
                  Разработал систему автоматического тестирования с использованием Selenium, что повысило качество и
                  надежность программного продукта.
                </p>
              </li>
              <li>
                <p>
                  Спроектировал и реализовал систему для асинхронной передачи данных от сервера к клиенту с
                  использованием Server-Sent Events (SSE).
                </p>
              </li>
            </ul>
          </div>
          <div class="block">
            <p class="title">FullStack Developer</p>
            <div class="twin" style="justify-content: space-between;">
              <p class="accent title">Prompt Admin</p>
              <p class="additional">
                <FontAwesomeIcon :icon="['fas', 'calendar']"/>
                2024 - 2024
              </p>
            </div>
            <p>
              Собственный проект, который находится в стадии активной разработки. Решение полностью сформировано
              самостоятельно и предназначено для управления несколькими существующими приложениями.
            </p>
            <ul>
              <li><p>Реализация бэкенда для логических операций приложения с интуитивно понятным пользовательским
                интерфейсом для управления и мониторинга.</p></li>
              <li><p>Всё приложение упаковано в один Docker контейнер и опубликовано на DockerHub, позволяя легко
                загружать и запускать проект.</p></li>
              <li><p>Имеется полноценная система контекстов с переменными для корректного рендеринга и автоматической
                проверки codestyle для шаблонов Jinja.</p></li>
              <li><p>Поддерживаются различные языковые модели для обработки ответов в форматах XML и JSON с возможностью
                выполнения промптов через webSocket стриминг.</p></li>
              <li><p>Разработана возможность редактирования, просмотра и модерации промптов с автоматическим
                встраиванием переменных из контекста. Включена функциональность просмотра рендеринга промптов с
                переменными, используя Jinja.</p></li>
              <li><p>В приложении реализовано хранение истории изменений промтов, а также шаблонов промптов и проектных
                переменных.</p></li>
              <li><p>Реализована возможность подключения и изменения различных языковых моделей (включая модели
                Anthropic, OpenAI и т.д.) без изменения основного кода.</p></li>
              <li><p>Каждый проект имеет собственный блог в приложение, чтобы можно было оставлять внутренние
                записи.</p></li>
              <li><p>Разработан конструктор для создания форм редактирования баз данных администрируемых приложений.</p>
              </li>
              <li><p>В случае наличия тестов в подключенном приложении, система автоматически запустит эти тесты и
                сохранит результаты исполнения для просмотра и мониторинга через админ-панель.</p></li>
              <li><p>Встроенный интерфейс для мониторинга uptime сайтов приложений.</p></li>
              <li><p>Поддержка администрирования множественных проектов с настройками ролей и доступности функционала
                для различных пользователей.</p></li>
              <li><p>Реализация и загрузка на PyPI библиотеки для удобного использования функциональности проекта в
                других приложениях.</p></li>
            </ul>
          </div>
          <div class="block">
            <p class="title">FullStack Developer</p>
            <div class="twin" style="justify-content: space-between;">
              <p class="accent title">Freelance</p>
              <p class="additional">
                <FontAwesomeIcon :icon="['fas', 'calendar']"/>
                2018 - 2021
              </p>
            </div>
            <p>
              В период работы фрилансером успешно реализовал широкий спектр проектов, использовав мои глубокие знания в
              программировании и приложил навыки в различных сферах:
            </p>
            <ul>
              <li><p>
                <span class="accent">Разработка арбитражного бота</span> для торговли криптовалютами через несколько
                бирж, что позволило
                искать и использовать ценовые различия для выгодных сделок.
              </p></li>
              <li>
                <p>
                  <span class="accent">Создание Телеграм бота</span>: один из ботов позволял пользователям временный
                  доступ к контенту, что
                  улучшило удобство и безопасность их взаимодействия.
                </p>
              </li>
              <li>
                <p>
                  <span class="accent">Создание Телеграм бота</span>: Другой бот позволял управлять добавлением и
                  ценообразованием товаров, с интеграцией платежей через криптовалюты.
                </p>
              </li>
              <li>
                <p>
                  <span class="accent">Использование Selenium для автоматизации</span>: автоматизация регистраций на
                  телекоммуникационных сайтах с возможностью множественного запуска воркеров для параллельной работы.
                </p>
              </li>
              <li><p>
                <span class="accent">Разработка плагина для умной колонки</span>: данный плагин позволял управлять
                автомобилем через голосовое управление с колонки Алиса.
              </p></li>
              <li><p>
                <span class="accent">Мультибот для различных соцсетей</span> (WhatsApp, Viber, Vk), обеспечивая
                унифицированный функционал и доступ к контенту через разные платформы.
              </p></li>
              <li><p>
                <span class="accent">Проекты парсинга</span>: наиболее значимый — парсинг зарубежного сайта с книгами
                для анализа потенциально выгодных сделок,
                достигая скорости до 500 000 записей в минуту.
              </p></li>
              <li><p>
                <span class="accent">Мониторинг и анализ</span> производительности завода через камеры и OpenCV, что
                позволило значительно улучшить контроль качества процессов.
              </p></li>
            </ul>
            <p>
              В процессе фриланса я не только разработал множество успешных проектов, но и завоевал доверие клиентов,
              что подтверждается стабильным потоком новых заданий и постоянными заказчиками. Некоторые проекты,
              созданные мной, функционируют до сих пор, а я продолжаю поддерживать и обновлять их.
            </p>
            <p>
              <a href="https://freelancehunt.com/freelancer/Phoenix_Nazarov.html">Ссылка на профиль</a>
            </p>
          </div>
          <div class="">
            <p class="title">Python/DevOps Developer</p>
            <div class="twin" style="justify-content: space-between;">
              <p class="accent title">Totalis/FundMarket</p>
              <p class="additional">
                <FontAwesomeIcon :icon="['fas', 'calendar']"/>
                2021 - 2022
              </p>
            </div>
            <p>
              В рамках работы в компании Totalis/FundMarket занимался разработкой двух инновационных приложений.
              Основной моей задачей было создание надежного бэкенда, который бы обрабатывал значительные потоки
              информации и интегрировался с технологиями машинного обучения для анализа данных пользователей.
            </p>
            <ul>
              <li><p>Полностью реализовал бэкенд для двух сервисов, который включал комплексные бизнес-логики и
                взаимодействие с внешними API.</p></li>
              <li><p>Внедрение современных методов аутентификации и безопасного доступа для пользователей и
                администраторов системы.</p></li>
              <li><p>Разработал и оптимизировал функционал для
                извлечения текста из PDF документов, что позволило
                автоматизировать обработку пользовательских данных.</p></li>
              <li><p>Был ответственен за предоставление необходимых API-эндпоинтов и документации для команды
                фронтенд-разработчиков, что обеспечивало бесперебойную среду для разработки.</p>
              </li>
              <li><p>
                Интеграция с FastAPI Lifespan для работы с воркерами: Эффективно управлял
                задачами, выполняемыми в фоновом режиме, что значительно повысило производительность сервисов.
              </p></li>
            </ul>
            <p>
              Этот опыт позволил мне глубже погрузиться в задачи по обработке больших данных и реализации сложных
              запросов в реальном времени, а также улучшить навыки в области DevOps, оптимизируя процессы непрерывной
              интеграции и развертывания приложений.
            </p>
          </div>
        </div>
      </div>
      <div class="child-2">
        <div class="block">
          <h2>
            Skills
          </h2>
          <div class="block">
            <p class="accent title ma">
              Programming
            </p>
            <p class="skill">
              <span class="item">Asynchronous</span>
              <span class="item">Parallel</span>
              <span class="item">WebSockets</span>
              <span class="item">Microservices</span>
              <span class="item">Selenium</span>
              <span class="item">Java</span>
              <span class="item">Kotlin</span>
              <span class="item">JavaScript</span>
              <span class="item">TypeScript</span>
              <span class="item">Node.js</span>
              <span class="item">SQL</span>
              <span class="item">LLM</span>
              <span class="item">ML</span>
              <span class="item">Stripe</span>
              <span class="item">Changelogs</span>
              <span class="item">Documentations</span>
              <span class="item">YouTrack</span>
              <span class="item">Jira</span>
              <span class="item">TeamCity</span>
            </p>
          </div>
          <div class="block">
            <p class="accent title ma">
              Python
            </p>
            <p class="skill">
              <span class="item">Flask</span>
              <span class="item">FastApi</span>
              <span class="item">FastStream</span>
              <span class="item">Pydantic</span>
              <span class="item">SqlModel</span>
              <span class="item">Sqlalchemy</span>
              <span class="item">Aiogram</span>
              <span class="item">Pytest</span>
              <span class="item">Poetry</span>
              <span class="item">MyPy</span>
              <span class="item">Alembic</span>
              <span class="item">Flake8</span>
              <span class="item">Asyncio</span>
              <span class="item">Jupyter</span>
              <span class="item">NumPy</span>
              <span class="item">Pandas</span>
              <span class="item">TensorFlow</span>
              <span class="item">Keras</span>
            </p>
          </div>
          <div class="block">
            <p class="accent title ma">
              Database & Services
            </p>
            <p class="skill">
              <span class="item">PostgreSQL</span>
              <span class="item">MySQL</span>
              <span class="item">Elastic Stack</span>
              <span class="item">PyPi Server</span>
              <span class="item">Redis</span>
              <span class="item">RabbitMq</span>
              <span class="item">Nginx</span>
            </p>
          </div>

          <div class="block">
            <p class="accent title ma">
              Frontend
            </p>
            <p class="skill">
              <span class="item">VueJs</span>
              <span class="item">React</span>
              <span class="item">Pinia</span>
              <span class="item">Axios</span>
              <span class="item">SSR</span>
              <span class="item">Nuxt</span>
              <span class="item">Bootstrap</span>
              <span class="item">Vuetify</span>
              <span class="item">Vite</span>
              <span class="item">Mixins</span>
              <span class="item">Jest</span>
            </p>
          </div>

          <div class="block">
            <p class="accent title ma">
              DevOps
            </p>
            <p class="skill">
              <span class="item">Docker</span>
              <span class="item">GIT</span>
              <span class="item">GitHub Actions</span>
              <span class="item">Linux</span>
              <span class="item">AWS</span>
              <span class="item">Google Cloud</span>
              <span class="item">Azure</span>
              <span class="item">Docker Compose</span>
              <span class="item">Supervisord</span>
              <span class="item">Terraform</span>
            </p>
          </div>
        </div>
        <div>
          <h2>
            Сильные стороны
          </h2>
          <div class="twin block">
            <FontAwesomeIcon class="accent strength" :icon="['fas', 'rocket']" size="lg"/>
            <div>
              <p class="title">Иницативность</p>
              <p>
                Берусь за самые сложные задачи и не боюсь преодолевать трудности. Стремлюсь всегда выполнять работу
                лучше, чем ожидается, обеспечивая высокое качество и удобство использования результатов.
              </p>
            </div>
          </div>
          <div class="twin block">
            <FontAwesomeIcon class="accent strength" :icon="['fas', 'chess-rook']" size="lg"/>
            <div>
              <p class="title">Креативность</p>
              <p>
                Получаю удовольствие от разработки масштабных проектов и интереса к анализу чужих кодов. Эффективно
                нахожу оптимальные и иногда нестандартные решения для задач.
              </p>
            </div>
          </div>
          <div class="twin block">
            <FontAwesomeIcon class="accent strength" :icon="['fas', 'clock']" size="lg"/>
            <div>
              <p class="title">Планирование</p>
              <p>
                Эффективно расставляю приоритеты и управляю временем для выполнения самых важных задач в срок.
                Организовываю свою работу так, чтобы соблюдать установленные дедлайны и достигать целей вовремя.
              </p>
            </div>
          </div>
          <div class="twin block">
            <FontAwesomeIcon class="accent strength" :icon="['fas', 'gears']" size="lg"/>
            <div>
              <p class="title">Адаптивность</p>
              <p>
                Осознаю неизбежность ошибок в процессе разработки и нацелен на их оперативное устранение. Структурирую
                проекты таким образом, чтобы можно было быстро вносить изменения или добавлять новые функции без потери
                качества и производительности.
              </p>
            </div>
          </div>
          <div class="twin block">
            <FontAwesomeIcon class="accent strength" :icon="['fas', 'brain']" size="lg"/>
            <div>
              <p class="title">Accountability</p>
              <p>
                Принимаю на себя ответственность за возможные ошибки, активно работаю над их исправлением и анализом,
                чтобы избежать повторения в будущем. Это позволяет мне постоянно совершенствоваться и повышать качество
                своей работы.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.resume {
  background-color: #ffffff;
  color: #4d4d4d;
  padding: 4rem;
  font-family: Helvetica;
}

.header {
  margin-bottom: 3.3rem;
}

.accent {
  color: #0ABAB5;
}

.title {
  font-size: 0.9rem !important;
  font-weight: 550;
}

.info-item {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}

.block {
  margin-bottom: 2.5rem;
}

.additional {
  color: rgba(0, 0, 0, 0.5);
}

.twin {
  display: flex;
}

.item {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  margin-right: 0.5rem;
  border-bottom: 1px solid black;
  white-space: pre;
  flex: 0 0 auto;
}

.strength {
  padding: 0.8rem;
  background-color: #ececec;
  border-radius: 10rem;
  margin-right: 1rem;
}

.skill {
  line-height: 1.7rem;
  flex-wrap: wrap;
  display: flex;
}

ul {
  margin: 0;
  padding-left: 20px;
}

p {
  line-height: 1.1rem;
  font-size: 0.8rem;
  margin: 0.25rem 0 0;
}


h1 {
  margin: 0 0 0.7rem;
  text-transform: uppercase;
  font-weight: 400;
}

h2 {
  font-weight: 500;
  text-transform: uppercase;
  font-size: 0.9rem;
  width: 100%;
  padding-bottom: 0.25rem;
  border-bottom: 1px solid black;
  margin: 0 0 0.7rem;
}

.ma {
  margin: 0 0 0.5rem;
}

@media (min-width: 768px) {
  .twin-adaptive {
    display: flex;
  }

  .child {
    width: 60%;
  }

  .child-2 {
    width: 40%;
    padding-left: 2rem;
  }


}

@media (max-width: 768px) {
  .profile-container {
    height: 4rem !important;
    width: 4rem !important;
  }

  .profile-image {
    height: 4rem !important;
    width: 4rem !important;
  }

  .resume {
    padding: 1rem !important;
  }
}

@media (max-width: 1060px) {
  .info-items {
    display: grid;
  }
}

.profile-container {
  height: 10rem;
  width: 10rem;
  border-radius: 20rem;
  display: inline-grid;
  overflow: hidden;
}

.profile-image {
  height: 10rem;
  width: 10rem;
  object-fit: cover;
  transform: scale(2);
}

</style>