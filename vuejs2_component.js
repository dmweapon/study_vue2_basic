Vue.component('name-change', {
    template: `
    <div>
        컴포넌트로 만든 영역 <br>
        {{ guide }} -> <button type="button" @click="changeTextC()">클릭</button>
    </div>
    `,
    data() {
        return { guide: 'smith로 변경하기' }
    },
    methods: {
        changeTextC() {
            instance0.name = 'smith'
        }
    },
});