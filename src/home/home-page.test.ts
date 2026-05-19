import { screen, within } from '@testing-library/dom';
import { HomePage } from './home-page';
import { Counter } from '../core/components/counter/counter';

Counter.register = vi.fn();


describe('Given HomePage component', () => {
    beforeEach(() => {
        document.body.innerHTML = '<main></main>';
    });

    const render = (
        element: HTMLElement = document.createElement(HomePage.selector),
    ) => {
        HomePage.register();
        return element;
    };

    afterEach(() => {
        document.body.innerHTML = '';
    });

    test('registers safely when called more than once', () => {
        expect(() => {
            HomePage.register();
            HomePage.register();
        }).not.toThrow();
    });

    test('element could be instantiated', () => {
        const element = render();
        expect(element).toBeInstanceOf(HTMLElement);
        expect(element).toBeInstanceOf(HomePage);
    });

    describe('When the component has been render', () => {
        beforeEach(() => {
            render();
        });

        test('Then a section will be in the document', () => {
            const sectionElement = screen.getByRole('region', {
                name: 'home-page',
            })
            within(sectionElement).getByRole('heading', {
                name: /componente/i,
                level: 2
            })
            within(sectionElement).getAllByRole('heading', 
                level: 3
            })
            const counterElements = sectionElement.querySelectorAll('app-counter').forEach((counter) => {
            expect(counterElements.length).toBe(3)
               

    test('Then heading will be in the document', () => { 
        screen.getByRole('heading', {       
            name: /componente/i, //otra manera de hacer lo anterior
            level: 2
        });
        
    })
});
