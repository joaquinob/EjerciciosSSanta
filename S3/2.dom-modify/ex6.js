const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

let ul$ = document.createElement('ul')
for(let app of apps) {
    let list$ = document.createElement('li');
    list$.textContent = app;
    ul$.appendChild(list$);
}
document.body.appendChild(ul$);