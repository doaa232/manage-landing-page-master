
new Vue({
    el:'#app',
    data:{
        showMenu:false, 
        cards:[
            {
                id:0,
                img:"img/avatar-anisha.png",
                name:"Anisha li",
                p:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus vitae sint cum tempore. Facilis hic voluptatibus sunt inventore. Repudiandae voluptate totam adipisci aliquam corporis aliquid dignissimos? Inventore, voluptatem atque. Velit",
                display:"none",
                show:false,
            },
            {
                id:1,
                img:"img/avatar-ali.png",
                name:"Ali Bravo",
                p:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae corrupti, nam rerum sapiente optio dolorem reiciendis porro harum saepe possimus quam enim voluptas quas nemo fugiat minima similique. Ipsa, vero!",
                display:"block",
                show:true,
            },
            {
                id:2,
                img:"img/avatar-richard.png",
                name:"Richard Watts",
                p:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis praesentium, inventore repellat labore eum nostrum, eius fugit autem distinctio, dolore non. Blanditiis autem quaerat vitae at id debitis, natus qui.",
                display:"none",
                show:false,
            },
            {
                id:3,
                img:"img/avatar-shanai.png",
                name:"shanai Gough",
                p:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore numquam debitis facere dolores exercitationem laboriosam distinctio eum iure optio aut, veritatis sed fugit nulla est rem, quis nisi laborum nesciunt!",
                display:"none",
                show:false,
            },
            
        ],


    },
    methods: {
        goToLeft(id){
            this.cards[id].display="none";

            if(id>0){    
                this.cards[id - 1].display="block";
            }else{
                this.cards[3].display="block";
            }
            
        },
        goToRight(id){
            this.cards[id].display="none";

            if(id<3){    
                this.cards[id + 1].display="block";
            }else{
                this.cards[0].display="block";
            }
        },
        goToCard(id){
            this.cards.forEach(card => {
                card.display = "none";
            });
            this.cards[id].display="block";
        }
    },
});
