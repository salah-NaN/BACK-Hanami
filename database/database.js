import { Sequelize } from "sequelize";

const sequelize = new Sequelize("hanami", "root", "admin", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
  define: {
    timestamps: false,
    raw: true,
  },
});

async function iniDB() {
  await sequelize.sync({ force: true });
}

//iniDB();



sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

export default sequelize;

// Reseñas con actividades
//  Actividades controllers actividad_page
// endpoint get actividad_page/:id
