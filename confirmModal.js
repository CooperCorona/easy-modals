Template.confirmModal.events({
	'click #easyModalConfirmButton':function(event) {
		if (Template.instance().data.callback != undefined) {
			Template.instance().data.callback();
		}
	}
});
