import React, { Component, AsyncStorage } from 'react';
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
    Text,
    Container

} from 'semantic-ui-react';
import ModalSubmit from './ModalSubmit'
import ModalSuccess from './ModalSuccess';


class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fromModal: false,
            fromSuccess: false,
            number: 0,
            button: true
        }
    }

    //Number
    //Array

    async componentDidMount() {
        var url = new URL(window.location.href)
        var size = url.searchParams.get("car_size")
        if (size >= 50) {
            this.setState({ button: false,number: size })
        } else {
            this.setState({ button: true,number: size })
        }
    }

    handlerSubmitForm(e) {
        this.setState({ fromModal: true })
    }

    async Submit(e) {
        const { number } = this.state
        this.setState({ fromSuccess: true, number: number + 1, test: e })

    }
    async Success(e) {
        this.setState({ fromModal: false, fromSuccess: false, })
    }

    render() {
        const { fromModal, fromSuccess ,number, button} = this.state
        return (
            <div>
                <h1>Car System</h1>
                {button == true?
                    <Button
                        id='checkin'
                        primary
                        onClick={e => this.handlerSubmitForm(e)}
                        className={this.state.button_class}>IN</Button>
                :<Container id="Disable"></Container> }
                <ModalSubmit
                    status={fromModal}
                    onClose={(e) => this.setState({ fromModal: false })}
                    onSubmit={(e) => this.Submit(e)}
                />
                <ModalSuccess
                    status={fromSuccess}
                    onSuccess={(e) => this.Success(e)}
                />

                <h2>[ {number} / 50 ]</h2>

            </div>
        );
    }
}

export default MainPage;
