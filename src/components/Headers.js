import './Headers.css';
import { BsFillSunFill, BsMoonStars } from "react-icons/bs";

export default function Headers(props) {
    const { theme, setTheme } = props;

    function toggleTheme() {
        if (theme === 'light') {
            setTheme("dark")
        } else {
            setTheme("light")
        }
    }

    return (
        <header>
            <div className="logo">
                <span>Task Management</span>
            </div>
            <div className="theme-container">
                <span>{theme === 'light' ? "โหมดกลางวัน" : "โหมดกลางคืน"}</span>
                <span>
                    {theme === 'light' ? <BsFillSunFill className="icon" onClick={toggleTheme} /> : <BsMoonStars className="icon" onClick={toggleTheme} />}
                </span>
            </div>
        </header>
    )
}