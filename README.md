# easy-modals

A meteor package containing frequently used bootstrap 3 modals.
Designed to be used with [peppelg:bootstrap-3-modal](https://github.com/PeppeL-G/bootstrap-3-modal/).
Via peppelg's ```Modal.show(<template name>, <data context>)```, you can display modals in a few commonly used formats but with custom content.
easy-modal modals use specific keys in ```Modal.show```'s ```<data context>``` parameter to inject data.

## Modals
### infoModal
```Modal.show('infoModal', ...)```: Defines a modal that accepts no input and displays information. Use it to display the result of something or a warning message, for example.
### confirmModal
```Modal.show('confirmModal', ...)```: Defines a modal that requests confirmation. Has two buttons: "cancel" and "confirm". Use it to confirm users want to delete records, for example.
### textModal
```Modal.show('textModal', ...)```: Defines a modal that accepts text input. Like confirmModal, it has a "cancel" and "submit" (confirm) button. Allows you to specify what text is considered valid. If the inputted text is not valid, the submit button is disabled.

## Options

```title```: The title at the top of the modal.

```text```: The message displayed by the modal.

```buttonClass```: Optional. The class used for the "dismiss" button. Defaults to "btn btn-default". On infoModal, this is the only button. On confirmModal and textModal, this is the "cancel" button.

```buttonText```: Optional. The text used for the "dismiss" button. On infoModal, defaults to "Ok". On confirmModal and textModal, defaults to "Cancel".

```confirmButtonClass```: Optional. Only used on confirmModal and textModal. On confirmModal, defaults to "btn btn-danger". On textModal, defaults to "btn btn-success".

```confirmButtonText```: Optional. Only used on confirmModal and textModal. On confirmModal, defaults to "Confirm". On textModal, defaults to "Submit".

```callback```: Optional. A function to be invoked when the *primary* button on the modal is clicked. On infoModal, this is the only button. On warningModal and textModal, this is the confirm button. On infoModal and warningModal, this function has no parameters. On text modal, this function has 1 parameter, the text that was inputted.

```cancelCallback```: Optional. A function to be invoked when the *cancel* button on the modal is clicked. On infoModal, this has no effect. On warningModal and textModal, this is the cancel button.

```template```: Optional. The name of the template to dynamically inject into the modal. On infoModal and warningModal, if ```template``` exists, then ```text``` is not displayed and the template corresponding with ```template``` is injected. Has no effect on textModal.
