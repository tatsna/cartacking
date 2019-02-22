import React from 'react';
import ModalSubmit from '../components/ModalSubmit';
import { shallow, mount, render } from 'enzyme';



describe("popup", () => {
    beforeEach(() => {
    });
    it("should call productSelect", () => {
        const wrapper = shallow(<ModalSubmit />);
        wrapper.instance().handlerSubmitForm
        expect(wrapper.find('#fromSubmit')).toHaveLength(1)
        expect(wrapper.find('#InputRe')).toHaveLength(1)
        expect(wrapper.find('#InputRfid')).toHaveLength(1)
        expect(wrapper.find('#btnSubmit')).toHaveLength(1)
        expect(wrapper.find('#btnCancel')).toHaveLength(1)
    });
    afterEach(() => {
        // handlerSubmitForm.mockReset();
    });
});



describe("event", () => {
    beforeEach(() => {
    });
    it("should call productSelect", () => {
        const wrapper = shallow(<ModalSubmit />);
        wrapper.instance().onSubmit = jest.fn()
        wrapper.find('#btnSubmit').simulate('click')
        expect(wrapper.instance().onSubmit).toHaveBeenCalledTimes(1)
        wrapper.instance().Success.mockClear()
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
