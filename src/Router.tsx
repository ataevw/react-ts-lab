import { useEffect, useState } from 'react';

type RouterProps = {
  routes: Record<string, React.ComponentType> & {
    '*': React.ComponentType;
  };
};

export const useRoute = () => {
  const [path, setPath] = useState(window.location.pathname); // храним текущий путь текущего URL (без домена)

  useEffect(() => {
    const onLocationChange = () => {
      setPath(window.location.pathname);
    };

    window.addEventListener('popstate', onLocationChange);

    return () => {
      window.removeEventListener('popstate', onLocationChange);
    };
  }, []); // пустой массив для однократного срабатывания

  return path;
};

const Router = (props: RouterProps) => {
  const { routes } = props;
  const path = useRoute();
  const Page = routes[path] ?? routes['*'];

  return <Page />;
};

export default Router;
