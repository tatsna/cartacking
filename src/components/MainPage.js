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
import ModalError from './ModalError'


class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fromModal: false,
            fromSuccess: false,
            number: 0,
            button: true,
            fromError: false,
            RfidDefault: '1',
            Rfid: null
            
        }
    }
    //Number
    //Array
    async componentDidMount() {
        var url = new URL(window.location.href)
        var size = url.searchParams.get("car_size")
        if (size >= 50) {
            this.setState({ button: false, number: size })
        } else {
            this.setState({ button: true })
        }
    }
    handlerSubmitForm(e) {
        this.setState({ fromModal: true })
    }
    async Submit(e) {
        const { number ,Rfid} = this.state
        alert(JSON.stringify(e))
        this.setState({ fromSuccess: true, number: number + 1, Rfid:e})
    }
    async Cancel(e) {
        this.setState({ fromModal: false, fromSuccess: false, fromError: false })
    }
    
    render() {
        const { fromModal, fromSuccess, number, button ,fromError} = this.state
        return (
            <Container>
                <center>
                    <Segment placeholder>
                        <Header icon>
                            <Icon name='car' />
                            <h1>Car System</h1>
                        </Header>
                        <Segment.Inline>
                            {button == true ?
                                <Button
                                    id='checkin'
                                    primary
                                    onClick={e => this.handlerSubmitForm(e)}
                                    className={this.state.button_class}>CheckIn Car packing</Button>
                                : <Container id="Disable"></Container>}
                            <ModalSubmit
                                status={fromModal}
                                onClose={(e) => this.setState({ fromModal: false })}
                                onSubmit={(e) => this.Submit(e)}
                            />
                            <ModalSuccess
                                status={fromSuccess}
                                onSuccess={(e) => this.Cancel(e)}
                            />
                            <ModalError
                                status={fromError}
                                onError={(e) => this.Cancel(e)}
                            />
                            <h2>[ {number} / 50 ]</h2>

                        </Segment.Inline>
                    </Segment>
                </center>
            </Container>
        );
    }
}

export default MainPage;
