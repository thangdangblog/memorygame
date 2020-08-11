class MemoryGame {

    dataGame = [
        {
            value: '<i class="fas fa-laptop"></i>',
            data: 1
        },
        {
            value: '<i class="fas fa-laptop"></i>',
            data: 1
        },
        {
            value: '<i class="fab fa-phoenix-framework"></i>',
            data: 2
        },
        {
            value: '<i class="fab fa-phoenix-framework"></i>',
            data: 2
        },
        {
            value: '<i class="far fa-save"></i>',
            data: 3
        },
        {
            value: '<i class="far fa-save"></i>',
            data: 3
        },
        {
            value: '<i class="fas fa-database"></i>',
            data: 4
        },
        {
            value: '<i class="fas fa-database"></i>',
            data: 4
        },
        {
            value: '<i class="fas fa-mobile-alt"></i>',
            data: 5
        },
        {
            value: '<i class="fas fa-mobile-alt"></i>',
            data: 5
        },
        {
            value: '<i class="far fa-keyboard"></i>',
            data: 6
        },
        {
            value: '<i class="far fa-keyboard"></i>',
            data: 6
        },
        {
            value: '<i class="fas fa-rocket"></i>',
            data: 7
        },
        {
            value: '<i class="fas fa-rocket"></i>',
            data: 7
        },
        {
            value: '<i class="fas fa-robot"></i>',
            data: 8
        },
        {
            value: '<i class="fas fa-robot"></i>',
            data: 8
        }
    ];

    statusClick = 0;

    constructor(){
        this.initEvents();
        this.initGame();

        console.log();
    }

    initEvents = () => {
        $(".box").click(this.changeBox);
    }

    changeBox = (event) => {
        let box = event.target;
        $(box).parent().addClass("clicked");

        console.log($(box).parents());

        // if(this.statusClick == 2){
        //     console.log($(".clicked"));

        //     this.statusClick = 0;
        // }
    }

    initGame(){
        this.randData = this.shuffle(this.dataGame);
        this.randData.forEach((value,index) => {
            $($(".box")[index]).find(".back-box").html(value.value);
            $($($(".box")[index]).find(".back-box")).attr("data-game",value.data);
        });
    }

    shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

}

$(document).ready(function () {
    const memoryGame = new MemoryGame();
});
