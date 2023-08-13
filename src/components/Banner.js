import "./styling.css"

export default function Banner() {
    //export this function/import in Apps.js. nest the banner component in the App() function.
    return (
        <div>
            <header>
                <h1>Orbit Report</h1>
            </header>
            <p>Click on the buttons to see the satellites in that orbit type</p>
        </div>
    )
}