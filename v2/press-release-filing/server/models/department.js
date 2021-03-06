module.exports = (sequelize, DataTypes) => {
  const Department = sequelize.define('Department', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Department.associate = (models) => {
    Department.hasMany(models.Project, {
      foreignKey: 'DepartmentId'
    });
  };

  return Department;
};