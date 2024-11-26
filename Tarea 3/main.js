// Imágenes en un Arreglo
const imagenes = [ "https://www.aviacioncivil.gob.ec/wp-content/uploads/2012/10/dialogo_patria_va.png",
                   "https://www.aviacioncivil.gob.ec/wp-content/uploads/2012/10/plusvalia_rotativo.png",
                   "https://www.aviacioncivil.gob.ec/wp-content/uploads/2020/07/ETAC-01-JULIO.jpg",
                   "https://www.aviacioncivil.gob.ec/wp-content/uploads/2020/07/DGAC-extiende-validez-de-los-certificados-otorgados-del-personal-t%c3%a9cnico-1-570x220.jpg",
                   "https://www.aviacioncivil.gob.ec/wp-content/uploads/2020/07/COE-ampl%c3%ada-frecuencia-de-vuelos-hasta-el-50-desde-el-1-de-agosto-570x220.jpg",
                  
                ];

  let Index = 0;

  const imagen = document.getElementById("imagen");
  const anterior = document.getElementById("anterior");
  const siguiente = document.getElementById("siguiente");
  const indicador = document.getElementById("indicador");

  function mostrar() {
    imagen.src = imagenes[Index];
    indicador.textContent = `Imagen ${Index + 1} de ${imagenes.length}`;
    anterior.disabled = Index === 0;
    siguiente.disabled = Index === imagenes.length - 1;
  }

  anterior.addEventListener("click", () => {
    if (Index > 0) {
      Index--;
      mostrar();
    }
  });

  siguiente.addEventListener("click", () => {
    if (Index < imagenes.length - 1) {
      Index++;
      mostrar();
    }
  });

  mostrar();