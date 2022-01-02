const pincodeEmailOptions = (data) => {
  return {
    from: "Your best friend",
    to: `${data.email}`,
    subject: "Caring verification pincode",
    text: `Hi there ! \n this is your pincode: \n ${data.pincode}`,
  };
};

module.exports = {
  pincodeEmailOptions,
};
