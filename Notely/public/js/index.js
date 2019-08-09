var app = new Vue({
    el: '#app',
        data: {
            title: 'Notely 📓',
            tagline: 'Notes for the modern era',
            currentColor: {
                style: 'border',
                text: "All"
            },

            note: {
                title: '',
                text: '',
                style: '',
                color: ''
            },

            notes: [
                {
                    title: 'First Note',
                    text: 'I loved my first note!',
                    date: new Date(Date.now()).toLocaleString(),
                    style: 'border-primary',
                    color: 'Blue'
                }
            ]
        },
        
        methods: {
            
            displayMessage() {
                let message = document.createElement('div');
                if (!localStorage){
                    message.innerText = "Sorry! Your browser doesn't support local storage. You cannot save notes! :(";
                    message.classList.add('alert');
                    message.classList.add('alert-danger');
                    document.getElementById("messageDiv").appendChild(message);
                }
                else {
                    message.innerText = 'You just made a note! 😀';
                    message.classList.add('alert');
                    message.classList.add('alert-success');
                    document.getElementById("messageDiv").appendChild(message);
                    message.classList.add('fade-in');
                    setTimeout(()=>{ 
                        message.classList.remove('fade-in'), 
                        message.classList.add('fade-out')
                    }, 3000);
                    setTimeout(()=> {
                        document.getElementById("messageDiv").removeChild(message);
                    }, 4000);
                }
            },

            addNote() {
                let { text, title, style, color, key } = this.note;
                this.notes.push({
                    text, 
                    title, 
                    date: new Date(Date.now()).toLocaleString(),
                    style,
                    color
                });
                this.displayMessage();
            },

            removeNote(index){
                var confirmDelete = confirm("Are you sure you want to delete?");
                if (confirmDelete) this.notes.splice(index, 1);                    
            },

            organizeNotesByColor(){
                let select = document.getElementById("organizeSelect");
                this.currentColor.style = select.value;
                this.currentColor.text = select.options[select.selectedIndex].text;
            }
        }

    }); 
