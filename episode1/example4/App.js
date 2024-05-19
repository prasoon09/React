const parent = React.createElement("div",
                                    {id:"parent"},
                                    React.createElement("div",
                                                        {id:"child"},
                                                        [
                                                            React.createElement("h1",{},"I'm h1 heading!"),
                                                            React.createElement("h2",{},"I'm h2 heading!")
                                                        ]                    
                                                       )
                                  );
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);