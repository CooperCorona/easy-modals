// Write your package code here!

// Variables exported by this module can be imported by other packages and
// applications. See easy-modals-tests.js for an example of importing.
export const name = 'easy-modals';
if (Meteor.isClient) {
    Modal = Package['peppelg:bootstrap-3-modal'].Modal;
    Modal.INFO_MODAL = 'easyModalsInfoModal';
    Modal.CONFIRM_MODAL = 'easyModalsConfirmModal';
    Modal.TEXT_MODAL = 'easyModalsTextModal';
    Modal.MODAL_ERROR_CALLBACK = function(error, result) {
        if (error != undefined) {
            //Include 750 ms to allow
            //the previously displayed
            //modal a chance to disappear.
            setTimeout(function() {
                Modal.show(Modal.INFO_MODAL, {
                    title: "Error",
                    text: error.reason
                });
            }, 400);
        }
    };
    Modal.MODAL_ERROR_CALLBACK_SYNCHRONOUS = function(error, result) {
        Modal.show(Modal.INFO_MODAL, {
            title: "Error",
            text: error.reason
        });
    };
}
