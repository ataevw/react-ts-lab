import { useEffect, useRef, useState } from 'react';

// Массив вкладок (tabs) с уникальным id и названием
const tabs = [
  { id: 'tab1', title: 'Таб 1' },
  { id: 'tab2', title: 'Таб 2' },
  { id: 'tab3', title: 'Таб 3' },
] as const;

type TabId = (typeof tabs)[number]['id'];

// Record<Ключ, Значение> 
// ключи — это TabId, а значения — любой React-контент.
const tabContent: Record<TabId, React.ReactNode> = {
  tab1: (
    <>
      <h1>Текст 1</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
        perspiciatis.
      </p>
    </>
  ),
  tab2: (
    <>
      <h1>Текст 2</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi odio
        culpa mollitia, numquam officia, accusamus error corporis ea assumenda
        amet tenetur doloremque quam laudantium laboriosam alias ab iusto, vero
        dicta?
      </p>
    </>
  ),
  tab3: (
    <>
      <h1>Текст 3</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore cumque
        ad blanditiis, non aliquam pariatur magnam esse voluptatum, harum
        explicabo aperiam, cum labore. Quae tempora doloremque ipsa repellendus,
        necessitatibus dolore, nemo at a suscipit soluta accusantium nostrum!
        Culpa aperiam, quaerat, iure officia quos, minima qui eum incidunt error
        quia vitae cum odio est sunt perspiciatis perferendis illo atque
        repellendus at aspernatur! Sint veritatis aperiam laudantium facilis
        voluptates quo, atque voluptas, quibusdam, ut sit sequi. Ut distinctio
        suscipit porro eligendi quisquam est similique architecto esse
        accusantium, inventore debitis modi reprehenderit earum doloribus?
        Nostrum repellat iste eveniet corporis perspiciatis quis impedit
        architecto ullam maxime! Rem amet rerum placeat quibusdam inventore
        cumque fuga dolorem necessitatibus error nemo facere alias porro maiores
        perferendis sapiente, repellendus est accusamus quidem impedit ipsum
        voluptatibus! Illum enim alias possimus delectus voluptates vel? Modi
        fugit excepturi alias repellendus, inventore, doloremque ut perferendis,
        recusandae commodi vero natus ducimus provident. Ipsa magni aliquam quo
        nemo suscipit soluta totam accusantium assumenda cumque, cupiditate iste
        id. Deserunt commodi voluptas porro, illo rem odit. Fugiat, esse
        impedit. Magni delectus iusto odit quas, saepe nobis explicabo labore,
        magnam, sunt doloremque itaque quod molestias laboriosam. Iusto tempore,
        iste assumenda aut delectus placeat saepe doloremque unde omnis.
      </p>
    </>
  ),
};

const Tabs = () => {
  // useRef используется, чтобы получить доступ к DOM-элементу контейнера вкладок
  const tabRef = useRef<HTMLDivElement | null>(null);

  // Храним ширину одной вкладки (для индикатора)
  const [tabWidth, setTabWidth] = useState(0);

  // Текущая активная вкладка (по id)
  const [currentTab, setCurrentTab] = useState<TabId>('tab1');

  const toggleTab = (id: TabId) => {
    setCurrentTab(id);
  };

  // Функция для пересчёта ширины вкладки при изменении размера контейнера
  const updateWidth = () => {
    if (tabRef.current) {
      // Получаем ширину контейнера всех вкладок
      const parentWidth = tabRef.current.getBoundingClientRect().width;

      // Количество вкладок
      const countOfTans = tabs.length;

      // Делим ширину контейнера на количество вкладок
      const newTabWidth = parentWidth / countOfTans;

      // Обновляем состояние ширины вкладки
      setTabWidth(newTabWidth);
    }
  };

  // useEffect срабатывает один раз при монтировании и при изменении количества вкладок
  useEffect(() => {
    // Создаём ResizeObserver, чтобы отслеживать изменение размеров контейнера
    const resizeObserver = new ResizeObserver(updateWidth);

    // Если контейнер уже есть, начинаем его наблюдать
    if (tabRef.current) {
      resizeObserver.observe(tabRef.current);
    }

    // Очистка при размонтировании компонента
    return () => {
      if (tabRef.current) {
        resizeObserver.unobserve(tabRef.current);
      }
    };
  }, [tabs.length]); // добавляем tabs.length, чтобы пересчитать при изменении числа вкладок

  const currentIndex = tabs.findIndex((tab) => tab.id === currentTab);

  return (
    <div className="tabs-block">
      {/* Контейнер для вкладок */}
      <div className="tabs" ref={tabRef}>
        {/* Генерация кнопок для каждой вкладки */}
        {tabs.map((tab) => {
          return (
            <button
              key={tab.id}
              className={currentTab === tab.id ? 'tab_active' : ''}
              onClick={() => toggleTab(tab.id)}
            >
              {tab.title}
            </button>
          );
        })}

        {/* Индикатор активной вкладки */}
        <div
          className="indicator"
          style={{
            width: tabWidth, // ширина индикатора равна ширине одной вкладки
            translate: `${currentIndex * tabWidth}px 0px`, // сдвигаем индикатор в зависимости от текущей вкладки
          }}
        ></div>
      </div>

      <div className="tabs__content">
        <div className="content">{tabContent[currentTab]}</div>
      </div>
    </div>
  );
};

export default Tabs;
