export default {
    ru: {
        logo: "Дневник",
        settings: "Настройки",
        home: "Главная",
        profile: "Профиль",
        about: "О нас",
        sign_out: "Выход",
        copyright: "ВГТУ, 2021",
        schedule: "Расписание",
        teachers: "Преподаватели",
        search: "Поиск",
        students: "Студенты",
        create: "Создать",
        course: "Курс",
        parameter: "Параметер",
        change: "Изменить",
        add: "Добавить",
        delete: "Удалить",

        university: "Университет",
        users: "Пользователи",
        information: "Информация",
        admins: "Администраторы",

        username: "Имя пользователя",
        password: "Пароль",
        student_number: "Номер зачетной книжки",

        first_name: "Имя",
        middle_name: "Отчество",
        last_name: "Фамилия",
        nationality: "Национальность",
        gender: "Пол",
        birth_date: "Дата рождения",
        birth_place: "Место рождения",
        school: "Школа",
        address: "Адрес",
        medical_group: "Медицинская группа",
        diagnosis: "Диагноз",
        group: "Группа",
        teacher: "Преподаватель",
        faculty: "Факультет",
        id: "ID",

        cancel: "Отмена",
        delete_msg: "Вы действительно хотите удалить пользователей?",

        phone: "Телефон",
        post: "Должность",

        root: "Установить как корневой",

        root_admin: "Корневой администратор",

        welcome_back: "Добро пожаловать!",

        sign_in: "Войти",

        auth_error: "Неверное имя пользователя или пароль",

        show_students: "Показать студентов",

        add_faculty: "Добавить факультет",

        add_group: "Добавить группу",

        faculty_name: "Название факультета",

        group_name: "Название группы",

        edit: "Редактировать",

        delete_faculty_msg: "Вы действительно хотите удалить факультет?",

        delete_group_msg: "Вы действительно хотите удалить группу?",

        upload_schedule: "Загрузить",

        del_msg: "Действительно хотите удалить студента?",

        ad_msg: "Действительно хотите добавить студента?",

        user_with_username: "Пользователь с именем:",

        not_registered: "не зарегистрирован:",

        registered: "успешно зарегистрирован.",

        unsupported_format: "Для регистрации пользователей поддерживаются документы только в формате xlsx!",

        allowed_characters: "Разрешенные символы: '+', '-', '+-'",

        physical_development: {
            name: "Физическое развитие",
            full_name: "Физическое развитие и здоровье",
            parameters: [
                { name: "Длина тела (рост), см", id: 1 },
                { name: "Масса тела (вес), кг", id: 2 },
                { name: "Весоростовой индекс Кетле, г/см", id: 3 },
                { name: "Окружность грудной клетки, см (пауза)", id: 4 },
                { name: "Окружность грудной клетки, см (на выдохе)", id: 5 },
                { name: "Окружность грудной клетки, см (на вдохе)", id: 6 },
                { name: "Окружность талии, см", id: 7 },
                { name: "Осанка (тип, степень сколиоза)", id: 8 },
                { name: "Жизненная емкость легких", id: 9 },
                { name: "Сила кисти, кг (правой)", id: 10 },
                { name: "Сила кисти, кг (левой)", id: 11 },
                { name: "Ортостатическая проба, уд/мин", id: 12 },
                { name: "Проба Штанге, с", id: 13 },
                { name: "Проба Генчи, с", id: 14 },
                { name: "Проба Мартине–Кушелевского (20 приседаний за 30 с) ЧСС (исх.), уд/мин", id: 15 },
                { name: "Проба Мартине–Кушелевского (20 приседаний за 30 с) ЧСС после приседаний, уд/мин", id: 16 },
                { name: "Проба Мартине–Кушелевского (20 приседаний за 30 с) восстановление,минута", id: 17 },
                { name: "Частота сердечных сокращений, уд/мин", id: 18 },
                { name: "Артериальное давление, мм рт. ст. систолическое", id: 19 },
                { name: "Артериальное давление, мм рт. ст. диастолическое", id: 20 },
                { name: "Артериальное давление, мм рт. ст. пульсовое давление", id: 21 },
                { name: "Количество учебных занятий,  пропущенных по болезни", id: 22 }
            ]
        },
        physical_fitness: {
            name: "Физическая подготовка",
            full_name: "Физическая подготовленность",
            parameters: [
                { name: "Сгибание и разгибание рук в упоре лежа, раз", id: 23 },
                { name: "Лежа на спине, удержание ног над полом, с", id: 24 },
                { name: "Теппинг–тест, точек", id: 25 },
                { name: "Бег на месте в течение 10 с, шагов", id: 26 },
                { name: "Полуприсед в статике, с", id: 27 },
                { name: "Подтягивание на перекладине, раз", id: 28 },
                { name: "«Планка», с", id: 29 },
                { name: "Наклон вперед из исходного положения сидя, см", id: 30 },
                { name: "Прыжок в длину с места, см", id: 31 }
            ]
        },
        lifestyle: {
            name: "Образ жизни",
            full_name: "Здоровый образ жизни и отношение к своему здоровью",
            parameters: [
                { name: "Выполнение утренней зарядки (физических упражнений, бега и др.)", id: 32 },
                { name: "Занятие физическими упражнениями в свободное время (1 час и более) самостоятельно, в группах ОФП, фитнес-группах, в спортивных секциях, на тренажерах, и др.)", id: 33 },
                { name: "Употребление алкогольных напитков", id: 34 },
                { name: "Употребление галлюциногенных, психотропных, токсических и др. веществ", id: 35 },
                { name: "Курение", id: 36 },
                { name: "Употребление не менее 1,5 л чистой воды", id: 37 },
                { name: "Чтение литературы или просмотр передач о здоровье", id: 38 },
                { name: "Пользование компьютерной техникой от 2 часов и более непрерывно", id: 39 },
                { name: "Посещение парного отделения, сауны", id: 40 },
                { name: "Принятие душа перед сном", id: 41 },
                { name: "Закаливающие процедуры", id: 42 },
                { name: "Пребывание на свежем воздухе не менее 2 часов", id: 43 },
                { name: "Негативное настроение (стрессы, депрессии, апатия и т.п.)", id: 44 },
                { name: "Ночной сон не более 5-6 часов", id: 45 },
                { name: "Прием пищи 1-2 раза в день, чувство голода", id: 46 },
                { name: "Преобладание в приемах пищи жирных  и (или) кондитерских продуктов", id: 47 },
                { name: "Болел простудными заболеваниями (насморк, ОРЗ, ангина и др.), дней", id: 48 },
            ]
        },
        control_exercise: {
            name: "Нормативы",
            full_name: "Контрольные упражнения и тесты",
            parameters: [
                { name: "Штрафные броски в корзину, попаданий (баскетбол)", id: 49 },
                { name: "Ведение мяча (двухшажная техника), попаданий (баскетбол)", id: 50 },
                { name: "Техника быстрого ведения мяча (баскетбол), с", id: 51 },
                { name: "Передача мяча двумя руками над собой, передач (волейбол)", id: 52 },
                { name: "Верхняя передача мяча в парах, передач (волейбол)", id: 53 },
                { name: "Нижняя передача мяча в парах, передач (волейбол)", id: 54 },
                { name: "Подача мяча через сетку, подач (волейбол)", id: 55 },
                { name: "Дистанция 25 м, в/ст, с (плавание)", id: 56 },
                { name: "Дистанция 50 м, в/ст, с (плавание)", id: 57 },
                { name: "Дистанция 100 м, комплекс, с (плавание)", id: 58 },
                { name: "Бег 100 м, с", id: 59 },
                { name: "Бег 500 м, с", id: 60 },
                { name: "Бег 1000 м, с", id: 61 },
            ]
        },

        first_course_beginning: "Начало 1-го курса",
        semester_1: "Конец 1-го семестра",
        semester_2: "Конец 2-го семестра",
        second_course_beginning: "Начало 2-го курса",
        semester_3: "Конец 3-го семестра",
        semester_4: "Конец 4-го семестра",
        third_course_beginning: "Начало 3-го курса",
        semester_5: "Конец 5-го семестра",
        semester_6: "Конец 6-го семестра",
        fourth_course_beginning: "Начало 4-го курса",
        semester_7: "Конец 7-го семестра",
        semester_8: "Конец 8-го семестра",

        september: "Сентябрь",
        october: "Октябрь",
        november: "Ноябрь",
        december: "Декабрь",
        january: "Январь",
        february: "Февраль",
        march: "Март",
        april: "Апрель",
        may: "Май",
        june: "Июнь",
        july: "Июль",
        august: "Август",

        result: "результат",
        rating: "рейтинг",

        types: [
            { name: "Физическое развитие", id: 1 },
            { name: "Физическая подготовка", id: 2 },
            { name: "Образ жизни", id: 3 },
            { name: "Нормативы", id: 4 },
        ],

        parameter_type: "Тип параметра",

        incorrect_password: "Пароль должен состоять из 8-32 символов, включая хотя бы одну строчную букву, одну заглавную букву, одну цифру и один символ, например !@#$%_",
		incorrect_username: "Имя пользователя должно быть 3-20 символов и может содержать только буквенно-цифровые символы или отдельные дефисы и не может начинаться или заканчиваться дефисом",
		exists_username: "Это имя пользователя уже занято, пожалуйста, выберите другое",

        genders: [
            { name: "Женщина", id: 0 },
            { name: "Мужчина", id: 1 }
        ],

        no_schedule : "Расписание еще не добавлено администратором",

        register_users: "Зарегистрировать пользователей",

        rule: "Как заполнять",

    },
    en: {
        logo: "Journal",
        settings: "Settings",
        home: "Home",
        profile: "Profile",
        about: "About",
        sign_out: "Sign out",
        copyright: "VSTU, 2021",
        schedule: "Schedule",
        teachers: "Teachers",
        search: "Search",
        students: "Students",
        create: "Create",
        course: "Course",
        parameter: "Parameter",
        change: "Change",
        add: "Add",
        delete: "Remove",

        university: "University",
        users: "Users",
        information: "Information",
        admins: "Admins",

        username: "Username",
        password: "Password",
        student_number: "Student number",

        first_name: "First name",
        middle_name: "Middle name",
        last_name: "Last name",
        nationality: "Nationality",
        gender: "Gender",
        birth_date: "Birth date",
        birth_place: "Birth place",
        school: "School",
        address: "Address",
        medical_group: "Medical group",
        diagnosis: "Diagnosis",
        group: "Group",
        teacher: "Teacher",
        faculty: "Faculty",
        id: "ID",

        cancel: "Cancel",
        delete_msg: "Do you really want to delete users?",

        phone: "Phone",
        post: "Post",

        root: "Set as root",

        root_admin: "Root admin",

        welcome_back: "Welcome back!",

        sign_in: "Sign in",

        auth_error: "The username or password you entered is incorrect",

        show_students: "Show students",

        add_faculty: "Add faculty",

        add_group: "Add group",

        faculty_name: "Faculty name",

        group_name: "Group name",

        edit: "Edit",

        delete_faculty_msg: "Do you really want to delete faculty?",

        delete_group_msg: "Do you really want to delete group?",

        upload_schedule: "Upload",

        del_msg: "Do you really want to delete the student?",

        ad_msg: "Do you really want to add the student?",

        user_with_username: "User with name:",

        not_registered: "not registered:",

        registered: "successfully registered.",

        unsupported_format: "To register users, only documents in xlsx format are supported!",

        allowed_characters: "Allowed characters: '+', '-', '+-'",

        rule: "Filling rules",

        physical_development: {
            name: "Physical development",
            full_name: "Physical development and health",
            parameters: [
                { name: "Height, cm", id: 1 },
                { name: "Weight, kg", id: 2 },
                { name: "Ketle index, g/cm", id: 3 },
                { name: "Chest circumference, cm (pause)", id: 4 },
                { name: "Chest circumference, cm (exhalation)", id: 5 },
                { name: "Chest circumference, cm (inhalation)", id: 6 },
                { name: "Waist circumference, cm", id: 7 },
                { name: "Posture (type, degree of scoliosis)", id: 8 },
                { name: "Vital capacity lung", id: 9 },
                { name: "Strength of the hand, kg (right)", id: 10 },
                { name: "Strength of the hand, kg (left)", id: 11 },
                { name: "Orthostatic test, beats/min", id: 12 },
                { name: "Stange test, s", id: 13 },
                { name: "Genci test, s", id: 14 },
                { name: "Martin Kushelevsky test(20 squats 30 c) Heart rate (initial), beats/min", id: 15 },
                { name: "Martin Kushelevsky test(20 squats 30 c) Heart rate (after squats), beats/min", id: 16 },
                { name: "Martin Kushelevsky test(20 squats 30 c) Heart rate (recovery - one minute), beats/min", id: 17 },
                { name: "Heart rate, beats/min", id: 18 },
                { name: "Systolic blood pressure, mm Hg. Art.", id: 19 },
                { name: "Diastolic blood pressure, mm Hg. Art.", id: 20 },
                { name: "Pulse blood pressure, mm Hg. Art.", id: 21 },
                { name: "Number of training sessions missed due to illness", id: 22 },
            ]
        },
        physical_fitness: {
            name: "Physical fitness",
            full_name: "Physical fitness",
            parameters: [
                { name: "Flexion and extension of hands in an emphasis lying", id: 23 },
                { name: "Lyind on the back, keeping your feet above the floor, s", id: 24 },
                { name: "Tapping test, points", id: 25 },
                { name: "Running in place for 10 seconds, steps", id: 26 },
                { name: "Half-sided in statics, s", id: 27 },
                { name: "Pulling on the bar", id: 28 },
                { name: "\"Planck\", s", id: 29 },
                { name: "Bending forward from a sitting position, cm", id: 30 },
                { name: "Long jump from the place, cm", id: 31 }
            ]
        },
        lifestyle: {
            name: "Lifestyle",
            full_name: "Healthy lifestyle and attitude towards one's health",
            parameters: [
                { name: "Performing morning exercises", id: 32 },
                { name: "Physical exercise in free time (1 hour or more) on their own, in groups of ОФП, fitness groups, sports sections, simulators, etc.)", id: 33 },
                { name: "Drinking alcoholic beverages", id: 34 },
                { name: "The use of hallucinogenic, psychotropic, toxic, and other substances", id: 35 },
                { name: "Smoking", id: 36 },
                { name: "Consumption of at least 1.5 liters of clean water", id: 37 },
                { name: "Reading the literature or watching the health programs", id: 38 },
                { name: "Use of computer equipment from 2 hours or more continuously", id: 39 },
                { name: "Visit to the steam room, saunas", id: 40 },
                { name: "Taking a shower before going to sleep", id: 41 },
                { name: "Quenching procedures", id: 42 },
                { name: "Stay in the open air for at least 2 hours", id: 43 },
                { name: "Negative mood (stress, depression, apathy, etc.)", id: 44 },
                { name: "Sleeping no more than 5-6 hours", id: 45 },
                { name: "Eating 1-2 times a day, feeling hungry", id: 46 },
                { name: "Prevalence in meals of fatty and (or) confectionery products", id: 47 },
                { name: "He was ill with colds (runny nose, acute respiratory disease, tonsillitis, etc.), days", id: 48 },
            ]
        },
        control_exercise: {
            name: "Control exercises",
            full_name: "Control exercises and tests",
            parameters: [
                { name: "Penalty shots in the basket, hits (basketball)", id: 49 },
                { name: "Keeping the ball (two-way technique), hits (basketball)", id: 50 },
                { name: "Technique of fast running the ball (basketball), s", id: 51 },
                { name: "Passing the ball with both hands over yourself, gear (volleyball)", id: 52 },
                { name: "Upper gear of the ball in pairs, gears (volleyball)", id: 53 },
                { name: "Lower transfer of the ball in pairs, transfers (volleyball)", id: 54 },
                { name: "Feeding the ball through the net, innings (volleyball)", id: 55 },
                { name: "Distance 25 m, in / st, with (swimming)", id: 56 },
                { name: "Distance 50 m, in / st, with (swimming)", id: 57 },
                { name: "Distance 100 m, complex, with (swimming)", id: 58 },
                { name: "Running 100 m, s", id: 59 },
                { name: "Running 500 m, s", id: 60 },
                { name: "Running 1000 m, s", id: 61 },
            ]
        },
  
        first_course_beginning: "The beginning of the 1st course",
        semester_1: "The end of the 1st semester",
        semester_2: "The end of the 2nd semester",
        second_course_beginning: "The beginning of the 2nd course",
        semester_3: "The end of the 3rd semester",
        semester_4: "The end of the 4th semester",
        third_course_beginning: "The beginning of the 3rd course",
        semester_5: "The end of the 5th semester",
        semester_6: "The end of the 6th semester",
        fourth_course_beginning: "The beginning of the 4th course",
        semester_7: "The end of the 7th semester",
        semester_8: "The end of the 8th semester",

        september: "September",
        october: "October",
        november: "November",
        december: "December",
        january: "January",
        february: "February",
        march: "March",
        april: "April",
        may: "May",
        june: "June",
        july: "July",
        august: "August",

        result: "result",
        rating: "rating",

        types: [
            { name: "Physical development", id: 1 },
            { name: "Physical fitness", id: 2 },
            { name: "Lifestyle", id: 3 },
            { name: "Control exercises", id: 4 },
        ],

        parameter_type: "Parameter type",

        incorrect_password: "Password must be 8-32 characters, include at least one lowercase letter, one uppercase letter, one digit and one symbol such as !@#$%_",
		incorrect_username: "Username must be 3-20 characters and may only contain alphanumeric characters or single hyphens, and cannot begin or end with a hyphen",
		exists_username: "This username is already taken, please choose another one",

        genders: [
            { name: "Woman", id: 0 },
            { name: "Man", id: 1 }
        ],

        no_schedule : "The schedule has not been added by the administrator",

        register_users: "Register users",
    }
};


