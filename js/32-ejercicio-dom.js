'use strict'

window.addEventListener('load', function(){
          console.log("DOM cargado!!");

          var formulario = document.querySelector("#formulario");
          var box_dashed = document.querySelector(".dashed");
          box_dashed.style.display = "none";

          formulario.addEventListener('submit', function(){
              console.log("Evento submit capturado");

              var nombre = document.querySelector("#nombre").value;
              var apellidos = document.querySelector("#apellidos").value;
              var edad = parseInt(document.querySelector("#edad").value);
              var cedula = document.querySelector("#cedula").value;         
              var telefono = document.querySelector("#telefono").value;
              var ciudadano = document.querySelector("#ciudadano").value;
              var email = document.querySelector("#email").value;


              //Validación del Formulario
              if(nombre.trim() == null || nombre.trim().length == 0){
                  alert("Los nombre no son valídos");
                  document.querySelector("#error_nombre").innerHTML = "El nombre no es valído";
                  return false;
              }else{
                document.querySelector("#error_nombre").style.display = "none";
              }

              if(apellidos.trim() == null || apellidos.trim().length == 0){
                alert("Los apellidos no son valídos");
                document.querySelector("#error_apellidos").innerHTML = "El apellido no es valído";
                return false;
              }else{
                document.querySelector("#error_apellidos").style.display = "none";
              }

              console.log(edad);
              if(edad == null || edad <= 0 || isNaN(edad)){
                alert("La edad no es valída");
                document.querySelector("#error_edad").innerHTML = "La edad no es valído";
                return false;
              }else{
                document.querySelector("#error_apellidos").style.display = "none";
              }


              console.log(cedula);
              if(cedula == null || cedula <= 0 || isNaN(cedula)){
                alert("La cedula no es valída");
                document.querySelector("#error_cedula").innerHTML = "La cedula no es valído";
                return false;
              }else{
                document.querySelector("#error_cedula").style.display = "none";
              }


              console.log(telefono);
              if(telefono == null || telefono <= 0 || isNaN(telefono)){
                alert("El telefono no es valída");
                document.querySelector("#error_telefono").innerHTML = "La edad no es valído";
                return false;
              }else{
                document.querySelector("#error_telefono").style.display = "none";
              }


              box_dashed.style.display = "block";

              var p_nombre = document.querySelector("#p_nombre span");
              var p_apellidos = document.querySelector("#p_apellidos span");
              var p_edad = document.querySelector("#p_edad span");
              var p_cedula = document.querySelector("#p_cedula span");       
              var p_telefono = document.querySelector("#p_telefono span");
              var p_ciudadano = document.querySelector("#p_ciudadano span");
              var p_email = document.querySelector("#p_email span");
              

              



              p_nombre.innerHTML = nombre;
              p_apellidos.innerHTML = apellidos;
              p_edad.innerHTML = edad;
              p_cedula.innerHTML = cedula;         
              p_telefono.innerHTML = telefono;
              p_ciudadano.innerHTML = ciudadano;
              p_email.innerHTML = email;



              /*
              var datos_usuario = [nombre, apellidos];

              var indice;

              for(indice in datos_usuario){
                  var parrafo = document.createElement("p");
                  parrafo.append(datos_usuario[indice]);
                  box_dashed.append(parrafo);
              }
              

              
              var parrafo = document.createElement("p");
              parrafo.append(nombre);
              parrafo.append(apellido);
              box_dashed.append(parrafo);
              */
          });

});