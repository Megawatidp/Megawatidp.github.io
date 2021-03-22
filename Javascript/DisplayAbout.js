
import MakeInputText from './InputText.js';

const repeater = document.querySelector(".repeater");

export default function DisplayAbout () {

	repeater.appendChild(MakeInputText("page show info"));						// $page show info|

	const info = document.createElement("div");								// making the info div
	info.className = "info";
	const about = document.createElement("div");
	about.className = "about";
	const name = document.createElement("h4");
	name.textContent = " 🏷️: Megawati Dewi P";
	const place = document.createElement("h4");
	place.textContent = " 📍 : Jakarta, Indonesia";
	const summary = document.createElement("p");
	summary.textContent = "Hi! I'm a full stack developer ";
	const techHeader = document.createElement("p");
	techHeader.textContent = " Tools :";

	const techLogos = document.createElement("div");
	techLogos.className = "tech-logos";

	const skills = document.createElement("p");
	skills.textContent = "Java Spring Boot, Hibernate, Oracle PL/SQL, Sql Server, SSIS, Codeigniter, JavaScript, React, Angular, Jenkins, JBOSS, Apache Tomcat, Git";
	techLogos.appendChild(skills);

	about.appendChild(name);
	about.appendChild(place);
	about.appendChild(summary);
	about.appendChild(techHeader);
	about.appendChild(techLogos);

	info.appendChild(about);

	repeater.appendChild(info);
}
