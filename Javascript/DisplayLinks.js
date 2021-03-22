import MakeInputText from './InputText.js';

const repeater = document.querySelector(".repeater");

const makeLink = (iconName, hyperLink) => {
	const link = document.createElement("a");
	const linkIcon = document.createElement("i");
	linkIcon.className = `fa fa-${iconName} icon`;
	link.appendChild(linkIcon);
	link.target = "_blank";
	link.href = hyperLink;
	return link;
}

export default function DisplayLinks () {

	repeater.appendChild(MakeInputText("page show links"));						// $page show links|

	const info = document.createElement("section");									// making the info div
	info.className = "info";
	info.setAttribute("id", "info");
	const links = document.createElement("div");
	links.className = "links";

	const mail = makeLink("envelope", "mailto:megadewikp@gmail.com");
	const github = makeLink("github", "https://github.com/Megawatidp");
	const linkedin = makeLink("linkedin-square", "https://www.linkedin.com/in/megawati-dewi-pamungkas-696621136/");
	const twitter = makeLink("twitter", "https://twitter.com/hicsuntleones26");

	links.appendChild(mail);
	links.appendChild(github);
	links.appendChild(linkedin);
	links.appendChild(twitter);

	info.appendChild(links);
	repeater.appendChild(info);
}
