'use strict';

const app = new Vue({
    el: '#app',
    data: {
        concerts: [
            // index : 0
            {
                title: 'Hans Zimmer',
                tickets: {
                    normal: 119.9,
                    reduced: 80
                }
            },
            // index : 1
            {
                title: 'Disney',
                tickets: {
                    normal: 60,
                    reduced: 45
                }
            },
            // index : 2
            {
                title: 'Two steps from hell',
                tickets: {
                    normal: 80,
                    reduced: 60
                }
            },
        ],
        concertSelected: -1,
        prices: {
            normal: 0,
            reduced: 0
        },
        tickets: {
            normal: 0,
            reduced: 0
        },
        total: 0
    },
    // Equivalent du DOMContentLoaded dans VueJS : quand tous les éléments du DOM sont "montés" (chargés)
    mounted() {
        // Traitement qui se passe au chargement de la page
    },
    methods: {
        onSelectConcert() {
            // Si aucun concert sélectionné on met les prix à 0
            if (this.concertSelected == -1) {
                this.prices.normal = 0;
                this.prices.reduced = 0;
            } else {
                this.prices.normal = this.concerts[this.concertSelected].tickets.normal.toFixed(2);
                this.prices.reduced = this.concerts[this.concertSelected].tickets.reduced.toFixed(2);
            }
        }
    },
    computed: {
        calculTotal() {
            return this.prices.normal * this.tickets.normal + this.prices.reduced * this.tickets.reduced;
        }
    }
});