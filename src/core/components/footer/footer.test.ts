import { Footer } from './footer';
import { getByText } from '@testing-library/dom';

customElements.define('app-footer', Footer);
const container = document.createElement('div');
container.innerHTML = '<app-footer></app-footer>';

describe('Give Footer component', () => {
    describe('When its render in a container', () => {
        test('Footer', () => {
    // Footer.render() // No es necesario llamar a render() para probar el componente directamente
    getByText(container, 'Github');
    //expect(footer.texContent).contain('Alcobendas');
});
