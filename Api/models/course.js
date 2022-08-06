import Sequelize from 'sequelize';

export default (sequelize)=>{
    class Course extends Sequelize.Model{}

    Course.init({
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name:{
            type: Sequelize.STRING,
            allowNull: false,
            validate:{
                notNull:{
                    msg: "Name cant be null"
                },
                notEmpty: {
                    msg: "Name cant be empty"
                },
            },
        },
        department:{
            type: Sequelize.STRING,
            allowNull: false,
            validate:{
                notNull:{
                    msg: "Department cant be null"
                },
                notEmpty: {
                    msg: "Department cant be empty"
                },
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        createdAt: false,
        updatedAt: false
    });

    return Course;
}