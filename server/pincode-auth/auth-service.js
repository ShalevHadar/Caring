const setStudentPinCode = async (email) => {
  const pin = generatePinCode();
  return new Promise((resolve, reject) => {
    mySql.query(
      `UPDATE students SET pincode = ${pin} WHERE email = '${email}'`,
      (err, results, field) => {
        if (err) {
          reject(err);
        }

        if(results.affectedRows === 0) {
          reject(new Error(`no student with email ${email}`));
        }

        resolve(true);
      }
    );
  })
};

const generatePinCode = () => {
  return Math.floor(1000 + Math.random() * 9000);
};

module.exports = {
  setStudentPinCode,
}