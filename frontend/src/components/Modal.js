import React, { Component } from 'react'

import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Input,
    Label
} from 'reactstrap'

class CustomModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: this.props.activeItem
        };
    }

    // check if checkbox is checked or not
    handleChange = e => {
        let {name, value} = e.target;
        if(e.target.type === "checkbox") {
            value = e.target.checked;
        }
        const activeItem = {...this.state.activeItem, [name]:value };
        this.setState({ activeItem })
    };

    render() {
        const { toggle, onSave } = this.props;
        return(
            <Modal isOpen={true} toggle={toggle} >
                <ModalHeader toggle={toggle}>Candidate</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            { /* Name */ }
                            <Label for="name">Name</Label>
                            <Input
                                type="text"
                                name="name"
                                value={this.state.activeItem.name}
                                onChange={this.handleChange}
                                placeholder="Enter name"
                            />
                        </FormGroup>

                        { /* Contact */ }
                        <FormGroup>
                            <Label for="contact">Contact</Label>
                            <Input
                                type="text"
                                name="contact"
                                value={this.state.activeItem.contact}
                                onChange={this.handleChange}
                                placeholder="Enter mobile number"
                            />
                        </FormGroup>

                        { /* academic_qualification */ }
                        <FormGroup>
                            <Label for="academic_qualification">Academic Qualifications</Label>
                            <Input
                                type="text"
                                name="academic_qualification"
                                value={this.state.activeItem.academic_qualification}
                                onChange={this.handleChange}
                                placeholder="Enter academic qualifications"
                            />
                        </FormGroup>

                        { /* professional_experience */ }
                        <FormGroup>
                            <Label for="professional_experience">Professional Experience</Label>
                            <Input
                                type="text"
                                name="professional_experience"
                                value={this.state.activeItem.professional_experience}
                                onChange={this.handleChange}
                                placeholder="Share professional experience"
                            />
                        </FormGroup>

                        { /* skills */ }
                        <FormGroup>
                            <Label for="skills">Skills</Label>
                            <Input
                                type="text"
                                name="skills"
                                value={this.state.activeItem.skills}
                                onChange={this.handleChange}
                                placeholder="Enter skills"
                            />
                        </FormGroup>

                        { /* Accepted checbox */ }
                        <FormGroup check>
                            <Label for="accepted">
                                <Input
                                    type="checkbox"
                                    name="accepted"
                                    checked={this.state.activeItem.accepted}
                                    onChange={this.handleChange}
                                />
                                Accept
                            </Label>
                            
                        </FormGroup>

                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="success" onClick={() => onSave(this.state.activeItem)}>
                        Save
                    </Button>
                </ModalFooter>
            </Modal>
        )
    }
}


export default CustomModal