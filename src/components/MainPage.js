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
    Text

} from 'semantic-ui-react';
import ModalSubmit from './ModalSubmit'
import ModalSuccess from './ModalSuccess';


class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            fromModal: false,
            fromSuccess: false,
            number: 0
        }
    }

    async componentDidMount() {
        try {
            await AsyncStorage.setItem('@MySuperStore:key', 'I like to save it.');
        } catch (error) {

        }
    }

    handlerSubmitForm(e) {
        this.setState({ fromModal: true })
    }

    async Submit(e) {
        const { number } = this.state
        this.setState({ fromSuccess: true, number: number + 1, test: e })
    }
    Success(e) {
        this.setState({ fromModal: false, fromSuccess: false, })
    }

    render() {
        const { fromModal, fromSuccess } = this.state
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
                    onClose={(e) => this.setState({ fromModal: false })}
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
