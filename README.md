# easy-modals

A meteor package containing frequently used bootstrap 3 modals.
Designed to be used with [peppelg:bootstrap-3-modal](https://github.com/PeppeL-G/bootstrap-3-modal/).
Via peppelg's ```Modal.show(<template name>, <data context>)```, you can display modals in a few commonly used formats but with custom content.
easy-modal modals use specific keys in ```Modal.show```'s ```<data context>``` parameter to inject data.

## Modals
easy-modals extends Modal with constants for each of the predefined modals.
### Modal.INFO_MODAL
```Modal.show(Modal.INFO_MODAL, ...)```: Defines a modal that only displays information. Use it to display the result of a method or a warning message, for example.
### Modal.CONFIRM_MODAL
```Modal.show(Modal.CONFIRM_MODAL, ...)```: Defines a modal that requests confirmation. Has two buttons: "cancel" and "confirm". Use it to confirm users want to delete records, for example.
### Modal.TEXT_MODAL
```Modal.show(Modal.TEXT_MODAL, ...)```: Defines a modal that accepts text input. Like confirmModal, it has a "cancel" and "submit" (confirm) button. Allows you to specify what text is considered valid. If the inputted text is not valid, the submit button is disabled. The callback is guaranteed to be invoked only if the text is valid.

## Options

* ```title```: The title at the top of the modal.
 
* ```text```: The message displayed by the modal.
 
* ```buttonClass```: Optional. The class used for the "dismiss" button. Defaults to "btn btn-default". On INFO_MODAL, this is the only button. On CONFIRM_MODAL and TEXT_MODAL, this is the "cancel" button.
 
* ```buttonText```: Optional. The text used for the "dismiss" button. On INFO_MODAL, defaults to "Ok". On CONFIRM_MODAL and TEXT_MODAL, defaults to "Cancel".

* ```confirmButtonClass```: Optional. Only used on CONFIRM_MODAL and TEXT_MODAL. On CONFIRM_MODAL, defaults to "btn btn-danger". On textModal, defaults to "btn btn-success".

* ```confirmButtonText```: Optional. Only used on CONFIRM_MODAL and TEXT_MDOAL. On CONFIRM_MODAL, defaults to "Confirm". On TEXT_MODAL, defaults to "Submit".
 
* ```validate```: Required on TEXT_MODAL. ```validate``` is passed the current text inputted as the only parameter. It must return a boolean determining whether or not the text is considered valid. If the text is not considered valid, the modal disables the submit button.

* ```invalidMessage```: Optional. A message to display if the text is considered invalid.
 
* ```callback```: Optional. A function to be invoked when the *primary* button on the modal is clicked. On INFO_MODAL, this is the only button. On CONFIRM_MODAL and TEXT_MODAL, this is the confirm button. On INFO_MODAL and CONFIRM_MODAL, this function has no parameters. On TEXT_MODAL, this function has 1 parameter: the text that was inputted.

* ```cancelCallback```: Optional. A function to be invoked when the *cancel* button on the modal is clicked. On INFO_MODAL, this has no effect. On CONFIRM_MODAL and TEXT_MODAL, this is the cancel button.

* ```template```: Optional. The name of the template to dynamically inject into the modal. On INFO_MODAL and CONFIRM_MODAL, if ```template``` exists, then ```text``` is not displayed and the template corresponding with ```template``` is injected. Has no effect on TEXT_MODAL.

## Customizable CSS
TEXT_MODAL defines 3 CSS classes: ```easyModals-validText```, ```easyModals-invalidText```, and ```easyModals-errorMessage```. You can define your own CSS rules for these classes to change the appearance of the modal.

* ```easyModals-validText```: The class used for the text box when the text is considered valid. By default, has no CSS rules applied to it.
* ```easyModals-invalidText```: The class used for the text box when the text is considered invalid. By default, has ```color: red;```
* ```easyModals-errorMessage```: The class used for the error message displayed when there is invalid text. By default, has ```color: red;```

## Meteor.Methods Callback
A common use for modals is displaying error messages. easy-modals defines ```Modal.MODAL_ERROR_CALLBACK``` and ```Modal.MODAL_ERROR_CALLBACK_SYNCHRONOUS``` to easily display error messages, specifically from calls to ```Meteor.Methods```. Both callbacks conform to the format specified by ```Meteor.Methods```'s callback. If any ```Meteor.Method``` throws a ```Meteor.Error```, the callback will present an infoModal with title "Error" and text ```error.reason```. ```Modal.MODAL_ERROR_CALLBACK``` includes a 0.4 second delay to allow a currently presented modal to disapepar before trying to present the new one. It is intended for use in ```Meteor.Methods``` calls that occur in Modal callbacks. ```Modal.MODAL_ERROR_CALLBACK_SYNCHRONOUS``` does not include the delay and is intended for use in ```Meteor.Methods``` calls that do *not* occur in Modal callbacks.
