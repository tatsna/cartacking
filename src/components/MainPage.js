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
import ModalSubmit from './ModalSubmit'
import ModalSuccess from './ModalSuccess';


class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedProducts: [],
            products: [
                { id: 1, name: 'aaa', brand: 'Nike' },
            ],
            fromModal: false,
            fromSuccess: false,
            number: 0
        }
    }

    componentDidMount() {
        this.setState({
            selectedProducts: [],
            products: [
                { id: 1, name: 'aaaaa', brand: 'Nike' },
                { id: 2, name: 'bccbb', brand: 'Adidas' },
                { id: 3, name: 'ccc', brand: 'Croc' },
            ]
        })
    }


    handleProductSelect(product) {
        this.setState(prevState => {
            return {
                selectedProducts: prevState.selectedProducts.concat(product)
            }
        })
    }
    // handleProductSelect (product) {
    //     this.setState(prevState => {
    //       return {
    //         selectedProducts: prevState.selectedProducts.concat(product)
    //       }
    //     });
    //   }
    handlerSubmitForm(e) {
        this.setState({ fromModal: true })
    }

    Submit(e) {
        const {number} = this.state
        this.setState({fromSuccess:true,number: number+1})
    }
    Success(e) {
        this.setState({fromModal: false,fromSuccess: false,})
    }

    render() {
        const { fromModal,fromSuccess } = this.state
        return (
            <div>
                <h1>Car System</h1>
                <Button
                    id='checkin'
                    primary
                    onClick={e => this.handlerSubmitForm(e)}
                    className={this.state.button_class}>IN</Button>
                <ModalSubmit
                    status={fromModal}
                    onClose={(e)=> this.setState({fromModal: false})}
                    onSubmit={(e) => this.Submit(e)}
                />
                <ModalSuccess 
                    status={fromSuccess}
                    onSuccess={(e) => this.Success(e)}
                />
                <h2>[ {this.state.number} / 50 ]</h2>
            </div>
        );
    }
}

export default MainPage;
