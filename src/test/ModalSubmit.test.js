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
    it("should call onSubmit", () => {
        let onSubmitfn = jest.fn();
        const wrapper = shallow(
            <ModalSubmit
                onSubmit={onSubmitfn}
            />);
        wrapper.find('#btnSubmit').simulate('click')
        expect(onSubmitfn).toHaveBeenCalledTimes(1)
    });

    it("should call onClose", () => {
        let onClosefn = jest.fn();
        const wrapper = shallow(
            <ModalSubmit
                onClose={onClosefn}
            />);
        wrapper.find('#btnClose').simulate('click')
        expect(onClosefn).toHaveBeenCalledTimes(1)
    });

    it("should call onClose", () => {
        let onCancelfn = jest.fn();
        const wrapper = shallow(
            <ModalSubmit
                onCancel={onCancelfn}
            />);
        wrapper.find('#btnClose').simulate('click')
        expect(onClosefn).toHaveBeenCalledTimes(1)
    });

    it("Check props fn", () => {
        const wrapper = shallow(<ModalSubmit />);
        const InputRe = '7777'
        const InputRfid = 1
        wrapper.instance().onChangInputRe(InputRe)
        wrapper.instance().onChangInputRfid(InputRfid)
        expect(wrapper.state('InputRe')).toBe(InputRe)
        expect(wrapper.state('InputRfid')).toBe(InputRfid)
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
