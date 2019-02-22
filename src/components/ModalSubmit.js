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
            Regnumber: '',
        }
    }
    // componentDidMount() {
    //     this.setState({
    //         selectedProducts: [],
    //         products: [
    //             { id: 1, name: 'aaaaa', brand: 'Nike' },
    //             { id: 2, name: 'bccbb', brand: 'Adidas' },
    //             { id: 3, name: 'ccc', brand: 'Croc' },
    //         ]
    //     })
    // }


    // handleProductSelect(product) {
    //     this.setState(prevState => {
    //         return {
    //             selectedProducts: prevState.selectedProducts.concat(product)
    //         }
    //     })
    // }
    // handleProductSelect (product) {
    //     this.setState(prevState => {
    //       return {
    //         selectedProducts: prevState.selectedProducts.concat(product)
    //       }
    //     });
    //   }


    render() {
        const { status, onClose , onSubmit, onCancel} = this.props
        return (
            <div>
                <Modal open={status}>
                    <Button
                        circular
                        icon='close'
                        basic
                        floated='right'
                        id='fromSubmit'
                        onClick={(e) => { onClose(e) }} />
                    <Modal.Header>Submit</Modal.Header>
                    <Modal.Content image>
                        <Image wrapped size='medium' src='https://2p2bboli8d61fqhjiqzb8p1a-wpengine.netdna-ssl.com/wp-content/uploads/2016/04/tony-stark-audi-r8.jpg' />
                        <Modal.Description>
                            <Header>กรอกข้อมูล</Header>
                            <Input id='InputRe' icon='hand point left' placeholder='ทะเบียนรถ...' />
                            <Input id='InputRfid' icon='hand point left' placeholder='RFID...' />
                            <center>
                                <div>
                                    <Button id="btnSubmit" onClick={(e) => { onSubmit(e) }} primary>Submit</Button>
                                    <Button id="btnCancel" onClick={(e) => { onCancel(e) }} secondary>Cancel</Button>
                                </div>
                            </center>
                        </Modal.Description>
                    </Modal.Content>
                </Modal>
            </div>
        );
    }
}

export default ModalSubmit;
