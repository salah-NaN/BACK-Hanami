import { Sequelize } from "sequelize";

const sequelize = new Sequelize("hanami", "root", "admin", {
  host: "localhost",
  port: 3308,
  dialect: "mysql",
  define: {
    timestamps: false,
    raw: true
  }

});

async function iniDB() {
  await sequelize.sync({ force: true });
}

// iniDB()


sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


export default sequelize;