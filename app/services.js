(function(){



	var servicemap = {

		"spoot": {
			get: function (options) {
				if(options) {
					if(options.by === "@friends") {
						options.by = getFriendsOf(options.ctx.user);
					}
					return {
						data : findSpoot(options.ctx.location, options.what, options.by, options.tags):	
					} 
				}	
				return {
					error: 'missing params'
				};
			},
			post: function(options){
				return addNewSpoot(options);
			}
		},

		"friends" : {
			get: function (options) {
				if(options) {
					return getFriendsOf(options.ctx.user);
				}
				return [];
			}
		}

	};	

	var serviceManager = function (svcname) {

		if(svcname) {
			return servicemap[svcname];
		}
	}

	serviceManager.add = function (svcname, svc) {
		servicemap[svcname] = svc;
	};

	window.services = serviceManager;

})();