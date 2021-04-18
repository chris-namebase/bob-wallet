import { history } from '../../store/configureStore';

export default message => {
  const url = new URL(message);
  const params = url.searchParams;
  const name = params.get('name');
  const presignJSONString = params.get('presign');

  if (presignJSONString) {
    store.dispatch(setDeeplinkParams({ presignJSONString }));
  }

  if (name) {
    history.push(`/exchange`);
  }
};
