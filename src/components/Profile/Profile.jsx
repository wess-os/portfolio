import styles from './Profile.module.css';
import profileImg from '../../assets/profile.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/currículo.pdf';
import { useTheme } from '../../common/ThemeContext';

function Profile() {

    const { theme, toggleTheme } = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

    return (
        
        <section id="hero" className={styles.container}>
            <div className={styles.colorModeContainer}>
                <img
                src={profileImg}
                className={styles.hero}
                alt="Profile picture of Wesley Silva"
                />
                <img
                className={styles.colorMode}
                src={themeIcon}
                alt="Color mode icon"
                onClick={toggleTheme}
                />
            </div>
            <div className={styles.info}>
                <h1>
                Wesley
                <br />
                Silva
                </h1>
                <h2>Backend Developer</h2>
                <span>
                <a href="https://github.com/wess-os" target="_blank">
                    <img src={githubIcon} alt="Github icon" />
                </a>
                <a href="https://linkedin.com/in/wess-os" target="_blank">
                    <img src={linkedinIcon} alt="Linkedin icon" />
                </a>
                </span>
                <a href={CV} download>
                <button className="hover">Resume</button>
                </a>
            </div>
        </section>

    );

}

export default Profile;