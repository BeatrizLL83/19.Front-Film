import { getByRole } from '@testing-library/dom';
import { Header } from './header';

Header.render();
const co = document.createElement('div');
co.innerHTML = '<app-header></app-header>';

describe('Given ')
