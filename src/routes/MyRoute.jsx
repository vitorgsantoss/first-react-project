import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export default function MyRoute({ component, isClosed, ...rest }) {
  const isLoggedIn = useSelector(state=> state.auth.isLoggedIn);
  if (!isLoggedIn && isClosed) {
    return (
      <Redirect
        to={{ pathname: '/login', state: { prevPath: rest.location.pathname } }}
      />
    );
  }
  return <Route {...rest} component={component} />;
}
