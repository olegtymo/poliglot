import { onAuthStateChanged, getAuth } from 'firebase/auth';

import { Header } from '@/components';
import { Router, _ROUTES_NAMES } from '@/utils';

import './style.css';

const header = new Header(document.getElementById('pageTop'), '');
header.render();

onAuthStateChanged(getAuth(), (user) => {
  Router.user = user;

  if (!Router.user) {
    Router.navigate(_ROUTES_NAMES.LOGIN);
  } else {    
    // TODO: check last route and update last route
    Router.navigate(_ROUTES_NAMES.HOME);
  }

  header.handleAuthChange();
});
