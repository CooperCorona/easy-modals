Template.easyModalsInfoModal.helpers({
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
            return "Ok";
        } else {
            return buttonText;
        }
    }
});

Template.easyModalsInfoModal.events({
	'click #easyModalOkButton':function(event) {
		if (Template.instance().data.callback != undefined) {
			Template.instance().data.callback();
		}
	}
});
