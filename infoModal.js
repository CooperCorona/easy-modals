Template.infoModal.events({
	'click #easyModalOkButton':function(event) {
		if (Template.instance().data.callback != undefined) {
			Template.instance().data.callback();
		}
	}
});
