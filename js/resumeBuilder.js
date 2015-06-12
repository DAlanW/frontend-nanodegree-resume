var bio = {
	"name": "David Wampler",
	"role": "Web Developer",
	"welcomeMsg": "Hi, I'm David Wampler. Please take your time exploring my resume.",
	"contacts": {
		"mobile": "859-391-7638",
		"email": "david.a.wampler@gmail.com",
		"gitHub": "DAlanW",
		"twitter": "@DavidWampler",
		"location": "Florence, KY"
	},
	"skills": [
		"Editing", "HTML", "CSS", "JavaScript"
	],
	"bioPic": "images/me.jpg"
};

bio.display = function(_bio)	{
	// role
	if (bio.role.length > 0) {
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		$("#header").prepend(formattedRole);
	};
	// name
	if (bio.name.length > 0) {
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		$("#header").prepend(formattedName)
	};
	// contacts list
	if (bio.contacts.mobile.length > 0) {
		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		$("#topContacts").append(formattedMobile);
		$("#footerContacts").append(formattedMobile);
	};
	if (bio.contacts.email.length > 0)	{
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		$("#topContacts").append(formattedEmail);
		$("#footerContacts").append(formattedEmail);
	};
	if (bio.contacts.gitHub.length > 0)	{
		var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.gitHub);
		$("#topContacts").append(formattedGitHub);
		$("#footerContacts").append(formattedGitHub);
	};
	if (bio.contacts.mobile.length > 0) {
		var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		$("#topContacts").append(formattedTwitter);
		$("#footerContacts").append(formattedTwitter);
	};
	if (bio.contacts.mobile.length > 0) {
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		$("#topContacts").append(formattedLocation);
		$("#footerContacts").append(formattedLocation);
	};
	// personal picture
	if (bio.bioPic.length > 0)	{
		var formattedbioPic = HTMLbioPic.replace("%data%", bio.bioPic);
		$("#header").append(formattedbioPic);
	};
	// welcome message
	if (bio.welcomeMsg.length > 0)	{
		var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMsg);
		$("#header").append(formattedWelcomeMsg);
	};
	if (bio.skills.length > 0)	{
	$("#header").append(HTMLskillsStart);
	for (skill in bio.skills){
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
		$("#skills").append(formattedSkill);
	}
};
}

bio.display(bio);

var work = {
	"jobs": [
		{
			"employer": "RR Donnelley",
			"title": "Bindery Material Handler",
			"location": "Florence, KY",
			"dates": "2013-2015",
			"description": "Helped maintain and operate machines. Prepare material for transport."
		},
		{
			"employer": "Books-A-Million",
			"title": "Associate",
			"location": "Abilene, TX",
			"dates": "2012-2013",
			"description": "Helped customers locate merchandise. Operated cash register."
		},
		{
			"employer": "Hardin-Simmons University",
			"title": "Student Councilor",
			"location": "Abilene, TX",
			"dates": "2011",
			"description": "Worked with students to produce university-level papers."
		}
	]
};

work.display = function(_work) {
	for (job in _work.jobs) {
		//create a new div for every work experience
		$("#workExperience").append(HTMLworkStart);
		// format using helper.js
		var workEmployer = HTMLworkEmployer.replace("%data%", _work.jobs[job].employer);
		var workTitle = HTMLworkTitle.replace("%data%", _work.jobs[job].title);
		var workLocation = HTMLworkLocation.replace("%data%", _work.jobs[job].location);
		var workDates = HTMLworkDates.replace("%data%", _work.jobs[job].dates);
		var workDescription = HTMLworkDescription.replace("%data%", _work.jobs[job].description);
		// combine all vars into one var
		var jobInfo = workEmployer + workTitle + workLocation + workDates + workDescription;
		// append to each div
		$(".work-entry:last").append(jobInfo);
	}
};

work.display(work);

var projects = {
	"onlineCourses": [
		{
			"projectTitle": "Design Mockup",
			"courseTitle": "Intro to HTML and CSS",
			"dates": "2015",
			"description": "Created a web page made to match an original PDF Document.",
			"image": [
				"images/mockup-screenshot.png",
				"images/mug.png"
			]
		}
	]
};

projects.display = function(_project)	{
	for (project in _project.onlineCourses){
		// create a new div for every project
		$("#projects").append(HTMLprojectStart);
		// format using helper.js
		var projectTitle = HTMLprojectTitle.replace("%data%", _project.onlineCourses[project].projectTitle);
		var projectDates = HTMLprojectDates.replace("%data%", _project.onlineCourses[project].dates);
		var projectDescription = HTMLprojectDescription.replace("%data%", _project.onlineCourses[project].description);
		// combines the formatted changes
		var formattedProject = projectTitle + projectDates + projectDescription;
		// appends the project to each div
		$(".project-entry:last").append(formattedProject);
		if (_project.onlineCourses[project].image.length > 0){
			for (image in _project.onlineCourses[project].image){
				var projectImage = HTMLprojectImage.replace("%data%", _project.onlineCourses[project].image[image]);
				$(".project-entry:last").append(projectImage)
			}
		}


	}
}

projects.display(projects);

var education = {
    "schools": [
        {
            "name": "Hardin-Simmons University",
            "location": "Abilene, TX",
            "degree": "BBS",
            "major": "English",
            "minor": "Religion",
            "dates": "2012",
            "url": "http://www.hsutx.edu"
        }
    ],
    "onlineCourses": [
    	{
    		"title": "HTML & CSS; JavaScript",
    		"school": "Codecademy",
    		"dates": "2014 - 2015",
    		"url": "http://www.codecademy.com"
    	},
        {
            "title": "How to use Git and GitHub",
            "school": "Udactiy",
            "dates": 2015,
            "url": "https://www.udacity.com/course/ud775-nd"
        },
        {
            "title": "Intro to HTML and CSS",
            "school": "Udacity",
            "dates": 2015,
            "url": "https://www.udacity.com/course/ud304-nd"
        },
        {
            "title": "JavaScript Basics",
            "school": "Udactiy",
            "dates": 2015,
            "url": "https://www.udacity.com/course/ud804-nd"
        }
    ]
};

education.display = function(_education) {
	for (school in _education.schools){
		// create a new div for every school
		$("#education").append(HTMLschoolStart);
		// format using helper.js
		var schoolNameURL = HTMLschoolNameURL.replace("%url%", education.schools[school].url);
		var schoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var schoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var schoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		var schoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		var schoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		var formattedSchool = schoolNameURL + schoolName + schoolDegree + schoolDates + schoolLocation + schoolMajor;
		// appends schools to each div
		$(".education-entry:last").append(formattedSchool)
	};
	if (_education.onlineCourses.length > 0){
		$(".education-entry:last").append(HTMLonlineClasses);
		for (onlineCourse in _education.onlineCourses){
			// format using helper.js
			var onlineClassTitleURL = HTMLonlineTitleURL.replace("%url%", _education.onlineCourses[onlineCourse].url);
			var onlineClassTitle = HTMLonlineTitle.replace("%data%", _education.onlineCourses[onlineCourse].title);
			var onlineClassSchool = HTMLonlineSchool.replace("%data%", _education.onlineCourses[onlineCourse].school);
			var onlineClassDates = HTMLonlineDates.replace("%data%", _education.onlineCourses[onlineCourse].dates);
			var onlineClassURL = HTMLonlineURL.replace("%url%", _education.onlineCourses[onlineCourse].url);
			var onlineClassPrintedURL = HTMLonlinePrintedURL.replace("%data%", _education.onlineCourses[onlineCourse].url);
			var formattedOnlineClass =  onlineClassTitleURL + onlineClassTitle + onlineClassSchool + onlineClassDates + onlineClassURL + onlineClassPrintedURL;
			//appends online classes to each div
			$(".education-entry:last").append(formattedOnlineClass);
			console.log(onlineClassTitleURL);
		}
	}
};

education.display(education);

$(document).click(function(loc) {
	// "loc" stands for "location"
	x = loc.pageX;
	y = loc.pageY;

	logClicks(x,y);
});

function inName(name){
	name = bio.name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = (name[0].slice(0,1)).toUpperCase() + (name[0].slice(1)).toLowerCase();
	name = name.join(" ");
	return name;
};

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);