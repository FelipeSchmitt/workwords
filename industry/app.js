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

  let industry = []

  function renderTasks(){
    const conteudo = document.getElementById("content")
    conteudo.innerHTML=""
    conteudo.style.borderStyle="solid"
    for (doc of industry){
        const title = document.createElement("h1")
        title.appendChild(document.createTextNode(doc.title))
        title.style.borderTopStyle="solid";
        title.style.marginTop="-2px"
        title.style.paddingTop="30px"
        conteudo.appendChild(title)
        const img = document.createElement("img")
        img.src= doc.image;
        conteudo.appendChild(img)
        const desc = document.createElement("p")
        desc.appendChild(document.createTextNode(doc.desc))
        desc.style.marginBottom="10px"
        conteudo.appendChild(desc)
        const pdf = document.createElement("img")
        const link = document.createElement("a")
        link.setAttribute("href", doc.pdffile)
        pdf.src="https://cdn4.iconfinder.com/data/icons/file-extension-names-vol-8/512/24-512.png";
        pdf.style.width="30%";
        pdf.style.cursor="pointer"
        pdf.style.marginLeft="35%"
        conteudo.appendChild(link)
        link.appendChild(pdf)

      }
  }

async function readTasks() {
    industry = []
    const logTasks = await db.collection("industry").get()
    for (doc of logTasks.docs) {
    industry.push({
        id: doc.id,
        title: doc.data().title,
        desc: doc.data().desc,
        pdffile: doc.data().pdffile,
        image: doc.data().image,
        })
    }
    renderTasks()
}
readTasks()

  