const parent1 = React.createElement("div",{id:"parent1"},
                                    React.createElement("div",{id:"child1"},
                                                        [React.createElement("h1",{},"I'm h1 heading!"),React.createElement("h2",{},"I'm h2 heading!")]                    
                                                       )
                                  );
const parent2 = React.createElement("div",{id:"parent2"},
                                  React.createElement("div",{id:"child2"},
                                                      [React.createElement("h1",{},"I'm h1 heading!"),React.createElement("h2",{},"I'm h2 heading!")]                    
                                                     )
                                );
const parent = React.createElement("div",{id:"parent"},[parent1,parent2])
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);