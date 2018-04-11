//Versión de Solidity a utilizar
pragma solidity  ^0.4.17;

//Instancia de un primer contrato, este primer contrato de encarga de generar instancias del contrato Campaign
contract CampaignFactory{

    //Único atributo del contrato generador de campañas, el presente atributo se utiliza para devolver todas las direcciones instancias generadas
    address[] public deployedCampaigns;

    //Función que genera instancias del contrato Campaign, recibe un monto mínimo de contribución, un monto máximo, y un número máximo de contribuyentes
    function createCampaign(uint minimum, uint maximum, uint maxCont, uint approveRate, uint rejectRate) public{
        address newCampaign = new Campaign(minimum, maximum, maxCont, msg.sender, approveRate, rejectRate);

        //Una vez creada la instancia, se agrega al arreglo de direcciones de instancias de Campaigns
        deployedCampaigns.push(newCampaign);
    }

    //Función que retorna un arreglo de direcciones con todas las intancias de Campaigns
    function getDeployedCampaigns()public view returns (address[]){
        return deployedCampaigns;
    }

}

//Contrato principal, en este contrato se implementa toda la lógica y funcionalidad de las campañas
contract Campaign{

    //Estructura Request que representa una petición creada por el gerente del contrato
    struct Request{

        //String que representa la descripción de la solicitud
        string description;

        //Entero positivo que representa el valor que desea retirar la solicitud de la campaña
        uint value;

        //Dirección que recibirá los fondos de la solicitud
        address recipient;

        //Variable booleana que representa si la solicitud ha sido completada o no
        bool complete;

        //Entero positivo que representa la cantidad de votos aprobados de la solicitud
        uint approvalCount;

        //Entero positivo que representa la cantidad de votos rechazados de la solicitud
        uint rejectsCount;

        //Entero que representa el momento en que se creó la solicitud
        uint created;

        //Tipo de dato mapping, que realiza la correspondencia de una dirección con un valor booleano, en cuanto se realice una votación, el mapeo de la dirección de esta variable será asignado a True
        mapping (address => bool) approvals;
    }

    //Lista de atributos del contrato

    //Arreglo de solicitudes que posee el contrato
    Request[] public requests;

    //Dirección del gerente del contrato
    address public manager;

    //Contribución mínima
    uint public minimumContribution;

    //Contribución máxima
    uint public maximumContribution;

    //Número máximo de contribuyentes
    uint public maxContributors;

    //Porcentaje de aprobación
    uint public approvalRate;

    //Porcentaje de rechazo
    uint public rejectedRate;

    //Mapeo de direcciones a valores booleanos que representan la lista de contribuyentes votantes
    mapping (address => bool) public approvers;

    //Contador de votantes
    uint public approversCount;

    //Función que restringe la posibilidad de una función a ser llamada, en este caso, retringe a la función a ser llamada por alguien que no sea el gerente de la campaña
    modifier restricted(){
        require(msg.sender == manager);
        _;
    }

    //Constructor del contrato, recibe sus parámetros desde la función createCampaign de CampaignFactory
    function Campaign(uint minimum, uint maximum, uint maxCont, address creator, uint approveRate, uint rejectRate) public{
        require (minimum > 0);
        manager = creator;
        minimumContribution = minimum;
        maximumContribution =  maximum;
        maxContributors = maxCont;
        approvalRate = approveRate;
        rejectedRate = rejectRate;
    }

    //Functión que permite a una dirección contribuir a la campaña, la palabra reservada 'payable' indica que la función debe recibir un valor en wei, el cual será agregado a la instancia del contrato
    function contribute() public payable{
        //Requerimientos básicos para que la función pueda seguir su curso natural:
        //-El valor con el que se llama a la función debe ser mayor a la mínima contribución establecida
        //-El valor con el que se llama a la función debe ser menor a la máxima contribución establecida, o ser cero, para que no haya límite en la contribución
        //-El número de direcciones que aprueban una solicitud no puede ser mayor al número máximo de contribuyentes, o debe ser 0, en caso de que no haya límite
        require (msg.value > minimumContribution &&
            (msg.value < maximumContribution || maximumContribution == 0 )&&
            (approversCount < maxContributors || maxContributors == 0));

        //Este condicional permite a una dirección contribuir varias veces a una misma campaña
        if( approvers[msg.sender] == false){

          //Una vez que se verifique que la dirección no ha contribuido antes, se mapea su valor a true, y se aumenta el contador
          approvers[msg.sender] = true;
          approversCount++;
        }
    }

    //Función que crea una solicitud, recibe una descripción, un valor y una dirección destino (Nótese el atributo restricted: sólo puede ser llamada por el gerente de la campaña)
    function createRequest(string description, uint value, address recipient) public restricted {

        //Se crea la nueva estructura con los parametros recibidos
        Request memory newRequest = Request({
           description: description,
           value: value,
           recipient: recipient,

           //Se inicializa en falso, puesto que se acaba de crear dicha solicitud y aún no se ha completado
           complete: false,

           //Se inicializa el contador de aprobados en cero.
           approvalCount: 0,

           //Se inicializa el contador de rechazados en cero.
           rejectsCount: 0,

           //Momento de creación de la solicitud
           created: now
        });

        //Se agrega la solicitud recién creada al arreglo de solicitudes del contrato
        requests.push(newRequest);

    }

    //Función llamada por los contribuyentes de la campaña, para aprobar una solicitud, recibe un índice del arreglo de solicitudes para conocer cual solicitud desea votar para su aprobación
    function approveRequest(uint index) public{

        //Localizar la solicitud según el índice
        Request storage request = requests[index];

        //Para que la función continúe su curso natural, es requerido que la dirección que llama la función sea un contribyente
        require(approvers[msg.sender]);

        //También es necesario que la dirección que llama a la función NO haya votado anteriormente
        require(!request.approvals[msg.sender]);

        //La dirección aprobó la solicitud
        request.approvals[msg.sender] = true;

        //Se incrementa la cuenta de votos
        request.approvalCount++;

    }

    //Función llamada por los contribuyentes de la campaña, para rechazar una solicitud, recibe un índice del arreglo de solicitudes para conocer cual solicitud desea votar para su aprobación
    function rejectRequest(uint index) public{

        //Localizar la solicitud según el índice
        Request storage request = requests[index];

        //Para que la función continúe su curso natural, es requerido que la dirección que llama la función sea un contribyente
        require(approvers[msg.sender]);

        //También es necesario que la dirección que llama a la función NO haya votado anteriormente
        require(!request.approvals[msg.sender]);

        //La dirección rechazó la solicitud
        request.approvals[msg.sender] = true;

        //Se incrementa la cuenta de votos
        request.rejectsCount++;

    }

    //Función llamada para dar por finalizada una solicitud, recibe un índice para identificar la solicitud a finalizar, nótese el atributo restricted, sólo puede ser llamada por el gerente
    function finalizeRequest(uint index) public restricted {
        //Identificando la solicitud
        Request storage request = requests[index];

        //Momento en el que se realizo la finalización
        uint finalizedMoment = now;

        //Variable que refleja la validez de la transacción
        bool valid;

        //Si la transaccion tiene más de -cantidad de tiempo- se vuelve inválida
        int transactionTime = int(request.created) +60 - int(finalizedMoment);

        if (transactionTime < 0){
            valid =  false;
        }else{
            valid = true;
        }

        //Es requerido que hayan votado positivamente o negativamente la cantidad establecida de contribuyentes en el constructor ( Variables approvalRate y rejectedRate )
        require((request.approvalCount > (approversCount*(approvalRate))/100) || (request.rejectsCount > (approversCount*(rejectedRate))/100));

        //Es requerido, además, que la solicitud no haya sido marcada como completada
        require(!request.complete);

        //Si la transaccion es válida, se ejecuta normalmente
        if (valid){
            //Si es el caso de aprobación, se traspasa el dinero
            if(request.approvalCount > (approversCount*(approvalRate))/100){

                //Se transfieren los fondos a la dirección destindo
                request.recipient.transfer(request.value);

                //Se marca la solicitud como completada
                request.complete = true;
            }

            //En caso que haya sido rechazada, se finaliza la solicitud sin enviar fondos
            if(request.rejectsCount > (approversCount*(rejectedRate))/100){

                //Se marca la solicitud como completada
                request.complete = true;
            }

        //Si no es válida, se envían los fondos a la direccion destino
        }else{

            //Se transfieren los fondos a la dirección destino
            request.recipient.transfer(request.value);

            //Se marca la solicitud como completada
            request.complete = true;
        }


    }

    //Función que retorna un resumen de la campaña
    function getSummary() public view returns(uint, uint, uint, uint, uint, uint, uint, uint, address){

        //Retornar todos los atributos de la campaña
        return (
          minimumContribution,
          maximumContribution,
          maxContributors,
          this.balance,
          requests.length,
          approversCount,
          approvalRate,
          rejectedRate,
          manager
          );
    }

    //Función que retorna el número de solicitudes
    function getRequestCount() public view returns(uint){
        return requests.length;
    }
}
