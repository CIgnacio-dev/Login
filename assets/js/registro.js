new Vue({
    el:".login",
    data:{
        type:0,
        form:{
            email:"",
            password:"",
        }
    },
    methods:{
        enviarForm(){
            alert("Formulario enviado")
        }
    },
    computed:{
        validarEmail(){
            var exp = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;
            if (exp.test(this.form.email)){
                return true;
            } else {
                return false;
            }
        },
        validarPass(){
            var exp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;
            if(exp.test(this.form.password)){
                return false;
            } else{
                return true;
            }
        }
    }
})