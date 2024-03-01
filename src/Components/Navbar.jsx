import './Navbar.css'
import { useNavigate } from "react-router-dom";

const navLinks = [
    {
        name: 'page1',
        link: '/'
    },
    {
        name: 'page2',
        link: '/page2'
    },
    {
        name: 'page3',
        link: '/page3'
    }
]

const Navbar = () => {
    const navigate = useNavigate();

    function wait(time) {
        return new Promise(resolve => {
            setTimeout(resolve, time);
        });
    }

    async function goToPage() {
        await wait(2000);
        navigate(navLinks[0].link);
        console.log('Test')
    }

    async function goToPage2() {
        await wait(2000);
        navigate(navLinks[1].link);
        console.log('Test')
    }

    async function goToPage3() {
        await wait(2000);
        navigate(navLinks[2].link);
        console.log('Test')
    }

    return (
        <nav className='nav'>
            <ol>
                <li>
                    <button onClick={goToPage}>{navLinks[0].name}</button>
                </li>
                <li>
                    <button onClick={goToPage2}>{navLinks[1].name}</button>
                </li>
                <li>
                    <button onClick={goToPage3}>{navLinks[2].name}</button>
                </li>
            </ol>
        </nav>
    )
}

export default Navbar