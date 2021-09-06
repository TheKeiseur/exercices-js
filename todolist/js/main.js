'use strict';

const app = new Vue({
    el: '#app',
    data: {
        priorities: [{
                value: 1,
                name: 'élevée'
            },
            {
                value: 2,
                name: 'normale'
            },
            {
                value: 3,
                name: 'faible'
            }
        ],
        task: {},
        taskList: [],
        editingTask: null
    },
    methods: {
        addTask() {
            const newTask = {
                title: this.task.title,
                description: this.task.description,
                priority: this.task.priority
            };
            
            // Réinitialisation de l'objet task
            this.task = {};
            
            if (this.editingTask === null) {
                this.taskList.push(newTask);
            } else {
                this.taskList[this.editingTask] = newTask;
                this.editingTask = null;
            }
        },
        editTask(index) {
            this.task = {
                title: this.taskList[index].title,
                description: this.taskList[index].description,
                priority: this.taskList[index].priority
            }
            
            this.editingTask = index;
        },
        deleteTasks() {
            // Tableau qui va contenir toutes les taches que l'on ne veut PAS supprimer (toutes celles qui ne sont pas cochées)
            const tasksNotChecked = [];

            for (let i = 0; i < this.taskList.length; i++) {
                // Si la tache parcourue n'est pas cochée (sa propriété checked est à false)
                if (!this.taskList[i].checked) {
                    // Je la conserve dans mon nouveau tableau
                    tasksNotChecked.push(this.taskList[i]);
                }
            }

            // Mise à jour du tableau des taches taskList
            this.taskList = tasksNotChecked;
        },
        getPriorityName(priorityValue) {
            let priorityName;

            for (let i = 0; i < this.priorities.length; i++) {
                if (this.priorities[i].value == priorityValue) {
                    priorityName = this.priorities[i].name;
                    
                    // Une fois qu'on a trouvé le nom de la priorité on peut sortir de la boucle
                    break;
                }
            }
            
            return priorityName;
        }
    }
});
