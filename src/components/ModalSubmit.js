import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css'
import {
    Form,
    Button,
    Dropdown,
    Image,
    Header,
    Modal,
    Input,
} from 'semantic-ui-react';


class ModalSubmit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            urlImage: '',
            InputRe: '',
            InputRfid: '',
        }
        this.onChangInputRe = this.onChangInputRe.bind(this);
        this.onChangInputRfid = this.onChangInputRfid.bind(this);
    }
    onChangInputRe(a,v) {
        this.setState({InputRe:v.value})
    }
    onChangInputRfid(a,v) {
        this.setState({InputRfid:v.value})
        alert(this.state.InputRfid)
    }
    render() {
        const { status, onClose, onSubmit, onCancel, InputRfid } = this.props
        return (
            <center>
                <div>
                    <Modal id="fromSubmit" open={status}>
                        <Button
                            circular
                            icon='close'
                            basic
                            floated='right'
                            id='btnClose'
                            onClick={(e) => { onClose(e) }} />
                        <Modal.Header>กรอกรายละเอียด</Modal.Header>
                        <Modal.Content image>
                            <Image wrapped size='medium' src='https://2p2bboli8d61fqhjiqzb8p1a-wpengine.netdna-ssl.com/wp-content/uploads/2016/04/tony-stark-audi-r8.jpg' />
                            <Modal.Description>
                                <Header>กรอกข้อมูล</Header>
                                <Input style={{ margin: 10 }} onChange={(a, b) => this.onChangInputRe(a,b)} id='InputRe' icon='hand point left' placeholder='ทะเบียนรถ...' />
                                <Input style={{ margin: 10 }} onChange={(a, b) => this.onChangInputRfid(a,b)} id='InputRfid' icon='hand point left' placeholder='RFID...' />
                                <center style={{ margin: 30 }}>
                                    <div>
                                        <Button size="Big" style={{ margin: 10 }} id="btnSubmit" onClick={(InputRfid) => { alert(InputRfid) }} primary>Submit</Button>
                                        <Button size="Big" style={{ margin: 10 }} id="btnCancel" onClick={(e) => { onCancel() }} secondary>Cancel</Button>
                                    </div>
                                </center>
                            </Modal.Description>
                        </Modal.Content>
                    </Modal>
                </div>
            </center>
        );
    }
}

export default ModalSubmit;
