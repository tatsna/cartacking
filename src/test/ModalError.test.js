import React from 'react';
import ModalError from '../components/ModalError';
import { shallow, mount, render } from 'enzyme';


describe("popup", () => {
    beforeEach(() => {
    });
    it("should call ModalSuccess", () => {
        const wrapper = shallow(<ModalError />);
        expect(wrapper.find('#fromError')).toHaveLength(1)
        expect(wrapper.find('#btnOK')).toHaveLength(1)
    });
    afterEach(() => {
        // handlerSubmitForm.mockReset();
    });
});

describe("event", () => {
    beforeEach(() => {
    });
    it("should call onCancel", () => {
        let onErrorfn = jest.fn();
        const wrapper = shallow(
            <ModalError
                onError={onErrorfn}
            />);
        wrapper.find('#btnOK').simulate('click')
        expect(onErrorfn).toHaveBeenCalledTimes(1)
    });
});