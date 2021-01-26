function PersonalizarErro(err) {
    throw new Error("Ops, algo deu errado!!!")
}

function ImprimeNomeMaiusculo(objErr) {
   try {
    console.log(objErr.name.toUpperCase() + '!!!!')
   } catch (error) {
       PersonalizarErro(error)
   }finally {
       console.log("Final");
   }
}

ImprimeNomeMaiusculo({
    name: "Error"
})