import { User } from 'firebase/auth';

import { Header } from '@/components';
import { Home, Login, NotFound } from '@/pages';
import { Page } from '@/types';

import { _ROUTES_NAMES, _ROUTES_URLS } from './types';
import Registration from '@/pages/Registration/Registration';

const protectedRoutes = [_ROUTES_URLS.home];

export default class Router {
  static root: HTMLElement | null = document.getElementById('app');
  static header: Header | null = null;

  static user: User | null = null;

  static pages = new Map<string, Page>();

  static protectedRoutes: string[] = [_ROUTES_URLS.home];

  static navigate(route: _ROUTES_NAMES) {
    if (protectedRoutes.includes(route) && !Router.user) {
      throw new Error('Protected route!');
    }

    this.clearRootElement();
    const page = this.getPage(route);

    page.render(Router.root);
    console.log(Router.pages);
  }

  static clearRootElement() {
    this.root?.replaceChildren();
  }

  static getPage(route: _ROUTES_NAMES) {
    if (!(route in _ROUTES_NAMES)) {
      throw new Error('Route not found');
    }

    let page;

    switch (route) {
      case _ROUTES_NAMES.HOME:
        page = Router.pages.get(_ROUTES_URLS.home);

        if (!page) {
          page = new Home();
          Router.pages.set(_ROUTES_URLS.home, page);
        }
        break;
      case _ROUTES_NAMES.LOGIN:
        page = Router.pages.get(_ROUTES_URLS.login);

        if (!page) {
          page = new Login();
          Router.pages.set(_ROUTES_URLS.login, page);
        }
        break;
      case _ROUTES_NAMES.REGISTRATION:
        page = Router.pages.get(_ROUTES_URLS.registration);

        if (!page) {
          page = new Registration();
          Router.pages.set(_ROUTES_URLS.registration, page);
        }
        break;
      default:
        page = new NotFound();
    }

    return page;
  }
}
