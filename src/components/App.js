// create your App component here
import React, {useState, useEffect} from "react";

function App() {
    const [dogImg, setDogImg] = useState(null)

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((r) => r.json())
        .then((data) => setDogImg(data.message))
    }, [])

    if (!dogImg) {
        return <p>Loading...</p>
    }

    return (
        <div>
            <img src={dogImg} alt="A Random Dog"></img>
        </div>
    )

}
export default App