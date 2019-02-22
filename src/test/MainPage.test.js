import React from 'react';
import MainPage from '../components/MainPage';
import { shallow, mount, render } from 'enzyme';

// configure({adapter: new Adapter()});
describe("render", () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<MainPage />)
        expect(wrapper.find('#checkin')).toHaveLength(1)
    });
});


describe("event", () => {
    beforeEach(() => {
    });
    it("should call productSelect", () => {
        const wrapper = shallow(<MainPage />);
        wrapper.instance().handlerSubmitForm = jest.fn()
        wrapper.find('#checkin').simulate('click')
        expect(wrapper.instance().handlerSubmitForm).toHaveBeenCalledTimes(1)
        wrapper.instance().handlerSubmitForm.mockClear()
    });

    it("functions submit", () => {
        const wrapper = shallow(<MainPage />);
        const fromSuccess = true
        const number = 0
        wrapper.instance().Submit()
        expect(wrapper.state('fromSuccess')).toBe(fromSuccess)
        expect(wrapper.state('number')).toBe(number+1)
        
    });


    it("functions handlerSubmitForm", () => {
        const wrapper = shallow(<MainPage />);
        wrapper.instance().handlerSubmitForm()
        expect(wrapper.state('fromModal')).toBe(true)

        wrapper.instance().Success()
        expect(wrapper.state('fromModal')).toBe(false)
        expect(wrapper.state('fromSuccess')).toBe(false)
    });


    afterEach(() => {
        // handlerSubmitForm.mockReset();
    });
});







// describe("handleProductSelect", () => {
//   it("test call", () => {
//     const wrapper = shallow(<MainPage />);
//     const p = {id:1,name:'aaa',brand:'Nike'}
//     wrapper.instance().handleProductSelect(p)
//     expect(wrapper.state('selectedProducts')).toEqual([p])
//   });
// });
