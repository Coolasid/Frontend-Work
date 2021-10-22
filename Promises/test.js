function append(s){

    let script = document.createElement("script")

    script.src = s

    document.head.append(script)
    console.log(document)
}

append("/myScript.js")