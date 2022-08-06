import { Sequelize } from "sequelize";

export default (sequelize)=>{
    class User extends Sequelize.Model{}

    User.init({
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        first_name:{
            type: Sequelize.STRING,
            allowNull: false,
            validate:{
                notNull:{
                    msg: "First name cant be null"
                },
                notEmpty: {
                    msg: "First name cant be empty"
                },
            },
        },
        last_name:{
            type: Sequelize.STRING,
            allowNull: false,
            validate:{
                notNull:{
                    msg: "Last name cant be null"
                },
                notEmpty: {
                    msg: "Last name cant be empty"
                },
            },
        },
        email:{
            type: Sequelize.STRING,
            allowNull: false,
            validate:{
                notNull:{
                    msg: "Email cant be null"
                },
                notEmpty: {
                    msg: "Email cant be empty"
                },
            },
        },
        password:{
            type: Sequelize.STRING,
            allowNull: false,
            validate:{
                notNull:{
                    msg: "Pass cant be null"
                },
                notEmpty:{
                    msg: "Pass cant be empty"
                },
            },
        },
        age:{
            type: Sequelize.INTEGER,
            allowNull: false,
            validate:{
                notNull:{
                    msg: "Age cant be null"
                },
                notEmpty: {
                    msg: "Age cant be empty"
                },
            },
        },
        role:{
            type: Sequelize.STRING,
            allowNull: false,
        }

    },
    {
        sequelize,
        timeStamps: false,
        createdAt: false,
        updatedAt: false
    });

    return User;
}