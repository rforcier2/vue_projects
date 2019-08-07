var app = new Vue({
    el: '#app',
        data: {
            title: 'Notely',
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
            created(){
                if(localStorage){
                    for(let each in localStorage){
                        notes.push(localStorage[each]);
                    }
                }
                else {
                    alert('you cannot save notes! Your browser does not support localStorage :(');
                }
            },
            addNote() {
                let { text, title, style, color } = this.note;
                this.notes.push({
                    text, 
                    title, 
                    date: new Date(Date.now()).toLocaleString(),
                    style,
                    color
                })
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
