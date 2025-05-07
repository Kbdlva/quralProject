import "./Footer.css";
import React, {useEffect, useState} from "react";
import logo from "../../../Assets/logo-footer-fordark.svg"
import instagram from "../../../Assets/instagram.svg"
import telegram from "../../../Assets/telegram.svg"
import whatsapp from "../../../Assets/whatsapp.svg"
import {Link} from "react-router-dom";
import useWindowWidth from "../../../utils/useWindowWidth";
import mob from './FooterMobile.module.css'
// import translations from "../../../utils/translates";

function Footer() {
    const translations = {
        en: {
            qural_tagline: "QURAL – Platform for Effective Learning Management",
            qural_description: "Qural is a modern Learning Management System (LMS) built to simplify teaching and administrative tasks for educators and institutions. It helps manage courses, students, assignments, and performance — all in one intuitive platform.",
            get_platform: "Get platform",
            about_us: "About us",
            about_slide_1_title: "Tailored for Local Educational Needs",
            about_slide_1_description: "Qural is built with a deep understanding of the educational systems in Kazakhstan and similar regions. It reflects local workflows, academic structures, and language preferences, making it easier for institutions to adopt without unnecessary customization.",
            about_slide_2_title: "Simple and Intuitive Interface",
            about_slide_2_description: "Designed with ease of use in mind, Qural offers a clean and intuitive interface for teachers, students, and administrators. Even users with minimal tech experience can navigate the platform comfortably, reducing training time and support needs.",
            about_slide_3_title: "Centralized Course and Student Management",
            about_slide_3_description: "Qural streamlines course planning, student enrollment, assignment tracking, and grading — all in one place. This centralization saves time and improves communication between educators and learners, making academic management more efficient.",
            about_slide_4_title: "Lightweight and Customizable Architecture",
            about_slide_4_description: "Unlike bulky, one-size-fits-all systems, Qural is lightweight and modular. Educational institutions can easily scale it, integrate their branding, or add features without overhauling the entire platform.",
            team: "Team",
            reviews: "Reviews",
            contacts: "Contacts",
            phone_number: "Phone number",
            receive_consultation: "Receive consultation",
            price_packages: "Price Packages",
            choose_plan_heading: "Choose the Right Plan for Your Institution",
            choose_plan_description: "Flexible pricing that fits every organization — whether you're a private tutor, educational center, or university. All plans include full access to Qural's features, technical support, and personalized onboarding to help you get started smoothly.",
            plan_standard: "Standard",
            duration_for_6_months: "for 6 months",
            price: "Price",
            technical_support: "Technical support",
            always_in_touch: "Always in touch",
            personalized_onboarding: "Personalized onboarding",
            choose: "Choose",
            monthly: "Monthly",
            annually: "Annually",
            per_month: "per month",
            per_year: "per year",
            available_for_a_year: "available for a year",
            available_for_2_years: "available for 2 years",
            faqs: "The FAQs",
            help_center: "Help center",
            help_center_description: "Find answers to common questions about Qural and how it can help you manage your educational process with ease.",
            support: "Support",
            support_description: "We’re here to help you every step of the way. At Qural, customer support is a top priority. Whether you’re just getting started or need help managing your courses, our team is always ready to assist. We offer: Technical support via chat, email, and phone. Personalized onboarding for smooth setup. Regular check-ins to ensure your system runs smoothly.",
            faq_1_question: "Is there a free trial available?",
            faq_1_answer: "Yes! Qural offers a free trial period so you can explore all core features before committing. No credit card required — just sign up and get started right away.",
            faq_2_question: "Who can use Qural?",
            faq_2_answer: "Qural is designed for a wide range of users: individual tutors, educational centers, schools, and universities. Our platform scales to fit your institution’s size and structure.",
            faq_3_question: "What features are included?",
            faq_3_answer: "All plans include essential LMS tools: student registration, assignment management, grading, and analytics. Personalized onboarding and technical support are also included.",
            faq_4_question: "Do I need technical skills to use Qural?",
            faq_4_answer: "Not at all. Qural is built to be user-friendly and intuitive. If you need help, our support team is always ready to assist, and onboarding is fully guided.",
            faq_5_question: "Can I upgrade or cancel my subscription anytime?",
            faq_5_answer: "Yes. You can upgrade, downgrade, or cancel your plan at any time through your admin dashboard. No hidden fees or penalties",
            promo_video: "Promo video",
        },
        ru: {
            qural_tagline: "QURAL – Платформа эффективного управления обучением",
            qural_description: "Qural — это современная система управления обучением (LMS), созданная для упрощения преподавательских и административных задач для преподавателей и учебных заведений. Она помогает управлять курсами, студентами, заданиями и результатами — всё в одной интуитивно понятной платформе.",
            get_platform: "Получить платформу",
            about_us: "О нас",
            about_slide_1_title: "Адаптировано под местные образовательные потребности",
            about_slide_1_description: "Qural создан с глубоким пониманием образовательных систем Казахстана и схожих регионов. Он отражает местные процессы, академические структуры и языковые предпочтения, что упрощает внедрение без лишней кастомизации.",
            about_slide_2_title: "Простой и интуитивно понятный интерфейс",
            about_slide_2_description: "Qural разработан с учетом простоты использования и предлагает чистый, интуитивно понятный интерфейс для преподавателей, студентов и администраторов. Даже пользователи с минимальным техническим опытом могут легко ориентироваться в платформе, что снижает время на обучение и потребность в поддержке.",
            about_slide_3_title: "Централизованное управление курсами и студентами",
            about_slide_3_description: "Qural упрощает планирование курсов, запись студентов, отслеживание заданий и оценивание — все в одном месте. Эта централизация экономит время и улучшает коммуникацию между преподавателями и обучающимися, делая управление учебным процессом более эффективным.",
            about_slide_4_title: "Легкая и настраиваемая архитектура",
            about_slide_4_description: "В отличие от громоздких универсальных систем, Qural легкий и модульный. Образовательные учреждения могут легко масштабировать его, интегрировать свой брендинг или добавлять функции без полной переработки платформы.",
            team: "Команда",
            reviews: "Отзывы",
            contacts: "Контакты",
            phone_number: "Номер телефона",
            receive_consultation: "Получить консультацию",
            price_packages: "Тарифные пакеты",
            choose_plan_heading: "Выберите подходящий план для вашего учреждения",
            choose_plan_description: "Гибкая ценовая политика, подходящая для любого учреждения — будь то частный репетитор, образовательный центр или университет. Все тарифы включают полный доступ к функциям Qural, техническую поддержку и персонализированное внедрение для комфортного старта.",
            plan_standard: "Стандарт",
            duration_for_6_months: "На 6 месяцев",
            price: "Цена",
            technical_support: "Техническая поддержка",
            always_in_touch: "Постоянная связь",
            personalized_onboarding: "Персонализированное сопровождение",
            choose: "Выбрать",
            monthly: "Ежемесячный",
            annually: "Годовой",
            per_month: "/месяц",
            per_year: "/год",
            available_for_a_year: "Доступен на 1 год",
            available_for_2_years: "Доступен на 2 года",
            faqs: "Часто задаваемые вопросы",
            help_center: "Центр помощи",
            help_center_description: "Найдите ответы на часто задаваемые вопросы о Qural и о том, как он может помочь вам легко управлять образовательным процессом.",
            support: "Поддержка",
            support_description: "Мы здесь, чтобы помочь вам на каждом шаге. В Qural поддержка клиентов является приоритетом. Независимо от того, начинаете ли вы только использовать систему или нуждаетесь в помощи в управлении курсами, наша команда всегда готова помочь. Мы предлагаем: техническую поддержку через чат, email и телефон. Персонализированное внедрение для легкой настройки. Регулярные проверки, чтобы убедиться, что ваша система работает без сбоев.",
            faq_1_question: "Доступен ли бесплатный пробный период?",
            faq_1_answer: "Да! Qural предлагает бесплатный пробный период, чтобы вы могли опробовать все основные функции перед покупкой. Банковская карта не требуется — просто зарегистрируйтесь и начинайте.",
            faq_2_question: "Кто может использовать Qural?",
            faq_2_answer: "Qural предназначен для широкого круга пользователей: индивидуальных репетиторов, образовательных центров, школ и университетов. Наша платформа масштабируется в соответствии с размером и структурой вашего учебного заведения.",
            faq_3_question: "Какие функции включены?",
            faq_3_answer: "Все тарифы включают основные инструменты LMS: регистрацию студентов, управление заданиями, оценивание и аналитику. Также включены персонализированное введение в систему и техническая поддержка.",
            faq_4_question: "Нужно ли иметь технические навыки для использования Qural?",
            faq_4_answer: "Совсем нет. Qural разработан так, чтобы быть удобным и интуитивно понятным. Если вам нужна помощь, наша команда поддержки всегда готова помочь, а ввод в систему полностью сопровождается.",
            faq_5_question: "Могу ли я в любой момент изменить тариф или отменить подписку?",
            faq_5_answer: "Да. Вы можете обновить, понизить или отменить свой тариф в любой момент через панель администратора. Без скрытых сборов или штрафов.",
            promo_video: "Рекламное видео",
        },
        kk: {
            qural_tagline: "QURAL – Тиімді оқытуды басқару платформасы",
            qural_description: "Qural — бұл оқытушылар мен оқу орындарына арналған оқыту мен әкімшілік тапсырмаларды жеңілдету үшін жасалған заманауи оқу процесін басқару жүйесі (LMS). Ол курстарды, студенттерді, тапсырмаларды және нәтижелерді басқаруға көмектеседі — барлығы бір интуитивті платформада.",
            get_platform: "Платформаны алу",
            about_us: "Біздің жайлы",
            about_slide_1_title: "Жергілікті білім беру қажеттіліктеріне бейімделген",
            about_slide_1_description: "Qural Қазақстан мен ұқсас аймақтардағы білім беру жүйелерін терең түсіне отырып жасалған. Ол жергілікті процестерді, академиялық құрылымдарды және тілдік қалауларды ескереді, бұл оқу орындарына оны қосымша бейімдеусіз оңай енгізуге мүмкіндік береді.",
            about_slide_2_title: "Қарапайым және түсінікті интерфейс",
            about_slide_2_description: "Қолданудың қарапайымдылығын ескере отырып жасалған Qural мұғалімдер, студенттер және әкімшілер үшін таза және түсінікті интерфейс ұсынады. Тіпті техникалық білімі аз пайдаланушылар да платформаны оңай пайдалана алады, бұл оқыту уақыты мен қолдау қажеттілігін азайтады.",
            about_slide_3_title: "Курстар мен студенттерді орталықтандырылған басқару",
            about_slide_3_description: "Qural курс жоспарлауды, студенттерді тіркеуді, тапсырмаларды бақылауды және бағалауды бір жерде оңтайландырады. Бұл орталықтандыру уақытты үнемдейді және оқытушылар мен студенттер арасындағы байланысты жақсартады, академиялық басқаруды тиімдірек етеді.",
            about_slide_4_title: "Жеңіл және бапталатын архитектура",
            about_slide_4_description: "Қомақты және әмбебап жүйелерден айырмашылығы, Qural жеңіл және модульдік болып табылады. Білім беру мекемелері оны оңай масштабтай алады, брендті интеграциялайды немесе барлық платформаны жаңартпай-ақ жаңа мүмкіндіктер қосады.",
            team: "Команда",
            reviews: "Пікірлер",
            contacts: "Байланыс деректері",
            phone_number: "Телефон нөмірі",
            receive_consultation: "Кеңес алу",
            price_packages: "Баға жоспарлары",
            choose_plan_heading: "Мекемеңізге сәйкес жоспарды таңдаңыз",
            choose_plan_description: "Икемді баға саясаты кез келген ұйымға сәйкес келеді — жеке мұғалім, білім беру орталығы немесе университет болсаңыз да. Барлық тарифтер Qural функцияларына толық қолжетімділікті, техникалық қолдауды және ыңғайлы бастау үшін дербестендірілген бейімдеуді қамтиды.",
            plan_standard: "Стандарт",
            duration_for_6_months: "6 айға арналған",
            price: "Бағасы",
            technical_support: "Техникалық қолдау",
            always_in_touch: "Әрдайым байланыста",
            personalized_onboarding: "Жекелендірілген онбординг",
            choose: "Таңдау",
            monthly: "Ай сайынғы",
            annually: "Жыл сайынғы",
            per_month: "/ай",
            per_year: "/жыл",
            available_for_a_year: "1 жылға қолжетімді",
            available_for_2_years: "2 жылға қолжетімді",
            faqs: "Жиі қойылатын сұрақтар",
            help_center: "Көмек орталығы",
            help_center_description: "Qural туралы және оны білім беру процесін жеңіл басқаруға қалай көмектесетіні туралы жиі қойылатын сұрақтарға жауаптарды табыңыз.",
            support: "Қолдау",
            support_description: "Біз сізге әр қадамда көмектесуге дайынбыз. Qural-да тұтынушыларды қолдау — басты басымдық. Егер сіз жаңа бастасаңыз немесе курстарыңызды басқаруда көмек қажет болса, біздің команда әрдайым көмек көрсетуге дайын. Біз келесі қызметтерді ұсынамыз: Чат, email және телефон арқылы техникалық қолдау. Қарапайым орнату үшін жеке бейімделу. Жүйеңіздің дұрыс жұмыс істеуін қамтамасыз ету үшін тұрақты тексерулер.",
            faq_1_question: "Тегін сынақ мерзімі бар ма?",
            faq_1_answer: "Иә! Qural негізгі функциялармен толық танысып шығу үшін тегін сынақ мерзімін ұсынады. Несие картасы қажет емес — жай ғана тіркеліп, бірден бастаңыз.",
            faq_2_question: "Qural жүйесін кім пайдалана алады?",
            faq_2_answer: "Qural жеке мұғалімдерге, білім беру орталықтарына, мектептерге және университеттерге арналған. Біздің платформа оқу орныңыздың көлемі мен құрылымына бейімделе алады.",
            faq_3_question: "Қандай мүмкіндіктер қамтылған?",
            faq_3_answer: "Барлық жоспарлар негізгі LMS құралдарын қамтиды: студенттерді тіркеу, тапсырмаларды басқару, баға қою және аналитика. Сондай-ақ, жүйеге бейімделуге көмектесу және техникалық қолдау ұсынылады.",
            faq_4_question: "Qural жүйесін пайдалану үшін техникалық дағдылар қажет пе?",
            faq_4_answer: "Қайтадан, техникалық дағдылар қажет емес. Qural пайдаланушыға ыңғайлы және интуитивті түрде жасалған. Егер көмек қажет болса, біздің қолдау тобы әрдайым көмек көрсетуге дайын, ал жүйеге енгізу толық басшылықпен өтеді.",
            faq_5_question: "Жазылымды кез келген уақытта жаңарта аламын ба немесе тоқтата аламын ба?",
            faq_5_answer: "Иә. Сіз кез келген уақытта әкімші тақтасы арқылы жоспарыңызды жаңарта, төмендете немесе тоқтата аласыз. Жасырын төлемдер мен айыппұлдар жоқ.",
            promo_video: "Жарнама видеосы",
        },
    };
    const t = translations[localStorage.getItem('lang')];
    const width = useWindowWidth();


    // const t = translations[localStorage.getItem('lang')];

    if (width < 400){
        return (
            <div className={mob.wrap}>
                <div className={mob.logo}>
                    <img src={logo} alt={"logo"}/>
                    {t.qural_tagline}
                </div>
                <div className={mob.links}>
                    <span>
                        Qural
                    </span>
                    <Link to={"/price"} className={mob.link}>Price</Link>
                    <Link to={"/faq"} className={mob.link}>FAQ</Link>
                </div>
                <div className={mob.links}>
                    <span>
                        {t.contacts}
                    </span>
                    <p>
                        +7 (777) 777 77 77
                    </p>
                    <p>
                        sales@qural.kz
                    </p>
                </div>
                <div className={mob.media}>
                    <img src={instagram} alt={"instagram"}/>
                    <img src={telegram} alt={"telegram"}/>
                    <img src={whatsapp} alt={"whatsapp"}/>
                </div>
                <div className={mob.phone}>
                    <div className={mob.input}>
                        {t.phone_number}
                        <input
                            type="tel"
                            placeholder={"+7 (777) 777 77 77"}
                        />
                    </div>
                    <button>
                        {t.receive_consultation}
                    </button>
                </div>
            </div>
        );
    }
  return (
    <footer className="footer">
      <div className="footer-logo">
      <img src={logo} alt="Company Logo"/>
        <p>{t.qural_tagline || "newddadsdffF"}</p>
        <div className="media">
            <img src={instagram} alt="instagram"/>
            <img src={telegram} alt="telegram"/>
            <img src={whatsapp} alt="whatsapp"/>
        </div>

        </div>
        <div className="info">
            <div className="horizonal">
            <div className="info-upper">
            <div className="info-left">
                <ul className="footer-links">
                    <li className="mini-title">Qural</li>
                    <Link to={"/price"} className={"link"}>Price</Link>
                    <Link to={"/faq"} className={"link"}>FAQ</Link>
                </ul>
          </div>
          <div className="info-right">
                <ul className="footer-links">
                    <li className="mini-title">{t.contacts}</li>
                    <li><Link to="/terms">+7 (777) 777 77 77</Link></li>
                    <li><Link to="/contact">sales.@qural.kz</Link></li>
                </ul>
            </div>
            </div>
            <div className="input-container">
                <p>{t.phone_number}</p>
                <input type="tel" placeholder="+7 (777) 777 77 77" className="number-input"></input>
                <button className="submit-btn">{t.receive_consultation}</button>
            </div>
            </div>


            <div className="info-down">
          </div>

        </div>

    </footer>
  );
}

export default Footer;


