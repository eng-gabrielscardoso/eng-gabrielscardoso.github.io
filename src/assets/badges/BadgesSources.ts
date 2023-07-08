interface IBackendBadge {
  href: string;
  label: string;
  src: string;
}

const BadgesSources: IBackendBadge[] = [
  {
    href: "https://github.com/eng-gabrielscardoso",
    label: "Github",
    src: "https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white",
  },
  {
    href: "https://www.linkedin.com/in/eng-gabrielscardoso/",
    label: "LinkedIn",
    src: "https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white",
  },
  {
    href: "mailto:eng.gabrielscardoso@gmail.com",
    label: "GMail",
    src: "https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white",
  },
];

export default BadgesSources;
