const pincodeEmailOptions = (data) => {
  return {
    from: "Your best friend",
    to: `${data.email}`,
    subject: "Hey ! this is your pin code for Caring",
    text: `Hi there ! \n this is your pincode please insert it: \n ${data.pincode}`,
  };
};

module.exports = {
  pincodeEmailOptions,
};
