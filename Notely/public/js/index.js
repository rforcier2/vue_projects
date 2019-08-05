var app = new Vue({
    el: '#app',
        data: {
            title: 'Notely',
            note: {
                title: '',
                text: ''
            },

            notes: [
                {
                    title: 'First Note',
                    text: 'I loved my first note!',
                    date: new Date(Date.now()).toLocaleString()
                }
            ]
        },
        
        methods: {
            addNote() {
                let { text, title } = this.note;
                this.notes.push({
                    text, 
                    title, 
                    date: new Date(Date.now()).toLocaleString()
                })
            }
        }
    }); 
