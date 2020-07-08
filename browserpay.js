if(window.PaymentRequest){
    //if it is supported on the user's browser

    // Payment request object
    const supportedPaymentMethods = 
    [
        {
            supportedMethods : ['basic-card']
        }
    ];

    // Payments details (i.e. const/currency)
    const paymentDetails = {
        total: {
            label: 'Total Cost',
            amount: {
                currency: 'GBP',
                value: 30
            }
        }
    }

    // Custon options
    const options = {}

    // Create request
    const paymentRequest = new PaymentRequest(
        supportedPaymentMethods, paymentDetails, options
    );

    paymentRequest.show()
    .then(payment => console.log(payment))
    .catch(error => console.error(error));
}
else{
    //Fallback to your other implementation
}