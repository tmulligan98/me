export const skills = [
    "Git",
    "Python",
    "C/C++",
    "FastAPI",
    "SQL",
    "OpenCV",
    "ReactJS",
    "SCRUM/AGILE",
    "OOP",
    "TDD"
]

export const projects = [
    {
        title: "Mobile Tennis Analysis",
        subtitle: "An investigation into its applicability...",
        description:
            "For my Masters Dissertation, I was tasked with developing a multi-device Mobile Tennis Analysis System. This project was hinged on the idea that multiple mobile phones positioned on each tennis post could provide a more complete outlook of a given Tennis game. For this, C++ and OpenCV were used to build the application, with Python used to build a custom ground truth generation tool.",
        image: require("./tennis.gif"),
        link: "https://github.com/tmulligan98/masters-thesis",
    },
    {
        title: "Disaster Management System",
        subtitle: "A year long team project...",
        description:
            "My team and I were required to put together a system that could deal with disasters as they occured throughout Dublin City. The backend of the application was built using Python FastAPI, and deployed to Heroku. The chosen database for this project was PostgreSQL. We chose ReactJS as the frontend framework for this project.",
        image: require("./city.gif"),
        link: "https://github.com/tmulligan98/ase-project-backend",
    },


]