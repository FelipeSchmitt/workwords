var firebaseConfig = {
    apiKey: "AIzaSyAFL1H0z3fDHrPwYD7o27w6vpda22MWS8Q",
    authDomain: "materias-web.firebaseapp.com",
    databaseURL: "https://materias-web.firebaseio.com",
    projectId: "materias-web",
    storageBucket: "materias-web.appspot.com",
    messagingSenderId: "32173026723",
    appId: "1:32173026723:web:063f1f51d23360931b3e16"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore()

async function addTask(){
  const categoria = document.getElementById("categoria").value
  const title = document.getElementById("title").value
  const desc = document.getElementById("desc").value
  const pdffile = document.getElementById("pdffile").value
  const image = document.getElementById("image").value
  const date = new Date().toISOString()
  await db.collection(categoria).add({
    title: title,
    desc: desc,
    pdffile: pdffile,
    image: image,
    date: date,
  })
  finish()
}
function finish(){
    window.alert("Enviado com Sucesso! Muito Obrigado(a)")
    document.location.reload(true);
}

