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


class ModalError extends Component {
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
        const { status, onError } = this.props
        return (
            <div>
                <Modal basic size='small' id="fromError" open={status}  >
                    <Header icon='browser' content='ทำรายการสำเร็จ' />
                    <Modal.Content>
                        <h3>คุณได้เพิ่มจำนวนและอนุมัติให้ รถเข้าจอดแล้ว.</h3>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button onClick={(e) => { onError(e) }} id="btnOK" inverted color='green'>
                            <Icon name='checkmark' /> Got it
                        </Button>
                    </Modal.Actions>
                </Modal>
            </div>
        );
    }
}

export default ModalError;
