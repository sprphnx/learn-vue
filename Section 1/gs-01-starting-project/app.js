Vue.createApp({
    data(){
        return {   goals : [],
            enteredValue : ''
        };
    },
    methods:{
        addGoal(){
            this.goals.push(this.enteredValue)
        }
    }
}).mount('#app');



//The below is in vanila javascript
// const buttonEl = document.querySelector('button');
// const inputEl = document.querySelector('input');
// const listEl = document.querySelector('ul');

// buttonEl.addEventListener('click', addGoal);

// function addGoal(){
//     const enteredValue = inputEl.value;
//     const listItemEl = document.createElement('li');
//     listItemEl.textContent = enteredValue;
//     listEl.append(listItemEl);
//     inputEl.value='';
// }