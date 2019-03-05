import React from 'react';
import './style.css';

class Modal extends React.Component {
    modalInstance;

    componentDidMount() {
        //Initialize the materialize modal so it can be used later
        var modalElement = document.getElementById(this.props.id);
        window.M.Modal.init(modalElement, {endingTop: 20});
        this.modalInstance = window.M.Modal.getInstance(modalElement);
    };

    displayModal() {
        //Open the modal window
        this.modalInstance.open();
    };

    render() {
        return (
            <div id={this.props.id} className="reactModal modal">
                <div className="modal-content">
                    <h4>{this.props.header}</h4>
                    <img src={this.props.imageUrl} alt={this.props.imageAlt} />
                </div>
            </div>
        );
    }
}




export default Modal;
