import Sequelize from 'sequelize';

export default(sequelize)=>{
    class Book extends Sequelize.Model{}

    Book.init({
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
    }, {
        sequelize, 
        timestamps: false,
        createdAt: false,
        updatedAt: false
    });

    return Book;
}