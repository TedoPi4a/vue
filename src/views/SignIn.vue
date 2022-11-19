<template>
<div>
   <h1>Logni se, Rosene</h1>
    <p><input type="text" placeholder="Email" v-model="email"  /></p>
    <p><input type="password" placeholder="Password" v-model="password"  /></p>
    <p> {{ errMsg }}</p>
    <p><button @click="register" class="button-3">Davai, Rosene</button></p>
    <p><button @click="signInWithGoogle" class="button-3"><img class="google" src="../assets/google.png"><p>Davai s 4i4o gugal, Rosene</p> </button></p>
</div>


</template>

<script setup>
import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword,
    GoogleAuthProvider,
     signInWithPopup,
} from "firebase/auth";
import { useRouter } from "vue-router";
const email = ref("");
const password = ref("");
const errMsg = ref()
const router = useRouter()

const register = () => {
    const auth = getAuth()
    signInWithEmailAndPassword(auth, email.value, password.value)
        .then((data) => {
            console.log('Bravo Rosene, Registrira se');
            console.log('auth.currentUser')
            router.push('/feed')
        })

        .catch((error) => {
            console.log(error.code);
            switch (error.code) {
                case "auth/invlid-email":
                    errMsg.value = "Nqma takuv emeil Rosene, nesho me ebavash";
                break;
                case "auth/user-not-found":
                    errMsg.value = "Nqma takuv akaunt Rosene, nesho me ebavash";
                break;
                case "auth/wrong-password":
                    errMsg.value = "Nesho parolata ne e taka, Rosene";
                break;
                default:
                    errMsg.value = "Umri";
                break;
            }
        });
};

const signInWithGoogle = () => {    
    const provider = new GoogleAuthProvider();
    signInWithPopup(getAuth(), provider)
    .then((result) => {
        console.log(result.user);
        router.push("/feed");
    })
    .catch((error) => {

    });

};
</script>

<style scoped>
input, p{
  width: 100% !important;
}
button{ 
    margin-top: 1em;
    position: relative;

}

input{
    height: 2em;
    border-radius: 1em;
    padding: 0 1em;
}
.google{
    width: 2em;
    left: 0;
    bottom: .1em;
    position: absolute;

    -webkit-filter: drop-shadow(1px 1px 0 black)
                  drop-shadow(-1px -1px 0 black);
  filter: drop-shadow(1px 1px 0 black) 
          drop-shadow(-1px -1px 0 black);
          margin: 0;
}
button p{
    padding-left: 1.2em;
}
</style>