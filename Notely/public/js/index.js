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
                
                const animateFade = () => {
                    setTimeout(()=>{ 
                        message.classList.remove('fade-in'), 
                        message.classList.add('fade-out')
                    }, 3000);
                    setTimeout(()=> {
                        document.getElementById("messageDiv").removeChild(message);
                    }, 4000);
                }
                
                let error = "";
                if (this.note.title == "" ) {
                    error += "\n Note Title";
                }
                if (this.note.text == ""){
                    error += "\n Note Text";
                }

                if (error != ""){
                    message.innerText = "🚫 Error \n You need to fix your:" + error;
                    message.classList.add('alert');
                    message.classList.add('alert-danger');
                    document.getElementById("messageDiv").appendChild(message);
                    message.classList.add('fade-in');
                    animateFade();
                    return false;
                }
                else {
                    message.innerText = 'You just made a note! 😀';
                    message.classList.add('alert');
                    message.classList.add('alert-success');
                    document.getElementById("messageDiv").appendChild(message);
                    message.classList.add('fade-in');
                    animateFade();
                }
            },

            addNote() {
                let { text, title, style, color } = this.note;
                this.displayMessage();
                this.notes.push({
                    text, 
                    title, 
                    date: new Date(Date.now()).toLocaleString(),
                    style,
                    color
                });
                // https://stackoverflow.com/questions/2010892/storing-objects-in-html5-localstorage
                // TODO: add localstorage to actually store notes.
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
