const person = {
    firstName: "John",      		//PROPIEDAD firstname
    lastName: "Doe",               // Propiedad lastname
    id: 5566,                      // Propiedad id
    fullName: function() {		//Metodo fullname
    return this.firstName + " " + this.lastName;
    },
    age: function(param) {		//Metodo
      return "my Age is " + param;
    },
    cambiarNom: function (nombre) {  //Asi se cambian los valores de los objetos, mediante una funcion
        this.firstName=nombre;
        return this.firstName
    }
  };
  
  // Display data from the object:
  document.getElementById("demo1").innerHTML = person.firstName;
  document.getElementById("demo2").innerHTML = person.lastName;
  document.getElementById("demo3").innerHTML = person.id;
  document.getElementById("demo4").innerHTML = person.fullName();
  document.getElementById("demo5").innerHTML = person.age(35);

  person.firstName="Pepe";          //Aqui se cambian los parametros de const person
  person.lastName="Rubianes";
  person.id="10";
  


  document.getElementById("demo10").innerHTML = person.firstName;
  document.getElementById("demo20").innerHTML = person.lastName;
  document.getElementById("demo30").innerHTML = person.id;
  document.getElementById("demo40").innerHTML = person.fullName();
  document.getElementById("demo50").innerHTML = person.age(35);

  document.getElementById("demo11").innerHTML = person.cambiarNom ("Pablo");
  document.getElementById("demo12").innerHTML = person.firstName;












  //GATO RELOJ DIGITAL
//   var segundos = ;
//   var minutos = ;
//   const puntitos = ;