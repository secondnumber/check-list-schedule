import React, {useState} from 'react';
import './App.css';

const App = () => {
    const [score, setScore] = useState(0);

    const handleChecked = (e) => {
        if (e.target.checked) {
            setScore(score + Number(e.target.value))
        }
        if (!e.target.checked) {
            setScore(score - Number(e.target.value))
        }
    };

    return (
        <div className="wrapper">
        <h1>Score: {score}</h1>
            <h3>Создание концепта</h3>
            <div className="input-group-text mb-1">
                <input type="checkbox" className="mr-3" value={10} onClick={(e) => {handleChecked(e)}}/>
                Выполнены и оформлены в виде markdown файла или документа Google Docs требования пункта "Определение потребностей пользователей"
            </div>
            <div className="input-group-text mb-1">
                <input type="checkbox" className="mr-3" value={10} onClick={(e) => {handleChecked(e)}}/>
                Идеи по улучшению расписания представлены в виде списка конкретных изменений и усовершенствований, которые необходимо внести в приложение
            </div>
            <div className="input-group-text mb-1">
                <input type="checkbox" className="mr-3" value={10} onClick={(e) => {handleChecked(e)}}/>
                Создан макет приложения в figma либо другом редакторе (нарисованные от руки и отсканированные наброски и схемы тоже подойдут)
            </div>
            <h3>Оформление приложения</h3>
            <div className="input-group-text mb-1">
                <input type="checkbox" className="mr-3" value={10} onClick={(e) => {handleChecked(e)}}/>
                Приложение корректно отображается как на компьютере, так и на мобильных устройствах, оптимально занимает площадь страницы. Минимальная ширина страницы, при которой приложение отображается корректно, 320рх. Наличие в таблице полосы прокрутки не является ошибкой
            </div>
            <div className="input-group-text mb-1">
                <input type="checkbox" className="mr-3" value={10} onClick={(e) => {handleChecked(e)}}/>
                Дизайн приложения должен гармонично сочетаться с оформлением rs app. Допускаются небольшие отличия, улучшающие визуальное восприятие созданного вами приложения либо упрощающие работу с ним. Единое стилевое оформление всех страниц приложения
            </div>
            <div className="input-group-text mb-1">
                <input type="checkbox" className="mr-3" value={10} onClick={(e) => {handleChecked(e)}}/>
                У приложения есть версия для слабовидящих - больший размер шрифта, доступные элементы пользовательского интерфейса, высокая контрастность и т.д.
            </div>
            <h3>Просмотр расписания в режиме студента</h3>
            <div className="input-group-text mb-1">
                <input type="checkbox" className="mr-3" value={10} onClick={(e) => {handleChecked(e)}}/>
                Возможность просмотра расписания в виде календаря
            </div>
            <div className="input-group-text mb-1">
                <input type="checkbox" className="mr-3" value={10} onClick={(e) => {handleChecked(e)}}/>
                Возможность просмотра расписания в виде списка
            </div>
            <div className="input-group-text mb-1">
                <input type="checkbox" className="mr-3" value={10} onClick={(e) => {handleChecked(e)}}/>
                Значения в ячейках таблицы с расписанием отображаются и форматируются согласно типу находящихся в них данных
            </div>
            <div className="input-group-text mb-1">
                <input type="checkbox" className="mr-3" value={10} onClick={(e) => {handleChecked(e)}}/>
                При просмотре расписания есть возможность выбора часового пояса
            </div>
            <div className="input-group-text mb-1">
                <input type="checkbox" className="mr-3" value={10} onClick={(e) => {handleChecked(e)}}/>
                Строки таблицы, строки списка, даты календаря, которым соответствуют разные типы заданий (лекция, тест, выдача таска, дедлайн таска и т.д.) выделены разным фоновым цветом
            </div>
            <div className="input-group-text mb-1">
                <input type="checkbox" className="mr-3" value={10} onClick={(e) => {handleChecked(e)}}/>
                При просмотре расписания есть возможность указать пользовательские настройки цвета фона и цвета шрифта для выделения заданий разных типов
            </div>
            <div className="input-group-text mb-1">
                <input type="checkbox" className="mr-3" value={10} onClick={(e) => {handleChecked(e)}}/>
                Можно настраивать видимость колонок расписания&nbsp;<a href="http://filamentgroup.github.io/tablesaw/demo/toggle.html">Демо</a>
            </div>
            <div className="input-group-text mb-1">
                <input type="checkbox" className="mr-3" value={10} onClick={(e) => {handleChecked(e)}}/>
                Возможность фильтрации расписания по типам заданий
            </div>
            <div className="input-group-text mb-1">
                <input type="checkbox" className="mr-3" value={10} onClick={(e) => {handleChecked(e)}}/>
                Ряд таблицы или списка можно выделить кликом. Выделенный ряд должен отличаться визуально
            </div>
            <div className="input-group-text mb-1">
                <input type="checkbox" className="mr-3" value={10} onClick={(e) => {handleChecked(e)}}/>
                Выделенный ряд можно скрыть. Скрытый ряд можно отобразить
            </div>
            <div className="input-group-text mb-1">
                <input type="checkbox" className="mr-3" value={10} onClick={(e) => {handleChecked(e)}}/>
                С зажатым shift можно выделить несколько рядов таблицы. Выделенные ряды можно скрыть. Скрытые ряды можно отобразить
            </div>
            <div className="input-group-text mb-1">
                <input type="checkbox" className="mr-3" value={10} onClick={(e) => {handleChecked(e)}}/>
                Возможность сохранения расписания в виде таблицы, в виде списка и в виде календаря в формате pdf. При сохранении расписания пользовательские настройки расписания (цветовая схема, скрытые ряды и колонки, применённые фильтры и т.д.) сохраняются
            </div>
            <div className="input-group-text mb-1">
                <input type="checkbox" className="mr-3" value={10} onClick={(e) => {handleChecked(e)}}/>
                Возможность сохранения расписания в виде таблицы, в виде списка и в виде календаря в другом формате (txt/doc/xls). При сохранении расписания пользовательские настройки расписания (цветовая схема, скрытые ряды и колонки, применённые фильтры и т.д.) сохраняются
            </div>
            <div className="input-group-text mb-1">
                <input type="checkbox" className="mr-3" value={10} onClick={(e) => {handleChecked(e)}}/>
                По клику по пункту расписания открывается страница задания с подробной информацией о нём
            </div>
            <div className="input-group-text mb-1">
                <input type="checkbox" className="mr-3" value={10} onClick={(e) => {handleChecked(e)}}/>
                Продуманная структура и внешний вид страницы задания - разная структура страницы задания для разных типов заданий, содержится вся необходимая информация о задании, наиболее важная информация выделена и т.д.
            </div>
            <div className="input-group-text mb-1">
                <input type="checkbox" className="mr-3" value={10} onClick={(e) => {handleChecked(e)}}/>
                Страница задания может содержать текст, ссылки, фото и видео
            </div>
            <div className="input-group-text mb-1">
                <input type="checkbox" className="mr-3" value={10} onClick={(e) => {handleChecked(e)}}/>
                Для событий, которые проходят офлайн, на странице задания отображается карта с местом их проведения
            </div>
            <div className="input-group-text mb-1">
                <input type="checkbox" className="mr-3" value={10} onClick={(e) => {handleChecked(e)}}/>
                На странице задания можно оставить feedback о задании
            </div>
            <h3>Просмотр/редактирования расписания в режиме ментора</h3>
            <div className="input-group-text mb-1">
                <input type="checkbox" className="mr-3" value={20} onClick={(e) => {handleChecked(e)}}/>
                У ментора есть возможность редактирования расписания Редактируется только основная форма расписания - таблица. Расписание в виде календаря или списка автоматически генерируются на основе введённых в таблицу данных
            </div>
            <div className="input-group-text mb-1">
                <input type="checkbox" className="mr-3" value={10} onClick={(e) => {handleChecked(e)}}/>
                Редактирование расписания организовано понятно и удобно - интуитивно понятный интерфейс, наличие необходимых подсказок, доступные элементы управления
            </div>
            <div className="input-group-text mb-1">
                <input type="checkbox" className="mr-3" value={10} onClick={(e) => {handleChecked(e)}}/>
                В процессе редактирования ментор сразу видит, как будет выглядеть таблица с расписанием
            </div>
            <div className="input-group-text mb-1">
                <input type="checkbox" className="mr-3" value={10} onClick={(e) => {handleChecked(e)}}/>
                В процессе редактирования есть возможность предпросмотра расписания в виде календаря
            </div>
            <div className="input-group-text mb-1">
                <input type="checkbox" className="mr-3" value={10} onClick={(e) => {handleChecked(e)}}/>
                В процессе редактирования есть возможность предпросмотра расписания в виде списка
            </div>
            <div className="input-group-text mb-1">
                <input type="checkbox" className="mr-3" value={10} onClick={(e) => {handleChecked(e)}}/>
                При редактировании расписания дату можно выбрать на календаре
            </div>
            <div className="input-group-text mb-1">
                <input type="checkbox" className="mr-3" value={10} onClick={(e) => {handleChecked(e)}}/>
                При редактировании расписания есть возможность выбора часового пояса
            </div>
            <div className="input-group-text mb-1">
                <input type="checkbox" className="mr-3" value={10} onClick={(e) => {handleChecked(e)}}/>
                При редактировании расписания есть возможность изменять цвет фона и цвет шрифта для выделения заданий разных типов
            </div>
            <div className="input-group-text mb-1">
                <input type="checkbox" className="mr-3" value={20} onClick={(e) => {handleChecked(e)}}/>
                В ходе редактирования расписания есть возможность добавлять новые типы заданий и выбирать для них цвет фона и цвет шрифта
            </div>
            <div className="input-group-text mb-1">
                <input type="checkbox" className="mr-3" value={10} onClick={(e) => {handleChecked(e)}}/>
                У ментора есть возможность редактирования страницы задания
            </div>
            <div className="input-group-text mb-1">
                <input type="checkbox" className="mr-3" value={10} onClick={(e) => {handleChecked(e)}}/>
                Редактирование страницы задания организовано понятно и удобно - интуитивно понятный интерфейс, наличие необходимых подсказок, доступные элементы управления
            </div>
            <div className="input-group-text mb-1">
                <input type="checkbox" className="mr-3" value={20} onClick={(e) => {handleChecked(e)}}/>
                В процессе редактирования на страницу задания можно добавлять текст, ссылки, фото и видео
            </div>
            <div className="input-group-text mb-1">
                <input type="checkbox" className="mr-3" value={10} onClick={(e) => {handleChecked(e)}}/>
                Для событий, которые проходят офлайн, есть возможность указать на карте место их проведения
            </div>
            <div className="input-group-text mb-1">
                <input type="checkbox" className="mr-3" value={10} onClick={(e) => {handleChecked(e)}}/>
                В процессе редактирования ментор сразу видит, как будет выглядеть страница с заданием
            </div>
            <div className="input-group-text mb-1">
                <input type="checkbox" className="mr-3" value={10} onClick={(e) => {handleChecked(e)}}/>
                В процессе редактирования страницы с заданием есть возможность разрешить или запретить оставлять feedback о задании
            </div>
            <h3>Оптимизация расписания</h3>
            <div className="input-group-text mb-1">
                <input type="checkbox" className="mr-3" value={10} onClick={(e) => {handleChecked(e)}}/>
                Выбранные пользователем способ отображения расписания, часовой пояс, видимость колонок, применённые фильтры, выбранный цвет фона и цвет шрифта, скрытые ряды, другие применённые настройки, если они есть, сохраняются в localStorage так, что при обновлении страницы состояние расписания сохраняется
            </div>
            <div className="input-group-text mb-1">
                <input type="checkbox" className="mr-3" value={20} onClick={(e) => {handleChecked(e)}}/>
                Определите эффективность использования виртуализации рядов, других способы оптимизации производительности приложения. Примените наиболее эффективные способы для оптимизации производительности приложения
            </div>
            <div className="input-group-text mb-1">
                <input type="checkbox" className="mr-3" value={10} onClick={(e) => {handleChecked(e)}}/>
                Дополнительное усовершенствование
            </div>
            <div className="input-group-text mb-1">
                <input type="checkbox" className="mr-3" value={10} onClick={(e) => {handleChecked(e)}}/>
                Дополнительное усовершенствование
            </div>
            <div className="input-group-text mb-1">
                <input type="checkbox" className="mr-3" value={10} onClick={(e) => {handleChecked(e)}}/>
                Дополнительное усовершенствование
            </div>
            <div className="input-group-text mb-1">
                <input type="checkbox" className="mr-3" value={10} onClick={(e) => {handleChecked(e)}}/>
                Дополнительное усовершенствование
            </div>
            <div className="input-group-text mb-1">
                <input type="checkbox" className="mr-3" value={10} onClick={(e) => {handleChecked(e)}}/>
                Дополнительное усовершенствование
            </div>
            <h3>Использованние технологии</h3>
            <div className="input-group-text mb-1">
                <input type="checkbox" className="mr-3" value={30} onClick={(e) => {handleChecked(e)}}/>
                TypeScript
            </div>
            <div className="input-group-text mb-1">
                <input type="checkbox" className="mr-3" value={10} onClick={(e) => {handleChecked(e)}}/>
                Ant Design of React
            </div>
            <h3>Документирование кода</h3>
            <div className="input-group-text mb-1">
                <input type="checkbox" className="mr-3" value={20} onClick={(e) => {handleChecked(e)}}/>
                Создана и оформлена документация, позволяющая другим разработчикам понять особенности работы приложения
            </div>
            <h3>Целесообразность интегрирования в rs app</h3>
            <div className="input-group-text mb-1">
                <input type="checkbox" className="mr-3" value={40} onClick={(e) => {handleChecked(e)}}/>
                Созданное приложение целесообразно интегрировать в rs app
            </div>
        </div>
    )
};

export default App;