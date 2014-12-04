(function(){
	var app = angular.module('page', []);
	
	app.controller("HeadController", function (){
	 	this.tittle = text.tittle;
	});

	app.controller("BodyController", function (){
	 	this.mainPageAlias = text.home;
	 	this.sections = sections;
	 	this.contactDetailsSave = text.contactDetailsSave;
	 	this.contact = contact;
	});

	var text = {
		"tittle": "RicardoVZ.com",
		"home": "Home",
		"contactDetailsSave": "Save Contact Details"
	};

	var sections = [{
		"header": "Recently",
		"articles": [{
			"header": {
				"tittle": "New Website Design",
				"subtittle": "I decided to get rid of drupal as CMS and build the site from scratch using HTML5 + AngularJS + Java"
			},
			"paragraphs": [
				{"value": "After six months installing my own platform on the cloud, I have decided to start to build my website from scratch. I should admit that Drupal is an excellent content manager but at this level of my professional career I would like to have more control over my site."},
				{"value": "In consequence, I have been working each day during the last 3 weeks developing a new infrastructure, because nowadays the continuous integration concepts are playing songs on my head. I think that I should learn more about that and the best way to do it is experimenting, trying, making mistakes and fixing them. For that reason I have grouped some tools and scheduling some tasks that will help me during the coding and deployment of new releases."},
				{"value": "As advantage, I have learnt new technologies but the most important for me is that I have opened my eyes and now I am conscious of the lot of things I should learn and enhance."},
				{"value": "I will be actively posting my experiences, settings and code involved in this learning process that I have started. I hope it will not be too long to start sharing with all of you my new knowledge."}
			],
			"image": "resources/images/designing.jpg"
		}]
	}];

	var contact = {
		"firstName": "Ricardo",
		"middleName": "Javier",
		"lastName1": "Villanueva",
		"lastName2": "Zacarias",
		"gender": "male",
		"jobTittle": "Software Engineer",
		"prefix": "Mr",
		"suffix": "MSc IT",
		"skype": "villanueva.ricardo",
		"mobile": "+447473554777",
		"mobileFormatted": "(+44)-(0)7473.554.777",
		"mail": "villanueva.ricardo@gmail.com"

	};

})();
