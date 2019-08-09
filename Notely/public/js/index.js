var app = new Vue({
    el: '#app',
        data: {
            title: 'Notely 📓',
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
            
            addNote() {
                let { text, title, style, color, key } = this.note;
                this.notes.push({
                    text, 
                    title, 
                    date: new Date(Date.now()).toLocaleString(),
                    style,
                    color
                });
                if (!localStorage){
                    let div = document.createElement('div');
                    div.innerText = "Sorry! Your browser doesn't support local storage. You cannot save notes! :(";
                    div.classList.add('alert');
                    div.classList.add('alert-danger');
                    div.classList.add('mt-2');
                    document.getElementById("createNoteForm").appendChild(div);
                }
                else {
                    let success = document.createElement('div');
                    success.innerText = 'You just made a note! 😀';
                    success.classList.add('alert');
                    success.classList.add('alert-success');
                    success.classList.add('mt-2');
                    document.getElementById("createNoteForm").appendChild(success);
                    success.classList.add('fade-in');
                    setTimeout(()=>{ 
                        success.classList.remove('fade-in'), 
                        success.classList.add('fade-out')
                    }, 3000);
                    setTimeout(()=> {
                        document.getElementById("createNoteForm").removeChild(success);
                    }, 4000);
                }
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
