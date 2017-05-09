Template.textModal.onCreated(function() {
    Template.instance().text = new ReactiveVar("");
});

Template.textModal.helpers({
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

Template.textModal.events({
    'input #textModalInput':function(event) {
        Template.instance().text.set(event.target.value);
    },
	'click .btn-danger':function(event) {
		if (Template.instance().data.callback != undefined) {
			Template.instance().data.callback(Template.instance().text.get());
		}
	}
});
