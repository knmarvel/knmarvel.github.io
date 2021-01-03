import fakestagramPic from "../pics/projects/fakestagram.png";
import kwitterPic from "../pics/projects/kwitter.png"
import battleshipPic from "../pics/projects/battleship.png"
import issPic from "../pics/projects/isslocator.png"

export const projects = {
    "Fakestagram": {
        "moduleDocstring": "Instagram clone",
        "techStack": ["Django", "Python", "Bootstrap", "dbsqlite3", "nginx", "gunicorn", "Digital Ocean"],
        "photo": fakestagramPic,
        "link": "https://kanomarvel.com"
    },
    "Kwitter": {
        "moduleDocstring": "Twitter Clone",
        "techStack": ["React", "Redux", "Heroku"],
        "photo": kwitterPic,
        "link": "https://kano-kenzie.gitlab.io/q2/assessment---kwitter-frontend/main"
    },
    "Battleship": {
        "moduleDocstring": "Battleship Online Multiplayer",
        "techStack": ["React", "Redux", "Heroku"],
        "photo": battleshipPic,
        "link": "https://janell-s-kenzie-projects.gitlab.io/battleship-frontend/"
    },
    "ISS Locator": {
        "moduleDocstring": "Displays location of the ISS on a world map",
        "techStack": "Python, Repl.it",
        "photo": issPic,
        "link": "https://repl.it/@knmarvel/backend-iss-location-assessment#iss.py"
    }
}

export default projects