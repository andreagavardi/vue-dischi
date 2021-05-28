 
 /* Attraverso una chiamata ajax all’API di boolean https://flynn.boolean.careers/exercises/api/array/music avremo a disposizione una decina di dischi musicali.
Utilizzando vue, stampiamo a schermo una card per ogni album.
BONUS: Creare una select con tutti i generi dei dischi. In base a cosa scegliamo nella select, vedremo i corrispondenti cd.
BONUS 2: Ordinare i dischi per anno di uscita. */
 
const app = new Vue ({ 
    el: '#app',
    data:{ 
        url:"https://flynn.boolean.careers/exercises/api/array/music",
        albums:"",
        albumsOrdered:[]
        
    },
    methods:{ },
    mounted(){
        
        axios.get(this.url)
        .then(resp =>{
            this.albums=resp.data.response
             this.albums.sort(compare)   
        });


        /* Bonus ordinare gli album per data di uscita */
        function compare( a, b ) {
            if ( a.year < b.year ){
              return -1;
            }
            if ( a.year > b.year ){
              return 1;
            }
            return 0;
        };
       
        
    }
}) 