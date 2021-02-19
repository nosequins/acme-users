

const faker= require('faker');


const people= new Array(4).fill('').map(_=>{
    
    return faker.name.firstName()});

let curr= window.location.hash.slice(1)*1;
console.log(curr);
const userList= document.querySelector('#user-list');
const render=()=>{
    const html= `${people.map((person, idx)=>{
        return `<li>
            <a href='#${idx}'>${person}</a>
            ${
                curr=== idx ? `<li>${faker.lorem.text()}</li>
                <li>${faker.lorem.text()}</li>
                <li>${faker.lorem.text()}</li>` : ''
                
            } 
                    
              </li>`
    }).join('')}`
    userList.innerHTML= html;
}

render()

window.addEventListener('hashchange', ()=>{
    curr= window.location.hash.slice(1)*1;
    render();
})