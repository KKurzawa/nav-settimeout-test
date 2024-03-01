import { useNavigate } from 'react-router-dom';

const Page1 = () => {
    const navigate = useNavigate();

    function wait(time) {
        return new Promise(resolve => {
            setTimeout(resolve, time);
        });
    }

    async function goToPage() {
        await wait(2000);
        navigate('/Page2');
        console.log('Test')
    }
    return (
        <>
            <h1>
                Page 1
            </h1>
            <button onClick={goToPage}>Go to other page</button>
        </>
    );
};


export default Page1