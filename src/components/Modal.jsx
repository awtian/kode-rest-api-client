import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';

class ModalExample extends React.Component {
  render() {
    const {showModal, toggle, data, handleChanges, add, edit, update} = this.props
    return (
      <div>
        <Modal isOpen={showModal} toggle={toggle}>
          <ModalHeader toggle={toggle}>{edit ? 'Edit Contact':'Add New Contact'}</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="Name">Name</Label>
                <Input value={data.name} onChange={(e) => handleChanges(e)}type="text" name="name" placeholder="Contact Name" />
              </FormGroup>
              <FormGroup>
                <Label for="Phone">Phone</Label>
                <Input value={data.phone} onChange={(e) => handleChanges(e)}type="text" name="phone" placeholder="Phone Number" />
              </FormGroup>
              <FormGroup>
                <Label for="Company">Company</Label>
                <Input value={data.company} onChange={(e) => handleChanges(e)}type="text" name="company" placeholder="Company" />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            {edit ? <Button color="primary" onClick={update}>Edit</Button> : <Button color="primary" onClick={add}>Add</Button>}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;