var bio = {
	"name": "David Wampler",
	"role": "Web Developer",
	"welcomeMsg": "Hi, I'm David Wampler. Please take your time exploring my interactive resume.",
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

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.gitHub);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

var formattedbioPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMsg);
var formattedSkills0 = HTMLskills.replace("%data%", bio.skills[0]);
var formattedSkills1 = HTMLskills.replace("%data%", bio.skills[1]);
var formattedSkills2 = HTMLskills.replace("%data%", bio.skills[2]);
var formattedSkills3 = HTMLskills.replace("%data%", bio.skills[3]);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGitHub);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedLocation);

$("#header").append(formattedbioPic);
$("#header").append(formattedWelcomeMsg);
$("#header").append(HTMLskillsStart);
$("#header").append(formattedSkills0);
$("#header").append(formattedSkills1);
$("#header").append(formattedSkills2);
$("#header").append(formattedSkills3);

$("#footerContacts").append(formattedMobile);
$("#footerContacts").append(formattedEmail);
$("#footerContacts").append(formattedGitHub);
$("#footerContacts").append(formattedTwitter);
$("#footerContacts").append(formattedLocation);

var work = {
	"jobs": [
		{
			"employer": "RR Donnelley",
			"title": "Bindery Material Handler",
			"location": "Florence, KY",
			"dates": "2013-2015",
			"description": "Help maintain and operate machines. Prepare material for transport."
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
			"title": "Student Worker",
			"location": "Abilene, TX",
			"dates": "2011",
			"description": "Worked with students to produce university-level papers."
		}
	]
};

var workStart = HTMLworkStart;

var workEmployer0 = HTMLworkEmployer.replace("%data%", work.jobs[0].employer);
var workTitle0 = HTMLworkTitle.replace("%data%", work.jobs[0].title);
var workLocation0 = HTMLworkLocation.replace("%data%", work.jobs[0].location);
var workDates0 = HTMLworkDates.replace("%data%", work.jobs[0].dates);
var workDescription0 = HTMLworkDescription.replace("%data%", work.jobs[0].description);

var workEmployer1 = HTMLworkEmployer.replace("%data%", work.jobs[1].employer);
var workTitle1 = HTMLworkTitle.replace("%data%", work.jobs[1].title);
var workLocation1 = HTMLworkLocation.replace("%data%", work.jobs[1].location);
var workDates1 = HTMLworkDates.replace("%data%", work.jobs[1].dates);
var workDescription1 = HTMLworkDescription.replace("%data%", work.jobs[1].description);

var workEmployer2 = HTMLworkEmployer.replace("%data%", work.jobs[2].employer);
var workTitle2 = HTMLworkTitle.replace("%data%", work.jobs[2].title);
var workLocation2 = HTMLworkLocation.replace("%data%", work.jobs[2].location);
var workDates2 = HTMLworkDates.replace("%data%", work.jobs[2].dates);
var workDescription2 = HTMLworkDescription.replace("%data%", work.jobs[2].description);

$("#workExperience").append(workStart);

$("#workExperience").append(workEmployer0);
$("#workExperience").append(workTitle0);
$("#workExperience").append(workLocation0);
$("#workExperience").append(workDates0);
$("#workExperience").append(workDescription0);

$("#workExperience").append(workEmployer1);
$("#workExperience").append(workTitle1);
$("#workExperience").append(workLocation1);
$("#workExperience").append(workDates1);
$("#workExperience").append(workDescription1);

$("#workExperience").append(workEmployer2);
$("#workExperience").append(workTitle2);
$("#workExperience").append(workLocation2);
$("#workExperience").append(workDates2);
$("#workExperience").append(workDescription2);

var projects = {
	"onlineCourses": {
		"projectTitle": "Design Mockup",
		"courseTitle": "Intro to HTML and CSS",
		"dates": "2015",
		"description": "Created a web page made to match an original PDF Document.",
		"image": "images/mockup-screenshot.png"
	}
};

var projectStart = HTMLprojectStart;

var projectTitle = HTMLprojectTitle.replace("%data%", projects.onlineCourses.projectTitle);
var projectDates = HTMLprojectDates.replace("%data%", projects.onlineCourses.dates);
var projectDescription = HTMLprojectDescription.replace("%data%", projects.onlineCourses.description);
var projectImage = HTMLprojectImage.replace("%data%", projects.onlineCourses.image);

$("#projects").append(projectStart);

$("#projects").append(projectTitle);
$("#projects").append(projectDates);
$("#projects").append(projectDescription);
$("#projects").append(projectImage);

var education = {
    "schools": [
        {
            "name": "Hardin-Simmons University",
            "location": "Abilene, TX",
            "degree": "BBS",
            "major": "English",
            "minor": "Religion",
            "dates": "2012",
            "url": "http://www.hsutx.edu/"
        },
        {
            "onlineCourses": [
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
        }
    ]
};

var educationStart = HTMLschoolStart;

var schoolName = HTMLschoolName.replace("%data%", education.schools[0].name);
var schoolDegree = HTMLschoolDegree.replace("%data%", education.schools[0].degree);
var schoolDates = HTMLschoolDates.replace("%data%", education.schools[0].dates);
var schoolLocation = HTMLschoolLocation.replace("%data%", education.schools[0].location);
var schoolMajor = HTMLschoolMajor.replace("%data%", education.schools[0].major);

var onlineClassesStart = HTMLonlineClasses;

var onlineClassesGitTitle = HTMLonlineTitle.replace("%data%", education.schools[1].onlineCourses[0].title);
var onlineClassesGitSchool = HTMLonlineSchool.replace("%data%", education.schools[1].onlineCourses[0].school);
var onlineClassesGitDates = HTMLonlineDates.replace("%data%", education.schools[1].onlineCourses[0].dates);
var onlineClassesGitURL = HTMLonlineURL.replace("%data%", education.schools[1].onlineCourses[0].url);

var onlineClassesHTMLCSSTitle = HTMLonlineTitle.replace("%data%", education.schools[1].onlineCourses[1].title);
var onlineClassesHTMLCSSSchool = HTMLonlineSchool.replace("%data%", education.schools[1].onlineCourses[1].school);
var onlineClassesHTMLCSSDates = HTMLonlineDates.replace("%data%", education.schools[1].onlineCourses[1].dates);
var onlineClassesHTMLCSSURL = HTMLonlineURL.replace("%data%", education.schools[1].onlineCourses[1].url);

var onlineClassesJavaScriptTitle = HTMLonlineTitle.replace("%data%", education.schools[1].onlineCourses[2].title);
var onlineClassesJavaScriptSchool = HTMLonlineSchool.replace("%data%", education.schools[1].onlineCourses[2].school);
var onlineClassesJavaScriptDates = HTMLonlineDates.replace("%data%", education.schools[1].onlineCourses[2].dates);
var onlineClassesJavaScriptURL = HTMLonlineURL.replace("%data%", education.schools[1].onlineCourses[2].url);

$("#education").append(educationStart);

$("#education").append(schoolName + schoolDegree);
$("#education").append(schoolDates);
$("#education").append(schoolLocation);
$("#education").append(schoolMajor);

$("#education").append(onlineClassesStart);

$("#education").append(onlineClassesGitTitle + onlineClassesGitSchool);
$("#education").append(onlineClassesGitDates);
$("#education").append(onlineClassesGitURL);

$("#education").append(onlineClassesHTMLCSSTitle + onlineClassesHTMLCSSSchool);
$("#education").append(onlineClassesHTMLCSSDates);
$("#education").append(onlineClassesHTMLCSSURL);

$("#education").append(onlineClassesJavaScriptTitle + onlineClassesJavaScriptSchool);
$("#education").append(onlineClassesJavaScriptDates);
$("#education").append(onlineClassesJavaScriptURL);

