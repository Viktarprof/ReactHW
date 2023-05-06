import AuthorizationForm from './media/AuthorizationForm.png';
import BuhOne from './media/BuhOne.png';
import CvJohn from './media/CvJohn.png';
import FakeAPI from './media/FakeAPI.png';
import todoList from './media/todoList.png';


export const education = [
    {
        id: 1,
        school: "TelRan",
        specialization: "Front-end PRO",
        about: "Научился создавать внешнюю часть сайта. Работал с HTML, CSS и JavaScript, а также создавал проекты использующие React, Redux. В рамках курса работал с базами данных, изучил SQL и mongoDB. Освоил принципы разработки продуктов в компаниях и организации командной работы. Познакомился с гибкими методологиями работы Agile, Scrum.",
        studyingTime: 'September 2022 — June 2023'
    },
    {
        id: 2,
        school: "ООО 'Образовательный цент Парка высоких технологий' ООО 'Образовательный цент Парка высоких технологий'",
        specialization: "Функциональное тестирование",
        about: " Изучил процесс проверки ПО, который выполняется вручную. Моделировал различные ситуации по тестов и фиксировал любое поведение программы, которое отличается от ожидаемого результата. ",
        studyingTime: '2017'
    },
    {
        id: 3,
        school: "Гродненский государственный университет им. Я. Купалы, Гродно",
        specialization: "Специалист в сфере туризма и гостепреемтсва",
        about: "Изучал профессию в области сферы туризма и сервиса",
        studyingTime: 'September 2008 — June 2013'
    }
];


export const workExperience = [
    {
        id: 1,
        title: "ЧТУП 'МаркТур'",
        profetions: "Менеджер по туризму",
        description: "Подбор туров. Консультация туристов. Регистрация на получение виз в консульства   Республики Польша и Литовской Республики.",
        date: 'April 2013 — June 2014'
    },
    {
        id: 2,
        title: "ОАО 'Белагроздравница' Филиал Санаторий 'Поречье'",
        profetions: "Специалист отдела маркетинга",
        description: "Реализация путевок. Консультация отдыхающих и ведение клиентской базы. Продвижение санатория на интернет площадках. Организация встреч с клиентами, проведение презентаций. Подготовка документации к тендерам. Поддержка и наполнение информацией сайта санатория. Ежедневная и ежемесячная отчетность о реализации.Исполняющий обязанности начальника отдела маркетинга.",
        date: 'June 2014 — March 2020'
    },
    {
        id: 3,
        title: "Kamienica Zamenhofa",
        profetions: "Специалист отдела маркетинга",
        description: "Ведение профиля и создание контента в соц.сетях. Реализация платных рекламных кампаний. Анализ рынка, отчетная деятельность, планирование маркетинговых мероприятий.",
        date: 'June 2021 — September 2022'
    },
];

export const skill = [
    'Работоспособность', 'HTML5', "CSS", "JavaScript","React", 'Redux', "MySQL", 'MongoDB', "Git", 'Работа в команде', 'Работа с большим объемом информации'
]



export const portfolio = [
    {
        id: 1,
        title: "John_CV",
        description: "Web-сайт, созданный в рамках поиска работы, обладает функциональностью адаптивной страницы и возможностью перехода между различными страницами. Кроме того, на данном сайте используется HashRouter, который обеспечивает более эффективную работу с URL-адресами.",
        image: CvJohn,
        link: 'https://viktarprof.github.io/CV_John/#/'
        
    },
    {
        id: 2,
        title: "TODO List",
        description: "Разработанное приложение  позволяет пользователю добавлять задачи на каждый день недели с возможностью указания важности каждой задачи. После выполнения задачи, она может быть удалена из списка. Приложение построено при помощи React. Для хранения данных в приложении используется локальное хранилище браузера (localstorage).",
        image: todoList,
        link: 'https://viktarprof.github.io/todo/'
        
    },
    {
        id: 3,
        title: "Authorization and registration form",
        description: "Был написан код, используя React, который включает функциональность авторизации и регистрации пользователей. Кроме того, на данном сайте используется HashRouter.",
        image: AuthorizationForm,
        link: 'https://viktarprof.github.io/react_authorization/#/login'
    },
    {
        id: 4,
        title: "Fake api products",
        description: "В данной работе содержится код с фиктивным IP-адресом, а также добавлен код для переключения изображений и реализации рейтинга в виде звезд.",
        image: FakeAPI,
        link: 'https://viktarprof.github.io/TelRan_frontend/Frontend/HomeWork/Tigran/HW6(product%20card)/index.html'
        
    },
    {
        id: 5,
        title: "BuhOne",
        description: "Был написан HTML-код, который включает адаптивный дизайн страницы. Кроме того, был добавлен код на JavaScript, который позволяет переключать изображения на странице.",
        image: BuhOne,
        link: 'https://viktarprof.github.io/TelRan_frontend/Frontend/HomeWork/Tigran/HW7(%D0%B2%D0%B5%D1%80%D1%81%D1%82%D0%BA%D0%B0%20%D0%BC%D0%B0%D0%BA%D0%B5%D1%82%D0%B0%2C%20JS-%D1%81%D0%BB%D0%B0%D0%B9%D0%B4%D0%B5%D1%80%2C%20%D0%91%D1%83%D1%80%D0%B3%D0%B5%D1%80%20%D0%BA%D0%BD%D0%BE%D0%BF%D0%BA%D0%B0)/index.html'
        
    },
]