import DemoPage from './pages/DemoPage.js';
import DemoTodoPage from './pages/DemoTotoPage.js';
import Router from './Router.js';

function App() {
  const routes = {
    '/': DemoPage,
    '/todo': DemoTodoPage,
    '*': () => <div>404 Страница не найдена!</div>,
  };

  return (
    <>
      <Router routes={routes} />
    </>
  );
}

export default App;
