import MakeInputText from "./InputText.js";

const repeater = document.querySelector(".repeater");

const makeProject = (
  headerText,
  sourceCodeLink,
  descriptionText,
  projectText,
  projectLink,
  demoText,
  demoLink
) => {
  const projectInfo = document.createElement("div");
  projectInfo.className = "project";

  const header = document.createElement("h1");
  header.textContent = headerText;
  projectInfo.appendChild(header);

  if (demoText && demoLink) {
    const demo = document.createElement("h2");
    const demoLinkTag = document.createElement("a");
    demoLinkTag.target = "_blank";
    demoLinkTag.href = demoLink;
    demoLinkTag.textContent = demoText;
    demo.appendChild(demoLinkTag);
    projectInfo.appendChild(demo);
  }

  if (projectText && projectLink) {
    const project = document.createElement("h2");
    const projectLinkTag = document.createElement("a");
    projectLinkTag.target = "_blank";
    projectLinkTag.href = projectLink;
    projectLinkTag.textContent = projectText;
    project.appendChild(projectLinkTag);
    projectInfo.appendChild(project);
  }

  const sourceCode = document.createElement("h2");
  const sourceCodeLinkTag = document.createElement("a");
  sourceCodeLinkTag.target = "_blank";
  sourceCodeLinkTag.href = sourceCodeLink;
  sourceCodeLinkTag.textContent = "Demo";
  sourceCode.appendChild(sourceCodeLinkTag);
  projectInfo.appendChild(sourceCode);

  const description = document.createElement("p");
  description.textContent = descriptionText;
  projectInfo.appendChild(description);

  return projectInfo;
};

export default function DisplayProjects() {
  repeater.appendChild(MakeInputText("page show projects"));
  const info = document.createElement("section");
  info.className = "info";
  info.setAttribute("id", "info");
  const projects = document.createElement("div");
  projects.className = "projects";
  const text_title = document.createElement("h4");
  text_title.textContent = 'Projects i created in my free time';
  projects.appendChild(text_title);

  projects.appendChild(
    makeProject(
      "Summerglad Cupcakes",
      "https://thawing-basin-71138.herokuapp.com/",
    )
  );

  projects.appendChild(
    makeProject(
      "EdgeLedger Website",
      "https://megawatidp.github.io/edgeledger/",
    )
  );

  projects.appendChild(
    makeProject(
      "Hotel Website",
      "https://megawatidp.github.io/hotel_website/",
    )
  );

  projects.appendChild(
    makeProject(
      "React Youtube Clone",
      "https://youtubeclone-reactapp.netlify.app/",
    )
  );

  projects.appendChild(
    makeProject(
      "React Simple Ecommerce",
      "https://react-clothing-eccomerce.netlify.app/",
    )
  );

  projects.appendChild(
    makeProject(
      "Aladdin Company Profile",
      "http://www.aladdin-hitec.com/",
    )
  );
  

  info.appendChild(projects);
  repeater.appendChild(info);
}
