Template.easyModalsTextModal.onCreated(function() {
    Template.instance().text = new ReactiveVar("");
});
Template.easyModalsTextModal.helpers({
    'buttonClass':function() {
        let buttonClass = Template.instance().data.buttonClass;
        if (buttonClass == undefined) {
            return "btn btn-default";
        } else {
            return buttonClass;
        }
    },
    'buttonText':function() {
        let buttonText = Template.instance().data.buttonText;
        if (buttonText == undefined) {
            return "Cancel";
        } else {
            return buttonText;
        }
    },
    'confirmButtonClass':function() {
        let confirmButtonClass = Template.instance().data.confirmButtonClass;
        if (confirmButtonClass == undefined) {
            return "btn btn-success";
        } else {
            return confirmButtonClass;
        }
    },
    'confirmButtonText':function() {
        let confirmButtonText = Template.instance().data.confirmButtonText;
        if (confirmButtonText == undefined) {
            return "Submit";
        } else {
            return confirmButtonText;
        }
    },
    'isValidOrEmpty':function() {
        let text = Template.instance().text.get();
        return text.length == 0
        || Template.instance().data.validate(text)
        || Template.instance().data.invalidMessage == undefined;
    },
    'isValid':function() {
        return Template.instance().data.validate(Template.instance().text.get());
    },
    'invalidMessage':function() {
        return Template.instance().data.invalidMessage;
    }
});

Template.easyModalsTextModal.events({
    'input #easyModalsTextModalInput':function(event) {
        Template.instance().text.set(event.target.value);
    },
    'submit #easyModalTextForm':function(event) {
        //The form ALWAYS submits, even if
        //the button is disabled, so we need
        //to intercept the submit event and
        //prevent it from doing anything.
        event.preventDefault();
    },
    'click #easyModalCancelButton':function(event) {
		if (Template.instance().data.cancelCallback != undefined) {
			Template.instance().data.cancelCallback();
		}
    },
	'click #easyModalConfirmButton':function(event) {
		if (Template.instance().data.callback != undefined) {
			Template.instance().data.callback(Template.instance().text.get());
		}
	}
});
