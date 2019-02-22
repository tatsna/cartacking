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
    TextArea,
    Label,
    Icon,
    Checkbox,
    Menu,
    Segment,

} from 'semantic-ui-react';


class ModalSubmit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            urlImage: '',
            InputRe: '',
            InputRfid: '',
        }
    }
    
    onChangInputRe(InputRe){
        this.setState({InputRe:InputRe})
    }
    onChangInputRfid(InputRfid){
        this.setState({InputRfid:InputRfid})
    }
    render() {
        const { status, onClose , onSubmit, onCancel} = this.props
        return (
            <center>
            <div>
                <Modal open={status}>
                    <Button
                        circular
                        icon='close'
                        basic
                        floated='right'
                        id='btnClose'
                        onClick={(e) => { onClose(e) }} />
                    <Modal.Header>Submit</Modal.Header>
                    <Modal.Content image>
                        <Image wrapped size='medium' src='https://2p2bboli8d61fqhjiqzb8p1a-wpengine.netdna-ssl.com/wp-content/uploads/2016/04/tony-stark-audi-r8.jpg' />
                        <Modal.Description>
                            <Header>กรอกข้อมูล</Header>
                            <Input onChange={text => this.onChangInputRe(text)} id='InputRe' icon='hand point left' placeholder='ทะเบียนรถ...' />
                            <Input onChange={text => this.onChangInputRfid(text)} id='InputRfid' icon='hand point left' placeholder='RFID...' />
                            <center>
                                <div>
                                    <Button id="btnSubmit" onClick={(e) => { onSubmit() }} primary>Submit</Button>
                                    <Button id="btnCancel" onClick={(e) => { onCancel() }} secondary>Cancel</Button>
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
