new Vue({
    // マウントする要素を指定
    el: '#app',
    data: () => ({
        message: "",
        todo_list: [
            { id: 1, text: "todo list 1" },
            { id: 2, text: "todo list 2" },
            { id: 3, text: "todo list 3" },
        ],
        point: 0,
    }),
    methods: {
        onInput(e) {
            const textValue = e.target.value;

            this.message = e.target.value;
        },
        addTodoList() {
            // 現在の配列の個数から、次のid番号を取得する
            const nextId = this.todo_list.length + 1;

            // v-modelで入力されたmessageを新たなtodotextとする
            const todoText = this.message;

            // listと同様のオブジェクトにする
            const newTodo = { id: nextId, text: todoText };

            // 配列に加える
            this.todo_list.push(newTodo);

            // 配列に加えた後、inputの中身を空にする
            this.message = '';
        },
        randomNumber(maxNumber, minNumber){
            return Math.random() * ( maxNumber - minNumber ) + minNumber;
        },
        scatter(event){
            event.target.style.marginTop = this.randomNumber(0,50) + "%";
            event.target.style.marginLeft = this.randomNumber(0,50) + "%";
            this.point++;
            let audioElm = new Audio('hyu.mp3');
            audioElm.play();
        }
    },
    computed: {
        isDisabled() {
            if (this.message.length <= 0) {
                return true;
            } else {
                return false;
            }
        }
    },
    mounted: function(){
        const elem1List = document.querySelectorAll(".elem1");
        const elem2 = document.getElementById("elem2");

        const elementList = [
            elem2
        ];

        elementList.forEach(elem => {
            elem.style.marginTop = this.randomNumber(0,50) + "%";
            elem.style.marginLeft = this.randomNumber(0,50) + "%";
        });
        elem1List.forEach(elem => {
            elem.style.marginTop = this.randomNumber(-5,50) + "%";
            elem.style.marginLeft = this.randomNumber(-5,97) + "%";
        });
    }
})