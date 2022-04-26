 function EstadosEnviosNext (state, action, next) {
    var desc = "";
    if(next == 1){
    switch (state) {
        case 'I':
          console.log('Ingresado');
          if(action == 'O'){
            desc = "R"
            return desc;
          }else {
            desc = "X"
            return desc;
          }
        case 'C':
          console.log('Calendarizado');
          if(action == 'O'){
            desc = "R"
            return desc;
          }else {
            desc = "CE"
            return desc;
          }
        case 'CR':
          console.log('Camino Recolectar');
          desc = "R"
          return desc;
        case 'R':
          console.log('Recolectado');
          desc = "CE"
          return desc;
        case 'B':
            console.log('Bodega');
            desc = "CE"
            return desc;
        case 'CE':
          console.log('Camino a Entregar');
          desc = "E"
          return desc;
        case 'E':
          console.log('Entregado');
          desc = "ER"
          return desc;
        case 'ER':
        console.log('En Reserva');
        desc = "D"
        return desc;
        case 'D':
          console.log('Depositado');
          desc = "Depositado"
          return desc;
        case 'X':
          console.log('Cancelado');
          desc = "Cancelado"
          return desc;
        default:
          console.log('Error');
          desc = "Error"
          return desc;
      }
    }
    else if(next ==2 ){
      console.log(state)
      console.log(action)
      switch (state) {
        case 'I':
          console.log('Ingresado');
          if(action == 'O'){
            desc = "CR"
            return desc;
          }else {
            desc = "CE"
            return desc;
          }
        case 'C':
          console.log('Calendarizado');
          if(action == 'O'){
            desc = "CR"
            return desc;
          }else {
            desc = "CE"
            return desc;
          }
        case 'CR':
          console.log('Camino Recolectar');
          desc = "R"
          return desc;
        case 'R':
          console.log('Recolectado');
          desc = "CE"
          return desc;
        case 'B':
            console.log('Bodega');
            desc = "CE"
            return desc;
        case 'CE':
          console.log('Camino a Entregar');
          desc = "E"
          return desc;
        case 'E':
          console.log('Entregado');
          desc = "ER"
          return desc;
        case 'ER':
        console.log('En Reserva');
        desc = "D"
        return desc;
        case 'D':
          console.log('Depositado');
          desc = "Depositado"
          return desc;
        case 'X':
          console.log('Cancelado');
          desc = "Cancelado"
          return desc;
        default:
          console.log('Error');
          desc = "Error"
          return desc;
      }
    }

}

module.exports = EstadosEnviosNext;