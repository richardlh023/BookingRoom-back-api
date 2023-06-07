module.exports = (Sequelize, DataTpyes) => {
  const bookingConfirm = Sequelize.define("bookingConfirm", {
    status: {
      type: DataTpyes.ENUM("PENDING", "ACCEPTED"),
    },
  });
  return bookingConfirm;
};
