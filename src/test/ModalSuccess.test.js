import React from 'react';
import ModalSuccess from '../components/ModalSuccess';
import { shallow, mount, render } from 'enzyme';


describe("popup", () => {
    beforeEach(() => {
    });
    it("should call ModalSuccess", () => {
        const wrapper = shallow(<ModalSuccess />);
        expect(wrapper.find('#fromSuccess')).toHaveLength(1)
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
        let onSuccessfn = jest.fn();
        const wrapper = shallow(
            <ModalSuccess
                onSuccess={onSuccessfn}
            />);
        wrapper.find('#btnOK').simulate('click')
        expect(onSuccessfn).toHaveBeenCalledTimes(1)
    });
});