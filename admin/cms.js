import CMS from "netlify-cms-app";

CMS.init();

CMS.registerPreviewStyle("/styles.css"); // Puedes cambiar la ruta a tu CSS real si lo tienes

const PagePreview = ({ entry }) => {
  const title = entry.getIn(["data", "title"]);
  const body = entry.getIn(["data", "body"]);

  return `
    <div style="padding: 2rem; font-family: sans-serif;">
      <h1>${title}</h1>
      <div>${body}</div>
    </div>
  `;
};

CMS.registerPreviewTemplate("pages", ({ entry }) => {
  const container = document.createElement("div");
  container.innerHTML = PagePreview({ entry });
  return container;
});

