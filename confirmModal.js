Template.confirmModal.helpers({
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
            return "btn btn-danger";
        } else {
            return confirmButtonClass;
        }
    },
    'confirmButtonText':function() {
        let confirmButtonText = Template.instance().data.confirmButtonText;
        if (confirmButtonText == undefined) {
            return "Confirm";
        } else {
            return confirmButtonText;
        }
    }
});

Template.confirmModal.events({
    'click #easyModalCancelButton':function(event) {
        if (Template.instance().data.cancelCallback != undefined) {
            Template.instance().data.cancelCallback();
        }
    },
	'click #easyModalConfirmButton':function(event) {
		if (Template.instance().data.callback != undefined) {
			Template.instance().data.callback();
		}
	}
});
