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
