const headerAttributes = {
                            id:"heading"
                        };//attributes for the header tag, we give attributes via this header to the tag
const heading = React.createElement("h1",headerAttributes,"Hello World from REACT!");
console.log(heading);//object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);